// const fs = require('fs')
// var parse = require('csv-parse')
// fs.readFile("/Users/joshgulledge/Documents/Field Service.Territory.csv", function (err, fileData) {
//   parse(fileData, {columns: false, trim: true}, function(err, rows) {
//     console.log(rows);
//     // Your CSV data is in an array of arrys passed to this callback as rows.
//   })
// });

// const fs = require('fs')
// fs.readFile("/Users/joshgulledge/Documents/Field Service.Territory.csv", 'utf8', function (err, data) {
//   var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
//   // Your array contains ['ID', 'D11', ... ]
//   console.log(dataArray);
// });

// var fs = require('fs'); 
// var parse = require('csv-parse');
// var parser = parse({columns: true}, function (err, records) {
// 	console.log(records);
// });

// fs.createReadStream("/Users/joshgulledge/Documents/Field Service.Territory.csv").pipe(parser);

const fs = require('fs');

fs.readFile('/Users/joshgulledge/Documents/Field Service/Territory.csv', 'utf8', function (err, data) {
  if (err)
  return console.log(err);
  var dataArray = data.split(/\r?\n/);
  let rows = {};
  dataArray.forEach((row, index) => {
    rows[`row${index}`] = row;
    
  });
  console.log(rows);
});