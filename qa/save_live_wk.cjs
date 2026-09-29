// 线上导出分享卡复现：URL=... node qa/save_live.cjs
const { webkit, devices } = require('./pw.cjs');
(async () => {
  const b = await webkit.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'], locale: process.env.LOC || 'zh-CN' });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' || m.text().startsWith('[dbg]')) errs.push(m.text()); });
  p.on('requestfailed', r => errs.push('reqfail ' + r.url().slice(0, 120) + ' ' + (r.failure() || {}).errorText));
  await p.goto(process.env.URL || 'https://humanbench.ybuild.ai/'); await p.waitForTimeout(1500);
  await p.evaluate(EV => { try { localStorage.clear() } catch (e) { } start(); S.startAt = Date.now() - 8 * 60e3; S.log = Array.from({ length: 58 }, (_, i) => ({ row: ['traps','knowledge','dense','hle'][i%4], ok: i % EV === 0, lv: 1, score: i % EV ? 0 : 1, pts: i % EV ? 0 : .7, secs: 5, issue: 'x' })); captcha(); }, +(process.env.EVERY || 3));
  await p.tap('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', process.env.NM || '小王'); await p.tap('#go'); await p.waitForTimeout(2500);
  await p.evaluate(() => { const o = window.html2canvas; if (o) return; });
  await p.evaluate(async () => { await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"); const o = window.html2canvas; window.html2canvas = async (...a) => { try { const c = await o(...a); c.toBlob(bl => { if (!bl) console.log('[dbg] toBlob null'); }); return c; } catch (e) { console.log('[dbg] h2c error ' + (e && e.stack || e)); throw e; } }; });
  const ids = process.env.IDS ? process.env.IDS.split(',') : await p.evaluate(() => [...PROFILES.map(x => x.id), 'human']); console.log('size', await p.evaluate(() => S.card.T.size + ' ' + S.card.T.tier));
  for (const id of ids) {
    await p.evaluate(id => { document.querySelectorAll('.cards-shot').forEach(e => e.remove()); S.card.P = { ...S.card.P, p: id === 'human' ? HIDDEN_P : PROFILES.find(x => x.id === id), closest: PROFILES.find(x => x.id === 'claude') }; }, id);
    const t0 = Date.now(); await p.tap('#cards'); let t = '';
    for (let i = 0; i < 60; i++) { await p.waitForTimeout(300); t = await p.$eval('#cards', e => e.textContent); if (await p.$('.cards-shot img') || /失败|fail/i.test(t)) break; }
    console.log(id, 'imgs', (await p.$$('.cards-shot img')).length, 'btn', t, 'secs', (Date.now() - t0) / 1000);
  }
  console.log(errs.join('\n'));
  await b.close();
})();
