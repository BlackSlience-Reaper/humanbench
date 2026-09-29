const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  await p.evaluate(() => { const q = POOLS.traps.find(q => q.u && q.u.includes('编程工具的客服')); S.run = [{ kind: 'ability', pool: 'traps', row: 'traps', data: q }]; S.i = 0; S.sycoDone = true; S.log = []; render(); });
  await p.waitForTimeout(300);
  const oi = await p.evaluate(() => S.run[0].data.opts.findIndex(o => o.meme));
  await p.click(`#qarea [data-opt="${oi}"]`); await p.waitForTimeout(600);
  await p.screenshot({ path: __dirname + '/rp1.png', fullPage: true });
  await p.evaluate(() => { S.run = [{ kind: 'vibe', data: SLOP_VIBES[1], label: 'AI 味现场 · 你来当 AI' }]; S.i = 0; render(); });
  await p.waitForTimeout(300);
  const bs = await p.$$('.bubble'); for (const x of bs) if ((await x.textContent()).includes('SHA')) { await x.click(); break; }
  await p.waitForTimeout(900);
  await p.screenshot({ path: __dirname + '/rp2.png', fullPage: true });
  console.log('errors', errs, 'flavor', await p.evaluate(() => JSON.stringify(S.flavor))); await b.close();
})();
