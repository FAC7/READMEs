# Good & Good Console for Hapi.js

Good is a process monitor for Hapi which looks at the processes that are running
when you start the server. It listens for events that you can specify, for
example logs and responses. It passes them to a reporter, such as good-console.
Good console output events to the stdout (i.e. your terminal). You can customise
the events that it outputs. In short good is the ears (it listens for events)
and good-console is the mouth (it tells you about the events)!

### How to Use

Both good and good-console are plug-ins you need to install separately for Hapi.

```
npm install good good-console --save
```

You can create a good options object in which you include your reporters and
events to listen for.

```
var goodOptions = {
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*'}
        }]
}
```

The `log: '*'` means good-console will output all log events. You can specify
log types such as errors in the form of tags `log: [error]`. The reporter key
tells good which reporter to use. The events key will tell good which events
to pass to the good-console. You can use multiple reporters by adding another
object in the reporters array. This must include the reporter and events keys
to say which type of events you want it to listen for.

You must register the good plug-in as below.

```
server.register({
    register: require('good'),
    options: goodOptions
    })
```


Then all your routes go into your register and that's all you need to set up good and good-console!

### Resources
[Good documentation](https://github.com/hapijs/good)  
[npm docs on Good](https://www.npmjs.com/package/good)   
[Good-console documentation](https://github.com/hapijs/good-console)  
[Video on setting up good & good-console](https://egghead.io/lessons/node-js-hapi-js-logging-with-good-and-good-console)    
