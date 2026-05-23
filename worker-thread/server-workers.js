const http = require("http");
const { Worker } = require("worker_threads");
const os = require("os");

const numCPUs = os.cpus().length;
const WORKER_COUNT = 4;
const workers = [];

// Pre-start worker pool
for (let i = 0; i < WORKER_COUNT; i++) {
  workers.push(new Worker("./worker.js"));
}

function computePrimesWithWorkers(max) {
  return new Promise((resolve, reject) => {
    const chunkSize = Math.ceil(max / WORKER_COUNT);
    const results = new Array(WORKER_COUNT);
    let completed = 0;

    workers.forEach((worker, index) => {
      const start = index * chunkSize + 1;
      const end = Math.min((index + 1) * chunkSize, max);

      const onMessage = (primes) => {
        results[index] = primes;
        worker.off("message", onMessage);
        completed++;
        if (completed === WORKER_COUNT) {
          resolve(results.flat());
        }
      };
      worker.on("message", onMessage);
      worker.postMessage({ start, end });
    });
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/primes")) {
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const max = Number(query.get("max")) || 10000000;
    const start = Date.now();
    try {
      const primes = await computePrimesWithWorkers(max);
      const time = Date.now() - start;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count: primes.length, time: `${time}ms` }));
    } catch (err) {
      res.writeHead(500);
      res.end("Error");
    }
  } else {
    res.writeHead(200);
    res.end("OK");
  }
});

server.listen(3000, () =>
  console.log(`Server with ${WORKER_COUNT} workers on port 3000`),
);
