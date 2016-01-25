### What is asynchronus programming?
In programming, we can simplify the definition of synchronous code as “a bunch of statements in sequence”; so each statement in your code is executed one after the other. This means each statement has to wait for the previous one to finish executing.

```javascript
console.log('First');
console.log('Second');
console.log('Third');
```
The statements above will execute in order, outputting “First”, “Second”, “Third” to the console. That’s because it’s written synchronously.

Asynchronous code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting. You’ve probably used asynchronous programming before with jQuery.ajax or similar:

```javascript
console.log('First');
jQuery.get('page.html', function (data) {
    console.log("Second");
});
console.log('Third');
```
In the example above, the output will be different: “First”, “Third”, “Second”. This is because the function passed into jQuery.get is not called immediately – it has to wait for jQuery to fetch the page you asked for before it can execute.

### So why use Asynchronous code?
With synchronous (normal) code you must wait for it to finish before moving onto another task. Asynchronous code can move onto another task while other tasks are still running. This is really useful in modern computing as the computer can run multiple things at the same time, producing big speedups.

### Letter analogy
#### Synchronous
I call you on the telephone and WAIT for you to pickup. While you say something I listen and vice versa. When we finish we both say goodbye and end our call.

#### Asynchronous
I write you a letter and send it. In the meantime I don't wait around for you to receive it, I get on and do other things. You will receive the letter but might not read it immediately, when you do read it I will still be away completely free to do other things. Eventually I will receive a reply, then I will pause what I'm doing and respond based on what your letter says. Meanwhile you are not sat around waiting for my reply, you're off doing your own thing.

### How to test asynchronous code?
Every non-trivial project that is written in JavaScript contains asynchronous functions. They are used to perform a given action after a certain amount of time, to retrieve data from a server, or event to send data to a server. QUnit provides a method, called ```QUnit.asyncTest()```, whose purpose is to test asynchronous code.

The signature of the method is:
```QUnit.asyncTest(name, testFunction)```

*name: A string that helps us identify the test created.
*testFunction: The function containing the assertions that the framework will execute. The framework passes to this function an argument that exposes all of QUnit’s assertion methods.

#### ```QUnit.start()``` and ```QUnit.stop()```

When QUnit executes a test created using ```QUnit.asyncTest()```, it’ll automatically stop the testrunner*. Then, it’ll wait until the function containing the assertions invokes ```QUnit.start()```.

The aim of ```QUnit.start()``` is to start or resume a running test after it was stopped. This method accepts an integer as its only optional argument to merge multiple ```QUnit.start()``` calls into one.

*unit testing framework helper class

A test can be stopped using the method ```QUnit.stop()```. It increases the number of ```QUnit.start()``` calls the testrunner has to wait before continuing. This method accepts an integer as its only optional argument that specifies the number of additional calls to ```QUnit.start()``` that the framework has to wait. Its default value is 1.

### Examples
Tell QUnit to wait for the ```done()``` call inside the timeout.

``` javascript
QUnit.test( "assert.async() test", function( assert ) {
  var done = assert.async();
  var input = $( "#test-input" ).focus();
  setTimeout(function() {
    assert.equal( document.activeElement, input[0], "Input was focused" );
    done();
  });
});
```

Call ``assert.async()`` for each operation. Each done callback can be called at most once.


```javascript
QUnit.test( "two async calls", function( assert ) {
  assert.expect( 2 );

  var done1 = assert.async();
  var done2 = assert.async();
  setTimeout(function() {
    assert.ok( true, "test resumed from async operation 1" );
    done1();
  }, 500 );
  setTimeout(function() {
    assert.ok( true, "test resumed from async operation 2" );
    done2();
  }, 150);
});
```

Set up an async test three exit points. Each ```done()``` call adds up to the acceptCallCount. After three calls, the test is done.

```javascript
QUnit.test( "multiple call done()", function( assert ) {
  assert.expect( 3 );
  var done = assert.async( 3 );

  setTimeout(function() {
    assert.ok( true, "first call done." );
    done();
  }, 500 );

  setTimeout(function() {
    assert.ok( true, "second call done." );
    done();
  }, 500 );

  setTimeout(function() {
    assert.ok( true, "third call done." );
    done();
  }, 500 );
});
```
