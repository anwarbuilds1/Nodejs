const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on("data", (chunk) => {
    console.log(`Response body: ${chunk}`);
  });
});

req.on("error", (e) => {
  console.log(`Problem with request: ${e.message}`);
});

req.end();// sends the request
