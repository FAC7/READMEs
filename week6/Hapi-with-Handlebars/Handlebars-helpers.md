# HandleBars Helper Functions
Handlebars is a logic-less templating engine. The purpose of this, and of any  templating engine, is to keep HTML pages clean and simple and decoupled from  logic-full JavaScript. This allows projects to be easily maintained and scalable. However we still need a way to execute complex logic when using templates.  Handlebars allows us to do this using **Helpers**. These are logic conditional and loops for executing simple logic. There are built-in Helpers which handle the simple logic and you can build your own custom helpers which allow you to  add complex functionality.

## Built-in Helpers
- **Each Helper: {{#each}}**

This is a bit like forEach array method. It allows you to iterate over an array or object. The following example shows how it would be used if you wanted to display a list of items on a page.

```js
var favoriteFruits = {allFruits:["Tangerine", "Mango", "Banana"]};
```

We use the each block inside the script tag which then iterates through the allFruits array in the object above. We use the _this_ keyword inside the list tag to refer to the element in the array.

```html
<script id="fruits-template" type="x-handlebars-template">​
List of fruits:
   {{#each allFruits}}​
    <li>{{this}} </li>​
    {{/each}}
​</script>
```

The resulting HTML will look like this.

```html
<li> Tangerine </li>​
​<li> Mango </li>​
​<li> Banana </li>
```

- **If Helper: {{#if}}**

The if helper works just like a regular if statement, except it does not accept any conditional logic. It checks for truthy values such as true, a non-empty string etc. The block is only rendered if the if evaluates to a truthy value. 

In the following example we check if the userActive property is truthy and if it is the block is rendered.

```html
<div class="user-data">​
{{#if userActive}}​
Welcome, {{firstName}}
{{/if}}
​</div>
```

As mentioned earlier we cannot evaluate conditional logic so the following would not work.

```html
<div class="user-score">​
{{#if userScore > 10 }}​
Congratulations, {{firstName}}, You did it.
{{/if}}
​</div>
```

- **Else: {{else}}**

The else helper is not a block on its own. Rather it is section that can be added to other blocks like the if block. It is basically the opposite of and if block in that the content within it is only rendered if the expression evaluates to falsy.

The following else section will only render if userLoggedIn property is a falsy.

```html
<div class="user-data">​
{{#if userLoggedIn}}​
Welcome, {{firstName}}
{{else}}
Please Log in.
{{/if}}
​</div>
```

As an alternative to else we can use the **Unless Helper: {{#unless}}** which  actually is a block, like if and each. Unless also only renders its content if the expression within it evaluates to a falsy.

There are a few other inbuilt helpers which can be found on the links in the references section.

## Custom Helpers
Custom helpers give us great freedom, in that they allow us to any kind of complex JS logic to them. They have to be registered before the handlebars JS code and they have to be created inside the JavaScript code, not inside the Handlebars template.

There are two different types of custom helpers, a custom **function helper**  and a function **block helper**.

The following shows how to make a custom function helper.

The data object

```html
    var contextObj = {score:85, userName:"Mike"};
```

First, we have to register the custom helper with Handlebars.registerHelper method. This method takes a string (the name of the helper) as the first parameter and a function with any number of parameters as the second parameter.

```js
Handlebars.registerHelper ("theNameOfTheHelper", function (theScore) {
if (theScore >= 90) {
   return "A";
}
else if (theScore >= 80 && theScore < 90) {
   return "B";
}
else if (theScore >= 70 && theScore < 80) {
   return "C";
}
else {
   return "D";
}
});
```
The following is the Handlebars template that uses the custom function helper
```html
<script id="shoe-template" type="x-handlebars-template">​
 {{theNameOfTheHelper score}}
​</script>
```
The HTML output would be:
B

Custom block helper documentation can also be found in the references.

## References

* Awesome [page](http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/) that covers pretty much everything to do with
handlebars in a very clear and concise manner.
