# HAPI TESTING
## HOW TO TEST WITH SHOT & TAPE
**Hapi** supports different **test** frameworks. We chose to base this mini-tutorial on **tape**.

### Injecting requests to the server
**Requests** to the server can be mocked (**injected**) with **shot**. *You don't need to require shot*, as it is a built in module with hapi. The syntax
is very similar as in node. See the code snippet below, and try running it as a test file, using the server you built during Monday's workshop.

```javascript
const server  = require('./../server.js');
const tape    = require('tape');

tape('root page responds with 200 status',function(t){
  server.inject( {method:'GET', url: '/'}, function(response){
    t.equal( response.statusCode, 200, 'status Code is correct' );
    t.end();
  });
});

tape('Teardown', function(t){
  server.stop();
  t.end();
});
```
### Differences with node testing in shot
* ```.inject```method is applied on the **server** object, instead of on the shot object. In **Node**, we would have called
```javascript
shot.inject(server.handler, {method:'GET', url: '/'}, function...)
```
. In **hapi**, we call
```javascript
server.inject({method:'GET', url: '/'}, function...)
```
This means, of course, that there is no need to pass the server as a parameter.

* In **hapi** server closes with
```javascript
server.stop();
```
instead of **Node's**
```javascript
server.close();
```

## TESTING PLUGINS
### WHY
Custom made plugins may cause **errors** upon loading them!
It may also be a good idea to test  3rd party plugins if, for any reason, they are not to be fully trusted...   
### HOW
If you were to import the server object in **server.js** containing all routes and handlers, it **would** probably **contain all registered plugins** too.
If you registered all plugins and then got an error, you might have a hard time finding out which of the plugins is causing problems. The solution?

#### Create a new server and register plugins one by one.
The snippet of code below:
* creates a **dedicated test server** with Hapi;
* **requires** a **plugin** and **registers it on the test server**
* **tests for errors** while registering the plugin. This is possible, because the ```.register``` method takes a callback function which takes an error parameter.
```javascript
const Hapi = require('hapi');
const testServer  = new Hapi.Server();
tape('test that Inert plugin loads properly',function(t){
  var Inert   = require('inert');
  testServer.register( Inert, function(error){
    t.ok(!error, 'Inert plugin has loaded correctly');
    t.end();
  });
});
// repeat this test for all plugins
tape('Teardown', function(t){
  testServer.stop();
  t.end();
});
```
