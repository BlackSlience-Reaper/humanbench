const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(1000);
  // 真实走一局（随机作答），保证数据完整
  await p.click('text=开始推理');
  let step = 0;
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(150);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=' + (step % n)); await p.waitForTimeout(700); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(200); const k = step % 4 ? it.ok : 0; await p.click(`#qarea [data-opt="${k < 0 ? 0 : k}"]`); await p.waitForTimeout(800); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(400); } await p.click("#nextBtn"); }
    step++;
  }
  await p.click('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', 'Deep小王'); await p.click('#go'); await p.waitForTimeout(2500);
  await p.click('#cards'); await p.waitForSelector('.cards-shot img', { timeout: 30000 }); await p.waitForTimeout(500);
  const n = await p.$$eval('.cards-shot img', ims => ims.length);
  for (let i = 0; i < n; i++) {
    const b64 = await p.$eval(`.cards-shot figure:nth-of-type(${i + 1}) img`, async im => { const bl = await (await fetch(im.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(bl); }); });
    require('fs').writeFileSync(__dirname + `/card${i + 1}.png`, Buffer.from(b64, 'base64'));
  }
  console.log('cards', n, 'caption', await p.evaluate(() => S.caption.slice(0, 80)), 'errors', errs);
  await b.close();
})();
