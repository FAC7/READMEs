# Request and Response Objects

Request or response objects form a part of a HTTP request or response, it contains the information to be transferred. The object can come in a few different formats, the main ones being XML and JSON.


## Example of a Request Object

A request object will come along with a PUT or POST HTTP request, it will carry the information that you want to change or add to the server. The object can come in a few different formats, the main ones being XML and JSON. The following example shows the same object first in XML format and then in JSON.

```html
<?xml version="1.0" encoding="UTF-8"?>
<authentication-context>
  <username>my_username</username>
  <password>my_password</password>
  <validation-factors>
    <validation-factor>
      <name>remote_address</name>
      <value>127.0.0.1</value>
    </validation-factor>
  </validation-factors>
</authentication-context>
```

```javascript
{
   "username" : "my_username",
   "password" : "my_password",
   "validation-factors" : {
      "validationFactors" : [
         {
            "name" : "remote_address",
            "value" : "127.0.0.1"
         }
      ]
   }
}
```

The advantages of JSON is that it can be more concise as can be seen in the example above.

## Example of a Response Object

A response object will be provided to the client whenever a request is made. When a response comes back, there are two pieces of information to consider:

* HTTP Status code - this tells you at a protocol level what the status of the response is.

* Response Payload - this is the body of the response. It is in a standard format that will give you the application status, the results, and if applicable, any errors.

The following is an example of a successful response.

```javascript
{
    "status": "success",
    "results":[ {
        "lseId": 2756,
        "name":"Georgia Power Co",
        "code":"7140",
        "websiteHome":"http://www.georgiapower.com/"
    }, {
        "lseId":1,
        "name":"City of Augusta",
        "code":"1000",
        "websiteHome":null
    }]
}
```
And here is the response object that you would get if you made an error in the request. It would usually contain information to explain why an error ocurred.

```javascript
{
    "status":"error",
    "type":"Error",
    "results":[{
        "code":"NotNull",
        "message":"An appKey must be supplied",
        "objectName":"requestSignature",
        "propertyName":"appKey"
    }, {
        "code":"NotNull",
        "message":"An appId must be supplied",
        "objectName":"requestSignature",
        "propertyName":"appId"
    }]
}
```
## Further Reading

The following website contains information for a specific API but the concepts can be applied generally -

* https://developer.atlassian.com/display/CROWDDEV/JSON+Requests+and+Responses
