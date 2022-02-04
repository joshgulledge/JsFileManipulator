const fs = require("fs");
const readNames = require('./CsvReader');
const readLetter = require('./LetterTxtReader');

// get name and address data
let people = readNames('/Users/joshgulledge/Documents/Field Service/Territory.csv');

// combine each name and address to each letter
const joiner = function (peopleArr) {
  // for get letter array
  let letterArr = readLetter("/Users/joshgulledge/Documents/Field Service/TrialLetter.txt");
  
  // write name to the letter
  Object.values(people).forEach((person, index) => {
    let newLetter = [...letterArr];
    let newLine = newLetter[1].split(' ');
    newLine[1] = person.name + ",";
    newLetter[1] = newLine.join(' ');
    // create new file with each new letter
    fs.writeFile(`file${index}.txt`, newLetter.join(' '), function(err) {
      if (err) {
        console.log(err);
        return err;
      }
    })
  });

};

joiner(people);