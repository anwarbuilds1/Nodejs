const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/name",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  let body = "";
  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log(`Response Body: ${body}`);
  });
  res.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
});

req.on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

req.end();
