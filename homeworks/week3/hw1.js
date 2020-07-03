const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

// 拿到所有資料
function solve(input) {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i += 1) {
    let result = '';
    for (let j = 0; j < i; j += 1) {
      result += '*';
    }
    console.log(result);
  }
}

rl.on('close', () => solve(lines));
