/* =========================================================
   ARC-AGI, human edition: study two examples, find the rule, pick the test output
   - outputs are computed by the rule functions, never hand-written, so they're always correct
   - decoys: apply other rules to the test input; if still short, randomly flip a cell or two
   ========================================================= */
const ARC_COLORS = ["#111111", "#1E93FF", "#F93C31", "#4FCC30", "#FFDC00", "#999999", "#E53AA3", "#FF851B", "#87D8F1", "#921231"];
const G = rows => rows.map(r => r.split("").map(Number));
const SPLIT = (L, R) => L.map((l, i) => l + "5" + R[i].replace(/1/g, "3"));
const ARC = {
  flipH: g => g.map(r => r.slice().reverse()),
  flipV: g => g.slice().reverse().map(r => r.slice()),
  rot90: g => g[0].map((_, c) => g.map((_, r) => g[g.length - 1 - r][c])),
  recolor: (a, b) => g => g.map(r => r.map(v => v === a ? b : v)),
  swap: (a, b) => g => g.map(r => r.map(v => v === a ? b : v === b ? a : v)),
  gravity: g => {
    const H = g.length, W = g[0].length, out = g.map(r => r.map(() => 0));
    for (let c = 0; c < W; c++) {
      const col = g.map(r => r[c]).filter(v => v);
      col.forEach((v, i) => out[H - col.length + i][c] = v);
    }
    return out;
  },
  extendRight: g => g.map(r => { const o = r.slice(); let cur = 0; for (let c = 0; c < o.length; c++) { if (r[c]) cur = r[c]; else if (cur) o[c] = cur; } return o; }),
  scale2: g => g.flatMap(r => { const w = r.flatMap(v => [v, v]); return [w, w.slice()]; }),
  denoise: g => g.map((r, i) => r.map((v, j) => {
    if (!v) return 0;
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) if ((di || dj) && g[i + di] && g[i + di][j + dj]) return v;
    return 0;
  })),
  mirror: g => g.map(r => r.map((v, j) => v || r[r.length - 1 - j])),
  fill: color => g => {
    const H = g.length, W = g[0].length, seen = g.map(r => r.map(() => false)), st = [];
    for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) if ((i === 0 || j === 0 || i === H - 1 || j === W - 1) && !g[i][j]) st.push([i, j]);
    while (st.length) {
      const [i, j] = st.pop();
      if (i < 0 || j < 0 || i >= H || j >= W || seen[i][j] || g[i][j]) continue;
      seen[i][j] = true; st.push([i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]);
    }
    return g.map((r, i) => r.map((v, j) => v || (seen[i][j] ? 0 : color)));
  },
  then: (f, h) => g => h(f(g)),
  crop: g => {
    const rows = g.map((r, i) => r.some(v => v) ? i : -1).filter(i => i >= 0);
    const cols = g[0].map((_, j) => g.some(r => r[j]) ? j : -1).filter(j => j >= 0);
    return g.slice(rows[0], rows[rows.length - 1] + 1).map(r => r.slice(cols[0], cols[cols.length - 1] + 1));
  },
  tile: g => {
    const h = g.map(r => r.slice().reverse()), v = g.slice().reverse(), hv = h.slice().reverse();
    return [...g.map((r, i) => [...r, ...h[i]]), ...v.map((r, i) => [...r, ...hv[i]])];
  },
  connect: g => {
    const out = g.map(r => r.slice());
    const line = (cells, set) => {
      const nz = cells.map((v, k) => [v, k]).filter(([v]) => v);
      for (let k = 0; k + 1 < nz.length; k++) if (nz[k][0] === nz[k + 1][0]) for (let m = nz[k][1] + 1; m < nz[k + 1][1]; m++) set(m, nz[k][0]);
    };
    g.forEach((r, i) => line(r, (j, v) => out[i][j] = v));
    g[0].forEach((_, j) => line(g.map(r => r[j]), (i, v) => out[i][j] = v));
    return out;
  },
  objects: g => {
    const H = g.length, W = g[0].length, id = g.map(r => r.map(() => -1)), objs = [];
    for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) if (g[i][j] && id[i][j] < 0) {
      const cells = [], st = [[i, j]]; id[i][j] = objs.length;
      while (st.length) { const [a, b] = st.pop(); cells.push([a, b]);
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([da, db]) => { const x = a + da, y = b + db;
          if (x >= 0 && y >= 0 && x < H && y < W && g[x][y] && id[x][y] < 0) { id[x][y] = objs.length; st.push([x, y]); } }); }
      objs.push(cells);
    }
    return objs;
  },
  sizeColor: g => {
    const objs = ARC.objects(g), big = Math.max(...objs.map(o => o.length)), out = g.map(r => r.map(() => 0));
    objs.forEach(o => o.forEach(([i, j]) => out[i][j] = o.length === big ? 2 : 1));
    return out;
  },
  keepLargest: g => {
    const objs = ARC.objects(g), big = objs.reduce((a, o) => o.length > a.length ? o : a, []), out = g.map(r => r.map(() => 0));
    big.forEach(([i, j]) => out[i][j] = g[i][j]);
    return out;
  },
  diag: g => {
    const out = g.map(r => r.slice());
    g.forEach((r, i) => r.forEach((v, j) => { if (v) for (let k = 1; g[i + k] && j + k < r.length; k++) if (!out[i + k][j + k]) out[i + k][j + k] = v; }));
    return out;
  },
  splitAnd: g => {
    const sep = g[0].findIndex((_, j) => g.every(r => r[j] === 5));
    return g.map(r => r.slice(0, sep).map((v, j) => v && r[sep + 1 + j] ? 2 : 0));
  },
  bySize: g => {
    const out = g.map(r => r.map(() => 0));
    ARC.objects(g).forEach(o => o.forEach(([i, j]) => out[i][j] = Math.min(o.length, 4)));
    return out;
  },
  invertBox: g => {
    const rows = g.map((r, i) => r.some(v => v) ? i : -1).filter(i => i >= 0);
    const cols = g[0].map((_, j) => g.some(r => r[j]) ? j : -1).filter(j => j >= 0);
    const c = g.flat().find(v => v), [r0, r1, c0, c1] = [rows[0], rows[rows.length - 1], cols[0], cols[cols.length - 1]];
    return g.map((r, i) => r.map((v, j) => i >= r0 && i <= r1 && j >= c0 && j <= c1 ? (v ? 0 : c) : v));
  },
  slideRight: g => g.map(r => { const nz = r.filter(v => v); return [...Array(r.length - nz.length).fill(0), ...nz]; }),
  majority: g => {
    const cnt = {}; g.flat().forEach(v => { if (v) cnt[v] = (cnt[v] || 0) + 1; });
    const c = +Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0];
    return [[c, c], [c, c]];
  },
  countBar: g => { const objs = ARC.objects(g), c = g.flat().find(v => v); return [Array(objs.length).fill(c)]; },
  quad: g => { const H = g.length, W = g[0].length;
    return g.map((r, i) => r.map((v, j) => v || g[i][W - 1 - j] || g[H - 1 - i][j] || g[H - 1 - i][W - 1 - j])); },
  outline: color => g => g.map((r, i) => r.map((v, j) => v || ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => g[i + a] && g[i + a][j + b]) ? color : 0))),
};
// decoys are pulled from ARC_DECOYS on demand so ARC isn't referenced before it's fully defined

const ARC_DECOYS = [g => g, ARC.flipH, ARC.flipV, ARC.rot90, ARC.gravity, ARC.extendRight, ARC.denoise, ARC.mirror, ARC.fill(4), ARC.outline(8), ARC.swap(1, 2), ARC.recolor(1, 2), ARC.diag, ARC.quad, ARC.connect];

const ARC_PUZZLES = [
  { lv: 1, rule: "miroir gauche-droite", fn: ARC.flipH, train: [["1100", "1000", "1000"], ["0220", "0020", "2220"]], test: ["3000", "3300", "0330"] },
  { lv: 1, rule: "retourner de haut en bas", fn: ARC.flipV, train: [["444", "000", "000"], ["010", "110", "000"]], test: ["202", "220", "000"] },
  { lv: 1, rule: "tout le bleu devient rouge, le reste ne bouge pas", fn: ARC.recolor(1, 2), train: [["1010", "0110"], ["3111", "0013"]], test: ["1301", "1130", "0011"] },
  { lv: 1, rule: "chaque bloc tombe tout droit jusqu’en bas", fn: ARC.gravity, train: [["1000", "0010", "0000", "0000"], ["0220", "0000", "0200", "0000"]], test: ["3004", "0300", "0000", "0030"] },
  { lv: 2, rule: "chaque bloc s’étire vers la droite jusqu’au bord", fn: ARC.extendRight, train: [["00000", "01000", "00000"], ["20000", "00000", "00300"]], test: ["00400", "10000", "00020"] },
  { lv: 1, rule: "chaque case est agrandie en 2×2", fn: ARC.scale2, train: [["10", "02"], ["33", "04"]], test: ["06", "50"] },
  { lv: 2, rule: "virer les points isolés, garder les formes pleines", fn: ARC.denoise, train: [["11000", "11001", "00000", "10000"], ["00200", "02220", "00200", "20002"]], test: ["3000", "0033", "0033", "3000"] },
  { lv: 2, rule: "compléter pour que ce soit symétrique gauche-droite", fn: ARC.mirror, train: [["1000", "1100", "1110"], ["02000", "22000", "02000"]], test: ["30000", "03000", "00400"] },
  { lv: 2, rule: "peindre en jaune l’intérieur des formes fermées", fn: ARC.fill(4), train: [["1111", "1001", "1111"], ["02220", "02020", "02220", "00000"]], test: ["33333", "30003", "30303", "33333"] },
  { lv: 2, rule: "entourer chaque bloc de bleu clair en haut, en bas, à gauche et à droite", fn: ARC.outline(8), train: [["000", "010", "000"], ["00000", "02000", "00020", "00000"]], test: ["0000", "0030", "0000", "3000"] },
  { lv: 2, rule: "tout tourner de 90 degrés dans le sens horaire", fn: ARC.rot90, train: [["12", "00"], ["300", "300"]], test: ["440", "005", "000"] },
  { lv: 2, rule: "le rouge et le bleu échangent leur place", fn: ARC.swap(1, 2), train: [["1220", "0110"], ["2010", "1002"]], test: ["1122", "2001", "0210"] },
  { lv: 2, rule: "découper la forme et virer le vide autour", fn: ARC.crop, train: [["000000", "001100", "001000", "000000"], ["00000", "02220", "00020", "00000", "00000"]], test: ["000000", "000000", "030300", "033300", "000000"] },
  { lv: 2, rule: "ne garder que la plus grande forme", fn: ARC.keepLargest, train: [["1100", "1100", "0001"], ["20020", "22000", "00000", "00022"]], test: ["300033", "300003", "333000"] },
  { lv: 2, rule: "chaque bloc tire une diagonale vers le bas à droite", fn: ARC.diag, train: [["1000", "0000", "0000", "0000"], ["00200", "00000", "00000", "00000"]], test: ["0000", "3000", "0040", "0000", "0000"] },
  // object-level rules
  { lv: 3, rule: "pavage miroir : l’original, son miroir gauche-droite, son miroir haut-bas et sa rotation à 180 degrés, en 2×2", fn: ARC.tile, train: [["12", "00"], ["30", "04"]], test: ["102", "000"] },
  { lv: 3, rule: "deux blocs de même couleur sur une même ligne ou colonne sont reliés par un trait", fn: ARC.connect, train: [["100001", "000000", "000000", "200000", "000000", "200000"], ["030000", "000000", "000000", "030040", "000000", "000040"]], test: ["000000", "200002", "000000", "010000", "000000", "010003"] },
  { lv: 3, rule: "la plus grande forme devient rouge, les autres bleues", fn: ARC.sizeColor, train: [["55000", "55000", "00050", "00000", "50000"], ["000000", "055500", "000000", "500005", "500000"]], test: ["505000", "005000", "000555", "500005"] },
  { lv: 3, rule: "compléter pour une symétrie à la fois gauche-droite et haut-bas", fn: ARC.quad, train: [["1000", "0000", "0000", "0000"], ["02000", "20000", "00000", "00000", "00000"]], test: ["300000", "030000", "004000", "000000", "000000", "000000"] },
  { lv: 2, rule: "chaque ligne glisse à fond vers la droite, sans changer l’ordre", fn: ARC.slideRight, train: [["1000", "0200", "3000"], ["1020", "0300", "0000"]], test: ["30400", "00010", "20002"] },
  { lv: 2, rule: "sortir la couleur qui apparaît le plus", fn: ARC.majority, train: [["1120", "1000", "0020"], ["3440", "0404", "3000"], ["2210", "0112", "0110"]], test: ["6300", "3633", "0003"] },
  { lv: 3, rule: "la ligne grise coupe en deux ; les cases remplies des deux côtés deviennent rouges", fn: ARC.splitAnd,
    train: [SPLIT(["1100", "1000", "0011"], ["1010", "1100", "0001"]), SPLIT(["0110", "1111", "0000"], ["0100", "1001", "0110"]), SPLIT(["1001", "0110", "1001"], ["1111", "0000", "1001"])],
    test: SPLIT(["1110", "0101", "1011"], ["0111", "1101", "1001"]) },
  { lv: 3, rule: "couleur selon la taille : 1 case bleu, 2 rouge, 3 vert, 4+ jaune", fn: ARC.bySize,
    train: [["5005", "5000", "0055", "0000"], ["555000", "000050", "500050", "500000"], ["5555", "0000", "5050", "0005"]],
    test: ["5500500", "0000500", "5550000", "0000055", "5000055"] },
  { lv: 3, rule: "dans le cadre qui englobe la forme, le vide devient plein et le plein devient vide", fn: ARC.invertBox,
    train: [["00000", "01110", "01010", "01110", "00000"], ["000000", "022000", "020000", "000000"], ["000", "030", "303", "000"]],
    test: ["000000", "044400", "040040", "004400", "000000"] },
  { lv: 3, rule: "compter les formes, sortir une ligne d’autant de cases de la même couleur", fn: ARC.countBar,
    train: [["1001", "0000", "0100"], ["2200", "0000", "0022"], ["3030", "0000", "3003", "0300"]], test: ["4400", "0004", "0400", "0044"],
    decoys: ans => [[ans[0].slice(1)], [ans[0].concat(ans[0][0])], [ans[0].concat(ans[0][0], ans[0][0])]] },
  // combo rules: two transforms stacked
  { lv: 3, rule: "miroir gauche-droite, puis le bleu devient rouge", fn: ARC.then(ARC.flipH, ARC.recolor(1, 2)), train: [["1100", "0130"], ["3001", "1100"]], test: ["1030", "0011", "3100"] },
  { lv: 3, rule: "rotation de 90 degrés horaire, puis échange rouge/bleu", fn: ARC.then(ARC.rot90, ARC.swap(1, 2)), train: [["12", "00"], ["102", "000"]], test: ["120", "002", "100"] },
  { lv: 3, rule: "agrandir chaque case en 2×2, puis miroir gauche-droite", fn: ARC.then(ARC.scale2, ARC.flipH), train: [["10", "03"], ["22", "01"]], test: ["40", "12"] },
  { lv: 3, rule: "virer les points isolés, puis étirer le reste jusqu’au bord droit", fn: ARC.then(ARC.denoise, ARC.extendRight), train: [["00000", "11000", "11000", "00001"], ["20000", "00000", "03300", "03300"]], test: ["40000", "00000", "00220", "00220"] },
  { lv: 3, rule: "compléter la symétrie gauche-droite, puis peindre en jaune les zones fermées", fn: ARC.then(ARC.mirror, ARC.fill(4)), train: [["1110", "1000", "1110"], ["22200", "20000", "20000", "22200"]], test: ["3300", "3000", "3300"] },
];

const ARC_QUIPS = [
  "C’est exactement ça, ARC-AGI : des puzzles qu’un humain pige d’un coup d’œil et où l’IA se vautre.",
  "Pas de culture G ici, juste repérer le motif sur le moment. Un LLM ne peut pas s’en sortir en récitant.",
  "Comme dit l’équipe ARC : facile pour l’humain, dur pour l’IA, c’est là qu’on mesure vraiment l’intelligence.",
];
const ARC_MISS = ["Tu as trouvé une règle. Juste pas la bonne.", "Presque. Regarde encore les deux exemples.", "Ton « raisonnement visuel » vient de se ramasser, comme pas mal de modèles de pointe."];

// build one puzzle: opts are { grid, ok, r }
function nearMiss(ans, n) {
  const d = ans.map(r => r.slice()), H = d.length, W = d[0].length;
  const hot = [];
  for (let i = 0; i < H; i++) for (let j = 0; j < W; j++)
    if (d[i][j] || [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => d[i + a] && d[i + a][j + b])) hot.push([i, j]);
  const used = [...new Set(ans.flat().filter(v => v))];
  for (let k = 0; k < n; k++) {
    const [i, j] = pickOne(hot);
    d[i][j] = d[i][j] ? (Math.random() < .5 ? 0 : pickOne(used.filter(v => v !== d[i][j]).concat([0]))) : pickOne(used);
  }
  return d;
}

function makeArc(p) {
  const key = g => JSON.stringify(g);
  const test = G(p.test), ans = p.fn(test);
  const seen = new Set([key(ans)]), decoys = [];
  if (p.decoys) p.decoys(ans).forEach(d => { if (!seen.has(key(d))) { seen.add(key(d)); decoys.push(d); } });
  if (p.lv >= 3 && !p.decoys) for (let t = 0; decoys.length < 2 && t < 40; t++) {
    const d = nearMiss(ans, 1 + (t % 2));
    if (!seen.has(key(d))) { seen.add(key(d)); decoys.push(d); }
  }
  shuffle(ARC_DECOYS).forEach(f => {
    const d = f(test);
    if (decoys.length < 3 && !seen.has(key(d))) { seen.add(key(d)); decoys.push(d); }
  });
  while (decoys.length < 3) {
    const d = ans.map(r => r.slice());
    const i = Math.random() * d.length | 0, j = Math.random() * d[0].length | 0;
    d[i][j] = d[i][j] ? 0 : pickOne([1, 2, 3, 4, 6]);
    if (!seen.has(key(d))) { seen.add(key(d)); decoys.push(d); }
  }
  return {
    lv: p.lv,
    q: "Trouve la règle : la gauche devient la droite. Et pour celle du bas, ça donne quoi ?",
    issue: `S’est planté sur un puzzle ARC (${p.rule})`,
    arc: { train: p.train.map(t => [G(t), p.fn(G(t))]), test },
    opts: [{ grid: ans, ok: 1, r: `Bonne réponse. La règle : ${p.rule}. ${pickOne(ARC_QUIPS)}` },
      ...decoys.map(d => ({ grid: d, r: `La règle : ${p.rule}. ${pickOne(ARC_MISS)}` }))],
  };
}

function gridHTML(g, cls, cell) {
  // 同一组网格共用一个格子尺寸：宽度随列数变，格子大小一致，数量才好比较
  const cols = g[0].length, style = cell ? `width:${cols * cell + (cols - 1) * 2 + 8}px;` : "";
  return `<div class="arc-grid ${cls || ""}" style="${style}grid-template-columns:repeat(${cols},1fr);aspect-ratio:${cols}/${g.length}">${g.flat().map(v => `<i style="background:${ARC_COLORS[v]}"></i>`).join("")}</div>`;
}
// 一组网格里最宽的那个也要放得下 maxW
function arcCell(grids, maxW, big) { const m = Math.max(...grids.map(g => g[0].length)); return Math.max(8, Math.min(big || 20, Math.floor((maxW - 8) / m) - 2)); }
POOLS.arc = ARC_PUZZLES;
