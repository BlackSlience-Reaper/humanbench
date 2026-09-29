const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  await p.evaluate(() => { S.traits = { syc: 5, chaos: 14, hall: 5 }; S.flavor = { DeepSeek: 3, Claude: 1 }; S.fun = 5; S.log = []; captcha(); });
  await p.click('#cap'); await p.waitForTimeout(1800);
  await p.fill('#nm', '小王'); await p.waitForTimeout(500);
  await p.screenshot({ path: __dirname + '/name1.png', fullPage: true });
  console.log('templates:', await p.$$eval('#ngT button', bs => bs.map(b => b.textContent).join(' / ')));
  console.log('personal :', await p.$$eval('#ngP button', bs => bs.map(b => b.textContent).join(' / ')));
  console.log('random   :', await p.$$eval('#ngR button', bs => bs.map(b => b.textContent).join(' / ')));
  console.log('errors', errs); await b.close();
})();
