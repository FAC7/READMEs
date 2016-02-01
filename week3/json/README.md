# JSON

## WHAT IS JSON
JSON (**J**ava**S**cript **O**bject **N**otation) is universally accessible format, which uses **human-readable** text to transmit data objects of **attribute-value** pairs.

## WHY?
It is the **most widely used** asynchronous browser-server data-exchange format, largely replacing XML due to:
 * **Readability** / accessability(see example below);
 * **Speedy** translation of server response (in key-value pairs);
 * Improved page loading time (JSON has **asynchronous loading** capability);
 * **Data manipulation** (functions and loops can be used on JSON objects).
 * Some **social media** APIs (e.g. **Twitter**, Flickr, etc.) **only** work effectively with **JSON**

## HOW IS JSON USED BY APIs?
 * Client-side API **requests data** from servers.
 * Servers-side API **responds with a string** JSON-formatted strings**.
 * Client **converts response string into JSON** via the [```JSON.parse()``` function](json-api-ex.md) (speedy translation of the data the API requested).
 * Data can be **easily accessed as key-value pairs**.

 ```javascript
 var response = '{"name": "Francesco Moro", "street" : "Palmers road"}',
     // JSON format is an object in a string
     obj      = JSON.parse(response);
     // parses the string into an object
 ```
 ```javascript
     // will return
     {
         "name": "Francesco Moro",
         "street" : "Palmers road"
     }
 ```
 ```javascript
     obj.street             // will return
     "Palmers road"
 ```


( Adding ``` ```json ``` and ``` ```xml ``` will produce their respective markdowns)

#### This is  JSON:
``` json
{
  "version": "1.0",
  "encoding": "UTF-8",
  "feed": {
    "xmlns": "http://www.w3.org/2005/Atom",
    "xmlns$openSearch": "http://a9.com/-/spec/opensearchrss/1.0/",
    "xmlns$gd": "http://schemas.google.com/g/2005",
    "xmlns$gCal": "http://schemas.google.com/gCal/2005",
    "id": {"$t": "..."},
    "updated": {"$t": "2006-11-12T21:25:30.000Z"},
    "title": {
      "type": "text",
      "$t": "Google Developer Events"
    },
    "subtitle": {
      "type": "text",
      "$t": "The calendar contains information about upcoming developer
       conferences at which Google will be speaking, along with other
       developer-related events."
    }
}
}
```

#### And this is the equivalent in XML:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<feed xmlns="http://www.w3.org/2005/Atom"
    xmlns:openSearch="http://a9.com/-/spec/opensearchrss/1.0/"
    xmlns:gd="http://schemas.google.com/g/2005"
    xmlns:gCal="http://schemas.google.com/gCal/2005">
  <id>...</id>
  <updated>2006-11-12T21:25:30.000Z</updated>
  <title type="text">Google Developer Events</title>
  <subtitle type="text">The calendar contains information about upcoming
    developer conferences at which Google will be speaking, along with
    other developer-related events.</subtitle>
```


![readability](../assets/readability.jpg)

Which one is more readable?

## DIFFERENCES BETWEEN REGULAR OBJECTS AND JSON
In JSON:
 * The following Data types are not supported:
    * Function
    * undefined
    * regular Expressions(REGEX)
    * Date
    * Error
 * Inheritance / Prototype Behaviour
 * Keys are strings

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
