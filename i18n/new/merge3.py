"""第三轮扩题合并：python3 i18n/new/merge3.py <lang>
把 i18n/new/<lang>3_*.js 追加进题库（zh 写根目录的 bank.js / chats.js / lv4.js，其他语言写 i18n/<lang>/ 下同名文件）。
- 能力题、新图表、新界面 → lv4.js 末尾；名场面 → chats.js 末尾；人格小对话 / AI 味现场 / 随手题 → bank.js 末尾
- 每个源文件包在一个立即执行函数里（const/var 都不外泄；qa 脚本会把 const 换成 var，用块作用域会重复追加），按 ORDER 固定顺序追加，各语言顺序一致，题目下标才对得上
- 写在 /* ADD3 begin */ … /* ADD3 end */ 之间，重复运行会整段替换
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
NEW = os.path.join(ROOT, "i18n", "new")
ORDER = ["traps", "knowledge", "dense_hle", "sci_front_gdp", "dev", "chart", "osworld", "chats_a", "chats_b", "chats_c", "persona", "vibes"]
TARGET = {"chats_a": "chats.js", "chats_b": "chats.js", "chats_c": "chats.js", "persona": "bank.js", "vibes": "bank.js"}
TAIL = {
    "lv4.js": 'if (typeof ADD3_CHARTS !== "undefined") Object.assign(CHARTS, ADD3_CHARTS);\n'
              'if (typeof ADD3_UIS !== "undefined") Object.assign(UIS, ADD3_UIS);\n'
              'if (typeof ADD3 !== "undefined") for (const k in ADD3) POOLS[k].push(...ADD3[k]);',
    "chats.js": 'CHATS.push(...ADD3_CHATS);',
    "bank.js": 'if (typeof ADD3_PERSONA !== "undefined") for (const k in ADD3_PERSONA) PERSONA_Q[k].push(...ADD3_PERSONA[k]);\n'
               'if (typeof ADD3_SLOP !== "undefined") SLOP_VIBES.push(...ADD3_SLOP);\n'
               'if (typeof ADD3_VIBES !== "undefined") VIBES.push(...ADD3_VIBES);',
}
BEGIN, END = "/* ADD3 begin */", "/* ADD3 end */"


def main(lang):
    base = ROOT if lang == "zh" else os.path.join(ROOT, "i18n", lang)
    blocks = {}
    for name in ORDER:
        f = os.path.join(NEW, f"{lang}3_{name}.js")
        if not os.path.exists(f):
            print("缺", os.path.basename(f)); continue
        blocks.setdefault(TARGET.get(name, "lv4.js"), []).append((name, open(f, encoding="utf8").read().strip()))
    for target, items in blocks.items():
        path = os.path.join(base, target)
        s = open(path, encoding="utf8").read()
        s = re.sub(r"\n*" + re.escape(BEGIN) + r".*?" + re.escape(END) + r"\n?", "\n", s, flags=re.S).rstrip() + "\n"
        tail = TAIL[target]
        body = "\n".join(f"(() => {{ // 第三轮扩题（2026-09-28）：{name}\n{src}\n{tail}\n}})();" for name, src in items)
        s += f"\n{BEGIN}\n{body}\n{END}\n"
        open(path, "w", encoding="utf8").write(s)
        print(target, "←", ", ".join(n for n, _ in items))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "zh")
