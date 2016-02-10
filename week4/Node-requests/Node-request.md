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

## Example

A GET request retrieves data from a web server by specifying parameters in the URL portion of the request.        
The following example makes use of GET method to fetch hello.htm:
```
GET /hello.htm HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```
The server response against the above GET request will be as follows:

```
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
ETag: "34aa387-d-1568eb00"
Vary: Authorization,Accept
Accept-Ranges: bytes
Content-Length: 88
Content-Type: text/html
Connection: Closed
```

```<html>
<body>
<h1>Hello, wonderful people!</h1>
</body>
</html>```

# Tutorial

1. clone this repository
2. in your terminal, go to the "Node-requests" directory
3. run "$ node simple-server.js"
4. in your browser, go to "localhost:8080"
5. Read through and then start building yours with the files in the folder Build your server


## References

* [HTTP Request](http://www.tutorialspoint.com/http/http_requests.htm)
* [How to create a HTTP request](https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request)
