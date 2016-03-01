///use strict;

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 8080
});

// *** goodOption object goes here ***

// *** register good *** //
server.register({}, function(err) {
  // *** set your routes ***
});

server.start(function(err){
  if (err) {
    throw err;
  }

  console.log("server is running at: " + server.info.uri);
});
