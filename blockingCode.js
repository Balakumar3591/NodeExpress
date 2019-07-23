var fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
//Display the Buffer without converting it into a String:
//console.log(data);
console.log("Program Ended");
