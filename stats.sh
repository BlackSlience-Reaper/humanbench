#!/bin/bash
# HumanBench 数据看板：./stats.sh [天数，默认 7]
# 数据在 Cloudflare D1（humanbench-stats），用 wrangler 查；sid 以 qa- 开头的是测试数据，已排除
DAYS=${1:-7}
W=${WRANGLER:-$(python3 -c "import json,os;print(json.load(open(os.path.join('$(dirname "$0")','local.json'))).get('wrangler') or 'npx wrangler')" 2>/dev/null || echo "npx wrangler")}
cd "$(dirname "$0")/deploy"
SINCE="(strftime('%s','now') - $DAYS*86400) * 1000"
F="ts > $SINCE AND sid NOT LIKE 'qa-%'"
q() { $W d1 execute humanbench-stats --remote --json --command "$1" 2>/dev/null | python3 -c '
import json,sys,re
raw=sys.stdin.read()
try: rows=json.JSONDecoder().raw_decode(raw[re.search(r"^\[", raw, re.M).start():])[0][0]["results"]
except Exception as e: print("  (查询失败)", e); sys.exit()
if not rows: print("  （暂无数据）"); sys.exit()
ks=list(rows[0].keys()); w={k:max(len(str(k)),*(len(str(r[k])) for r in rows)) for k in ks}
print("  "+"  ".join(str(k).ljust(w[k]) for k in ks))
for r in rows: print("  "+"  ".join(str(r[k]).ljust(w[k]) for k in ks))'; }
echo "== 最近 $DAYS 天：总览"
q "SELECT
  COUNT(DISTINCT CASE WHEN ev='visit' THEN sid END) AS 访客,
  COUNT(DISTINCT CASE WHEN ev='start' THEN sid END) AS 开始答题,
  COUNT(DISTINCT CASE WHEN ev='finish' THEN sid END) AS 答完,
  ROUND(100.0*COUNT(DISTINCT CASE WHEN ev='finish' THEN sid END)/MAX(1,COUNT(DISTINCT CASE WHEN ev='start' THEN sid END)),1) AS 完成率,
  SUM(ev='follow') AS 点关注, SUM(ev='cards') AS 分享卡, SUM(ev='cards_clean') AS 小红书版, SUM(ev='share') AS 分享链接, SUM(ev='poster') AS 长图
  FROM events WHERE $F"
echo "== 答题漏斗（到达或越过第 N 题的人数；Jev 代答会跳过节点，所以按最远进度算）"
q "WITH m AS (SELECT sid, MAX(CASE WHEN ev='finish' THEN 76 WHEN ev='prog' THEN CAST(json_extract(d,'\$.q') AS INT) ELSE 0 END) mx FROM events WHERE ev IN ('start','prog','finish') AND $F GROUP BY sid HAVING SUM(ev='start') > 0)
  SELECT COUNT(*) AS 开始, SUM(mx>=1) AS 过1, SUM(mx>=2) AS 过2, SUM(mx>=3) AS 过3, SUM(mx>=4) AS 过4, SUM(mx>=5) AS 过5, SUM(mx>=15) AS 过15, SUM(mx>=30) AS 过30, SUM(mx>=45) AS 过45, SUM(mx>=60) AS 过60, SUM(mx>=76) AS 答完 FROM m"
echo "== 前 5 题：在哪道题离开（只算有逐题埋点之后开始、且已开始 20 分钟以上的人）"
q "WITH st AS (SELECT sid FROM events WHERE ev='start' AND $F AND ts >= (SELECT MIN(ts) FROM events WHERE ev='prog' AND json_extract(d,'\$.nx') IS NOT NULL) AND ts < (strftime('%s','now')-1200)*1000 GROUP BY sid),
  m AS (SELECT st.sid, MAX(CASE WHEN e.ev='finish' THEN 76 WHEN e.ev='prog' THEN CAST(json_extract(e.d,'\$.q') AS INT) ELSE 0 END) mx FROM st JOIN events e ON e.sid=st.sid GROUP BY st.sid)
  SELECT m.mx + 1 AS 停在第几题, COALESCE(json_extract(p.d,'\$.nx'), 'traps_fixed:0') AS 那道题, COUNT(*) AS 人数, ROUND(100.0*COUNT(*)/(SELECT COUNT(*) FROM m)) AS 占开始 FROM m LEFT JOIN events p ON p.sid=m.sid AND p.ev='prog' AND CAST(json_extract(p.d,'\$.q') AS INT)=m.mx WHERE m.mx < 5 GROUP BY 1,2 ORDER BY 1, 3 DESC"
echo "== 题序对比：开头 5 题流失（旧题序第 3 题是多轮对话 / 新题序 2026-09-27 22:23 起第 3 题是 AI 味现场）"
ORDER_TS=1790519024000
CHAT_TS=1790522460000   # 第 11 题的深度思考模式换成短对话
q "WITH st AS (SELECT sid, MIN(ts) t0 FROM events WHERE ev='start' AND $F AND ts >= (SELECT MIN(ts) FROM events WHERE ev='prog' AND json_extract(d,'\$.nx') IS NOT NULL) AND ts < (strftime('%s','now')-1200)*1000 GROUP BY sid),
  m AS (SELECT st.sid, st.t0, MAX(CASE WHEN e.ev='finish' THEN 76 WHEN e.ev='prog' THEN CAST(json_extract(e.d,'\$.q') AS INT) ELSE 0 END) mx FROM st JOIN events e ON e.sid=st.sid GROUP BY st.sid)
  SELECT CASE WHEN t0 >= $CHAT_TS THEN '3 停用深度思考' WHEN t0 >= $ORDER_TS THEN '2 新题序' ELSE '1 旧题序' END AS 题序, COUNT(*) AS 开始, ROUND(100.0*SUM(mx<1)/COUNT(*),1) AS 停Q1, ROUND(100.0*SUM(mx=1)/COUNT(*),1) AS 停Q2, ROUND(100.0*SUM(mx=2)/COUNT(*),1) AS 停Q3, ROUND(100.0*SUM(mx=3)/COUNT(*),1) AS 停Q4, ROUND(100.0*SUM(mx=4)/COUNT(*),1) AS 停Q5, ROUND(100.0*SUM(mx>=5)/COUNT(*),1) AS 过Q5, ROUND(100.0*SUM(mx>=15)/COUNT(*),1) AS 过Q15 FROM m GROUP BY 1 ORDER BY 1"
echo "== Jev 代打"
q "SELECT json_extract(d,'\$.a') AS 动作, COUNT(DISTINCT sid) AS 人数 FROM events WHERE ev='jev' AND $F GROUP BY 1"
q "WITH j AS (SELECT DISTINCT sid FROM events WHERE ev='jev' AND json_extract(d,'\$.a')='go' AND $F) SELECT COUNT(*) AS 用了Jev, SUM(EXISTS(SELECT 1 FROM events e WHERE e.sid=j.sid AND e.ev='finish')) AS 其中答完 FROM j"
echo "== 每天"
q "SELECT date(ts/1000,'unixepoch','+8 hours') AS 日期, COUNT(DISTINCT CASE WHEN ev='visit' THEN sid END) AS 访客, COUNT(DISTINCT CASE WHEN ev='finish' THEN sid END) AS 答完, SUM(ev IN ('cards','cards_clean','share')) AS 分享动作 FROM events WHERE $F GROUP BY 1 ORDER BY 1 DESC LIMIT 14"
echo "== 语言 / 来源"
q "SELECT lang AS 语言, src AS 来源, COUNT(DISTINCT sid) AS 人数 FROM events WHERE ev='visit' AND $F GROUP BY 1,2 ORDER BY 3 DESC LIMIT 15"
echo "== 繁体：地区用词版本（v）"
q "SELECT COALESCE(json_extract(d,'\$.v'),'?') AS 版本, COUNT(DISTINCT sid) AS 访客 FROM events WHERE ev='visit' AND lang='hant' AND $F GROUP BY 1"
echo "== 各语言页访客的浏览器首选语言（看要不要加新语言）"
q "SELECT lang AS 页面, substr(json_extract(d,'\$.nl'),1,instr(json_extract(d,'\$.nl')||',',',')-1) AS 浏览器语言, COUNT(DISTINCT sid) AS 人数 FROM events WHERE ev='visit' AND json_extract(d,'\$.nl') IS NOT NULL AND $F GROUP BY 1,2 ORDER BY 3 DESC LIMIT 20"
echo "== 访客来源：来源网站 × App 内置浏览器（2026-09-27 22:34 起才有；很多 App 内打开不带来源网站，看“打开方式”）"
q "SELECT COALESCE(CASE WHEN json_extract(d,'\$.rf') LIKE 't.co%' THEN 't.co (X)' ELSE json_extract(d,'\$.rf') END, '(无)') AS 来源网站, COALESCE(json_extract(d,'\$.app'), '普通浏览器') AS 打开方式, COUNT(DISTINCT sid) AS 访客 FROM events WHERE ev='visit' AND $F AND ts >= 1790519600000 GROUP BY 1,2 ORDER BY 3 DESC LIMIT 20"
echo "== 挑战链接：各渠道带来的访客与转化"
q "WITH c AS (SELECT sid, COALESCE(json_extract(d,'\$.c'),'旧链接') ch FROM events WHERE ev='visit' AND src='challenge' AND $F GROUP BY sid)
  SELECT ch AS 渠道, COUNT(*) AS 访客, SUM(EXISTS(SELECT 1 FROM events e WHERE e.sid=c.sid AND e.ev='start')) AS 开始, SUM(EXISTS(SELECT 1 FROM events e WHERE e.sid=c.sid AND e.ev='finish')) AS 答完 FROM c GROUP BY ch ORDER BY 2 DESC"
echo "== 传播系数（粗算）：每个答完的人通过链接/二维码带来的答完人数"
q "SELECT COUNT(DISTINCT CASE WHEN ev='finish' THEN sid END) AS 答完, COUNT(DISTINCT CASE WHEN ev='finish' AND sid IN (SELECT sid FROM events WHERE ev='visit' AND src='challenge') THEN sid END) AS 其中链接来的,
  ROUND(1.0*COUNT(DISTINCT CASE WHEN ev='finish' AND sid IN (SELECT sid FROM events WHERE ev='visit' AND src='challenge') THEN sid END)/MAX(1,COUNT(DISTINCT CASE WHEN ev='finish' THEN sid END)),2) AS 传播系数 FROM events WHERE $F"
echo "== 国家 Top 10"
q "SELECT country AS 国家, COUNT(DISTINCT sid) AS 人数 FROM events WHERE ev='visit' AND $F GROUP BY 1 ORDER BY 2 DESC LIMIT 10"
echo "== 结果分布（档位 / 人格）"
q "SELECT json_extract(d,'\$.size') AS 参数, COUNT(*) AS 次数 FROM events WHERE ev='finish' AND $F GROUP BY 1 ORDER BY 2 DESC LIMIT 10"
q "SELECT json_extract(d,'\$.p') AS 人格, COUNT(*) AS 次数 FROM events WHERE ev='finish' AND $F GROUP BY 1 ORDER BY 2 DESC"
echo "== 新功能（09-28 下午上线）：Jev 提前邀请 / 发到 X / 好友 PK / 图鉴"
q "SELECT COALESCE(json_extract(d,'\$.via'),'auto') AS 邀请方式, SUM(json_extract(d,'\$.a')='offer') AS 弹出, (SELECT COUNT(*) FROM events g WHERE g.ev='jev' AND json_extract(g.d,'\$.a')='go' AND $F AND g.sid IN (SELECT sid FROM events o WHERE o.ev='jev' AND json_extract(o.d,'\$.a')='offer' AND COALESCE(json_extract(o.d,'\$.via'),'auto')=COALESCE(json_extract(events.d,'\$.via'),'auto'))) AS 其中开启 FROM events WHERE ev='jev' AND json_extract(d,'\$.a')='offer' AND $F GROUP BY 1"
q "SELECT SUM(ev='share' AND json_extract(d,'\$.to')='x') AS 点发到X, COUNT(DISTINCT CASE WHEN ev='visit' AND json_extract(d,'\$.c')='x' THEN sid END) AS X按钮带来访客, SUM(ev='pk') AS PK结果展示, SUM(ev='pk' AND json_extract(d,'\$.res')='w') AS PK赢, SUM(ev='pk' AND json_extract(d,'\$.res')='l') AS PK输, SUM(ev='cards' AND json_extract(d,'\$.pk')=1) AS 导出含PK卡 FROM events WHERE $F"
q "SELECT json_extract(d,'\$.dx') AS 图鉴已集, COUNT(*) AS 答完局数 FROM events WHERE ev='finish' AND json_extract(d,'\$.dx') IS NOT NULL AND $F GROUP BY 1 ORDER BY 1"
