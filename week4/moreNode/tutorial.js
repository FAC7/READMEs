// make a var called 'fs' which accesses the fs module by requiring it.



// Set up a fs.readFile function to read the people.json file. Convert the 
// data from the file into a javascript object using JSON.parse, and 
// assign this object to the variable 'result'.

fs.readFile('people.json', 'utf8', function(err, data){

	

// Make an array of the lastnames of the people in your object, 
// ordered alphabetically.



// Make an object called nameObject with a the property lastName, which should
// be the array you have made. Make a variable called returnObject, which stringifys nameObject.
// Finally, use fs.writeFile to write return object to a new file called nameFile.json.



});