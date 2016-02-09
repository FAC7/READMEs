var http = require("http");
var port = process.env.PORT || 8080;

function handler(request, response){
  var url = request.url;
  if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("<a href='/new_request'><button>Make a GET request</button></a>");
    response.write("</body>");
    response.write("</html>");
    response.end();
  } else if (url.indexOf("/new_request") > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h2>You made a successful GET request, congrats , so happy for you !!! (and proud)</h2><img src='' alt='success'>");
  } else {
    response.end();
  }

}

http.createServer(handler).listen(port);
console.log("Server is listening");
