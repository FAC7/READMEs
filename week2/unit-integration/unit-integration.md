## UNIT TEST EXAMPLES
### The code that gets tested
````javascript

function example() {
  return "example";
}
````
### The unit test

````javascript
test( "Example test", function(assert) {
  var actual = example();
  assert.equal(actual, "example", "Passed!" );
  ````

### Unit test example
````javascript
test("Example unit test", function(assert) {
var testInputs = something...
var actual = funcUnderTest(testInputs);
var expected = something else...
assert.equals(actual, expected, "Success message")
});
````

### Integration test example
````javascript
test("Example integration test", function(assert) {
// ObjectOne interacts with ObjectTwo via "someMethod"
var a = new ObjectOne();
var b = new ObjectTwo();
// configure object b
b.parameter = something...

// pass b to the interface
a.someMethod(b);

// assert that "a" has been modified as expected
assert.equals(a.someProperty, expectedProperty);
assert.equals(a.someOtherProperty, expectedOtherProperty);
});
````
