var client = require('./client.js');

function addToDb(client, name, key, value, callback){
  client.HMSET(name, key, value, function(err, reply) {
    if (err){
        console.log('rerere');
      callback (err);
    } else{
        console.log(reply);
      callback (reply);
    }
  });
}

function getData (client, name, callback){
  client.HGETALL(name, function(err, object){
    if (err){
        callback(err);
    }
    else {
        callback(object);
    }
  });
}

module.exports = {
  addToDb: addToDb,
  getData: getData,
};
