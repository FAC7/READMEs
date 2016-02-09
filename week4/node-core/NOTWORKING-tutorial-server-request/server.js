/*
var https = require('https');
var port = process.env.PORT || 3000;
function handler(request, response){
    var url = request.url;

    if(url.length === 1){
        response.writeHead(200, {"Content-Type": "text/html"});




        response.end('<h1>hello</h1>');
    }
}

https.createServer(handler).listen(port);
console.log('listening on localhost:' + port );
*/
var http = require('http');

var port = process.env.PORT || 3000;
function handler(request, response){
    var url = request.url;

    if(url.length === 1){
        console.log('handler has been reached');
        response.writeHead(200, {"Content-Type": "text/html"});
        //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
        var options = {
          host: 'www.random.org',
          path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new',
          port:80,
          method: 'GET'
        };
        var callback = function(response) {
            response.setEncoding('utf8');
          console.log('callback reached');
          var str = '';
          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
            console.log(str);
          });
          //the whole response has been recieved, so we just print it out here
          response.on('end', function () {
            console.log(str);
            response.end();
          });
        };
        http.request(options, callback);
    }
}

http.createServer(handler).listen(port);
console.log('listening on localhost:' + port );
