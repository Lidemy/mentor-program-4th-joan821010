## hw2：部屬

[我的網站連結](http://wordboard.tw/blog/)

2020/09/19
今天開始研究如何使用 aws 來部屬網站，因為第 11、12、13週的進度還有落後，因此滿心急的，又怕做錯導致進度更落後，因此一個步驟會先在心裡想一遍做法，再馬上看影片和心得看看自己有沒有做錯，碰到問題時如果 google 沒找到答案，就會直接參考學長姐的心得或 huli 的示範影片看解決辦法，今天掃過心得和第一個影片、google 部屬 aws、註冊 aws、google 信用卡號碼和截止日期、知道怎麼把中文地址轉英文、大概看一下 Root user 和 IAM user 的差別、google how do I choose the right AMI for instance、google x86 arm 差別，希望明天部屬能更順利。

2020/09/21
昨天走過 Step 2、3、4、5、6、7、Launch、Create a new key pair（連線主機的密碼），我覺得最困難的部分就是翻譯完的名詞不是很熟悉是做什麼用的，第二個困難是閱讀英文，怕翻錯意思。

今天繼續研究如何部屬網站，先登入 aws，執行個體，動作，連線，SSH 用戶端，依照指令連線，連線成功！（看主機資訊：`top`；離開：`q`），更新 ubuntu 上面的 apt（管理套件的程式，mac：homebrew、cask）：`sudo apt update && sudo apt upgrade && sudo apt dist-upgrade`，`y`，安裝 tasksel 來快速安裝 LAMP：`sudo apt install tasksel`，`sudo tasksel install lamp-server`，用 `curl IP` 或是 `telnet IP 80` 來確定有沒有架設成功。

2020/09/22
今天要來安裝 phpmyadmin：`sudo apt install phpmyadmin`，按空白鍵選擇 apache2，是否設定 dbconfig-common？選 yes，設定 phpmyadmin 這個 MySQL 使用者的密碼，完成後在瀏覽器的網址列輸入 IP/phpmyadmin 看看是否安裝成功。

接著要來設定 MySQL 的 root 帳號的密碼，讓我可以用 root 使用者的帳號密碼登入：`sudo mysql –u root mysql`，`UPDATE user SET plugin='mysql_native_password' WHERE User='root';`，`FLUSH PRIVILEGES;`，`exit`，`sudo mysql_secure_installation`，`y`，決定密碼複雜度：0，輸入密碼，再次輸入密碼，除了 disallow root login remotely？輸入 n，其他都輸入 y，接著就可以用 root 的帳號密碼登入 phpmyadmin！

用其他軟體登入資料庫，首先調整 security group（開防火牆），編輯傳入規則，新增規則，搜尋 MYSQL，加入 3306 port，再來用 root 的帳號密碼登入 phpmyadmin，使用者帳號，編輯 root 的權限，登入資訊，把主機名稱改成任何主機，就成功了！

接著 `cd /var/www/html/`，輸入 `ls`，出現的 index.html 就是在網址上輸入 IP 的檔案，這時候 touch a.html 會失敗，因為沒有權限，到 /var/www/：`cd ..`，`ls –al`，會看到只有 root 有權限，更改權限：`sudo chown ubuntu /var/www/html`，如此一來就可以順利加入檔案：`echo "hello" > a.html`，`echo "<?php echo 123; ?>" > a.php`。

2020/09/23
今天要在 gandi 上註冊網域，並試著將網域和主機串聯起來，這部分我是看學長姊的心得來操作，自己查到的資料是 gandi 的「將域名連結到主機」，但一開始看不懂，後來才看懂。google 怎麼匯出 phpmyadmin，最後還是看 huli 影片學習匯出匯入 phpmyadmin 的資料，接著 google 怎麼用 FTP 上傳檔案，最後仍然是看學長姊的心得和 huli 影片學習用 FTP 上傳檔案，雖然如此，當看到網站被架設成功的那一刻還是非常感動，彷彿過去到現在的努力都是為了這一刻一般。

參考資料：
[部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
[[紀錄] 部屬 AWS EC2 雲端主機 + LAMP Server + phpMyAdmin](https://mtr04-note.coderbridge.io/2020/09/15/-%E7%B4%80%E9%8C%84-%08-%E9%83%A8%E5%B1%AC-aws-ec2-%E9%9B%B2%E7%AB%AF%E4%B8%BB%E6%A9%9F-/)
[AWS EC2 佈署網站：卡關記錄](https://nicolakacha.coderbridge.io/2020/09/16/launch-website/)
[安裝 LAMP Server + phpMyAdmin 在 Linux 系統上輕鬆架設網站](https://magiclen.org/lamp/)
[「教學」建立 Amazon EC2 免費主機 | Victor Hung's Diary](https://diary.taskinghouse.com/posts/309383-setup-free-amazon-ec2-instance/)
[Ubuntu 18.04上安装 phpMyAdmin的详细教程](https://m.jb51.net/article/175972.htm)
[在Ubuntu 18.04服务器上安装phpMyAdmin的完整步骤_Linux云数据库_云网牛站](https://ywnz.com/linuxysjk/5532.html)
[將域名連結到主機](https://docs.gandi.net/zh-hant/simple_hosting/common_operations/link_to_domain.html#id6)

