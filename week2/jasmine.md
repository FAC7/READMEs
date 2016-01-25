# Jasmine

![Jasmine](https://upload.wikimedia.org/wikipedia/en/2/22/Logo_jasmine.svg)

Jamsine is a behaviour-driven development framework for testing JavaScript. It doesn't need the DOM and can run anywhere JavaScript can run.



One of the great things about Jasmine is that it's easy to read!

Tests are split up into 'suites':

+ suites `describe` your tests
+ a suite takes a `string` (with a description of your tests) and a function which define the tests

A suite starts with `describe` and looks a bit like this:

```javascript
describe("the function we're going to test", function() {
    // your tests go here
})
```

### References

+ [an introduction to jasmine](http://jasmine.github.io/2.4/introduction.html)

+ [difference between TDD and BDD](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)
