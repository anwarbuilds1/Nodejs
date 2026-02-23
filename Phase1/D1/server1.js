const http = require("http");
const { stringify } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(`Received body`, body);
      let parseBody;
      try {
        parseBody = JSON.parse(body);
      } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON, stringify({ error: "Invalid JSON" }));
        return;
      }
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Data received", data: parseBody }));
    });
  } else {
    res.writeHead(405, { "content-type": "text/plain" });

    res.end("Method not allowed, use POST.");
  }
});

server.listen(3001, () => {
  console.log(`server is running on "http://localhost:3001`);
});
