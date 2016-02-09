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
* **filename** = the name of the file you want to write into.
* **data** = the content that you want to write.
* **[, options]** = optional parameter - an object where you can customise other options. [More here](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
* **callback** = the callback function, taking a single parameter err - used to return an error in case of a writing error.


### Example:
```javascript
var fs = require("fs");
// You want to write the object {value: 7} into a new file called 'input.txt'. However, 
// if you try and write the object directly, it will be displayed as
// '[object, Object]' in the new file. You must stringify it first.
var myObject = {value: 7};
var data = JSON.stringify(myObject);
//            filename      data              callback to check if there is an error
fs.writeFile('input.txt', data,  function(err) {
   if (err) {
       return console.error(err);
   }
});    
```

## Method: `fs.readFile`
This method allows you to read data from a file. It is in the form:
`fs.readFile(filename[, options], callback)`
* **filename** = the name of the file you want to read from.
* **[, options]** = the same as `fs.writeFile`. See above. Note that if no encoding is specified, the raw buffer is returned. If the options parameter is a string, then it specifies the encoding. Example `fs.readFile('etc/passwd', 'utf8', callback)`
* **callback** - The callback function which takes two parameters (err, data). Data is the contents of the file and err is used to alert the user if there is an error.

### Example:
```javascript
var fs = require("fs");
// read file and store data as variable
var fileData;
//        file to be read, encoding style, call back
fs.readFile('stringfile.json', "utf8", function(err, data) {
  if(err){
    return console.error(err);
  }
  else {
    fileData = JSON.parse(data);
    // remember that encoding with "utf8" returns the data as a string. 
    // Therefore we need to parse it to make it a JavaScript object.
  }
});
```
## Tutorial
Open tutorial.js, which contains instructions. You will have to use `fs.readFile` to read the people.json file and extract the data in it - make sure you parse it into a real javascript object. Make an array of all the last Names in alphabetical order. Turn this back into a string using `JSON.stringify`, and use `fs.writeFile` to write this to a new JSON file: nameFile.json.

You can check how you are doing at every stage of the tutorial by using `console.log()` to log your objects or arrays, and `typeof` to make sure they are what they are meant to be.

## References
* [Sitepoint on fs.read and fs.watch](http://www.sitepoint.com/accessing-the-file-system-in-node-js/)
* [Tutorialspoint on asynchronous writing & reading](http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)
* [Node.js documentation on fs (file system)](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
