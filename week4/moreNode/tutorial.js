// make a var called 'fs' which accesses the fs module by requiring it.



// 1. Use the fs.readFile function below to read the people.json file 
// 2. Convert the data from the file into a javascript object using  
// JSON.parse and assign this object to the variable 'result'.

fs.readFile(filePathParameter, optionsOrEncodingParameter, function(err, data){

	

// 3. Make an array of the lastnames of the people in your object, 
// ordered alphabetically.



// 4. Make an object called nameObject with a the property lastName, which should
// be the array you have made. 
// 5. Make a variable called returnObject, which stringifys nameObject.
// 6. Finally, use fs.writeFile to write return object to a new file called nameFile.json.



});
