# What is an HTTP status code and what are the most common ones?

This is what is stored in the XMLHttpRequest.status property. It tells you what the response to your request is. It is always a 3-digit code, starting with **1, 2, 3, 4, or 5**. This list shows what the first digit usually indicates, as well as some of the more common specific response codes that you will see. A full list is available under 'Resources' at the bottom.

* **1**** --- server has received your request, is working on it.

* **2**** --- the action requested by the client was received, understood, accepted and processed successfully. e.g.
 * **200**: "OK" --- this indicates that the request was successful.
 * **201**: "Created" --- this indicates the request was successful and a resource was created (e.g. with PUT or POST).

* **3**** --- further action is required by the client. e.g.
 * **301**: "Moved Permanently" --- this request and all future requests should be redirected to the given URI.

* **4**** --- there has been an error (probably on client side). e.g.
 * **403**: "Forbidden" --- the server can be reached and understood the request, but refused to take further action
 * **404**: "Not found" --- client could communicate with the server, but server could not find what was requested.

* **5**** --- error with the server. It can't respond to the request.

 # Resources
 * [List of all Return Values](https://msdn.microsoft.com/en-us/library/ms767625) (MSDN)
