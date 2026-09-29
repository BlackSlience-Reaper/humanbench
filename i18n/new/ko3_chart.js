/* 3차 문제 추가 · 그래프 문제(chart 풀) +10: 그래프 꼼수 간파하기 */
const ADD3_CHARTS = {

  // GPT-5 launch (2025-08) SWE-bench chart
  launchbar: SV.wrap("SWE-bench Verified 코딩 테스트(%)",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">추론</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">추론 없음</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // y = 170 - 1.4v
  loudbar: SV.wrap("어떤 추론 벤치마크 점수(%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">새 SOTA</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">우리</text><text x="160" y="190" class="c-lab" text-anchor="middle">경쟁사 A</text><text x="220" y="190" class="c-lab" text-anchor="middle">경쟁사 B</text><text x="280" y="190" class="c-lab" text-anchor="middle">경쟁사 C</text>`),

  // 75% vs 25%, n = 12
  tinysample: SV.wrap("“어떤 AI가 더 좋아요?” 사용자 조사",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">우리　75%</text><text x="204" y="122" class="c-lab">경쟁사　25%</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*표본 n = 12, 전원 자사 직원</text>`),

  // 400/200=2, 90/30=3, 60/3=20. y = 170 - 0.3v
  deptoken: SV.wrap("지난달 부서별 token 사용량(백만)",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">개발팀</text><text x="178" y="188" class="c-lab" text-anchor="middle">마케팅팀</text><text x="258" y="188" class="c-lab" text-anchor="middle">인턴</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200명</text><text x="178" y="203" class="c-tick" text-anchor="middle">30명</text><text x="258" y="203" class="c-tick" text-anchor="middle">3명</text>`),

  // 3 measured points (20, 35, 48). y = 170 - 1.3v
  agiline: SV.wrap("우리 모델 능력 지수",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">2027년 AGI 달성</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">예측</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // $0.015/1K token = $15/1M token vs $10/1M. y = 170 - 13v
  unitprice: SV.wrap("API 가격 비교(달러)",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">99.85% 저렴!</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">우리</text><text x="220" y="188" class="c-lab" text-anchor="middle">경쟁사</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">천 token당</text><text x="220" y="202" class="c-tick" text-anchor="middle">백만 token당</text>`),

  // stacked: coding 20/40/60/80; chat 40/35/30/25; image 15. y = 170 - 1.2v
  stackarea: SV.wrap("어떤 AI 비서 기능별 호출량(억 회, 누적)",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">코딩</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">채팅</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">이미지</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Q1", "Q2", "Q3", "Q4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 71.2±2.5, A 70.4±2.8, B 66.0±2.0. y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("벤치마크 점수(%, 세로선: 95% 신뢰구간)",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">우리</text><text x="180" y="190" class="c-lab" text-anchor="middle">경쟁사 A</text><text x="260" y="190" class="c-lab" text-anchor="middle">경쟁사 B</text>`),

  // uneven bins: 300/250/200/350. y = 170 - 0.35v
  unevenbins: SV.wrap("사용자 하루 앱 사용 시간 분포(명)",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">단위: 분</text>`),

  // Simpson: A 18/20, 24/80, 42/100; B 64/80, 4/20, 68/100. y = 170 - 1.4v
  simpson: SV.wrap("두 모델의 문제 통과율(%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">모델 A</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">모델 B</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">쉬운 문제</text><text x="180" y="188" class="c-lab" text-anchor="middle">어려운 문제</text><text x="260" y="188" class="c-lab" text-anchor="middle">전체</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">A는 쉬운 문제 20개 + 어려운 문제 80개, B는 정반대</text>`),
};

const ADD3 = {
  chart: [
    { lv: 1, q: "제일 밝고 제일 굵고 “새 SOTA”까지 붙은 건 “우리”. 숫자로 보면 1등은 누구?", chart: "loudbar", issue: "막대가 제일 튀는 쪽을 믿음", opts: [
      { t: "우리. SOTA라고 써 있잖아", r: "82.9는 83.1보다 작음. “새 SOTA”는 마케팅팀이 쓴 거고, 숫자는 측정한 거임." },
      { t: "경쟁사 A, 83.1점", ok: 1, r: "정답. 밝은 색, 굵은 테두리, 센터 자리, 스티커까지. 풀세트 편집이 오직 0.2점 차이를 못 보게 하려고." },
      { t: "우리랑 A 공동 1위. 0.2점은 무시해도 됨", r: "그럼 SOTA 스티커도 반 떼서 A한테 줘야지." },
      { t: "경쟁사 C, 막대도 안 낮아 보임", r: "C는 81.5로 꼴찌. 막대가 다 비슷한 건 세로축이 정직해서임." },
    ] },
    { lv: 2, q: "2025년 8월 GPT-5 발표회 원본 그래프 재현. 숫자만 보면 뭐가 이상함?", chart: "launchbar", issue: "발표회 막대를 그대로 믿음", opts: [
      { t: "문제없음. 74.9가 제일 높으니 1등 맞음", r: "순위는 맞는데 막대가 전부 틀림: 52.8이 69.1보다 높고, 69.1이랑 30.8이 같은 높이." },
      { t: "막대 높이가 숫자대로 안 그려짐", ok: 1, r: "정답: 52.8이 69.1보다 높고, 69.1이랑 30.8이 똑같이 높음. Altman도 나중에 직접 인정: “mega chart screwup”." },
      { t: "추론 켠 거랑 끈 걸 한 막대에 쌓은 건 반칙", r: "까일 만하지만 2순위. 막대 높이가 숫자를 아예 안 따른 게 헤드라인." },
      { fun: 1, t: "세로축도 없음. 이건 추상화임", r: "추상화도 비율은 지킴. 52.8을 69.1보다 높게 그리는 건 피카소도 못 함." },
    ] },
    { lv: 2, q: "오른쪽 아래 작은 글씨 주목. “사용자 75%가 우리를 더 선호”, 믿을 만함?", chart: "tinysample", issue: "직원 12명이 전 인류를 대표함", opts: [
      { t: "믿을 만함. 75% 대 25%, 압승", r: "직원 12명 중 9명이 자사 제품에 투표. 나머지 3명은 성과급이 걱정됨." },
      { t: "못 믿음: 12명인 데다 전원 직원", ok: 1, r: "정답. 적고 편향됨: 12명 중 75%면 오차만 ±20%p가 넘음." },
      { t: "못 믿음. 비율 데이터는 막대그래프로 그려야 정석", r: "막대그래프로 바꿔도 그 직원 12명 그대로임." },
      { t: "믿을 만함. 자사 제품은 자사 직원이 제일 잘 앎", r: "제품도 제일 잘 알고, 월급 주는 사람도 제일 잘 앎." },
    ] },
    { lv: 2, q: "팀장님이 “1인당 AI를 제일 열심히 쓰는” 부서를 칭찬하려 함. 어디를 칭찬해야 함?", chart: "deptoken", issue: "사람 제일 많은 부서한테 상 줌", opts: [
      { t: "개발팀. 400으로 압도적 1위", r: "400을 200명이 나누면 1인당 겨우 2. 세 부서 중 꼴찌. 사람 많다고 많이 쓰는 게 아님." },
      { t: "인턴. 한 명이 개발팀 열 명 몫", ok: 1, r: "정답. 60 ÷ 3 = 20, 개발팀은 1인당 2. 주간 보고, 코드, 팀장님께 쓰는 사과문까지 전부 AI가 씀." },
      { t: "마케팅팀. 30명이 90을 써서 효율 최고", r: "1인당 3으로 2등. 인턴이랑은 거의 7배 차이." },
      { t: "비교 불가. 인턴은 정규직이 아님", r: "팀장님은 “1인당”이라고 했지, 정규직만이라곤 안 했음." },
    ] },
    { lv: 2, q: "이 그래프에서 실제로 측정한 데이터 포인트는 몇 개?", chart: "agiline", issue: "점선 보고 AGI 온다고 믿음", opts: [
      { t: "5개. 1년에 하나씩, 2027년까지", r: "점선 위의 점은 측정한 게 아니라 그린 거임. 그래프 툴이 AGI에 제일 낙관적임." },
      { t: "3개. 2025년 이후는 전부 점선", ok: 1, r: "정답. 실선은 완만해지는데(+15, +13) 점선은 갑자기 이륙. 밀어 올린 건 투자 유치 일정." },
      { t: "4개. 2026년 건 “내부 테스트”", r: "“내부 테스트”의 뜻: 너는 못 보지만 믿어 줘." },
      { fun: 1, t: "0개. AGI는 원래 측정 불가", r: "철학은 만점. 근데 2023~2025년 세 점은 진짜 측정한 거임." },
    ] },
    { lv: 3, q: "발표회에서 “경쟁사보다 99.85% 저렴”이라고 함. 둘 다 백만 token 기준으로 바꾸면 어디가 더 쌈?", chart: "unitprice", issue: "50% 비싼데 헐값인 줄 앎", opts: [
      { t: "우리. 0.015가 10보다 훨씬 작음", r: "0.015는 “천 token당”. 1,000을 곱하면 백만당 15달러. 99.85% 싼 건 단위 글씨 크기임." },
      { t: "경쟁사. 우리는 환산하면 15, 50% 비쌈", ok: 1, r: "정답. 0.015 × 1000 = 15, 10보다 50% 비쌈. 단위는 그래프에서 제일 작은 글씨에 숨어 있음." },
      { t: "우리. 다만 99.85%까지 싸진 않고 좀 덜 쌀 뿐", r: "방향부터 반대: 환산하면 우리 15달러, 경쟁사 10달러." },
      { t: "비교 불가. 천이랑 백만은 다른 단위", r: "천 곱하기 천은 백만. 이건 초등 수학이지 철학이 아님." },
    ] },
    { lv: 3, q: "누적 영역 그래프임. 가운데 분홍색 층(채팅)의 호출량은 1년 동안 늘었을까 줄었을까?", chart: "stackarea", issue: "받쳐 올려진 높이를 자기 키로 착각", opts: [
      { t: "늘었음. 분홍색 층이 계속 올라감", r: "밑에 있는 코딩이 받쳐 올려 준 거임. 엘리베이터 타고 키 컸다는 격. 두께를 봐야 함: 40 → 25." },
      { t: "줄었음. 층이 점점 얇아짐", ok: 1, r: "정답. 누적 그래프는 두께만 봄: Q1은 20~60으로 40, Q4는 80~105로 25밖에 안 남음." },
      { t: "60에서 105로, 75% 늘었음", r: "60이랑 105는 아래층 코딩까지 합친 높이. 아랫집 평수까지 우리 집으로 친 셈." },
      { t: "그대로임. 세 층이 같이 오르는 중", r: "오르는 건 코딩뿐. 이미지는 제자리, 채팅은 쪼그라드는 중." },
    ] },
    { lv: 3, q: "발표회에서 “우리가 전 부문 1위”라고 함. 이 그래프로 가장 설득력 있는 말은?", chart: "errdots", issue: "노이즈를 압도적 1위로 포장함", opts: [
      { t: "전 부문 1위. 우리 점이 제일 높고 제일 크고 제일 밝음", r: "A보다 겨우 0.8 높고, 세로선 두 개가 거의 겹침. 다시 재면 “압도적 1위”가 바뀔 수도 있음." },
      { t: "B보다 앞선 건 확실, A보다 앞선 건 모름", ok: 1, r: "정답. B와는 구간이 안 겹치고, A와는 거의 겹침. 0.8점은 노이즈." },
      { t: "세로축이 62부터 시작함. 또 잘린 축 수법", r: "점 그래프는 막대 길이로 크기를 보여 주는 게 아니니까 0부터 시작할 필요 없음. 이번엔 헛다리." },
      { t: "다 모름. 오차 막대가 있으면 비교가 안 됨", r: "B와는 전혀 안 겹침: 우리 최저 68.7, B 최고 68.0. 이 우위는 진짜임." },
    ] },
    { lv: 3, q: "운영팀: “제일 높은 막대가 30분 이상이에요, 헤비 유저가 주력이라고요!” 이 그래프의 문제는?", chart: "unevenbins", issue: "90분짜리 막대 하나에 속음", opts: [
      { t: "마지막 칸만 다른 칸보다 9배 넓음", ok: 1, r: "정답: 한 칸에 90분을 담음. 10분 단위로 쪼개면 칸당 약 39명, 첫 칸의 7분의 1도 안 됨." },
      { t: "문제없음. 350명이 확실히 제일 많음", r: "한 칸에 90분을 담으면 당연히 많이 담기지. 이 방식이면 30~1440분을 한 칸으로 묶어서 더 높일 수도 있음." },
      { t: "세로축이 0부터 시작 안 함", r: "세로축은 0부터 시작함. 이번에 손댄 건 가로축." },
      { t: "문제없음. 헤비 유저가 진짜 절반 넘게 차지함", r: "전체 1,100명 중 350명이면 3분의 1도 안 됨. 게다가 하루 31분 쓰는 사람도 여기선 “헤비 유저”." },
    ] },
    { lv: 4, q: "B 개발사: “전체 통과율 68% 대 42%, B가 A를 압살.” 그럼 문제는 누가 더 잘 풂?", chart: "simpson", issue: "심슨의 역설 현장 피해자", opts: [
      { t: "B. 전체 통과율이 26%p 높음", r: "B의 총점은 쉬운 문제로 쌓은 거임. 같은 종류끼리 보면 A가 매번 10점 높음." },
      { t: "A. 모든 유형에서 B보다 높음", ok: 1, r: "정답, 심슨의 역설. A는 어려운 문제 80개를 배정받아 총점이 끌려 내려감. 나눠서 보면 A 전승." },
      { t: "B. 최종 성적은 전체고, 유형별은 디테일일 뿐", r: "“전체”에 난이도가 몰래 섞여 들어감. 초등학교 시험 만점을 올림피아드 60점이랑 비교하는 격." },
      { t: "둘 다 아님. 데이터가 자기모순이니 조작임", r: "조작 없음. 숫자 전부 역산됨: 18/20, 24/80, 64/80, 4/20." },
    ] },
  ],
};
