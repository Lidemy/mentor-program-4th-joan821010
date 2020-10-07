## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS 是 Domain Name System（域名系統），主要的功能是將人易於記憶的 Domain name 和人不容易記憶的 IP Address 做轉換，對 Google 的好處是可以知道哪些網址最常被造訪，對大眾的好處是多了一個 DNS 可以選擇，DNS 查詢速度可能較快、也較安全。

## 什麼是資料庫的 lock？為什麼我們需要 lock？
當兩人同時發 request 要執行 query 的時候，為了避免因為 race condition 產生的資料錯誤，就需要在 query 後面加上 for update，把它 lock 起來，這樣就會先等其中一個 request 執行 query 結束後，才換下一個 request 執行 query。

## NoSQL 跟 SQL 的差別在哪裡？
SQL（關聯式資料庫）和 NoSQL（Not only SQL）的差別在於 NoSQL 沒有 schema，它是用 key-value 的方式儲存資料，就好像是把 JSON 資料直接存進資料庫裡面，它不支援 JOIN 指令，通常用來儲存資料結構不固定的資料。

## 資料庫的 ACID 是什麼？
transaction：一個事件，可以想像成是一筆交易，一次會牽扯多個 query 的操作，一個 transaction 就是一些不可分割的 query 的集合。
為了保證 transaction 的正確性，要符合以下四種特性：
原子性（atomicity），執行 query 要嘛全部失敗要嘛全部成功。
一致性（consistency），如果一筆資料少 20 塊，對應到的另一筆資料就要多 20 塊，資料必須有一致性。
隔離性（isolation），多筆交易之間不會互相影響，意思是說不能同時更改同一個值。
持久性（durability），交易成功之後，寫入的資料不會不見。