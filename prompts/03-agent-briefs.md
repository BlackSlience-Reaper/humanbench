# Claude 派给子任务的说明

主对话里，我（Claude）把不少工作拆给并行的子任务：分组写新题、总编审、翻译、母语审校、繁体审校、英文版改写等。下面是它们拿到的说明原文，都在仓库里。每份说明怎么用，见主对话记录 [02-claude-prompts.md](02-claude-prompts.md) 对应阶段。

## 写新内容

| 说明 | 用途 |
|---|---|
| [`i18n/new/BRIEF_NEW.md`](../i18n/new/BRIEF_NEW.md) | 第一轮扩充：名场面对话、人格小对话、AI 味现场的写法和规则 |
| [`i18n/new/BRIEF_ABILITY.md`](../i18n/new/BRIEF_ABILITY.md) | 第一轮扩充：计分题的写法 |
| [`i18n/new/BRIEF_ADD3.md`](../i18n/new/BRIEF_ADD3.md) | 第三轮扩题（+46%）：11 组分头写的总说明 |
| [`i18n/new/BRIEF_EDIT3.md`](../i18n/new/BRIEF_EDIT3.md) | 第三轮扩题的“梗味”总编审：逐题打分、平淡的重写、存疑事实核实 |
| [`i18n/new/RESEARCH.md`](../i18n/new/RESEARCH.md) | 给写手的 AI 圈真实事件和梗素材 |

## 翻译和本地化

| 说明 | 用途 |
|---|---|
| [`i18n/BRIEF.md`](../i18n/BRIEF.md) | 通用本地化规则（英日西韩） |
| [`i18n/fr/BRIEF_FR.md`](../i18n/fr/BRIEF_FR.md) | 法语版补充规则 |
| [`i18n/new/BRIEF_TR.md`](../i18n/new/BRIEF_TR.md)、[`BRIEF_TR2.md`](../i18n/new/BRIEF_TR2.md)、[`BRIEF_TR_ABILITY.md`](../i18n/new/BRIEF_TR_ABILITY.md) | 前几轮新增内容的翻译说明 |
| [`i18n/new/BRIEF_TR3.md`](../i18n/new/BRIEF_TR3.md) | 第三轮扩题的翻译 + 本地化 + 母语自审 |
| [`i18n/tw/REVIEW_BRIEF.md`](../i18n/tw/REVIEW_BRIEF.md)、[`i18n/hk/REVIEW_BRIEF.md`](../i18n/hk/REVIEW_BRIEF.md) | 繁体（台湾用词 / 香港用词）全量审校 |

## 审校和专项

| 说明 | 用途 |
|---|---|
| [`i18n/new/BRIEF_L10N_REVIEW.md`](../i18n/new/BRIEF_L10N_REVIEW.md) | 外语版母语读者逐句审校（第一轮） |
| [`i18n/new/BRIEF_REVIEW3.md`](../i18n/new/BRIEF_REVIEW3.md) | 第三轮扩题的母语终审 |
| [`i18n/en/BRIEF_EN_FIX.md`](../i18n/en/BRIEF_EN_FIX.md) | 英文版表现差时的专项改写（附当时的数据） |
| [`i18n/en/STYLE_EN.md`](../i18n/en/STYLE_EN.md) | 英文编辑写的英文风格指南，之后的英文翻译都照它来 |
