## 跟你朋友介紹 Git
### Git 的基本概念：
可以把 Git 做版本控制的方式用「用資料夾做版本控制」來比喻。

1. 把第一版檔案建立在 v1 資料夾底下，不需要加入版本控制的檔案放在資料夾之外。
2. 當要建立新版本時，複製 v1 資料夾，命名 v2，然後修改 v2 資料夾裡面的檔案。

這樣你可以從外觀上很清楚的看到 v1、v2，也知道同一個資料夾裡面的檔案就是同一版。

不過 Git 比較不同的地方是，它的 v1、v2 是用一組絕對不會重複的英數字取代，這樣當同時修改 v1、v2 的檔案時，不用煩惱哪一個要叫 v3。

另一個不同的地方是，當確立一個版本誕生時，Git 強制規定要加上對於這個新版本的描述，例如：這一版跟上一版有什麼差別？並且從外觀上就可以一目瞭然地看到這些敘述。

另外，Git 只會儲存修改、變動的部分，並不會儲存整個檔案，因此不會像用資料夾做版本控制這麼佔記憶體空間。

### Git 基礎的使用：
首先到 [Git](https://git-scm.com/)，點選畫面右邊 Download for Windows 進行下載，下載完成後，點兩下開啟檔案，一直按下一步，安裝完成以後，在電腦裡面搜尋「git bash」。

接著，更改路徑位置到要用 Git 做版本控制的資料夾底下。

### git init
用指令 git init，使這個資料夾可以用 git 做版本控制。
可以用 `rm -r .git` 移除 git 的版本控制。

假設現在要在 joke 資料夾下做版本控制，有 3 個檔案要加入版本控制：
```
dog.txt
cat.txt
pig.txt
```
1 個檔案不需要加入版本控制：
```
test.txt
```

### git status
用 git status 查看目前版本控制的狀態。

會看到目前 4 個檔案都是「Untracked files」，意思是還沒加入版本控制的檔案。

在把檔案加入版本控制之前，先把不需要加入版本控制的檔案寫入 .gitignore，這樣 git 就會忽略它，不會把它加入版本控制。
```
$ touch .gitignore

$ vim .gitignore

輸入 test.txt 
```
用 git status 看檔案是不是有成功寫入 .gitignore 裡面。

接下來，把檔案加入版本控制。

### git add 檔案
加入單個檔案，範例：`git add dog.txt`

### git add .
加入全部檔案。

用 git status 查看版本控制狀態，檔案變成「Staged files」，意思是已經加入版本控制的檔案。

可以用 `git rm --cached 檔案` 回到「Untracked files」狀態，範例：`git rm --cached dog.txt`。

### git commit –m “描述”
建立一個新版本，在雙引號裡面加入對這個版本的描述，範例：`git commit -m “first commit”`。

### git commit
如果敘述很長，可以打在這裡。

可以用 `git commit --amend` 修改敘述。

接著，修改第一版的檔案。

可以用 `git restore 檔案` 取消修改。

### git diff
在 commit 之前，用 git diff 查看修改的部分。

### git commit -am “描述”
修改的檔案不用像新檔案要先 add、再 commit，可以兩個步驟一起做，範例：`git commit -am “second commit”`。

### git log
建立完第二版後，用 git log 看一下版本的歷史紀錄，那串長的像亂碼的英數字，就是絕對不會和其他版本重複的版本號。

可以用 `git log --oneline` 看到較簡潔的紀錄，可以用前 7 個英數字代指版本號。

### git checkout 版本號
用 `git checkout 版本號` 去看不同版本的檔案內容。

### git checkout master
回去最新版本。



