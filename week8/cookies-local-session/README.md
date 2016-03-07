# Cookies / Local / Session storage

## Cookies

`Cookies` were invented by [Netscape](https://en.wikipedia.org/wiki/Netscape) to give ***memory*** to servers and browsers.

`Cookies` are data, stored in small text files, on your computer. They can be viewed in the `resources` tab in your browser developer tools.
When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user. If the user returns to the page, cookies allow the server to 'remember' the user and information about them.

So if you come to the same web page a second, third time... x times the server once again considers it the very first time you ever came there.

`Cookies` are very easy to mantain and very versatile.

## Hot it works?
This is the data you can find on the text files:

+ `name-value` pair containing the actual data
+ `expiry date` after which it is no longer valid
+ The `domain` and path of the server it should be sent to

If you would like to learn more about `name-value`, `expiry date` and `domain`, click
[here](http://www.quirksmode.org/js/cookies.html).

The way you set these data also matter. The order should be:

```
key-value;expiration_date;path;domain;

```

The following example shows a `cookie` that is accessible in all the `paths` of the `domain`, and has just one `key-value` pair.

```
visits=3; path=/;

```

The following example shows a `cookie` that is accessible in all the `paths` of the `domain` (by default), and expires on March 07, 2016 at 11 a.m..

```
last-visit=Mon, 01 Mar 2016 19:36:00 GMT; expires=Wed, 07 Mar 2016 11:00:00 GMT;
```

## document.cookie
We use `document.cookie` property in `JavaScript` to create, read, and delete cookies. See the following example of how to create a cookie:

```javascript
document.cookie="username=Mireia SThomas";
```

For more examples click [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

## Local storage
With `local storage`, web applications can store data locally within the user's browser.

##  Session Storage
The `sessionStorage` property allows you to access a session Storage object.

`sessionStorage` is similar to [Window.localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage), the only difference is while data stored in `localStorage` has no expiration set, data stored in sessionStorage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated, which differs from how session cookies work.

Example of syntax:
```javascript
// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

```



## Conclusion: understanding the differences
`Cookies` **only** allows you to store strings.

`sessionStorage` and `localStorage` allow you to store JavaScript primitives but *not Objects or Arrays* `Session storage` will generally allow you to store any primitives or objects supported by your Server Side language/framework.

Unlike `cookies`, the `localStorage` storage limit is far larger (at least 5MB) and information is never transferred to the server.
