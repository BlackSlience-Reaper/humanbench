// 手机模式（触屏）：导出海报后不应出现“下载图片”，点图不跳走
const { chromium, devices } = require('./pw.cjs');
(async () => {
  const b = await chromium.launch({ executablePath: require('./pw.cjs').EXE });
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + __dirname + '/../deploy/public/index.html'); await p.waitForTimeout(1000);
  await p.evaluate(() => { try { localStorage.clear() } catch (e) { } S.startAt = Date.now() - 8 * 60e3; S.log = Array.from({ length: 58 }, (_, i) => ({ row: 'traps', ok: i % 2 === 0, lv: 2, score: i % 2 ? 0 : 1, pts: i % 2 ? 0 : .85, secs: 5 })); captcha(); });
  await p.tap('#cap'); await p.waitForTimeout(1800); await p.fill('#nm', '小王GPT'); await p.tap('#go'); await p.waitForTimeout(1500);
  const url0 = p.url();
  await p.tap('#save'); await p.waitForTimeout(6000);
  const hasDownload = !!(await p.$('.shot a[download]'));
  await p.tap('.shot img').catch(() => { }); await p.waitForTimeout(800);
  console.log('mobile: download button shown =', hasDownload, '| url unchanged =', p.url() === url0, '| overlay still there =', !!(await p.$('.shot')), '| errors', errs);
  await b.close();
})();
