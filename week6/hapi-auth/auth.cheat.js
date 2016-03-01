'use strict';

var Bcrypt = require('bcrypt');
var Hapi   = require('hapi');
var Basic  = require('hapi-auth-basic');

var server = new Hapi.Server();

server.connection({ port: 3000});

// Note: the password is: "pw"
var users = {
    rob: {
        username: 'rob',
        password: '$2a$04$StLQYCBNqRpJeq6fFLluW.dKaijTSaWvMAbekHy9VKDA3Nz6huR5.',
        name: 'robert',
        id: 1
    }
};

var validate = function (request, username, password, callback) {
    var user = users[username];
    if (!user) { return callback (null, false); }
    Bcrypt.compare(password, user.password, function(err, isValid) {
        callback(err, isValid, { id: user.id, name: user.name});
    });
};

server.register(Basic, function (err) {
    server.auth.strategy('simple', 'basic', {validateFunc: validate});
    server.route ({
        method: 'get',
        path: '/',
        config: {
            auth: 'simple',
            handler: function (request, reply) {
                reply ('hello ' + request.auth.credentials.name);
            }
        }
    });

    server.start( function () {
        console.log('server is running at: ', server.info.uri);
    });
});
