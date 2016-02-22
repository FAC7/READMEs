var redis = require('redis-mock');
var clientMock = redis.createClient();
var redisjs = require('./redis.js');

var tape = require('tape');

var clientReal = require('./client.js');


tape('create data set', function(t){
    redisjs.addToDb(clientReal,"silly dances", "ivan", "frog-squat", function (answers){
        var expected = 'OK';
        // 'OK' is the response from redis if we successfuly added
        var result = answers;
        t.equal(result, expected,  "successfuly created hashset");
        t.end();
    });
});

tape('create data set', function(t){
    redisjs.addToDb(clientMock,"silly dances", "drake", "the leg shake", function (answers){
        var expected = 'OK';
        // 'OK' is the response from redis if we successfuly added
        var result = answers;
        t.equal(result, expected, "successfuly created hashset");
        t.end();
    });
});


tape('hgetall returns a saved object', function(t){
    var expected = { drake : "the leg shake" };
    var result;
    redisjs.getData(clientMock, 'silly dances', function(reply){
        result = reply;
        t.deepEqual(result, expected, 'yayyy');
        t.end();
    });
});
