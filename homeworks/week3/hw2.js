const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

// 判斷幾位數 153=>3
function digitsCount(n) {
  let result = 0;
  let m = n;
  while (m !== 0) {
    m = Math.floor(m / 10);
    result += 1;
  }
  return result;
}

function isNarcissistic(num) {
// 拿到每一位數字 153
  let m = num;
  let sum = 0;
  while (m !== 0) {
    sum += (m % 10) ** digitsCount(num);
    m = Math.floor(m / 10);
  }
  return sum === num;
}

// 拿到所有資料
function solve(input) {
  const temp = input[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

rl.on('close', () => solve(lines));
