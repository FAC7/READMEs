## KEY FUNCTIONS
### connect
A function used to generate smart components, a.k.a. **container components** ([more about containers here](https://medium.com/@learnreact/container-components-c0e67432e005#.mjj5veqbh)), *rather than writing them out manually*. Connect needs to be invoked like so
```js
connect(func)(ComponentA)
```
where:
* *func* is a function or list of functions
* *ComponentA* is a React component

Two of the most commonly used functions to create container components are *mapStateToProps* and *mapDispatchToProps* (see dedicated sections in this README).

By invoking the ```connect()``` function with mapStateToProps and/or with mapDispatchToProps, the React Component - now a **container** - will be capable of:
* **accessing** high-level **state** as one of its props, as defined by the *mapStateToProps* function
* **updating state**, as defined by the *mapDispatchToProps* function

The connect function can be used after requiring it from the ```react-redux```  module, like so:
```js
import { connect } from 'react-redux'
```

### mapStateToProps
This function allows accessing the state of the high-level component from another child component as one of its own props.

For example, if we defined a property *colour* in our high-level state, we could define:
```js
const mapStateToProps = (state) => {
  colour: state.colour
}
```
and invoke the connect function like so on our *ComponentA*

```js
connect(mapStateToProps)(ComponentA)
```
At this stage, we are capable of access the *colour* state from our ComponentA via ```this.props.colour```.

### mapDispatchToProps
This function allows to **map** Component callback props (functions triggerable at the Component's level) to dispatch functions being triggered to update high-level state.
```js
const mapDispatchToProps = (dispatch) => {
  return {
    property: (param) => {
      dispatch({
        type: 'dispatch-type',
        param
      })
    }
  }
}
```

### bindActionCreators
Before discussing bindActionCreators, it is important to bear in mind that:
* an **Action** is an objects with a *payload* and a *type* property
* an **ActionCreator** is a function which creates an action
* Calling an action **will not dispatch** and change the high-level state.

In order for an action to be **wrapped in a dispatch call**, we will need bindActionCreators

These functions call an action creator and immediately dispatch its result to a specific store instance

**Steps**:
* Define an action creator which returns an action, for example:
```js
const actionCreator = (something) => {
  return {
    type: 'ACTION_TYPE',
    payload: something
  }
}
```
* Import the bindActionCreators function:
```js
import { bindActionCreators } from 'redux'
```
* Invoke it:

```js
bindActionCreators(actionCreator, dispatch)
```
As you may have noticed, it needs the dispatch context so, for a particular component it might be convenient to invoke the bindActionCreators inside of the mapDispatchToProps function:
```js
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreator, dispatch)
}
```

### createStore
This function creates a Redux store that holds the entire high-level state of your React app.
One of Redux's core principles is that there is only one store in the entire app.

Arguments:
* [reducer function](http://redux.js.org/docs/Glossary.html#reducer)
* initial state
* enhancer (e.g. ```applyMiddleware```, check out the docs for applyMiddleware [here](http://redux.js.org/docs/api/applyMiddleware.html))

## REFERENCES
* [Difference between smart and "dumb" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.an3ufucrm)
* Egghead's Getting Started with Redux series see [video 27](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist) for details on connect, mapStateToProps & mapDispatchToProps.
* [Actions & Action creators](http://redux.js.org/docs/Glossary.html#action-creator)
* [bindActionCreators](http://redux.js.org/docs/api/bindActionCreators.html)
* [createStore docs](http://redux.js.org/docs/api/createStore.html)
