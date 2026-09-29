// 新增内容冒烟：每段新对话 / 新人格题 / 新 AI 味题都渲染并点到结局，看有没有报错
const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  for (const L of (process.env.LANGS || ',en,ja,fr,ko').split(',')) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 } });
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto(`file://${require('./pw.cjs').ROOT}/deploy/public/${L ? L + '/' : ''}index.html`, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(1200);
    const items = await p.evaluate(() => {
      const out = [];
      for (let i = 16; i < CHATS.length; i++) out.push({ kind: 'chat', qi: i });
      for (const ax of Object.keys(PERSONA_Q)) for (let i = 2; i < PERSONA_Q[ax].length; i++) out.push({ kind: 'persona', axis: ax, qi: i });
      for (let i = 6; i < SLOP_VIBES.length; i++) out.push({ kind: 'vibe', src: 'slop', qi: i });
      return out;
    });
    let ok = 0, stuck = [];
    for (const [n, it] of items.entries()) {
      await p.evaluate(({ it, n }) => { reset(); S.startAt = Date.now(); const d = it.kind === 'chat' ? CHATS[it.qi] : it.kind === 'persona' ? PERSONA_Q[it.axis][it.qi] : SLOP_VIBES[it.qi]; S.run = [{ ...it, data: d, flip: n % 2 === 1 }, { kind: 'ability', pool: 'knowledge', row: 'knowledge', data: null }]; S.i = 0; render(); }, { it, n });
      let done = false;
      for (let t = 0; t < 40 && !done; t++) {
        await p.waitForTimeout(250);
        if (await p.evaluate(() => S.i >= 1)) { done = true; break; }
        if (await p.$('#nextBtn')) { await p.click('#nextBtn').catch(() => {}); continue; }
        const bs = await p.$$('.bubble:not([disabled])'); if (bs.length) await bs[(n + t) % bs.length].click().catch(() => {});
      }
      done ? ok++ : stuck.push(it.kind + ':' + (it.axis || '') + it.qi);
    }
    console.log(L || 'zh', `通过 ${ok}/${items.length}`, stuck.length ? '卡住 ' + stuck.join(',') : '', errs.length ? '报错 ' + errs.slice(0, 3).join(' | ') : '无报错');
    await p.close();
  }
  await b.close();
})();
