## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

> VARCHAR 可變長度（0-65,535）的字串，實際的最大長度需視資料列大小限制而定

> TEXT 純文字（TEXT）欄位，最大長度為 65,535（2^16 -1）個字元，儲存時會附加 2 個位元組在最前面用來紀錄長度

1. VARCHAR 在 MySQL 5.0.3 之前只支持 0-255 byte，在 5.0.3 之後才支持到 0-65535 byte，在儲存上和 TEXT差別已不是太大。
2. VARCHAR 可以設置最大長度（可以有默認值），TEXT 不設置長度（不可以有默認值），最大長度是 2 的 16 次方 -1，因此如果要限制長度，就要用 VARCHAR。
3. VARCHAR 的查詢速度比 TEXT 快，因此能用 VARCHAR 的地方就不用 TEXT。

#### 參考資料：
[MySQL性能优化之char、varchar、text的区别](https://blog.csdn.net/brycegao321/article/details/78038272#:~:text=text%EF%BC%9A,%E7%9A%84%E6%80%BB%E5%AD%97%E8%8A%82%E6%95%B0%E3%80%82)

[字符與字節的區別](https://www.itread01.com/content/1533967371.html#:~:text=%EF%BC%88%E4%B8%80%EF%BC%89%E2%80%9C%E5%AD%97%E7%AF%80%E2%80%9D,%E5%AE%B9%E9%87%8F%E7%9A%84%E4%B8%80%E7%A8%AE%E8%A8%88%E9%87%8F%E5%96%AE%E4%BD%8D%E3%80%82&text=%E2%91%A1UTF%2D8%E7%B7%A8%E7%A2%BC%E4%B8%AD%EF%BC%8C%E4%B8%80%E5%80%8B,%E7%AD%89%E6%96%BC%E4%B8%89%E5%80%8B%E5%AD%97%E7%AF%80%E3%80%82)

[varchar和text说不清的那些事](https://blog.csdn.net/l975764577/article/details/42268981?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

[mysql中char，varchar與text類型的區別和選用](https://www.itread01.com/content/1494996129.html)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

Cookie 是瀏覽器裡面可以存放資訊的地方，是一個小型文字檔案，是存在用戶端的資訊，會自動帶到 Server。

Server 端在 Response headers 上設置 Set-Cookie，可以用 PHP 的 setcookie() 實作，接著瀏覽器會在 Request headers 上設置 Cookie，並且把 Set-Cookie 提供的資訊放在裡面，這樣一來每次瀏覽器發 request 只要有帶上符合條件的 Cookie（沒有過期、Domain 和 Path 符合），Server 端就會知道這次發 request 的人和上次發 request 的人是同一人。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

我們維持登入的方式是在 Cookie存放 username，但是 Cookie 是可以被修改的，別人可以透過修改成其他人的 username 來偽造身份登入。

我們直接把明文密碼存在資料庫裡面，這樣如果駭客入侵資料庫，使用者的密碼就會被駭客偷走。

Client 端的輸入沒有經過 escape，因此如果輸入 html 的標籤，例如：`<h1>123</h1>`，123 的字體就會呈現html 的 h1 的樣式，或是 JavaScript 程式碼也會執行，可以讓人一進來這個網站就被導到釣魚網站。
