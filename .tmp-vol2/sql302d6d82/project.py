import sqlite3, os
DB=os.path.join(os.path.dirname(__file__),'project.db')
if os.path.exists(DB): os.remove(DB)
c=sqlite3.connect(DB)
c.executescript('''
CREATE TABLE mijoz(id INTEGER PRIMARY KEY, ism TEXT, shahar TEXT, royxatdan TEXT, kohort TEXT);
CREATE TABLE fakt(mijoz_id INTEGER, oy TEXT, summa REAL);
''')
cust=[(1,'Aziza Karimova','Toshkent','2024-01-05','2024-01-01'),(2,'Bekzod Toshev','Samarqand','2024-01-18','2024-01-01'),(3,'Dilnoza Yusupova','Buxoro','2024-02-02','2024-02-01'),(4,'Jasur Rahimov','Toshkent','2024-02-20','2024-02-01'),(5,'Nodira Ismoilova','Nukus','2024-03-03','2024-03-01'),(6,'Sardor Qodirov','Andijon','2024-03-15','2024-03-01'),(7,'Malika Sobirova','Toshkent','2024-04-01','2024-04-01'),(8,'Otabek Nazarov','Fargona','2024-04-12','2024-04-01'),(9,'Kamola Ergasheva','Samarqand','2024-05-06','2024-05-01'),(10,'Rustam Yoldoshev','Buxoro','2024-05-21','2024-05-01')]
c.executemany('INSERT INTO mijoz VALUES(?,?,?,?,?)',cust)
rows=[
(1,'2024-01-01',1250000),(2,'2024-01-01',950000),
(1,'2024-02-01',2400000),(2,'2024-02-01',700000),(3,'2024-02-01',1850000),(4,'2024-02-01',450000),
(1,'2024-03-01',3200000),(3,'2024-03-01',1100000),(4,'2024-03-01',2300000),(5,'2024-03-01',12500000),(6,'2024-03-01',950000),
(1,'2024-04-01',1450000),(2,'2024-04-01',3200000),(5,'2024-04-01',720000),(7,'2024-04-01',1850000),(8,'2024-04-01',350000),
(1,'2024-05-01',12850000),(3,'2024-05-01',1410000),(6,'2024-05-01',1080000),(7,'2024-05-01',3700000),(9,'2024-05-01',950000),(10,'2024-05-01',700000),
(1,'2024-06-01',6400000),(2,'2024-06-01',2400000),(4,'2024-06-01',1080000),(5,'2024-06-01',1850000),(8,'2024-06-01',12500000),(9,'2024-06-01',3200000),(10,'2024-06-01',450000),
(1,'2024-07-01',2100000),(2,'2024-07-01',1750000),(3,'2024-07-01',3200000),(5,'2024-07-01',900000),(7,'2024-07-01',2400000),(9,'2024-07-01',1800000),(10,'2024-07-01',1250000)
]
c.executemany('INSERT INTO fakt VALUES(?,?,?)',rows); c.commit()
print('rows',len(rows))
print('monthly:')
for r in c.execute("SELECT oy, count(DISTINCT mijoz_id), sum(summa) FROM fakt GROUP BY oy ORDER BY oy"): print(r)
print('cohort m1/m2:')
for r in c.execute('''
WITH k AS (SELECT mijoz_id, min(oy) kohort FROM fakt GROUP BY mijoz_id)
SELECT k.kohort, count(DISTINCT k.mijoz_id),
count(DISTINCT CASE WHEN f.oy = date(k.kohort,'+1 month') THEN f.mijoz_id END),
count(DISTINCT CASE WHEN f.oy = date(k.kohort,'+2 month') THEN f.mijoz_id END)
FROM k LEFT JOIN fakt f USING(mijoz_id) GROUP BY k.kohort ORDER BY k.kohort'''): print(r)
print('rfm:')
for r in c.execute('''
WITH mo AS (SELECT mijoz_id, max(oy) oxirgi, count(*) f, sum(summa) jami FROM fakt WHERE oy <= '2024-06-01' GROUP BY mijoz_id),
b AS (SELECT mijoz_id, CASE WHEN oxirgi >= '2024-06-01' THEN 3 WHEN oxirgi >= '2024-05-01' THEN 2 ELSE 1 END r,
 CASE WHEN f>=4 THEN 3 WHEN f=3 THEN 2 ELSE 1 END f,
 CASE WHEN jami>=10000000 THEN 3 WHEN jami>=4000000 THEN 2 ELSE 1 END m, jami FROM mo)
SELECT mijoz_id,r,f,m,r*100+f*10+m,jami, CASE WHEN r=3 AND f>=2 THEN 'chempion' WHEN r>=2 AND f>=2 THEN 'sodiq' WHEN f=1 THEN 'yangi' ELSE 'xavf ostida' END seg FROM b ORDER BY r*100+f*10+m DESC'''): print(r)
print('segments:')
for r in c.execute('''
WITH mo AS (SELECT mijoz_id, max(oy) oxirgi, count(*) f, sum(summa) jami FROM fakt WHERE oy <= '2024-06-01' GROUP BY mijoz_id),
b AS (SELECT mijoz_id, CASE WHEN oxirgi >= '2024-06-01' THEN 3 WHEN oxirgi >= '2024-05-01' THEN 2 ELSE 1 END r,
 CASE WHEN f>=4 THEN 3 WHEN f=3 THEN 2 ELSE 1 END f,
 CASE WHEN jami>=10000000 THEN 3 WHEN jami>=4000000 THEN 2 ELSE 1 END m, jami FROM mo),
s AS (SELECT *, CASE WHEN r=3 AND f>=2 THEN 'chempion' WHEN r>=2 AND f>=2 THEN 'sodiq' WHEN f=1 THEN 'yangi' ELSE 'xavf ostida' END seg FROM b)
SELECT seg,count(*),sum(jami),round(avg(jami),2) FROM s GROUP BY seg ORDER BY sum(jami) DESC'''): print(r)
