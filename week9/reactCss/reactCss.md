# CSS with React

## Intro
Style can be broken down into 3 main concepts:
* Layout: how an element or component looks *in relation to others*.
* Appearance: the *characteristics* of an element or component.
* Behaviour / State: how an element looks *in a given state*.

## When to use inline styling?
* When styling elements involved in state and behaviour.

## Inline styling

Inline styles are specified as an object. Keys are in camel case and and values are usually a string. But Vendor prefixes other than ms should begin with a capital letter. e.g. WebkitTransition
```

            inlineStyle = {
            color: 'blue',
            fontSize: '12em'
        };

```
To apply styling to an element set its style tag to the name of the object, inside curly brackets.
```
render(){
  return(
    <div>
      <h1 style={inlineStyle}>Hello World</h1>
    </div>
    )
}
```

## References
* [Stack OverFlow best practices with CSS in react](http://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices)
* [react docs on inline styling](https://facebook.github.io/react/tips/inline-styles.html)
* [understand how to use and build a webpack](http://webpack.github.io/docs/using-loaders.html)
* [Michael Chan - Inline Styles: themes, media queries, contexts, & when it's best to use CSS](https://www.youtube.com/watch?v=ERB1TJBn32c)
* [React: from Noob to Pro](https://www.youtube.com/watch?v=NHzUPnRwqXY)
* [React: CSS in JS by Christopher "vjeux" Chedeau](https://speakerdeck.com/vjeux/react-css-in-js)
* [Medium Article: Modularise CSS the React way](https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04#.irubo4epp)
* [Facebook inline-styles](https://facebook.github.io/react/tips/inline-styles.html)


## NPM modules
* [color NPM module docs - use for inline color manipulation](https://www.npmjs.com/package/color)
* [classnames NPM module docs - use to chain classes together inline](https://www.npmjs.com/package/classnames)
* [css-loader NPM module docs - use to load a css file per component](https://www.npmjs.com/package/css-loader)
