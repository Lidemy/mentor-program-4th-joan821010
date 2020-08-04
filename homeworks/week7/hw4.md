## 什麼是 DOM？
DOM（Document Object Model，文件物件模型），由瀏覽器提供，把一個 Document轉換成 Object，讓 JavaScript 可以改變在 html 裡面寫的東西。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
當事件被觸發時，事件傳遞的順序會先進入第一階段：Capture Phase，捕獲階段，順序是從元素的最上層：Window，到 Document、<html>、<body>…一直到元素，接著進入第二階段：Target Phase，也就是元素自身，結束後進入第三階段：Bubbling Phase，冒泡階段，順序是從元素，一直倒回去：…<body>、<html>、Document、Window。

## 什麼是 event delegation，為什麼我們需要它？
運用事件傳遞機制，在父層加上 addEventListener，這樣就不用在子層的每個元素加上 addEventListener，當子層觸發事件時，因為冒泡的機制，會使得在父層設置的 addEventListener 被觸發，可以請它代理一些事件，這樣寫 code 比較有效率，也可以處理動態新增的子層元素沒辦法加 addEventListener 的問題。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是阻止瀏覽器的預設行為，例如：表單驗證時阻止表單送出、點擊超連結時阻止它的預設行為，而 event.stopPropagation() 是阻止事件繼續被傳遞，因此當對一個元素使用 event.preventDefault，事件仍然會被繼續傳遞下去，例如：在一個超連結元素的父層的捕獲階段設置對於 click 事件阻止預設行為，那麼當事件傳遞到超連結元素時，點擊超連結仍然會沒反應。
