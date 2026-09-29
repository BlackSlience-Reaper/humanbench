const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(800);
  await p.evaluate(() => start());
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(80);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(500); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(100); await p.click(`#qarea [data-opt="${Math.max(0, it.ok)}"]`); await p.waitForTimeout(550); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', '摸鱼研究所所长'); await p.click('#go'); await p.waitForTimeout(2500);
  // 模拟滚到页面中间再点保存（检验坐标换算）
  await p.evaluate(() => window.scrollTo(0, 1200));
  await p.click('#save'); await p.waitForSelector('.poster-shot img', { timeout: 60000 }); await p.waitForTimeout(500);
  const info = await p.$$eval('.poster-shot img', ims => ims.map(im => [im.naturalWidth, im.naturalHeight]));
  for (let i = 0; i < info.length; i++) {
    const b64 = await p.$eval(`.poster-shot figure:nth-of-type(${i + 1}) img`, async im => { const bl = await (await fetch(im.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(bl); }); });
    require('fs').writeFileSync(__dirname + `/seg-${i + 1}.jpg`, Buffer.from(b64, 'base64'));
  }
  console.log('segments', info, 'poster css', await p.evaluate(() => [document.getElementById('poster').offsetWidth, document.getElementById('poster').offsetHeight]));
  await p.click('#shotWhole'); await p.waitForTimeout(6000);
  console.log('whole', await p.$$eval('.poster-shot img', ims => ims.map(im => [im.naturalWidth, im.naturalHeight])), 'errors', errs);
  await b.close();
})();
