# Cookies / Local / Session storage

## Cookies

`Cookies` were invented by [Netscape](https://en.wikipedia.org/wiki/Netscape) to give ***memory*** to servers and browsers.

`Cookies` are data, stored in small text files, on your computer. They can be viewed in the `resources` tab in your browser developer tools.
When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user. If the user returns to the page, cookies allow the server to 'remember' the user and information about them.

So if you come to the same web page a second, third time... x times the server once again considers it the very first time you ever came there.

`Cookies` are very easy to mantain and very versatile.

## Hot to check Cookies, localStorage and sessionStorage in Chrome?
Go to Developer tools or `alt - cmd - i` if you have a mac.



## Local storage (only client side)
With `local storage`, web applications can store data locally within the user's browser.

##  Session Storage (only client side)
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
