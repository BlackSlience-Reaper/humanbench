/* =========================================================
   ARC-AGI 人类版：看两组示例找规律，选出测试题的输出
   - 输出由规则函数算出来，不手写，保证正确
   - 干扰项：把其它规则套在测试输入上，再不够就随机改一两格
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
// 干扰项在 ARC_DECOYS_LIST 里按需取，避免 ARC 对象还没定义完就引用

const ARC_DECOYS = [g => g, ARC.flipH, ARC.flipV, ARC.rot90, ARC.gravity, ARC.extendRight, ARC.denoise, ARC.mirror, ARC.fill(4), ARC.outline(8), ARC.swap(1, 2), ARC.recolor(1, 2), ARC.diag, ARC.quad, ARC.connect];

const ARC_PUZZLES = [
  { lv: 1, rule: "左右镜像翻转", fn: ARC.flipH, train: [["1100", "1000", "1000"], ["0220", "0020", "2220"]], test: ["3000", "3300", "0330"] },
  { lv: 1, rule: "上下翻转", fn: ARC.flipV, train: [["444", "000", "000"], ["010", "110", "000"]], test: ["202", "220", "000"] },
  { lv: 1, rule: "蓝色全部变成红色，其它颜色不动", fn: ARC.recolor(1, 2), train: [["1010", "0110"], ["3111", "0013"]], test: ["1301", "1130", "0011"] },
  { lv: 1, rule: "所有方块往下掉，掉到底", fn: ARC.gravity, train: [["1000", "0010", "0000", "0000"], ["0220", "0000", "0200", "0000"]], test: ["3004", "0300", "0000", "0030"] },
  { lv: 2, rule: "每个方块向右延伸，一直到边", fn: ARC.extendRight, train: [["00000", "01000", "00000"], ["20000", "00000", "00300"]], test: ["00400", "10000", "00020"] },
  { lv: 1, rule: "每个格子放大成 2×2", fn: ARC.scale2, train: [["10", "02"], ["33", "04"]], test: ["06", "50"] },
  { lv: 2, rule: "去掉孤零零的杂点，保留成块的图形", fn: ARC.denoise, train: [["11000", "11001", "00000", "10000"], ["00200", "02220", "00200", "20002"]], test: ["3000", "0033", "0033", "3000"] },
  { lv: 2, rule: "补全成左右对称", fn: ARC.mirror, train: [["1000", "1100", "1110"], ["02000", "22000", "02000"]], test: ["30000", "03000", "00400"] },
  { lv: 2, rule: "把封闭图形的内部涂成黄色", fn: ARC.fill(4), train: [["1111", "1001", "1111"], ["02220", "02020", "02220", "00000"]], test: ["33333", "30003", "30303", "33333"] },
  { lv: 2, rule: "给每个方块的上下左右描一圈浅蓝色", fn: ARC.outline(8), train: [["000", "010", "000"], ["00000", "02000", "00020", "00000"]], test: ["0000", "0030", "0000", "3000"] },
  { lv: 2, rule: "整体顺时针旋转 90 度", fn: ARC.rot90, train: [["12", "00"], ["300", "300"]], test: ["440", "005", "000"] },
  { lv: 2, rule: "红色和蓝色互换", fn: ARC.swap(1, 2), train: [["1220", "0110"], ["2010", "1002"]], test: ["1122", "2001", "0210"] },
  { lv: 2, rule: "把图形裁出来，去掉周围的空白", fn: ARC.crop, train: [["000000", "001100", "001000", "000000"], ["00000", "02220", "00020", "00000", "00000"]], test: ["000000", "000000", "030300", "033300", "000000"] },
  { lv: 2, rule: "只保留最大的那块图形", fn: ARC.keepLargest, train: [["1100", "1100", "0001"], ["20020", "22000", "00000", "00022"]], test: ["300033", "300003", "333000"] },
  { lv: 2, rule: "每个方块往右下角画一条斜线", fn: ARC.diag, train: [["1000", "0000", "0000", "0000"], ["00200", "00000", "00000", "00000"]], test: ["0000", "3000", "0040", "0000", "0000"] },
  // 物体级规则
  { lv: 3, rule: "镜像平铺：原图、左右翻、上下翻、旋转 180 度拼成 2×2", fn: ARC.tile, train: [["12", "00"], ["30", "04"]], test: ["102", "000"] },
  { lv: 3, rule: "同一行或同一列里，两个同色方块之间连成线", fn: ARC.connect, train: [["100001", "000000", "000000", "200000", "000000", "200000"], ["030000", "000000", "000000", "030040", "000000", "000040"]], test: ["000000", "200002", "000000", "010000", "000000", "010003"] },
  { lv: 3, rule: "最大的那块涂红，其余的涂蓝", fn: ARC.sizeColor, train: [["55000", "55000", "00050", "00000", "50000"], ["000000", "055500", "000000", "500005", "500000"]], test: ["505000", "005000", "000555", "500005"] },
  { lv: 3, rule: "补全成上下左右都对称", fn: ARC.quad, train: [["1000", "0000", "0000", "0000"], ["02000", "20000", "00000", "00000", "00000"]], test: ["300000", "030000", "004000", "000000", "000000", "000000"] },
  { lv: 2, rule: "每一行的方块都滑到最右边，顺序不变", fn: ARC.slideRight, train: [["1000", "0200", "3000"], ["1020", "0300", "0000"]], test: ["30400", "00010", "20002"] },
  { lv: 2, rule: "输出出现次数最多的那种颜色", fn: ARC.majority, train: [["1120", "1000", "0020"], ["3440", "0404", "3000"], ["2210", "0112", "0110"]], test: ["6300", "3633", "0003"] },
  { lv: 3, rule: "灰线把图分成左右两半，两边都有方块的位置涂红", fn: ARC.splitAnd,
    train: [SPLIT(["1100", "1000", "0011"], ["1010", "1100", "0001"]), SPLIT(["0110", "1111", "0000"], ["0100", "1001", "0110"]), SPLIT(["1001", "0110", "1001"], ["1111", "0000", "1001"])],
    test: SPLIT(["1110", "0101", "1011"], ["0111", "1101", "1001"]) },
  { lv: 3, rule: "按大小上色：1 格蓝、2 格红、3 格绿、4 格以上黄", fn: ARC.bySize,
    train: [["5005", "5000", "0055", "0000"], ["555000", "000050", "500050", "500000"], ["5555", "0000", "5050", "0005"]],
    test: ["5500500", "0000500", "5550000", "0000055", "5000055"] },
  { lv: 3, rule: "在图形的外框范围内，空的变有色、有色的变空", fn: ARC.invertBox,
    train: [["00000", "01110", "01010", "01110", "00000"], ["000000", "022000", "020000", "000000"], ["000", "030", "303", "000"]],
    test: ["000000", "044400", "040040", "004400", "000000"] },
  { lv: 3, rule: "数一数有几块图形，输出一排同样颜色、同样数量的格子", fn: ARC.countBar,
    train: [["1001", "0000", "0100"], ["2200", "0000", "0022"], ["3030", "0000", "3003", "0300"]], test: ["4400", "0004", "0400", "0044"],
    decoys: ans => [[ans[0].slice(1)], [ans[0].concat(ans[0][0])], [ans[0].concat(ans[0][0], ans[0][0])]] },
  // 组合规则：两步变换叠在一起
  { lv: 3, rule: "先左右翻转，再把蓝色变成红色", fn: ARC.then(ARC.flipH, ARC.recolor(1, 2)), train: [["1100", "0130"], ["3001", "1100"]], test: ["1030", "0011", "3100"] },
  { lv: 3, rule: "顺时针转 90 度，同时红蓝互换", fn: ARC.then(ARC.rot90, ARC.swap(1, 2)), train: [["12", "00"], ["102", "000"]], test: ["120", "002", "100"] },
  { lv: 3, rule: "每格放大成 2×2，再左右翻转", fn: ARC.then(ARC.scale2, ARC.flipH), train: [["10", "03"], ["22", "01"]], test: ["40", "12"] },
  { lv: 3, rule: "去掉杂点，剩下的方块向右延伸到边", fn: ARC.then(ARC.denoise, ARC.extendRight), train: [["00000", "11000", "11000", "00001"], ["20000", "00000", "03300", "03300"]], test: ["40000", "00000", "00220", "00220"] },
  { lv: 3, rule: "先补全成左右对称，再把封闭区域涂黄", fn: ARC.then(ARC.mirror, ARC.fill(4)), train: [["1110", "1000", "1110"], ["22200", "20000", "20000", "22200"]], test: ["3300", "3000", "3300"] },
];

const ARC_QUIPS = [
  "ARC-AGI 就是这种题：专门设计成人类一眼能看出，AI 却很难做对。",
  "这类题考的不是知识，是现场找规律。大模型背不了答案。",
  "ARC 的作者说过：人类觉得简单、AI 觉得难的题，才最能测出智能。",
];
const ARC_MISS = ["你看出了一个规律，但不是这个规律。", "差一点。再看一眼两组示例。", "这次你的“视觉推理”和很多大模型一样翻车了。"];

// 生成一道题：opts 为 { grid, ok, r }
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
    q: "找规律：左边变成右边。最下面那道题的答案是？",
    issue: `ARC 找规律翻车（${p.rule}）`,
    arc: { train: p.train.map(t => [G(t), p.fn(G(t))]), test },
    opts: [{ grid: ans, ok: 1, r: `对。规律是：${p.rule}。${pickOne(ARC_QUIPS)}` },
      ...decoys.map(d => ({ grid: d, r: `规律是：${p.rule}。${pickOne(ARC_MISS)}` }))],
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
