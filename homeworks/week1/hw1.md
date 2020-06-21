## 交作業流程
1.	透過 Github classroom 複製一份 mentor-program-4th （交作業的模板）到 mentor-program-4th-joan821010，也就是複製一份 Git repository 的意思。
2.	clone mentor-program-4th-joan821010 的網址，假設我要把資料放在 lidemy 資料夾下，就用 git bash 到 lidemy 資料夾底下，用指令：git clone https://github.com/Lidemy/mentor-program-4th-joan821010.git 。

3.	進入 mentor-program-4th-joan821010 資料夾。
4.	開一個 branch，範例：git branch week1。
5.	切換到 week1 這個 branch，範例：git checkout week1（4、5 點可以合併成一個指令：git checkout –b week1）。
6.	寫入當週作業。
7.	確定完成所有作業，看自我檢討修改作業。
8.	建立新版本，範例：git commit –am “week1 完成”。
9.	把新版本 push 到遠端的 repository（在 github 上面的 mentor-program-4th-joan821010），範例：git push origin week1。

10.	去 github 的 mentor-program-4th-joan821010，按 Pull requests，出現 Compare & pull request，點它，在標題寫「week1 完成」，可以在 Write 裡面問問題。
11.	如果沒出現 Compare & pull request，按 New pull request，把 Compare 選為 week1 這個 branch，按 Create pull request。
12.	最後按 Create pull request。
13.	複製 PR 網址（第 12 點完成後出現的頁面網址）。
14.	到學習系統的作業列表，按新增作業，選 Week 1，貼上 PR 連結。

15.	作業被批改完成後，會看到 PR 網頁上出現 Merged。
16.	看到 Merged 時，從 week1 這個 branch 切換回 master，範例：git checkout master。
17.	拉下遠端的 repository（同步），範例：git pull origin master。
18.	刪除 week1 這個 branch，範例：git branch –d week1。

