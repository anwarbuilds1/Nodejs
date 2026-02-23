const http = require("http");

// server (kitchen)

const server = http.createServer((request, response) => {
  //this function runs for every incoming request (order)
  console.log("Received an order:", request.url);
  response.writeHead(200, { "content-type": "text/plain" });
  response.end("Hello from the backend kitchen!!");
});

server.listen(3000, () => {
  console.log("Kitchen is open at `http://localhost:3000`");
});


// http.createServer builds our kitchen.

// The function inside is the chef: it receives the request (order slip) and must produce a response (meal).

// response.end sends the meal back to the client.

// server.listen(3000) tells the kitchen to start accepting orders at that port.

// Run this with Node (node server.js) and open http://localhost:3000 in your browser. You'll see the message. Congratulations – you've just run a backend!
