# 复盘文章多语言版：写作说明

HumanBench「你是几B的模型？」（英文站名 How many B are you?，日文站名 あなたは何Bのモデル？）是作者 Alex（@Alex_ybuild）做的整活测评，上线 3 天约 4 万访客。复盘三篇中文稿：`retro/part1-zh.md`（上）、`part2-zh.md`（中）、`part3-zh.md`（下），已上线在 https://humanbench.ybuild.ai/retro/ 。现在要做英文版和日文版，发在 X 长文和同一个网站上。

## 语气
- 这是作者本人的第一人称复盘，不是翻译稿。读起来要像这门语言的母语者写的长推文/博客：具体、口语、有梗，不端着。
- 英文：AI Twitter 读者（懂 Claude/GPT/Gemini 和各种梗），短句，少形容词，不要营销腔。参考 `i18n/en/STYLE_EN.md`。
- 日文：です・ます调为主、可以轻松一点的技术博客口吻（像 note / Zenn 上的开发复盘），不要机翻腔。
- 作者自我介绍只说“从 GPT-2 时代开始，有很深、很长时间的 AI 使用经验”，不写职业身份，也不要写成“不会写代码的人”。

## 内容规则
- 数字、时间、事实一个都不能改。时间是北京时间，英文/日文版在第一次出现时说明一次（Beijing time / 北京時間），日文读者可以补一句“日本時間は +1 時間”。
- 作者的原话（中文 blockquote）要翻译，保留随手打字的口语感；中文错别字的括号解释（“太仆”“句牛奶”）直接删掉，不要在译文里模仿错别字。
- 只有中文读者才懂的东西，一句话交代清楚，不要长篇解释：弱智吧、豆包、周树人等。模型人格名用网站该语言版的正式名称（见 `i18n/en/bank.js`、`i18n/ja/bank.js` 里 PROFILES 的 name/nick）；例如英文站里“豆包型”显示为 Siri 型，文中可以写 “the Doubao type (the Siri type on the English site)”，第一次说明后统一用一种。
- 不做群体之间的智力/分数高低对比（原文已经注意了，不要新增）。深夜 vs 白天的对比保留。
- 不点名普通人，不加 emoji，不用红绿对错之类的表述。
- 图片引用保持原样 `![说明](img/xxx.png)`，只翻译方括号里的说明文字（网站会自动换成对应语言的图）。
- 结尾的链接列表保留；“完整图文版”链接英文改成 https://humanbench.ybuild.ai/retro/en/ ，日文改成 https://humanbench.ybuild.ai/retro/ja/ 。
- 标题要重新想一个在该语言里自然的，保留“上/中/下”对应的 Part 1/2/3（日文：前編・中編・後編）。

## 格式
Markdown，结构和中文稿一一对应（同样的标题层级、段落、表格、列表、引用），这样网页生成脚本能直接用。不要加脚注。

## 术语
产品里的正式说法以网站该语言版为准：界面文字在 `i18n/<lang>/ui.json` 和 `ui_extra.json`（键是中文界面文字，值是译文），题目和人格在 `i18n/<lang>/bank.js`、`chats.js`。例如：人类型人格 → The Human Type / 人間タイプ；好友 PK → Friend PK / フレンド対戦；以小博大·这就叫蒸馏 → Giant killer · That’s distillation / 下剋上・これが蒸留；和 Jev 一起答 → Play with Jev / Jevと一緒に解く。AA 分：英文 AA score（第一次写 “AA score, our take on the Artificial Analysis Intelligence Index”），日文 AAスコア。答完：英文 finish / finished，日文 完走。
正文和配图由不同的人翻译，务必都照这里和网站原文用词，保持一致。
