## Webpack 是做什麼用的？可以不用它嗎？
webpack 是一個 module bundler，例如說現在有各種資源：js、scss、image 等等，經過 loader 載入資源（載入的過程可以做資源轉換，例如：babel loader、scss loader），webpack 再把資源打包在一起，打包之後瀏覽器就可以支援一些語法，例如：require／module.exports。

在 ES6 規範出現以前，瀏覽器並沒有 import／export 這個語法，可以像 Node.js 用 require／module.exports（ CommonJS 規範）進行模組化，因此需要借助 webpack 使得瀏覽器也能跑 require／module.exports，在 ES Modules 出現以後，有些舊的瀏覽器仍然不支援 ES6 規範，並且 ES Modules 在使用上也會碰到一些問題，因此仍然需要 webpack。

## gulp 跟 webpack 有什麼不一樣？
gulp 是一個 task manager，例如說現在有各種 task：babel、scss、rename、uglify、minify 等等，gulp 就是管理 task 的工具。

webpack 是一個 module bundler，例如說現在有各種資源：js、scss、image 等等，經過 loader 載入資源（載入的過程可以做資源轉換，例如：babel loader、scss loader），webpack 再把資源打包在一起，打包之後瀏覽器就可以支援一些語法，例如：require／module.exports。

## CSS Selector 權重的計算方式為何？
### universal 選擇器，權重值通常表示為 0, 0, 0, 0, 0
```
* {
  box-sizing: border-box;
}
```

### element 選擇器、pseudo-elements 選擇器，權重值通常表示為 0, 0, 0, 0, 1
#### element 選擇器:
```
div {
  color: red;
}
```
#### pseudo-elements 選擇器:
```
.price::before {
  content: "$";
}
```

### class 選擇器、attributes 選擇器、pseudo-classes 選擇器，權重值通常表示為 0, 0, 0, 1, 0
#### class 選擇器:
```
.box {
  padding: 10px;
}
```
#### attributes 選擇器:
```
[type=checkbox] {
  margin-top: 12px;
}
```
#### pseudo-classes 選擇器:
```
span:hover {
  background: red;
}
```

### ID 選擇器，權重值通常表示為 0, 0, 1, 0, 0
```
#div1 {
  background: pink;
}
```

### inline-style，權重值通常表示為 0, 1, 0, 0, 0
`<div style="background: blue;">hello</div>`

### !important，權重值通常表示為 1, 0, 0, 0, 0
```
div {
  color: red !important;
}
```

* 權重如果相等，後面的樣式宣告會蓋過前面的樣式宣告。
* 若是不同權級，數值再大也大不過較高的權級。

#### 參考資料：
[Day14 CSS：權重](https://ithelp.ithome.com.tw/articles/10221486)
[[IM007] CSS Specificity / 權重](https://hackmd.io/UEpFdat3SnapxC4exNVmYw?view)
