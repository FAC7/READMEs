var server      = require('./server');
var routing     = require('./routing');

server.initialize(routing.app,3000);
