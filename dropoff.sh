#!/bin/bash
# 逐题流失表：./dropoff.sh [只看最近几小时开始的，默认 24]
# 每个没答完的人按“最远到过哪题”算流失位置（prog 节点 + 切走页面时的 leave 事件）；只算已开始 40 分钟以上的人
HOURS=${1:-24}
W=${WRANGLER:-$(python3 -c "import json,os;print(json.load(open(os.path.join('$(dirname "$0")','local.json'))).get('wrangler') or 'npx wrangler')" 2>/dev/null || echo "npx wrangler")}
cd "$(dirname "$0")/deploy"
LEAVE_TS=1790522789000   # leave 事件上线时间，之前开始的人没有逐题数据
$W d1 execute humanbench-stats --remote --json --command "
WITH st AS (SELECT sid FROM events WHERE ev='start' AND sid NOT LIKE 'qa-%' AND ts >= MAX($LEAVE_TS, (strftime('%s','now') - $HOURS*3600)*1000) AND ts < (strftime('%s','now')-2400)*1000 GROUP BY sid),
e AS (SELECT e.sid, e.ev, CAST(json_extract(e.d,'\$.q') AS INT) q, json_extract(e.d,'\$.nx') nx FROM events e JOIN st ON st.sid=e.sid WHERE e.ev IN ('prog','leave','finish')),
m AS (SELECT st.sid, COALESCE(MAX(e.ev='finish'),0) fin, MAX(COALESCE(e.q,0)) mx FROM st LEFT JOIN e ON e.sid=st.sid GROUP BY st.sid)
SELECT m.fin, m.mx, (SELECT nx FROM e WHERE e.sid=m.sid AND e.q=m.mx AND e.nx IS NOT NULL LIMIT 1) nx FROM m" 2>/dev/null | python3 -c '
import json,sys,re,collections
raw=sys.stdin.read()
try: rows=json.JSONDecoder().raw_decode(raw[re.search(r"^\[", raw, re.M).start():])[0][0]["results"]
except Exception as e: print("查询失败", e); sys.exit()
n=len(rows)
if not n: print("还没有样本（leave 埋点上线后开始、且已开始 40 分钟以上的人）"); sys.exit()
fin=sum(r["fin"] for r in rows)
drop=collections.Counter(); tag=collections.defaultdict(collections.Counter)
for r in rows:
    if r["fin"]: continue
    k=(r["mx"] or 0)+1; drop[k]+=1
    t=r["nx"] or ("traps_fixed:0" if k==1 else "验证/起名页" if k==77 else "?")
    tag[k][t]+=1
print(f"样本：{n} 人开始，{fin} 人答完（{100*fin/n:.0f}%）")
print("题号  流失人数  占开始  之后还剩   停在的题（题池:题号，最常见的两道）")
left=n
for k in range(1,78):
    d=drop.get(k,0); left-=d
    t=", ".join(f"{a}×{b}" for a,b in tag[k].most_common(2)) if d else ""
    bar="█"*round(100*d/n)
    if k==77 and not d: continue
    lab="Q"+str(k) if k<77 else "收尾"
    print(f"{lab:<4} {d:>6}   {100*d/n:>5.1f}%   {100*left/n:>5.0f}%    {t} {bar}")
'
