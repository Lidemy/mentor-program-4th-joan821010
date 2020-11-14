# hw3：Hoisting

## 程式碼 + 輸出
```javascript
var a = 1
function fn(){
  console.log(a) // undefined
  var a = 5
  console.log(a) // 5
  a++
  var a
  fn2()
  console.log(a) // 20
  function fn2(){
    console.log(a) // 6
    a = 20
    b = 100
  }
}
fn()
console.log(a) // 1
a = 10
console.log(a) // 10
console.log(b) // 100
```
## 原因
首先進入 global Execution Context（以下簡稱 EC），初始化 global Variable Object（以下簡稱 VO），在 VO 中依序設置 1. function 的參數 2. 宣告的 function，如已有值，就將其覆蓋掉 3. 宣告的變數，將其值設為 undefined，如已有值，不將其覆蓋。
```
global EC
global VO = {
  a: undefined,
  fn: function
}
```
接著執行 global EC。
```
global EC
global VO = {
  a: 1,
  fn: function
}
```
執行 `fn()`，進入 fn EC，初始化 fn Activation Object（以下簡稱 AO），用法和 VO 相同。
```
fn EC
fn AO = {
  a: undefined,
  fn2: function
}
```
接著執行 fn EC，第一個 `console.log(a)` 是 undefined，接著因為 `var a = 5`，fn AO 的 a 的值變成 5，因此第二個 `console.log(a)` 是 5。
```
fn EC
fn AO = {
  a: 5,
  fn2: function
}
```
接著因為 `a++` ，fn AO 的 a 的值變成 6，接著因為已經宣告過 a，因此 `var a` 不理它。
```
fn EC
fn AO = {
  a: 6,
  fn2: function
}
```
執行 `fn2()`，進入 fn2 EC，初始化 fn2 AO。
```
fn2 EC
fn2 AO = {
  
}
```
接著執行 fn2 EC，因為 fn2 AO 沒有宣告變數 a，因此`console.log(a)` 的 a 會往 fn2 EC 的上一層 fn EC 找，找到的值是 6，接著 `a = 20` 會將上一層 fn AO 中 a 的值改成 20。
```
fn EC
fn AO = {
  a: 20,
  fn2: function
}
```
接著 `b = 100`，因為 fn2 AO 沒有宣告變數 b，往 fn2 EC 的上一層 fn EC 找也沒有宣告變數 b，因此在 global VO 宣告一個全域變數 b。
```
global EC
global VO = {
  a: 1,
  fn: function,
  b: 100
}
```
`fn2()` 執行結束後，`console.log(a)` 就是 20。
```
fn EC
fn AO = {
  a: 20,
  fn2: function
}
```
`fn()` 執行結束後，`console.log(a)` 要看全域變數的 a，也就是 1，接著因為 `a = 10`，因此 global VO 變成：
```
global EC
global VO = {
  a: 10,
  fn: function,
  b: 100
}
```
因此最後的 `console.log(a)` 是 10，`console.log(b)` 是 100。

