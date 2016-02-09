var http = require("http");
var port = process.env.PORT || 8080;
var fs = require('fs');
var stylesheet = fs.readFileSync('./style.css');
var index = fs.readFileSync('./index.html');

function handler(request, response){
  var url = request.url;
  console.log(url);
  if(url === '/style.css'){
    response.writeHead(200, {"Content-Type": "text/css"});
    response.end(stylesheet);
    console.log('style.css has been sent');
  }
  else if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  } else if (url.indexOf("/new_request") > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<link rel='stylesheet' href='./style.css'><h2 class='result'>You made a successful GET request, congrats, so happy for you !!! (and proud)</h2><img src='http://m0.her.ie/wp-content/uploads/2015/04/14214633/success-kid2.jpg' alt='success'>");
  } else {
    response.end();
  }
}

http.createServer(handler).listen(port);
console.log("Server is listening");
