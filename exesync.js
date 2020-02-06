var fs = require('fs');

console.log("Begin Reading File");
var data = fs.readFileSync("input2.txt");

console.log("End Reading File");
console.log("Begin Appending File");

var append = fs.appendFileSync('input2.txt', '. Append something');
console.log("End Appending File");
console.log("Begin re-reading File");

var data2 = fs.readFileSync("input2.txt");
console.log(data2.toString());
  
console.log("End re-reading File");