# Getting started with qunit

1. Create an html file with the following code:

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


2. create a file "test.js"


3. create a test

```js
    function halfIt(num){
        return num/2;
    }
```

```js
   test('testmessage',function(assert){
       assert.equal(halfIt())
   })
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
