## 請以自己的話解釋 API 是什麼
API 是一個用來交換資料或功能的介面，也用來決定哪些資料或功能是可以提供給別人使用的，哪些不行，可以拿拉麵販賣機來比喻，它沒給你的選項（資料），你不能選（要），或是一個功能交換的介面，例如：「我要去串接 Google 登入的 API，讓我的網站有 Google 登入的功能。」。

#### 參考資料：

[從拉麵店的販賣機理解什麼是 API](https://medium.com/@hulitw/ramen-and-api-6238437dc544)

[什麼是 API？](https://www.youtube.com/watch?time_continue=204&v=zvKadd9Cflc&feature=emb_logo)

[API是什麼？認識 Web API、HTTP 和 JSON 資料交換格式](https://tw.alphacamp.co/blog/api-introduction-understand-web-api-http-json)


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
**201 Created**
請求成功，且有新的資料被創建，通常用於 POST 或一些 PUT 請求成功的回應。

**401 Unauthorized**
需要身分驗證，例如：client ID 或 token。

**403 Forbidden**
server 知道 client 的身分，但是仍然沒有給 client 訪問權限。

#### 參考資料：

[HTTP 狀態碼- HTTP | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

[常見與不常見的 HTTP Status Code](https://noob.tw/http-status-code/)

[搶救茶壺大作戰：418 I am a teapot](https://blog.techbridge.cc/2019/06/15/iam-a-teapot-418/)

[Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](https://httpwg.org/specs/rfc7231.html#status.403)


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://api.choose-a-restaurant.com

| 說明 | Method | path | 參數 | 範例 |
| ---- | ---- | ---- | ---- | ---- |
| 獲取所有餐廳資料 | GET | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=10 |
| 獲取單一餐廳資料 | GET | /restaurants/:id | 無 | /restaurants/6 |
| 新增餐廳資料 | POST | /restaurants | name: 餐廳名稱 |  |
| 更改餐廳資料 | PATCH | /restaurants/:id | name: 餐廳名稱 |  |
| 刪除餐廳資料 | DELETE | /restaurants/:id | 無 |  |

#### 參考資料：

[mentor-program-4th/homeworks/week4](https://github.com/Lidemy/mentor-program-4th/tree/master/homeworks/week4)

[REST COUNTRIES](https://restcountries.eu/#api-endpoints)

[Games Reference](https://dev.twitch.tv/docs/v5/reference/games)

[API 實作(一)：規劃 RESTful API 要注意什麼](https://noob.tw/restful-api/)

[Web APIs 設計](https://ihower.tw/cs/web-apis.html)

[GitHub API v3](https://developer.github.com/v3/)

[POST account/settings](https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-settings#)

[使用圖形 API](https://developers.facebook.com/docs/graph-api/using-graph-api/)

[What do "?" and "#" mean in a URL?](https://www.quora.com/What-do-and-mean-in-a-URL)


#### 其他參考資料：

[過度焦慮的 try-catch](https://ithelp.ithome.com.tw/articles/10208079)

[JavaScript try catch finally Error Handling (例外處理)](https://www.fooish.com/javascript/error-handling-try-catch-finally.html)

[try...catch 語法](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Obsolete_Pages/Obsolete_Pages/Obsolete_Pages/%E4%BE%8B%E5%A4%96%E8%99%95%E7%90%86%E8%AA%9E%E6%B3%95/try...catch_%E8%AA%9E%E6%B3%95)

[for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
