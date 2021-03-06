# Sorted Sets Tutorial

This is a ([drag race](https://en.wikipedia.org/wiki/RuPaul%27s_Drag_Race) inspired) tutorial on redis sorted sets. You'll be setting
up a redis database with node that lets you store and retrieve a list of
contestants, sorted by the episode in which they were eliminated!

### Instructions

To set up the tutorial run npm install your terminal:

```shell
$ npm install
```

Make sure redis is installed on your computer ([have a look here](http://redis.io/download) for instructions)

To start your redis database run this command in your terminal:

```
$ redis-server
```

To see a log of redis operations you can also run:

```
$ redis-cli
```


The files you will be changing are `redis.js`, `server.js`, and `script.js`.
We've set you up with a basic server. Your job is to add redis functions to
handle posting and getting data from the redis database.

For `server.js`, you will need to finish the handler with the redis functions
you have created.

in `script.js`, the first function is done for you. You need to complete the
`displayData` function, and implement appending the data results to the DOM.

![](http://i.imgur.com/PzXN63T.png)
