# hw1：Event Loop

## 程式碼
```javascript=
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
## 輸出
```
1
3
5
2
4
```
## 原因
1. 執行第一行程式碼，將 `console.log(1)` 放進 call stack 並執行，印出 1，執行完畢後從 call stack 中移除。
2. 執行第二行程式碼，因為 setTimeout 需要等待一段時間後才執行 callback function，這時如果要等待它在 call stack 執行完畢才執行下一段程式碼，整個瀏覽器 UI 就會按什麼都不會有反應，因此要先呼叫瀏覽器提供的 thread 執行倒數計時，再把它從 call stack 中移除，倒數計時完成後再把 callback function `() => { console.log(2) }` 放入 callback queue 等待。
3. 執行第五行程式碼，原理同 1。
4. 執行第六行程式碼，原理同 2。
5. 執行第九行程式碼，原理同 1。
6. 當 call stack 全部清空，Event Loop 就會把 callback queue 中的第一個程式 `() => { console.log(2) }` 放進 call stack 並執行，印出 2，執行完畢後從 call stack 中移除 ，接著再把 callback queue 中的第二個程式 `() => { console.log(4) }` 放進 call stack 並執行，印出 4，執行完畢後從 call stack 中移除。