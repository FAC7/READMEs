
var http = require('http');
var port = 3000;


function handler(clientRequest, clientResponse){
    var url = clientRequest.url;

    if(url.length === 1){

        var options = {
          host: 'api.wordnik.com',
          path: '/v4/word.json/table/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        };


        function callback (apiResponse) {

          var dataRecieved = '';

          apiResponse.on('data', function (chunkOfData) {
            dataRecieved += chunkOfData;
            console.log("chunking Data");
          });

          apiResponse.on('end', function () {
            // clientResponse.writeHead(200, {"Content-Type": "text/html"});
            clientResponse.end(dataRecieved);
          });

      };

        http.get(options, callback);
    }
}

http.createServer(handler).listen(port);
console.log('listening on localhost:' + port );
