var Hapi = require('hapi');
var Inert = require('inert');//This is used to server files
var HomePlugin = require('./homePlugin');//This is the link to our plugin
//remember to npm install these

var server = new Hapi.Server();

server.connection({
    port: 3000
});

//registering homePlugin now changes to registering Inert and HomePlugin
server.register([Inert, HomePlugin], function(err){
    if(err){
        throw err;
    }
});

server.start(function(err){
    if(err){
        throw err;
    }
    console.log('server running at: ' + server.info.uri);
});
//console.log server.info to see what other information this holds
