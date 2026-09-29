# HumanBench 部署

线上地址：https://humanbench.ybuild.ai（Cloudflare Worker `humanbench`）。自己部署：复制 `wrangler.example.jsonc` 为 `wrangler.jsonc`，填上 D1 数据库 ID 和域名，再用 `schema.sql` 建表（`npx wrangler d1 execute humanbench-stats --remote --file schema.sql`）。

- `public/`：静态页（`python3 build.py` 生成 `public/index.html`）和默认分享图 `og.png`
- `src/worker.js`：
  - `/r/<结果码>`：同一个页面，但分享标签换成这个人的结果
  - `/og/<结果码>.png`：现场生成这个人的 1200×630 结果卡（workers-og，中文字体按需从 Google Fonts 取子集），生成后缓存
  - 其他路径：静态资源

更新流程：

```bash
python3 build.py
cd deploy && npm install && npx wrangler deploy
```
