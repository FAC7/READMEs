exports.register = function(server, options, next){
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            reply.file('./index.html');
        }
    });
    return next();
};

exports.register.attributes = {
    name: 'home'
};
