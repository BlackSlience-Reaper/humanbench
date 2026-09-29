/* Round 3 · chart pool +10: seeing through chart tricks */
const ADD3_CHARTS = {

  // GPT-5 launch (2025-08) SWE-bench chart: 52.8 taller than 69.1, 69.1 same height as 30.8
  launchbar: SV.wrap("SWE-bench Verified coding (%)",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">Thinking</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">No thinking</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // “Us”: brightest, thickest, SOTA sticker, actually 2nd. y axis 0–100, y = 170 - 1.4v
  loudbar: SV.wrap("Reasoning benchmark score (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">SOTA</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">Us</text><text x="160" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="220" y="190" class="c-lab" text-anchor="middle">Rival B</text><text x="280" y="190" class="c-lab" text-anchor="middle">Rival C</text>`),

  // 75% vs 25%, n = 12, all employees
  tinysample: SV.wrap("User survey: “Which AI do you prefer?”",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">Us　　75%</text><text x="204" y="122" class="c-lab">Rival　25%</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*n = 12, all our own employees</text>`),

  // total vs per head: 400/200=2, 90/30=3, 60/3=20. y = 170 - 0.3v
  deptoken: SV.wrap("Tokens used last month, by team (M)",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">R&amp;D</text><text x="178" y="188" class="c-lab" text-anchor="middle">Marketing</text><text x="258" y="188" class="c-lab" text-anchor="middle">Interns</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200 people</text><text x="178" y="203" class="c-tick" text-anchor="middle">30 people</text><text x="258" y="203" class="c-tick" text-anchor="middle">3 people</text>`),

  // 3 measured points (20, 35, 48), then dashed extrapolation to AGI. y = 170 - 1.3v
  agiline: SV.wrap("Our model capability index",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">AGI by 2027</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">Forecast</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // unit swap: $0.015/1K tokens = $15/1M tokens, rival $10/1M. y = 170 - 13v
  unitprice: SV.wrap("API price comparison (USD)",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">99.85% cheaper!</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">Us</text><text x="220" y="188" class="c-lab" text-anchor="middle">Rival</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">per 1K tokens</text><text x="220" y="202" class="c-tick" text-anchor="middle">per 1M tokens</text>`),

  // stacked area: coding 20/40/60/80; chat thickness 40/35/30/25; images 15. y = 170 - 1.2v
  stackarea: SV.wrap("AI assistant calls by feature (100M, stacked)",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">Coding</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">Chat</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">Images</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Q1", "Q2", "Q3", "Q4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // dot plot + 95% CI: us 71.2±2.5, A 70.4±2.8, B 66.0±2.0. y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("Benchmark score (%, bars = 95% CI)",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">Us</text><text x="180" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="260" y="190" class="c-lab" text-anchor="middle">Rival B</text>`),

  // uneven bins: 300/250/200/350 users, last bin spans 90 min. y = 170 - 0.35v
  unevenbins: SV.wrap("Daily time in app (users)",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">Minutes</text>`),

  // Simpson: A easy 18/20, hard 24/80, total 42/100; B easy 64/80, hard 4/20, total 68/100. y = 170 - 1.4v
  simpson: SV.wrap("Solve rate, two models (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">Model A</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">Model B</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">Easy</text><text x="180" y="188" class="c-lab" text-anchor="middle">Hard</text><text x="260" y="188" class="c-lab" text-anchor="middle">Overall</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">A got 20 easy + 80 hard; B got the reverse</text>`),
};

const ADD3 = {
  chart: [
    { lv: 1, q: "“Us” gets the brightest, thickest bar and a “SOTA” label. By the numbers, who’s first?", chart: "loudbar", issue: "Trusted the shiniest bar", opts: [
      { t: "Us. It literally says SOTA", r: "82.9 is less than 83.1. Marketing wrote “SOTA.” The benchmark wrote the numbers." },
      { t: "Rival A, at 83.1", ok: 1, r: "Correct. Bright color, bold outline, center stage, a sticker. All to hide 0.2 points." },
      { t: "Tie between us and A; 0.2 is noise", r: "Then peel off half the SOTA sticker and hand it to A." },
      { t: "Rival C, its bar looks tall too", r: "C is 81.5, dead last. The bars look alike because the axis is honest." },
    ] },
    { lv: 2, q: "A launch-stream bar chart. Ignore the vibes and read the printed numbers. What’s off?", chart: "launchbar", issue: "Believed the launch-stream bars", opts: [
      { t: "Nothing. The tallest bar is the winner", r: "Tallest isn’t biggest here. Read the labels: 52.8 stands taller than 69.1." },
      { t: "The bar heights ignore the numbers", ok: 1, r: "Correct. 52.8 towers over 69.1, and 69.1 is drawn as tall as 30.8. Altman later called it a “mega chart screwup.”" },
      { t: "The y-axis should start at 50", r: "There’s no axis to blame. The bars were drawn by feel." },
      { fun: 1, t: "It’s fine. Bars show confidence, not scores", r: "Bold theory. The internet measured the pixels anyway." },
    ] },
    { lv: 2, q: "Check the fine print, bottom right. “75% of users prefer us.” Legit?", chart: "tinysample", issue: "12 employees spoke for humanity", opts: [
      { t: "Legit. 75% vs 25%, a blowout", r: "9 of 12 employees voted for their own product. The other 3 should update their résumés." },
      { t: "No: 12 people, all employees", ok: 1, r: "Correct. Tiny and biased: at n = 12, the margin of error is over ±20 points." },
      { t: "No. Proportions should be a bar chart", r: "Make it a bar chart. Still the same 12 employees." },
      { t: "Legit. Employees know the product best", r: "They know the product. They also know who signs their paychecks." },
    ] },
    { lv: 2, q: "The boss wants to reward the most AI-pilled team, per head. Who wins?", chart: "deptoken", issue: "Rewarded the biggest team", opts: [
      { t: "R&D, 400 and way ahead", r: "400 across 200 people is 2 each. Lowest of the three. Headcount isn’t enthusiasm." },
      { t: "The interns: one equals ten R&D people", ok: 1, r: "Correct. 60 ÷ 3 = 20 each vs R&D’s 2. Reports, code, apology emails to the boss: all AI." },
      { t: "Marketing, 90 across 30, most efficient", r: "3 each. Second place, nearly 7x behind the interns." },
      { t: "Can’t compare. Interns aren’t real employees", r: "The boss said per head. Nobody said per badge." },
    ] },
    { lv: 2, q: "How many data points on this chart were actually measured?", chart: "agiline", issue: "Saw a dotted line, thought AGI was near", opts: [
      { t: "5, one a year through 2027", r: "Points on the dotted line are drawn, not measured. The chart tool is the most AGI-pilled one here." },
      { t: "3. Everything after 2025 is dotted", ok: 1, r: "Correct. The solid line is slowing (+15, +13). The dotted one takes off, powered by the fundraise." },
      { t: "4. The 2026 one is an “internal eval”", r: "“Internal eval” means: you can’t see it, but trust us." },
      { fun: 1, t: "0. AGI can’t be measured anyway", r: "Full marks for philosophy. But 2023 to 2025 really were measured." },
    ] },
    { lv: 3, q: "Launch slide: “99.85% cheaper than the rival.” Convert both to per-million tokens. Who’s cheaper?", chart: "unitprice", issue: "Paid 50% more, called it a bargain", opts: [
      { t: "Us. 0.015 is way smaller than 10", r: "0.015 is per thousand. Times 1,000: $15 per million. The only thing 99.85% smaller is the unit’s font." },
      { t: "Rival. We’re $15 per million: 50% more", ok: 1, r: "Correct. 0.015 × 1,000 = 15, 50% more than 10. The unit hid in the smallest text on the slide." },
      { t: "Us, just not by as much", r: "Wrong direction: converted, we’re $15, they’re $10." },
      { t: "Can’t compare. Thousands and millions are different units", r: "A thousand thousands is a million. Grade school, not philosophy." },
    ] },
    { lv: 3, q: "Stacked area chart. The middle pink layer (Chat): up or down over the year?", chart: "stackarea", issue: "Counted the floor below as its own height", opts: [
      { t: "Up. The pink layer keeps climbing every quarter", r: "It’s riding on Coding, like claiming you grew in an elevator. Check thickness: 40 → 25." },
      { t: "Down. The layer keeps getting thinner", ok: 1, r: "Correct. In stacked charts only thickness counts: Q1 spans 20–60 (40), Q4 80–105 (25)." },
      { t: "Up 75%, from 60 to 105", r: "60 and 105 include Coding downstairs. You counted the neighbors’ floor as your apartment." },
      { t: "Flat. All three layers rise together", r: "Only Coding grows. Images is flat. Chat is shrinking." },
    ] },
    { lv: 3, q: "Launch claim: “We lead across the board.” Based on this chart, what’s the most defensible claim?", chart: "errdots", issue: "Called noise a landslide", opts: [
      { t: "Across the board: highest, biggest, brightest dot", r: "0.8 ahead of A, and the bars nearly overlap. Rerun it and the “lead” may switch sides." },
      { t: "Ahead of B, yes. Ahead of A, can’t say", ok: 1, r: "Correct. No overlap with B; near-total overlap with A. 0.8 is noise." },
      { t: "The y-axis starts at 62. Truncation trick again", r: "Dot plots don’t use bar length, so no need to start at 0. Wrong suspect this time." },
      { t: "Can’t tell anything once there are error bars", r: "No overlap with B: our low is 68.7, B’s high is 68.0. That lead is real." },
    ] },
    { lv: 3, q: "Growth team: “The tallest bar is 30+ minutes. Heavy users are our core!” What’s wrong with the chart?", chart: "unevenbins", issue: "Fooled by a bar holding 90 minutes", opts: [
      { t: "The last bin is 9x wider than the others", ok: 1, r: "Correct. It holds 90 minutes. Per 10 minutes that’s ~39 people, under 1/7 of the first bin." },
      { t: "Nothing. 350 really is the most", r: "A 90-minute bin holds more, obviously. Make it 30 to 1,440 and it’d be taller still." },
      { t: "The y-axis doesn’t start at 0", r: "It does. This time the x-axis is doing crimes." },
      { t: "Nothing. Heavy users really are the majority", r: "1,100 total; 350 isn’t even a third. And 31 minutes a day counts as “heavy” here." },
    ] },
    { lv: 4, q: "B’s maker: “68% vs 42% overall. B crushes A.” Which one is actually the better solver?", chart: "simpson", issue: "Live victim of Simpson’s paradox", opts: [
      { t: "B, 26 points higher overall", r: "B padded its total with easy problems. Same category, A scores 10 higher every time." },
      { t: "A, higher in every category", ok: 1, r: "Correct. Simpson’s paradox. A drew 80 hard problems, sinking its total. Split it up and A sweeps." },
      { t: "B. The total is the grade; categories are details", r: "“Overall” smuggled in difficulty. Like comparing a grade-school 100 to an Olympiad 60." },
      { t: "Neither. The data contradicts itself, so it’s faked", r: "Not faked. Every number checks out: 18/20, 24/80, 64/80, 4/20." },
    ] },
  ],
};
