import React from 'react';
import BookList from '../containers/book-list.js'
import BookDetail from '../containers/book-detail.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
