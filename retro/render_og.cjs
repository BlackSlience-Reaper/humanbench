// 渲染 og_<lang>.html 里的 #og（1200×630）和 #sq（600×600）到 img/[<lang>/]og.png、og-sq.png
const { chromium, EXE } = require('../qa/pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage({ viewport: { width: 1300, height: 1400 }, deviceScaleFactor: 1 });
  for (const l of ['zh', 'en', 'ja', 'ko']) {
    await p.goto('file://' + __dirname + `/og_${l}.html`); await p.waitForTimeout(2000); await p.evaluate(() => document.fonts.ready);
    const d = __dirname + '/img/' + (l === 'zh' ? '' : l + '/');
    await (await p.$('#og')).screenshot({ path: d + 'og.png' });
    await (await p.$('#sq')).screenshot({ path: d + 'og-sq.png' });
    console.log(l);
  }
  await b.close();
})();
