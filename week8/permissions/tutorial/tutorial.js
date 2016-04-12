var Hapi = require('hapi');
var basic = require('hapi-auth-basic');
var inert = require('inert');
var Path = require('path');
var Bcrypt = require('bcrypt');
var server = new Hapi.Server();
var port = 4000;

var plugins = [ basic, inert ];


server.connection({
    port: port
});

// hard-coded database (passwrods are commented onto end of the line)
var users = {
    danSofer: {
        username: 'danSofer',
        password: '$2a$04$vM9anEfKiYay4uLglhPTZOwKCKwTogMMAGBeKy2qBPyja9fiehNCO', // unencrypted: 'founderofcoders'
        scope: ['danSofer','upstairs','fac7'] //Will be authorised to access all 3 scopes
    },
    upstairs: {
        username: 'upstairs',
        password: '$2a$04$773qHw2lDnmocyG.v32ueOybodh6jMERLVaSxRfIJMKjFcBWNK3Dq', // unencrypted: 'middlemanagement'
        scope: ['danSofer','upstairs','fac7']
        //change the scope array to only allow access to the 2 correct scopes
    },
    fac7: {
        username: 'fac7',
        password: '$2a$10$XWkwz2Pdt0ydjCW9UQMK1OrbO3u4oTeNv3OoclrXm.3zpaCiQemj2', // unencrypted: 'saplings'
        scope: ['danSofer','upstairs','fac7']
        //change the scope array to only allow access to the correct scope
    }
};

function validate(request, username, password, callback) {
    var user = users[username];
    if (!user) { return callback (null, false); }
    Bcrypt.compare(password, user.password, function(err, isValid) {
        callback(err, isValid, {/*this object will need to store info relevant to authorisation scope*/});
    });
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
    },
    // Each route that requires authorisation will also require authentication
    {
        method: 'GET',
        path: '/fac7',
        config: {
            auth: {
                strategy:   'simple',
                //enter a key value pair that will allow to the correct scope
            },
            handler: function (request, reply) {
                var fac7 = Path.join(__dirname, './public/fac7.html');
                reply.file(fac7);
            }
        }
    },
    {
        method: "GET",
        path: "/upstairs",
        config: {
            auth: {
                strategy:   'simple',
                //enter a key value pair that will allow to the correct scope
            },
            handler: function (request, reply) {
                var upstairs = Path.join(__dirname, './public/upstairs.html');
                reply.file(upstairs);
            }
        }
    },
    {
        method: "GET",
        path: "/dan",
        config: {
            auth: {
                strategy:   'simple',
                //enter a key value pair that will allow to the correct scope
            },
            handler: function (request, reply) {
                var dan = Path.join(__dirname, './public/dan.html');
                reply.file(dan);
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
