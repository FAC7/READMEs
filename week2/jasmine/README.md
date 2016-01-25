# Jasmine

![Jasmine](https://upload.wikimedia.org/wikipedia/en/2/22/Logo_jasmine.svg)

Jamsine is a behaviour-driven development (BDD) framework for testing JavaScript. It doesn't need the DOM and can run anywhere JavaScript can run.

One way to think of BDD is basically writing tests in a more descriptive, sentence like style. One of the great things about Jasmine is that:

### it's super easy to read! :smile: :confetti_ball: :tada: :book:

## Installing Jasmine

To install Jasmine go to the following github repo and download the jasmine-standalone-2.4.1.zip file:

https://github.com/jasmine/jasmine/releases

The zip file includes the following:

+ **SpecRunner.html file** - this is linked to your source and spec files. Open it in your browser when running your tests
+ **spec folder** - your tests go in here. These are .js files
+ **src folder** - the js code under test goes here
+ **lib** - already linked to in the SpecRunner.html file


Before running your tests make sure you link to your src and spec files in SpecRunner.html
Example:
```html
<!-- include source files here... -->
<script src="src/code.js"></script>

<!-- include spec files here... -->
<script src="spec/test.js"></script>
```

Reference: http://jasmine.github.io/2.2/introduction.html

## How does Jasmine work?

In Jasmine tests are split up into 'suites':

+ suites `describe` a group of your tests
+ a suite takes a `string` (with a description of your tests) and a `function` which define the tests

A suite starts with `describe` and looks a bit like this:

```javascript
describe("the function we're going to test", function() {
    // more code goes here
})
```

the function inside `describe` then includes the actual test blocks (also called `Specs`)

Specs are called using the function `it` and work similarly to `describe` (they take a `string` and a `function`)

```javascript
describe("the function we're going to test", function() {
    it("should return 'Hello FAC7!'", function() {
        // your tests go here
    });
})
```

The bottom line here is that `describe` and `it` are just *descriptive* layers to make your tests more readable!

Each spec (or `it` block) can then take a number of `Expectations` that check if your code matches the expected output

Each expectation is built using the `expect` function and a `matcher`

for example:

```javascript
describe("the function we're going to test", function() {
    it("should return 'Hello FAC7!'", function() {
        var actual = facFunction() // a function that we hope will return 'Hello FAC7!'
        expect(actual).toEqual('Hello FAC7!');
    });
})
```

jasmine has a rich set of matchers that can be used to test your functions.

## The different Matchers:

- **toEqual**

- **toBe** : compares with ===

```
  it("and has a positive case", function() {
    expect(true).toBe(true);
  });
```
Any matcher can evaluate to *a negative assertion* by chaining the call to expect with a **not** before calling the matcher.
```
  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
```
- **toThrow** : is for testing if a function throws an exception

- **toBeDefined** / **toBeUndefined**

- **toBeTruthy** / **toBeFalsy**

- **toBeLessThan** / **toBeGreaterThan**

- **toMatch** : is for regular expressions

- **toContain** : is for finding an item in an Array

- **toBeNull** : compares against null


## Give Jasmine a go

If you'd like to have a go with Jasmine, have a look at the `Example test folder` in this repo, or you can checkout the [official Jamsine repo](https://github.com/jasmine/jasmine/releases) on github.


### Further Reading

+ [testing your JavaScript with Jasmine](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)

+ [an introduction to jasmine](http://jasmine.github.io/2.4/introduction.html)

+ [an introduction to Behaviour-Driven Development](http://dannorth.net/introducing-bdd/)

+ [difference between TDD and BDD](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)

+ [download jasmine](https://github.com/jasmine/jasmine/releases)
