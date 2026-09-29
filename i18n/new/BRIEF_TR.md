# 新增内容翻译 + 本地化（en / ja / es / ko / fr）

HumanBench「你是几B的模型？」新增了三批中文内容（玩家扮演 AI，选 AI 怎么回）：
- `i18n/new/zh_chats_add.js`（const NEW_CHATS，15 段名场面对话）
- `i18n/new/zh_persona_add.js`（const NEW_PERSONA，12 道人格小对话）
- `i18n/new/zh_slop_add.js`（const NEW_SLOP，6 道 AI 味现场）

把它们翻译成你负责的语言，写到 `i18n/new/<lang>_chats_add.js`、`<lang>_persona_add.js`、`<lang>_slop_add.js`，**变量名不变**（NEW_CHATS / NEW_PERSONA / NEW_SLOP）。

## 先看
- 通用本地化规则：`i18n/BRIEF.md`（法语另看 `i18n/fr/BRIEF_FR.md`）
- 你这门语言已有的版本怎么处理同类内容：`i18n/<lang>/chats.js`、`i18n/<lang>/bank.js`（语气、口癖、豆包→Siri/Bixby 等映射照着来）
- 调研素材（真实事件出处）：`i18n/new/RESEARCH.md`

## 不能改的
- 对象结构、选项数量和顺序、节点名（a1、b2…）、`go`、`tr`、`ax`、`id`、`think` 的有无、`E(title, text, id)` 第三个参数。模型 id（"Claude"、"豆包"、"GPT-5 系" 等）原样保留。

## 要做的
- 地道、好笑、像母语网友写的，别直译。不用 emoji。字数和中文差不多紧凑（手机上看）。
- 模型口癖用该语言里最典型的说法（英语 "You're absolutely right!" 等；其他语言参照你那门语言已有版本）。文本里提到豆包的，按已有版本映射（en/ja/es/fr 为 Siri，ko 为 Bixby）。
- 真实事件：事实不能错。发生在国外的（Gemini 删 D 盘、Taco Bell 18000 杯水等）照实写；中国特有的（腾讯元宝回“改来改去不烦吗”、高考期间国产 AI 关拍照搜题）保留事实，用一句话让外国人看懂（如 “a Chinese AI assistant”、“China's college entrance exam, the gaokao”），不要编成本地发生的事。
- 中文谐音或网络梗换成目标语言的等价说法，保持笑点和选项作用不变。
- JS 字符串里别用裸的直双引号，改用 “ ” 或 « »，撇号用 ’。

## 自检
`node qa/new_tr_check.cjs <lang>` 必须显示 OK（结构和中文一致、没有残留中文、文件能被 JS 解析）。最后回报 5 行以内：自检结果、3–5 个本地化处理。
