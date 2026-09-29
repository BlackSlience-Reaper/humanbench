/* 第三轮扩题 · 图表题（chart 池）+10 —— version française */
const ADD3_CHARTS = {

  // GPT-5 发布会（2025-08）SWE-bench 图：52.8 比 69.1 高、69.1 和 30.8 一样高
  launchbar: SV.wrap("SWE-bench Verified, code (%)",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">réflexion</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">sans</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // “我们”最亮最粗还贴 SOTA，实际第二。纵轴 0–100，y = 170 - 1.4v
  loudbar: SV.wrap("Benchmark de raisonnement (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">SOTA !</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">Nous</text><text x="160" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="220" y="190" class="c-lab" text-anchor="middle">Rival B</text><text x="280" y="190" class="c-lab" text-anchor="middle">Rival C</text>`),

  // 75% vs 25%，n = 12 且全是员工
  tinysample: SV.wrap("Sondage : « Quelle IA préférez-vous ? »",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">Nous　75 %</text><text x="204" y="122" class="c-lab">Rival　25 %</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*n = 12, tous salariés de l’entreprise</text>`),

  // 总量 vs 人均：400/200=2，90/30=3，60/3=20。y = 170 - 0.3v
  deptoken: SV.wrap("Tokens consommés le mois dernier (millions)",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">R&amp;D</text><text x="178" y="188" class="c-lab" text-anchor="middle">Marketing</text><text x="258" y="188" class="c-lab" text-anchor="middle">Stagiaires</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200 pers.</text><text x="178" y="203" class="c-tick" text-anchor="middle">30 pers.</text><text x="258" y="203" class="c-tick" text-anchor="middle">3 pers.</text>`),

  // 实测 3 个点（20、35、48），之后是虚线外推到 AGI。y = 170 - 1.3v
  agiline: SV.wrap("Indice de capacité de notre modèle",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">AGI en 2027</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">prévision</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 单位偷换：0.015 美元/千 token = 15 美元/百万 token，对手 10 美元/百万。y = 170 - 13v
  unitprice: SV.wrap("Prix de l’API comparés (dollars)",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">-99,85 % !</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">Nous</text><text x="220" y="188" class="c-lab" text-anchor="middle">Rival</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">les 1 000 tokens</text><text x="220" y="202" class="c-tick" text-anchor="middle">le million</text>`),

  // 堆叠面积：编程 20/40/60/80；聊天厚度 40/35/30/25；画图厚度 15。y = 170 - 1.2v
  stackarea: SV.wrap("Appels par fonction (×100 M, empilés)",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">Code</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">Chat</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">Images</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["T1", "T2", "T3", "T4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // 点图 + 95% 置信区间：我们 71.2±2.5，A 70.4±2.8，B 66.0±2.0。y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("Score au benchmark (%, barres : IC à 95 %)",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">Nous</text><text x="180" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="260" y="190" class="c-lab" text-anchor="middle">Rival B</text>`),

  // 分箱不等宽：300/250/200/350 人，最后一格 90 分钟。y = 170 - 0.35v
  unevenbins: SV.wrap("Temps passé sur l’appli par jour (utilisateurs)",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">en minutes</text>`),

  // 辛普森悖论：A 简单 18/20、难 24/80、总 42/100；B 简单 64/80、难 4/20、总 68/100。y = 170 - 1.4v
  simpson: SV.wrap("Taux de réussite (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">A</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">B</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">Faciles</text><text x="180" y="188" class="c-lab" text-anchor="middle">Difficiles</text><text x="260" y="188" class="c-lab" text-anchor="middle">Global</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">A : 20 faciles + 80 difficiles. B : l’inverse.</text>`),
};

const ADD3 = {
  chart: [
    { lv: 1, q: "La barre la plus vive et la plus épaisse, avec l’étiquette « SOTA », c’est « Nous ». D’après les chiffres, qui est premier ?", chart: "loudbar", issue: "A cru la barre la plus voyante", opts: [
      { t: "Nous, c’est écrit SOTA", r: "82,9, c’est moins que 83,1. « SOTA », c’est le marketing qui l’a écrit. Les chiffres, eux, ont été mesurés." },
      { t: "Rival A, 83,1", ok: 1, r: "Exact. Couleur vive, contour épais, place centrale, étiquette : toute une mise en page pour te faire oublier 0,2 point." },
      { t: "Nous et A à égalité, 0,2 point c’est rien", r: "Alors il faut aussi donner la moitié de l’étiquette SOTA à A." },
      { t: "Rival C, sa barre n’a pas l’air plus petite", r: "C est à 81,5, dernier. Les barres se ressemblent parce que l’axe, pour une fois, est honnête." },
    ] },
    { lv: 2, q: "Réplique du graphique de la keynote GPT-5 (août 2025). En regardant juste les chiffres, qu’est-ce qui cloche ?", chart: "launchbar", issue: "Croit tout ce que disent les barres d’une keynote", opts: [
      { t: "Rien, 74,9 est le plus haut, GPT-5 est bien premier", r: "Le classement est bon, les barres sont toutes fausses : 52,8 dépasse 69,1, et 69,1 est aussi haut que 30,8." },
      { t: "La hauteur des barres ne suit pas les chiffres", ok: 1, r: "Exact : 52,8 dépasse 69,1, et 69,1 est aussi haut que 30,8. Altman l’a reconnu lui-même : « mega chart screwup »." },
      { t: "Réflexion et sans réflexion empilées sur une barre, pas juste", r: "On peut râler là-dessus, mais c’est secondaire. Des barres qui ignorent les chiffres, voilà le vrai scandale." },
      { fun: 1, t: "Même pas d’axe vertical, c’est de l’art abstrait", r: "Même l’abstrait respecte les proportions. Dessiner 52,8 plus haut que 69,1, Picasso n’aurait pas osé." },
    ] },
    { lv: 2, q: "Lis les petites lignes en bas à droite. « 75 % des utilisateurs nous préfèrent », c’est fiable ?", chart: "tinysample", issue: "12 salariés pour représenter l’humanité", opts: [
      { t: "Fiable, 75 contre 25, écrasant", r: "Sur 12 salariés, 9 ont voté pour la maison. Pour les 3 autres, la prime de fin d’année s’annonce compliquée." },
      { t: "Pas fiable : 12 personnes, toutes salariées", ok: 1, r: "Exact. Trop peu et biaisé : sur 12 personnes, ce 75 % a une marge d’erreur de plus de ± 20 points." },
      { t: "Pas fiable, des proportions se montrent en barres, pas en camembert", r: "En barres, ce sont toujours les mêmes 12 salariés." },
      { t: "Fiable, les salariés connaissent le produit mieux que personne", r: "Ils connaissent le produit, et surtout qui signe leurs fiches de paie." },
    ] },
    { lv: 2, q: "Le boss veut féliciter le service qui « utilise le plus l’IA par personne ». Lequel ?", chart: "deptoken", issue: "A félicité le service le plus peuplé", opts: [
      { t: "La R&D, 400, loin devant", r: "400 pour 200 personnes, ça fait 2 par tête, le plus faible des trois. Être nombreux, ce n’est pas être accro." },
      { t: "Les stagiaires, un stagiaire vaut dix R&D", ok: 1, r: "Exact. 60 ÷ 3 = 20, contre 2 pour la R&D. Rapports, code, mail d’excuses au boss : tout est fait par l’IA." },
      { t: "Le marketing, 90 pour 30 personnes, le plus efficace", r: "3 par personne, deuxième, presque 7 fois moins que les stagiaires." },
      { t: "Impossible, les stagiaires ne sont pas de vrais salariés", r: "Le boss a dit « par personne », pas « en CDI »." },
    ] },
    { lv: 2, q: "Sur ce graphique, combien de points ont vraiment été mesurés ?", chart: "agiline", issue: "A vu une ligne pointillée et cru que l’AGI arrivait", opts: [
      { t: "5, un par an jusqu’en 2027", r: "Les points sur les pointillés ne sont pas mesurés, ils sont dessinés. Le logiciel de graphiques est le plus optimiste sur l’AGI." },
      { t: "3, après 2025 tout est en pointillés", ok: 1, r: "Exact. La ligne pleine ralentit (+15, +13), les pointillés décollent d’un coup, propulsés par la levée de fonds." },
      { t: "4, celui de 2026 vient des « tests internes »", r: "« Tests internes », ça veut dire : tu ne peux pas voir, mais crois-nous." },
      { fun: 1, t: "0, l’AGI ne se mesure pas", r: "Philosophiquement impeccable. Mais les trois points 2023–2025 ont bien été mesurés." },
    ] },
    { lv: 3, q: "La keynote annonce « 99,85 % moins cher que le rival ». En ramenant tout au million de tokens, qui est le moins cher ?", chart: "unitprice", issue: "Plus cher de moitié, a cru à une affaire", opts: [
      { t: "Nous, 0,015 c’est beaucoup moins que 10", r: "0,015, c’est pour 1 000 tokens. Fois 1 000 : 15 dollars le million. Ce qui a baissé de 99,85 %, c’est la taille de la police." },
      { t: "Le rival : nous, converti, c’est 15, moitié plus cher", ok: 1, r: "Exact. 0,015 × 1 000 = 15, soit 50 % de plus que 10. L’unité est cachée dans la plus petite ligne du graphique." },
      { t: "Nous, mais pas autant qu’annoncé", r: "C’est carrément l’inverse : converti, on est à 15 dollars, le rival à 10." },
      { t: "Impossible, 1 000 et un million, ce n’est pas la même unité", r: "Mille fois mille, ça fait un million. C’est des maths de CM2, pas de la philo." },
    ] },
    { lv: 3, q: "C’est un graphique en aires empilées. La couche rose du milieu (Chat) : ses appels montent ou baissent sur l’année ?", chart: "stackarea", issue: "S’est approprié la hauteur de ceux d’en dessous", opts: [
      { t: "Ils montent, la couche rose grimpe tout le long", r: "Elle est portée par le Code en dessous, comme si tu croyais avoir grandi parce que l’ascenseur monte. Regarde l’épaisseur : 40 → 25." },
      { t: "Ils baissent, la couche s’amincit", ok: 1, r: "Exact. Un empilé se lit à l’épaisseur : T1 de 20 à 60, soit 40 ; T4 de 80 à 105, il ne reste que 25." },
      { t: "+75 %, de 60 à 105", r: "60 et 105, c’est la hauteur avec le Code du dessous. Tu as compté l’appart du voisin du dessous dans ta surface." },
      { t: "Stables, les trois couches montent ensemble", r: "Seul le Code monte, les Images font du surplace, le Chat fond." },
    ] },
    { lv: 3, q: "La keynote dit « nous sommes devant sur tout ». D’après ce graphique, quelle affirmation tient le mieux ?", chart: "errdots", issue: "A pris du bruit pour une avance écrasante", opts: [
      { t: "Devant sur tout, notre point est le plus haut, le plus gros, le plus vif", r: "0,8 de plus que A, et les deux barres se chevauchent presque. Au prochain test, le « leader » pourrait changer." },
      { t: "Devant B, c’est solide ; devant A, rien de sûr", ok: 1, r: "Exact. Aucun chevauchement avec B ; avec A, les intervalles se recouvrent presque : 0,8 point, c’est du bruit." },
      { t: "L’axe vertical commence à 62, encore le coup de la troncature", r: "Un graphique à points ne code pas la valeur par la longueur, pas besoin de partir de 0. Mauvais suspect, cette fois." },
      { t: "Rien de sûr, avec des barres d’erreur on ne peut rien comparer", r: "Aucun chevauchement avec B : notre minimum est 68,7, le maximum de B 68,0. Cette avance-là est réelle." },
    ] },
    { lv: 3, q: "L’équipe produit : « La barre la plus haute, c’est plus de 30 minutes, les gros utilisateurs sont le cœur de cible ! » Qu’est-ce qui cloche ?", chart: "unevenbins", issue: "S’est fait avoir par une barre qui contient 90 minutes", opts: [
      { t: "La dernière tranche est 9 fois plus large", ok: 1, r: "Exact : elle contient 90 minutes. Ramenée à des tranches de 10 minutes, ça fait environ 39 personnes par tranche, moins d’un septième de la première." },
      { t: "Rien, 350 personnes, c’est bien le max", r: "Une barre de 90 minutes, forcément, elle contient plus de monde. Regroupe 30 à 1 440 minutes, et elle montera encore plus haut." },
      { t: "L’axe vertical ne part pas de 0", r: "Si, il part de 0. Cette fois, l’entourloupe est sur l’axe horizontal." },
      { t: "Rien, les gros utilisateurs sont bien la majorité", r: "1 100 personnes au total : 350, c’est moins d’un tiers. Et quelqu’un qui passe 31 minutes par jour compte ici comme « gros utilisateur »." },
    ] },
    { lv: 4, q: "Le fabricant de B : « Taux de réussite global 68 % contre 42 %, B écrase A. » Lequel résout le mieux les problèmes ?", chart: "simpson", issue: "Victime en direct du paradoxe de Simpson", opts: [
      { t: "B, 26 points de plus au global", r: "Le score global de B est gonflé par les questions faciles. À catégorie égale, A a toujours 10 points de plus." },
      { t: "A, il bat B dans chaque catégorie", ok: 1, r: "Exact, paradoxe de Simpson. A a hérité de 80 questions difficiles, qui plombent son global ; catégorie par catégorie, A gagne partout." },
      { t: "B, c’est le global qui compte, les catégories sont un détail", r: "Le « global » mélange en douce la difficulté. C’est comme comparer un 20/20 en CP à un 12 aux Olympiades de maths." },
      { t: "Aucun, les données se contredisent, c’est forcément truqué", r: "Rien de truqué, chaque chiffre se recalcule : 18/20, 24/80, 64/80, 4/20." },
    ] },
  ],
};
