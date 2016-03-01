## Validation Tutorial -JOI

To use Validation you first have to set up a server using HAPI.

open up the terminal and run :
* npm init, this will generate a package.json file for you.
* npm install --save hapi this installs hapi, and saves it in your package.json as a dependency.


Firstly, require HAPI at the top of the page, and create a new hapi server object. Add a server connection passing in a port number, and add server.start to start the server.

```javascript
'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
```



server.register
* npm install --save inert this is for static files which will be dealt with elsewhere in a different README,

* npm install --save joi will install joi to your .json,
this needs to be **required**.

and add a server.route to the server
```javascript
server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name + '!');
    },

    server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});
```




## Validation

Validating data can be very helpful in making sure that your application is stable and secure. hapi allows this functionality by using the module joi.


The first type of validation hapi can perform is input validation. This is defined in the config object on a route, and is able to validate headers, path parameters, query parameters, and payload data.


Within the route add the property config to validate a numbers param.

as a stretch goal checkout out the different type of methods of the joi module and see if you can add validation for

* A string
* Minimum 3 letters
* Maximum 20 letters
* Only include alpha numeric characters
* Lower case
