# What is an API key?
* A form of user name / password.
* A unique identifier that stores information about:
    * the calling program (your website / software)
    * the program developer (the username you choose when signing up for the API)
    * specific access rights (the restrictions in place for any request e.g. how many tweets can you make per day?)
* Tracks and controls use of an API to avoid abuse.
* A way of filtering access rights.

In a nutshell:
> "The name given to a secret token submitted alongside a web request in order to identify its origin."

# How would you conceal an API key?
## What's the issue?

* Your code needs the API key to make a request.
* But if your key is visible in your code someone could nick it!
* They could then do bad things with it :scream:
* If your key is stored in client side JavaScript, a malicious hacker could just open up the dev tools and inspect your code :disappointed:

## How can we hide the key? (back end)
* A very basic example could be a piece of code on the server that looks like this:

```js

var apiKey = 'superTopSecretApiKey';

function getApiKey (username, password) {
    if (username === Tom_Upton && password === 12345678) {
        sendRequest();
        return getApiResults();
    } else {
        return 'Access denied, hands off our key!';
    }
}

```
* The API key could be a private variable
* The server processes the request and then sends the results back to the client
* The client would never see the key (unless the server was hacked)

<!-- ```js
aReallyNiceObject.getApiKey(username, password);
```
* The client must provide the correct username and password for total access. -->

## Front end concealment?
* Basically it's very difficult! You kind of need a server to keep anything private. Here are a couple of methods that could be used:

### Synchronizer Token Pattern (STP)
* Embed the API key into the HTML of a web app so that it can be validated server-side.
* The key is uniquely encrypted each time a new page is visited (e.g. using a [hash chain](https://en.wikipedia.org/wiki/Hash_chain)).
```html
<input type="hidden" name="apiKey" value="12345678" />
```
* Pros: the immediate key is kept from prying eyes.
* Cons: not user-friendly - re-encryption of the key for each page makes for a slow internet experience (multiple browser tabs are unsupported).

### Cookie-to-Header Token

This a similar technique, but instead of relying on embedding the key in the HTML, the key is embedded via a cookie and validated via the server.

* The server is a bit like a bouncer at a club. If you didn't get a (cookie) stamp then you ain't coming in!!

# What are the different types of API authentication?

* ### Passwords are out!
* ### OAuth is in!

# Three main types of API authentication:

1. Username and password
2. OAuth access token
3. Two-factor authentication

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenIDvs.Pseudo-AuthenticationusingOAuth.svg/512px-OpenIDvs.Pseudo-AuthenticationusingOAuth.svg.png)


# References
* [Wikipedia: API](https://en.wikipedia.org/wiki/Application_programming_interface_key)
* [StackOverFlow: what is an API key?](http://stackoverflow.com/questions/1453073/what-is-an-api-key)
* [ProgrammableWeb: A list of popular APIs](http://www.programmableweb.com/)
* [Securing API Keys in a Client Side JavaScript App](http://billpatrianakos.me/blog/2013/09/12/securing-api-keys-in-a-client-side-javascript-app/)
* [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy)
* [StackOverFlow Keeping API keys secret in client side JavaScript](http://stackoverflow.com/questions/7847121/how-to-keep-api-keys-secret-when-using-client-side-javascript)
* [OAuth Wikipedia](https://en.wikipedia.org/wiki/OAuth)
* [An Introduction to OAuth (in plain English)](http://blog.varonis.com/introduction-to-oauth/)
