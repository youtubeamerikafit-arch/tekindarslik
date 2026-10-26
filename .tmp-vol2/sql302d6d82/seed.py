import sqlite3, os
DB = os.path.join(os.path.dirname(__file__), "shop.db")
if os.path.exists(DB): os.remove(DB)
c = sqlite3.connect(DB)
c.executescript('''
CREATE TABLE mijozlar(id INTEGER PRIMARY KEY, ism TEXT, email TEXT, shahar TEXT, royxatdan_otgan TEXT, segment TEXT);
CREATE TABLE mahsulotlar(id INTEGER PRIMARY KEY, nom TEXT, kategoriya TEXT, narx REAL, ombor_soni INTEGER, faol INTEGER);
CREATE TABLE buyurtmalar(id INTEGER PRIMARY KEY, mijoz_id INTEGER, holat TEXT, buyurtma_sanasi TEXT, jami_summa REAL);
CREATE TABLE buyurtma_qatorlari(id INTEGER PRIMARY KEY, buyurtma_id INTEGER, mahsulot_id INTEGER, miqdor INTEGER, narx REAL);
''')
c.executemany("INSERT INTO mijozlar VALUES(?,?,?,?,?,?)", [
(1,'Aziza Karimova','aziza@mail.uz','Toshkent','2024-01-05','premium'),
(2,'Bekzod Toshev','bek@mail.uz','Samarqand','2024-01-18','oddiy'),
(3,'Dilnoza Yusupova','dilnoza@mail.uz','Buxoro','2024-02-02','premium'),
(4,'Jasur Rahimov','jasur@mail.uz','Toshkent','2024-02-20','oddiy'),
(5,'Nodira Ismoilova','nodira@mail.uz','Nukus','2024-03-03','premium'),
(6,'Sardor Qodirov','sardor@mail.uz','Andijon','2024-03-15','oddiy'),
(7,'Malika Sobirova','malika@mail.uz','Toshkent','2024-04-01','premium'),
(8,'Otabek Nazarov','otabek@mail.uz','Fargona','2024-04-12','oddiy'),
(9,'Kamola Ergasheva','kamola@mail.uz','Samarqand','2024-05-06','premium'),
(10,'Rustam Yoldoshev','rustam@mail.uz','Buxoro','2024-05-21','oddiy')])
c.executemany("INSERT INTO mahsulotlar VALUES(?,?,?,?,?,?)", [
(1,'Noutbuk Pro 14','Elektronika',12500000,12,1),
(2,'Simsiz sichqoncha','Elektronika',280000,80,1),
(3,'Mexanik klaviatura','Elektronika',950000,35,1),
(4,'Monitor 27 dyuym','Elektronika',3200000,18,1),
(5,'Ofis kursisi','Mebel',1850000,22,1),
(6,'Yozuv stoli','Mebel',2400000,10,1),
(7,'Choyshab toplami','Uy',450000,60,1),
(8,'Aeropress','Oshxona',720000,25,0),
(9,'Termos 1L','Oshxona',180000,120,1),
(10,'Ryukzak 25L','Aksessuar',350000,45,1)])
c.executemany("INSERT INTO buyurtmalar VALUES(?,?,?,?,?)", [
(101,1,'yetkazilgan','2024-06-01',12780000),
(102,2,'yetkazilgan','2024-06-03',950000),
(103,3,'bekor','2024-06-05',3200000),
(104,4,'yetkazilgan','2024-06-08',2300000),
(105,1,'yetkazilgan','2024-06-15',1410000),
(106,1,'yetkazilgan','2024-06-18',15700000),
(107,5,'jonatilgan','2024-06-20',2400000),
(108,6,'yetkazilgan','2024-06-22',700000),
(109,7,'yetkazilgan','2024-06-25',1080000),
(110,8,'tolangan','2024-06-27',3700000),
(111,1,'yetkazilgan','2024-06-29',12850000),
(112,9,'yangi','2024-06-30',6400000)])
items=[]
def add(oid, pairs):
    for pid,q,p in pairs: items.append((oid,pid,q,p))
add(101,[(1,1,12500000),(2,1,280000)])
add(102,[(3,1,950000)])
add(103,[(4,1,3200000)])
add(104,[(5,1,1850000),(7,1,450000)])
add(105,[(2,1,280000),(3,1,950000),(9,1,180000)])
add(106,[(1,1,12500000),(4,1,3200000)])
add(107,[(6,1,2400000)])
add(108,[(10,2,350000)])
add(109,[(8,1,720000),(9,2,360000)])
add(110,[(5,2,3700000)])
add(111,[(1,1,12500000),(10,1,350000)])
add(112,[(4,2,6400000)])
c.executemany("INSERT INTO buyurtma_qatorlari(buyurtma_id,mahsulot_id,miqdor,narx) VALUES(?,?,?,?)", items)
c.commit()
print('ok')
