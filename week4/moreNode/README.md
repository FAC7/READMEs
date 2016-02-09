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
* filename = the name of the file you want to read from.
* [, options] = the same as fs.writeFile. See above. Note that if no encodin is specified, the raw buffer is returned. If options is a string, then it specifies the encoding. Example fs.readFile('etc/passwd', 'utf8', callback)
* callback - The callback function whcih takes two parameters (err, data). Data is the contents of the file and err is throw hack when there is a error.  

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
    fileData = JSON.parse(data);// remember that encoding with "utf8" returns the data as a string. Therefore we need to parse it to make it a JavaScript object. 
  }
});
```
## Tutorial
Work on Tutorial.js. The task is to read the people.json file and extract the data into Tutorial. Make an array of the last Names in alphabetical order and write this to a new file called lastNames.json. This data will contain the last names of the people in order of there age. Oldest coming first.  
