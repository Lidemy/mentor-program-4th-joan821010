## 什麼是 Ajax？
Ajax 全名是 Asynchronous JavaScript And XML，意指用 JavaScrip 跟伺服器非同步交換資料的方式。

非同步的意思就是 JS 在處理事件的時候可以非同步進行，因為如果一個事件需要較長的時間等候回傳結果，又因為程式碼的執行順序是一行一行的執行，因此這時在瀏覽器上如果需要等待它執行完再執行下一個事件的話，在它執行完成之前網頁按什麼都不會有反應，因此非同步的意思就是在需要較長的時間等候回傳結果的事件上幫它加一個 callback function（像點餐時附送的呼叫器），這樣其他事件就不用等待它執行完再執行。

## 用 Ajax 與我們用表單送出資料的差別在哪？
透過表單 form 傳資料時會發送一個 request 給 Server，Server 會回傳 response 給瀏覽器，瀏覽器會直接 render 出來，因此會換頁（到 action 的網址），但透過 Ajax 的方式交換資料時，例如 JavaScript 用瀏覽器提供的 XMLHttpRequest 發 request 給 Server，Server 會回傳 response 給瀏覽器，這時瀏覽器會再把 response 回傳給瀏覽器上的 JS，因此不會換頁。

## JSONP 是什麼？
透過 `<script>` 標籤不受同源政策限制的特性，在 src 裡引入其他 Domain 的 JavaScript 檔案，並在該檔案對 Server 的 response 做 "padding"，在 `<script></script>` 裡面寫相對應的 code 來拿取 Server 的 response。

## 要如何存取跨網域的 API？
由於瀏覽器同源政策的影響，要存取跨網域的 API 必須在 Server 的 response headers 加上 access-control-allow-origin，裡面的內容就放哪些來源可以存取這個 API 的 response，這樣當 Server 回傳 response 給 JS 的時候，瀏覽器就不會把它阻擋下來。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為這週我們是在瀏覽器上執行 JS，而瀏覽器有同源政策的限制，第四週我們是在 Node.js 上執行 JS，Node.js 並沒有同源政策的限制。
