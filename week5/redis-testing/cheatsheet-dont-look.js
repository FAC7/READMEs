var tape = require('wrapping-tape');
var redis = require('redis');
var client, tests = {};

function listWriter(client, listName, someArray) {
    client.rpush(listName, someArray);
}

function errorMaker(client, callback) {
    client.hget('giraffe', 7, callback);
}


tests.module1 = tape({
    setup: function(t) {
        client = redis.createClient();
        client.select(3, function(){console.log('connected to db number 3');});
        t.end();
    },
    teardown: function(t) {
        client.flushdb();
        client.end();
        t.end();
    },
});

tests.module1('test can write list to db', function(t) {
    var someArray = ['1','2','3','4','5'];
    var listName = 'testList';
    listWriter(client, listName, someArray);
    client.lrange(listName, 0, -1, function(error, reply) {
        t.ok( ! error, 'assert error is empty' );
        t.deepEqual(someArray, reply, 'assert array is as expected');
        t.end();
    });
});



tests.module2 = tape({
    setup: function(t) {
        client = redis.createClient();
        client.select(3, function(){console.log('connected to db number 3');});
        client.lpush('giraffe', 0);
        t.end();
    },
    teardown: function(t) {
        client.flushdb();
        client.end();
        t.end();
    },
});

tests.module2('', function(t) {
    errorMaker(client, function(error, reply) {
        t.ok(error);
        t.equal(error.command, 'HGET', 'assert method is hget');
        t.equal(error.code, 'WRONGTYPE', 'assert error code is "WRONGTYPE"');
        t.end();
    });
});
