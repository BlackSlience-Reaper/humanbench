# Build English figure pages from the Chinese ones: python3 retro/make_en.py
# figs.html -> figs_en.html, figs2.html -> figs2_en.html, figs3.html -> figs3_en.html
# Same markup and data; only visible text and fonts change.
import re, os, sys
D = os.path.dirname(os.path.abspath(__file__))

FONT_OLD = '<link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&family=Lilita+One&family=Noto+Sans+SC:wght@500;700;900&display=swap" rel="stylesheet">'
FONT_NEW = '<link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">'
CSS_EN = '''<style>/* EN: Lilita One for display, Nunito for everything else */
:root{--fun:"Nunito",sans-serif;--sans:"Nunito",sans-serif;--disp:"Lilita One","Arial Black",sans-serif}
h2,#f1 h1,.st,.foot b{font-family:var(--disp)!important;font-weight:400!important}
.cell .l,.fun-bar,.ann,.vs .m,.ex .t,.ex .v,.tag,.list .t,.pc .nm,.step .t,.kpi .l,.lead,.cap,.tbl th,.shot .t,.inf .r,.cap2,.pp .t{font-weight:900!important}
h2{line-height:1.08}
.nm2{font:800 14px var(--sans);color:var(--muted);margin-top:-2px}
</style></head>'''

BRAND = ('<b>你是几B的模型？</b>', '<b>How many B are you?</b>')

F1 = [
 ('HUMANBENCH · 复盘', 'HUMANBENCH · RETRO'),
 ('<span class="st">你是几B的模型？</span>', '<span class="st">How many B are you?</span>'),
 ('<h1>几百粉丝、零投放<br><span class="hl">3 天</span> 发生了什么</h1>',
  '<h1 style="font-size:80px">A few hundred followers,<br>$0 ads, <span class="hl">3 days</span></h1>'),
 ('一个“你来扮演 AI”的整活测评，从 GPT-6 Pro 原型到 Claude Code 重做、上线、按数据迭代',
  'A “you play the AI” joke eval: GPT-6 Pro prototype, Claude Code rebuild, launch, then iterating on data'),
 ('~100<small>万</small></div><div class="l">估算触达人次</div><div class="d">推文曝光 + 玩家分享图的观看</div>',
  '~1<small>M</small></div><div class="l">Estimated reach</div><div class="d">Tweet impressions + views of shared cards</div>'),
 ('3.99<small>万</small></div><div class="l">独立访客 UV</div><div class="d">页面打开 PV 7.8 万次</div>',
  '39.9<small>K</small></div><div class="l">Unique visitors</div><div class="d">78K page views</div>'),
 ('1.27<small>万</small></div><div class="l">完整答完 76 题</div><div class="d">占开始答题的 43%</div>',
  '12.7<small>K</small></div><div class="l">Finished all 76</div><div class="d">43% of everyone who started</div>'),
 ('1.36<small>万</small></div><div class="l">玩家自发分享</div><div class="d">分享卡、长图、挑战链接</div>',
  '13.6<small>K</small></div><div class="l">Organic shares</div><div class="d">Share cards, long images, challenge links</div>'),
 ('<div class="l">国家和地区</div><div class="d">7 种语言，日本一度第一</div>',
  '<div class="l">Countries &amp; regions</div><div class="d">7 languages. Japan was #1 for a while</div>'),
 ('<div class="l">投放预算</div><div class="d">起点：推特号几百粉丝</div>',
  '<div class="l">Ad budget</div><div class="d">Starting point: a few hundred followers on X</div>'),
]
F2 = [
 ('<h2>从百万触达到 1.27 万人答完</h2>', '<h2>From ~1M reach to 12.7K finishers</h2>'),
 ('一个要玩十几分钟的测试，四成开始的人坚持到了最后', 'A test that takes 10+ minutes, and over 4 in 10 starters made it to the end'),
 ('>估算触达</div>', '>Est. reach</div>'),
 ('推文曝光几十万 + 1.36 万次分享图被看到', 'Hundreds of thousands of tweet impressions + 13.6K shared cards seen'),
 ('>独立访客 UV</div>', '>Unique visitors</div>'),
 ('页面被打开 78,320 次', '78,320 page views'),
 ('>开始答题</div>', '>Started</div>'),
 ('占访客 74%', '74% of visitors'),
 ('>答完 76 题</div>', '>Finished</div>'),
 ('占开始 43% · 共 15,448 局', 'All 76 questions · 43% of starters · 15,448 runs total'),
 ('>答完后分享</div>', '>Shared</div>'),
 ('占答完 55% · 共分享 13,638 次', '55% of finishers · 13,638 shares total'),
 ('数据截至 2026-09-29 11:00', 'Data as of 2026-09-29 11:00 Beijing time'),
]
F3 = [
 ('TRAFFIC · 每小时独立访客', 'TRAFFIC · UNIQUE VISITORS PER HOUR'),
 ('<h2>一条推文点火，两天自然烧完</h2>', '<h2>One tweet lit it. Two days of organic burn.</h2>'),
 ('粉色是全部访客，蓝色是日语页。第二天早上日本通勤时段接力，之后自然回落',
  'Pink: all visitors. Blue: the Japanese page. On day 2 Japan’s morning commute took the baton, then it faded on its own.'),
 ('北京时间 · 09-27 15:00 上线', 'Beijing time · launched 09-27 15:00'),
 ('font-family="Noto Sans SC" font-weight="800"', 'font-family="Nunito" font-weight="800"'),
 ('(c.charCodeAt(0)>255?20:11)', '(c.charCodeAt(0)>255?20:10.7)'),
 ('font-family="ZCOOL KuaiLe" font-size="20"', 'font-family="Nunito" font-weight="900" font-size="20"'),
 ('"15:00 上线"', '"15:00 launch"'),
 ('note(pk,"峰值 2,398 / 小时",120,-10)', 'note(pk,"Peak: 2,398 / hour",10,-50)'),
 ('note(jp,"日本通勤接力",-60,-90)', 'note(jp,"Japan’s commute",20,-137)'),
 ('note(nw,"新题 + 好友 PK",90,-70)', 'note(nw,"New questions + Friend PK",150,-40)'),
 ('"自然回落"', '"Organic fade"'),
]
F4 = [
 ('<h2>4 条消息出原型，237 条消息做成产品</h2>', '<h2>4 messages for a prototype.<br>237 for a product.</h2>'),
 ('全部 prompt 原文已公开', 'Every prompt is public, word for word'),
 ('GPT-6 PRO · 1.5 小时</div><div class="m">4 条消息</div><div class="q">“想到一个有意思的小app：测测你的参数”<br>→ 学术风原型 v0.2：528 道题、自适应测评、设计文档',
  'GPT-6 PRO · 1.5 HOURS</div><div class="m">4 messages</div><div class="q">“Fun little app idea: test how many params you have”<br>→ academic prototype v0.2: 528 questions, adaptive testing, design doc'),
 ('CLAUDE CODE · 3 天</div><div class="m">237 条 · 8,600 字</div><div class="q">第二句话是“这个感觉不太行”<br>→ meme 版上线运营：7 种语言、数据驱动迭代、开源',
  'CLAUDE CODE · 3 DAYS</div><div class="m">237 messages</div><div class="q">8,600 characters. Message #2: “this doesn’t feel right”<br>→ meme version, shipped and run: 7 languages, data-driven, open source'),
 ('一、从 GPT-6 Pro 原型重做成 meme 版', '1. Rebuild the prototype as a meme'),
 ('二、上线前冲刺：域名、分享卡、多语言', '2. Pre-launch sprint: domain, cards, i18n'),
 ('三、打磨：难度、分享卡、各平台适配', '3. Polish: difficulty, cards, every platform'),
 ('四、上线后看数据：埋点、Jev、繁体法语', '4. Post-launch: tracking, Jev, zh-TW, FR'),
 ('五、深夜：Jev 批量跳题、试海外破圈', '5. Late night: Jev batch skips, going global'),
 ('六、第二天：扩题、配色、隐藏款、修 Bug', '6. Day 2: more Qs, colors, secret type, bugs'),
 ('七、按数据迭代：渠道、好友 PK、安全', '7. Iterate: channels, Friend PK, security'),
 ('八、复盘与开源', '8. Retro and open source'),
 ('每个阶段我发出的消息数', 'Messages I sent, per phase'),
]
F7 = [
 ('<h2>1.27 万人测出了什么</h2>', '<h2>What 12.7K people turned out to be</h2>'),
 ('最多的是 GPT-5 型，隐藏款「人类型」每 100 局约出 3 次', 'GPT-5 Type came out on top. The secret Human Type showed up about 3 times per 100 runs.'),
 ('<div class="nm">GPT-5 型</div>', '<div class="nm">GPT-5 Type</div>'),
 ('<div class="nm">Grok 型</div>', '<div class="nm">Grok Type</div>'),
 ('<div class="nm">GPT-4o 型</div>', '<div class="nm">GPT-4o Type</div>'),
 ('<div class="nm">Gemini 型</div>', '<div class="nm">Gemini Type</div>'),
 ('<div class="nm">Claude 型</div>', '<div class="nm">Claude Type</div>'),
 ('<div class="nm">Kimi 型</div>', '<div class="nm">Kimi Type</div>'),
 ('>豆</div><div><div class="nm">豆包型</div>', '>S</div><div><div class="nm">Doubao Type</div><div class="nm2">= Siri Type on the EN site</div>'),
 ('<div class="nm">DeepSeek 型</div>', '<div class="nm">DeepSeek Type</div>'),
 ('>人</div><div><div class="nm">隐藏款：人类型</div>', '>H</div><div><div class="nm">Human Type</div><div class="nm2">the secret persona</div>'),
 ('最常见的参数量<br>和 DeepSeek 一样大', 'Most common size.<br>Same as DeepSeek.'),
 ('人全部答对<br>平均正确率 67%', 'people got everything right.<br>Average accuracy: 67%.'),
 ('韩国玩家平均被越狱次数<br>约为其他地区的一半', 'avg jailbreaks for Korean players. About half the rate elsewhere.'),
 ('人格按每人测出的结果去重统计；隐藏款按上线后（9/28 10:00 起）的局数计算',
  'Personas deduped per player · Secret type: runs since 9/28 10:00'),
]
F8 = [
 ('<h2>裂变是怎么转起来的</h2>', '<h2>How the viral loop spun up</h2>'),
 ('推文只点燃第一批人，之后主要靠玩家互相挑战', 'The tweet only lit the first batch. After that it ran on players challenging each other.'),
 ('<div class="t">答完</div><div class="d">生成模型发布会<br>4 张分享卡</div>', '<div class="t">Finish</div><div class="d">Your model gets a launch event and 4 share cards</div>'),
 ('<div class="t">发出去</div><div class="d">55% 答完的人分享<br>卡片带二维码和挑战链接</div>', '<div class="t">Post it</div><div class="d">55% of finishers share. Cards carry a QR code and a challenge link</div>'),
 ('<div class="t">朋友点开</div><div class="d">先看到你的成绩<br>“你能超过 TA 吗？”</div>', '<div class="t">Friend taps</div><div class="d">Sees your score first:<br>“Can you beat them?”</div>'),
 ('<div class="t">好友 PK</div><div class="d">答完多一张 PK 卡<br>输了的人发回去报仇</div>', '<div class="t">Friend PK</div><div class="d">Finishers get a PK card. The loser posts it back</div>'),
 ('<div class="l">新访客来自朋友分享</div><div class="d">高峰时段；上线当天只有 14%</div>', '<div class="l">of new visitors came via friends</div><div class="d">At peak. Launch day: only 14%</div>'),
 ('<div class="l">每个答完的人带来的新访客</div><div class="d">带来的新答完约 0.35 人</div>', '<div class="l">new visitors per finisher</div><div class="d">≈0.35 new finishers each</div>'),
 ('<div class="l">日本玩家带来的新访客</div><div class="d">一半以上日本新访客来自分享</div>', '<div class="l">new visitors per Japanese finisher</div><div class="d">Over half of new Japanese visitors came via shares</div>'),
 ('好友 PK 让被挑战者的分享率高了约 8 个点', 'Friend PK lifted share rate for challenged players by ~8 pts'),
]

D1 = [
 ('<h2>大家只晒好看的成绩</h2>', '<h2>People only post good scores</h2>'),
 ('测出的参数越大，答完后越愿意分享', 'The bigger your size, the more likely you share'),
 ('答完后分享的比例 × 测出的参数量', 'Share rate after finishing × your size'),
 ('<span>14B 及以下</span>', '<span>14B or less</span>'),
 ('<span>10T 到 ∞</span>', '<span>10T to ∞</span>'),
 ('所以，好友 PK 里……', 'So in Friend PK…'),
 ('被挑战的人<b>输了</b>', 'took the challenge<br>and <b>lost</b>'),
 ('1,076 场 PK：挑战者赢 313 场、输 738 场，平均比对方低 7.3 分。<br>敢发挑战链接的，本来就是考得好的那批人。',
  '1,076 PKs: challenge-takers won 313, lost 738, and trailed by 7.3 points on average.<br>Whoever dares to send a challenge link scored well to begin with.'),
 ('幸存者偏差 · 12,685 名答完玩家', 'Survivorship bias · 12,685 finishers'),
]
D2 = [
 ('<h2>人类也会刷榜</h2>', '<h2>Humans benchmaxx too</h2>'),
 ('同一个人玩第二局，AI 智能指数平均 +4.0，而且刷一次就到顶', 'Second run: AA score +4.0 on average. And one retry is all it takes to max out.'),
 ('玩了 3 局以上的 488 人，平均 AA 分', '488 players, 3+ runs: avg AA'),
 ('<span>第 1 局</span>', '<span>Run 1</span>'), ('<span>第 2 局</span>', '<span>Run 2</span>'), ('<span>第 3 局</span>', '<span>Run 3</span>'),
 ('（纵轴从 20 分起）', '(y-axis starts at 20)'),
 ('第二局和第一局比（1,689 人）', 'Run 2 vs run 1 (1,689 players)'),
 ('<span>提高了</span>', '<span>Higher</span>'), ('<span>一样</span>', '<span>Same</span>'), ('<span>降低了</span>', '<span>Lower</span>'),
 ('80% 的人第二局测出了不同的人格。<br>人类版的“数据污染”：见过题目，分数就上去了。',
  '80% got a different persona on run 2.<br>Human-edition data contamination: seen the test, score goes up.'),
 ('同一玩家前后两局对比', 'Same player, run 1 vs run 2'),
]
D3 = [
 ('<h2>想得越久，分数越高</h2>', '<h2>Think longer, score higher</h2>'),
 ('和推理模型一样：Thinking 版就是比 Flash 版强', 'Just like reasoning models: Thinking beats Flash'),
 ('10 分钟以内<br>正确率 43%', 'Under 10 min<br>43% correct'),
 ('10–15 分钟<br>正确率 61%', '10–15 min<br>61% correct'),
 ('15–20 分钟<br>正确率 66%', '15–20 min<br>66% correct'),
 ('20–30 分钟<br>正确率 69%', '20–30 min<br>69% correct'),
 ('30 分钟以上<br>正确率 71%', '30+ min<br>71% correct'),
 ('答题用时 vs AA 智能指数（不含用 Jev 代答的玩家）。答完中位用时 20 分钟，17% 的人玩了 30 分钟以上；网页也会按平均用时给模型名加后缀：答得快是 -Flash，答得慢是 -Thinking。',
  'Time spent vs AA score (Jev users excluded). Median finish time: 20 min, and 17% played for 30+ min. The site also suffixes your model name by pace: fast gets -Flash, slow gets -Thinking.'),
 ('7,661 名未用 Jev 的答完玩家', '7,661 finishers who didn’t use Jev'),
]
D4 = [
 ('<h2>深夜的人更像 GPT-4o</h2>', '<h2>Late-night players go GPT-4o</h2>'),
 ('凌晨 0–4 点 vs 白天 9–18 点（当地时间）', 'Midnight–4am vs 9am–6pm (local time)'),
 ('深夜比白天多（少）了多少', 'Late night vs daytime'),
 ('<span>被越狱</span>', '<span>Jailbroken</span>'), ('<span>暖心</span>', '<span>Wholesome</span>'),
 ('<span>整活</span>', '<span>Chaos Agent</span>'), ('<span>话痨</span>', '<span>Yapper</span>'),
 ('<span>谄媚</span>', '<span>Sycophant</span>'), ('<span>理工脑</span>', '<span>Big Brain</span>'),
 ('深夜防线最松：被越狱的次数多了 58%。', 'Guard is lowest at night: 58% more jailbreaks.'),
 ('测出最多的人格', 'Top personas'),
 ('<th>深夜</th><th>白天</th>', '<th>Late night</th><th>Daytime</th>'),
 ('<td>GPT-4o 型</td>', '<td>GPT-4o Type</td>'), ('<td>GPT-5 型</td>', '<td>GPT-5 Type</td>'), ('<td>Grok 型</td>', '<td>Grok Type</td>'),
 ('AA 智能指数：深夜 32.8，白天 31.4。深夜还在认真答题的人，可能更专注。',
  'AA score: 32.8 late night, 31.4 daytime. Whoever is still grinding at 2am might just be more focused.'),
 ('2,146 名深夜玩家 / 5,165 名白天玩家', '2,146 late-night / 5,165 daytime players'),
]
D5 = [
 ('<h2>各地玩家像什么样的 AI</h2>', '<h2>Which AI is each crowd?</h2>'),
 ('每人平均被打上的标签次数（按页面语言分组）', 'Avg times each tag was earned per player (grouped by page language)'),
 ('<th>清醒</th><th>被越狱</th><th>整活</th><th>话痨</th>', '<th>Based</th><th>Jailbroken</th><th>Chaos Agent</th><th>Yapper</th>'),
 ('<td>韩国</td>', '<td>Korean</td>'), ('<td>繁体</td>', '<td>Trad. Chinese</td>'), ('<td>日本</td>', '<td>Japanese</td>'),
 ('<td>英语</td>', '<td>English</td>'), ('<td>中文</td>', '<td>Simp. Chinese</td>'),
 ('<div class="l">韩国玩家</div><div class="d" style="font-size:17px;color:var(--ink)">最清醒、最难被越狱、最不发散；隐藏款“人类型”出现率也最高（2.9%）',
  '<div class="l">Korean players</div><div class="d" style="font-size:17px;color:var(--ink)">Most Based, hardest to jailbreak, fewest tangents. Also the highest Human Type rate (2.9%)'),
 ('<div class="l">日本玩家</div><div class="d" style="font-size:17px;color:var(--ink)">最少整活，回答最精简，最爱发挑战链接',
  '<div class="l">Japanese players</div><div class="d" style="font-size:17px;color:var(--ink)">Least chaos, tightest answers, most likely to send challenge links'),
 ('<div class="l">中文玩家</div><div class="d" style="font-size:17px;color:var(--ink)">最爱整活、最话痨、最发散，最爱展开讲',
  '<div class="l">Chinese players</div><div class="d" style="font-size:17px;color:var(--ink)">Most chaos, most yapping, most tangents. Always happy to elaborate'),
 ('被越狱一列越低越“稳”；高亮为各列最突出的一组', 'Lower Jailbroken = steadier · highlight = standout in each column'),
]
D6 = [
 ('<h2>大家什么时候在玩</h2>', '<h2>When people play</h2>'),
 ('答完时间，按页面语言换算成当地时间', 'Finish time, converted to local time by page language'),
 ('周一上班时间摸鱼', 'Monday, on the clock'),
 ('周一答完的人里，一半是在当地 9–18 点答完的。<br>韩国玩家最高：66%。', 'Of Monday finishers, half finished between 9am and 6pm local time.<br>Korean players topped it: 66%.'),
 ('最热：傍晚 5 点，其次是深夜 11 点到 0 点；最冷：早上 5–6 点。中文页按北京时间、日韩页按东京 / 首尔时间，英文页按 IP 所在国家（美国统一按中部时间近似）。',
  'Busiest: 5pm, then 11pm–midnight. Quietest: 5–6am. Chinese page uses Beijing time, JA/KO pages Tokyo/Seoul time, English page the IP’s country (US approximated as Central time).'),
 ('12,643 名答完玩家', '12,643 finishers'),
 ('font-family="Noto Sans SC" font-weight="800" font-size="14" fill="#6b675e">每小时占比 · 当地时间（点）',
  'font-family="Nunito" font-weight="800" font-size="14" fill="#6b675e">% of finishes per hour · local time'),
]
D7 = [
 ('<h2>日本玩家最爱发链接</h2>', '<h2>Japanese players love sending links</h2>'),
 ('所以日本的传播系数最高：每个答完的人带来 2.3 个新访客', 'So Japan spreads fastest: each finisher brings 2.3 new visitors'),
 ('<span>日本</span>', '<span>Japanese</span>'), ('<span>韩国</span>', '<span>Korean</span>'), ('<span>英语</span>', '<span>English</span>'),
 ('<span>繁体</span>', '<span>Trad. Chinese</span>'), ('<span>中文</span>', '<span>Simp. Chinese</span>'),
 ('grid-template-columns:90px 1fr;', 'grid-template-columns:136px 1fr;'),
 ('分享动作的构成（中文另有 8% 用了不带二维码的“小红书版”卡片，未画出）。发链接的人，朋友点开就是一场挑战。',
  'What people shared (Simplified Chinese also had 8% on the no-QR Xiaohongshu card, not shown). Send a link, and every friend who opens it walks into a challenge.'),
 ('13,562 次分享动作', '13,562 share actions'),
]
for p in ['55', '53', '42', '59', '52']: D7.append(('卡片 ' + p + '%', 'Card ' + p + '%'))
for p in ['20', '25', '29']: D7.append(('长图 ' + p + '%', 'Long img ' + p + '%'))
for p in ['26', '22', '28', '15', '14']: D7.append(('链接 ' + p + '%', 'Link ' + p + '%'))
D8 = [
 ('grid-template-columns:118px 1fr 76px', 'grid-template-columns:140px 1fr 76px'),
 ('<h2>豆包型最不好意思晒</h2>', '<h2>The Doubao (Siri) Type shares least</h2>'),
 ('答完后分享的比例 × 测出的人格', 'Share rate after finishing × persona type'),
 ('<span>隐藏款 人类型</span>', '<span>Human (secret)</span>'),
 ('<span>Claude 型</span>', '<span>Claude</span>'), ('<span>DeepSeek 型</span>', '<span>DeepSeek</span>'),
 ('<span>GPT-5 型</span>', '<span>GPT-5</span>'), ('<span>GPT-4o 型</span>', '<span>GPT-4o</span>'),
 ('<span>Grok 型</span>', '<span>Grok</span>'), ('<span>Gemini 型</span>', '<span>Gemini</span>'),
 ('<span>Kimi 型</span>', '<span>Kimi</span>'), ('<span>豆包型</span>', '<span>Doubao (Siri)</span>'),
 ('测出隐藏款的人最爱晒：好不容易刷出来的，当然要发。<br>豆包型垫底，可能是“被说像豆包”不太想认。<br>整体差距不大：最低的豆包型也有近一半人分享。',
  'Secret-type finders share most: took ages to roll, of course they post it.<br>Doubao (ByteDance’s chatbot) comes last. Nobody wants to hear they act like Doubao.<br>Small gaps overall: even the lowest, nearly half share.'),
 ('大家最常选的模型口癖', 'Most-picked model tics'),
 ('<span>GPT 系</span>', '<span>GPT family</span>'), ('<span>豆包</span>', '<span>Doubao</span>'),
 ('最执着的一位', 'The most persistent player'),
 ('玩了 <b>20 局</b>，一次都没刷出隐藏款，其中 8 次是 Grok 型。<br>另有 39 人刷出了隐藏款，平均在第 2.7 局。',
  'Played <b>20 runs</b>, never rolled the secret type. Got Grok Type 8 times.<br>39 others did get it, on run 2.7 on average.'),
 ('另外：微信里打开的玩家，测出最多的是 Gemini 型（17%），是唯一一个不是 GPT-5 型排第一的渠道。',
  'Also: players who opened it in WeChat got Gemini Type most often (17%). The only channel where GPT-5 Type wasn’t #1.'),
 ('人格按每人第一局统计', 'Persona from each player’s first run'),
]

U = [
 ('<h2>三版首页</h2>', '<h2>Three homepages</h2>'),
 ('“这个感觉不太行”之后，8 分钟换了一个产品', 'After “this doesn’t feel right”, a different product in 8 minutes'),
 ('<div class="t">学术测评</div><div class="d">先选题量、勾选“未标定的实验测评”，528 道题，六维自适应。',
  '<div class="t">Academic eval</div><div class="d">Pick a length, tick “uncalibrated experimental eval”. 528 questions, 6-axis adaptive.'),
 ('<div class="t">第一版整活</div><div class="d">一个按钮，10 道翻车题，约 1 分钟。这时还满屏 emoji。',
  '<div class="t">First meme cut</div><div class="d">One button, 10 AI-fail questions, ~1 min. Still emoji everywhere.'),
 ('<img src="img/s-home.png"', '<img src="img/s-home-en.png"'),
 ('上线 · 9/27 15:00</div><div class="t">上线版</div><div class="d">76 道题，贴纸风，没有 emoji，没有红绿对错。',
  'LAUNCH · 9/27 15:00</div><div class="t">Launch version</div><div class="d">76 questions, sticker style, no emoji, no red/green right-wrong. (English page shown.)'),
 ('GPT-6 Pro 原型 → Claude Code 重做', 'GPT-6 Pro prototype → Claude Code rebuild'),
 # u2
 ('<h2>一局多少题</h2>', '<h2>Questions per run</h2>'),
 ('每一轮都在变多，从 10 道涨到 76 道', 'It grew every round: from 10 to 76'),
 ('19:08 · Claude：一局约 9 分钟，已经超过多数人愿意一口气玩完的长度，建议拆一个 20 题快速版。<br><span style="color:var(--muted)">我没采纳。</span>',
  '19:08 · Claude: a run is ~9 min, already longer than most people will sit through. Suggest a 20-question quick mode.<br><span style="color:var(--muted)">I passed.</span>'),
 ('00:38 · 我：“要不你加一些 benchmark 题到 76 题吧”<br><span style="color:var(--muted)">Claude 算过：区分度只多一点点，每局多两分钟。</span>',
  '00:38 · Me: “maybe add some benchmark questions, take it to 76”<br><span style="color:var(--muted)">Claude ran the numbers: barely better separation, 2 more minutes per run.</span>'),
 ('横轴是 9 月 26 日晚到 27 日凌晨每次上线的时间。18:21 我还说“可以大概 40-50 道题目”。',
  'X-axis: each deploy, evening of Sept 26 to early Sept 27. At 18:21 I was still saying “maybe 40–50 questions”.'),
 ('上线后的数据证明：太长了', 'Post-launch data says: too long'),
 # u3
 ('<h2>16 级参数阶梯</h2>', '<h2>A 16-step size ladder</h2>'),
 ('起因是一句：“kimi-k3 其实是 3T 的模型”', 'It started with one line: “kimi-k3 is actually a 3T model”'),
 ('手机端小模型', 'Phone-sized tiny model'), ('笔记本能跑', 'Runs on a laptop'), ('端侧助手', 'On-device assistant'),
 ('单张消费级显卡', 'One gaming GPU'), ('传闻中的 GPT-4', 'Rumored GPT-4'), ('和 Kimi K3 一个量级', 'Kimi K3 territory'),
 ('第一梯队', 'Frontier tier'), ('当前最大的那一批', 'The biggest alive'),
 ('<div class="r">疑似 AGI</div><div class="a">AA 62 · 几乎全对才有</div>', '<div class="r">Possible AGI</div><div class="a">AA 62 · near-perfect runs only</div>'),
 ('只拿参数公开的模型当参照；AA 等效分和阶梯绑定。改之前，参数和 AA 是两套互不相关的算法，一个“405B”玩家能排在 3T 的 Kimi K3 前面。',
  'Only models with public parameter counts as anchors; the AA-equivalent score is tied to the ladder. Before this, size and AA were two unrelated formulas, so a “405B” player could outrank the 3T Kimi K3.'),
 ('9/26 21:23 上线', 'Live 9/26 21:23'),
 # u4
 ('<h2>“是让你扮演 AI”</h2>', '<h2>“You’re playing the AI”</h2>'),
 ('你不是考生，你是那个 AI', 'You’re not the test-taker. You’re the model.'),
 ('<div class="when">改对了</div><div class="t">你来当 AI</div><div class="d">经典梗改成角色扮演：复刻翻车给半分。',
  '<div class="when">NAILED IT</div><div class="t">Play the AI</div><div class="d">Classic AI fails as roleplay: recreate the fail, get half credit.'),
 ('<div class="when">改过头了</div><div class="t">思考流泄题</div><div class="d">计分题的选项挂上内心独白，一眼看出哪个对。9 分钟后撤回。',
  '<div class="when">OVERDID IT</div><div class="t">Leaky CoT</div><div class="d">Scored options got inner monologues that gave the answer away. Rolled back 9 min later.'),
 ('<div class="when">名场面</div><div class="t">SHA 仙人</div><div class="d">“就改这一处”：改个按钮颜色，长出三道门。',
  '<div class="when">ICONIC</div><div class="t">SHA Monk</div><div class="d">“Just change this one thing”: one button color, three new gates.'),
 ('<div class="when">埋下的雷</div><div class="t">好想吃大白饭</div><div class="d">深度思考模式。后来成了劝退 12% 的那道题。',
  '<div class="when">LANDMINE</div><div class="t">White rice</div><div class="d">Deep-thinking mode: “craving white rice”. Later the question that made 12% quit.'),
 ('9/26 22:00–23:40 的几版截图', 'Builds from 9/26 22:00–23:40'),
 # u5
 ('<h2>分享卡是产品的另一半</h2>', '<h2>Share cards are half the product</h2>'),
 ('没人会转发一道题，但会转发“我是 671B 的 Claude 型人格”', 'Nobody reposts a question. They repost “I’m a 671B Claude Type”.'),
 ('第一版：5 张卡（9/27 01:17）', 'V1: 5 cards (9/27 01:17)'),
 ('<img src="img/cards-grid.png"', '<img src="img/cards-grid-en.png"'),
 ('上线版：4 张卡', 'Launch version: 4 cards'),
 ('X 一条推最多 4 张图，所以合成 4 张：发布卡、跑分表、人格卡、名场面卡。<br><br>中间改过的：AA 图写全模型名；标题右边放关键数字；名场面卡改成 iOS 聊天框比例；修掉 iPhone Safari 自动放大字号导致的超框；另做一套不带二维码的小红书版。',
  'An X post holds 4 images max, so 4 cards: launch card, benchmarks, persona, iconic moment.<br><br>Fixed along the way: full model names on the AA chart; key number next to the title; iconic card in iOS chat proportions; overflow from iPhone Safari auto-enlarging text; plus a no-QR set for Xiaohongshu.'),
 ('第一版页脚的预览地址已裁掉', 'Preview URL cropped from v1 footers · EN cards shown'),
 # u6
 ('<h2>34 分钟，四种语言</h2>', '<h2>34 minutes, four languages</h2>'),
 ('“立刻给我做多语言的版本（然后有些题目可能需要本地化）”', '“Make multilingual versions right now (some questions might need localizing)”'),
 ('豆包型 → Siri 型（韩语是 Bixby 型）；鲁迅打周树人 → Mark Twain 和 Samuel Clemens、夏目漱石和夏目金之助；996 → quiet quitting、サビ残；前任凌晨的“在吗” → u up? / 起きてる？ / 자니?',
  'Doubao Type → Siri Type (Bixby Type in Korean); “Lu Xun vs Zhou Shuren” (same person) → Mark Twain vs Samuel Clemens, Natsume Sōseki vs Natsume Kinnosuke; 996 → quiet quitting, unpaid overtime; an ex’s 2am “you there?” → u up? / 起きてる？ / 자니?'),
 ('9/27 02:08 上线 · 第二天日本成了第一大来源', 'Live 9/27 02:08 · next day Japan was the #1 source'),
 # m1
 ('<h2>第 3 题的 12%</h2>', '<h2>The 12% at question 3</h2>'),
 ('“好想吃大白饭”是最有梗的一段，也是最劝退的一段', '“Craving white rice” was the funniest bit, and the one that drove people off'),
 ('前 5 题，每题走掉多少人', 'First 5 questions: who quit where'),
 ('<span>深度思考</span>', '<span>Deep thinking</span>'), ('<span>随机经典梗</span>', '<span>Random classic</span>'), ('<span>洗车</span>', '<span>Car wash</span>'),
 ('占开始答题人数。第 6–15 题平均每题约 2%。', 'Share of starters. Q6–15 average about 2% each.'),
 ('过第 15 题的比例', 'Made it past Q15'),
 ('<span>在第 3 题</span>', '<span>At Q3</span>'), ('<span>挪到第 11 题</span>', '<span>Moved to Q11</span>'), ('<span>停用</span>', '<span>Removed</span>'),
 ('（纵轴从 20% 起）一段 315 字思考流的说谎者逻辑题，放哪题，哪题就流失。',
  '(y-axis starts at 20%) A liar puzzle with a 315-character thinking stream: wherever it sat, people left there.'),
 ('逐题埋点 · 9/27 21:08 起', 'Per-question tracking · since 9/27 21:08'),
 # m2
 ('<h2>Jev 的四个版本</h2>', '<h2>Four versions of Jev</h2>'),
 ('“不是缩题量”：让一个只会做选择的模型帮你答', '“Not fewer questions”: a model that can only pick options answers for you'),
 ('用 Jev 的人，答完率', 'Finish rate, Jev users'),
 ('<span>一次跳 15 题</span>', '<span>Skip 15 at once</span>'), ('<span>逐题代答</span>', '<span>One at a time</span>'),
 ('<span>逐题 · 放宽</span>', '<span>One at a time, looser</span>'), ('<span>成批跳</span>', '<span>Batch skips</span>'),
 ('（纵轴从 40% 起）整体答完率：', '(y-axis starts at 40%) Overall finish rate: '),
 ('第一版到第二版的接受率', 'Acceptance rate, v1 → v2'),
 ('删掉“打一小时 Doom 只要 7 美元”“花费 $0.0006”，写清“剩下的题还是你自己答”。',
  'Cut “an hour of Doom for $7” and “cost: $0.0006”. Spelled out “you still answer the rest yourself”.'),
 ('本意是玩梗，读起来像收费。', 'Meant as a joke. Read like a paywall.'),
 ('玩家要的不是“看 Jev 干活”，而是“进度条猛地往前一跳”。', 'Players didn’t want to watch Jev work. They wanted the progress bar to jump.'),
 ('开始答题满 40 分钟的玩家', 'Players 40+ min after starting'),
 # m3
 ('<h2>英文版：改对了后半，改坏了开头</h2>', '<h2>English rewrite:<br>fixed the back half, broke the start</h2>'),
 ('你以为的老梗，可能正是别人进门的理由', 'The meme you think is stale might be exactly why people walk in'),
 ('停在这里的人（灰：改写前，粉：改写后）', 'Quit here (gray: before, pink: after)'),
 ('<span>第 2 题</span>', '<span>Q2</span>'), ('<span>第 3 题</span>', '<span>Q3</span>'), ('<span>第 5–11 题</span>', '<span>Q5–11</span>'),
 ('第 2 题从“9.11 和 9.9 哪个大”换成“5.9 − 5.11”，要解方程，流失翻倍；后半段流失减半。',
  'Q2 went from “9.11 or 9.9, which is bigger” to “5.9 − 5.11”, which means solving an equation. Drop-off doubled. Back-half drop-off halved.'),
 ('英文版答完率', 'English finish rate'),
 ('<span>改写前</span>', '<span>Before</span>'), ('<span>改写后</span>', '<span>Rewrite</span>'), ('<span>修正后</span>', '<span>Fixed</span>'),
 ('修正：第 2 题换回 9.11，AI 味现场的选项压到 60 字符以内。', 'Fix: Q2 back to 9.11, Slop Check options cut to under 60 characters.'),
 ('英文页 · 9/28', 'English page · 9/28'),
 # m4
 ('<h2>扩题 46%：一条 AI 流水线</h2>', '<h2>+46% questions: an AI pipeline</h2>'),
 ('“加量不要变质哦！需要和原来一样梗味十足”', '“More, but don’t let it go stale! Just as meme-heavy as before”'),
 ('<div class="t">组并行写中文</div><div class="d">每组一个题池，命令和代码都实际跑一遍', '<div class="t">writer teams</div><div class="d">In Chinese, in parallel. One pool each; every command and snippet actually run'),
 ('<div class="t">位梗味总编</div><div class="d">梗、准、短、能翻译、不冒犯，4 分以下直接改', '<div class="t">meme editors</div><div class="d">Funny, accurate, short, translatable, not offensive. Under 4/5 gets rewritten'),
 ('<div class="t">组翻译</div><div class="d">5 种语言 × 3 组', '<div class="t">translator teams</div><div class="d">5 languages × 3 teams'),
 ('<div class="t">位母语终审</div><div class="d">英 39、日 46、韩约 42、法约 70、西约 95 处', '<div class="t">native reviewers</div><div class="d">Fixes: EN 39, JA 46, KO ~42, FR ~70, ES ~95'),
 ('<div class="t">处繁体修正</div><div class="d">台湾用词 365、香港用词 302', '<div class="t">zh-TW/HK fixes</div><div class="d">Taiwan wording 365, Hong Kong wording 302'),
 ('<div class="t">种语言冒烟测试</div><div class="d">新增的每段对话都点到结局', '<div class="t">languages tested</div><div class="d">Smoke test: every new chat clicked through to an ending'),
 ('<div class="t">道新题</div><div class="d">404 → 589，+46%', '<div class="t">new questions</div><div class="d">404 → 589, +46%'),
 ('<div class="t">小时</div><div class="d">10:28 开工，13:27 上线', '<div class="t">hours</div><div class="d">Started 10:28, live 13:27'),
 ('审校反过来给原文挑错', 'The reviewers caught bugs in the original'),
 ('英、日、韩、法四位审校各自独立发现：中文原文把高考数学写在上午，其实在下午。<br>中文原文把“17 次成功 3 次”写成“三成成功率”，实际是 18%。<br>英文题里一段 Python 用了弯引号，照抄会报错。',
  'The EN, JA, KO and FR reviewers each found on their own: the Chinese original put the gaokao math exam in the morning. It’s in the afternoon.<br>The original called “3 successes out of 17” a “30% success rate”. It’s 18%.<br>A Python snippet in an English question used curly quotes. Copy it and it errors.'),
 ('每一步的说明都在 prompts/03-agent-briefs.md', 'Every step’s brief: prompts/03-agent-briefs.md'),
]

KEEP = {'figs.html': ['f1', 'f2', 'f3', 'f4', 'f7', 'f8'], 'figs2.html': None, 'figs3.html': None}
JOBS = [('figs.html', 'figs_en.html', F1 + F2 + F3 + F4 + F7 + F8),
        ('figs2.html', 'figs2_en.html', D1 + D2 + D3 + D4 + D5 + D6 + D7 + D8),
        ('figs3.html', 'figs3_en.html', U)]
bad = 0
for src, dst, pairs in JOBS:
    s = open(os.path.join(D, src), encoding='utf-8').read()
    s = s.replace(FONT_OLD, FONT_NEW, 1)
    s = s.replace('</style></head>', '</style>' + CSS_EN, 1)
    s = s.replace('<html>', '<html lang="en">', 1)
    # drop figures we don't need (f5, f6)
    if KEEP[src]:
        s = re.sub(r'<section class="fig" id="(\w+)">.*?</section>',
                   lambda m: m.group(0) if m.group(1) in KEEP[src] else '', s, flags=re.S)
    for a, b in pairs:
        if a not in s:
            print('MISSING', src, a[:60]); bad += 1
        s = s.replace(a, b)
    s = s.replace(*BRAND)
    open(os.path.join(D, dst), 'w', encoding='utf-8').write(s)
    # report leftover CJK in visible text (outside u6's intentional examples)
    txt = re.sub(r'<script.*?</script>', '', s, flags=re.S)
    txt = re.sub(r'<style.*?</style>', '', txt, flags=re.S)
    txt = re.sub(r'<[^>]+>', ' ', txt)
    left = re.findall(r'[^\x00-⿿]{1,}[^<]{0,20}', txt)
    left = [x for x in left if not any(k in x for k in ['起きてる', '자니', '→', '∞', '≈', '×', '−'])]
    scr = ''.join(re.findall(r'<script.*?</script>', s, flags=re.S))
    left += ['[script] ' + x for x in re.findall(r'[　-鿿＀-￯]+', scr)]
    print(dst, 'leftover CJK:', left[:20])
sys.exit(1 if bad else 0)
