//1. First run npm install
var tape = require('tape');

// The first section of the tutorial does not use mocking, the second part does.
// Take a look at the client.js and the redis.js files. You shouldn't need to touch these files.
var redisjs = require('./redis.js');
var clientReal = require('./client.js');


// First we will create a test, using a real client
// This will initialise a hashset called 'silly dances'. Take a look at the redis.js addToDb function to see what it does.
tape('create data set', function(t){
    redisjs.addToDb(clientReal,"silly dances", "ivan", "frog-squat", function (answers){
        var expected = 'OK';
        // 'OK' is the response from redis if we successfuly added
        var result = answers;
        t.equal(result, expected, "successfuly created hashset");
        t.end();
    });
});
// type node tutorail.js to run this file.
// now close the redis server.
// type "redis-cli" on your terminal, so we can make sure the hashset has been created
// type "keys *" into your terminal
// is "silly dances" there?
// type "hgetall 'silly dances'"
// is "ivan" and his "frog-squat" there?

// This could be a problem as you have just changed your real database in a test

// Next we will be looking at using a mock client so your real database is not affected by tests.

// First require the redis-mock module
// then create the clientMock variable by calling .createClient() on the redis-mock module.

// Now you are going to do another add redisjs.addToDb but using the mock client.
// the parameters should be (clientMock, "silly dances", "drake", "the leg shake", callback);




// now call the redisjs.getData() using the mock client.
// The parameters should be (clientMock, "silly dances", callback)
// dont forget that hgetall will return an object,
// so use t.deepEqual()
// You should see that drake's dance is added to the hash




// now look at your redis-cli. Is drake's silly dance there?
// (it shouldn't be as we were mocking the real client teehee)
