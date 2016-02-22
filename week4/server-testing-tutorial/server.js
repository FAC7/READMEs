var http = require('http');
var port = process.env.PORT || 8000;
var fs =require('fs');

function handler(request, response) {
    var url = request.url;
    var method = request.method;

    if (url.length === 1) {
        response.writeHead(200, {"Content-type" : "text/html"});
        fs.readFile(__dirname + '/index.html', function (error, index) {
            response.write(index);
            response.end();
        });
    } else if (url.indexOf('/cat') > -1) {
        response.writeHead(200, {"Content-type" : "text/html"});
        response.write('<h1>CAT PAGE</h1>');
        response.end();
    } else {
        response.writeHead(200, {"Content-type" : "text/html"});
        fs.readFile(__dirname + '/index.html', function (error, index) {
            response.write(index);
            response.end();
        });
    }

    // Add the implementation for what happens when the hypothetical cat button is clicked
}


module.exports = {handler: handler};

http.createServer(handler).listen(port);

console.log('node http is on http://localhost:' + port);
