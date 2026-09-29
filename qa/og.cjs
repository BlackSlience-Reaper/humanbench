const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto('file://' + __dirname + '/og.html'); await p.waitForTimeout(2500);
  await p.screenshot({ path: __dirname + '/../deploy/public/og.png' }); await b.close();
})();
