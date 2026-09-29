// 新增内容翻译检查：node qa/new_tr_check.cjs <lang>  —— 结构和中文版一致、无残留中文
const fs = require('fs'), path = require('path');
const N = path.join(__dirname, '..', 'i18n', 'new'), lang = process.argv[2];
const E = (title, text, id) => ({ title, text, id });
const load = (f, v) => new Function('E', fs.readFileSync(path.join(N, f), 'utf8').replace(/^const /gm, 'var ') + `\nreturn ${v};`)(E);
const errs = [];
const sig = o => JSON.stringify({ tr: o.tr || [], ax: o.ax || null, id: o.id || null, go: o.go || null, end: !!o.end, endId: o.end ? o.end.id || null : null, think: !!o.think, reply: !!o.reply, c: !!o.c });
function cmpTree(a, b, w) {
  if (!b) return errs.push(`${w}: 缺失`);
  if ((a.opts || []).length !== (b.opts || []).length) errs.push(`${w}: 开场选项数 ${a.opts.length} ≠ ${(b.opts || []).length}`);
  (a.opts || []).forEach((o, j) => b.opts[j] && sig(o) !== sig(b.opts[j]) && errs.push(`${w}.opts[${j}] 标记不同`));
  const an = Object.keys(a.nodes || {}).sort().join(), bn = Object.keys(b.nodes || {}).sort().join();
  if (an !== bn) errs.push(`${w}: 节点 ${an} ≠ ${bn}`);
  Object.entries(a.nodes || {}).forEach(([k, arr]) => arr.forEach((o, j) => { const t = (b.nodes || {})[k] && b.nodes[k][j]; if (!t) errs.push(`${w}.${k}[${j}] 缺失`); else if (sig(o) !== sig(t)) errs.push(`${w}.${k}[${j}] 标记不同`); }));
}
let texts = '';
if (process.argv[3] === 'chats2') { try { const zc = load('zh_chats_add2.js', 'NEW_CHATS2'), lc = load(`${lang}_chats_add2.js`, 'NEW_CHATS2'); if (zc.length !== lc.length) errs.push(`对话数不同`); zc.forEach((c, i) => cmpTree(c, lc[i], `chats2#${i}`)); texts = JSON.stringify(lc, (k, v) => k === 'id' ? undefined : v); } catch (e) { errs.push('加载失败：' + e.message); } } else
try {
  const zc = load('zh_chats_add.js', 'NEW_CHATS'), lc = load(`${lang}_chats_add.js`, 'NEW_CHATS');
  if (zc.length !== lc.length) errs.push(`对话数 ${zc.length} ≠ ${lc.length}`);
  zc.forEach((c, i) => cmpTree(c, lc[i], `chats#${i}`));
  const zp = load('zh_persona_add.js', 'NEW_PERSONA'), lp = load(`${lang}_persona_add.js`, 'NEW_PERSONA');
  for (const k of Object.keys(zp)) { if ((lp[k] || []).length !== zp[k].length) errs.push(`persona ${k} 数量不同`); zp[k].forEach((q, i) => cmpTree(q, (lp[k] || [])[i], `persona.${k}[${i}]`)); }
  const zs = load('zh_slop_add.js', 'NEW_SLOP'), ls = load(`${lang}_slop_add.js`, 'NEW_SLOP');
  if (zs.length !== ls.length) errs.push(`slop 数 ${zs.length} ≠ ${ls.length}`);
  zs.forEach((v, i) => { if (!ls[i]) return errs.push(`slop#${i} 缺失`); if (v.opts.length !== ls[i].opts.length) errs.push(`slop#${i} 选项数不同`); v.opts.forEach((o, j) => ls[i].opts[j] && sig(o) !== sig(ls[i].opts[j]) && errs.push(`slop#${i}.opts[${j}] 标记不同`)); });
  const strip = x => JSON.stringify(x, (k, v) => k === 'id' ? undefined : v);
  texts = strip(lc) + strip(lp) + strip(ls);
} catch (e) { errs.push('加载失败：' + e.message); }
const cjk = lang === 'ja' ? /[这个们说为么还没吗吧呢让对话题时间问题电脑]/g : /[一-鿿]/g;
const left = (texts.match(cjk) || []);
if (left.length) errs.push(`残留中文 ${left.length} 个：${[...new Set(left)].slice(0, 20).join('')}`);
errs.slice(0, 40).forEach(e => console.log('错误', e));
console.log(errs.length ? `错误 ${errs.length} 个` : 'OK');
