// 和 Jev 一起答：PAGE=deploy/public/index.html [AT=0 第几题开启] [AUTO=1 用自动弹框开启]
const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../' + (process.env.PAGE || 'deploy/public/index.html'), { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(1500);
  await p.evaluate(() => { window.__jumps = []; const o = window.track; window.track = (e, d) => { if (e === 'jev' && d && d.a === 'jump') window.__jumps.push([d.q + 1, d.n]); return o(e, d); }; start(); });
  const AT = +(process.env.AT || 0), AUTO = !!process.env.AUTO;
  let on = false, shots = 0, t0 = Date.now(), sawTake = 0;
  for (let guard = 0; guard < 2000 && !(await p.$('#cap')); guard++) {
    await p.waitForTimeout(60);
    const st = await p.evaluate(() => ({ i: S.i, kind: S.run[S.i] && S.run[S.i].kind, modal: !!document.querySelector('.modal'), take: !!document.querySelector('.jev-ff') }));
    if (st.take) { sawTake++; if (shots < 2) { await p.waitForTimeout(shots ? 2600 : 600); await p.screenshot({ path: __dirname + `/jevff-${process.env.TAG || 'x'}-${shots}.png` }); shots++; } continue; }
    if (!on && st.i >= AT && !st.modal) {
      if (AUTO) { if (st.i >= 10 && st.i < 12) await p.evaluate(() => { S.startAt = Date.now() - 5 * 60000; }); }
      else if (await p.$('.jev-bottle')) { if (!shots) await p.screenshot({ path: __dirname + '/jevco-bar0.png', clip: { x: 0, y: 0, width: 390, height: 70 } }); await p.click('.jev-bottle'); await p.waitForTimeout(300); }
    }
    if (await p.$('#jevGo')) { await p.screenshot({ path: __dirname + '/jevco-modal.png' }); await p.click('#jevGo'); on = true; continue; }
    if (await p.$('.modal button')) { await p.click('.modal button >> nth=0'); continue; }
    if (await p.$('#nextBtn')) { await p.click('#nextBtn'); continue; }
    const opt = await p.$('#qarea [data-opt]:not([disabled])');
    if (opt && st.kind === 'ability') { const ok = await p.evaluate(() => { const it = S.run[S.i]; return it.data ? Math.max(0, it.data.opts.findIndex(o => o.ok)) : 0; }); await p.click(`#qarea [data-opt="${ok}"]`).catch(() => {}); await p.waitForTimeout(350); continue; }
    const bub = (await p.$$('.bubble')).length; if (bub) { await p.click('.bubble >> nth=0').catch(() => {}); await p.waitForTimeout(300); continue; }
    if (opt) { await opt.click().catch(() => {}); await p.waitForTimeout(300); }
  }
  const r = await p.evaluate(() => {
    const jd = S.run.map((it, i) => it.jevDone ? i : -1).filter(i => i >= 0);
    const kinds = {}; jd.forEach(i => { const it = S.run[i]; const k = it.kind === 'ability' ? it.pool : it.src || it.kind; kinds[k] = (kinds[k] || 0) + 1; });
    const rows = {}; S.log.forEach(x => rows[x.row] = (rows[x.row] || 0) + 1);
    const ord = (i, f) => S.run.slice(0, i).filter(x => !x.jevDone && f(x)).length;
    const bad = jd.filter(i => { const it = S.run[i]; return it.kind === 'persona' || ['dense', 'traps_fixed'].includes(it.pool); });
    const mine = { traps: S.run.filter(x => x.pool === 'traps' && !x.jevDone).length, chat: S.run.filter(x => x.kind === 'chat' && !x.jevDone).length, persona: S.run.filter(x => x.kind === 'persona' && !x.jevDone).length, arc: rows.arc || 0, dense: rows.dense || 0 };
    const ok = !bad.length && mine.traps >= 4 && mine.chat >= 4 && mine.persona === 6 && mine.dense === 5 && Math.min(...Object.values(rows)) >= 2;
    return { ok, jumps: window.__jumps, total: S.run.length, jev: S.jev, jd: jd.length, onAt: S.jevOnAt, kinds, minRow: Math.min(...Object.values(rows)), mine, bad };
  });
  console.log(JSON.stringify(r), 'takes', sawTake > 0, 'errors', errs, 'sec', Math.round((Date.now() - t0) / 1000));
  await b.close();
})();
