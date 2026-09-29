const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 1560, height: 400 } });
  await p.goto('file://' + __dirname + '/charts.html'); await p.waitForTimeout(800);
  await p.screenshot({ path: __dirname + '/charts.png', fullPage: true }); await b.close();
})();
