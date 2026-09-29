const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const base = process.env.URL || 'http://localhost:8799';
  for (const loc of (process.env.LOCS || 'ja-JP,ko-KR,es-MX,en-US,zh-CN,fr-FR,fr-CA,zh-TW,zh-HK,zh-MO,zh-Hant,de-DE').split(',')) {
    const c = await b.newContext({ locale: loc }); const p = await c.newPage();
    await p.goto(base + '/'); await p.waitForTimeout(1200);
    console.log(loc, '->', new URL(p.url()).pathname, await p.$eval('h1', h => h.textContent));
    await c.close();
  }
  // 手动选了中文后不再跳
  const c = await b.newContext({ locale: 'ja-JP' }); const p = await c.newPage();
  await p.goto(base + '/'); await p.waitForTimeout(800); await p.click('.langs a[data-l="zh"]'); await p.waitForTimeout(1200);
  console.log('pick zh ->', new URL(p.url()).pathname);
  await p.goto(base + '/'); await p.waitForTimeout(800); console.log('revisit ->', new URL(p.url()).pathname);
  const code = process.env.CODE; if (code) { await p.goto(base + '/ko/r/' + code); await p.waitForTimeout(1000); console.log('challenge:', await p.$eval('.challenge', e => e.innerText.slice(0, 80)).catch(() => 'none')); }
  await b.close();
})();
