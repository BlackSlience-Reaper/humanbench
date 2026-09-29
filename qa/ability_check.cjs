// 新增能力题检查：node qa/ability_check.cjs [lang]（默认 zh；lang 时还核对结构与中文一致、无残留中文）
const fs = require('fs'), path = require('path'), N = path.join(__dirname, '..', 'i18n', 'new');
const lang = process.argv[2] || 'zh', POOLS = ['dense', 'cursor', 'terminal', 'automation', 'frontier', 'gdpval'];
const FILE = { zhA: 'zh_ability_add_a.js', zhB: 'zh_ability_add_b.js' };
const load = l => new Function(fs.readFileSync(path.join(N, FILE[l] || `${l}_ability_add.js`), 'utf8').replace(/^const /gm, 'var ') + '\nreturn NEW_ABILITY;')();
const errs = [], warn = [], len = s => [...String(s || '')].length;
let A; try { A = load(lang); } catch (e) { console.log('加载失败：' + e.message); process.exit(1); }
const part = lang === 'zhA' || lang === 'zhB';
const Z = lang === 'zh' || part ? A : load('zh');
for (const p of (part ? { zhA: ['dense', 'cursor', 'terminal'], zhB: ['automation', 'frontier', 'gdpval'] }[lang] : POOLS)) {
  const a = A[p] || []; if (a.length !== 6) errs.push(`${p}: 应为 6 道，现在 ${a.length}`);
  a.forEach((q, i) => {
    const w = `${p}[${i}]`;
    if (!(q.lv >= 1 && q.lv <= 3)) errs.push(`${w}: lv 应为 1–3`);
    if (!q.q && !q.u) errs.push(`${w}: 缺题干 q`);
    if (!q.issue) errs.push(`${w}: 缺 issue`);
    if (!Array.isArray(q.opts) || q.opts.length !== 4) errs.push(`${w}: 选项数应为 4`);
    const oks = (q.opts || []).filter(o => o.ok); if (oks.length !== 1) errs.push(`${w}: ok 选项应恰好 1 个`);
    (q.opts || []).forEach((o, j) => { if (!o.t) errs.push(`${w}.opts[${j}]: 缺 t`); if (!o.r && !o.half) warn.push(`${w}.opts[${j}]: 缺点评 r`); });
    const L = (q.opts || []).map(o => len(o.t)), okL = oks[0] ? len(oks[0].t) : 0;
    if (okL && okL === Math.max(...L) && L.filter(x => x === okL).length === 1) errs.push(`${w}: 正确选项是唯一最长`);
    if (lang !== 'zh' && !part) { const z = Z[p] && Z[p][i]; if (!z) errs.push(`${w}: 中文版没有对应题`); else { const sg = o => JSON.stringify([!!o.ok, !!o.half, !!o.fun]); if (JSON.stringify(z.opts.map(sg)) !== JSON.stringify(q.opts.map(sg)) || z.lv !== q.lv || !!z.term !== !!q.term || !!z.code !== !!q.code || !!z.halluc !== !!q.halluc) errs.push(`${w}: 结构/标记和中文不一致`); } }
  });
}
if (lang !== 'zh' && !part) { const txt = JSON.stringify(A); const re = lang === 'ja' ? /[这个们说为么还没吗吧呢让对话题时间问题电脑]/g : /[一-鿿]/g; const m = txt.match(re) || []; if (m.length) errs.push(`残留中文 ${m.length} 个：${[...new Set(m)].slice(0, 20).join('')}`); }
warn.slice(0, 20).forEach(x => console.log('提醒', x)); errs.slice(0, 40).forEach(x => console.log('错误', x));
console.log(errs.length ? `错误 ${errs.length} 个` : 'OK');
