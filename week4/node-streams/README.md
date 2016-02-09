# Node Streams

### What is a stream?

Streams are like plumbing but for data! Data flows in chunks from a source to a destination via streams (in node.js also known as unix pipes)

![plumbing](http://www.overboss.ru/wp-content/uploads/2014/05/water.png)

In node streams are a really efficient way of reading and writing files: big files can be read or sent in manageable chunks

### hence the word STREAMING for videos!!

![streaming](http://media1.palisadeshudson.com/_/doc/2014/05/Netflix-loading-on-PS3-by-John-Pasden.jpeg?ab85d9)

### In node streams can be:

    Readable - can read data from a source
    Writable - can send data to a destination
    Duplex - (both readable and writable)

+ An example of a readable stream is a `request` - the server `READs` the request object
+ And an example of a writable stream  is the `response` - the server `WRITEs` to the destination


## Streams and events

A node stream is just an `Event Emitter` attached to a file or any piece of data. The stream emits a flow of events that can be handled in different ways

    A readable stream emits a flow of `data` events until the file's contents have been exhausted

Let's set one up


### Setting up a readable stream

First you need to require the fs (file system) core node.js module
```javascript
var fs = require('fs');
```
To create a readable stream call the `.createReadStream()` method on a file like this:

```javascript
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('utf8');
```
When the stream is created data events will start flowing from it which can be captured by an event listener:

```javascript
var data = '';
readStream.on('data', function(chunk) {
    data += chunk;
});
```
The handler function above appends the chunks of data to an empty string

When all the data has been read, the `readStream` will emit an `end` event

```javascript
readStream.on('end', function() {
    console.log('all the data has been read');
})
```

## Setting up a writable stream

Similarly to read, a write stream is created using `.createWriteStream()` and setting the destination of the data to write

```javascript
var writeStream = fs.createWriteStream('output.txt');
```
writeStream then takes the data you want to write to the destination:

```javascript
writeStream.write('here is some data', 'utf8')
writeStream.end();
```

The unlike the readStream, the end method has to be called to signal that the server has finished writing.

The stream then emits a `finish` event that can be picked up like this:

```javascript
writeStream.on('finish', function() {
    console.log('all the data has been written');
});
```

## Combining the two

The read and write can be combined together to read and write files: for example:

```javascript
var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});
```

Have a go yourself in tutorial folder (clone this repo and open `streamtutorial.js`) 
