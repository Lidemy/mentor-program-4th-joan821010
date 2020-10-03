## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
加密是一對一的關係，只要有金鑰（key），就可以將加密後的密文回推回明碼，因此只要駭客取得資料庫和金鑰，就能破解使用者的密碼，而雜湊是多對一的關係，經過雜湊後的文字是有限的組合，但使用者的密碼卻是無限的組合，因此經過雜湊後的文字無法回推回明碼，這樣一來就算駭客取得資料庫也無法輕易破解使用者的密碼，如果將使用者的密碼加鹽再雜湊過後就更難以被破解了。

## `include`、`require`、`include_once`、`require_once` 的差別
include 和 require 都是用來引入檔案，差別在於如果引入的檔案不存在，require 會出現錯誤，並且停止程式繼續執行；include 則是出現警告後，繼續執行程式。而使用 include_once 和 require_once 可以避免檔案被重複引入所發生的錯誤，它們會在引入檔案前檢查是否已經有引入過該檔案？如果有的話就不會再次引入。

## 請說明 SQL Injection 的攻擊原理以及防範方法
把惡意構造的字串注入到原本的 sql query 當中，來達到攻擊網站的目的，例如：將留言寫入資料庫的 sql query 是 `insert into comments(nickname, content) values('%s', '%s')`，只要在留言區的內容填入 `'), ((select nickname from users where id = 4), (select password from users where id = 4))#`，整個 sql query 就會變成 `insert into comments(nickname, content) values('%s', ''), ((select username from users where id = 4), (select password from users where id = 4))#')`，就可以模仿 id = 4 的人留言，並拿到 id = 4 的人的密碼，防範的方法可以用 MySQL 提供的 prepared statement，先把 sql query 語句準備好，再把惡意構造的字串當成純文字，而不是指令放進去。

##  請說明 XSS 的攻擊原理以及防範方法
XSS 是 Cross-Site Scripting 的縮寫，意思是在別人的網站上執行 script，例如：在留言區的內容輸入 `<h1>Hello</h1>`，Hello 的字體就會呈現html 的 h1 的樣式，或是輸入 `<script>location.href="https://google.com"</script>`，可以讓人一進入這個網站就被導到 google，所以要對所有從 Client 端輸入並會顯示在畫面上的東西，在顯示的時候做跳脫，可以用 PHP 內建的 htmlspecialchars 將特殊符號做跳脫，例如將 `<` 轉換成 `&lt;`、將 `>` 轉換成 `&gt;`，這樣輸入的內容就不會被當作一段程式碼，而是純文字。

## 請說明 CSRF 的攻擊原理以及防範方法
CSRF 是 Cross Site Request Forgery（跨站請求偽造），就是讓使用者在不同的 Domain 之下，發出一個惡意攻擊者希望使用者發出的 request 到目標網站，如果使用者是登入狀態，瀏覽器就會自動帶上 cookie，例如 session id，讓惡意攻擊者攻擊成功，因此最簡單的防禦方法就是使用者本身在使用完網站的時候，就做登出的動作，另外 browser 本身的防禦方法，是在 Set-Cookie 後面加上 SameSite，意思是我這個 cookie 只能在 same site request 被瀏覽器自動帶上，不能在 cross site request 時被自動帶上。

### 參考資料：
[Day 12 - 程式引入檔](https://ithelp.ithome.com.tw/articles/10205664?sc=iThelpR)
