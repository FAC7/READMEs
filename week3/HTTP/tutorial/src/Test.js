// Instructions:
// 1. Create a new XMLHttpRequest object called xhr inside the runTest function:



// 2. Declare a variable called 'response'. We will assign a value later.



// 3. Set up a function using onreadystatechange to check whether the request is
// successful. If readyState is 4 and status is 200 (i.e. if the request is
// successful) run the code: response = JSON.parse(xhr.responseText)
// This will turn the response we get from the server into an object, which we can
// later read with Javascript.



// 4. Make xhr run using the .open method. The server we are querying is the open
// weather map database. We want to *GET* the current weather in London, using the
// URL:  http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8003fbadd5c2e05f9b0170036fc26185
// This will return a JSON string of various info about the weather in London.
// NOTE: The request should be *ASYNCHRONOUS*!! Otherwise the last test will fail.



// 5. Use the .send method to send the request.



// 6. For the final test to pass, make a new variable called result, and assign
// it to response.weather[0].description
// This will extract the description for the weather in London.
// Console.log result, and go to the test window to see the result of your HTTP
// appear in the console.
