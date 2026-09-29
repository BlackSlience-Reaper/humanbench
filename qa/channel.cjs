const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  // 造一个挑战码
  const code = Buffer.from(JSON.stringify({ m: 'QA-7B', s: '7B', a: '', d: 1, t: 'x', p: 'y', k: 9, o: 15, aa: 20, l: 'zh', ti: 3, pi: 'grok' })).toString('base64url');
  for (const [ch, loc] of [['qr', 'zh-CN'], ['link', 'ja-JP']]) {
    const c = await b.newContext({ locale: loc });
    await c.addInitScript(ch => { try { localStorage.setItem('humanbench:sid', 'qa-ch-' + ch); } catch (e) { } }, ch);
    const p = await c.newPage();
    await p.goto(`https://humanbench.ybuild.ai/r/${code}?c=${ch}`); await p.waitForTimeout(2500);
    console.log(ch, loc, '->', new URL(p.url()).pathname.slice(0, 8) + '…' + new URL(p.url()).search, '| challenge card:', !!(await p.$('.challenge')));
    await c.close();
  }
  await b.close();
})();
