const fs = require("fs");
const readNames = require('./CsvReader');

// get name and address data
let people = readNames('/Users/joshgulledge/Documents/Field Service/Territory.csv');
console.log(people);

// get letter data


// combine each name and address to each letter

// Object.values(people).forEach((person, index) => {
//   fs.writeFile(`file${index}.txt`, `${person.name}`, function(err) {
//      if (err) {
//         return console.error(err);
//      }
//   });
// });