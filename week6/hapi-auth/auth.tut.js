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
    // Here is where you validate the username and password
    // We used Bcrypt to encrypt our password. See the documentation here:
    // https://www.npmjs.com/package/bcrypt
    // Hint: Use the compare method.
};

server.register(Basic, function (err) {
    // Here is where you register a strategy under the scheme 'basic'
    // Look up server.auth.strategy for the code that will go here
    // See: http://hapijs.com/api#serverauthstrategyname-scheme-mode-options
    server.route ({
        method: 'get',
        path: '/',
        config: {}
        // Fill in the config object.
        // This object will need to contain the handler function
        // and specify which authentication strategy to use
        // See: http://hapijs.com/api#route-options
    });

    server.start( function () {
        console.log('server is running at: ', server.info.uri);
    });
});
