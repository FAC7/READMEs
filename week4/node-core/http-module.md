# Key methods of http module.

#### http.createServer([requestListener])
```js
var http = require('http');
var server = http.createServer(handler);
//var server now holds a 'server object' which has some methods.
//listen is one of these methods.
server.listen;
```

Alternatively written as:
```js
http.createServer(handler).listen;
```
#### http.request(options[, callback])
If your server needs to make http requests to other servers or APIs, we can use the http.request. Options object will include the url, http method. The callback function is optional (ie if POSTing) and will be called when the response is ready.

```js
var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'www.nodejitsu.com',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '1337',
  //This is what changes the request to a POST request
  method: 'POST'
};

//this function will be called when the response is ready to start streaming
callback = function(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world!");
req.end();
```


#### http.get(options[, callback])

Since most http requests are get requests, we can use the http.get method.  It is similar to http.request, except that the method is set to 'GET' and there is no need to end the request (because the get request has no body).

```js
var http = require('http');

var options = {
  host: 'example.com',
  port: 80,
  path: '/foo.html'
};

var callback = function(response){
  response.on('data', function(chunk){
    //do something with chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

http.get(options, callback);
```

Now step into the http.js module to see what the http.get method actually exports:
```js
exports.get = function(options, cb) {
  var req = exports.request(options, cb);
  req.end();
  return req;
};
//so all it does is call the http.request method (which has http method defaulted to 'GET'), and ends the request for you.
```

### References:
[Node docs](https://nodejs.org/api/http.html)

[Nodejitsu](https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request)


### Further http methods:
http.globalAgent();
Read about it in the node documentation above.
