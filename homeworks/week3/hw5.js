const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', line => lines.push(line));

/* eslint-disable consistent-return */
function whoWin(a, b, k) {
  if (a.length > b.length && k === '1') {
    return 'A';
  }
  if (a.length < b.length && k === '-1') {
    return 'A';
  }

  if (a.length < b.length && k === '1') {
    return 'B';
  }
  if (a.length > b.length && k === '-1') {
    return 'B';
  }

  if (a.length === b.length) {
    for (let j = 0; j < a.length; j += 1) {
      if (a[j] > b[j] && k === '1') {
        return 'A';
      }
      if (a[j] < b[j] && k === '-1') {
        return 'A';
      }

      if (a[j] < b[j] && k === '1') {
        return 'B';
      }
      if (a[j] > b[j] && k === '-1') {
        return 'B';
      }
    }
    return 'DRAW';
  }
}

// 拿到所有資料
function solve(input) {
  const m = Number(input[0]);
  const game = [];
  for (let i = 0; i < m; i += 1) {
    const temp = input[i + 1].split(' ');
    game.push({
      a: temp[0],
      b: temp[1],
      k: temp[2],
    });
    console.log(whoWin(game[i].a, game[i].b, game[i].k));
  }
}

rl.on('close', () => solve(lines));
