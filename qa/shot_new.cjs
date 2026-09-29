const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 1560, height: 520 } });
  await p.goto('file://' + __dirname + '/new.html'); await p.waitForTimeout(800);
  await p.screenshot({ path: __dirname + '/new.png', fullPage: true }); await b.close();
})();
