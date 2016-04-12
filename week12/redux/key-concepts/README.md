# Reducer functions
A reducer accepts state and action as arguments and returns the new state (reduced state).  It is a pure function meaning it does not modify the previous state but takes the previous state, the action being dispatched and returns the new state of the app.

### Example of a reducer function
```js
  const counter = (state = 0, action) => { //state = 0 defines the default state
  switch (action.type) {
    case 'INCREMENT':   // if the action.type is 'INCREMENT' we want to add
      return state + 1
    case 'DECREMENT':   // if the action.type is 'DECREMENT' we want to minus
      return state - 1
    default:
      return state      // always include a default case which returns the state as it is
  }
}
```

It is good practice to separate reducer functions into different files
### combine reducers function
Your app will contain more than one reducer, combine them all using the redux function **combineReducers**

In your reducers folder, name a file index.js and combine reducers in here. Don't forget to export your reducer functions.
```js
import { combineReducers } from 'redux'
import reducer1 from './reducer1'
import reducer2 from './reducer2'

const rootReducer = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2
})
export default rootReducer
```
[See here for a file containing all reducers in the example ToDo app](https://github.com/reactjs/redux/blob/master/examples/todomvc/reducers/todos.js)



# Action object
The state can only be changed by an action.  An action is a plain js object describing a change. It must have property of **type** which should be set to an upper-case string value.

Action objects are returned by functions so we can adapt them depending on circumstances

Example action object which will specify the index of something in state that we want to change:

```js
const increase = (index) => {
  return {  
    type: 'INCREMENT',
    index: index
  }
}
```

[See here for a file containing all actions in the example ToDo app](https://github.com/reactjs/redux/blob/master/examples/todomvc/actions/index.js)


[Dan Abramav's first 7 Egghead videos explain this well](https://egghead.io/series/getting-started-with-redux)
