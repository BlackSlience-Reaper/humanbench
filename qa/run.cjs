const { chromium } = require('./pw.cjs');
const out = __dirname + '/';
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) });
  await p.goto('file://' + out + '../index.html'); await p.waitForTimeout(1500);
  await p.screenshot({ path: out + '01-home.png', fullPage: true });
  await p.click('text=开始推理');
  const seen = {}; let step = 0;
  while (true) {
    await p.waitForTimeout(250);
    if (await p.$('#cap')) break;
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, pool: it.pool, ui: it.data.ui, chart: it.data.chart, term: !!it.data.term, ok: it.kind === 'ability' ? it.data.opts.findIndex(o => o.ok) : -1, bad: it.kind === 'ability' ? it.data.opts.findIndex(o => !o.ok) : -1 } });
    const tag = it.kind !== 'ability' ? it.kind : it.ui ? 'ui-' + it.ui : it.chart ? 'chart-' + it.chart : it.pool;
    const isArc = it.pool === 'arc';
    const shoot = !seen[tag]; seen[tag] = 1;
    if (shoot) await p.screenshot({ path: out + `q-${String(step).padStart(2, '0')}-${tag}.png`, fullPage: true });
    if (it.kind !== 'ability') {
      let round = 0;
      while (!(await p.$('#nextBtn'))) {
        const n = (await p.$$('.bubble')).length;
        if (n) { await p.click('.bubble >> nth=' + ((step + round) % n)); round++; }
        await p.waitForTimeout(900);
      }
      if (shoot || it.kind === 'chat') await p.screenshot({ path: out + `c-${String(step).padStart(2, '0')}-${it.kind}.png`, fullPage: true });
      await p.click('#nextBtn');
    } else {
      const good = step % 3 !== 0;
      await p.waitForTimeout(good ? 900 : 200);
      await p.click(`#qarea [data-opt="${good ? it.ok : it.bad}"]`);
      await p.waitForTimeout(600);
      if (await p.$('.modal')) { await p.screenshot({ path: out + 'syco.png' }); await p.click('#hold'); await p.waitForTimeout(400); }
      if (shoot && (it.ui || it.chart || isArc)) await p.screenshot({ path: out + `r-${String(step).padStart(2, '0')}-${tag}.png`, fullPage: true });
      await p.click('#nextBtn');
    }
    step++;
  }
  await p.click('#cap'); await p.waitForTimeout(1800);
  await p.fill('#nm', '摸鱼研究所');
  await p.click('#go'); await p.waitForTimeout(3500);
  await p.screenshot({ path: out + '90-release.png', fullPage: true });
  console.log(await p.evaluate(() => [...document.querySelectorAll('.lt tbody tr')].map(tr => [...tr.children].slice(1).map(td => td.textContent + (td.classList.contains('win') ? '*' : '')).join(' '))));
  await p.click('#save'); await p.waitForTimeout(8000);
  const img = await p.$('.shot img');
  if (img) { const b64 = await img.evaluate(async i => { const b = await (await fetch(i.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(b); }); }); require('fs').writeFileSync(out + '91-poster.png', Buffer.from(b64, 'base64')); }
  const shareUrl = await p.evaluate(() => S.shareUrl); console.log('share', shareUrl.slice(0, 90));
  const p2 = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await p2.goto('file://' + out + '../index.html' + shareUrl.slice(shareUrl.indexOf('#'))); await p2.waitForTimeout(1200);
  await p2.screenshot({ path: out + '95-challenge.png' });
  console.log('steps', step, 'errors:', errs, 'poster:', !!img);
  await b.close();
})();
