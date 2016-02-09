var http = require("http");
var port = process.env.PORT || 8080;
var fs = require('fs');
var stylesheet = fs.readFileSync('./style.css');

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
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("<link rel='stylesheet' href='./style.css'>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1 class='FontBulge'>Hello everybody!</h1>");
    response.write("<h3>Click on the button to make a GET request. (I know you can do it)</h3>");
    response.write("<a href='/new_request'><button>CLICK</button></a>");
    response.write("</body>");
    response.write("</html>");
    response.end();
  } else if (url.indexOf("/new_request") > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<link rel='stylesheet' href='./style.css'><h2>You made a successful GET request, congrats, so happy for you !!! (and proud)</h2><img src='http://m0.her.ie/wp-content/uploads/2015/04/14214633/success-kid2.jpg' alt='success'>");
  } else {
    response.end();
  }
}

http.createServer(handler).listen(port);
console.log("Server is listening");
