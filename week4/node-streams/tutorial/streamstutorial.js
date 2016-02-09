***Creating a Readable Stream***
Firtsly create file called server.js and at the top of the file create a variable which will require the fs module.


Create a ReadStream variable which will connect a readble input stream using fs.createReadStream(''), within the empty string put the file that you want to be read.
For example 'input.txt'


Create a data variable that has data as an empty string.


Make the ReadStream readable using the setEncoding method, set to 'utf8'.


Add the .on eventlistener to the ReadStream variable, having 'data' as the first argument and a function(chunk) as the second,  data should += chunk.
then console.log(data, ''), type a message inbetween that empty string, then close the function.


Put another .on eventlistener to ReadStream this time having 'end' as the first argument, 'end' will emmit a signal when the data has finished flowing, to check this
console.log('data has finished streaming!'); and close the function.


Now run this server.js file in your in your terminal, all of the information in the ReadStream should be returned, followed by your console.log message from the 'data' eventlistener
and then 'data has finished streaming!' from your 'end' eventlistener.


Congratulations your file stream has now been read.
Think of a ReadStream as something that knows how to get the data, and a WriteStream as something that knows how to use the data.




***Creating a write stream.****
Within the same file create a variable called writeData, and within a string place all the data that you wish to write. 'Blah blah blah!'


Similar to the ReadStream, create another file where your data wille be written for example'output.txt'. Now set this as a WriteStream variable and use fs.createWriteStream('').


Now to get the data to be written in your WriteStream variable in a readable format put writeStream.write(writeData, 'utf8');


To get a signal to emmit after this has finished add .end() after your WriteStream variable.


Now add an .on eventlistener with 'finish' as the first argument and a function as the second that will console.log 'write completed'.


Now if this is run in your terminal you should now have your WriteStream variable writing your data to your output file.
