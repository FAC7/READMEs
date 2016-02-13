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

#### http.get(options[, callback])

Since most http requests are get requests, we can use the http.get method.  It is similar to http.request, except that the method is set to 'GET' and there is no need to end the request (because the get request has no body).

```js
var http = require('http');

var options = {
  host: 'api.example.com',
  path: '/foo'
};

var callback = function(apiResponse){
  var dataReceived = '';

    apiResponse.on('data', function(chunk){
      dataReceived += chunk;
    });
    apiResponse.on('end', function(){
        console.log(dataReceived);
        //do something with dataReceived
    });

});

http.get(options, callback);
```

#### http.request(options[, callback]);

Is similar to the .get method, but can be used to post, get etc. and it must be ended once the apiRespone is finished.


Let's step into the http.js module to see what the http.get method actually exports:
```js
exports.get = function(options, cb) {
  var req = exports.request(options, cb);
  req.end();
  return req;
};

//so all it does is call the http.request method (which has http method defaulted to 'GET'), and ends the request for you.

```


## Take a look at the tutorial provided.


### References:
[Node docs](https://nodejs.org/api/http.html)

[Nodejitsu](https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request)
