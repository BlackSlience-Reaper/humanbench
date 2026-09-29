/* 第三轮扩题 · 图表题（chart 池）+10 —— 看穿图表的套路 */
const ADD3_CHARTS = {

  // GPT-5 发布会（2025-08）SWE-bench 图：52.8 比 69.1 高、69.1 和 30.8 一样高
  launchbar: SV.wrap("SWE-bench Verified 编程测试（%）",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">思考</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">不思考</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // “我们”最亮最粗还贴 SOTA，实际第二。纵轴 0–100，y = 170 - 1.4v
  loudbar: SV.wrap("某推理基准得分（%）",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">新 SOTA</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">我们</text><text x="160" y="190" class="c-lab" text-anchor="middle">对手 A</text><text x="220" y="190" class="c-lab" text-anchor="middle">对手 B</text><text x="280" y="190" class="c-lab" text-anchor="middle">对手 C</text>`),

  // 75% vs 25%，n = 12 且全是员工
  tinysample: SV.wrap("“你更喜欢哪个 AI？”用户调研",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">我们　75%</text><text x="204" y="122" class="c-lab">对手　25%</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*样本 n = 12，均为本公司员工</text>`),

  // 总量 vs 人均：400/200=2，90/30=3，60/3=20。y = 170 - 0.3v
  deptoken: SV.wrap("上个月各部门用掉的 token（百万）",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">研发部</text><text x="178" y="188" class="c-lab" text-anchor="middle">市场部</text><text x="258" y="188" class="c-lab" text-anchor="middle">实习生</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200 人</text><text x="178" y="203" class="c-tick" text-anchor="middle">30 人</text><text x="258" y="203" class="c-tick" text-anchor="middle">3 人</text>`),

  // 实测 3 个点（20、35、48），之后是虚线外推到 AGI。y = 170 - 1.3v
  agiline: SV.wrap("我们的模型能力指数",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">2027 年实现 AGI</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">预测</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 单位偷换：0.015 美元/千 token = 15 美元/百万 token，对手 10 美元/百万。y = 170 - 13v
  unitprice: SV.wrap("API 价格对比（美元）",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">便宜 99.85%！</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">我们</text><text x="220" y="188" class="c-lab" text-anchor="middle">对手</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">每千 token</text><text x="220" y="202" class="c-tick" text-anchor="middle">每百万 token</text>`),

  // 堆叠面积：编程 20/40/60/80；聊天厚度 40/35/30/25；画图厚度 15。y = 170 - 1.2v
  stackarea: SV.wrap("某 AI 助手各功能调用量（亿次，堆叠）",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">编程</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">聊天</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">画图</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Q1", "Q2", "Q3", "Q4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 点图 + 95% 置信区间：我们 71.2±2.5，A 70.4±2.8，B 66.0±2.0。y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("某基准得分（%，竖线为 95% 置信区间）",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">我们</text><text x="180" y="190" class="c-lab" text-anchor="middle">对手 A</text><text x="260" y="190" class="c-lab" text-anchor="middle">对手 B</text>`),

  // 分箱不等宽：300/250/200/350 人，最后一格 90 分钟。y = 170 - 0.35v
  unevenbins: SV.wrap("用户每天用 App 的时长分布（人）",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">单位：分钟</text>`),

  // 辛普森悖论：A 简单 18/20、难 24/80、总 42/100；B 简单 64/80、难 4/20、总 68/100。y = 170 - 1.4v
  simpson: SV.wrap("两款模型的解题通过率（%）",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">模型 A</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">模型 B</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">简单题</text><text x="180" y="188" class="c-lab" text-anchor="middle">难题</text><text x="260" y="188" class="c-lab" text-anchor="middle">总体</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">A 做了 20 道简单题 + 80 道难题，B 正好相反</text>`),
};

const ADD3 = {
  chart: [
    { lv: 1, q: "最亮最粗、还顶着“新 SOTA”的是“我们”。按数字，谁第一？", chart: "loudbar", issue: "谁的柱子最亮就信谁", opts: [
      { t: "我们，SOTA 都写上了", r: "82.9 比 83.1 少。“新 SOTA”是市场部写的，数字是测出来的。" },
      { t: "对手 A，83.1 分", ok: 1, r: "对。亮色、加粗、站 C 位、贴标签，一整套排版，只为让你忽略 0.2 分。" },
      { t: "我们和 A 并列，0.2 分可以忽略", r: "那 SOTA 贴纸也该撕一半给 A。" },
      { t: "对手 C，柱子看着也不矮", r: "C 是 81.5，垫底。柱子都差不多高，是因为纵轴很老实。" },
    ] },
    { lv: 2, q: "2025 年 8 月 GPT-5 发布会原图复刻。只看数字，哪里不对？", chart: "launchbar", issue: "发布会的柱子说啥信啥", opts: [
      { t: "没问题，74.9 最高，第一名没毛病", r: "名次没错，柱子全错：52.8 比 69.1 高，69.1 和 30.8 一样高。" },
      { t: "柱子高度根本没按数字画", ok: 1, r: "对：52.8 比 69.1 高，69.1 和 30.8 一样高。Altman 事后自己认了：“mega chart screwup”。" },
      { t: "思考和不思考叠成一根，不公平", r: "这个能吐槽，但只能排第二。柱子高度压根不看数字，这才是头条。" },
      { fun: 1, t: "纵轴都没画，这是抽象派", r: "抽象派也得按比例抽。52.8 画得比 69.1 高，毕加索都不敢。" },
    ] },
    { lv: 2, q: "注意右下角的小字。“75% 的用户更喜欢我们”靠谱吗？", chart: "tinysample", issue: "12 个员工代表了全人类", opts: [
      { t: "靠谱，75% 对 25%，碾压", r: "12 个员工里 9 个投了自家产品。另外 3 个，年终奖堪忧。" },
      { t: "不靠谱：12 个人，还全是员工", ok: 1, r: "对。又少又偏：12 人的 75%，误差就有正负 20 多个百分点。" },
      { t: "不靠谱，比例数据应该画成柱状图才规范", r: "换成柱状图，还是那 12 个员工。" },
      { t: "靠谱，自家员工最懂自家产品", r: "最懂产品，也最懂是谁在发工资。" },
    ] },
    { lv: 2, q: "老板要表扬“人均最拥抱 AI”的部门。该表扬谁？", chart: "deptoken", issue: "把奖发给了人最多的部门", opts: [
      { t: "研发部，400 遥遥领先", r: "400 摊给 200 人，人均才 2，三个部门里最少。人多不等于爱用。" },
      { t: "实习生，一人顶研发部十个", ok: 1, r: "对。60 ÷ 3 = 20，研发部人均 2。周报、代码、给老板的道歉信，全让 AI 写了。" },
      { t: "市场部，30 人用掉 90，效率最高", r: "人均 3，第二名，离实习生还差将近 7 倍。" },
      { t: "没法比，实习生不算正式员工", r: "老板说的是“人均”，没说要看编制。" },
    ] },
    { lv: 2, q: "这张图里，真正测出来的数据点有几个？", chart: "agiline", issue: "看到虚线就以为 AGI 要来了", opts: [
      { t: "5 个，每年一个，一直到 2027", r: "虚线上的点不是测的，是画的。画图软件对 AGI 最乐观。" },
      { t: "3 个，2025 之后全是虚线", ok: 1, r: "对。实线在变缓（+15、+13），虚线却突然起飞，推动它的是融资进度。" },
      { t: "4 个，2026 那个是“内部测试”", r: "“内部测试”的意思是：你看不到，但请相信。" },
      { fun: 1, t: "0 个，AGI 本来就没法测", r: "哲学满分。但 2023 到 2025 那三个点确实是测出来的。" },
    ] },
    { lv: 3, q: "发布会说“比对手便宜 99.85%”。都换成每百万 token，谁更便宜？", chart: "unitprice", issue: "贵了一半还以为白菜价", opts: [
      { t: "我们，0.015 比 10 小多了", r: "0.015 是“每千 token”。乘 1000，每百万 15 美元。便宜 99.85% 的是单位的字号。" },
      { t: "对手：我们换算后是 15，贵一半", ok: 1, r: "对。0.015 × 1000 = 15，比 10 贵 50%。单位藏在全图最小的那行字里。" },
      { t: "我们，只是没便宜那么多", r: "方向都反了：换算后我们 15 美元，对手 10 美元。" },
      { t: "没法比，千和百万不是一个单位", r: "一千乘一千就是一百万。这是小学数学，不是哲学。" },
    ] },
    { lv: 3, q: "这是堆叠面积图。中间粉色那层（聊天）的调用量，一年里是涨还是跌？", chart: "stackarea", issue: "把被托起来的高度算成自己的", opts: [
      { t: "在涨，粉色那层一路往上走", r: "它是被底下的编程托上去的，就像站在电梯里说自己长高了。看厚度：40 → 25。" },
      { t: "在跌，那层越来越薄", ok: 1, r: "对。堆叠图只能看厚度：Q1 是 20 到 60，厚 40；Q4 是 80 到 105，只剩 25。" },
      { t: "涨了 75%，从 60 涨到 105", r: "60 和 105 是连楼下的编程一起算的高度。你把楼下住户也算进了自家面积。" },
      { t: "持平，三层一起在涨", r: "只有编程在涨，画图原地踏步，聊天在缩水。" },
    ] },
    { lv: 3, q: "发布会说“我们全面领先”。按这张图，最站得住的说法是？", chart: "errdots", issue: "拿噪声当遥遥领先", opts: [
      { t: "全面领先，我们的点比谁都高，还最大最亮", r: "比 A 只高 0.8，两根竖线几乎叠在一起。重测一次，“遥遥领先”可能就换人了。" },
      { t: "领先 B 站得住，领先 A 说不准", ok: 1, r: "对。和 B 的区间不沾边；和 A 的区间几乎重合，0.8 分就是噪声。" },
      { t: "纵轴从 62 开始，又是截断套路", r: "点图不靠柱子长度表达大小，不必从 0 开始。这回你抓错人了。" },
      { t: "都说不准，画了误差线就没法比", r: "和 B 完全不重叠：我们最低 68.7，B 最高 68.0。这个领先是真的。" },
    ] },
    { lv: 3, q: "运营说：“最高那根是 30 分钟以上，重度用户才是主力！”图有什么问题？", chart: "unevenbins", issue: "被一根装了 90 分钟的柱子骗了", opts: [
      { t: "最后一格比别的宽了 9 倍", ok: 1, r: "对：它一格装了 90 分钟。摊成 10 分钟一格，每格才约 39 人，不到第一格的七分之一。" },
      { t: "没问题，350 人确实最多", r: "一根装 90 分钟，当然装得多。照这个画法，把 30 到 1440 分钟并成一格还能更高。" },
      { t: "纵轴没从 0 开始", r: "纵轴是从 0 开始的。这回动手脚的是横轴。" },
      { t: "没问题，重度用户确实占了一大半", r: "一共 1100 人，350 人还不到三分之一。而且每天用 31 分钟的，在这儿也算“重度”。" },
    ] },
    { lv: 4, q: "B 的厂商说：“总通过率 68% 对 42%，B 碾压 A。”谁更会解题？", chart: "simpson", issue: "辛普森悖论的现场受害者", opts: [
      { t: "B，总通过率高出 26 个百分点", r: "B 的总分是简单题堆出来的。同一类题，A 每次都多 10 分。" },
      { t: "A，每一类题都比 B 高", ok: 1, r: "对，辛普森悖论。A 被分到 80 道难题，总分被拖下水；分开比，A 全胜。" },
      { t: "B，总体才是最终成绩，分组只是细节", r: "“总体”偷偷混进了难度。这就像拿小学卷子的满分，去比奥赛的 60 分。" },
      { t: "都不对，数据自相矛盾，肯定造假", r: "没造假，每个数都算得回去：18/20、24/80、64/80、4/20。" },
    ] },
  ],
};
