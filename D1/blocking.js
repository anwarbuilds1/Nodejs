const fs = require('fs');

console.log("Start");

const data = fs.readFileSync('bigfile.txt');
console.log("File read");

console.log("End");