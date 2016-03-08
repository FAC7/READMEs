var Hapi = require('hapi');
var server = new Hapi.Server();

// here we require the cookies plugin that you need to complete
var cookies = require('./cookiesPlugin.js');

server.connection({
    port: 3000
});

// registering the plugin
server.register(cookies, function(err){
    if (err){
        console.log('error registering');
        throw err;
    }
});

// get:
// request.state[cookieName]
// set:
// reply.state(cookieName,...)
// del:
// reply.unstate(cookieName)

server.start(function(err){
    if( err ){ throw err; }
    console.log('server is listening');
});
