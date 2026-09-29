// 把 figs.html 里每个 .fig 渲染成 2 倍分辨率 PNG：node retro/render.cjs
const { chromium, EXE } = require('../qa/pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/figs.html'); await p.waitForTimeout(2500);
  await p.evaluate(() => document.fonts.ready);
  for (const el of await p.$$('.fig')) { const id = await el.getAttribute('id'); await el.screenshot({ path: `${__dirname}/img/${id}.png` }); console.log(id); }
  await b.close();
})();
