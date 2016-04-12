## Setting up the boiler plate

Run:

`git clone https://github.com/StephenGrider/ReduxSimpleStarter && cd ReduxSimpleStarter`

Then run:

`npm i` to install the node modules

Change the `start` script in the `package.json` file to run `nodemon` instead of `node` as follows:

remove

`"start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js`

insert

`"start": "nodemon ./node_modules/webpack-dev-server/bin/webpack-dev-server.js`

Lastly run:

`npm start`

And you should see "Redux Simple Starter" appear on the `http://localhost:8080` screen

## Set up a `booksListReducer.js` file in the `reducers` directory

It will be a function which returns an array of book objects

```javascript
export default () => {
  return [
    {title: 'Jungle Book'},
    {title: 'Catcher in the Rye'},
    {title: 'Javascript the good parts'}
  ]
}
```

## Add to this reducer to the rootReducer

Add this function to your `index.js` file in your `reducers` directory as follows:

`index.js`

```javascript
import { combineReducers } from 'redux'
import BooksReducer from './booksListReducer.js'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
```

## Set up the Book List Container

#### Part 1

We create a bookList container which we will show our list of books

Modify your `App.js` file to look like this:

```javascript
import React from 'react';
import { Component } from 'react';
import BookList from '../container/bookList.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
```

We create a `container` folder in the `src` directory and create a `bookList.js` file inside it

We add a mapStateToProps function to allow the BookList class to have the state as its props

We will now check if this is happening with `console.log(this.props.books)`

Your `bookList.js` file should look like this:

```javascript
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

export default class BookList extends Component {
  render() {
    console.log(this.props.books)
    return (
      <h1>Hello World</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
```

And you should be logging the array of objects you are returning from your function in your `booksListReducer.js` file

#### Part 2

We will now map this array of objects to a list on the page

Modify your `bookList.js` file as follows:

```javascript
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends React.Component {
  renderBookList() {
    return this.props.books.map((book, i) => {
      return (
        <li
          key={i}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderBookList()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
```

You should now have a list of books on the screen

## Set up an action to set the state to the selected book

Your `index.js` file in the `action` directory should look as follows:

```javascript
export const selectBook = book => {
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}
```

## Set up an `activeBookReducer.js` file in the `reducers` directory to read the action

It will be a function which returns the payload of the action or the state

```javascript
export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.payload
    default:
      return state
  }
}
```

## Add this reducer to the rootReducer

Add this function to your `index.js` file in your `reducers` directory as follows:

`index.js`

```javascript
import { combineReducers } from 'redux'
import BooksReducer from './booksListReducer.js'
import ActiveBookReducer from './activeBookReducer.js'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer
```

## Further changes to `bookList.js`

We then set up an onClick event to dispatch an action from the `bookList.js` file

We construct a `mapDispatchToProps` function and connect it to the store

Your `bookList.js` file should look as follows:

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book, i) => {
      return (
        <li
          key={i}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
```

## Set up the `bookDetail.js` file in the `containers` directory

We will now set up another container which will display the book which was clicked on from the book list

Your `bookDetail.js` file should look as follows:

```javascript
import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
```

Your app should be up and running!
