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
