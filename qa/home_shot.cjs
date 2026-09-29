const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  for (const l of ['en', 'ja', 'es', 'ko']) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + __dirname + `/../deploy/public/${l}/index.html`); await p.waitForTimeout(1500);
    await p.screenshot({ path: __dirname + `/home-${l}.png` });
    await p.evaluate(() => start()); await p.waitForTimeout(600);
    // 找到第一个 chat 题截图
    for (let k = 0; k < 20; k++) {
      const kind = await p.evaluate(() => S.run[S.i].kind);
      if (kind === 'chat') break;
      await p.evaluate(() => { S.i++; next(); }); await p.waitForTimeout(250);
    }
    await p.waitForTimeout(800); const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(1500);
    await p.screenshot({ path: __dirname + `/chat-${l}.png` });
    console.log(l, errs);
    await p.close();
  }
  await b.close();
})();
