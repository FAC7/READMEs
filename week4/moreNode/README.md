# More Node: Client/Server and Storing Data

## What is the difference between the client and the server in Node.js
* The Server - This party is responsible for serving pages.
* The Client - This party requests pages from the Server, and displays them to the user. In most cases, the client is a web browser.

## How to store data in the file system

## The fs (file system) module in Node.js
The fs module is part of Node.js, and can be imported with: `var fs = require("fs");` - you don't have to `npm install` it or have it in your node_modules folder.

## Method: `fs.writeFile`
This method allows you to write data into a file. Here is how it is used:
`fs.writeFile(filename, data[, options], callback);`
* filename = the name of the file you want to write into.
* data = the content that you want to write.
* [, options] = optional parameter - an object where you can customise other options. [More here](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
* callback = the callback function, taking a single parameter err - used to return an error in case of a writing error.


## Example:
```javascript
var fs = require("fs");
//            filename      data              callback to check if there is an error
fs.writeFile('input.txt', 'changestofile!',  function(err) {
   if (err) {
       return console.error(err);
   }
});
```

## Method: `fs.readFile`
This method allows you to read data from a file. It is in the form:
`fs.readFile(filename[, options], callback)`
* filename = the name of the file you want to read from
