"""用线上真实玩家的人格原始特征，重算 PERSONA_BASE（均值/标准差），并对比新旧基准下的人格分布。
用法：python3 qa/persona_calib.py        （只看，不改文件）
数据来自 D1 events 里 ev='finish' 且 pv=1 的记录。"""
import json, subprocess, re, math, os, statistics as st
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W = os.path.expanduser('~/workspace/ybuild-website/node_modules/.bin/wrangler')
out = subprocess.run([W, 'd1', 'execute', 'humanbench-stats', '--remote', '--json', '--config', os.path.join(ROOT, 'deploy/wrangler.jsonc'),
  '--command', "SELECT d FROM events WHERE ev='finish' AND sid NOT LIKE 'qa-%' AND json_extract(d,'$.pv')=1"], capture_output=True, text=True).stdout
rows = [json.loads(r['d']) for r in json.loads(out[out.index('['):])[0]['results']]
if os.environ.get('SELFTEST'):   # 自测：造一批假数据
    import random; random.seed(1)
    rows = [{'f': [random.randint(0, 3) for _ in range(8)], 't': [random.randint(0, 12) for _ in range(11)], 'x': [random.randint(10, 90) for _ in range(6)]} for _ in range(300)]
print('样本数', len(rows))
if len(rows) < 30: print('样本太少，先攒一攒'); raise SystemExit
app = open(os.path.join(ROOT, 'app.js'), encoding='utf-8').read()
base = json.loads(re.search(r'const PERSONA_BASE = (\{.*?\});', app).group(1))
trk = list(base['tr'].keys())
bank = open(os.path.join(ROOT, 'bank.js'), encoding='utf-8').read()
prof = re.findall(r'\{ id: "(\w+)", name: "[^"]*", nick: "[^"]*", glyph: "[^"]*", color: "[^"]*", v: \[([\d, ]+)\]', bank)
ids = [p[0] for p in prof]; pv = {p[0]: [int(x) for x in p[1].split(',')] for p in prof}
raw_tt = re.search(r'const TRAIT_TO = (\{.*?\n\});', app, re.S).group(1)
tt = json.loads(re.sub(r'([:\s])\.(\d)', r'\g<1>0.\2', re.sub(r'(\w+):', r'"\1":', raw_tt)).replace(',\n}', '\n}'))
def classify(r, B):
    z = lambda kind, k, v: (v - B[kind].get(k, [0, .5])[0]) / (B[kind].get(k, [0, .5])[1] or .5)   # 与 app.js 的 z() 一致
    best, bs = None, -1e9
    for i, pid in enumerate(ids):
        d = math.sqrt(sum((a - b) ** 2 for a, b in zip(pv[pid], r['x'])))
        zf = z('fl', pid, r['f'][i])
        w = tt.get(pid, {}); zt = sum(wt * z('tr', k, r['t'][trk.index(k)]) for k, wt in w.items()) / (sum(w.values()) or 1)
        s = 1.2 * zf + 1.0 * zt - d / 60
        if s > bs: bs, best = s, pid
    return best
newB = {'fl': {pid: [round(st.mean(r['f'][i] for r in rows), 2), round(st.pstdev([r['f'][i] for r in rows]) or .5, 2)] for i, pid in enumerate(ids)},
        'tr': {k: [round(st.mean(r['t'][j] for r in rows), 2), round(st.pstdev([r['t'][j] for r in rows]) or .5, 2)] for j, k in enumerate(trk)}}
for name, B in [('当前基准（随机模拟）', base), ('真实玩家基准', newB)]:
    c = {}; [c.__setitem__(classify(r, B), c.get(classify(r, B), 0) + 1) for r in rows]
    print(name, ' '.join(f"{k} {v / len(rows):.0%}" for k, v in sorted(c.items(), key=lambda x: -x[1])))
print('\n新基准（可替换 app.js 里的 PERSONA_BASE）：'); print(json.dumps(newB, ensure_ascii=False))
