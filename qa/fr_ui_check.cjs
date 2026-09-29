// 核对 i18n/fr/ui.json、ui_extra.json 与英文版键一致、${...} 占位符和 HTML 标签一致
const fs = require('fs'), path = require('path'), D = path.join(__dirname, '..', 'i18n');
let bad = 0;
for (const f of ['ui.json', 'ui_extra.json']) {
  const en = JSON.parse(fs.readFileSync(path.join(D, 'en', f), 'utf8')), fr = JSON.parse(fs.readFileSync(path.join(D, 'fr', f), 'utf8'));
  const sig = s => [...(s.match(/\$\{[^}]*\}|<\/?[a-z][^>]*>/g) || [])].sort().join('|');
  for (const k of Object.keys(en)) {
    if (!(k in fr)) { bad++; console.log(f, '缺键', k); continue; }
    if (sig(en[k]) !== sig(fr[k])) { bad++; console.log(f, '占位符/标签不同', k, '\n  en:', en[k], '\n  fr:', fr[k]); }
    if (/[一-鿿]/.test(fr[k])) { bad++; console.log(f, '残留中文', k); }
  }
  for (const k of Object.keys(fr)) if (!(k in en)) { bad++; console.log(f, '多余键', k); }
}
console.log(bad ? `问题 ${bad} 个` : 'OK');
