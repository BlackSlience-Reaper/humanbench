// 慢速玩家：第 12 题接受 Jev，之后记录每次弹窗出现的题号，检查第二次至少隔 12 道
const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(600);
  await p.evaluate(() => start());
  const log = [];
  for (let g = 0; g < 400 && !(await p.$('#cap')); g++) {
    // 模拟很慢：每一步把开局时间和上次代答时间往前推 20 秒
    await p.evaluate(() => { S.startAt -= 20000; if (S.jevAtT) S.jevAtT -= 20000; });
    if (await p.$('.modal.jev #jevGo')) {
      const i = await p.evaluate(() => S.i + 1); await p.click('#jevGo'); await p.waitForSelector('#jevOk'); await p.click('#jevOk');
      log.push(`Jev 弹出于 Q${i} → 代答后到 Q${await p.evaluate(() => S.i + 1)}`); continue;
    }
    if (await p.$('.modal:not(.jev) #hold')) { await p.click('#hold'); await p.waitForTimeout(300); }
    const it = await p.evaluate(() => { const it = S.run[S.i]; return it ? { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 } : null; });
    if (!it) continue;
    if (it.kind !== 'ability') { let k = 0; while (!(await p.$('#nextBtn')) && k++ < 40) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0').catch(() => {}); await p.waitForTimeout(350); } await p.click('#nextBtn').catch(() => {}); }
    else { const sel = `#qarea [data-opt="${Math.max(0, it.ok)}"]`; if (!(await p.$(sel))) continue; if (await p.$(sel + '[disabled]')) { await p.waitForTimeout(400); if (await p.$('.modal:not(.jev) #hold')) await p.click('#hold'); await p.waitForTimeout(300); await p.click('#nextBtn').catch(() => {}); continue; } await p.click(sel); await p.waitForTimeout(420); if (await p.$(".modal:not(.jev)")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn").catch(() => {}); }
  }
  console.log(log.join('\n'), '\nJev 总代答', await p.evaluate(() => S.jev), '次数', await p.evaluate(() => S.jevUses), 'errors', errs);
  await b.close();
})();
