const fs = require("fs");

console.log("Starting to read the file...");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  }
  console.log("File data: ", data);
});

console.log("This will log before the file is read.");
