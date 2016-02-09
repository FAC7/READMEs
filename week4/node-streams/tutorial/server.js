var fs = require('fs');

var readStream = fs.createReadStream('input.txt');

var data = '';
readStream.setEncoding('utf8');
readStream.on('data', function(chunk) {
    data += chunk;
    console.log(data, 'a chunk of data');
});
readStream.on('end', function() {
    console.log('data has finished streaming!');
});

var writeData = "Hello, FAC how are you??";
var writeStream = fs.createWriteStream('output.txt');

writeStream.write(writeData, '');
writeStream.end();
writeStream.on('finish', function() {
    console.log('write completed');
});
