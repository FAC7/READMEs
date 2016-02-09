var fs = require("fs");
// read file and store data as variable
var fileData;
fs.readFile('people.json', "utf8", function(err, data) {
  if(err){
    return console.error(err);
  }
  else {
    fileData = JSON.parse(data);
  }
});

// take data and store it in another file as a Json object

// console.log("Going to write into existing file");
// fs.writeFile('input.txt', 'changestofile!',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("Data written successfully!");
//    // console.log("Let's read newly written data");
//    // fs.readFile('input.txt', function (err, data) {
//    //    if (err) {
//    //       return console.error(err);
//    //    }
//    //    console.log("Asynchronous read: " + data.toString());
//    // });
// });
