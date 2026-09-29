const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  for (const mode of ['accept', 'decline-then-summon']) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(700);
    await p.evaluate(() => { start(); S.startAt = Date.now() - 5 * 60000; });   // 假装已经答了 5 分钟
    let shot = false, summoned = false, runBefore = 0;
    while (!(await p.$('#cap'))) {
      await p.waitForTimeout(40);
      if (await p.$('.modal.jev #jevGo')) {
        runBefore = await p.evaluate(() => S.run.length);
        if (mode === 'accept' || summoned) {
          await p.click('#jevGo'); await p.waitForSelector('#jevOk', { timeout: 10000 });
          if (!shot) { await p.screenshot({ path: __dirname + '/jev-stream.png' }); shot = true; }
          await p.click('#jevOk');
          console.log(mode, 'after jev: progress', await p.evaluate(() => S.i + '/' + S.run.length), 'topbar:', await p.$eval('.progress span', e => e.textContent).catch(() => '-'), 'S.jev', await p.evaluate(() => S.jev));
        } else {
          await p.screenshot({ path: __dirname + '/jev-offer.png' });
          await p.click('#jevNo');
          await p.waitForTimeout(300);
          console.log('declined; chip visible:', !!(await p.$('.jev-chip')));
          summoned = true; await p.click('.jev-chip'); await p.waitForTimeout(300);
          continue;
        }
      }
      if (await p.$('.modal:not(.jev) #hold')) { await p.click('#hold'); await p.waitForTimeout(300); }
      const it = await p.evaluate(() => { const it = S.run[S.i]; return it ? { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 } : null; });
      if (!it) continue;
      if (it.kind !== 'ability') { let g = 0; while (!(await p.$('#nextBtn')) && g++ < 40) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0').catch(() => {}); await p.waitForTimeout(400); } await p.click('#nextBtn').catch(() => {}); }
      else { await p.waitForTimeout(40); if (!(await p.$(`#qarea [data-opt="${Math.max(0, it.ok)}"]`))) continue; await p.click(`#qarea [data-opt="${Math.max(0, it.ok)}"]`); await p.waitForTimeout(420); if (await p.$(".modal:not(.jev)")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn").catch(() => {}); }
    }
    await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'JevTest'); await p.click('#go'); await p.waitForTimeout(2000);
    const chip = await p.evaluate(() => [...document.querySelectorAll('#poster .chips span')].map(s => s.textContent.trim()).join(' | '));
    console.log(mode, 'result chips:', chip, '| log n', await p.evaluate(() => S.log.length), '| tier', await p.evaluate(() => S.card.T.size), '| errors', errs);
    if (mode === 'accept') await (await p.$('#poster .p-hero')).screenshot({ path: __dirname + '/jev-result.png' });
    await p.close();
  }
  await b.close();
})();
