const fs = required('fs');

// Blocking code
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);