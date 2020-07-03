const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

// 拿到所有資料
function solve(input) {
  const s = input[0];
  let result = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    result += s[i];
  }
  console.log(result === s ? 'True' : 'False');
}

rl.on('close', () => solve(lines));
