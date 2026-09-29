// 提前邀请 Jev：英文版 / X / 微信内置浏览器 在第 4 题前弹，中文普通浏览器不弹
const { chromium } = require('./pw.cjs');
const EXE = require('./pw.cjs').EXE;
const cases = [['en 普通浏览器', 'en/index.html', null], ['zh 普通浏览器', 'index.html', null], ['zh X 内置', 'index.html', 'Mozilla/5.0 (iPhone) AppleWebKit Mobile Twitter for iPhone'], ['zh 微信内置', 'index.html', 'Mozilla/5.0 (iPhone) AppleWebKit Mobile MicroMessenger/8.0'], ['ja QQ 内置', 'ja/index.html', 'Mozilla/5.0 (iPhone) AppleWebKit Mobile QQ/9.0']];
(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  for (const [name, page, ua] of cases) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, ...(ua ? { userAgent: ua } : {}) });
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + require('./pw.cjs').ROOT + '/deploy/public/' + page); await p.waitForTimeout(800);
    await p.evaluate(() => { localStorage.clear(); start(); });
    let modalAt = null;
    for (let step = 0; step < 5 && modalAt == null; step++) {
      await p.waitForTimeout(300);
      if (await p.$('.modal.jev')) { modalAt = await p.evaluate(() => S.i + 1); break; }
      const k = await p.evaluate(() => { const it = S.run[S.i]; return it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1; });
      if (k >= 0) { await p.click(`#qarea [data-opt="${k}"]`); await p.waitForTimeout(600); if (await p.$('.modal #hold')) { await p.click('#hold'); await p.waitForTimeout(300); } await p.click('#nextBtn'); }
      else { let g = 0; while (!(await p.$('#nextBtn')) && g++ < 20) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(400); } await p.click('#nextBtn'); }
      await p.waitForTimeout(400);
      if (await p.$('.modal.jev')) modalAt = await p.evaluate(() => S.i + 1);
    }
    console.log(name.padEnd(12), 'JEV_EARLY=', await p.evaluate(() => JEV_EARLY), '| 邀请弹在', modalAt ? `Q${modalAt} 之前` : '前 5 题没弹', errs.length ? '| 报错 ' + errs[0] : '');
    await ctx.close();
  }
  await b.close();
})();
