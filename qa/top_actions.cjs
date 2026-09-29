const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(800);
  await p.evaluate(() => start());
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(60);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(450); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(80); await p.click(`#qarea [data-opt="${Math.max(0, it.ok)}"]`); await p.waitForTimeout(500); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'Deep小王'); await p.click('#go'); await p.waitForTimeout(2500);
  await p.screenshot({ path: __dirname + '/top-actions.png' });
  // 顶部按钮：生成卡片
  await p.click('.actions-top [data-act="cards"]'); await p.waitForSelector('.cards-shot img', { timeout: 60000 });
  console.log('top cards ok', await p.$$eval('.cards-shot img', x => x.length)); await p.click('#cClose');
  // 顶部按钮：分享（无 navigator.share → 复制框出现在顶部）
  await p.evaluate(() => { delete navigator.share; });
  await p.click('.actions-top [data-act="share"]'); await p.waitForTimeout(500);
  console.log('share slot', await p.$eval('.actions-top .share-slot', e => e.innerText.slice(0, 40)));
  // 长图
  await p.click('#save'); await p.waitForSelector('.shot img', { timeout: 60000 }); await p.waitForTimeout(500);
  console.log('long image', await p.$eval('.shot img', im => [im.naturalWidth, im.naturalHeight]), 'errors', errs);
  await b.close();
})();
