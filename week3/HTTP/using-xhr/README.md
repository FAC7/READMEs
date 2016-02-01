# How do you use XHR to query APIs?

XHR stands for XML Http Request. This is actually an object (built-in for all modern browsers) that can be accessed by its name: XMLHttpRequest. It has a whole array of methods available to it in order to interact in different ways with a server. Note the odd capitalisation (XML is all caps, but only the 'H' of Http is).

Here is a simple example of how you can make an XML request:

```javascript
var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function() {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
      document.getElementById("demo").innerHTML =
      myRequest.responseText;
    }
};
myRequest.open("GET", "xmlhttp_info.txt", true);
myRequest.send();
```

[You can see it in action here.](http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first)

Read through the code to get an impression of the structure and what's going on. Then read this step-by-step walk-through of the different parts:

1. `var myRequest = new XMLHttpRequest();` --- this creates a new instance of the XHR object, which you can then use to query a server or file of your choice.

2. `myRequest.onreadystatechange = function() {...}` --- this method of the XHR object enables you to store a function which will be called automatically each time the `readyState` property of the `myRequest` object changes. [More here.](http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)

3. `if(myRequest.readyState == 4 && myRequest.status == 200){...}` --- every time the `readyState` property changes, the function will check if these two functions are met:
 1. `myRequest.readyState == 4` --- the `readyState` property changes from 0 to 4 as the request is processed. 0 means the request is not initialised, while 4 means the request is finished and the response is ready. However, the response might be that the request hasn't found what it was meant to, which is why we also need:
 2. `myRequest.status = 200` --- this property is only valid after the send method returns successfully. It will return a 3-digit status code starting with 1, 2, 3, 4, or 5, indicating what the result of your request was. The code `200` means 'OK', while `404` is notoriously the code for 'Not found'. [Full list here, under 'Return Values'.](https://msdn.microsoft.com/en-us/library/ms767625)
4. `document.getElementById("demo").innerHTML =
myRequest.responseText;` --- this is the code that will run if the request is successful. You can replace it with whatever you want to happen. In this case it writes the responseText received from the request to an HTML element.
5. `myRequest.open("GET", "xmlhttp_info.txt", true);` --- the [open method](https://msdn.microsoft.com/en-us/library/ms757849) is important. Here it takes 3 parameters:
 1. *bstrMethod*: What you want to do (in this case, "GET" something).
 2. *bstrUrl*: The requested URL (in this case "xmlhttp_info.txt", i.e. a file path) - in many cases this will be the URL of the server you are querying.
 3. *varAsync* (optional): whether the call should be asynchronous or not. False means it waits for a response from the server. The default value is true, which allows you to execute other scripts while waiting for the response. This is generally preferable.
6. `myRequest.send();` --- this method sends the request to the server. Use this after setting up the XHR with the .open() method. If you are GETting, it takes no parameter, but if you are POSTing, it may take a parameter of the string you wish to post.

# Further Info
* Old IE browsers don't have the XMLHttpRequest object. You can get around this by using the following format when creating your XHR:
```javascript
var myRequest;
if (window.XMLHttpRequest) {
    // code for most browsers
    myRequest = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

# Resources
* [W3Schools Guide to AJAX](http://www.w3schools.com/ajax/default.asp) --- the whole thing is useful, but in particular:
    * [W3Schools Guide to the XMLHttpRequest Object](http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp)
    * [W3Schools Guide to Sending a Request to a Server](http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp)
* [You don't need jQuery to make Ajax requests!](http://blog.garstasio.com/you-dont-need-jquery/ajax/)
