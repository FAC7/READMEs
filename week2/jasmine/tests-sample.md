## Jasmine examples tests

Jasmine tests are primarily two parts: describe blocks and it blocks.

```
describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});
```
Both the describe and it functions take two parameters: a text string and a function.

**Describe** will hold the title of your tests (eg. "JavaScript addition operator") and your tests.

Each **it** will hold the description of your test (eg. "adds two numbers together") and your test. Inside that it block, you can write all the setup code you need for your test.

Once you’re ready to write the actual test code, you’ll start with the **expect** function, passing it whatever you are testing.

Finally the **toEqual** method will check if the value passed to *expect* and the value passed to *toEqual* are equal.

This group of methods is called "matchers".


 ##### The different Matchers:

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
