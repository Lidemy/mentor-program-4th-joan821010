## 請簡單解釋什麼是 Single Page Application
使用者看到的都是同一個檔案的頁面，所有畫面的改動都是在前端由 JavaScript 動態產生。

## SPA 的優缺點為何
優點是在前端用 Ajax 跟後端拿資料不會換頁，使用者體驗更好，缺點是內容是在前端用 JavaScript 動態跟後端拿資料 render 的，如果按右健檢視原始碼會看到沒什麼內容的 index.html，因此 SEO 不太好，網頁不易被搜尋到，另外，沒有使用到的頁面和 JavaScript 也會一起被 render 下來。

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
前者用 Ajax 跟後端串接資料的方法不會換頁，後者用 form 傳送資料，因此會換頁，前者的內容是在前端用 JavaScript 動態拿資料後 render 的，因此是 client side render，後者是在後端 render index.html，因此是 server side render。