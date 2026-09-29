const { chromium, EXE } = require('../qa/pw.cjs');
const O = __dirname + '/img';
(async () => {
  const b = await chromium.launch({ executablePath: EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, locale: 'zh-CN' });
  await p.goto('https://humanbench.ybuild.ai/'); await p.waitForTimeout(2500);
  await p.screenshot({ path: O + '/s-home.png' });
  // 名场面对话题
  await p.evaluate(() => { localStorage.clear(); start(); S.run[S.i] = { kind: 'chat', qi: 60, data: CHATS[60] }; render(); });
  await p.waitForTimeout(800); await p.click('.bubble >> nth=1'); await p.waitForTimeout(1800);
  await p.screenshot({ path: O + '/s-chat.png' });
  // 电脑操作题
  await p.evaluate(() => { const q = POOLS.osworld.find(x => x.ui === 'x3cookie') || POOLS.osworld.find(x => x.lv >= 2 && x.ui); S.run[S.i] = { kind: 'ability', pool: 'osworld', row: 'osworld', data: q, ref: null }; render(); });
  await p.waitForTimeout(700); await p.screenshot({ path: O + '/s-osworld.png' });
  // 结果页 + 分享卡
  await p.evaluate(() => { localStorage.clear(); start(); S.startAt = Date.now() - 12 * 60e3;
    const acc = { traps: .83, knowledge: .67, arc: .6, terminal: .8, frontier: .6, cursor: .8, gdpval: .75, automation: .6, hle: .6, science: .8, osworld: 1, chart: .75 };
    S.log = []; ROWS.forEach(r => { for (let i = 0; i < 5; i++) { const ok = (i + 1) / 5 <= acc[r.id] + 1e-9, lv = i % 2 ? 3 : 2; S.log.push({ row: r.id, ok, lv, score: ok ? 1 : 0, pts: ok ? LV_VAL[lv] : 0, secs: 6, issue: ['把小数当版本号比大小', '在弹窗里点了最大的那个按钮', '遇到冲突就 --force'][i % 3] }); } });
    S.traits = { based: 9, chaos: 8, warm: 4, syc: 2 }; S.flavor = { 'Claude': 5, 'GPT-4o': 2 };
    const c = CHATS[60], o = c.opts[1], e = c.nodes.m2[0];
    S.endings = [{ chat: c.title, title: e.end.title, id: e.end.id, tr: [...(o.tr || []), ...(e.tr || [])], log: [{ who: 'u', t: c.u }, { who: 'me', t: o.t }, { who: 'u', t: o.reply }, { who: 'me', t: e.t }], ref: { qi: 60, path: [{ oi: 1 }, { node: 'm2', oi: 0 }] } }];
    captcha(); });
  await p.click('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', '小李'); await p.click('#go'); await p.waitForTimeout(3000);
  await p.evaluate(() => { S.card.P = { ...S.card.P, p: PROFILES.find(x => x.id === 'claude'), closest: PROFILES.find(x => x.id === 'claude') }; S.captions = makeCaptions(S.card); window.scrollTo(0, 0); });
  await p.screenshot({ path: O + '/s-result.png' });
  await p.evaluate(() => { window.__exportScale = 2; return saveCards(false, document.getElementById('cards')); });
  await p.waitForSelector('.cards-shot img', { timeout: 90000 }); await p.waitForTimeout(500);
  const n = await p.$$eval('.cards-shot img', a => a.length);
  for (let i = 0; i < n; i++) {
    const b64 = await p.$eval(`.cards-shot figure:nth-of-type(${i + 1}) img`, async im => { const bl = await (await fetch(im.src)).blob(); return await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result.split(',')[1]); fr.readAsDataURL(bl); }); });
    require('fs').writeFileSync(`${O}/card-${i + 1}.png`, Buffer.from(b64, 'base64'));
  }
  console.log('cards', n);
  await b.close();
})();
