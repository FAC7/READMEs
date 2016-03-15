## Basic understanding of state and props

#### Props

Props (properties) are meant to be passed into our component as static values or methods (which looks a lot like passing an attribute).
```javascript
ReactDOM.render(
  <App txt='this is the props text'/>,
  rootElement
);
```javascript
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
