const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 2000, height: 1200 } });
  await p.goto('file://' + __dirname + '/uis.html'); await p.waitForTimeout(800);
  await p.screenshot({ path: __dirname + '/uis.png', fullPage: true }); await b.close();
})();
