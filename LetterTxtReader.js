const fs = require('fs');

//"/Users/joshgulledge/Documents/Field Service/Gov Letter 2"
const readLetter = function (filePath) {
  let data = fs.readFileSync(filePath, 'utf8'); 
  // var dataArray = data.split(/\r?\n/);
  return data.split(/\r?\n/);
  // console.log("This is the data array 🥃 ");
  // console.log(dataArray);
  // let line;
  
  // dataArray.forEach((row, index) => {
  //   console.log("this is the row 🦋");
  //   console.log(row);
  //   line = row.split(',');

  //   console.log("this is the line 🎉");
  //   console.log(line);
  // });
  
};

console.log("outside", readLetter("/Users/joshgulledge/Documents/Field Service/TrialLetter.txt"));
module.exports = readLetter;