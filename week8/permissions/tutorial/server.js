var Hapi = require('hapi');
var hAuthorize = require('hapi-authorization');
var basic = require('hapi-auth-basic');
var inert = require('inert');
var Path = require('path'); // a module that creates file paths based on the current directory
var server = new Hapi.Server();
var port = 4000;

var plugins = [hAuthorize, basic, inert];

var roles = ['danSofer', 'upstairs', 'fac7'];

server.connection({
    port: port
});
var users = {
    danSofer: {
        username: 'danSofer',
        password: '$2a$04$vM9anEfKiYay4uLglhPTZOwKCKwTogMMAGBeKy2qBPyja9fiehNCO ', // unencrypted: 'founderofcoders'
        role: 'danSofer'
    },
    upstairs: {
        username: 'upstairs',
        password: '', // unencrypted: 'middlemanagement'
        role: 'upstairs'
    },
    fac7: {
        username: 'fac7',
        password: '', // unencrypted: 'sapplings'
        role: 'fac7'
    }
};
function validate(request, usename, password, callback) {

}

server.register(plugins, function(err) {
    server.auth.strategy('simple', 'basic', {
        validateFunc: validate
    });

    if (err) {
        console.log(err);
        throw err;
    }
    server.route([{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            var homepath = Path.join(__dirname, './public/home.html');
            reply.file(homepath);
        }
    }, {
        method: 'GET',
        path: '/fac7',
        config: {
            auth: 'simple',
            handler: function (request, reply) {
                var fac7 = Path.join(__dirname, './public/fac7.html');
                reply.file(fac7);
            }
        }
    }]);
});

server.start(function(err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("your server is running fresh at ", server.info.uri);
});
