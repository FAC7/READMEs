# MANAGING STATE IN REACT

## REDUX (similar in other frameworks too...)
<!-- Changes in Redux are explicit. -->
The state of the entire application is contained in a single read-only **state object**, the "*state tree*".

To change a state, an action needs to be dispatched. **Dispatch actions** are objects describing the change to the data.

Each time a state is supposed to change, a function called the **reducer** will take the current state and a dispatch action, and return a new state object. The reducer must be a "pure" function (one which does not modify the "outside world").

## STORES
Redux has a core method, **createStore**, which creates a store object with the following methods, managing state and dispatch actions:
* **getState** - returns the current state
* **dispatch** - fires a dispatch action
* **subscribe** - adds a listener which runs a **callback** *as soon as an action has been dispatched*.
* **unsubscribe** - removes listener from the subscribed listeners associated to a specific dispatch action.

### FLOW
* **-->** Component **subscription** to event/dispatch-action
* **-->** **Event** (e.g. button-click)
* **-->** **dispatch action**
* **-->** subscription recognizes the dispatch action **-->**  fires the **callback** to all "subscribers" (listeners).

### OTHER FRAMEWORKS
Redux is very popular. However, the following frameworks will also manage state.

* [Relay](https://facebook.github.io/relay/)
* [Flux](https://facebook.github.io/flux/docs/overview.html) (pre-cursor of Redux, becoming less popular)

## REFERENCES
* [**Do not view this at your own risk!!!**](https://egghead.io/series/getting-started-with-redux)
