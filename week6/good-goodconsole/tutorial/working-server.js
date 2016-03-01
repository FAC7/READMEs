//'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();

  server.connection({
    port: 8080
  });

  var goodOptions = {
    reporters : [{
      reporter: require('good-console'),
      events: {response: '*'}
    }]
  };

  server.register({
    register: require('good'),
    options: goodOptions
  }, function(err){

    //put multiple routes in an array
      server.route([
      {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
          //server.log('error', "this is an error");
          reply('This is your homepage'); // this is the wrong path to index.html. Good-console should log an error
        }
      },
      {
        method: 'GET',
        path: '/about',
        handler: function(request, reply) {
          reply('This is your about page');
        }
      }
    ]);
  });

  server.start(function(err){
    if (err) {
      throw err;
    }

    console.log("server is running at: " + server.info.uri);
  });
