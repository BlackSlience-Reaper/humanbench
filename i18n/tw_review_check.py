"""检查审校条目：python3 i18n/tw_review_check.py <部分名> [tw|hk]  —— 每条的原文片段在繁体结果里出现几次、会落在哪些文件"""
import os, sys, json
HERE = os.path.dirname(os.path.abspath(__file__))
part = sys.argv[1]; T = os.path.join(HERE, sys.argv[2] if len(sys.argv) > 2 else "tw")
items = json.load(open(os.path.join(T, "_review", part + ".json"), encoding="utf-8"))
texts = {f: open(os.path.join(T, f), encoding="utf-8").read() for f in ["bank.js", "chats.js", "arc.js", "lv4.js", "ui.json"]}
bad = 0
for it in items:
    a, b = it[0], it[1]
    if any(x in a + b for x in ['"', '`', '${', '\n']): bad += 1; print("✗ 含引号/反引号/${/换行：", a); continue
    hits = {f: t.count(a) for f, t in texts.items() if a in t}
    if not hits: bad += 1; print("✗ 不存在：", a)
    else: print(f"✓ {a} → {b}  ", " ".join(f"{f}×{n}" for f, n in hits.items()))
print(f"{len(items)} 条，问题 {bad} 条")
