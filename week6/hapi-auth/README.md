# Hapi Authentication

## What is Hapi Authentication
Hapi is a way to build in user authentication and authorisation into your web app. This means restricting access to certain routes unless the user can be verified.

Hapi does this with something called schemes and strategies, which are explained below.

## What are Schemes and Strategies
A scheme can be seen as a "blueprint" for an authentication method, whereas a strategy is a concrete implementation of a particular scheme.

For a more detailed and formal explanation, see the authentication tutorial linked in the references (after you've done the tutorial), and/or look at the API documentation [here](http://hapijs.com/api#serverauthschemename-scheme)

## Tutorial
This tutorial is based on the hapijs authentication tutorial linked in the references (only look at this if you are stuck).

1. Open `./auth.tut.js`. You will see that we have provided you with the basic scaffolding of an authenticated route. Your job is to fill in the commented parts of the code.

2. The `users` is standing in for your database. It is where we have stored information about your one authenticated user. The password field contains the encrypted version of the password, and the plain-text password is included in the comment above the object.

3. First write your `validate` function. You should validate the username, and also check the password that has been entered against the one in the DB object. You have been given a hint to use the `compare` method of Bcrypt, which has the signature:
  ```javascript
  compare(data, encrypted, callback);
  ```

4. Next we are registering our `hapi-basic-auth` plugin with the server object. Under the hood, this registers an authentication scheme by the name of `basic`.

5. Inside our register callback, you need to register an authentication strategy under the `basic` scheme which implements your `validate` function. The code comments contain hints on how to go about this.

6. We will set up our routes such that the user must log in before being able to access `/`. You have been given most of the object, but you need to fill in the `config` object to tell `hapi` which authentication strategy to use and which handler to attach to the route. Again, you have been given a hint and a link to documentation in the code comments to help you do this.

## Stretch Goals
If you finish early:
* (Easier) Choose a different password and update the 'database' with it.
* (Harder) Hook up your authentication scheme to a login form

## References
A list of helpful references:
* The [hapijs authentication tutorial](http://hapijs.com/tutorials/auth)
* A [video](https://www.youtube.com/watch?v=8ZtInClXe1Q) explaining how NOT to store passwords and what *salting* and *hashing* are.

## Cheat Sheet
If you're really, really, really stuck, checkout the cheatsheet in `./auth.cheat.js`.
