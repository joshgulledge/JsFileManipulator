var fs = require("fs");
console.log("PreFile Creation");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('fileOne.txt', 'Hello Text from JS!', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   // Read the newly written file and print all of its content on the console
   fs.readFile('fileOne.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});