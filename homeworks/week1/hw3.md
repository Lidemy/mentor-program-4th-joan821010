## 教你朋友 CLI
### command line 是什麼？
Command line tool 是只能單純用文字下指令的方式操作電腦的一個工具，也就是它的介面完全沒辦法用滑鼠點擊的方式來操作電腦，英文叫作 CLI（command line interface，命令列介面），相對於 CLI，可以讓你用點擊的方式操作電腦的介面叫 GUI（graphical user interface，圖形使用者介面）。

之所以會有 command line 這個工具，是因為有些功能不需要做一個可以讓你點擊的介面，例如：測試你的網路是否可以連上 google，可以用 ping 8.8.8.8 這個指令來測試，而這件事完全不需要一個可以點擊的視窗介面，因此也沒有做這樣可點擊的介面讓你操作。


### 如何使用 command line？
首先，如果你是 Windows，在電腦裡面搜尋「cmd」，就會出現「命令提示字元」，即是 command line tool。

不過，建議你去下載 git bash，比較好操作。

首先到 [Git](https://git-scm.com/)，點選畫面右邊 Download for Windows 進行下載，點兩下開啟檔案，一直按下一步，安裝完成以後，在電腦裡面搜尋「git bash」。

如果你是 Mac，在電腦裡面搜尋「terminal」，就會出現「終端機」，即是 command line tool。

### 指令介紹：

### pwd
首先，你可以輸入「pwd」，按「Enter」，它會印出你現在的位置，「pwd」是「print working directory」的意思。
```
$ pwd
/c/Users/user
```
代表你現在的位置在 `/c/Users/user`。

### cd
你可以用「cd」這個指令，改變你現在的位置，「cd」是「change directory」的意思。
```
$ cd /d/Adobe
$ pwd
/d/Adobe
```

如果要從 `/c/Users/user` 到 `/c/Users/user/desktop`，因為 desktop 就在 user 的下一層，所以只要用 `$ cd desktop` 即可；而從 `/c/Users/user/desktop` 回到上一層 `/c/Users/user`，用 `cd ..` 即可。

現在用 cd 去到你要建立 wifi 資料夾的位置吧！


### mkdir
接著，你可以用「mkdir」這個指令，建立資料夾，「mkdir」是「make directory」的意思。
```
$ mkdir wifi
```

### rmdir
用「rmdir」，移除資料夾，「rmdir」是「remove directory」的意思。
```
$ rmdir wifi
```

接著，用 cd 去到你要建立 afu.js 檔案的位置。
```
$ cd wifi
```

### touch
用「touch」，建立檔案。
```
$ touch afu.js
```
也可以用「touch」，更改檔案最後的修改時間。

### mv
用「mv」，修改檔案名稱。
```
$ mv afu.js howhow.js
```
檔案名稱變成 howhow.js 了。

用「mv」，移動檔案。
```
$ mv howhow.js ..
```
howhow.js 被移到上一層了，我們去上一層把它移回來。
```
$ cd ..
$ mv howhow.js wifi
$ cd wifi
$ mv howhow.js afu.js
```
回到 wifi 資料夾，把檔案名稱改回來。

### cp
複製檔案，「cp」是「copy」的意思。。
```
$ cp afu.js afu2.js
```

### ls
印出資料夾裡面所有的檔案，「ls」是「list」的意思。
```
$ ls
afu.js  afu2.js
```
用 `$ ls -l` 可以看到檔案更詳細的資訊，例如：權限、檔案大小、檔案最後的修改時間等等。

### rm
刪除檔案。
```
$ rm afu2.js
```

### clear
清空 command line 的畫面。
```
$ clear
```

好啦！剛剛操作的指令都被清空了，現在換你來試試看吧！



