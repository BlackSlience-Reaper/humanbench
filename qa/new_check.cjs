// 新增内容结构检查：node qa/new_check.cjs <chats|persona|slop>
// 读 i18n/new/zh_<kind>_add.js，核对标签/轴/模型 id/节点/字数，并确认和 bank.js、chats.js 一起加载不报错
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..'), kind = process.argv[2];
const E = (title, text, id) => ({ title, text, id });
const TR = new Set(['syc', 'preach', 'verbose', 'jail', 'hall', 'chaos', 'based', 'stub', 'warm', 'nerd', 'deaf']);
const AX = new Set(['W', 'D', 'V', 'T', 'X', 'C']);
const IDS = new Set(['Claude', 'GPT-4o', 'Codex', 'GPT-5 系', 'ChatGPT', 'DeepSeek', 'Gemini', '豆包', 'Kimi', 'Grok']);
const errs = [], warn = [];
const len = s => [...String(s || '')].length;
const load = (file, name) => new Function('E', fs.readFileSync(path.join(R, 'i18n/new', file), 'utf8').replace(/^const /gm, 'var ') + `\nreturn ${name};`)(E);
function opt(o, w, final) {
  if (typeof o.t !== 'string' || !o.t) errs.push(`${w}: 缺 t`);
  if (len(o.t) > 40) warn.push(`${w}: t 太长 ${len(o.t)} 字`);
  (o.tr || []).forEach(t => TR.has(t) || errs.push(`${w}: 未知标签 ${t}`));
  if ((o.tr || []).length > 2) warn.push(`${w}: 标签超过 2 个`);
  if (o.id && !IDS.has(o.id)) errs.push(`${w}: 未知 id ${o.id}`);
  Object.entries(o.ax || {}).forEach(([k, v]) => { if (!AX.has(k)) errs.push(`${w}: 未知轴 ${k}`); if (!(v >= 0 && v <= 100)) errs.push(`${w}: 轴值 ${v}`); });
  if (o.think && len(o.think) > 90) warn.push(`${w}: think 太长 ${len(o.think)} 字`);
  if (o.reply && len(o.reply) > 40) warn.push(`${w}: reply 太长 ${len(o.reply)} 字`);
  if (o.end) {
    if (!o.end.title || !o.end.text) errs.push(`${w}: 结局缺标题或正文`);
    if (len(o.end.title) > 8) warn.push(`${w}: 结局标题太长 ${len(o.end.title)} 字`);
    if (len(o.end.text) > 50) warn.push(`${w}: 结局正文太长 ${len(o.end.text)} 字`);
    if (o.end.id && !IDS.has(o.end.id)) errs.push(`${w}: 结局 id 未知 ${o.end.id}`);
  }
  if (final && !o.end) errs.push(`${w}: 节点里的选项必须是结局`);
  if (final === false && !o.go && !o.end) errs.push(`${w}: 开场选项要 go 到节点或直接结局`);
}
function tree(q, w, persona) {
  if (typeof q.u !== 'string' || !q.u) errs.push(`${w}: 缺 u`);
  if (len(q.u) > 60) warn.push(`${w}: u 太长 ${len(q.u)} 字`);
  if (!Array.isArray(q.opts) || q.opts.length < 2 || q.opts.length > 4) errs.push(`${w}: 开场选项数 ${q.opts && q.opts.length}`);
  const nodes = q.nodes || {}, used = new Set();
  (q.opts || []).forEach((o, j) => { opt(o, `${w}.opts[${j}]`, false); if (o.go) { if (!nodes[o.go]) errs.push(`${w}.opts[${j}]: go 到不存在的节点 ${o.go}`); used.add(o.go); if (!o.reply) warn.push(`${w}.opts[${j}]: 有 go 但没有 reply`); } });
  Object.entries(nodes).forEach(([k, a]) => { if (!used.has(k)) errs.push(`${w}: 节点 ${k} 没有入口`); if (a.length < 2 || a.length > 3) warn.push(`${w}.${k}: 选项数 ${a.length}`); a.forEach((o, j) => opt(o, `${w}.${k}[${j}]`, true)); });
  const ends = Object.values(nodes).flat().concat(q.opts || []).filter(o => o.end).map(o => o.end.title);
  if (new Set(ends).size !== ends.length) warn.push(`${w}: 结局标题有重复`);
  return ends.length;
}
try {
  if (kind === 'chats' || kind === 'chatsA' || kind === 'chatsB' || kind === 'chats2A' || kind === 'chats2B') {
    const want = { chats: 15, chatsA: 8, chatsB: 7, chats2A: 8, chats2B: 7 }[kind];
    const F = { chats: ['zh_chats_add.js', 'NEW_CHATS'], chatsA: ['zh_chats_add_a.js', 'NEW_CHATS_A'], chatsB: ['zh_chats_add_b.js', 'NEW_CHATS_B'], chats2A: ['zh_chats_add2_a.js', 'NEW_CHATS2_A'], chats2B: ['zh_chats_add2_b.js', 'NEW_CHATS2_B'] }[kind];
    const A = load(F[0], F[1]);
    if (A.length !== want) errs.push(`应为 ${want} 段，现在 ${A.length}`);
    A.forEach((c, i) => { if (!c.title || !c.scene) errs.push(`#${i}: 缺 title/scene`); const n = tree(c, `#${i} ${c.title}`); if (n < 6) warn.push(`#${i}: 结局只有 ${n} 个`); });
  } else if (kind === 'persona') {
    const P = load('zh_persona_add.js', 'NEW_PERSONA');
    for (const ax of AX) {
      const a = P[ax] || []; if (a.length !== 2) errs.push(`${ax}: 应为 2 道，现在 ${a.length}`);
      a.forEach((q, i) => { tree(q, `${ax}[${i}]`, true); const vals = Object.values(q.nodes || {}).flat().concat(q.opts).map(o => (o.ax || {})[ax]).filter(v => v != null); if (!vals.some(v => v <= 20) || !vals.some(v => v >= 80)) errs.push(`${ax}[${i}]: 本轴两端都要有（≤20 和 ≥80）`); });
    }
  } else if (kind === 'slop') {
    const S = load('zh_slop_add.js', 'NEW_SLOP');
    if (S.length !== 6) errs.push(`应为 6 道，现在 ${S.length}`);
    S.forEach((v, i) => {
      if (!v.u || len(v.u) > 60) errs.push(`#${i}: u 缺失或太长`);
      if (v.opts.length < 4 || v.opts.length > 5) errs.push(`#${i}: 选项数 ${v.opts.length}`);
      v.opts.forEach((o, j) => { opt(o, `#${i}.opts[${j}]`, null); if (!o.c) errs.push(`#${i}.opts[${j}]: 缺点评 c`); if (o.go || o.end) errs.push(`#${i}.opts[${j}]: AI 味现场不要 go/end`); });
      if (v.opts.filter(o => o.id).length < 3) errs.push(`#${i}: 至少 3 个选项带模型 id`);
      if (!v.opts.some(o => !o.id && (o.tr || []).includes('based'))) errs.push(`#${i}: 要有一个不带 id 的清醒人话（tr: based）`);
    });
  } else { console.log('用法：node qa/new_check.cjs <chats|persona|slop>'); process.exit(1); }
} catch (e) { errs.push('加载失败：' + e.message); }
warn.slice(0, 30).forEach(w => console.log('提醒', w));
errs.slice(0, 40).forEach(e => console.log('错误', e));
console.log(errs.length ? `错误 ${errs.length} 个` : 'OK', warn.length ? `（提醒 ${warn.length} 条，字数类可酌情）` : '');
