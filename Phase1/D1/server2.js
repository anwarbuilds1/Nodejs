const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("I am the server");
  } else if (url === "/name") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("My Name is node");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Server is running on port 3000"));
