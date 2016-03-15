## Great understanding of state and props

#### Props

Props (properties) are meant to be passed into our component as static values or methods (which looks a lot like passing an attribute).
```javascript
ReactDOM.render(
  <App txt='this is the props text'/>,
  rootElement
);
```
We can define the property types that we are expecting by adding a property to our component called proptypes, and that's just going to be an object where each key of the object is the name of our property, and then we pass in the type from React that we're expecting.
```javascript
App.PropTypes = {
  txt: React.PropTypes.string
}
```
OR we can also define default properties, again by setting a property on our class component.
```javascript
App.defaultProps =  {
  txt : 'this is the defauld text'
}
```

#### State
 State is a collection of values that's meant to be managed by our component itself. To initialize it, we need to create a constructor method.
 ```javascript
 constructor() {
   super();
   this.state = {
     txt: 'this is the state text'
   }
 }
 ```
 The way we can access that is very similar to accessing props:
 ```javascript
 render() {
   return <h1>{this.state.txt}</h1>
 }
 ```
If we wanted to manage that state, we could create a custom method called update that is going to take in an event.
```javascript
update(e) {
  this.setState({txt: e.target.value})
}
```
```javascript
render() {
  return (
    <div>
      <input type='text' onChange={this.update.bind(this)} />
      <h1>{this.state.txt}</h1>
    </div>
    );
}
```

## Props VS States

- | _props_ | _state_ |
--- | --- | ---
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No


## When to use state

Use states (this.state) to manage dynamic data.

Most of your components should simply take some data from props and render it. However, sometimes you need to respond to user input, a server request or the passage of time. For this you use state.

Try to keep as many of your components as possible stateless.

A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.

**State should contain data that a component's event handlers may change to trigger a UI update.**

```javascript
class Slider extends React.Component {
  render() {
    return (
        <div>
          <input type='text' onChange={this.update.bind(this)} />
          <p>{this.state.txt}</p>
        </div>
      );
  }
}
```
In the above function, whatever the user types into the input box will be displayed on the screen, as shown below.

<img width="240" alt="react-input" src="https://cloud.githubusercontent.com/assets/8175545/13784514/7c7e4850-eac7-11e5-98bb-6a33bff04813.png">


## When to use props
#### ( the rest of the time )

Use props (this.props) to access parameters passed from the parent.


## References

Video:       
[Introduction to properties](https://egghead.io/lessons/react-introduction-to-properties)                 
[React state basics](https://egghead.io/lessons/react-state-basics)         
Article:       
[interactivity and dynamic uis](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html)
