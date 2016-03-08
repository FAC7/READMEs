// Quick guide:
// get:
// request.state[cookieName]
// set:
// reply.state(cookieName,...)
// del:
// reply.unstate(cookieName)


exports.register = function(server, options, next){
    server.route({
        method: 'GET',
        path: '/',
        config: {
            handler: function(request, reply){
                if(!request.state['firstname']){
                    reply('First Visit').state('firstname','Jack');
                } else {
                    reply('Welcome back ' + request.state['firstname']);
                }
            }
        }
    });
    return next();
};



exports.register.attributes = {
    name: 'cookiesPlugin'
};
