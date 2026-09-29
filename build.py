"""把 index.html + bank.js + chats.js + app.js 打包成单文件，供 Artifact 在线发布。"""
import os
root = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(root, f), encoding="utf-8").read()
h = rd("index.html")
css = h[h.index("<style>"):h.index("</style>") + 8].replace(
    "</style>", "@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}\n</style>")
fonts = h[h.index('<link rel="preconnect"'):h.index("<style>")].strip()
js = "\n".join(f"<script>\n{rd(f)}\n</script>" for f in ["bank.js", "chats.js", "arc.js", "lv4.js", "app.js"])
out = f"""<title>你是几B的模型？</title>
{fonts}
{css}
<div class="bg-stickers" id="bgs"></div>
<div id="app"></div>
<canvas id="confetti"></canvas>
{js}
"""
os.makedirs(os.path.join(root, "dist"), exist_ok=True)
open(os.path.join(root, "dist", "humanbench.html"), "w", encoding="utf-8").write(out)
print("dist/humanbench.html", len(out), "bytes")

# 独立部署版（humanbench.ybuild.ai）：完整 HTML 头 + 分享卡片 + 分享链接指向正式域名
SITE = "https://humanbench.ybuild.ai"
head = f"""<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>你是几B的模型？｜HumanBench</title>
<meta name="description" content="AI 翻过的车，这次换你来开。76 道题测出你的参数量、MoE 还是 Dense、AI 味和模型人格。by @Alex_ybuild">
<meta property="og:type" content="website">
<meta property="og:url" content="{SITE}/">
<meta property="og:title" content="你是几B的模型？">
<meta property="og:description" content="AI 翻过的车，这次换你来开。测出你的参数量、MoE 还是 Dense、AI 味和模型人格。">
<meta property="og:image" content="{SITE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Alex_ybuild">
<meta name="twitter:title" content="你是几B的模型？">
<meta name="twitter:description" content="AI 翻过的车，这次换你来开。测出你的参数量、MoE 还是 Dense、AI 味和模型人格。">
<meta name="twitter:image" content="{SITE}/og.png">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23141414'/%3E%3Ctext x='10' y='44' font-family='monospace' font-weight='900' font-size='34' fill='%23FFE14D'%3Eh_%3C/text%3E%3C/svg%3E">
"""
# 微信不读 og 标签：给它 PNG 图标、schema.org 的 itemprop 和页面里第一张大图
WX_ICONS = '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">\n'
WX_IMG = '<div style="position:absolute;left:-9999px;top:0;width:1px;height:1px;overflow:hidden" aria-hidden="true"><img src="/share.jpg" width="600" height="600" alt=""></div>\n'
def itemprop(title, desc): return f'<meta itemprop="name" content="{title}">\n<meta itemprop="description" content="{desc}">\n<meta itemprop="image" content="{SITE}/share.jpg">\n'
head = head.replace('<link rel="icon"', itemprop("你是几B的模型？｜HumanBench", "AI 翻过的车，这次换你来开。测出你的参数量、MoE 还是 Dense、AI 味和模型人格。") + WX_ICONS + '<link rel="icon"', 1)
body = out.replace('<title>你是几B的模型？</title>\n', '')
body = body.replace('const SHARE_URL = "https://claude.ai/artifact/TDzWpdNV1MZHHTH8MEEKsC";', f'const SHARE_URL = "{SITE}/";')
body = body.replace('const STANDALONE = false;', 'const STANDALONE = true;')
i = body.index('<style>'); j = body.index('</style>') + 8
standalone = head + body[:j] + "\n</head>\n<body>\n" + WX_IMG + body[j:] + "\n</body>\n</html>\n"
os.makedirs(os.path.join(root, "deploy", "public"), exist_ok=True)
open(os.path.join(root, "deploy", "public", "index.html"), "w", encoding="utf-8").write(standalone)
print("deploy/public/index.html", len(standalone), "bytes")

# ---------- 多语言版：/tw/ /hk/ /en/ /ja/ /es/ /ko/ /fr/ ----------
import json, sys, re
sys.path.insert(0, os.path.join(root, "i18n"))
import ui_tool
LANGS = json.load(open(os.path.join(root, "i18n", "langs.json"), encoding="utf-8"))
# 繁体版（tw 台湾 / hk 香港）每次从简体自动转换（+ 修正表），简体改了题繁体自动跟上
import tw_sync; tw_sync.sync_all([l for l in LANGS if l not in os.environ.get("NOSYNC", "").split(",")])  # NOSYNC=hk 可跳过某个版本的重新生成
# 翻译文件还没齐的语言先不上（语言条里也不出现）
# 正式站去掉 JS / CSS 注释（源码注释里有线上数据、隐藏款条件等内部信息；页面代码会被人直接扒走），顺便压缩空白；变量名不改
def _local(k):
    try: return json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "local.json"))).get(k)
    except Exception: return None
import shutil
ESBUILD = os.environ.get("ESBUILD") or _local("esbuild") or shutil.which("esbuild") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "node_modules", ".bin", "esbuild")
def _esb(code, loader):
    if os.environ.get("NOSTRIP") or not os.path.exists(ESBUILD):
        if not os.environ.get("NOSTRIP"): print("（没找到 esbuild，正式站不去注释；npm i -D esbuild 或在 local.json 写路径）") if not getattr(_esb, "warned", 0) else None; _esb.warned = 1
        return code
    import subprocess
    r = subprocess.run([ESBUILD, f"--loader={loader}", "--minify-whitespace", "--legal-comments=none", "--charset=utf8", "--log-level=error"], input=code.encode(), capture_output=True)
    if r.returncode:
        raise SystemExit("esbuild 失败：" + r.stderr.decode()[:500])
    return r.stdout.decode()
def strip_comments(page):
    page = re.sub(r"<script>\n?([\s\S]*?)</script>", lambda m: "<script>" + _esb(m.group(1), "js") + "</script>", page)
    page = re.sub(r"<style>([\s\S]*?)</style>", lambda m: "<style>" + _esb(m.group(1), "css") + "</style>", page)
    return re.sub(r"<!--[\s\S]*?-->", "", page)

LANGS = {l: c for l, c in LANGS.items() if all(os.path.exists(os.path.join(root, "i18n", l, f)) for f in ["bank.js", "chats.js", "arc.js", "ui.json"])}
# 语言条和网址用的“语言代码”：繁体两个地区版本共用 hant（按地区挑用词在 worker 里做）
code_of = lambda l: LANGS[l].get("code", l) if l in LANGS else l
ALL = ["zh"] + list(dict.fromkeys(code_of(l) for l in LANGS))
HREFLANG = {"zh": "zh-Hans", "hant": "zh-Hant"}

def lang_switch(cur):
    names = {"zh": "简体", "hant": "繁體", "en": "EN", "ja": "日本語", "es": "ES", "ko": "한국어", "fr": "FR"}
    return "".join(f'<a href="/{"" if l == "zh" else l + "/"}" data-l="{l}" class="{"on" if l == cur else ""}">{names[l]}</a>' for l in ALL)

def build_lang(lang, cfg):
    d = os.path.join(root, "i18n", lang)
    code, variant = cfg.get("code", lang), cfg.get("variant", "")
    need = ["bank.js", "chats.js", "arc.js", "ui.json"]
    if not all(os.path.exists(os.path.join(d, f)) for f in need):
        print(f"[{lang}] 跳过：翻译文件还没齐", [f for f in need if not os.path.exists(os.path.join(d, f))]); return
    table = json.load(open(os.path.join(d, "ui.json"), encoding="utf-8"))
    if os.path.exists(os.path.join(d, "ui_extra.json")):
        table.update(json.load(open(os.path.join(d, "ui_extra.json"), encoding="utf-8")))
    app = ui_tool.apply(rd("app.js"), table)
    app = app.replace('const STANDALONE = false;', 'const STANDALONE = true;')
    app = app.replace('const LOCALE = "zh-CN";', f'const LOCALE = "{cfg["locale"]}";')
    app = app.replace('const LANG = "zh";', f'const LANG = "{code}";')
    app = app.replace('const VARIANT = "";', f'const VARIANT = "{variant}";')
    app = app.replace('const SHARE_URL = "https://claude.ai/artifact/TDzWpdNV1MZHHTH8MEEKsC";', f'const SHARE_URL = "{SITE}/{code}/";')
    hero = cfg["hero"].replace("'", "\\'")
    app = re.sub(r"const HERO_HTML = '.*?';", lambda m: f"const HERO_HTML = '{hero}';", app)
    idn = cfg.get("id_name", {})
    app = app.replace("const ID_NAME = {};", "const ID_NAME = " + json.dumps(idn, ensure_ascii=False) + ";")
    js = "\n".join(f"<script>\n{rd(os.path.join('i18n', lang, f))}\n</script>" for f in ["bank.js", "chats.js", "arc.js", "lv4.js"] if os.path.exists(os.path.join(d, f))) + f"\n<script>\n{app}\n</script>"
    css_l = css.replace("</style>", f":root{{--fun:{cfg['fun']};--sans:{cfg['sans']}}}\n</style>")
    fonts_l = f'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?{cfg["fonts"]}&display=swap" rel="stylesheet">'
    url = f"{SITE}/{code}/"
    icon = itemprop(cfg['title'], cfg['desc']) + WX_ICONS + head[head.index('<link rel="icon" href='):]
    head_l = f"""<!doctype html>
<html lang="{cfg['html_lang']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{cfg['title']}</title>
<meta name="description" content="{cfg['desc']}">
<meta property="og:type" content="website">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{cfg['og_title']}">
<meta property="og:description" content="{cfg['desc']}">
<meta property="og:image" content="{SITE}/og-{code}.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@Alex_ybuild">
<meta name="twitter:title" content="{cfg['og_title']}">
<meta name="twitter:description" content="{cfg['desc']}">
<meta name="twitter:image" content="{SITE}/og-{code}.png">
""" + "".join(f'<link rel="alternate" hreflang="{HREFLANG.get(l, l)}" href="{SITE}/{"" if l == "zh" else l + "/"}">\n' for l in ALL) + icon
    page = head_l + fonts_l + "\n" + css_l + "\n</head>\n<body>\n" + WX_IMG + '<div class="bg-stickers" id="bgs"></div>\n<div id="app"></div>\n<canvas id="confetti"></canvas>\n' + js.replace("__LANG_SWITCH__", lang_switch(code)) + "\n</body>\n</html>\n"
    # 繁体地区版放在 /_hant/<tw|hk>/，由 worker 在 /hant/ 下按访客地区挑一个返回
    page = strip_comments(page)
    rel = os.path.join("_" + code, variant) if variant else lang
    os.makedirs(os.path.join(root, "deploy", "public", rel), exist_ok=True)
    open(os.path.join(root, "deploy", "public", rel, "index.html"), "w", encoding="utf-8").write(page)
    lang = rel
    left = re.findall(r"[\u4e00-\u9fff]", re.sub(r"//.*|/\*[\s\S]*?\*/", "", app)) if code not in ("ja", "hant") else []
    print(f"deploy/public/{lang}/index.html", len(page), "bytes", f"(界面残留中文 {len(left)} 字)" if left else "")

# 中文正式站也要语言切换条
zh_page = open(os.path.join(root, "deploy", "public", "index.html"), encoding="utf-8").read().replace("__LANG_SWITCH__", lang_switch("zh"))
zh_page = zh_page.replace("<title>", "".join(f'<link rel="alternate" hreflang="{HREFLANG.get(l, l)}" href="{SITE}/{"" if l == "zh" else l + "/"}">\n' for l in ALL) + "<title>", 1)
open(os.path.join(root, "deploy", "public", "index.html"), "w", encoding="utf-8").write(strip_comments(zh_page))
for lang, cfg in LANGS.items():
    build_lang(lang, cfg)
