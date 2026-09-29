// 用法：node qa/fr_part_check.cjs <name>   比较 i18n/fr/_parts/en_<name>.js 与 fr_<name>.js 的代码骨架（字符串内容忽略）
const fs = require('fs'), path = require('path');
const P = path.join(__dirname, '..', 'i18n', 'fr', '_parts'), n = process.argv[2];
function skel(src) {
  let out = '', i = 0, stack = [];
  const lines = [];
  function str(q) { // 从 i（引号后）读到字符串结束
    while (i < src.length) {
      const c = src[i];
      if (c === '\\') { i += 2; continue; }
      if (c === '\n' && q !== '`') throw new Error('unterminated string near line ' + (src.slice(0, i).split('\n').length));
      if (c === q) { i++; return; }
      if (q === '`' && c === '$' && src[i + 1] === '{') { i += 2; out += '${'; code('}'); out += '}'; continue; }
      if (c === '\n') out += '\n';
      i++;
    }
  }
  function code(end) {
    let depth = 0;
    while (i < src.length) {
      const c = src[i];
      if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
      if (c === '/' && src[i + 1] === '*') { const e = src.indexOf('*/', i + 2); out += '\n'.repeat((src.slice(i, e).match(/\n/g) || []).length); i = e + 2; continue; }
      if (c === '/' && /[=(,:\[!&|?]\s*$/.test(src.slice(Math.max(0, i - 20), i))) { // 正则字面量
        let j = i + 1, cls = false; while (j < src.length && (cls || src[j] !== '/')) { if (src[j] === '\\') j++; else if (src[j] === '[') cls = true; else if (src[j] === ']') cls = false; j++; }
        out += src.slice(i, j + 1); i = j + 1; continue; }
      if (c === '"' || c === "'" || c === '`') { out += c + c; i++; str(c); continue; }
      if (end && c === '{') depth++;
      if (end && c === '}') { if (depth === 0) { i++; return; } depth--; }
      out += c; i++;
    }
  }
  code(null);
  return out.replace(/[ \t]+/g, ' ');
}
const a = skel(fs.readFileSync(path.join(P, `en_${n}.js`), 'utf8')), b = skel(fs.readFileSync(path.join(P, `fr_${n}.js`), 'utf8'));
const A = a.split('\n'), B = b.split('\n');
let bad = 0;
if (A.length !== B.length) console.log(`行数不同：en ${A.length} vs fr ${B.length}`);
for (let k = 0; k < Math.max(A.length, B.length) && bad < 15; k++) if (A[k] !== B[k]) { bad++; console.log(`第 ${k + 1} 行骨架不同：\n  en: ${A[k]}\n  fr: ${B[k]}`); }
const cjk = (fs.readFileSync(path.join(P, `fr_${n}.js`), 'utf8').match(/[一-鿿぀-ヿ가-힯]/g) || []).length;
console.log(bad || A.length !== B.length ? `骨架问题 ${bad}+ 处` : '骨架一致', `· 中日韩字符 ${cjk} 个（E() 第三个参数里的 id 如 "豆包"、"GPT-5 系" 是允许的）`);
