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
    method: // select the method
    path: // and the path
    handler: function(request, reply){
      // make the handler take the client to the index page
    }
  },{
      // now you'll need to fill in the error handling pathway:
    method: // select the method
    path: // choose the path such that Hapi will handle any bad request made by the client
    handler: function(request, reply){
     reply(//select the Boom wrapper you want the reply to contain. Check the Boom docs
     //for a full range of options or use Boom.badRequest() if you're feeling uninspired
        );
    }
  }
]);
});

server.ext('onPreResponse', function(request, reply){
  var resp = request.response;
  // Write an if statement that checks the isBoom value.
  // Depending on what that value is, you should either continue with the reply ....
  }
  // or view the reply using reply.view(). You should include 2 params: 1st the error file and
  // 2nd the payload value

});

server.start(function(err){
  if(err) throw err;
  console.log("server is running");
});
