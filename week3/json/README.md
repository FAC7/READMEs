<!-- >>> Jack and Francesco -->


<!-- >>> Elias and Ellie -->


### Structuring JSON
TBD

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
Browsers enforce something called the *same origin policy* which prevents javascript accessing data from domains other than the one it is loaded from.

Often, however, you do need to access resources from other domains. This can be done by configuring Cross-Origin-Resource-Sharing (or CORS), which you should [read about](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), but also using something called JSONP (or JSON with padding). This is described below.

The 


### Links and Resources
TBD
