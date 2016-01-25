# Getting started with qunit

### 1 Create an html file with the following code:

```html
<!DOCTYPE html>
<DOCTYPE!>
<html>
<head>
   <meta charset="utf-8">
   <title>QUnit Example</title>
   <link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-1.20.0.css">
</head>
<body>
   <div id="qunit"></div>
   <div id="qunit-fixture"></div>
   <script src="//code.jquery.com/qunit/qunit-1.14.0.js"></script>
    <script src="http://code.jquery.com/qunit/qunit-1.20.0.js"></script>
   <script src="test.js"></script>
</body>
</html>
```


### 2 create a file "test.js" file


### 3 create a test
function to be tested:
```js
    function halfIt(num){
        return num/2;
    }
```
test (simple):
```js
   test('testmessage',function(assert){
       assert.equal(halfIt(10),5,"Correct, half of 10 is 5! :)")
   })
```

### 4 Open index file in browser
----------------
----------------

## Random Test

To create more robust tests, sometimes we can implement random tests. The following tests function above halfIt()



```js
test('Check the halfIt function with 20 random test', function(assert){
    //assert.expect takes the number of tests expected to be run
    assert.expect( 20 );
    //generate 20 assert.equal tests for numbers between -1000 and 1000
    for ( var i = 0; i < 20; i++ ){
        var x = Math.floor( Math.random() * 2001 - 1000 );
        var halfX = x/2;
        assert.equal( halfIt(x), halfX, 'Half of ' + x + ' is ' + halfX + ':)');
    }
});
```






[Useful Guide](http://www.sitepoint.com/getting-started-qunit/)

----------------
----------------
----------------

-----
### What is asynchronus programming?
In programming, we can simplify the definition of synchronous code as “a bunch of statements in sequence”; so each statement in your code is executed one after the other. This means each statement has to wait for the previous one to finish executing.

```javascript
console.log('First');
console.log('Second');
console.log('Third');
```
