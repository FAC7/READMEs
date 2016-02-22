// the following 3 variables are required to run the test suite.
// tape is the framework that is used and contains the different testing methods (e.g. equal)
// server is necessary to link the code that you are testing
// Shot is used for simulate an http request
var tape = require('tape');
var server = require('../server.js');
var Shot = require('shot');

// the first string in the () tells you what you are testing, and is followed by a callback function
// the 't' in function(t){} is the parameter used with tape
// the Shot.inject is what simulates the http request and tells you the method to simulate, and the expected url
// in function(res){}, res is the response return from the server
// res.statusCode returns a number representing the status code - 200 means good stuff
// the request must be stopped with t.end();
tape('check if server returns homepage', function(t) {
    Shot.inject(server.handler, {method: 'GET', url:'/'}, function(res) {
        t.equal(res.statusCode, 200, 'Success!');
        t.end();
    });
});

tape('check if there is a cat page', function(t) {
    Shot.inject(server.handler, {method: 'GET', url:'/cat'}, function(res) {
        t.equal(res.rawPayload.toString(), '<h1>CAT PAGE</h1>', 'Success!');
        t.end();
    });
});