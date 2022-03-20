針對國中一年級下學期第一次段考所製作的口說評測系統。

1. cd BrowserJS
   \\activate your virtualenv\\
2. pip install -r requirements.txt
3. set FLASK_APP=application.py 
4. set FLASK_ENV=development //$env:FLASK_APP = "application.py"用這個才有用
5. flask run

database
1. python
2. from application import db
3. db.create_all()
4. exit()

確認 database table 
1. sqlite3 database.db 
2. .tables
3. select * from user;

刪除 user
1. sqlite3 database.db
2. delete from user;
3. select * from user;
4. .exit