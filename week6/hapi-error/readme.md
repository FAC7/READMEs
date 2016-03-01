# Hapi Error-Handling

## Intro
* Hapi deals with errors internally by wrapping them in a Boom object.

## Boom
* Boom customises the output content of errors and returns them in an object.
* Each Boom output object contains the following properties:

`isBoom` - if true, indicates that an error is present.

`message` - the error message.

`output` - the formatted response which can be directly manipulated after object construction to return a custom error response.

`statusCode` - the HTTP status code (typically 4xx or 5xx).

`headers` - an object containing any HTTP headers where each key is a header name and value is the header content.

## Payload
* This is the formatted object used as the response payload (stringified).
* It Can be directly manipulated but any changes will be lost if reformat() is called.
* The default content is as follows:

`statusCode` - the HTTP status code, derived from error.output.statusCode.

`error` - the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode.

`message` - the error message derived from error.message.

## Boom and the Hapi server
* Including the following code in the server file will produce a Boom object:
```javascript
server.route({
    method: 'GET',
    path: '/badRequest',
    handler: function (request, reply) {

        return reply(Boom.badRequest('Unsupported parameter'));
    }
});
```


## Tutorial
* Open the tutorial folder and complete the tutorial.js file to include a preRequest extension that will produce a friendly html error page.

## References
* [Boom documentation](https://github.com/hapijs/boom)
* [Error response in Hapi](https://github.com/hapijs/hapi/blob/master/API.md#error-response)
* [Extension life-cycle events video](https://egghead.io/lessons/node-js-hapi-js-extending-the-request-with-lifecycle-events)
* [Creating a friendly html page error video](https://egghead.io/lessons/node-js-hapi-js-friendly-error-pages-with-extension-events)
