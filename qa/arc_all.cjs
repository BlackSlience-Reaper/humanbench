const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 1400 }, deviceScaleFactor: 1 });
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(600);
  await p.evaluate(() => { start(); });
  const n = await p.evaluate(() => ARC_PUZZLES.length);
  const over = [];
  for (let k = 0; k < n; k++) {
    await p.evaluate(k => { S.run[S.i] = { kind: 'ability', pool: 'arc', row: 'arc', data: makeArc(ARC_PUZZLES[k]) }; render(); }, k);
    await p.waitForTimeout(120);
    const o = await p.evaluate(() => [...document.querySelectorAll('.arc-grid')].filter(g => g.scrollWidth > g.parentElement.clientWidth + 1 || g.getBoundingClientRect().right > window.innerWidth).length);
    if (o) over.push(k);
    const el = await p.$('#qarea') || await p.$('#app'); await el.screenshot({ path: __dirname + `/arc-${String(k).padStart(2, '0')}.png` });
  }
  console.log('puzzles', n, 'overflow', over);
  await b.close();
})();
