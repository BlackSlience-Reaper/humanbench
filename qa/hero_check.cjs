const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  // 快速造一个结果：跑一局
  await p.evaluate(() => start());
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(60);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=0'); await p.waitForTimeout(450); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(80); await p.click(`#qarea [data-opt="${S_ok = Math.max(0, it.ok)}"]`.replace('${S_ok = Math.max(0, it.ok)}', Math.max(0, it.ok))); await p.waitForTimeout(500); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
  }
  await p.click('#cap'); await p.waitForTimeout(1500); await p.fill('#nm', 'Rochor'); await p.click('#go'); await p.waitForTimeout(2000);
  const shots = [['405B', '旗舰大模型', '激活 63B'], ['1.8T', '前沿大模型', 'Dense 全激活'], ['7B', '小钢炮', 'Dense 全激活']];
  for (const [i, [num, tier, sub]] of shots.entries()) {
    await p.evaluate(([num, tier, sub]) => {
      document.querySelector('#poster .p-size .num').textContent = num;
      document.querySelector('#poster .p-size .sticker').textContent = tier;
      document.querySelector('#poster .p-size .lbl div').textContent = sub;
      const chips = document.querySelector('#poster .chips');
      if (!chips.querySelector('.fakefun')) { chips.querySelectorAll('.badge').forEach(x => x.remove()); const f = document.createElement('span'); f.className = 'fakefun'; f.innerHTML = '整活指数 <b>6</b>'; chips.appendChild(f); const bd = document.createElement('span'); bd.className = 'badge'; bd.innerHTML = '徽章 <b>懂 semver</b>'; chips.appendChild(bd); }
    }, [num, tier, sub]);
    const over = await p.evaluate(() => { const pr = document.querySelector('#poster').getBoundingClientRect(); return [...document.querySelectorAll('#poster .p-hero *')].filter(e => e.getBoundingClientRect().right > pr.right - 1).map(e => e.className || e.tagName).slice(0, 5); });
    const el = await p.$('#poster .p-hero'); await el.screenshot({ path: __dirname + `/hero-${i}.png` });
    console.log(num, 'overflow:', over);
  }
  await b.close();
})();
