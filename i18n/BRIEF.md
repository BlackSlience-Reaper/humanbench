# HumanBench 多语言翻译 + 本地化说明

HumanBench（「你是几B的模型？」）是一个中文的整活测评网页小游戏：玩家"扮演 AI"答题，最后生成一张"模型发布会"海报（参数量、MoE/Dense、人格、跑分表、AA 排名）。线上：https://humanbench.ybuild.ai 。现在要做 英语(en) / 日语(ja) / 西班牙语(es) / 韩语(ko) 版本。

## 你要产出的文件

源文件（只读，不要改）：
- `bank.js`（题库、人格、点评题、图表、模拟界面、跑分表数据）
- `chats.js`（多轮对话树）
- `arc.js`（ARC 找规律题，只有少量文字）

输出到 `i18n/<lang>/bank.js`、`chats.js`、`arc.js`：**整份复制源文件，只替换给玩家看的文字**，代码逻辑一个字符都不要动。

## 绝对不能改的东西（检查脚本会逐项核对）

- 所有题池的题目数量和顺序、每题的选项数量和顺序
- 选项上的标记：`ok`、`half`、`fun`、`meme`、`lv`、`halluc`、`id`、`tr`、`ax`、`go`、`end` 的有无，以及 `E(title, text, id)` 的第三个参数（模型鉴定 id，比如 "豆包"、"Codex"、"DeepSeek"，**原样保留中文/英文 id，不要翻译**，界面层会映射显示名）
- 对话树的节点名（`n1`、`c1b` 等）和 `go` 指向、`think` 字段的有无
- `ui`/`chart` 的键名、UIS 模拟界面里的 `data-opt="数字"` 和 class、CHARTS 里的坐标数字
- `ROWS`、`AA`、`MODELS`、`VENDOR_COLOR`、`RUN_PLAN`、`PROFILES` 的 `id`/`v`/`color`、`TRAITS` 和 `SECTION_LABEL` 的键、`PERSONA_AXES` 的 `id`
- ARC 题的网格数据和规则函数

## 要翻译的东西

题干 `q`、角色扮演消息 `u`、选项 `t`、吐槽 `r`、点评 `c`、`issue`、用户回复 `reply`、`think` 思考流、结局 `E(...)` 的标题和正文、`scene`、`title`、`PROFILES` 的 `name/nick/line/roast`、`TRAITS` 的值、`SECTION_LABEL` 的值、`PERSONA_AXES` 的 `label/left/right`、`ROWS` 的 `cat`（bench 名一般保留英文）、CHARTS 里的图表文字、UIS 里界面上显示的文字、`quote`、`mail`、`code`/`term` 里的中文注释、arc.js 里的 `rule`、`q`、`ARC_QUIPS`、`ARC_MISS`、吐槽模板。代码注释可以不翻。

## 语气

- 这是整活小游戏：要**地道、好笑、像母语网友写的**，不要直译腔。吐槽要短、狠、有梗。
- 不要用 emoji。
- 品牌保留：HumanBench、@Alex_ybuild、模型名（Claude、GPT-4o、Codex、DeepSeek、Gemini、Grok、Kimi、Qwen 等）。

## 本地化（重点）

中文特有、外国用户 get 不到的梗，换成**目标语言里同样有名的等价梗**，保持同样的笑点结构和题目功能（正确/错误/整活选项的角色不变）：
- 弱智吧题（蓝牙耳机看耳科还是牙科、监狱抓人、生鱼片是不是死鱼片）→ 当地的"蠢问题 / shower thoughts / 冷笑话式脑筋急转弯"，要有一个明确的合理答案。
- 1 万块苹果全家桶 → 当地货币和合理价位（比如 $1,000 / ¥150,000 / 1.000 € / ₩1,500,000），"编造 iPhone 17 128GB 低价"这个梗保留（iPhone 17 起步就是 256GB）。
- 前任凌晨发"在吗" → en "u up?"、ja「起きてる？」、ko「자니?」、es「¿Estás despierto?」之类。
- 千问一分钱奶茶补贴、996、中国时区、长城太空可见、鲁迅打周树人、林黛玉倒拔垂杨柳、"深夜发朋友圈"等：换成当地同类（比如 en 可用 "Did Shakespeare write Harry Potter" 这类让模型胡编的题；ja/ko 找当地文学的错配梗；打工文化可换成当地说法）。**换题时事实必须准确**，拿不准的就改成通用题，别编。
- 人格 `doubao`（豆包型：态度极好、能力一般、嘴特甜、秒认错、下次还敢）：name/nick/line/roast 换成当地人熟悉的同类助手形象（比如 Siri 型：「抱歉，我没听清」），`id` 不变。其他人格（Claude/GPT-4o/GPT-5/DeepSeek/Gemini/Grok/Kimi）保留模型名，只翻译文案。
- AI 圈全球梗（strawberry、9.11 vs 9.9、洗车、奶奶漏洞、DAN、Bing "good Bing"、律师编判例、You're absolutely right、质量门禁/SHA、4o "我接住你"、DeepSeek "好想吃大白饭"/"服务器繁忙"等）保留，只做地道翻译。"好想吃大白饭"译成当地"好想吃白米饭/饿了"的说法。
- "口癖/AI 味"类选项（Claude 的"你说得对"、4o 的"我接住你了"、Codex 的"先给结论/质量门禁/commit SHA"）用目标语言里这些模型最典型的口吻（英语里就是 "You're absolutely right!" 等原版说法）。

## 两条硬约束

1. **正确选项不能是唯一最长的选项**（按字符数算；OSWorld 和 ARC 除外）。翻完如果某题正确项最长，就把某个错误选项写长一点（写成"听起来很有道理的错误答案"）。
2. **结构必须和中文版完全一致**。

## 自检

写完后运行：

```bash
node qa/validate_lang.cjs <lang>
```

必须输出 `结构问题 0 个 · 正确答案最长 0 题 · 残留中文字 0 个`（ja 只查简体专用字）。不通过就改到通过。另外用 `node -e` 确认三个文件都能被 JS 解析。

完成后汇报：三个文件路径、自检结果、你做了哪些本地化替换（列清单）。
