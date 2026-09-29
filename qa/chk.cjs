const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  const runs = await p.evaluate(() => Array.from({ length: 5 }, () => { reset(); return S.run.filter(x => x.kind === 'chat').map(x => x.data.title).join(' / '); }));
  runs.forEach(r => console.log('chats:', r));
  await p.evaluate(() => { const q = POOLS.traps.find(q => q.u && q.u.includes('律师')); S.run = [{ kind: 'ability', pool: 'traps', row: 'traps', data: q }]; S.i = 0; S.sycoDone = true; S.log = []; render(); });
  await p.waitForTimeout(300);
  await p.screenshot({ path: __dirname + '/th1.png', fullPage: true });
  console.log('errors', errs); await b.close();
})();
