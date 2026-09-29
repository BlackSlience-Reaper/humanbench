// 测试脚本共用的 Playwright 入口：默认用项目依赖里的 playwright 和它自带的浏览器
// 本机另有安装位置时，在仓库根目录写一份 local.json（不进仓库，见 local.example.json）：{ "playwright": "/path/to/node_modules/playwright", "chromium": "/path/to/chrome-headless-shell" }
const fs = require('fs'), path = require('path');
let local = {};
try { local = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'local.json'), 'utf8')); } catch (e) { }
const pw = require(process.env.PLAYWRIGHT_PATH || local.playwright || 'playwright');
module.exports = { ...pw, chromium: pw.chromium, webkit: pw.webkit, devices: pw.devices, EXE: process.env.CHROME_PATH || local.chromium || undefined, ROOT: path.join(__dirname, '..') };
