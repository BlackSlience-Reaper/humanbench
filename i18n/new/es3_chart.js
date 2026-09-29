/* Tercera ronda · preguntas de gráficas (pool chart) +10: detectar trucos en gráficas · es */
const ADD3_CHARTS = {

  // Lanzamiento de GPT-5 (2025-08), gráfica de SWE-bench: 52.8 más alta que 69.1; 69.1 igual que 30.8
  launchbar: SV.wrap("SWE-bench Verified: programación (%)",
    `<rect x="50" y="80" width="64" height="90" fill="#FFE1F0" class="c-slice"/>
     <rect x="50" y="30" width="64" height="50" fill="#FF7EC3" class="c-slice"/>
     <text x="82" y="54" class="c-val" text-anchor="middle">74.9</text><text x="82" y="68" class="c-tick" text-anchor="middle">Pensando</text>
     <text x="82" y="122" class="c-val" text-anchor="middle">52.8</text><text x="82" y="136" class="c-tick" text-anchor="middle">Sin pensar</text>
     <rect x="138" y="108" width="64" height="62" class="c-bar2"/><rect x="226" y="108" width="64" height="62" class="c-bar2"/>
     <text x="170" y="101" class="c-val" text-anchor="middle">69.1</text><text x="258" y="101" class="c-val" text-anchor="middle">30.8</text>` +
    SV.axis(36, 170, 304, 170) +
    `<text x="82" y="190" class="c-lab" text-anchor="middle">GPT-5</text><text x="170" y="190" class="c-lab" text-anchor="middle">o3</text><text x="258" y="190" class="c-lab" text-anchor="middle">GPT-4o</text>`),

  // «Nosotros» más brillante, más grueso y con SOTA, pero en realidad segundo. Eje 0–100, y = 170 - 1.4v
  loudbar: SV.wrap("Benchmark de razonamiento (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="56" y="53.9" width="64" height="116.1" class="c-bar1" style="stroke-width:5"/>
     <rect x="140" y="53.7" width="40" height="116.3" class="c-bar2"/><rect x="200" y="54.2" width="40" height="115.8" class="c-bar2"/><rect x="260" y="55.9" width="40" height="114.1" class="c-bar2"/>
     <text x="88" y="82" class="c-val" text-anchor="middle">SOTA</text>
     <text x="88" y="47" class="c-val" text-anchor="middle">82.9</text><text x="160" y="47" class="c-val" text-anchor="middle">83.1</text><text x="220" y="47" class="c-val" text-anchor="middle">82.7</text><text x="280" y="49" class="c-val" text-anchor="middle">81.5</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="88" y="190" class="c-lab" text-anchor="middle">Nosotros</text><text x="160" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="220" y="190" class="c-lab" text-anchor="middle">Rival B</text><text x="280" y="190" class="c-lab" text-anchor="middle">Rival C</text>`),

  // 75% vs 25%, n = 12 y todos empleados
  tinysample: SV.wrap("Encuesta: «¿Qué IA prefieres?»",
    SV.pie(108, 108, 72, [{ v: 75, c: "#FF7EC3", label: "75%" }, { v: 25, c: "#D9D4C6", label: "25%" }]) +
    `<text x="204" y="96" class="c-lab">Nosotros 75%</text><text x="204" y="122" class="c-lab">Rival 25%</text>
     <text x="306" y="203" class="c-tick" text-anchor="end">*n = 12, todos empleados de la empresa</text>`),

  // Total vs por persona: 400/200=2, 90/30=3, 60/3=20. y = 170 - 0.3v
  deptoken: SV.wrap("Tokens por área el mes pasado (millones)",
    SV.grid(110, "200") + SV.grid(50, "400") +
    `<rect x="70" y="50" width="56" height="120" class="c-bar1"/><rect x="150" y="143" width="56" height="27" class="c-bar2"/><rect x="230" y="152" width="56" height="18" class="c-bar2"/>
     <text x="98" y="43" class="c-val" text-anchor="middle">400</text><text x="178" y="136" class="c-val" text-anchor="middle">90</text><text x="258" y="145" class="c-val" text-anchor="middle">60</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="98" y="188" class="c-lab" text-anchor="middle">I+D</text><text x="178" y="188" class="c-lab" text-anchor="middle">Marketing</text><text x="258" y="188" class="c-lab" text-anchor="middle">Becarios</text>
     <text x="98" y="203" class="c-tick" text-anchor="middle">200 personas</text><text x="178" y="203" class="c-tick" text-anchor="middle">30 personas</text><text x="258" y="203" class="c-tick" text-anchor="middle">3 personas</text>`),

  // 3 puntos medidos (20, 35, 48); luego línea punteada extrapolada hasta la AGI. y = 170 - 1.3v
  agiline: SV.wrap("Índice de capacidad de nuestro modelo",
    SV.grid(105, "50") +
    `<line x1="44" y1="40" x2="306" y2="40" class="c-line" style="stroke-dasharray:6 4;stroke-width:2"/>
     <text x="50" y="34" class="c-val">AGI</text><text x="306" y="34" class="c-val" text-anchor="end">AGI en 2027</text>
     <polyline points="156,107.6 204,79 252,40" class="c-line" style="stroke-dasharray:6 4;stroke:#FF7EC3"/>
     <text x="236" y="84" class="c-tick">Proyección</text>
     <polyline points="60,144 108,124.5 156,107.6" class="c-line"/>` +
    [[60, 144], [108, 124.5], [156, 107.6]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2023", "2024", "2025", "2026", "2027", "2028"].map((m, i) => `<text x="${60 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // Cambio de unidad: 0.015 USD/mil tokens = 15 USD/millón; rival 10 USD/millón. y = 170 - 13v
  unitprice: SV.wrap("Precios de API (dólares)",
    SV.grid(105, "5") + SV.grid(40, "10") +
    `<rect x="90" y="168" width="60" height="2" class="c-bar1"/><rect x="190" y="40" width="60" height="130" class="c-bar2"/>
     <text x="120" y="160" class="c-val" text-anchor="middle">0.015</text><text x="220" y="33" class="c-val" text-anchor="middle">10</text>
     <text x="120" y="136" class="c-val" text-anchor="middle">¡99.85% más barato!</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="120" y="188" class="c-lab" text-anchor="middle">Nosotros</text><text x="220" y="188" class="c-lab" text-anchor="middle">Rival</text>
     <text x="120" y="202" class="c-tick" text-anchor="middle">por mil tokens</text><text x="220" y="202" class="c-tick" text-anchor="middle">por millón de tokens</text>`),

  // Áreas apiladas: programación 20/40/60/80; grosor chat 40/35/30/25; imágenes 15. y = 170 - 1.2v
  stackarea: SV.wrap("Uso por función (×100 M de llamadas, apilado)",
    SV.grid(122, "40") + SV.grid(74, "80") + SV.grid(26, "120") +
    `<path d="M60,170 L60,146 L138,122 L216,98 L294,74 L294,170 Z" fill="#6C9BFF" class="c-slice"/>
     <path d="M60,146 L138,122 L216,98 L294,74 L294,44 L216,62 L138,80 L60,98 Z" fill="#FF7EC3" class="c-slice"/>
     <path d="M60,98 L138,80 L216,62 L294,44 L294,26 L216,44 L138,62 L60,80 Z" fill="#FFE14D" class="c-slice"/>
     <text x="240" y="140" class="c-lab" text-anchor="middle">Programación</text>
     <text x="100" y="115" class="c-lab" text-anchor="middle">Chat</text>
     <text x="176" y="66" class="c-lab" text-anchor="middle">Imágenes</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Q1", "Q2", "Q3", "Q4"].map((m, i) => `<text x="${60 + i * 78}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),

  // Puntos + IC 95%: nosotros 71.2±2.5, A 70.4±2.8, B 66.0±2.0. y = 170 - (v - 62) * 8.75
  errdots: SV.wrap("Benchmark (%, líneas = IC del 95%)",
    SV.grid(170, "62") + SV.grid(143.75, "65") + SV.grid(100, "70") + SV.grid(56.25, "75") +
    `<line x1="100" y1="67.6" x2="100" y2="111.4" class="c-axis"/><line x1="92" y1="67.6" x2="108" y2="67.6" class="c-axis"/><line x1="92" y1="111.4" x2="108" y2="111.4" class="c-axis"/>
     <line x1="180" y1="72" x2="180" y2="121" class="c-axis"/><line x1="172" y1="72" x2="188" y2="72" class="c-axis"/><line x1="172" y1="121" x2="188" y2="121" class="c-axis"/>
     <line x1="260" y1="117.5" x2="260" y2="152.5" class="c-axis"/><line x1="252" y1="117.5" x2="268" y2="117.5" class="c-axis"/><line x1="252" y1="152.5" x2="268" y2="152.5" class="c-axis"/>
     <circle cx="100" cy="89.5" r="8" fill="#FF7EC3" class="c-slice"/><circle cx="180" cy="96.5" r="5.5" fill="#D9D4C6" class="c-slice"/><circle cx="260" cy="135" r="5.5" fill="#D9D4C6" class="c-slice"/>
     <text x="113" y="93.5" class="c-val">71.2</text><text x="191" y="100.5" class="c-val">70.4</text><text x="271" y="139" class="c-val">66.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="190" class="c-lab" text-anchor="middle">Nosotros</text><text x="180" y="190" class="c-lab" text-anchor="middle">Rival A</text><text x="260" y="190" class="c-lab" text-anchor="middle">Rival B</text>`),

  // Intervalos desiguales: 300/250/200/350 personas, el último abarca 90 minutos. y = 170 - 0.35v
  unevenbins: SV.wrap("Minutos diarios en la app (usuarios)",
    SV.grid(135, "100") + SV.grid(100, "200") + SV.grid(65, "300") +
    `<rect x="62" y="65" width="48" height="105" class="c-bar2"/><rect x="122" y="82.5" width="48" height="87.5" class="c-bar2"/><rect x="182" y="100" width="48" height="70" class="c-bar2"/><rect x="242" y="47.5" width="48" height="122.5" class="c-bar1"/>
     <text x="86" y="58" class="c-val" text-anchor="middle">300</text><text x="146" y="75.5" class="c-val" text-anchor="middle">250</text><text x="206" y="93" class="c-val" text-anchor="middle">200</text><text x="266" y="40.5" class="c-val" text-anchor="middle">350</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["0–10", "10–20", "20–30", "30–120"].map((m, i) => `<text x="${86 + i * 60}" y="188" class="c-lab" text-anchor="middle">${m}</text>`).join("") +
    `<text x="306" y="204" class="c-tick" text-anchor="end">Unidad: minutos</text>`),

  // Paradoja de Simpson: A fáciles 18/20, difíciles 24/80, total 42/100; B fáciles 64/80, difíciles 4/20, total 68/100. y = 170 - 1.4v
  simpson: SV.wrap("Tasa de aciertos (%)",
    SV.grid(100, "50") + SV.grid(30, "100") +
    `<rect x="196" y="7" width="12" height="11" class="c-bar1"/><text x="212" y="17" class="c-tick">Mod. A</text>
     <rect x="256" y="7" width="12" height="11" class="c-bar2"/><text x="272" y="17" class="c-tick">Mod. B</text>
     <rect x="70" y="44" width="28" height="126" class="c-bar1"/><rect x="102" y="58" width="28" height="112" class="c-bar2"/>
     <rect x="150" y="128" width="28" height="42" class="c-bar1"/><rect x="182" y="142" width="28" height="28" class="c-bar2"/>
     <rect x="230" y="111.2" width="28" height="58.8" class="c-bar1"/><rect x="262" y="74.8" width="28" height="95.2" class="c-bar2"/>
     <text x="84" y="38" class="c-val" text-anchor="middle">90</text><text x="116" y="52" class="c-val" text-anchor="middle">80</text>
     <text x="164" y="122" class="c-val" text-anchor="middle">30</text><text x="196" y="136" class="c-val" text-anchor="middle">20</text>
     <text x="244" y="105" class="c-val" text-anchor="middle">42</text><text x="276" y="68.8" class="c-val" text-anchor="middle">68</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="100" y="188" class="c-lab" text-anchor="middle">Fáciles</text><text x="180" y="188" class="c-lab" text-anchor="middle">Difíciles</text><text x="260" y="188" class="c-lab" text-anchor="middle">Total</text>
     <text x="175" y="204" class="c-tick" text-anchor="middle">A hizo 20 fáciles + 80 difíciles; B, al revés</text>`),
};

const ADD3 = {
  chart: [
    { lv: 1, q: "El más brillante, el más grueso y con «SOTA» encima es «Nosotros». Según los números, ¿quién va primero?", chart: "loudbar", issue: "Le cree a la barra más llamativa", opts: [
      { t: "Nosotros, hasta dice SOTA", r: "82.9 es menos que 83.1. «SOTA» lo escribió marketing; los números salieron de la prueba." },
      { t: "Rival A, con 83.1", ok: 1, r: "Correcto. Color vivo, borde grueso, primer lugar de la fila y etiqueta: todo un diseño para que ignores 0.2 puntos." },
      { t: "Empate entre nosotros y A: 0.2 no cuenta", r: "Entonces que le den a A la mitad de la etiqueta SOTA." },
      { t: "Rival C, su barra tampoco se ve baja", r: "C tiene 81.5: el último. Las barras se ven parecidas porque el eje vertical es honesto." },
    ] },
    { lv: 2, q: "Réplica de la gráfica original del lanzamiento de GPT-5 (agosto de 2025). Mirando solo los números, ¿qué está mal?", chart: "launchbar", issue: "Se cree cualquier barra de un lanzamiento", opts: [
      { t: "Nada: 74.9 es lo más alto, el primer lugar es correcto", r: "El orden está bien; las barras, todas mal: 52.8 más alta que 69.1, y 69.1 igual de alta que 30.8." },
      { t: "Las alturas de las barras no siguen los números", ok: 1, r: "Correcto: 52.8 más alta que 69.1, y 69.1 igual que 30.8. El propio Altman lo admitió después: «mega chart screwup»." },
      { t: "Con y sin razonamiento van apilados en una sola barra; es injusto", r: "Es criticable, pero queda en segundo lugar. Que las alturas ignoren los números: esa es la noticia." },
      { fun: 1, t: "Ni siquiera tiene eje vertical: es arte abstracto", r: "Hasta lo abstracto guarda proporción. Dibujar 52.8 más alto que 69.1: ni Picasso se atrevería." },
    ] },
    { lv: 2, q: "Fíjate en la letra pequeña de abajo a la derecha. ¿Es fiable que «el 75% de los usuarios nos prefiere»?", chart: "tinysample", issue: "12 empleados representan a toda la humanidad", opts: [
      { t: "Sí, 75% contra 25%: paliza", r: "9 de 12 empleados votaron por el producto de la casa. Los otros 3 ya pueden despedirse del bono." },
      { t: "No: son 12 personas, y todas empleados", ok: 1, r: "Correcto. Pocos y sesgados: con 12 personas, ese 75% tiene un margen de error de más de ±20 puntos." },
      { t: "No: los porcentajes deberían ir en una gráfica de barras", r: "En barras siguen siendo los mismos 12 empleados." },
      { t: "Sí, nadie conoce mejor el producto que sus empleados", r: "Conocen el producto, y también saben quién les paga el sueldo." },
    ] },
    { lv: 2, q: "El jefe quiere felicitar al área que «más usa la IA por persona». ¿A quién felicita?", chart: "deptoken", issue: "Premió al área con más gente", opts: [
      { t: "A I+D, con 400, muy por delante", r: "400 entre 200 personas son solo 2 por cabeza: lo más bajo de las tres áreas. Más gente no es más entusiasmo." },
      { t: "A los becarios: cada uno vale por diez de I+D", ok: 1, r: "Correcto. 60 ÷ 3 = 20; en I+D, 2 por persona. Informes semanales, código, cartas de disculpa al jefe: todo lo escribe la IA." },
      { t: "A marketing: 30 personas gastaron 90, el más eficiente", r: "3 por persona: segundo lugar, casi 7 veces por debajo de los becarios." },
      { t: "No se pueden comparar: los becarios no son empleados fijos", r: "El jefe dijo «por persona», no «por contrato»." },
    ] },
    { lv: 2, q: "En esta gráfica, ¿cuántos puntos se midieron de verdad?", chart: "agiline", issue: "Ve una línea punteada y cree que ya llega la AGI", opts: [
      { t: "5, uno por año, de 2023 a 2027", r: "Los puntos de la línea punteada no se midieron: se dibujaron. El software de gráficas es el más optimista con la AGI." },
      { t: "3; después de 2025 todo es línea punteada", ok: 1, r: "Correcto. La línea sólida se está frenando (+15, +13), pero la punteada despega de repente. Lo que la empuja es la ronda de inversión." },
      { t: "4; el de 2026 viene de una «prueba interna»", r: "«Prueba interna» significa: no lo puedes ver, pero créenos." },
      { fun: 1, t: "0: la AGI no se puede medir", r: "Filosofía: 10 de 10. Pero los tres puntos de 2023 a 2025 sí se midieron." },
    ] },
    { lv: 3, q: "En el lanzamiento dicen «99.85% más barato que la competencia». Pasando todo a precio por millón de tokens, ¿quién es más barato?", chart: "unitprice", issue: "Paga 50% más y cree que es una ganga", opts: [
      { t: "Nosotros: 0.015 es mucho menos que 10", r: "0.015 es «por mil tokens». Multiplica por 1000: 15 dólares por millón. Lo único 99.85% más pequeño es la letra de la unidad." },
      { t: "El rival: lo nuestro convertido da 15, un 50% más caro", ok: 1, r: "Correcto. 0.015 × 1000 = 15, un 50% más que 10. La unidad se escondió en la letra más pequeña de toda la gráfica." },
      { t: "Nosotros, solo que no tanto", r: "Ni siquiera aciertas la dirección: convertido, nosotros 15 dólares y el rival 10." },
      { t: "No se puede comparar: mil y millón no son la misma unidad", r: "Mil por mil es un millón. Esto es aritmética de primaria, no filosofía." },
    ] },
    { lv: 3, q: "Es una gráfica de áreas apiladas. La capa rosa del medio (chat), ¿subió o bajó durante el año?", chart: "stackarea", issue: "Cuenta como suya la altura que le prestan", opts: [
      { t: "Subió: la capa rosa va cada vez más arriba", r: "La levanta la programación de abajo, como decir que creciste porque vas en un ascensor. Mira el grosor: 40 → 25." },
      { t: "Bajó: la capa es cada vez más delgada", ok: 1, r: "Correcto. En un apilado solo cuenta el grosor: en Q1 va de 20 a 60, 40 de grosor; en Q4, de 80 a 105, solo 25." },
      { t: "Subió 75%, de 60 a 105", r: "60 y 105 son alturas que incluyen la programación de abajo. Sumaste el piso del vecino de abajo a tus metros cuadrados." },
      { t: "Igual: las tres capas suben juntas", r: "Solo sube la programación; imágenes se queda igual y el chat se encoge." },
    ] },
    { lv: 3, q: "En el lanzamiento dicen «lideramos en todo». Según esta gráfica, ¿qué afirmación se sostiene mejor?", chart: "errdots", issue: "Toma el ruido por un liderazgo aplastante", opts: [
      { t: "Lideramos en todo: nuestro punto es el más alto, el más grande y el más brillante", r: "Solo 0.8 por encima de A, con las dos líneas casi montadas una sobre otra. Mide otra vez y el «líder absoluto» podría cambiar." },
      { t: "Superamos a B con seguridad; a A, no se sabe", ok: 1, r: "Correcto. Con B los intervalos ni se tocan; con A casi se superponen, y 0.8 puntos son ruido." },
      { t: "El eje vertical empieza en 62: otro truco de eje recortado", r: "Una gráfica de puntos no muestra el tamaño con el largo de una barra; no tiene que empezar en 0. Esta vez acusaste al inocente." },
      { t: "Nada se sabe: con barras de error no se puede comparar", r: "Con B no se superponen: nuestro mínimo es 68.7 y el máximo de B, 68.0. Esa ventaja es real." },
    ] },
    { lv: 3, q: "El de operaciones dice: «¡La barra más alta es la de más de 30 minutos: los usuarios intensivos son el núcleo!». ¿Qué problema tiene la gráfica?", chart: "unevenbins", issue: "Se tragó una barra que abarca 90 minutos", opts: [
      { t: "El último intervalo es 9 veces más ancho que los demás", ok: 1, r: "Correcto: esa barra abarca 90 minutos. En tramos de 10 minutos serían unos 39 usuarios cada uno, menos de la séptima parte del primero." },
      { t: "Ninguno: 350 es claramente lo máximo", r: "Una barra de 90 minutos, claro que junta más. Con esa lógica, juntas de 30 a 1440 minutos en una y queda todavía más alta." },
      { t: "El eje vertical no empieza en 0", r: "Sí empieza en 0. Esta vez la trampa está en el eje horizontal." },
      { t: "Ninguno: los usuarios intensivos de verdad son más de la mitad", r: "De 1100 en total, 350 no llegan ni a un tercio. Y quien usa la app 31 minutos al día aquí también cuenta como «intensivo»." },
    ] },
    { lv: 4, q: "El fabricante de B dice: «Tasa total de 68% contra 42%: B aplasta a A». ¿Cuál resuelve mejor?", chart: "simpson", issue: "Víctima en vivo de la paradoja de Simpson", opts: [
      { t: "B, su tasa total es 26 puntos más alta", r: "El total de B se infló con preguntas fáciles. En cada tipo de pregunta, A saca 10 puntos más." },
      { t: "A, supera a B en cada tipo de pregunta", ok: 1, r: "Correcto, paradoja de Simpson. A recibió 80 difíciles que le hundieron el total; separando por tipo, A gana en todo." },
      { t: "B: el total es el resultado final; los grupos son detalles", r: "El «total» mete la dificultad de contrabando. Es como comparar un 10 en un examen de primaria con un 6 en la olimpiada de matemáticas." },
      { t: "Ninguno: los datos se contradicen, seguramente son falsos", r: "No son falsos; cada número cuadra: 18/20, 24/80, 64/80, 4/20." },
    ] },
  ],
};
