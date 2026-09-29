const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const c = await b.newContext({ locale: 'zh-CN' });
  await c.addInitScript(() => { try { localStorage.setItem('humanbench:sid', 'qa-live-test'); } catch (e) { } });
  const p = await c.newPage();
  await p.goto('https://humanbench.ybuild.ai/'); await p.waitForTimeout(1000);
  await p.evaluate(() => start());
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(40);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(400); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(50); await p.click(`#qarea [data-opt="${Math.max(0, it.ok)}"]`); await p.waitForTimeout(420); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'qa'); await p.click('#go'); await p.waitForTimeout(1500);
  await p.click('.actions-top [data-act="cards"]'); await p.waitForSelector('.cards-shot img', { timeout: 60000 }); await p.click('#cClose');
  await p.click('.langs a[data-l="en"]'); await p.waitForTimeout(2000);
  console.log('done', new URL(p.url()).pathname);
  await b.close();
})();
