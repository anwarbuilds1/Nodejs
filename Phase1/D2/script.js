const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Erroor reading file: ", err);
    return;
  }
  const wordCount = data.split(/\s+/).filter((word) => word.length > 0).length;
  const output = `Total number of words: ${wordCount}`;
  fs.writeFile("output.txt", output, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file: ", err);
      return;
    }
    console.log("Word count written to output.txt");
  });
});
