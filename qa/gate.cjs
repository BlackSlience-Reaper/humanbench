const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  const pickText = async t => { const bs = await p.$$('.bubble'); for (const x of bs) { if ((await x.textContent()).includes(t)) { await x.click(); return; } } throw new Error('no ' + t); };
  await p.evaluate(() => { S.run = [{ kind: 'chat', data: CHATS.find(c => c.title === '就改这一处') }]; S.i = 0; render(); });
  await p.waitForTimeout(300);
  await pickText('记录当前 HEAD'); await p.waitForTimeout(1200);
  await pickText('新的 SHA'); await p.waitForTimeout(1200);
  await pickText('验证证据门的门禁'); await p.waitForTimeout(1000);
  await p.screenshot({ path: __dirname + '/g1.png', fullPage: true });
  // a 口癖鉴定 question
  await p.evaluate(() => { S.run = [{ kind: 'ability', pool: 'slopid', row: 'traps', data: POOLS.slopid[2] }]; S.i = 0; S.sycoDone = true; S.log = []; render(); });
  await p.waitForTimeout(300);
  await p.click('#qarea [data-opt="0"]'); await p.waitForTimeout(600);
  await p.screenshot({ path: __dirname + '/g2.png', fullPage: true });
  console.log('errors', errs); await b.close();
})();
