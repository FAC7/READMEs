var redis = require('redis');
var client = redis.createClient();

function addToDb(score, name) {
    client.ZADD('drag race contestants', score, name, function(err, reply) {
        if (err) {
            console.log(err);
        } else {
            console.log(reply);
        }
    });
}

function getData(callback) {
    client.ZRANGE('drag race contestants', 0, -1, function(err, reply) {
        if (err) {
            console.log(err);
        } else {
            callback(reply);
        }
    });
}

module.exports = {
    addToDb: addToDb,
    getData: getData
};
