// this is the exersice file for client server architecture

const http = require("http");
const { hostname } = require("os");
const postData = JSON.stringify({ name: "Anwar", age: 30 });

const options = {
  hostname: "localhost",
  port: 3001,
  path: "/",
  method: "POST",
  header: { "Content-Type": "application/json" },
};

const req = http.request(options, (response) => {
  console.log("res statusCode", response.statusCode);

  response.on("data", (chunk) => {
    console.log(`response data: ${chunk.toString()}`);
  });

  response.on("end", () => {
    console.log(`No more data in the response`);
  });
});

req.on("error", (err) => {
  console.log(err);
});
req.write(postData);
req.end(); //send the request
