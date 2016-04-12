var Hapi = require('hapi');
var Vision = require('vision');
var Handlebars = require('handlebars');
var Boom = require('boom');


var server = new Hapi.Server();


server.connection({
  port: 3000
});

server.register(Vision, function(err){
  server.views({
    engines: {html: Handlebars},
    relativeTo: __dirname,
    path: 'public',
    layout: 'default',
    layoutPath: 'public'
  });

  server.route([{
    method: "GET",
    path: "/",
    handler: function(request, reply){
      reply.view('index');
    }
  },{
    method: "GET",
    path: "/{param*}",
    handler: function(request, reply){
     reply(Boom.badRequest());
    }
  }
]);
});

server.ext('onPreResponse', function(request, reply){
  var resp = request.response;
  if(!resp.isBoom){
    reply.continue();
  }
    reply.view('error', resp.output.payload);

});

server.start(function(err){
  if(err) throw err;
  console.log("server is running");
});
