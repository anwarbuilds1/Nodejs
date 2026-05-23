const { parentPort } = require("worker_threads");

// Listen for work from the main thread
parentPort.on("message", ({ start, end }) => {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) primes.push(num);
  }
  parentPort.postMessage(primes);
});

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
