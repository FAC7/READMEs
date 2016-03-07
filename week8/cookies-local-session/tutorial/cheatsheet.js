var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 3000
});

server.route([{
    method: 'GET',
    path: '/',
    config: {
        state: {
            parse: true, // parse and store in request.state
            failAction: 'error' // may also be 'ignore' or 'log'
        },
        handler: function(request, reply){
            if(!request.state['firstname']){
                reply('First Visit').state('firstname','Jack');
            } else {
                reply('Welcome back ' + request.state['firstname']);
            }
        }
    }
}]);

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
