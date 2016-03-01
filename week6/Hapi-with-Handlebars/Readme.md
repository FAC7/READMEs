#### As a popular templating engine, I nomminate *Handlebars*

### What are Handlebars ¿

Handlebars is a template processor that dynamically generates your HTML page. It helps you create guidelines and structures that dictate how the site should look without focusing on a page's data.

### How does it create a basic template for your site ¿

Handlebars will generate your HTML by taking a JSON structure and running it through a template. These templates are written mostly in regular HTML, and are peppered with placeholders that allow you to inject data. So, you end up with a string that has the values from the object properties inserted in the relevant places, and you insert that string as HTML on the page.

Simple example:
```javascript
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```

### Why should we use it ¿
You should use a JavaScript templating engine like Handlebars.js because... 

- building a template encourages you to separate the logic-based code from the actual view, helping you adhere to a View/Controller pattern.
- templates keep your code clean and maintainable, which, in turn, makes the process of updating your site a breeze.
- client-side templating executes faster than server-side templating.
- it is one of the most advanced, feature-rich, and popular of all the JavaScript templating engines, and it has the most active community.

## References
[An introduction to handlebars](http://code.tutsplus.com/tutorials/an-introduction-to-handlebars--net-27761)             
[Handlebars](http://handlebarsjs.com/)         
[Javascript is sexy : learn everything about handlebars](http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/)
