const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 600, height: 600 } });
  await p.goto('file://' + __dirname + '/share_square.html'); await p.waitForTimeout(2000);
  await p.screenshot({ path: __dirname + '/../deploy/public/share.png' });
  await p.setViewportSize({ width: 600, height: 600 });
  await b.close();
})();
