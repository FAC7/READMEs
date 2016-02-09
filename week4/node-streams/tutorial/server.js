var fs = require('fs');
var colors = require('colors');

var readStream = fs.createReadStream('input.txt');

var data = '';
readStream.setEncoding('utf8');
readStream.on('data', function(chunk) {
    data += chunk;
    console.log(data, 'a chunk of data'.rainbow);
});
readStream.on('end', function() {
    console.log('data has finished streaming!'.rainbow);
});

var writeData = "hello fac";
var writeStream = fs.createWriteStream('output.txt');

writeStream.write(writeData, 'utf8');
writeStream.end();
writeStream.on('finish', function() {
    console.log('write completed'.red);
});
