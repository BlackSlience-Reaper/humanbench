// 第三轮扩题检查：node qa/add3_check.cjs <文件名>  （文件在 i18n/new/，如 zh3_traps.js）
// 文件里可以定义：ADD3（能力题 {pool: [q…]}）、ADD3_CHARTS / ADD3_UIS（新图表 / 新界面）、
// ADD3_CHATS（名场面）、ADD3_PERSONA（{W:[…]…}）、ADD3_SLOP、ADD3_VIBES
// 翻译版：node qa/add3_check.cjs <lang>3_xxx.js --zh zh3_xxx.js  另外核对结构与中文一致、无残留中文
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..'), N = path.join(R, 'i18n', 'new');
const file = process.argv[2], zi = process.argv.indexOf('--zh'), zhFile = zi > 0 ? process.argv[zi + 1] : null;
if (!file) { console.log('用法：node qa/add3_check.cjs <文件名> [--zh 中文文件名]'); process.exit(1); }
const E = (title, text, id) => ({ title, text, id });
const TR = new Set(['syc', 'preach', 'verbose', 'jail', 'hall', 'chaos', 'based', 'stub', 'warm', 'nerd', 'deaf']);
const AX = new Set(['W', 'D', 'V', 'T', 'X', 'C']);
const IDS = new Set(['Claude', 'GPT-4o', 'Codex', 'GPT-5 系', 'ChatGPT', 'DeepSeek', 'Gemini', '豆包', 'Kimi', 'Grok']);
const errs = [], warn = [], len = s => [...String(s || '')].length;
const lang = zhFile ? file.replace(/3_.*$/, '') : 'zh';
const base = lang === 'zh' ? R : path.join(R, 'i18n', lang);
// 先加载现有题库（拿到 SV / CHARTS / UIS / POOLS 等），再在同一作用域里加载新文件
const srcOf = f => fs.readFileSync(f, 'utf8').replace(/^const /gm, 'var ');
const baseSrc = ['bank.js', 'chats.js', 'arc.js', 'lv4.js'].map(f => srcOf(path.join(base, f))).join('\n');
const NAMES = ['ADD3', 'ADD3_CHARTS', 'ADD3_UIS', 'ADD3_CHATS', 'ADD3_PERSONA', 'ADD3_SLOP', 'ADD3_VIBES'];
const load = f => new Function('E', 'window', 'document', baseSrc + '\n' + NAMES.map(n => `var ${n};`).join('') + '\n' + srcOf(path.join(N, f)) +
  `\nreturn { POOLS, CHARTS, UIS, CHATS, PERSONA_Q, SLOP_VIBES, VIBES, ${NAMES.join(', ')} };`)(E, {}, {});
let G, Z = null;
try { G = load(file); if (zhFile) Z = load(zhFile); } catch (e) { console.log('加载失败：' + e.message); process.exit(1); }
const norm = s => String(s || '').replace(/\s+/g, '');

/* ---------- 能力题 ---------- */
const UI_POOLS = new Set(['osworld']);
if (G.ADD3) for (const [pool, arr] of Object.entries(G.ADD3)) {
  if (!G.POOLS[pool]) { errs.push(`未知题池 ${pool}`); continue; }
  const old = new Set(G.POOLS[pool].map(q => norm(q.q || q.u)));
  arr.forEach((q, i) => {
    const w = `${pool}[${i}]`;
    if (!(q.lv >= 1 && q.lv <= 4)) errs.push(`${w}: lv 应为 1–4`);
    if (!q.q && !q.u) errs.push(`${w}: 缺题干 q`);
    if (lang === 'zh' && old.has(norm(q.q || q.u))) errs.push(`${w}: 和已有题干重复`);
    if (!q.issue) errs.push(`${w}: 缺 issue`);
    if (len(q.issue) > (lang === 'zh' ? 20 : 60)) warn.push(`${w}: issue 太长 ${len(q.issue)}`);
    const opts = q.opts || [], oks = opts.filter(o => o.ok);
    opts.forEach((o, j) => { if (!o.t) errs.push(`${w}.opts[${j}]: 缺 t`); if (!o.r) errs.push(`${w}.opts[${j}]: 缺点评 r`); });
    if (q.ui) {
      const html = (G.ADD3_UIS || {})[q.ui] || G.UIS[q.ui];
      if (!html) errs.push(`${w}: 界面 ${q.ui} 不存在`);
      else {
        const ids = [...html.matchAll(/data-opt="(\d+)"/g)].map(m => +m[1]);
        opts.forEach((o, j) => ids.includes(j) || errs.push(`${w}: 界面里没有 data-opt="${j}"`));
        ids.forEach(k => k < opts.length || errs.push(`${w}: 界面里的 data-opt="${k}" 没有对应选项`));
        if (/<script|on\w+=/i.test(html)) errs.push(`${w}: 界面里不要写脚本或 onclick`);
      }
      if (opts.length < 2 || opts.length > 4) errs.push(`${w}: 选项数 ${opts.length}`);
      if (!oks.length) errs.push(`${w}: 至少 1 个 ok`);
    } else {
      if (UI_POOLS.has(pool)) errs.push(`${w}: osworld 题必须有 ui`);
      if (opts.length !== 4) errs.push(`${w}: 选项数应为 4`);
      if (oks.length !== 1) errs.push(`${w}: ok 选项应恰好 1 个`);
      const L = opts.map(o => len(o.t)), okL = oks[0] ? len(oks[0].t) : 0;
      if (okL && okL === Math.max(...L) && L.filter(x => x === okL).length === 1) errs.push(`${w}: 正确选项是唯一最长`);
    }
    if (q.chart && !((G.ADD3_CHARTS || {})[q.chart] || G.CHARTS[q.chart])) errs.push(`${w}: 图表 ${q.chart} 不存在`);
    if (pool === 'chart' && !q.chart) errs.push(`${w}: 图表题必须有 chart`);
    if (Z) {
      const z = (Z.ADD3[pool] || [])[i];
      if (!z) errs.push(`${w}: 中文版没有对应题`);
      else {
        const sg = o => JSON.stringify([!!o.ok, !!o.half, !!o.fun]);
        if (JSON.stringify(z.opts.map(sg)) !== JSON.stringify(opts.map(sg)) || z.lv !== q.lv || z.ui !== q.ui || z.chart !== q.chart || !!z.term !== !!q.term || !!z.code !== !!q.code || !!z.halluc !== !!q.halluc || !!z.u !== !!q.u)
          errs.push(`${w}: 结构/标记和中文不一致`);
      }
    }
  });
  if (!Z) { const lv = arr.reduce((a, q) => (a[q.lv] = (a[q.lv] || 0) + 1, a), {}); console.log(`${pool}: ${arr.length} 道，难度分布 ${JSON.stringify(lv)}`); }
}
for (const k of ['ADD3_CHARTS', 'ADD3_UIS']) for (const [key, v] of Object.entries(G[k] || {})) {
  if ((k === 'ADD3_CHARTS' ? G.CHARTS : G.UIS)[key]) errs.push(`${k}.${key}: 和已有的重名`);
  if (typeof v !== 'string' || !v) errs.push(`${k}.${key}: 应为 HTML/SVG 字符串`);
  if (Z && !(Z[k] || {})[key]) errs.push(`${k}.${key}: 中文版没有`);
}

/* ---------- 非计分题（结构同 qa/new_check.cjs） ---------- */
const lim = lang === 'zh' ? { u: 60, t: 40, reply: 40, title: 8, text: 50, think: 90 } : lang === 'ja' ? { u: 90, t: 60, reply: 60, title: 14, text: 80, think: 140 } : { u: 160, t: 110, reply: 110, title: 34, text: 150, think: 240 };
function opt(o, w, final) {
  if (typeof o.t !== 'string' || !o.t) errs.push(`${w}: 缺 t`);
  if (len(o.t) > lim.t) warn.push(`${w}: t 太长 ${len(o.t)} 字`);
  (o.tr || []).forEach(t => TR.has(t) || errs.push(`${w}: 未知标签 ${t}`));
  if ((o.tr || []).length > 2) warn.push(`${w}: 标签超过 2 个`);
  if (o.id && !IDS.has(o.id)) errs.push(`${w}: 未知 id ${o.id}`);
  Object.entries(o.ax || {}).forEach(([k, v]) => { if (!AX.has(k)) errs.push(`${w}: 未知轴 ${k}`); if (!(v >= 0 && v <= 100)) errs.push(`${w}: 轴值 ${v}`); });
  if (o.think && len(o.think) > lim.think) warn.push(`${w}: think 太长 ${len(o.think)} 字`);
  if (o.reply && len(o.reply) > lim.reply) warn.push(`${w}: reply 太长 ${len(o.reply)} 字`);
  if (o.end) {
    if (!o.end.title || !o.end.text) errs.push(`${w}: 结局缺标题或正文`);
    if (len(o.end.title) > lim.title) warn.push(`${w}: 结局标题太长 ${len(o.end.title)} 字`);
    if (len(o.end.text) > lim.text) warn.push(`${w}: 结局正文太长 ${len(o.end.text)} 字`);
    if (o.end.id && !IDS.has(o.end.id)) errs.push(`${w}: 结局 id 未知 ${o.end.id}`);
  }
  if (final && !o.end) errs.push(`${w}: 节点里的选项必须是结局`);
  if (final === false && !o.go && !o.end) errs.push(`${w}: 开场选项要 go 到节点或直接结局`);
}
function tree(q, w) {
  if (typeof q.u !== 'string' || !q.u) errs.push(`${w}: 缺 u`);
  if (len(q.u) > lim.u) warn.push(`${w}: u 太长 ${len(q.u)} 字`);
  if (!Array.isArray(q.opts) || q.opts.length < 2 || q.opts.length > 4) errs.push(`${w}: 开场选项数 ${q.opts && q.opts.length}`);
  const nodes = q.nodes || {}, used = new Set();
  (q.opts || []).forEach((o, j) => { opt(o, `${w}.opts[${j}]`, false); if (o.go) { if (!nodes[o.go]) errs.push(`${w}.opts[${j}]: go 到不存在的节点 ${o.go}`); used.add(o.go); if (!o.reply) warn.push(`${w}.opts[${j}]: 有 go 但没有 reply`); } });
  Object.entries(nodes).forEach(([k, a]) => { if (!used.has(k)) errs.push(`${w}: 节点 ${k} 没有入口`); if (a.length < 2 || a.length > 3) warn.push(`${w}.${k}: 选项数 ${a.length}`); a.forEach((o, j) => opt(o, `${w}.${k}[${j}]`, true)); });
  const ends = Object.values(nodes).flat().concat(q.opts || []).filter(o => o.end).map(o => o.end.title);
  if (new Set(ends).size !== ends.length) warn.push(`${w}: 结局标题有重复`);
  return ends.length;
}
// 翻译版：树的形状（选项数、go、结局、标签、轴、id）要和中文一致
const shape = x => JSON.stringify(x, (k, v) => ['t', 'u', 'c', 'reply', 'think', 'title', 'text', 'scene'].includes(k) ? undefined : v);
if (G.ADD3_CHATS) {
  const old = new Set(G.CHATS.map(c => norm(c.title)));
  G.ADD3_CHATS.forEach((c, i) => {
    if (!c.title || !c.scene) errs.push(`chats#${i}: 缺 title/scene`);
    if (lang === 'zh' && old.has(norm(c.title))) errs.push(`chats#${i}: 标题和已有对话重复`);
    const n = tree(c, `chats#${i} ${c.title}`); if (n < 6) warn.push(`chats#${i}: 结局只有 ${n} 个`);
    if (Z && shape(c) !== shape(Z.ADD3_CHATS[i])) errs.push(`chats#${i}: 结构和中文不一致`);
  });
  if (!Z) console.log(`名场面: ${G.ADD3_CHATS.length} 段`);
}
if (G.ADD3_PERSONA) for (const ax of Object.keys(G.ADD3_PERSONA)) {
  if (!AX.has(ax)) { errs.push(`人格轴 ${ax} 未知`); continue; }
  G.ADD3_PERSONA[ax].forEach((q, i) => {
    tree(q, `persona.${ax}[${i}]`);
    const vals = Object.values(q.nodes || {}).flat().concat(q.opts).map(o => (o.ax || {})[ax]).filter(v => v != null);
    if (!vals.some(v => v <= 20) || !vals.some(v => v >= 80)) errs.push(`persona.${ax}[${i}]: 本轴两端都要有（≤20 和 ≥80）`);
    if (Z && shape(q) !== shape(Z.ADD3_PERSONA[ax][i])) errs.push(`persona.${ax}[${i}]: 结构和中文不一致`);
  });
  if (!Z) console.log(`人格 ${ax}: ${G.ADD3_PERSONA[ax].length} 道`);
}
for (const [k, need] of [['ADD3_SLOP', true], ['ADD3_VIBES', false]]) if (G[k]) {
  G[k].forEach((v, i) => {
    const w = `${k}#${i}`;
    if (!v.u || len(v.u) > lim.u) errs.push(`${w}: u 缺失或太长`);
    if (v.opts.length < 4 || v.opts.length > 5) errs.push(`${w}: 选项数 ${v.opts.length}`);
    v.opts.forEach((o, j) => { opt(o, `${w}.opts[${j}]`, null); if (!o.c) errs.push(`${w}.opts[${j}]: 缺点评 c`); if (o.go || o.end || o.ok) errs.push(`${w}.opts[${j}]: 不要 go/end/ok`); });
    if (need && v.opts.filter(o => o.id).length < 3) errs.push(`${w}: 至少 3 个选项带模型 id`);
    if (need && !v.opts.some(o => !o.id && (o.tr || []).includes('based'))) errs.push(`${w}: 要有一个不带 id 的清醒人话（tr: based）`);
    if (Z && shape(v) !== shape(Z[k][i])) errs.push(`${w}: 结构和中文不一致`);
  });
  if (!Z) console.log(`${k}: ${G[k].length} 道`);
}
if (Z) {
  for (const n of NAMES) if (!!G[n] !== !!Z[n] || (Array.isArray(Z[n]) && G[n].length !== Z[n].length)) errs.push(`${n}: 数量和中文不一致`);
  const txt = NAMES.map(n => JSON.stringify(G[n] || '')).join('');
  const re = lang === 'ja' ? /[这个们说为么还没吗吧呢让对话题时间问题电脑]/g : /[一-鿿]/g;
  const m = (txt.replace(/"id":"[^"]*"/g, '').match(re) || []);
  if (m.length) errs.push(`残留中文 ${m.length} 个：${[...new Set(m)].slice(0, 20).join('')}`);
}
warn.slice(0, 30).forEach(x => console.log('提醒', x));
errs.slice(0, 40).forEach(x => console.log('错误', x));
console.log(errs.length ? `错误 ${errs.length} 个` : 'OK', warn.length ? `（提醒 ${warn.length} 条，字数类可酌情）` : '');
process.exit(errs.length ? 1 : 0);
