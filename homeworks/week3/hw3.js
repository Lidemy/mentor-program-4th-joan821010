const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 拿到所有資料
function solve(input) {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i += 1) {
    if (isPrime(Number(input[i]))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

rl.on('close', () => solve(lines));
