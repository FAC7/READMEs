# Permissions
## Let's get a few things straight...
* Authentication : validating that a user really is who they claim to be.
* Authorization : the permissions of the user and what they have access to.

## Read this *before* doing the tutorial...
* Implementing different levels of administration in an application requires a combination of authorization **and** authentication.
* After requiring modules and creating your Hapi server, you'll need to declare your authentication strategy like so:

```javascript
server.auth.strategy(‘simple’, ‘basic’, {
  validateFunc: validate
});
```
* Now the strategy is set up, it can be used by any route in our server.
* Make sure you create the `validate()` function - we've use the Bcrypt plugin to check the payload in the response contains the correct email and password (Joi is also a possibility here).
* When setting up those super-secure server routes, remember to include an `auth` object within the `config` object.
* This `auth` object should contain the strategy and the scope the user should have access to.
```javascript
server.route({
  method: ‘GET’,
  path: ‘/example’,
  config: {
    auth: {
      strategy: 'simple',
      scope: 'user'
    },
    handler: function(request, reply) {
     return reply('Success, you can access a secure route!');
    }
  }
});
```


## References
* [The Medium post we got our info from - definitely worth a read!](https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec#.caf0hk60a)
