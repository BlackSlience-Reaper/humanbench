/* 第三轮扩题 · 图表题（chart 池）+10 —— 日本語版 */
const ADD3_CHARTS = {

  // GPT-5 発表会（2025-08）SWE-bench 図：52.8 が 69.1 より高く、69.1 と 30.8 が同じ高さ
  launchbar: SV.wrap("SWE-bench Verified 正答率（%）",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">思考あり</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">思考なし</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // 「自社」が一番明るく太く SOTA ラベル付き、実際は2位。縦軸 0–100，y = 170 - 1.4v
  loudbar: SV.wrap("某推論ベンチマークのスコア（%）",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">新SOTA</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">自社</text><text x="160" y="190" class="c-lab" text-anchor="middle">他社 A</text><text x="220" y="190" class="c-lab" text-anchor="middle">他社 B</text><text x="280" y="190" class="c-lab" text-anchor="middle">他社 C</text>`),

  // 75% vs 25%，n = 12 で全員社員
  tinysample: SV.wrap("「どのAIが好き？」ユーザー調査",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">自社　75%</text><text x="204" y="122" class="c-lab">他社　25%</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*n = 12、全員が自社の社員</text>`),

  // 総量 vs 1人あたり：400/200=2，90/30=3，60/3=20。y = 170 - 0.3v
  deptoken: SV.wrap("先月の部署別トークン消費量（百万）",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">開発部</text><text x="178" y="188" class="c-lab" text-anchor="middle">マーケ部</text><text x="258" y="188" class="c-lab" text-anchor="middle">インターン</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200人</text><text x="178" y="203" class="c-tick" text-anchor="middle">30人</text><text x="258" y="203" class="c-tick" text-anchor="middle">3人</text>`),

  // 実測 3 点（20、35、48），以降は破線で AGI まで外挿。y = 170 - 1.3v
  agiline: SV.wrap("自社モデルの能力指数",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">2027年にAGI実現</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">予測</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 単位のすり替え：0.015 ドル/千トークン = 15 ドル/百万トークン，他社 10 ドル/百万。y = 170 - 13v
  unitprice: SV.wrap("API価格の比較（ドル）",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">99.85%安い！</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">自社</text><text x="220" y="188" class="c-lab" text-anchor="middle">他社</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">/千トークン</text><text x="220" y="202" class="c-tick" text-anchor="middle">/百万トークン</text>`),

  // 積み上げ面積：コーディング 20/40/60/80；チャットの厚み 40/35/30/25；画像生成の厚み 15。y = 170 - 1.2v
  stackarea: SV.wrap("AIアシスタント機能別利用（億回・積み上げ）",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">コーディング</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">チャット</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">画像生成</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Q1", "Q2", "Q3", "Q4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // ドット + 95% 信頼区間：自社 71.2±2.5，A 70.4±2.8，B 66.0±2.0。y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("某ベンチのスコア（%、縦線は95%信頼区間）",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">自社</text><text x="180" y="190" class="c-lab" text-anchor="middle">他社 A</text><text x="260" y="190" class="c-lab" text-anchor="middle">他社 B</text>`),

  // 不等幅のビン：300/250/200/350 人，最後の1本は 90 分。y = 170 - 0.35v
  unevenbins: SV.wrap("1日のアプリ利用時間の分布（人）",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">単位：分</text>`),

  // シンプソンのパラドックス：A 易 18/20、難 24/80、計 42/100；B 易 64/80、難 4/20、計 68/100。y = 170 - 1.4v
  simpson: SV.wrap("2モデルの問題正答率（%）",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">モデルA</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">モデルB</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">易しい問題</text><text x="180" y="188" class="c-lab" text-anchor="middle">難問</text><text x="260" y="188" class="c-lab" text-anchor="middle">全体</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">Aは易しい問題20＋難問80、Bはその逆</text>`),
};


const ADD3 = {
  chart: [
    { lv: 1, q: "一番明るくて太く、「新SOTA」まで掲げているのが「自社」。数字で見ると、1位は？", chart: "loudbar", issue: "一番目立つ棒を信じる", opts: [
      { t: "自社。SOTAって書いてあるし", r: "82.9は83.1より小さい。「新SOTA」を書いたのはマーケ部、数字は実測。" },
      { t: "他社A、83.1", ok: 1, r: "正解。明るい色、太い枠、センター、ラベル。レイアウト総動員で、0.2の差を見逃させたいだけ。" },
      { t: "自社とAが同率。0.2の差は誤差", r: "ならSOTAシールも半分はがしてAに貼るべき。" },
      { t: "他社C。棒も別に低くない", r: "Cは81.5で最下位。棒がどれも同じくらいなのは、縦軸が正直だから。" },
    ] },
    { lv: 2, q: "2025年8月のGPT-5発表会の図を再現。数字だけ見ると、どこがおかしい？", chart: "launchbar", issue: "発表会の棒グラフを鵜呑みにする", opts: [
      { t: "問題なし。74.9が最高で、1位は間違いない", r: "順位は合ってる。棒は全部ウソ：52.8が69.1より高く、69.1と30.8が同じ高さ。" },
      { t: "棒の高さが数字どおりに描かれていない", ok: 1, r: "正解：52.8が69.1より高く、69.1と30.8が同じ高さ。Altman本人も後で「mega chart screwup」と認めた。" },
      { t: "思考ありとなしを1本に積むのは不公平", r: "ツッコミどころではあるけど、2番手。棒の高さが数字を完全に無視してる、こっちがトップニュース。" },
      { fun: 1, t: "縦軸すらない。これは抽象画", r: "抽象画でも比率は守る。52.8を69.1より高く描くなんて、ピカソでもやらない。" },
    ] },
    { lv: 2, q: "右下の小さい文字に注目。「ユーザーの75%が自社を支持」は信用できる？", chart: "tinysample", issue: "社員12人が全人類を代表", opts: [
      { t: "できる。75%対25%で圧勝", r: "社員12人のうち9人が自社製品に投票。残り3人のボーナスが心配。" },
      { t: "できない：12人、しかも全員社員", ok: 1, r: "正解。少ないうえに偏ってる。12人の75%だと、誤差だけでプラスマイナス20ポイント超。" },
      { t: "できない。割合のデータは棒グラフで描くのが正しい作法", r: "棒グラフにしても、同じ社員12人。" },
      { t: "できる。自社の社員が一番製品をわかってる", r: "製品のことも、誰が給料を払ってるかも、一番わかってる。" },
    ] },
    { lv: 2, q: "上司が「1人あたりで一番AIを使いこなしている部署」を表彰したい。どこを表彰すべき？", chart: "deptoken", issue: "一番人数の多い部署に賞をあげた", opts: [
      { t: "開発部。400でぶっちぎり", r: "400を200人で割ると1人あたり2。3部署で最下位。人が多いのと愛用してるのは別。" },
      { t: "インターン。1人で開発部10人分", ok: 1, r: "正解。60÷3＝20、開発部は1人あたり2。週報もコードも上司への謝罪文も、全部AIに書かせてる。" },
      { t: "マーケ部。30人で90、効率が一番いい", r: "1人あたり3で2位。インターンとはまだ7倍近い差。" },
      { t: "比べられない。インターンは正社員じゃない", r: "上司が言ったのは「1人あたり」。雇用形態の話はしてない。" },
    ] },
    { lv: 2, q: "このグラフで、実際に測定されたデータ点はいくつ？", chart: "agiline", issue: "破線を見てAGIが来ると思った", opts: [
      { t: "5つ。毎年1つずつ、2027年まで", r: "破線上の点は測ったんじゃなく、描いた。作図ソフトはAGIに一番楽観的。" },
      { t: "3つ。2025年以降は全部破線", ok: 1, r: "正解。実線は伸びが鈍ってる（+15、+13）のに、破線だけ急に離陸。押し上げてるのは資金調達のスケジュール。" },
      { t: "4つ。2026年のは「社内テスト」", r: "「社内テスト」の意味：見せられないけど、信じてください。" },
      { fun: 1, t: "0。AGIはそもそも測れない", r: "哲学なら満点。でも2023〜2025年の3点はちゃんと測ってる。" },
    ] },
    { lv: 3, q: "発表会いわく「他社より99.85%安い」。どちらも100万トークンあたりに直すと、安いのは？", chart: "unitprice", issue: "1.5倍高いのに激安だと思った", opts: [
      { t: "自社。0.015は10よりずっと小さい", r: "0.015は「千トークンあたり」。1000倍すると100万あたり15ドル。99.85%安いのは単位の文字サイズ。" },
      { t: "他社。自社は換算すると15で、1.5倍高い", ok: 1, r: "正解。0.015×1000＝15、10より50%高い。単位は図で一番小さい文字の中に隠れてた。" },
      { t: "自社。ただ、そこまで安くはない", r: "向きごと逆。換算すると自社15ドル、他社10ドル。" },
      { t: "比べられない。千と百万はそもそも単位が違うから", r: "千×千＝百万。哲学じゃなくて算数。" },
    ] },
    { lv: 3, q: "これは積み上げ面積グラフ。真ん中のピンクの層（チャット）の利用数は、1年で増えた？減った？", chart: "stackarea", issue: "下から持ち上げられた高さを自分の手柄にする", opts: [
      { t: "増えた。ピンクの層はずっと右肩上がり", r: "下のコーディングに持ち上げられてるだけ。エレベーターの中で「背が伸びた」と言うようなもの。見るのは厚み：40→25。" },
      { t: "減った。層がどんどん薄くなってる", ok: 1, r: "正解。積み上げグラフは厚みで読む：Q1は20〜60で厚さ40、Q4は80〜105でたった25。" },
      { t: "75%増えた。60から105に", r: "60と105は下の階のコーディング込みの高さ。下の住人の床面積まで自分の家に数えてる。" },
      { t: "横ばい。3つの層がそろって伸びてる", r: "伸びてるのはコーディングだけ。画像生成は足踏み、チャットは縮んでる。" },
    ] },
    { lv: 3, q: "発表会いわく「全方位でリード」。このグラフから、一番根拠のある言い方は？", chart: "errdots", issue: "ノイズを「圧倒的リード」と呼ぶ", opts: [
      { t: "全方位でリード。自社の点が一番高く、一番大きくて明るい", r: "Aとの差は0.8だけで、縦線はほぼ重なってる。測り直したら「圧倒的リード」の主役は交代するかも。" },
      { t: "Bへのリードは確か、Aへのリードは言えない", ok: 1, r: "正解。Bとは区間がかすりもしない。Aとは区間がほぼ重なり、0.8はノイズ。" },
      { t: "縦軸が62から始まってる。また切り詰めの手口", r: "ドットプロットは棒の長さで大きさを表さないので、0から始めなくていい。今回は濡れ衣。" },
      { t: "どれも言えない。誤差線があると比較できない", r: "Bとはまったく重ならない：自社の下限68.7、Bの上限68.0。このリードは本物。" },
    ] },
    { lv: 3, q: "運営担当いわく「一番高い棒は30分以上。ヘビーユーザーこそ主力！」このグラフの問題は？", chart: "unevenbins", issue: "90分入りの棒にだまされた", opts: [
      { t: "最後の区間だけ幅が9倍ある", ok: 1, r: "正解：1本に90分ぶん入ってる。10分刻みにならすと1区間約39人、最初の区間の7分の1もない。" },
      { t: "問題なし。350人が一番多いのは事実", r: "1本に90分入れれば、そりゃたくさん入る。この描き方なら30〜1440分を1本にまとめれば、もっと高くできる。" },
      { t: "縦軸が0から始まってない", r: "縦軸はちゃんと0から。今回細工されてるのは横軸。" },
      { t: "問題なし。ヘビーユーザーが大半なのは確か", r: "全部で1100人、350人は3分の1もいない。しかも1日31分使うだけで、ここでは「ヘビー」扱い。" },
    ] },
    { lv: 4, q: "Bのメーカーいわく「全体の正答率68%対42%、BはAを圧倒」。問題を解くのがうまいのはどっち？", chart: "simpson", issue: "シンプソンのパラドックスの被害者", opts: [
      { t: "B。全体の正答率が26ポイントも高い", r: "Bの合計点は易しい問題で稼いだもの。同じ種類の問題なら、Aが毎回10ポイント上。" },
      { t: "A。どの種類の問題でもBより上", ok: 1, r: "正解、シンプソンのパラドックス。Aは難問を80問も割り当てられて、合計が足を引っ張られた。分けて比べればAの全勝。" },
      { t: "B。最後は全体の成績がすべてで、内訳は細かい話", r: "「全体」にこっそり難易度が混ざってる。小学生のテストの満点と、数学オリンピックの60点を比べるようなもの。" },
      { t: "どちらでもない。データが矛盾しているので捏造に違いない", r: "捏造じゃない。全部の数字が計算で戻せる：18/20、24/80、64/80、4/20。" },
    ] },
  ],
};
