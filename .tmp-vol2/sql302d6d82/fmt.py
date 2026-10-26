import sqlite3, sys, os
DB=os.path.join(os.path.dirname(__file__),'shop.db')
def fmtval(v):
    if v is None: return 'NULL'
    if isinstance(v,float):
        s=f'{v:.6f}'.rstrip('0').rstrip('.')
        return s if s else '0'
    return str(v)
def run(sql):
    con=sqlite3.connect(DB); cur=con.execute(sql)
    rows=cur.fetchall(); cols=[d[0] for d in cur.description]
    data=[[fmtval(v) for v in r] for r in rows]
    w=[len(c) for c in cols]
    for r in data:
        for i,v in enumerate(r): w[i]=max(w[i],len(v))
    print(' | '.join(c.ljust(w[i]) for i,c in enumerate(cols)))
    print('-+-'.join('-'*x for x in w))
    for r in data:
        print(' | '.join(v.ljust(w[i]) for i,v in enumerate(r)))
    con.close()
if __name__=='__main__':
    run(sys.stdin.read())
