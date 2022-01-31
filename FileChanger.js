const fs = require("fs");
const readNames = require('./FileReader');

// let people = readNames('/Users/joshgulledge/Documents/Field Service/Territory.csv');

console.log(readNames('/Users/joshgulledge/Documents/Field Service/Territory.csv'));
// fs.writeFile('fileOne.txt', 'Hello Text from JS!', function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Data written successfully!");
//    console.log("Let's read newly written data");
//    // Read the newly written file and print all of its content on the console
//    fs.readFile('fileOne.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("Asynchronous read: " + data.toString());
//    });
// });