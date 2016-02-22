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
    }
    if (url.match('/add')) {
        var score = url.split('score=')[1].split('&')[0];
        var name = url.split('name=')[1];
        redisFunctions.addToDb(score, name);
    }
}

var server = http.createServer(handler).listen(port, function() {
    console.log('listening on port: ' + port);
});
