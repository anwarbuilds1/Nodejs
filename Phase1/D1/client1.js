const http = require("http");

const req = http.request("http://localhost:3000", (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on("data", (c) => console.log(c.toString()));
});

req.end();
