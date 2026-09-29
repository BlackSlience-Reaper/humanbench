// 模拟“生成海报后页面被重载”：结果应自动恢复
const { chromium } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../index.html'); await p.waitForTimeout(800);
  // 快速做完一局：直接构造一份结果进入发布会
  await p.evaluate(() => { S.startAt = Date.now() - 9 * 60e3; S.log = Array.from({ length: 58 }, (_, i) => ({ row: ['traps', 'knowledge', 'arc', 'terminal'][i % 4], ok: i % 3 !== 0, lv: 2, score: i % 3 ? 1 : 0, pts: i % 3 ? .85 : 0, secs: 6 })); S.flavor = { Codex: 2, Claude: 1 }; S.traits = { verbose: 7, based: 6 }; S.picks = [{ t: '先给结论：可以收口。', id: 'Codex', tr: ['verbose'] }]; captcha(); });
  await p.click('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', 'Deep小王'); await p.click('#go'); await p.waitForTimeout(1500);
  const before = await p.$eval('.p-name', e => e.textContent);
  await p.click('#save'); await p.waitForTimeout(6000);
  const img = await p.$('.shot img'); const size = img ? await img.evaluate(i => [i.naturalWidth, i.naturalHeight]) : null;
  await p.reload(); await p.waitForTimeout(1500);
  const after = await p.$eval('.p-name', e => e.textContent).catch(() => 'NOT RESTORED');
  const banner = await p.$eval('.restored', e => e.textContent).catch(() => '');
  console.log('poster size', size, '| before', before, '| after reload', after, '|', banner, '| errors', errs);
  await b.close();
})();
