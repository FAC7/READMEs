var http = require('http');
var fs = require('fs');
var redisFunctions = require('./redis.js');
var port = 8000;

function handler(req, res) {
    console.log('handler');
    var url = req.url;
    if (url === '/') {
        var index = fs.readFileSync(__dirname + '/public/index.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(index);
    } else if (url.indexOf('/add') > -1) {
        var score = url.split('score=')[1].split('&')[0];
        var name = url.split('name=')[1];
        // call your redis function here to add to the database
        


        res.end();
    } else if (url.indexOf('/display') > -1) {
        // call your redis function here to get Data from the database



    } else if (url.indexOf('.') > -1) {
        var file = fs.readFileSync(__dirname + url);
        var ext = url.split('.')[1];
        res.writeHead(200, {'Content-type': 'text/' + ext});
        res.end(file);
    }
}

var server = http.createServer(handler).listen(port, function() {
    console.log('listening on port: ' + port);
});
