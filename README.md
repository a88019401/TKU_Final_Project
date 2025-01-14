

![image](https://github.com/a88019401/TKU_Final_Project/blob/main/1.JPG)
##  國中口說評測系統
(這是我學士後畢業的心血QQ，一人獨立完成，那時還沒有ChatGPT，回頭想想我當時真厲害xD)
## 啟動環境與執行伺服器

```bash
# 切換到專案目錄並啟動虛擬環境
cd BrowserJS
\activate your virtualenv\

# 安裝所需套件
pip install -r requirements.txt

# 設定 Flask 相關環境變數
set FLASK_APP=application.py
set FLASK_ENV=development
# 如果以上無效，使用以下指令
$env:FLASK_APP = "application.py"

# 啟動 Flask 伺服器
flask run
# 進入 Python 互動模式
python
from application import db
db.create_all()
exit()
# 使用 SQLite3 確認資料庫 Table
sqlite3 database.db
.tables
select * from user;
# 使用 SQLite3 刪除 user 資料
sqlite3 database.db
delete from user;
select * from user;
.exit
