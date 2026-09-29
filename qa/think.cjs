const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  await p.evaluate(() => { S.run = [{ kind: 'chat', data: CHATS[0] }]; S.i = 0; render(); });
  await p.waitForTimeout(300);
  await p.screenshot({ path: __dirname + '/t1.png', fullPage: true });
  // pick the 大白饭 option, then "诚实的干饭人"
  const pickText = async t => { const bs = await p.$$('.bubble'); for (const x of bs) { if ((await x.textContent()).includes(t)) { await x.click(); return; } } throw new Error('no ' + t); };
  await pickText('答案是乙。'); await p.waitForTimeout(1200);
  await pickText('什么大白饭'); await p.waitForTimeout(1200);
  await p.screenshot({ path: __dirname + '/t2.png', fullPage: true });
  console.log('errors', errs);
  await b.close();
})();
