// 把韩文版图页里的 .fig 渲染成 2 倍 PNG：node retro/render_i18n_ko.cjs figs_ko.html img/ko [id1,id2,...]
const fs = require('fs'), path = require('path');
const { chromium, EXE } = require('../qa/pw.cjs');
const [file, outDir = 'img/ko', only] = process.argv.slice(2);
const want = only ? new Set(only.split(',')) : null;
(async () => {
  const out = path.resolve(__dirname, outDir); fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.resolve(__dirname, file)); await p.waitForTimeout(2500);
  await p.evaluate(() => document.fonts.ready);
  for (const el of await p.$$('.fig')) {
    const id = await el.getAttribute('id');
    if (want && !want.has(id)) continue;
    await el.screenshot({ path: path.join(out, id + '.png') }); console.log(id);
  }
  await b.close();
})();
