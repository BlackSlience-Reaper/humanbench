const { chromium } = require('./pw.cjs');
const BASE = process.env.URL || 'http://localhost:8799';
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const c = await b.newContext({ locale: 'zh-CN', viewport: { width: 390, height: 844 } }); const p = await c.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(BASE + '/'); await p.waitForTimeout(800);
  await p.evaluate(() => start());
  let step = 0;
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(50);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=' + (step % n)); await p.waitForTimeout(420); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(60); const k = step % 4 ? Math.max(0, it.ok) : 0; await p.click(`#qarea [data-opt="${k}"]`); await p.waitForTimeout(450); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
    step++;
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'Rochor'); await p.click('#go'); await p.waitForTimeout(2000);
  const grab = () => p.evaluate(() => ({
    persona: document.querySelector('#poster .persona .pn')?.textContent, ev: [...document.querySelectorAll('#poster .evidence q')].map(q => q.textContent),
    issues: [...document.querySelectorAll('#poster .issues li')].map(l => l.textContent).slice(0, 3), ends: [...document.querySelectorAll('#poster .end-row span')].map(s => s.textContent).slice(0, 3),
    badges: [...document.querySelectorAll('#poster .chips .badge b')].map(x => x.textContent), best: document.querySelector('#poster .scene-log .msg')?.textContent,
    cjk: ((document.querySelector('#poster').innerText.match(/[一-鿿]/g) || []).length), share: S.shareUrl }));
  const zh = await grab(); console.log('ZH', JSON.stringify(zh, null, 0).slice(0, 700));
  for (const l of (process.env.SW || 'en,ja').split(',')) {
    await p.click(`.langs a[data-l="${l}"]`); await p.waitForTimeout(2500);
    const r = await grab(); console.log(l.toUpperCase(), new URL(p.url()).pathname, JSON.stringify(r).slice(0, 700));
  }
  // 挑战链接：日语用户打开中文分享人的链接
  const code = zh.share.split('/r/')[1];
  const c2 = await b.newContext({ locale: process.env.CLOC || 'ja-JP' }); const p2 = await c2.newPage();
  await p2.goto(BASE + '/r/' + code); await p2.waitForTimeout(1500);
  console.log('JA challenge', new URL(p2.url()).pathname.slice(0, 12), await p2.$eval('.challenge', e => e.innerText.replace(/\n/g, ' | ')).catch(() => 'none'));
  const c3 = await b.newContext({ locale: 'en-US' }); const p3 = await c3.newPage();
  await p3.goto(BASE + '/'); await p3.waitForTimeout(1000); console.log('en home ->', new URL(p3.url()).pathname);
  console.log('errors', errs);
  await b.close();
})();
