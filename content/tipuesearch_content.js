var tipuesearch = {"pages": [{'title': '各組期末報告說明', 'text': '請各組在各自的網站中將期中之前的 content.htm 各 H 標註各自加 1 後內縮在本頁最後一個頁面, 並將標題設為" 期中報告" \n 各組組員請依照各頁面主題, 分別利用各自帳號下的 CMSimfly, Reveal 與 Pelican (Blogger) 內容, 引用至各相關頁面外, 再分別依據各頁面所執行的操作內容, 拍成影音說明影片, 以"國立虎尾科技大學-機械設計工程系-網際內容管理-學號-影片主題"為名稱, 上傳到各自的 Youtube 帳號下後, 嵌入到下列各頁面中, 以作為期末課程評分依據. \n 各學員將資料推送到各組網站時, 必須引用 Github 上版本提交號或連結, 並在影片內容中提供相關資料的說明與連結. \n 網路連線設定 \n 配置可攜程式環境 \n 倉儲改版 \n 靜態 CMSimfly \n Mobile 網站內容 \n Virtual Host \n 分組網站 \n https://github.com/mdewcm2019/wcm2019-task-g1 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g2 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g3 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g4 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g5 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g6 \xa0 \n https://github.com/mdewcm2019/wcm2019-task-g7 \xa0', 'tags': '', 'url': '各組期末報告說明.html'}, {'title': '近端配置與管理', 'text': '', 'tags': '', 'url': '近端配置與管理.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit  git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n 靜態 CMSimfly\n 利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用  HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': '系統開發', 'text': '\n (來源:\xa0 https://github.com/kamranahmedse/developer-roadmap ) \n 強化網際內容與系統的可用性 \n 網際內容與前端開發 \n \n \n (來源:\xa0 https://github.com/kamranahmedse/developer-roadmap ) \n 強化內容部分: \n 利用 Html5 建立 Github Pages 上的個人網站 \n 1. The Essential Guide to HTML5 -\xa0Using Games to Learn HTML5 and JavaScript (2018) \n https://link.springer.com/book/10.1007/978-1-4842-4155-4 \xa0 \n Source Code:\xa0 https://github.com/Apress/essential-guide-html5 \xa0 \n Example: \xa0 ./../downloads/essential-guide-html5/Ch04/cannball1.html \xa0 \n 2. Pro HTML5 Games - Learn to Build your Own Games using HTML5 and JavaScript (2017) \n https://link.springer.com/book/10.1007/978-1-4842-2910-1 \xa0 \n Source Code:\xa0 https://github.com/apress/pro-html5-games-17 \xa0 \n Example: \xa0 ./../downloads/pro-html5-games-17/9781484229095/9781484229095_Ch05/index.html \n Bootstrape 模板部分: \n Introduction to Bootstrap 4 (2016) \n https://link.springer.com/book/10.1007/978-1-4842-2382-6 \n 在此一類別所能進行的期末報告, 可以透過組員的協同, 將 \n https://github.com/BlackrockDigital \n 與 \n https://themewagon.com/theme_tag/bootstrap-4-templates/ \n 各式 Template 導入 CMSimfly, 讓未來的使用者可以根據不同環境需求, 選擇不同的靜態網頁模板. \n \n Understanding Scope in Javascript \n How to completely remove files from Github\xa0history \n How to structure your Javascript \n 深入了解網際內容管理系統的配置環境 \n 網際後端環境提供與開發 \n \n \n (來源:\xa0 https://github.com/kamranahmedse/developer-roadmap ) \n 此類期末報告的任務, 在利用 Virtualbox 中的 Ubuntu 操作系統, 配置一套可以動態啟動的虛擬網際內容管理系統, 並學習如何在虛擬操作系統與實體操作系統中配置 CMSimfly 網際內容管理系統. 相關規劃可以參考:\xa0 https://2019wcm.blogspot.com/2019/04/virtualbox.html \n 參考 vdi: 位於雲端的 \xa0 Ubuntu 18.04_201904.vdi \xa0 (約 9 GB) - 已經配置 Fossil SCM: https 5443, Host-only: 192.168.56.2, https: 443 and 8843 for CMSimfly, Squid Proxy Server. 假如要利用 USB 隨身碟存放上述約 9 GB 的 Ubuntu 18.04 vdi 檔案, 必須將隨身碟格式化為 NTFS, 若採 Fat32 格式, 最大單一檔案必須小於 4 GB. 另外在近端有一類似的檔案, 可提供上課學員下載: http://wcmg1.kmol.info:88/ub1804_nox.vdi \xa0 (僅限近端用戶使用 IPv6 協定者下載) \n Fossil SCM 如何利用 Fossil SCM, 在 Virtualbox 中的 Ubuntu 18.04-2 (8.5 GB) 建立類似 Github 的系統, 可以放入 CMSimfly 的靜態網頁 Ubuntu 18.04 (https://www.ubuntu.com/about/release-cycle), 配置網路連線, 然後架構 uwsgi 環境下的 CMSimfly 動態網站, 或建立 Fossil SCM 用來伺服管理 CMSimfly 下有版次管理的靜態網頁, 或利用 nginx 伺服無版次管理的 CMSimfly 靜態網頁. \n DNS in one picture \n 最後則是網際系統開發者的學習路徑圖: \n \n \n (來源:\xa0 https://github.com/kamranahmedse/developer-roadmap )', 'tags': '', 'url': '系統開發.html'}, {'title': '程式開發要件', 'text': "Git - 分散式版次控制 (含 Fossil SCM) -  Pro Git ,  Fossil SCM book.pdf ,  Fossil cookbook \n Basic Terminal Usage (基本終端機操作) -  2013 Linux Command Line.pdf \n Data Structures & Algorithms (資料結構與演算法) -  2015 Textbook ,  2008 ,  2001 ,  ods.pdf \n KISS, YAGNI, DRY and  SOLID  (Keep It Simple, Stupid, You Aren't Gonna Need It, Don't Repeat Yourself) \n Github (含自架 Fossil SCM 系統操作) -\xa0 https://lab.github.com/ \n Semantic Versioning  (語義版本控制) ( 2.0.0 ) \n SSH  (Secure SHell) -  2008 Beginning Ubuntu LTS Server Administration \n HTTP/HTTPS and APIs \n Design Patterns \xa0-  2017 Practical Python Design Patterns \n Character Encodings \xa0-  for HTML", 'tags': '', 'url': '程式開發要件.html'}, {'title': 'Mobile 網站內容', 'text': '參考倉儲:  https://github.com/mdecourse/acmsimfly \n 參考網站: \n http://mde.tw/acmsimfly \n https://github.com/BlackrockDigital \n https://themewagon.com/theme_tag/bootstrap-4-templates/ \n https://github.com/kamranahmedse/developer-roadmap \xa0( blog ) \n 學習如何使用 CMSimfly, 在網站中加入各種內容 (導入 Bootstrap frontend framework) 使用 Flask, bs4 與 lxml 模組 了解 CMSimfly 如何建構, 並且嘗試修改現有功能, 除錯或建立自己的網際內容管理系統', 'tags': '', 'url': 'Mobile 網站內容.html'}, {'title': 'CMSimfly 架構', 'text': 'CMSimfly 以 Python 3 編寫, 利用 Flask 網路框架可以在伺服器運行, 讓使用者利用瀏覽器擷取動態 WWW 伺服器所送至近端的 html 加上 Javascript 程式碼, 然後在瀏覽器中顯示網際內容編輯器 (採用 tinymce4). \n 在使用者能夠透過 tinymce4 編輯各 CMSimfly 動態網際頁面之前, CMSimfly 利用 Beautiflysoup 4 對 config/content.htm 進行分頁, 然後將 H1 標註中的文字當作第一階的頁面, H2 與 H3 標註內容則當作第二階與第三階的頁面標題, 而標題與標題之間的 html 與 Javascript 則分別當作各階次頁面的內容. \n 因此 CMSimfly 可以在任何支援 Python 3 、Flask 與 Beautifulsoup 4 的環境中啟動 WWW 伺服器 (即在近端以 python wsgi.py 執行, 或在遠端以 uwsgi 與 nginx 執行 wsgi.py 中的 application), 接著使用者就可以根據伺服器啟動時所使用電腦的 IP 與埠號進行連線. \n 使用者連線後, Beautifulsoup 即對 config/content.htm 分頁, 然後根據頁面配置讓使用者在瀏覽器中使用 login 登入, 或者以動態的方式檢視各階次的分頁. \n 當使用者透過 login 登入 CMSimfly 成功後, 便可以指定頁面進行編輯, 修改後內容將存入 config/content.htm, 而尚未改版前的 content.htm 則改名為 content_backup.htm, 此一功能是防止 CMSimfly 因頁面解讀錯誤時, 誤刪資料時, 使用者可以從 content_backup.htm 取回上一版的資料內容. \n 動態轉靜態內容 \n 由於動態 CMSimfly 只能在 Python3 環境中運行, 而某些免費的雲端服務所提供的 WWW 伺服器僅提供 html 加上 Javascript 伺服, 因此為了讓 CMSimfly 動態系統的內容, 能夠將內容送到這些只提供 WWW 伺服器的系統中執行, CMSimfly 加入 generate_pages 的功能, 也就是根據 config/content.htm 中各頁面的標題與資料, 以 Beautifulsoup4 再結合 lxml 模組, 將 content.htm 疊上各頁面所選定的 css 與其他配置頁面格式的 Javascript, 轉成位於 content 目錄中的靜態網站內容, 此一包含 index.html 的各頁面 html 檔案, 可以在任何只支援 html 伺服器的環境中運行, 例如: Github Pages 或 Fossil SCM 中的 doc 伺服頁面功能. \n 截至目前的說明, 希望啟動 CMSimfly 動態運行, 需要  Python 3 、Flask 與 Beautifulsoup 4\xa0, 若要將動態內容轉為靜態內容, 則額外需要 lxml 模組. \n Python 3 在隨身系統的模組安裝指令為: \n pip install flask bs4 lxml \n 表示要利用 pip 安裝 flask, bs4 與 lxml 模組. \n', 'tags': '', 'url': 'CMSimfly 架構.html'}, {'title': 'bs4 應用', 'text': 'import bs4\n\nfilename = "index.html"\nwith open(filename, "r", encoding="utf-8") as f:\n    file_content = f.read()\n\nsoup = bs4.BeautifulSoup(file_content, "lxml")\n\nnew_content = soup.prettify()\nprint(new_content)\n\nwith open(filename, "w", encoding="utf-8") as f:\n    f.write(new_content)\n\n#print(soup.prettify())\n \n', 'tags': '', 'url': 'bs4 應用.html'}, {'title': '套用模板一', 'text': 'https://themewagon.com/themes/free-html5-bootstrap-4-business-website-template-chimper/ \n 採用程式庫: \n https://github.com/mattboldt/typed.js \xa0 \n https://github.com/michalsnik/aos \n https://github.com/eternicode/bootstrap-datepicker \xa0 \n https://github.com/dimsemenov/Magnific-Popup \n http://hilios.github.io/jQuery.countdown/ \n https://github.com/markdalgleish/stellar.js/ \n https://github.com/OwlCarousel2/OwlCarousel2 \n https://github.com/twbs/bootstrap/releases/tag/v4.1.3 \n https://github.com/FezVrasta/popper.js/ \n https://github.com/jquery/jquery-ui/releases/tag/1.12.1 \n https://github.com/jquery/jquery-migrate/releases/tag/3.0.1 \n https://github.com/jquery/jquery/releases/tag/3.3.1 \n 動態 CMSimfly 仍維持原樣, 但是靜態網頁可以自由選擇頁面模板 \n Github Pages: \n http://cpgx.kmol.info/chimper/ \n', 'tags': '', 'url': '套用模板一.html'}, {'title': 'Virtual Host', 'text': '以下內容主要目的在培養能夠建立 backend 網際可程式化機械設計合成系統的開發人員, 網際前端與後端的開發流程, 可以參考: \n https://github.com/kamranahmedse/developer-roadmap \xa0( blog ) \n 前端開發者必須讓網頁能在各種大小與規格的瀏覽裝置中, 正確且友善地顯示內容, 而後端開發者, 則專注於讓近端使用者能夠透過網際介面使用各種與機械設計流程相關的 CAD, CAE, CAM, PDM, 以及各種支援用的數位型錄等. \n 參考 vdi: 位於雲端的  Ubuntu 18.04_201904.vdi  (約 9 GB) - 已經配置 Fossil SCM: https 5443, Host-only: 192.168.56.2, https: 443 and 8843 for CMSimfly, Squid Proxy Server. 假如要利用 USB 隨身碟存放上述約 9 GB 的 Ubuntu 18.04 vdi 檔案, 必須將隨身碟格式化為 NTFS, 若採 Fat32 格式, 最大單一檔案必須小於 4 GB. 另外在近端有一類似的檔案, 可提供上課學員下載: http://wcmg1.kmol.info:88/ub1804_nox.vdi  (僅限近端用戶使用 IPv6 協定者下載) \n Fossil SCM 如何利用 Fossil SCM, 在 Virtualbox 中的 Ubuntu 18.04-2 (8.5 GB) 建立類似 Github 的系統, 可以放入 CMSimfly 的靜態網頁 Ubuntu 18.04 (https://www.ubuntu.com/about/release-cycle), 配置網路連線, 然後架構 uwsgi 環境下的 CMSimfly 動態網站, 或建立 Fossil SCM 用來伺服管理 CMSimfly 下有版次管理的靜態網頁, 或利用 nginx 伺服無版次管理的 CMSimfly 靜態網頁.', 'tags': '', 'url': 'Virtual Host.html'}, {'title': 'CMSimfly 問題', 'text': 'CMSimfly 使用相關問題, 請提供在此, 目前已知問題: \n 當刪除最後一頁全部內容後, ssavePage 函式存檔後將會出現錯誤畫面, 重新回到系統後即恢復正常. \n 錯誤訊息為: \n File "Y:\\tmp\\scrum1\\wcm2019\\flaskapp.py", line 2220, in ssavePage if original_head_title == head[int(page_order)]: IndexError: list index out of range \n 處理方式如下: \n     # 嘗試避免因最後一個標題刪除儲存後產生 internal error 問題\n    if original_head_title is None:\n        return redirect("/")\n    try:\n        if original_head_title == head[int(page_order)]:\n            edit_url = "/get_page/" + original_head_title + "/1"\n            return redirect(edit_url)\n        else:\n            return redirect("/")\n    except:\n        return redirect("/") \n', 'tags': '', 'url': 'CMSimfly 問題.html'}, {'title': '期末報告', 'text': '網際內容管理課程的期末報告將分為五專部與四技部, 五專部的期末報告可以從\xa0 1) CMSimfly 中的互動式內容與 2) 新增 CMSimfly 手機模板中選擇一項, 而四技部則需以分組 pull request 的協同模式將此兩類內容放入各分組網站中. \n 除上述任務外, 各學員或分組必須在 CMSimfly 網頁中, 以嵌入操作示範影片, 將課程中所涵蓋的基礎內容加以整理並詳細說明用法. \n 最後, 除了 Github Pages 外, 各組員或分組也可以利用 Virtualbox 中的 Ubuntu 伺服器, 以 Fossil SCM 進行 CMSimfly 靜態內容的版次管理, 或利用 uwsgi 與 Nginx 將動態系統配置在虛擬主機中. \n', 'tags': '', 'url': '期末報告.html'}]};