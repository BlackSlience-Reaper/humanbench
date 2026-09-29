// Render every .fig in a figure page to 2x PNGs: node retro/render_i18n.cjs <html file> <output dir> [ids...]
// e.g. node retro/render_i18n.cjs retro/figs_en.html retro/img/en
const path = require('path'), fs = require('fs');
const { chromium, EXE } = require('../qa/pw.cjs');
const [file, out, ...only] = process.argv.slice(2);
if (!file || !out) { console.error('usage: node render_i18n.cjs <html file> <output dir> [ids...]'); process.exit(1); }
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.resolve(file)); await p.waitForTimeout(2500);
  await p.evaluate(() => document.fonts.ready);
  // warn when text sticks out of its box (common after translation)
  const over = await p.evaluate(() => [...document.querySelectorAll('.fig *')].filter(e => {
    const s = getComputedStyle(e); if (s.display === 'inline' || !e.childNodes.length) return false;
    return e.scrollWidth > e.clientWidth + 2 && s.overflow === 'visible' && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
  }).map(e => `${e.closest('.fig').id}: ${e.className || e.tagName} "${e.textContent.trim().slice(0, 40)}"`));
  if (over.length) console.log('possible overflow:\n  ' + over.join('\n  '));
  for (const el of await p.$$('.fig')) {
    const id = await el.getAttribute('id'); if (only.length && !only.includes(id)) continue;
    await el.screenshot({ path: path.join(out, `${id}.png`) }); console.log(id);
  }
  await b.close();
})();
