from bs4 import BeautifulSoup
from urllib import urlopen
import pymysql

#link bukalapak
bukalapak = "https://www.bukalapak.com/c/handphone?source=navbar&from=navbar_categories"

#buka bukalapak
bukalapakClient = urlopen(bukalapak)
html_page = bukalapakClient.read()
bukalapakClient.close()

#buka database
db = pymysql.connect(db='base', user='root', passwd='pwd', unix_socket="/tmp/mysql.sock")
cursor = db.cursor()
cursor.execute("DROP TABLE IF EXISTS database1")

sql = """CREATE TABLE database1 (Nama Varchar(100), Harga Int )"""



#scrap harga dan nama dari bukalapak
bukalapakPage = BeautifulSoup(html_page, "html5lib")
products = bukalapakPage.find_all("li", class_ = "product--sem col-12--2")
for product in products :
    product_name = product.div.article.div.a["title"]
    product_price = product.find("div", class_ = "product-price").find("span", class_ = "amount positive").text
    #insert to table
    try:
        cursor.execute("""INSERT INTO database1 VALUES (%s,%s)""",(product_name,product_price))
        db.commit()
    except:
        db.rollback()

#showtable
cursor.execute("""SELECT * FROM database1;""")

print cursor.fetchall()

db.close()
