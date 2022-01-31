const fs = require('fs');

// '/Users/joshgulledge/Documents/Field Service/Territory.csv'

// const readNames = function (filePath) {
//   let dataRow = {};
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) return err;
//     var dataArray = data.split(/\r?\n/);
//     dataArray.forEach((row, index) => {
//       let person = row.split(',');
//       if (person[0].toLowerCase() === "false")
//       {
//         dataRow[`row${index}`] = {
//           name: `${person[1]}`,
//           address: `${person[2]}`
//         };
//       }
//     });
//     console.log(dataRow);
//   });
//   return dataRow;
// };

const readNames = function (filePath) {
  let dataRow = {};
  let data = fs.readFileSync(filePath, 'utf8'); 
  var dataArray = data.split(/\r?\n/);

  dataArray.forEach((row, index) => {
    let person = row.split(',');
    if (person[0].toLowerCase() === "false")
    {
      dataRow[`row${index}`] = {
        name: `${person[1]}`,
        address: `${person[2]}`
      };
    }
  });
  return dataRow;
};


module.exports = readNames;