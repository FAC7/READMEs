var http = require('http');

function server(app,port){
    http.createServer(app).listen(port);
    console.log('the server is on and listenting on port '+port+'...');
}

module.exports = {
    initialize: server
}
