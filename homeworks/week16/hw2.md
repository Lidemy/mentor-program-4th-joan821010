# hw2：Event Loop + Scope

## 程式碼
```javascript=
for(var i=0; i<5; i++) {
  console.log('i:' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
## 輸出
```
i:0
i:1
i:2
i:3
i:4
5
5
5
5
5
```
## 原因
1. 執行第一行程式碼，`i=0`，因為符合 `i<5`，因此進入 for 迴圈。
2. 執行第二行程式碼，將 `console.log('i:' + 0)` 放進 call stack 並執行，印出 `i:0`，執行完畢後從 call stack 中移除。
3. 執行第三行程式碼，將 setTimeout 放進 call stack 並執行，呼叫瀏覽器設定計時器並開始執行倒數計時，將 setTimeout 從 call stack 中移除，倒數計時完成後把 `() => { console.log(i) }` 放入 callback queue 等待。
4. `i++`，此時 `i=1`，重複步驟 1、2、3（原理相同），一直到 `i=5`，因為不符合 `i<5`，因此跳出 for 迴圈。
5. 當 call stack 全部清空，Event Loop 就會把 callback queue 中的第一個程式 `() => { console.log(i) }` 放進 call stack 並執行，此時 `i=5`，因此印出 5，執行完畢後從 call stack 中移除，接著重複此步驟，直到把 callback queue 中所有程式執行完畢。