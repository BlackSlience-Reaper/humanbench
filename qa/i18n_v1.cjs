const { chromium } = require('./pw.cjs');
const BASE = process.env.URL || 'http://localhost:8799';
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const c = await b.newContext({ locale: 'zh-CN' }); const p = await c.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(BASE + '/'); await p.waitForTimeout(800);
  // 造一份“旧版”存档：先正常玩完拿到 v2，再去掉所有编号、改成 v1
  await p.evaluate(() => start());
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(40);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(400); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(50); await p.click(`#qarea [data-opt="${Math.max(0, it.ok)}"]`); await p.waitForTimeout(420); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'Rochor'); await p.click('#go'); await p.waitForTimeout(1500);
  await p.evaluate(() => { const o = JSON.parse(localStorage.getItem('humanbench:last')); o.v = 1; delete o.lang; o.log.forEach(r => delete r.ref); o.picks.forEach(x => delete x.ref); o.endings.forEach(e => delete e.ref); localStorage.setItem('humanbench:last', JSON.stringify(o)); });
  await p.goto(BASE + '/'); await p.waitForTimeout(1200);
  console.log('v1 restored in zh:', !!(await p.$('#poster')));
  await p.click('.langs a[data-l="en"]'); await p.waitForTimeout(2500);
  console.log('after switch to en:', new URL(p.url()).pathname, 'poster:', !!(await p.$('#poster')), 'persona:', await p.$eval('#poster .persona .pn', e => e.textContent).catch(() => '-'), 'tier:', await p.$eval('#poster .p-size .sticker', e => e.textContent).catch(() => '-'));
  await p.reload(); await p.waitForTimeout(1500);
  console.log('after reload on en:', !!(await p.$('#poster')), 'errors', errs);
  await b.close();
})();
