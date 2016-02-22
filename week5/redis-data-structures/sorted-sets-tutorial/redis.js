var redis = require('redis');
var client = redis.createClient();

function getData() {
    //add information to add the score and name to the sorted set 'drag race'
}

function displayData() {
    // add information here to display the sorted set on the DOM
}

module.exports = {
    getData: getData,
    displayData: displayData
};
