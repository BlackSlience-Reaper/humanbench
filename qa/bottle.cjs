const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(700);
  await p.evaluate(() => start());
  const seen = {};
  for (let guard = 0; guard < 200; guard++) {
    const i = await p.evaluate(() => S.i);
    seen[i] = !!(await p.$('.jev-bottle'));
    if (i === 6) {
      await p.waitForTimeout(1000); await p.screenshot({ path: __dirname + '/jev-icon-topbar.png', clip: { x: 0, y: 0, width: 390, height: 70 } });
      await p.click('.jev-bottle'); await p.waitForSelector('#jevGo');
      console.log('opened via icon; modal title:', await p.$eval('.modal.jev h3', e => e.textContent));
      await p.click('#jevGo'); await p.waitForSelector('#jevOk'); await p.click('#jevOk');
      console.log('after: progress', await p.evaluate(() => S.i + '/' + S.run.length), '| icon still shown:', !!(await p.$('.jev-bottle'))); break;
    }
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(380); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(40); const sel = `#qarea [data-opt="${Math.max(0, it.ok)}"]`; if (await p.$(sel + '[disabled]')) { await p.waitForTimeout(400); if (await p.$('.modal:not(.jev) #hold')) await p.click('#hold'); await p.waitForTimeout(300); await p.click('#nextBtn').catch(() => {}); continue; } await p.click(sel); await p.waitForTimeout(450); if (await p.$(".modal:not(.jev)")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn").catch(() => {}); }
  }
  console.log('icon visible by index', JSON.stringify(seen), 'errors', errs);
  await b.close();
})();
