# HumanBench · 你是几B的模型？

> AI 翻过的车，这次换你来开。 · You're the model now. We'll count your parameters.

一个整活测评：76 道题里，你扮演大模型答题——数 strawberry 里有几个 r、比 9.11 和 9.9、被用户越狱、在名场面对话里选怎么回……最后生成一场“模型发布会”：参数量、MoE 还是 Dense、发布会跑分表、AA 智能指数排名、已知问题，以及你的 AI 人格（Claude 型、GPT-4o 型、Grok 型……还有一个隐藏款）。

线上：<https://humanbench.ybuild.ai>（简体、繁體、English、日本語、Español、한국어、Français）

上线 3 天：约 100 万人次触达（估算）、3.99 万独立访客、1.27 万人答完 76 题、1.36 万次自发分享，来自 96 个国家和地区。起点是几百粉丝的推特号，零投放。

[English](#english) · [项目结构](#项目结构) · [本地运行](#本地运行) · [部署](#部署) · [许可](#许可)

## 不只是代码：完整的创作轨迹

这个仓库开源的不只是最终代码，而是从一个念头到上线运营的全过程：

- [`prompts/`](prompts/)：GPT-6 Pro 原型的 4 条原始消息，我在 Claude Code 里发出的全部 237 条消息（原文照录，只省略了几条私人闲聊），以及 Claude 拆给并行子任务的所有写作、翻译、审校说明。
- [`retro/`](retro/)：上中下三篇复盘（中英日韩四种语言）、全部配图和生成脚本。在线阅读：<https://humanbench.ybuild.ai/retro/>
- `qa/`、`stats.sh`、`dropoff.sh`：每次改动前跑的自动化测试，和按数据迭代时用的查询脚本。

想看人和 AI 到底怎么一起做出一个产品，建议从 `prompts/02-claude-prompts.md` 和复盘上篇读起。

## 它是怎么做出来的

- **v0.2**：用 GPT-6 Pro 生成的学术风原型（题库、评分引擎、产品设计文档）。
- **v0.3 起**：和 Claude（Claude Code）一起从头重做成现在的 meme 版：重写题库和交互、4 张分享卡、人格系统、7 种语言、好友 PK、线上埋点和逐题流失分析，按数据迭代了几十个版本。
- 题库扩充和翻译用了“写作说明 → 分组撰写 → 总编审 → 翻译 → 母语终审”的流水线，所有说明都在 `i18n/**/*.md`。

全部 prompt 见 [`prompts/`](prompts/)：GPT-6 Pro 原型的来历、我在 Claude Code 里发出的全部 237 条消息（原文照录）、以及 Claude 拆给子任务的所有说明。复盘长文见 [`retro/`](retro/)。

## 项目结构

```
index.html      样式和页面骨架（开发时直接打开）
app.js          交互、评分、人格、分享卡、埋点
bank.js         能力题题库、人格小对话、AI 味现场、随手题、跑分表数据
chats.js        名场面多轮对话
arc.js          ARC 类图形推理题（答案由规则函数生成）
lv4.js          Boss 题和第三轮扩题
build.py        打包：dist/humanbench.html（单文件）+ deploy/public/<语言>/index.html（正式站）
i18n/
  <语言>/       各语言的题库、对话、界面文字（ui.json：按中文片段翻译）
  tw_sync.py    繁体（台湾 / 香港用词）由简体 + OpenCC + 人工审校修正表自动生成
  new/          扩题流水线：写作 / 翻译 / 审校说明、分组稿件、合并脚本 merge3.py
deploy/
  src/worker.js Cloudflare Worker：静态页、/r/<结果码> 个人分享页、/og/<结果码>.png 结果卡、/api/e 匿名埋点（D1）
  schema.sql    D1 建表
qa/             自检和端到端脚本（Playwright）
stats.sh        数据看板；dropoff.sh 逐题流失表
prompts/        全部原始 prompt
retro/          复盘文章（part<N>-<语言>.md）、配图源页面和渲染脚本；build_retro.py 生成 /retro/ 阅读页
```

## 本地运行

```bash
npm install                 # playwright、esbuild（可选：esbuild 用于正式站去注释压缩）
npx playwright install chromium
python3 build.py            # 生成 dist/ 和 deploy/public/
open index.html             # 开发版；或打开 deploy/public/index.html 看正式站效果
```

常用检查：

```bash
node qa/validate_lang.cjs en            # 某语言与中文结构一致、正确答案不是唯一最长、无残留中文
node qa/release_shot.cjs                # 自动答完一局并截图结果页（PAGE=deploy/public/en/index.html CARDS=1 导出分享卡）
node qa/add3_check.cjs zh3_traps.js     # 扩题稿件自检
```

工具装在别处时，复制 `local.example.json` 为 `local.json` 写上路径。

## 部署

见 [`deploy/README.md`](deploy/README.md)：复制 `deploy/wrangler.example.jsonc` 为 `wrangler.jsonc`，填上 D1 数据库 ID 和域名，`schema.sql` 建表，`npx wrangler deploy`。

埋点只记匿名随机编号、国家和答题进度，不存 IP；`stats.sh` 读的是你自己的 D1。

## 许可

- 代码：[MIT](LICENSE)
- 题库、对话、译文、写作说明等内容：[CC BY-NC 4.0](LICENSE-CONTENT.md)（可转载改编，需署名，不可商用）

作者：Alex（[@Alex_ybuild](https://x.com/Alex_ybuild) · [GitHub](https://github.com/alex-ybuild)）

---

## English

**HumanBench — How many B are you?** A meme quiz where you play the LLM: 76 questions of classic AI fails (strawberry r-count, 9.11 vs 9.9, jailbreaks, sycophancy traps) and multi-turn "iconic moments". At the end you get a model launch: parameter count, MoE or Dense, a launch-day benchmark table, your AA Intelligence Index rank, known issues, and your AI personality type (plus a secret one). Challenge a friend and you both get a head-to-head PK card.

Live at <https://humanbench.ybuild.ai> in 7 languages. In its first 3 days: ~1M estimated reach, 39.9k unique visitors, 12.7k people finished all 76 questions, 13.6k organic shares, 96 countries. Starting point: an account with a few hundred followers, $0 in ads.

It started as a v0.2 academic prototype generated with GPT-6 Pro, then was rebuilt from scratch with Claude (Claude Code) into the current meme edition, iterating on live funnel data. Content was produced through a brief → drafting → editorial pass → translation → native-review pipeline; all briefs are in `i18n/**/*.md`. Every prompt I sent (237 messages, ~8.6k Chinese characters) is published verbatim in [`prompts/`](prompts/) (a few personal off-topic messages omitted), and the full 3-part retrospective (EN/ZH/JA/KO, with figures and scripts) is in [`retro/`](retro/) and online at <https://humanbench.ybuild.ai/retro/en/>. This repo is the whole creative trail, not just the final code.

Vanilla JS, no framework. `python3 build.py` bundles everything into single-file pages; a Cloudflare Worker serves them, renders personal share images, and logs anonymous events to D1. See the structure and commands above.

License: code under [MIT](LICENSE); questions, dialogues, translations and briefs under [CC BY-NC 4.0](LICENSE-CONTENT.md).
