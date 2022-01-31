const fs = require('fs');

//"/Users/joshgulledge/Documents/Field Service/Gov Letter 2"
const readLetter = function (filePath) {
  let data = fs.readFileSync(filePath, 'utf8'); 
  var dataArray = data.split(/\r?\n/);
  let line;
  
  dataArray.forEach((row, index) => {
    line = row.split(',');
    console.log(Array.from(line[0]));
  });
  
  console.log(line);
  return line;
};

console.log(readLetter("/Users/joshgulledge/Documents/Field Service/TrialLetter.txt"));
//module.exports = readNames;