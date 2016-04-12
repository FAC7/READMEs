var Hapi = require('hapi');
var server = new Hapi.Server();

// here we require the cookies plugin that you need to complete
var SessionPlugin = require('./sessionPlugin.js');

server.connection({
    port: 3000
});

// registering the plugin
server.register(SessionPlugin, function(err){
    if (err){
        console.log('error registering');
        throw err;
    }
});

server.start(function(err){
    if( err ){ throw err; }
    console.log('server is listening');
});
