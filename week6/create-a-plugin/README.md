# Creating a plugin for Hapi


## Plugins in general
There is a huge list of Hapi plugins that are available as npm modules and can provide bits of functionality. Vision and Inert were two that we have used. This tutorial is focused on creating plugins in your project as a way of modularising your code.


## Creating plugins in your project
One way to use plugins in Hapi is to separate your app into 'sections' which will contain the route and the functionality that route is supposed to hold.

In the server.js file:

```js
var CustomPlugin = require('./customPlugin.js'); //First letter is a capitalised
server.register([ plugin1, plugin2, ... , CustomPlugin ], function(err){
    if (err){
        throw err;
    }
});
```

Your plugin file (eg home.js):
```js
exports.register = function(server, options, next){
    // the functionality of your plugin goes in here
    // this is run when you run server.register in server.js
    // we will set up a response to the '/' endpoint
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            reply('You made it to home');
        }
    })

    return next();
    // this tells the server to move onto registering the next plugin.
}

exports.register.attribute = {
    name: 'Home'
}
// you need this in your plugin - not sure what this does but possibly for error purposes
```

Your task is to implement a server.js file, a homePlugin.js file and an index.html file. Your homePlugin.js should contain the route '/' and serve back the index.html file using reply.file('./filename') you will need to npm init and install hapi and inert

Also see Simon's (aka le 'api professeur) [simple server](https://github.com/SimonLab/simpleServer/tree/master/lib)
 - Home, Click and Data are his plugins
 - start.js is the entry point for the app
 - index.js contains the server initialise function as well as registering his plugins.
