# HTTP

HTTP stands for _**H**yper**t**ext **T**ransfer **P**rotocol_. It is used every
time your computer gets (fetches) resources from a server.

![](https://abcnetworking.wikispaces.com/file/view/client%20server.jpg/371921010/client%20server.jpg)

The client sends a request for some resource (e.g. 'Get me the index.html file')
and the server sends back a response (e.g. 'Here's the file').

### Parts of an HTTP Request

The parts of an HTTP request are what is sent from the client to the server
each time an HTTP request is sent.

1. *The Request Method (see below)*: Tells the server the type of action a client
wants to perform.
1. *URI (Uniform Resource Indicator)*: Specifies the address of the required
resource. It is the string used to identify a resource e.g. the string 'likes'
for Facebook's graph API would retrieve the number of likes for a page.
1. *Header Fields*: Optional headers can be used which tell the server extra
information about the request e.g. Client software and content type that it
understands.
1. *Body*: Provides information sent by the client to the server.

### HTTP Request Methods

HTTP defines methods which indicate the action you want performed on given
resource.

| Method | Description |
| ------ | ----------- |
| GET | Retrieves information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.|
| HEAD    | Same as GET, but transfers the status line and header section only (no body). |
| POST    | Sends data to the server, for example, customer information, file upload, etc. using HTML forms. |
| PUT     | Similar to put, but replaces existing content at the specified URI, or creates a new resource is none exists. |
| DELETE  | Removes the resource at the target URI. |
| CONNECT | Establishes a tunnel to the server identified by a given URI. Often used when there are firewalls or secure connections |
| OPTIONS | Describes the communication options/requirements for the target resource or capabilities of the server. This does not retrieve resources, or perform any actions on the resource. |


### Resources

[What is an HTTP Request?](http://rve.org.uk/dumprequest)  
[Get vs Post Methods](http://www.w3schools.com/tags/ref_httpmethods.asp)  
[HTTP Methods](http://www.tutorialspoint.com/http/http_methods.htm)
