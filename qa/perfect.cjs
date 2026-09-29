const fs = require('fs');
eval(fs.readFileSync(__dirname + '/discrim.cjs', 'utf8').split('function evaluate')[0].replace(/^const /gm, 'var ').replace(/^function play/m, 'var play = function play'));
for (const A of [3, 2, 1.5, 1, .5]) {
  const P = []; for (let i = 0; i < 3000; i++) P.push(play(A, RUN_PLAN));
  const d = {}; P.forEach(r => { const k = r.theta >= .95 ? '∞?' : LADDER[r.idx]; d[k] = (d[k] || 0) + 1; });
  console.log('A=' + A, 'theta avg', (P.reduce((a, r) => a + r.theta, 0) / P.length).toFixed(3), JSON.stringify(Object.fromEntries(Object.entries(d).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => [k, (v / 30).toFixed(0) + '%']))));
}
