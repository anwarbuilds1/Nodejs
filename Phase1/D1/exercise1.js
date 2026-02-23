//=============== server================//
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(`received an order:`, req.url);

  res.writeHead(200, { "content-type": "text/plain" });
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  
  const name = query?.name || "strainger";
  res.end(`Hello ${name}, greeting from exercise file`);
});

server.listen(3000, () => {
  console.log("server is on `http://localhost:3000`");
});
