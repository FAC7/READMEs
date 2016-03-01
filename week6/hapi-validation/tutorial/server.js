"use strict";
const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();
const Inert = require('inert');

server.connection({
	host: 'localhost',
	port: 3000
});

server.register(Inert, (err) => {
	server.route([{
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('./public/index.html');
		}
  }, {
		method: 'POST',
		path: '/numbers',
		handler: (request, reply) => {
			console.log(request.payload);
			reply.redirect('/');
		},
		config: {
			validate: {
				payload: {
					number: Joi.number()
				}
			}
		}
	}]);
});

server.start((err) => {
	if (err) throw err;
	console.log(`server is running at: ${server.info.uri}`);
});
