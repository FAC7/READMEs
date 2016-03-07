# Types of authentication

## HTTP basic
## HTTP digest
## HTTPS (HTTP over SSL(Secure Sockets Layer))

This mechanism requires the user to possess a Public Key Certificate(PKC).
Client-certificate authentication is a more secure method of authentication.
It is when the client and the server authenticate one another with PKCs.

## Form based Authentication

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

See video for an introduction to what two factor auth is,
see second link for the websites that support it.

References:

* Great introduction to 2 Factor Auth - https://www.youtube.com/watch?v=5ZQ8Pnvt-Ow
* Listing the websites that support two factor authentication - https://twofactorauth.org/
* Concise explanations of the different types of authentication procedures - http://java.boot.by/wcd-guide/ch05s03.html
