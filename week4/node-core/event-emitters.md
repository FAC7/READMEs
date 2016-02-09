### Event Emitters

Node is built on events. Events must be *emitted* and usually *listened* to.  Any object that can emit events is an instance of the EventEmitter class. We can create new event emitter objects but there are many already set up in Node.

This object can have one or more listener methods (.on) attached to it:
```js
emitter.on(event, function1);
//The event is a string holding the event name.  
//This event will later be emitted by the emitter (see below).
//Typical events that have already listened to are 'error', 'data'
emitter.on(event, function2);
//when the emitter emits the named event, both function1 and function2
//(the listeners) will be invoked synchronously.
```

Now we can fire an event using the .emit method:
```js
emitter.emit(event);
//
```


Here is a useless example:
```js
//events is a core module which exposes the eventEmitter class
var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function () {
  console.log('ring ring ring');
}
//ringbell is the listener function
//it will fire when the 'doorOpen' event is emitted.
eventEmitter.on('doorOpen', ringBell);
//could also use eventEmitter.addListener('doorOpen',ringBell);

eventEmitter.emit('doorOpen');
// prints 'ring ring ring'

//now we can remove the listener.
eventEmitter.removeListener('doorOpen' ringBell);
//or if you have set up more than one listener that you don't want;
eventEmitter.removeAllListeners('doorOpen');
```

When you create an http server and then call .listen(3000) on it,
