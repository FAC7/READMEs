# Preamble
Welcome to our guide to React Lifecycle Methods.

# Intro
We'll be covering the three React lifecycles, ususally referred to as Mounting, Updating, Unmounting.

The mounting cycle occurs when a component is initialised and first 'mounted' onto the Virtual DOM.

The updating cycle can be broken down into three sub-cycles; Updating properties (which happens when properties are passed to a component), updating state (which happens when the state of a component is updated) or force updating (which happens when forceUpdate is called).

The unmounting cycle occurs when a component is about to be removed from the Virtual DOM.

(Show table)
There are several methods associated with each lifecycle that can be used to affect the behaviour of your UI before or after rendering. These methods are all optional; only the render method is a required method of a React component.

Next we'll cover the methods of each cycle in a bit more detail.

## Cycle 1: Mounting
The mounting cycle calls four methods. The first two, getDefaultProps and getInitialState, are called once during the object initialization and can be used to set default values for the component state and properties. Note that these methods don't work with ES6 style classes.

The next two, componentWillMount and componentDidMount are called once either side of the render, although componentDidMount is only called on the client-side. The state can be changed in componentWillMount using the setState method. If this method is invoked, `render` will see the updated state, but only be executed once, despite the state change. componentDidMount is called immediately after the render, and can be used, for example, to access the DOM, send AJAX requests, or use other JS frameworks.

That's pretty much it for the mounting lifecycle.

## Cycle 2: Updating
The updating lifecycle is a little bit more complex. The three sub-cycles we described earlier share two lifecycle methods. We'll start with these common methods. None of the updating lifecycle methods are called on the initial render, so you should be using mounting lifecycle methods for that.

componentWillUpdate and componentDidUpdate are shared by all updating lifecycles and are called either side of the render. componentWillUpdate can be used to prepare for a UI update, but can't be used to update the state. Similarly to componentDidMount, componentDidUpdate can be used to perform any actions after the Virtual DOM has been updated (AJAX requests, DOM access, and so on).

The updating state lifecycle calls shouldComponentUpdate immediately before componentWillUpdate. This method should return true or false and determines whether the subsequent lifecycle methods are called. That is, you can prevent a component from being re-rendered by returning false.

Lastly, the updating props lifecycle calls the componentWillReceiveProps immediately before shouldComponentUpdate. This method can be used to change the state based on examining the next props object (via the argument) and the current props object (via this.props). Like with componentWillMount, a setState call in this method will not cause an additional render. Note that componentWillReceiveProps is called whenever props are passed to a Component, regardless of whether they are different from before.

## Cycle 3: Unmounting
The unmounting lifecycle consists of only one method: componentWillUnmount. This is called immediately before a component is removed from the Virtual DOM. This event is typically triggered by a call to ReactDOM.unmountComponentAtNode.



## Summary
(Show table again)

## Code-along
...
