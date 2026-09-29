// 区分度模拟：玩家真实水平 A ~ N(0,1)，答对概率按题目难度（三档）+ 四选一猜对下限；
// 自适应抽题、计分（难题更值钱）、参数阶梯映射都和游戏一致。
const fs = require('fs');
eval(fs.readFileSync(__dirname + '/../bank.js', 'utf8').replace(/^const /gm, 'var '));
const LV_VAL = { 1: .7, 2: .85, 3: 1 }, B = { 1: -1.2, 2: 0, 3: 1.2 };
const LADDER = ["0.5B", "1.5B", "3B", "7B", "14B", "32B", "70B", "120B", "235B", "405B", "671B", "1T", "1.8T", "3T", "5T", "10T"];
const randn = () => Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
const pickOne = a => a[Math.random() * a.length | 0];
function play(A, plan) {
  const log = [], used = {};
  for (const slot of plan) {
    const pool = slot.split(':')[0];
    if (['persona', 'vibe', 'chat', 'slopid'].includes(pool)) continue;
    let lv;
    if (pool === 'traps_fixed') lv = 1;
    else {
      const recent = log.slice(-6), acc = recent.length < 2 ? .6 : recent.filter(r => r.ok).length / recent.length;
      let tgt = recent.length < 2 ? 2 : acc >= .8 ? 3 : acc >= .5 ? 2 : 1;
      if (pool === 'arc') tgt = Math.min(3, tgt + 1);
      const src = pool === 'arc' ? ARC_LV : POOLS[pool].map(q => q.lv || 1);
      used[pool] = used[pool] || new Set();
      const left = src.map((l, i) => i).filter(i => !used[pool].has(i));
      const best = Math.min(...left.map(i => Math.abs(src[i] - tgt)));
      const k = pickOne(left.filter(i => Math.abs(src[i] - tgt) === best)); used[pool].add(k); lv = src[k];
    }
    const p = .25 + .75 / (1 + Math.exp(-1.7 * (A - B[lv])));
    const ok = Math.random() < p; log.push({ ok, lv, pts: ok ? LV_VAL[lv] : 0 });
  }
  const theta = log.reduce((a, r) => a + r.pts, 0) / log.length;
  const idx = Math.floor(Math.max(0, Math.min(.9999, (theta - .2) / .65)) * 16);
  return { theta, idx, n: log.length };
}
var ARC_LV = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
const corr = (x, y) => { const n = x.length, mx = x.reduce((a, b) => a + b) / n, my = y.reduce((a, b) => a + b) / n; let sxy = 0, sx = 0, sy = 0; for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sx += (x[i] - mx) ** 2; sy += (y[i] - my) ** 2; } return sxy / Math.sqrt(sx * sy); };
function evaluate(label, plan) {
  const N = 6000, A = [], t1 = [], t2 = [], i1 = [], i2 = [];
  for (let i = 0; i < N; i++) { const a = randn(); const r1 = play(a, plan), r2 = play(a, plan); A.push(a); t1.push(r1.theta); t2.push(r2.theta); i1.push(r1.idx); i2.push(r2.idx); }
  const same = i1.filter((v, k) => Math.abs(v - i2[k]) <= 1).length / N;
  const dist = {}; i1.forEach(v => dist[LADDER[v]] = (dist[LADDER[v]] || 0) + 1);
  const n = plan.filter(s => !['persona', 'vibe', 'chat', 'slopid'].includes(s.split(':')[0])).length;
  console.log(`\n[${label}] 计分题 ${n} 道 / 共 ${plan.length} 道（${(n / plan.length * 100).toFixed(0)}%）`);
  console.log(`  和真实水平的相关 ${corr(A, t1).toFixed(3)} · 重测相关 ${corr(t1, t2).toFixed(3)} · 两次参数档位相差 ≤1 档 ${(same * 100).toFixed(0)}%`);
  console.log('  参数分布 ' + LADDER.filter(k => dist[k]).map(k => `${k} ${(dist[k] / N * 100).toFixed(0)}%`).join(' · '));
}
const P = RUN_PLAN.slice();
const count = s => P.filter(x => x.split(':')[0] === s).length;
console.log('当前一局构成：', Object.entries(P.reduce((a, x) => { const k = x.split(':')[0]; a[k] = (a[k] || 0) + 1; return a; }, {})).map(([k, v]) => `${k} ${v}`).join(' · '));
evaluate('现在 66 题', P);
// 76 题方案：加 10 道计分题
const extra = ['knowledge', 'knowledge', 'knowledge', 'arc', 'hle', 'science', 'gdpval', 'cursor', 'osworld', 'chart'];
const P76 = P.slice(); extra.forEach((e, k) => P76.splice(Math.round((k + 1) * P76.length / (extra.length + 1)), 0, e));
evaluate('加到 76 题', P76);
fs.writeFileSync(__dirname + '/plan76.json', JSON.stringify(P76));
