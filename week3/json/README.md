<!-- >>> Jack and Francesco -->


<!-- >>> Elias and Ellie -->


### JSON Javascript Methods
There are only two methods in the JSON module of Javascript:

* `JSON.parse()`
* `JSON.stringify()`

##### `parse`
The `JSON.parse` method parses a string as JSON. It optionally transforms the value produced by parsing.

```javascript
JSON.parse(text[, reviver])
```
Parameters:
* text - string that is to be parsed as JSON.
* reviver - this parameter is optional. A function that prescribes how the value originally produced by parsing is transformed before being returned.

This method throws a syntax error if the string to parse is not a valid JSON.

###### Examples

```javascript
JSON.parse('{"a": [1, 5], "b": "false"}')
// this returns { "a": [1, 5], "b": "false"}
JSON.parse('{"p":5}', function(k, v) {
    if(k=== '') {return v;} // if topmost, value return it
    return v * 2; // return the unchanged property value
}) // returns {"p": 10}
```


##### `stringify`
The `JSON.stringify` is the dual method of `JSON.parse`. It performs the opposite transformation; from a JSON or Javascript object to a serialized representation.

```javascript
JSON.stringify(text[, replacer[, space]])
```
Parameters:
* text - string that is to be parsed as JSON.
* replacer - (optional) a function that alters the stringification process, or an array of `String` and `Number` objects that serve as a whitelist of keys to include.
* space - (optional) a `String` and `Number` object to insert whitespace in the string representation.

This method returns `undefined` if the input cannot be parsed.

###### Examples

```javascript
JSON.stringify({"a": [1, 5], "b": "false"})
// this returns '{ "a": [1, 5], "b": "false"}'

function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {a: "foo", b: "bar", c: 45, d: [1]};
var jsonString = JSON.stringify(foo, replacer);
// returns '{"c": 45, "d": [1]}'
```

### JSONP
#### Problem
Browsers enforce something called the [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) which prevents javascript accessing data from domains other than the one it is loaded from.

Often, however, you do need to access resources from other domains. This can be done by configuring Cross-Origin-Resource-Sharing (or CORS), which you should [read about](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), but also using something called JSONP (or JSON with padding). This is described below.

#### Solution

There is one item that bypasses this limitation: the `<script>` tags. When the script tags are used the domain limitation is ignored. Under normal circumstances, one cannot do anything with the results and the script is evaluated.

This is where JSONP is useful. When you make your request to the server which has JSONP enabled, you can pass a parameter which tells the server about your page.

```
http://www.example.net/sample.aspx?callback=mycallback
```

The server then wraps its response in a call to the function that you pass it.    

```javascript
typeof mycallback === 'function' && mycallback({... some data ...})
```

Without JSONP, the returned JSON object would be parsed by the browser, but remain unassigned and therefore unusable. By including the callback, you can manipulate the data from the server response.

##### Example
```html
<body>
    <script type="text/javascript">
        var container;
        function mycallback(o) {
            container = o;
            console.log(container);
        }
    </script>
    <script type="text/javascript" src="http://mapit.mysociety.org/postcode/SW1A1AA?callback=mycallback"></script>
</body>
```


### Links and Resources
* [MDN page for JSON module](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) is useful. Read it.
* [JSONP Wiki Page](https://en.wikipedia.org/wiki/JSONP): Pay special attention to the security issues at the bottom.
* [JSONP Stackoverflow](http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about): Simpler description of JSONP
