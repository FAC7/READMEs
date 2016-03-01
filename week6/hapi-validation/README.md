# Hapi Validation with Joi

### What is Joi?

+ Joi is a module for the Hapi framework that handles validation.
+ Joi makes validation in Hapi a dream!

### But what is validation and why is it useful?

Say you have a html form:

```html
<form action="/number" method="post">
  <input type="text" name="magic-number">
  <button type="submit"></button>
</form>
```

+ You'd like the user to submit a number (let's call it `"magic-number"`)
+ But the user could put anything they like in your form, they could put a string, a number, a div, a script

#### You want to check that the user has inputted a number and not anything else!

This is where joi comes in
![joi](https://camo.githubusercontent.com/9c20f86ee4df5f043a36e0bfc1ff6f5bc40e8401/68747470733a2f2f7261772e6769746875622e636f6d2f686170696a732f6a6f692f6d61737465722f696d616765732f6a6f692e706e67)![joi-2](https://camo.githubusercontent.com/575791dedbd0f604aeda72ab878464bf4b0f0a9f/68747470733a2f2f7261772e6769746875622e636f6d2f686170696a732f6a6f692f6d61737465722f696d616765732f76616c69646174696f6e2e706e67)
+ (on a side note, what do you think joi's logo is supposed to be? Some sort of sqashing paddle?  :persevere::question::persevere::question:)

Joi lets you easily check information heading to the server and handle errors.

In our `/number` handler on our server we need to add in a config property. This will then hold our validation requirements:

```js
server.route({
  method: 'POST',
  path: '/number',
  handler: function(request, reply) {
    reply.redirect('/')
  },
  config: {
    validate: {
      // joi-ful validation goes here
    }
  }
})
```

Joi can validate paths, queries, headers and payloads

Let's validate the payload from the post request our form is sending:

```js
server.route({
  method: 'POST',
  path: '/number',
  handler: function(request, reply) {
    reply.redirect('/')
  },
  config: {
    validate: {
      payload: {
        "magic-number": Joi.number()
      }
    }
  }
})
```

Joi will check the payload coming from the post request, calling `Joi.number()` means the `magic-number` property on the payload must be a number (if anything else is sent Joi will throw a `400 error`)

If we wanted to be even more specific (say a number between 1 and 100), we could add

```js
Joi.number().min(1).max(100)
```

Joi has some very expressive methods for different types of input, have a look at the full API docs [here](https://github.com/hapijs/joi/blob/v8.0.3/API.md)

Remember, by default all available validators are set to true which means that no validation will be performed, but once you set validation params you must set them for ALL properties


### References
1. [Joi on github](https://github.com/hapijs/joi)
2. [Validation in Hapi](http://hapijs.com/tutorials/validation)
3. [Full API docs](https://github.com/hapijs/joi/blob/v8.0.3/API.md)
