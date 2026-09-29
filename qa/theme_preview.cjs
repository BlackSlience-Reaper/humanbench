const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const W = +(process.env.W || 390);
  const p = await b.newPage({ viewport: { width: W, height: 844 }, deviceScaleFactor: +(process.env.DSF || 2) });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  if (process.env.NOFONT) await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(800);
  await p.evaluate(() => start());
  let step = 0;
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(100);
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=' + (step % n)); await p.waitForTimeout(600); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(150); const W = +(process.env.W_EVERY ?? 5); const k = W && step % W === 0 ? 0 : it.ok; await p.click(`#qarea [data-opt="${k < 0 ? 0 : k}"]`); await p.waitForTimeout(650); if (await p.$(".modal")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
    step++;
  }
  await p.click('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', process.env.NM || 'Deep小王'); await p.click('#go'); await p.waitForTimeout(3000);
  const tag = process.env.TAG || W;
  console.log('result', await p.evaluate(() => ({ size: S.card.T.size, tier: S.card.T.tier, lv: S.log.reduce((a, r) => (a[r.lv] = (a[r.lv] || 0) + 1, a), {}), wrong: S.log.filter(r => !r.ok).length })));
  await p.screenshot({ path: __dirname + `/rel-${tag}.png`, fullPage: true });
  if (process.env.DEXSHOT) { await p.evaluate(() => { localStorage.setItem('humanbench:dex', JSON.stringify(['claude', 'gpt4o', 'grok'])); }); const el = await p.$('.dex'); if (el) await el.screenshot({ path: process.env.DEXSHOT }); }
  // 8 种人格配色预览：同一局结果，换人格导出 4 张卡
  const ids = await p.evaluate(() => [...PROFILES.map(x => x.id), 'human']);
  const out = process.env.OUT || (__dirname + '/theme');
  require('fs').mkdirSync(out, { recursive: true });
  for (const id of (process.env.IDS ? process.env.IDS.split(',') : ids)) {
    await p.evaluate(id => { window.__themePreview = true; document.querySelectorAll('.cards-shot').forEach(e => e.remove()); S.card.P = { ...S.card.P, p: id === 'human' ? HIDDEN_P : PROFILES.find(x => x.id === id), closest: PROFILES.find(x => x.id === 'claude') }; }, id);
    await p.evaluate(sc => { window.__exportScale = sc; }, +(process.env.SCALE || 2));
    await p.evaluate(() => saveCards(false, document.getElementById('cards')));
    await p.waitForSelector('.cards-shot img', { timeout: 60000 }); await p.waitForTimeout(400);
    const n = await p.$$eval('.cards-shot img', ims => ims.length);
    for (let i = 0; i < n; i++) {
      const b64 = await p.$eval(`.cards-shot figure:nth-of-type(${i + 1}) img`, async im => { const bl = await (await fetch(im.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(bl); }); });
      require('fs').writeFileSync(`${out}/${id}-${i + 1}.png`, Buffer.from(b64, 'base64'));
    }
    console.log('theme', id, n);
  }
  if (process.env.MYSTERY) {
    const L = await p.evaluate(() => LANG);
    const T = { zh: ["隐藏款", "？？？型人格", "隐藏款 · 出现率 2.6%", "8 种人格之外，还藏着一种。", "你会是它吗？", "你是几B的模型？扫码来测"],
      en: ["Secret", "The ??? Type", "Secret · 2.6% chance", "Beyond the 8 personas, there’s one more.", "Could it be you?", "How many B are you? Scan to test"],
      ja: ["シークレット", "？？？タイプ", "シークレット · 出現率 2.6%", "8つの人格のほかに、もうひとつ。", "それは、あなたかも？", "あなたは何Bのモデル？スキャンで診断"] }[L] || [];
    await p.evaluate(T => {
      const q = S.qrImg ? `<img src="${S.qrImg}" alt="">` : "";
      const d = document.createElement("div"); d.id = "mystery"; d.style.cssText = "position:fixed;left:0;top:0;z-index:99999";
      d.innerHTML = `<div class="c34" data-th="human" style="--paper:#F8F6FF;--pink:#141414;--yellow:#FFE14D;--green:#B78CFF">
        <div class="c34-top"><span class="logo">h_</span><b>HUMANBENCH · ${document.querySelector(".c34-top b") ? "" : ""}</b><span class="c34-k">${T[0]}</span></div>
        <div class="c34-body" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px">
          <div class="glyph" style="width:230px;height:230px;border-radius:52px;font:400 170px/230px var(--num);background:linear-gradient(135deg,#FF7EC3,#FFE14D,#43E08B,#6C9BFF,#B78CFF);border:5px solid var(--ink);box-shadow:8px 8px 0 var(--ink);color:var(--ink);display:grid;place-items:center">?</div>
          <div style="font:400 44px var(--fun);margin-top:18px">${T[1]}</div>
          <em class="rare-tag hid" style="font-size:18px;padding:4px 16px">${T[2]}</em>
          <div style="font:800 20px var(--sans);color:var(--muted);line-height:1.6;margin-top:6px">${T[3]}<br><b style="color:var(--ink)">${T[4]}</b></div>
        </div>
        <div class="c34-foot"><div class="c34-qr">${q}</div><div><b>${T[5]}</b><small>humanbench.ybuild.ai · @Alex_ybuild</small></div></div></div>`;
      document.body.appendChild(d);
      const top = d.querySelector(".c34-top b"); top.textContent = document.querySelector(".c34-top b") ? "HUMANBENCH" : "HUMANBENCH";
    }, T);
    await p.waitForTimeout(600);
    await (await p.$("#mystery .c34")).screenshot({ path: process.env.MYSTERY });
    console.log('mystery', process.env.MYSTERY);
  }
  console.log('errors', errs);
  await b.close();
})();
