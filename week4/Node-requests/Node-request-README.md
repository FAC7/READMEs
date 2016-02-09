# Node Request

## What

You can make HTTP requests to your server using the Node.js api: ```html.request```

## How

A request message to your server takes the following format:


* A __Request-line__

* Zero or more header fields followed by CRLF

* An empty line (i.e., a line with nothing preceding the CRLF)
indicating the end of the header fields

* message-body [optional]

### More on the Request-line

The request-line consists of 3 things:
 - a method e.g. GET
 - the URI
 - the protocol and its version e.g. HTTP/1.1

#### Useful methods

| Method  | Description  |
|---|---|
|GET|The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.|
|HEAD|Same as GET, but transfers the status line and header section only.|
|POST|A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.|
|PUT|Replaces all current representations of the target resource with the uploaded content.|
|DELETE|Removes all current representations of the target resource given by a URI.|
|CONNECT|Establishes a tunnel to the server identified by a given URI.|
|OPTIONS|Describes the communication options for the target resource.|
|TRACE|Performs a message loop-back test along the path to the target resource.|

## The response

There are 5 categories for response from the server:
1. __Informational__ - the request has been received and the process is continuing
2. __Success__ - the request was successfully received, understood and accepted
3. __Redirection__  - further action must be taken in order to complete the request
4. __Client Error__ - the request contains incorrect syntax or cannot be fulfilled
5. __Server Error__ - the server failed to fulfill an apparently valid request

## References

* [HTTP Request](http://www.tutorialspoint.com/http/http_requests.htm)
* [How to create a HTTP request](https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request)
