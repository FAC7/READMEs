var http = //**fill in the gap**
var port = //**set your port**
//**you need the fs module so that your browser can make requests for files** e.g. css files

var stylesheet = fs.readFileSync('./style.css');
var index = fs.readFileSync('./index.html');

function handler(request, response){
//**store the url**
  //Once the html has been received the browser sees the link tag with href="/style.css".
  //the url is then set to "/style.css". So it requests the css file from the server.
if(url === '/style.css'){
    response.writeHead(200, {"Content-Type": "text/css"});
    response.end(stylesheet);
  }
  //when the browser is first loaded, the url is '/'.
  //A request for the html is sent to the server.
  else if(url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index);
  }
  //when the url contains /new_request the browser sends a new request.
  //The server responds.
  else if (url.indexOf("/new_request") > /*fill in the gap*/) {
    /*complete the missing line*/
    response.end("<link rel='stylesheet' href='./style.css'><h2 class='result'>You made a successful GET request, congrats, so happy for you !!! (and proud)</h2><img src='http://m0.her.ie/wp-content/uploads/2015/04/14214633/success-kid2.jpg' alt='success'>");
  } else {
    response.end();
  }
}

http.createServer(/*fill in the gap*/).listen(/*fill in the gap*/);
console.log("Server is listening. Open your browser to localhost:"+port);
