const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  for (const page of ['index.html', 'deploy/public/en/index.html']) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 } });
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + __dirname + '/../' + page); await p.waitForTimeout(600);
    await p.evaluate(() => start());
    const seen = [];
    for (let k = 0; k < 16; k++) {
      await p.waitForTimeout(150);
      seen.push(await p.evaluate(() => { const it = S.run[S.i]; const d = it.data; return `${S.i + 1}.${it.kind === 'ability' ? it.pool : it.kind}:${String((d && (d.q || d.u || d.title)) || '').slice(0, 22)}`; }));
      await p.evaluate(() => { S.i++; next(true); });
    }
    console.log(page.split('/').slice(-2)[0], '\n  ' + seen.join('\n  '), '\n  errors', errs);
    await p.close();
  }
  await b.close();
})();
