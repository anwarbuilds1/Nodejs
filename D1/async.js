const fs = require('fs');

console.log("Start");

fs.readFile('bigfile.txt', () => {
  console.log("File read");
});

console.log("End");
