## hw1：好多星星
想法：

總共印出幾行。
```javascript
const n = Number(lines[0]);
```

假設總共要印出 3 行，代表迴圈要跑 3 圈。
```javascript
for (let i = 1; i <= n; i += 1) {
  console.log(result);
}
```

因為第 1 圈印出 1 顆星星，第 2 圈印出 2 顆星星，第 3 圈印出 3 顆星星，因此找到規律：第 n 圈印出 n 顆星星。
```javascript
let result = '';
for (let j = 0; j < i; j += 1) {
  result += '*';
}
```

結合起來。
```javascript
const n = Number(lines[0]);
for (let i = 1; i <= n; i += 1) {
  let result = '';
  for (let j = 0; j < i; j += 1) {
    result += '*';
  }
  console.log(result);
}
```

## hw2：水仙花數
這題一開始我就是用偷吃步解 XD，看了影片才知道用另一種解法才能比較有思考到，但另一種解法我也不會想到用 while 的方法求出幾位數和拿出每一位數。
不過現在我學起來了！可以自己寫完拿到 AC。

首先判斷從 n 到 m 的數字是不是水仙花數，如果是的話，就印出來。
```javascript
const temp = lines[0].split(' ');
const n = Number(temp[0]);
const m = Number(temp[1]);
for (let i = n; i <= m; i += 1) {
  if (isNarcissistic(i)) {
    console.log(i);
  }
}
```

要知道一個數字是不是水仙花數，要先知道它有幾位數。
```javascript
// 判斷幾位數 153=>3
function digitsCount(n) {
  let result = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    result += 1;
  }
  return result;
}
```

除了知道有幾位數以外，還要拿到每一位數字。
```javascript
// 拿到每一位數字，結合（**幾位數），最後判斷是否為水仙花數
function isNarcissistic(num) {
  // 為了不讓 num 除到最後變成 0，先賦值給 m
  let m = num;
  let sum = 0;
  while (m !== 0) {
    sum += (m % 10) ** digitsCount(num);
    m = Math.floor(m / 10);
  }
  return sum === num;
}
```

## hw3：判斷質數
想法：

首先判斷數字 Number(lines[1]) 到數字 Number(lines[n]) 是不是質數，是的話，印出 'Prime'，不是的話，印出 'Composite'。
```javascript
const n = Number(lines[0])
for (let i = 1; i <= n; i += 1) {
  if (isPrime(Number(lines[i]))) {
    console.log('Prime');
  } else {
    console.log('Composite');
  }
}  
```

寫一個判斷是不是質數的函式。雖然 1 不是質數也不是合數，但題目說在這裡要印出 'Composite'，而 2 是質數，i 雖然從 2 開始，但 2 不小於 2，因此不會進入迴圈，return true。
```javascript
function isPrime(n) {
  if (n === 1) return false;
  for(let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

## hw4：判斷迴文
想法：

宣告一個空字串，用 i 倒著數的方式，取從 s 字串的最後一個字到 s 字串的第一個字，依序加進空字串裡，最後比對 result 和 s 是否相同。
```javascript
const s = lines[0];
let result = '';
for (let i = s.length - 1; i >= 0; i -= 1) {
  result += s[i];
}
console.log(result === s ? 'True' : 'False');
```

## hw5：聯誼順序比大小
解這題的時候，一開始我完全不知道數字很大該怎麼辦，後來真的沒辦法，只好偷看參考範例，看到老師說可以用字串解，我就開始自己想解法，不過 2147483647 和 9007199254740991 的差別我還不太清楚，還有 bytes，還要花時間弄懂它。

想法：

總共有 m 組比賽，把每一組的值傳進物件裡。
```javascript
const m = Number(lines[0]);
const game = [];
for(let i = 0; i < m; i += 1) {
  const temp = lines[i + 1].split(' ');
  game.push({
    a: temp[0],
    b: temp[1],
    k: temp[2],
  });
  console.log(whoWin(game[i].a, game[i].b, game[i].k));
}
```

寫一個判斷誰贏的函式。
```javascript
function whoWin(a, b, k) {
  // 位數不同，A 贏的結果
  if (a.length > b.length && k === '1') {
    return 'A';
  }
  if (a.length < b.length && k === '-1') {
    return 'A';
  }
  // 位數不同，B 贏的結果
  if (a.length < b.length && k === '1') {
    return 'B';
  }
  if (a.length > b.length && k === '-1') {
    return 'B';
  }
  // 位數相同，比每一位的數字
  if (a.length === b.length) {
    for (let j = 0; j < a.length; j += 1) {
      // A 贏的結果
      if (a[j] > b[j] && k === '1') {
        return 'A';
      }
      if (a[j] < b[j] && k === '-1') {
        return 'A';
      }
      // B 贏的結果
      if (a[j] < b[j] && k === '1') {
        return 'B';
      }
      if (a[j] > b[j] && k === '-1') {
        return 'B';
      }
    }
    // 誰都沒贏，平手
    return 'DRAW';
  }
}
```
