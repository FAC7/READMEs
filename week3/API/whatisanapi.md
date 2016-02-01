# What is an API?

API is Application Programming Interface. An API is a set of commands, functions, and protocols which programmers can use when building software for a specific operating system. The API allows programmers to use predefined functions to interact with the operating system, instead of writing them from scratch.

In other words, allows one piece of software talk to another.

![API](http://restful-api-design.readthedocs.org/en/latest/_images/scope.png)

There is lots of different types of API  for operating systems, applications or websites.

## What is a [REST API](http://www.restapitutorial.com/lessons/whatisrest.html#)?

REST is a REpresentational State Transfer. It is the software architectural style of the world wide web. REST’s constraints can lead to higher performance and a more maintainable software architecture.
The six constraints that ```REST``` follow are:

* Uniform Interface
* Stateless
* Cacheable
* Client-Server
* Layered System
* Code on Demand (this one is optional)

When a system conforms to the constraints of ```REST``` they can be called ```RESTful```. These systems normally communicate over ```HTTP``` with ```HTTP verbs```, such as, ```GET```, ```POST```, ```PUT```, ```DELETE```. These allow web browsers to retrieve web pages and send data to servers.
The architectural style of ```REST``` was defined by Roy Thomas Fielding in his 2000 PhD dissertation.

## Are all APIs RESTful?
The short answer is no. Most common APIs are currently based on REST but it is not the only type. There are also:


* JSON-RPC: is a remote procedure call protocol encoded in JSON.

* XML-RPC:  is a remote procedure call (RPC) protocol which uses XML to encode its calls and HTTP as a transport mechanism.

* SOAP: is a protocol specification for exchanging structured information in the implementation of web services in computer networks.

## How to make and API request for Facebook?

Go to http://www.facebook.com/youtube and change the ```www```for ```graph```, like this: http://graph.facebook.com/youtube
The Graph API is the primary way to get data in and out of [Facebook's platform](https://developers.facebook.com/docs/graph-api/overview).

You will get something like this:

```
{
   "error": {
      "message": "An access token is required to request this resource.",
      "type": "OAuthException",
      "code": 104,
      "fbtrace_id": "H6fyDISW4gz"
   }
}
```

You get this error because Facebook change the permission on 2015. Most API calls must be signed with an access token.Read more about it [here](https://developers.facebook.com/docs/graph-api/using-graph-api).

The code shown here it's a JavaScript object notation or Json formatted data.

[Programmable Web](http://www.programmableweb.com/), a site that tracks more than 13,000 APIs, lists Google Maps, Twitter, YouTube, Flickr and Amazon Product Advertising as some of the the most popular APIs.
The following list contains more examples of popular APIs:

* [Google Maps API](https://developers.google.com/maps/): Google Maps APIs lets developers embed Google Maps on webpages using a JavaScript or Flash interface. The Google Maps API is designed to work on mobile devices and desktop browsers.

* [YouTube APIs](https://developers.google.com/youtube/): Google's APIs lets developers integrate YouTube videos and functionality into websites or applications. YouTube APIs include the YouTube Analytics API, YouTube Data API, YouTube Live Streaming API, YouTube Player APIs and others.

* [Flickr API](https://www.flickr.com/services/api/): The Flickr API is used by developers to access the Flick photo sharing community data. The Flickr API consists of a set of callable methods, and some API endpoints.

* [Twitter APIs](https://dev.twitter.com/): Twitter offers two APIs. The REST API allows developers to access core Twitter data and the Search API provides methods for developers to interact with Twitter Search and trends data.

* [Amazon Product Advertising API](https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html): Amazon's Product Advertising API gives developers access to Amazon's product selection and discovery functionality to advertise Amazon products to monetize a website.


## Further reading

[Types of API](http://www.slideshare.net/sarahmaddox/api-types)

[API 101 (Also has tutorials)](https://developer.ibm.com/apimanagement/docs/api-101/)

[APIs for dummies](http://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WSM14025USEN&appname=skmwww)

## Recommended videos

[What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY)
