### What is asynchronus programming?
In programming, we can simplify the definition of synchronous code as “a bunch of statements in sequence”; so each statement in your code is executed one after the other. This means each statement has to wait for the previous one to finish executing.

```javascript
console.log('First');
console.log('Second');
console.log('Third');
```


### How to test asynchronus code?

Every non-trivial project that is written in JavaScript contains asynchronous functions. They are used to perform a given action after a certain amount of time, to retrieve data from a server, or event to send data to a server. ```QUnit``` provides a method, called ```QUnit.asyncTest()```, whose purpose is to test asynchronous code.

The signature of the method is:

```javascript
QUnit.asyncTest(name, testFunction)
```

*```name```: A string that helps us identify the test created.

*```testFunction```: The function containing the assertions that the framework will execute. The framework passes to this function an argument that exposes all of QUnit’s assertion methods.

#### QUnit.start() and QUnit.stop()

When ```QUnit``` executes a test created using ```QUnit.asyncTest()```, it’ll automatically stop the testrunner*. Then, it’ll wait until the function containing the assertions invokes ```QUnit.start()```. The aim of ```QUnit.start()``` is to start or resume a running test after it was stopped. This method accepts an integer as its only optional argument to merge multiple ```QUnit.start()``` calls into one.

*unit testing framework helper class

A test can be stopped using the method ```QUnit.stop()```. It increases the number of ```QUnit.start()``` calls the testrunner has to wait before continuing. This method accepts an integer as its only optional argument that specifies the number of additional calls to ```QUnit.start()``` that the framework has to wait. Its default value is 1.
