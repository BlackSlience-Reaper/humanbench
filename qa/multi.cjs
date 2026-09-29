const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  // the LIMIT 10 question has two correct options
  await p.evaluate(() => { const q = POOLS.cursor.find(q => q.q.includes('LIMIT 10')); S.run = [{ kind: 'ability', pool: 'cursor', row: 'cursor', data: q }]; S.i = 0; S.sycoDone = true; render(); });
  await p.waitForTimeout(300);
  const oi = await p.evaluate(() => S.run[0].data.opts.findIndex(o => o.t.startsWith('打回')));
  await p.click(`#qarea [data-opt="${oi}"]`); await p.waitForTimeout(600);
  await p.screenshot({ path: __dirname + '/m1.png', fullPage: true });
  console.log('errors', errs); await b.close();
})();
