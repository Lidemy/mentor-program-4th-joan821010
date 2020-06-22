## 請解釋後端與前端的差異。
前端就是所有在電腦上看的到的畫面的部分，而後端是看不到的部分。前端包括各式各樣在電腦螢幕上顯示的畫面，而後端則是，例如：在 Google 瀏覽器上搜尋 JavaScript，到 Google 瀏覽器顯示畫面之前，背後所做的事，伺服器會去跟資料庫查詢資料、資料庫把資料傳給伺服器、伺服器再將存取的資料處理過後，回傳給瀏覽器，這些就是看不見的後端的部分。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
* 這時，Google 瀏覽器會透過作業系統，作業系統再透過網路卡，先去 DNS Server 問網址的 IP 位置，DNS Server 回傳 Google Server 的 IP 位置以後，Google 瀏覽器再傳送 request 給 Google Server。

* 接下來，Google Server 會先去資料庫查詢資料，把存取到的資料處理過後，再把 response 回傳給 Google 瀏覽器。

* 當 Google 瀏覽器接收到 Server 回傳給它的 html 格式的 response 以後，再把它解析（render）出來，就是我們所看到的畫面。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
### Sort
可以用「sort」指令來排序文字資料。

假設有一個文字檔案 test.txt，內容如下：
```
Tim
Duncan
Tony
Parker
Manu
Ginobili
Gregg
Popovich
David
Robinson
```
sort 會根據英文字母從 a ~ z 的順序排序每一行資料：
```
$ sort test.txt
```
```
David
Duncan
Ginobili
Gregg
Manu
Parker
Popovich
Robinson
Tim
Tony
```

### uniq
可以用「uniq」指令來刪除文字資料中連續重複的資料。

假設有一個文字檔案 test.txt，內容如下：
```
Tim Duncan
Tim Duncan
Tim Duncan
Tony Parker
Tony Parker
Manu Ginobili
```
uniq 會把連續重複的資料刪除：
```
$ uniq test.txt
```
```
Tim Duncan
Tony Parker
Manu Ginobili
```

### find
可以用「find」指令來尋找檔案。

例如要在目前的目錄底下，尋找所有的 test.txt 檔案，並將它列出來。
```
$ find . -name test.txt
```
```
./test.txt
./wifi/test.txt
```


#### 參考資料：
[Linux 的 sort 排序指令教學與常用範例整理](https://blog.gtwang.org/linux/linux-sort-command-tutorial-and-examples/)

[Linux 的 uniq 指令教學與範例：刪除重複文字行、去除相同的內容](https://blog.gtwang.org/linux/linux-uniq-command-tutorial/)

[Unix/Linux 的 find 指令使用教學、技巧與範例整理](https://blog.gtwang.org/linux/unix-linux-find-command-examples/)
