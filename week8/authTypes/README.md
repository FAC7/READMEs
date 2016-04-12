# Types of authentication

## HTTP Basic

HTTP Basic, as its name implies, is the simplest form of authentication. It is based on a username and password, provided by the user to the server. The web server can then authenticate the client. The main drawback of HTTP Basic authentication is that it is not very secure at all. The passwords are not encrypted when being sent to the server meaning that any naughty person can intercept them mid-journey.


## HTTP Digest

Much like HTTP Basic, Digest authentication is based on a username and password. Its point of difference is that it transmits the password in an encrypted form, making it a lot more secure. It also supports the concept of digesting user passwords. This means that the stored version of the passwords are encoded in a form that is not easily reversible, but that can still be used by the server for authentication, i.e. they have been digested.

## HTTPS (HTTP over SSL(Secure Sockets Layer))

This mechanism requires the user to possess a Public Key Certificate(PKC).
Client-certificate authentication is a more secure method of authentication.
It is when the client and the server authenticate one another with PKCs.

## Form Based Authentication

When a user attempts to access a protected web resource, the container checks the user's authentication. If the user is authenticated and possesses authority to access the resource, the requested web resource is activated and a reference to it is returned. If the user is not authenticated, all of the following steps occur:

1. The login form associated with the security constraint is sent to the client and the URL path triggering the authentication is stored by the container.

2. The user is asked to fill out the form, including the username and password fields.

3. The client posts the form back to the server.

4. The container attempts to authenticate the user using the information from the form.

5. If authentication fails, the error page is returned using either a forward or a redirect, and the status code of the response is set to 200.

6. If authentication succeeds, the authenticated user's principal is checked to see if it is in an authorized role for accessing the resource.

7. If the user is authorized, the client is redirected to the resource using the stored URL path.

8. The error page sent to a user that is not authenticated contains information about the failure.

## Two Factor Authentication

Two Factor authentication differs from the other types of authentication in that it is based on something the user knows (like a password) but also something that they have. Objects used for authentication include card readers, authentication USB keys, and even their own phone. We have all used two factor authentication, when we sign up to a service and they ask our phone number to send a verification code to. The video in the references gives a good intro to 2Auth, and there is also a page that lists all sites that support it.

References:

* Great [introduction](https://www.youtube.com/watch?v=5ZQ8Pnvt-Ow) to 2 Factor Auth.
* [Listing](https://twofactorauth.org/) of the websites that support two factor authentication.
* [Concise explanations](http://java.boot.by/wcd-guide/ch05s03.html) of the different types of authentication procedures.
