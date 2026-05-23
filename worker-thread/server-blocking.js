const http = require("http");

function findPrimesInRange(start, end) {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) primes.push(num);
  }
  return primes;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/primes")) {
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const max = Number(query.get("max")) || 10000000;
    const start = Date.now();
    const primes = findPrimesInRange(2, max);
    const time = Date.now() - start;
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ count: primes.length, time: `${time}ms` }));
  } else {
    res.writeHead(200);
    res.end("OK");
  }
});

server.listen(3000, () => console.log(`server is running on port 3000`));
