const { chromium } = require('./pw.cjs');
const BASE = process.env.URL || 'http://localhost:8799';
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const c = await b.newContext({ locale: 'zh-CN' });
  await c.addInitScript(() => { try { localStorage.setItem('humanbench:sid', 'qa-resume'); } catch (e) { } });
  const p = await c.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(BASE + '/'); await p.waitForTimeout(800);
  await p.evaluate(() => { start(); S.startAt = Date.now() - 4 * 60000; });
  const play = async (until) => {
    while (!(await p.$('#cap'))) {
      if (until && await p.evaluate(() => S.i) >= until) return;
      await p.waitForTimeout(40);
      if (await p.$('.modal.jev #jevGo')) { console.log('jev offered at Q', await p.evaluate(() => S.i + 1)); await p.click('#jevGo'); await p.waitForSelector('#jevOk'); await p.click('#jevOk'); console.log('  -> progress', await p.evaluate(() => S.i + '/' + S.run.length)); continue; }
      if (await p.$('.modal:not(.jev) #hold')) { await p.click('#hold'); await p.waitForTimeout(300); }
      const it = await p.evaluate(() => { const it = S.run[S.i]; return it ? { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 } : null; });
      if (!it) continue;
      if (it.kind !== 'ability') { let g = 0; while (!(await p.$('#nextBtn')) && g++ < 40) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0').catch(() => {}); await p.waitForTimeout(380); } await p.click('#nextBtn').catch(() => {}); }
      else { await p.waitForTimeout(40); const sel = `#qarea [data-opt="${Math.max(0, it.ok)}"]`; if (!(await p.$(sel))) continue;
        if (await p.$(sel + '[disabled]')) { await p.waitForTimeout(300); if (await p.$('.modal:not(.jev) #hold')) await p.click('#hold'); await p.waitForTimeout(300); await p.click('#nextBtn').catch(() => {}); continue; }
        await p.click(sel); await p.waitForTimeout(400); if (await p.$(".modal:not(.jev)")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn").catch(() => {}); }
    }
  };
  await play(22);
  const before = await p.evaluate(() => ({ i: S.i, log: S.log.length, picks: S.picks.length, jev: S.jev || 0, q: document.querySelector('.qnum')?.textContent }));
  await p.reload(); await p.waitForTimeout(1500);
  const after = await p.evaluate(() => ({ i: S.i, log: S.log.length, picks: S.picks.length, jev: S.jev || 0, q: document.querySelector('.qnum')?.textContent, toast: document.querySelector('.resume-toast')?.textContent }));
  console.log('before reload', JSON.stringify(before)); console.log('after reload ', JSON.stringify(after));
  await play(0);
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'qa'); await p.click('#go'); await p.waitForTimeout(1500);
  console.log('finished: log', await p.evaluate(() => S.log.length), 'tier', await p.evaluate(() => S.card.T.size), 'jev', await p.evaluate(() => S.jev || 0), 'prog cleared', await p.evaluate(() => !localStorage.getItem('humanbench:prog')));
  await p.reload(); await p.waitForTimeout(1200);
  console.log('reload after finish shows result:', !!(await p.$('#poster')), 'errors', errs);
  await b.close();
})();
