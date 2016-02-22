var redis = require('redis');
var client = redis.createClient();

function addToDb(score, name) {
    // add information to add the score and name to the sorted set 'drag race'
}

function getData(callback) {
    // add information here to display the sorted set on the DOM
}

module.exports = {
    addToDb: addToDb,
    getData: getData
};
