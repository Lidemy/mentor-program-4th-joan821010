# hw4：What is this?

## 程式碼
```javascript=
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}

const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello()
obj2.hello()
hello()
```
## 輸出
```
2
2
undefined
```
## 原因
this 的值跟它在哪裡被定義沒有關係，跟它怎麼被呼叫有關。
在物件中的 this 的情況，當執行第 16 行 `obj.inner.hello()`，可以把它看成 `obj.inner.hello.call(obj.inner)`，因此會輸出 `2`，當執行第 17 行 `obj2.hello()`，可以把它看成 `obj2.hello.call(obj2)`，也就是 `obj2.hello.call(obj.inner)`，因此同樣會輸出 `2`，當執行第 18 行 `hello()`，可以把它看成 `hello.call(undefined)`，因此會輸出 `undefined`。
