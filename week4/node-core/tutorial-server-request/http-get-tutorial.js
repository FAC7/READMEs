/*
In this tutorial we will set up a node server using the http module from the node core modules.
We will set up a specific rout which if the user navigates to, will fire an http.get
request to a differnt API (we will be using Wordnik's API).
In this instance, our server will be acting as a client and the wordnik API will be acting
as the server.  When we receive a response from Wordnik's API we will then have to set up a
response to the client/user which will be achieved using a callback function.

    Useful links:
    wordnik's api documentation: http://developer.wordnik.com/docs.html#!/word
    Sign up to wordnik so you can get your own api key (in the settings menu once you are signed in)
    node's http module documentation: https://nodejs.org/api/http.html


If you are stuck, you can check the cheat-sheet file.
*/


/*

First we want to require the http module and save it as a variable called http.

Next we want to define a port which our server will be listening on.
So save the number 3000 as a variable named port.


Now we define our handler function that will be used by our server.
the handler should take two parameters, clientRequest and clientResponse.


    The first insinde the function should store a variable called url. Set it to clientRequest.url;
    Next we set up our routing: if the length of the url is 1, then we will make the api call.
    Else we can console.log some error message and call clientResponse.end();

    Now we can set up our API call inside the if statement.
    According to the Node documentation, an http.get() request takes two parameters,
    an options object and a callback function to be called when the apiResponse is ready
    to come back to our server.

    create an object called options. It will have 2 properties: host & path.
    The host will store a string that directs to the wordnik API, which can be found on their website.
    the path will direct to the specific endpoint that you have chosen, as well as some parameters.
    One parameter is the api key.  The api key below is a public api key but you may need to replace this
    with your own. To get your own, sign up at http://developer.wordnik.com/ and find the api key in your settings

    host: 'api.wordnik.com'
    path: '/v4/word.json/table/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

    next we will define the callback function.
    The function needs to take 1 parameter which we can call apiResponse

        first define a variable called dataRecieved and set it to an empty string.
        Next we will add an event listener to the apiResponse variable which will
        stream the chunks of data in from the API and add each chunk to the dataRecieved variable.

        apiResponse.on('data', function (chunkOfData) {
          dataRecieved += chunkOfData;
          console.log("chunking Data");
        });

        Then we add an event listener to listen for an 'end' event.
        When this end event is emitted by the api response, we can end
        our clientResponse and include the data from the API.

        apiResponse.on('end', function () {
          clientResponse.end(dataRecieved);
        });

    Now we can create the http.get() request, passing it options and callback as parameters

finally we use the same http variable to create a server, passing it the handler as a parameter
and calling .listen() on it with the port that we saved as a parameter.

In your terminal you can run node filename.js
head over to http://localhost:3000/ and hopefully receive a response from wordnik's api.


*/
