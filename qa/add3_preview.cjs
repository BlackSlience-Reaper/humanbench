// 第三轮扩题预览：node qa/add3_preview.cjs <文件名> [池名]
// 用真实页面渲染 i18n/new/<文件> 里的新题（手机宽 390），每题出两张图：答题前、点正确项之后
// 有 i18n/new/add3_ui.css 会一起注入。图输出到 qa/add3/<文件名>/
const { chromium } = require('./pw.cjs');
const fs = require('fs'), path = require('path');
const file = process.argv[2], only = process.argv[3];
const N = path.join(__dirname, '..', 'i18n', 'new'), out = path.join(__dirname, 'add3', file.replace(/\.js$/, ''));
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.join(__dirname, '..', 'index.html')); await p.waitForTimeout(600);
  await p.addScriptTag({ content: fs.readFileSync(path.join(N, file), 'utf8') + '\nwindow.__A = { ADD3: typeof ADD3 !== "undefined" ? ADD3 : {}, C: typeof ADD3_CHARTS !== "undefined" ? ADD3_CHARTS : {}, U: typeof ADD3_UIS !== "undefined" ? ADD3_UIS : {} };' });
  const css = path.join(N, 'add3_ui.css');
  if (fs.existsSync(css)) await p.addStyleTag({ content: fs.readFileSync(css, 'utf8') });
  const list = await p.evaluate(() => { Object.assign(CHARTS, __A.C); Object.assign(UIS, __A.U); start(); return Object.entries(__A.ADD3).flatMap(([pool, a]) => a.map((q, i) => [pool, i])); });
  for (const [pool, i] of list) {
    if (only && pool !== only) continue;
    await p.evaluate(([pool, i]) => { document.querySelectorAll('.modal').forEach(m => m.remove()); S.sycoDone = true; S.run[S.i] = { kind: 'ability', pool, row: ROW_OF[pool] || pool, data: __A.ADD3[pool][i], ref: null }; render(); }, [pool, i]);
    await p.waitForTimeout(150);
    await p.screenshot({ path: `${out}/${pool}-${i}-a.png`, fullPage: true });
    const k = await p.evaluate(([pool, i]) => __A.ADD3[pool][i].opts.findIndex(o => o.ok), [pool, i]);
    await p.click(`#qarea [data-opt="${k}"]`); await p.waitForTimeout(500);
    await p.screenshot({ path: `${out}/${pool}-${i}-b.png`, fullPage: true });
  }
  console.log(`${list.length} 题 → ${out}`, errs.length ? '页面报错：' + errs.join(' | ') : '');
  await b.close();
})();
