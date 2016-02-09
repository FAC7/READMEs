// make a var called 'fs' which accesses the fs module by requiring it.

var fs = require("fs");

// Set up a fs.readFile function to read the people.json file. 
// Convert the data from the file into a javascript object, and 
// assign this object to the variable 'result'.

fs.readFile('people.json', 'utf8', function(err, data){

	if(err){
		return console.error(err);
	} else {
		var result = JSON.parse(data);
		console.log(result);
	}

// Make a function that will make an array of the lastnames of the people in your object, 
// ordered alphabetically. Call the function in the else branch above.

	var array =[];
	for(prop in result){
		array.push(result[prop].lastName);
		array.sort();
	}

	var namesObject = {};
	namesObject.lastNames = array;
	var returnObject = JSON.stringify(namesObject);


// Write the array of names to a new file called 'nameFile.json'.


	fs.writeFile('nameFile.json', namesObject, function(err){
		if (err) {
			return console.error(err);
		}
	});


});