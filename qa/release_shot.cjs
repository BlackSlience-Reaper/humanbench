const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const W = +(process.env.W || 390);
  const p = await b.newPage({ viewport: { width: W, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  if (process.env.NOFONT) await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'index.html')); await p.waitForTimeout(800);
  await p.evaluate(() => start());
  let step = 0;
  while (!(await p.$('#cap'))) {
    await p.waitForTimeout(100);
    if (await p.$('.modal #jevNo')) { await p.click('#jevNo'); await p.waitForTimeout(300); continue; }   // 提前弹的 Jev 邀请：点“我自己来”
    const it = await p.evaluate(() => { const it = S.run[S.i]; return { kind: it.kind, ok: it.kind === 'ability' && it.data ? it.data.opts.findIndex(o => o.ok) : -1 }; });
    if (it.kind !== 'ability') { while (!(await p.$('#nextBtn'))) { const n = (await p.$$('.bubble')).length; if (n) await p.click('.bubble >> nth=' + (step % n)); await p.waitForTimeout(600); } await p.click('#nextBtn'); }
    else { await p.waitForTimeout(150); const W = +(process.env.W_EVERY ?? 5); const k = W && step % W === 0 ? 0 : it.ok; await p.click(`#qarea [data-opt="${k < 0 ? 0 : k}"]`); await p.waitForTimeout(650); if (await p.$(".modal #hold")) { await p.click("#hold"); await p.waitForTimeout(300); } await p.click("#nextBtn"); }
    step++;
  }
  await p.click('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', process.env.NM || 'Deep小王'); await p.click('#go'); await p.waitForTimeout(3000);
  const tag = process.env.TAG || W;
  console.log('result', await p.evaluate(() => ({ size: S.card.T.size, tier: S.card.T.tier, lv: S.log.reduce((a, r) => (a[r.lv] = (a[r.lv] || 0) + 1, a), {}), wrong: S.log.filter(r => !r.ok).length })));
  await p.screenshot({ path: __dirname + `/rel-${tag}.png`, fullPage: true });
  if (process.env.CARDS) {
    if (process.env.STRESS) await p.evaluate(() => {
      S.card.P.evidence = ['第三句很长很长的证据引用，继续加码测试兜底缩放到底有没有生效呢', '第四句很长很长的证据引用，继续加码测试兜底缩放到底有没有生效呢', '这是一句非常非常长的证据引用，用来测试人格卡在最极端的情况下会不会超出下边框，再多写一点字', '第二句同样很长的证据引用，看看两句加起来会不会把面板撑爆，然后继续写一些字'];
      S.card.dialog = S.card.dialog.replace('</div>\n', Array(6).fill('<span>超长的性格标签 ×9</span>').join('') + '</div>\n') + '<div class="end-row">' + Array(6).fill('<span>一个很长的结局名字 · DeepSeek</span>').join('') + '</div>';
    });
    await p.evaluate(() => document.fonts.ready);
    const over = await p.evaluate(async () => { const st = document.createElement('div'); st.className = 'c34-stage'; st.innerHTML = buildCards().join(''); document.body.appendChild(st); await document.fonts.ready; await new Promise(r => setTimeout(r, 300)); fitCards(st);
      const res = [...st.children].map((c, i) => { const cb = c.getBoundingClientRect(); const bad = []; c.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); if (!r.width) return;
        if (r.bottom > cb.bottom - 2 || r.right > cb.right - 2) bad.push('out:' + (el.className || el.tagName) + ':' + (el.textContent || '').slice(0, 20));
        if (cs.overflow === 'hidden' || cs.textOverflow === 'ellipsis') { if (el.scrollHeight > el.clientHeight + 3) bad.push('clipY:' + (el.className || el.tagName)); if (el.scrollWidth > el.clientWidth + 3) bad.push('clipX:' + (el.className || el.tagName) + ':' + (el.textContent || '').slice(0, 24)); } });
        return (i + 1) + ' ' + c.className.replace('c34','') + ' ' + [...new Set(bad)].slice(0, 8).join(' | '); });
      st.remove(); return res; });
    if (process.env.INFLATE) await p.evaluate(async () => {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
      const orig = window.html2canvas;
      window.html2canvas = (el, o) => orig(el, { ...o, onclone: d => { const st = d.createElement('style'); st.textContent = '.c34 .evidence q,.c34 .p-line{font-size:20px!important;line-height:1.5!important}'; d.head.appendChild(st); o.onclone && o.onclone(d); } });
    });
    await p.click(process.env.CLEAN ? '#cardsClean' : '#cards'); await p.waitForSelector('.cards-shot img', { timeout: 60000 }); await p.waitForTimeout(500);
    const n = await p.$$eval('.cards-shot img', ims => ims.length);
    for (let i = 0; i < n; i++) {
      const b64 = await p.$eval(`.cards-shot figure:nth-of-type(${i + 1}) img`, async im => { const bl = await (await fetch(im.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(bl); }); });
      require('fs').writeFileSync(__dirname + `/card-${tag}-${i + 1}.png`, Buffer.from(b64, 'base64'));
    }
    console.log('cards', n, over);
  }
  console.log('errors', errs, 'height', await p.evaluate(() => document.body.scrollHeight));
  await b.close();
})();
