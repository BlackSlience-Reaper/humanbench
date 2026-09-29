# 把 part1-3-zh.md 合成一个海报风阅读页：python3 retro/build_retro.py
# 输出 retro/site/index.html（完整页面，可直接部署到 /retro/）和 retro/site/artifact.html（Artifact 预览用，无文档骨架）
import html, json, os, re, shutil

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "site")
G = {"pfx": "img/"}
# 每种语言：路径、页面文字、字体。中文在 /retro/，其他在 /retro/<lang>/
L = {
  "zh": dict(dir="", html="zh-CN", name="中文", title="你是几B的模型·复盘",
    h1='你是<span class="hl">几B</span>的模型·复盘',
    lead="几百粉丝、零投放，3 天约 4 万人来测。从 4 条消息的原型，到 237 条消息做成产品，再到按数据改了几十个版本：一次人和 AI 协作整活的完整记录。",
    desc="几百粉丝、零投放，3 天 4 万人来测「你是几B的模型」：一次人和 AI 协作整活的完整复盘。",
    mast="HUMANBENCH · 复盘 · 2026.09", nav="篇目", ptag="PART {n} / 3 · {p}篇",
    parts=[("上", "从 4 条消息到上线"), ("中", "上线后的 36 小时"), ("下", "传播、数据和开源")],
    strip=r"^# 你是几B的模型·复盘（.）：", lic="代码 MIT · 内容 CC BY-NC",
    fonts="family=ZCOOL+KuaiLe&family=Lilita+One&family=Noto+Sans+SC:wght@400;700;900", css=""),
  "en": dict(dir="en/", html="en", name="English", title="How Many B Are You: The Retro",
    h1='How many <span class="hl">B</span> are you? The retro',
    lead="A few hundred followers, zero ad spend, ~40k visitors in 3 days. From a 4-message prototype to a product built in 237 messages, then dozens of data-driven releases: the full story of a meme quiz built with AI.",
    desc="A few hundred followers, zero ads, 40k people in 3 days: the full retrospective of a meme quiz built together with AI.",
    mast="HUMANBENCH · RETRO · 2026.09", nav="Parts", ptag="PART {n} / 3",
    parts=[("1", "4 messages to launch"), ("2", "The 36 hours after launch"), ("3", "Virality, data, open source")],
    strip=r"^# [^:：]*?Part \d[^:：]*[:：]\s*", lic="Code MIT · Content CC BY-NC",
    fonts="family=Lilita+One&family=Nunito:wght@600;800;900",
    css=':root{--fun:"Lilita One","Nunito",system-ui,sans-serif;--sans:"Nunito",system-ui,sans-serif}.hero h1,h2,h3{letter-spacing:.01em}.toc b{font-size:28px}'),
  "ja": dict(dir="ja/", html="ja", name="日本語", title="あなたは何Bのモデル 振り返り",
    h1='あなたは<span class="hl">何B</span>のモデル？振り返り',
    lead="フォロワー数百人、広告ゼロで、3 日間に約 4 万人が遊んだ診断サイト。4 通のメッセージから生まれたプロトタイプを 237 通の対話で製品にし、データを見ながら数十回アップデートした全記録です。",
    desc="フォロワー数百人・広告ゼロで 3 日 4 万人。AI と一緒に作ったネタ診断の振り返り全 3 編。",
    mast="HUMANBENCH · 振り返り · 2026.09", nav="目次", ptag="PART {n} / 3 · {p}",
    parts=[("前編", "4 通のメッセージから公開まで"), ("中編", "公開後の 36 時間"), ("後編", "拡散・データ・オープンソース")],
    strip=r"^# [^：:]*?[（(](?:前|中|後)編[）)][：:]\s*", lic="コード MIT · コンテンツ CC BY-NC",
    fonts="family=Mochiy+Pop+One&family=Lilita+One&family=Noto+Sans+JP:wght@400;700;900",
    css=':root{--fun:"Mochiy Pop One","Noto Sans JP",sans-serif;--sans:"Noto Sans JP","Hiragino Sans",system-ui,sans-serif}.toc b{font-size:26px}'),
  "ko": dict(dir="ko/", html="ko", name="한국어", title="너는 몇B짜리 모델 회고",
    h1='너는 <span class="hl">몇B짜리</span> 모델? 회고',
    lead="팔로워 수백 명, 광고 0원으로 3일 만에 약 4만 명이 찾은 테스트. 메시지 4개짜리 프로토타입을 237개의 대화로 제품으로 만들고, 데이터를 보며 수십 번 고친 전체 기록입니다.",
    desc="팔로워 수백 명, 광고 0원, 3일 만에 4만 명. AI와 함께 만든 밈 테스트의 3부작 회고.",
    mast="HUMANBENCH · 회고 · 2026.09", nav="목차", ptag="PART {n} / 3 · {p}",
    parts=[("1부", "메시지 4개에서 출시까지"), ("2부", "출시 후 36시간"), ("3부", "확산, 데이터, 오픈소스")],
    strip=r"^# .*?회고 \d부[:：]\s*", lic="코드 MIT · 콘텐츠 CC BY-NC",
    fonts="family=Jua&family=Lilita+One&family=Noto+Sans+KR:wght@400;700;900",
    css=':root{--fun:"Jua","Noto Sans KR",sans-serif;--sans:"Noto Sans KR","Apple SD Gothic Neo",system-ui,sans-serif}.toc b{font-size:28px}body{word-break:keep-all;overflow-wrap:anywhere}'),
}


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"&lt;(https?://[^&]+)&gt;", r'<a href="\1">\1</a>', t)
    t = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\1">\1</a>', t)
    return t


def md(src, imgs):
    out, lines, i = [], src.split("\n"), 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip() or ln.strip() == "---":
            i += 1; continue
        m = re.match(r"!\[([^\]]*)\]\(([^)]+)\)", ln.strip())
        if m:
            imgs.add(m.group(2))
            out.append(f'<figure><img src="{G["pfx"]}{m.group(2)[4:]}" alt="{html.escape(m.group(1))}" loading="lazy"></figure>'); i += 1; continue
        m = re.match(r"(#{1,3}) (.+)", ln)
        if m:
            lv = len(m.group(1)); out.append(f"<h{lv + 1}>{inline(m.group(2))}</h{lv + 1}>"); i += 1; continue
        if ln.startswith(">"):
            buf = []
            while i < len(lines) and lines[i].startswith(">"):
                buf.append(lines[i][1:].strip()); i += 1
            txt = " ".join(b for b in buf if b)
            cls = "aside" if not any(o.startswith("<h3") for o in out) else "say"
            out.append(f'<blockquote class="{cls}">{inline(txt)}</blockquote>'); continue
        if ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.fullmatch(r":?-+:?", c) for c in cells): rows.append(cells)
                i += 1
            th = "".join(f"<th>{inline(c)}</th>" for c in rows[0])
            tb = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows[1:])
            out.append(f'<div class="tbl"><table><thead><tr>{th}</tr></thead><tbody>{tb}</tbody></table></div>'); continue
        if re.match(r"\s*(- |\d+\. )", ln):
            ordered = bool(re.match(r"\d+\. ", ln)); items = []
            while i < len(lines) and re.match(r"\s*(- |\d+\. )", lines[i]):
                sub = lines[i].startswith("  ")
                txt = re.sub(r"^\s*(- |\d+\. )", "", lines[i])
                if sub and items: items[-1][1].append(txt)
                else: items.append([txt, []])
                i += 1
            tag = "ol" if ordered else "ul"
            lis = "".join(f"<li>{inline(a)}" + (("<ul>" + "".join(f"<li>{inline(s)}</li>" for s in b) + "</ul>") if b else "") + "</li>" for a, b in items)
            out.append(f"<{tag}>{lis}</{tag}>"); continue
        buf = []
        while i < len(lines) and lines[i].strip() and not re.match(r"(#|>|\||!\[|\s*- |\d+\. |---)", lines[i]):
            buf.append(lines[i].strip()); i += 1
        out.append(f"<p>{inline(''.join(buf))}</p>")
    return "\n".join(out)


def strip_tail(src, last):
    # 每篇末尾的链接列表和署名，合集里只在最后保留一次
    if last: return src
    L = src.rstrip().split("\n")
    while L and (not L[-1].strip() or L[-1].startswith("——") or L[-1].startswith("- ")): L.pop()
    return "\n".join(L)


CSS = r"""
:root{--ink:#141414;--paper:#FFF7E3;--card:#FFFFFF;--muted:#6B665B;--yellow:#FFE14D;--pink:#FF7EC3;--pinks:#FFE1F0;--blue:#6C9BFF;--line:#E6DCC4;
--fun:"ZCOOL KuaiLe","Noto Sans SC",system-ui,sans-serif;--sans:"Noto Sans SC","PingFang SC","Hiragino Sans GB",system-ui,sans-serif;--num:"Lilita One","Arial Black",sans-serif;--mono:ui-monospace,"SF Mono",Menlo,monospace}
*{box-sizing:border-box}
html{background:var(--paper)}
body{margin:0;background:var(--paper);background-image:radial-gradient(#E9DFC6 1.1px,transparent 1.2px);background-size:22px 22px;color:var(--ink);font:400 17px/1.85 var(--sans);-webkit-text-size-adjust:100%}
.wrap{max-width:760px;margin:0 auto;padding-inline:18px;padding-block:28px 80px}
.mast{display:flex;align-items:center;gap:12px;font:800 13px var(--mono);letter-spacing:.14em;color:var(--muted)}
.logo{display:inline-grid;place-items:center;width:36px;height:36px;background:var(--ink);color:var(--yellow);border-radius:9px;font:900 17px var(--mono);letter-spacing:0}
.hero h1{font:400 clamp(40px,8vw,66px)/1.12 var(--fun);margin:22px 0 12px;text-wrap:balance}
.hero h1 .hl{display:inline-block;background:var(--yellow);border:3.5px solid var(--ink);border-radius:16px;padding:0 12px;box-shadow:5px 5px 0 var(--ink);transform:rotate(-1.5deg)}
.hero p{font-size:18px;font-weight:700;color:var(--muted);margin:0 0 22px;max-width:36em}
.toc{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:0 0 8px}
.toc a{display:block;text-decoration:none;color:var(--ink);background:var(--card);border:3px solid var(--ink);border-radius:18px;box-shadow:5px 5px 0 var(--ink);padding:12px 14px;transition:transform .15s,box-shadow .15s}
.toc a:hover,.toc a:focus-visible{transform:translate(-2px,-2px);box-shadow:7px 7px 0 var(--ink);outline:none}
.toc b{display:block;font:400 34px/1 var(--fun)}.toc span{display:block;font-size:14px;font-weight:800;color:var(--muted);margin-top:6px;line-height:1.4}
nav.bar{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;display:flex;gap:8px;justify-content:center;padding:10px 0;margin:26px 0 0;background:linear-gradient(var(--paper) 70%,transparent)}
nav.bar a{font:400 18px var(--fun);text-decoration:none;color:var(--ink);border:2.5px solid var(--ink);border-radius:999px;padding:2px 16px;background:var(--card);box-shadow:3px 3px 0 var(--ink)}
nav.bar a.on{background:var(--yellow)}
section.part{padding-top:18px}
.ptag{display:inline-block;font:800 13px var(--mono);letter-spacing:.14em;color:var(--muted);margin-top:40px}
h2{font:400 clamp(30px,5.6vw,42px)/1.25 var(--fun);margin:8px 0 22px;text-wrap:balance}
h3{font:400 28px/1.35 var(--fun);margin:52px 0 14px;text-wrap:balance;padding-top:10px;border-top:3px solid var(--ink)}
h4{font:900 20px/1.5 var(--sans);margin:34px 0 10px}
p{margin:0 0 18px}
b{font-weight:900;background:linear-gradient(transparent 62%,#FFEC8A 62%)}
a{color:var(--ink);text-decoration-thickness:2px;text-underline-offset:3px;word-break:break-all}
code{font:600 .88em var(--mono);background:#F1E8D2;border-radius:6px;padding:1px 6px}
ul,ol{margin:0 0 20px;padding-left:1.3em}li{margin:0 0 8px}li ul{margin:8px 0 0}
blockquote{margin:0 0 20px}
blockquote.say{position:relative;background:var(--card);border:3px solid var(--ink);border-radius:18px 18px 18px 4px;box-shadow:4px 4px 0 var(--ink);padding:12px 18px;font-weight:700;max-width:92%}
blockquote.aside{border-left:4px solid var(--ink);padding:4px 0 4px 16px;color:var(--muted);font-weight:700;font-size:16px}
figure{margin:28px 0}
figure img{display:block;width:100%;height:auto;border:3px solid var(--ink);border-radius:16px;box-shadow:6px 6px 0 var(--ink);background:var(--card)}
.tbl{overflow-x:auto;margin:0 0 22px;background:var(--card);border:3px solid var(--ink);border-radius:16px;box-shadow:5px 5px 0 var(--ink)}
table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.5;font-variant-numeric:tabular-nums}
th{font:400 17px var(--fun);text-align:left;padding:10px 12px;border-bottom:3px solid var(--ink);white-space:nowrap}
td{padding:9px 12px;border-bottom:2px dashed var(--line);vertical-align:top}
tr:last-child td{border-bottom:0}
td b{background:none;color:#C2177A}
.end{margin-top:56px;padding:22px 24px;background:var(--pinks);border:3px solid var(--ink);border-radius:20px;box-shadow:6px 6px 0 var(--ink)}
.end p:last-child{margin:0}
footer{margin-top:40px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font:800 13px var(--mono);color:var(--muted);letter-spacing:.06em}
@media (max-width:560px){body{font-size:16px}.toc{grid-template-columns:1fr}.toc a{display:flex;align-items:baseline;gap:12px}.toc span{margin:0}figure img{box-shadow:4px 4px 0 var(--ink);border-width:2.5px}blockquote.say{max-width:100%}}
@media (prefers-reduced-motion:reduce){.toc a{transition:none}}
"""

JS = r"""
(function(){var L=[].slice.call(document.querySelectorAll('nav.bar a')),S=L.map(function(a){return document.getElementById(a.hash.slice(1))});
function on(){var y=window.scrollY+120,k=0;S.forEach(function(s,i){if(s&&s.offsetTop<=y)k=i});L.forEach(function(a,i){a.classList.toggle('on',i===k)})}
window.addEventListener('scroll',on,{passive:true});on()})();
"""



# 首页（/retro/）按浏览器语言自动跳；手动选过就记住（也参考主站记住的语言）
DETECT = r"""(function(){try{var H=location.hash||'',K='humanbench:retro-lang',m=__M__;
var p=localStorage.getItem(K)||localStorage.getItem('humanbench:lang');var t=p&&m[p]!=null?m[p]:null;
if(t==null){var ls=navigator.languages||[navigator.language||''];for(var i=0;i<ls.length&&t==null;i++){var c=(ls[i]||'').toLowerCase();
if(/^zh/.test(c))t='';else if(/^ja/.test(c))t=m.ja;else if(/^ko/.test(c))t=m.ko;}if(t==null)t=m.en;}
if(t)location.replace(location.pathname.replace(/\/?$/,'/')+t+H);}catch(e){}})();"""
REMEMBER = r"""document.querySelectorAll('.langs a').forEach(function(a){a.addEventListener('click',function(){try{localStorage.setItem('humanbench:retro-lang',a.dataset.l)}catch(e){}})});"""


def build_lang(lang, avail):
    C = L[lang]; depth = "../" if C["dir"] else ""
    G["pfx"] = depth + "img/" + ("" if lang == "zh" else lang + "/")
    imgs, secs = set(), []
    for n in range(3):
        f = os.path.join(HERE, f"part{n + 1}-{lang}.md")
        src = open(f, encoding="utf-8").read()
        src = strip_tail(src, n == 2)
        src = re.sub(C["strip"], "# ", src, count=1, flags=re.M)
        body = md(src, imgs)
        if n == 2:
            k = body.rfind("<ul>")
            if k > 0: body = body[:k] + '<div class="end">' + body[k:] + "</div>"
        pz, _ = C["parts"][n]
        secs.append(f'<section class="part" id="p{n + 1}"><div class="ptag">{C["ptag"].format(n=n + 1, p=pz)}</div>\n{body}\n</section>')
    toc = "".join(f'<a href="#p{i + 1}"><b>{a}</b><span>{b}</span></a>' for i, (a, b) in enumerate(C["parts"]))
    nav = "".join(f'<a href="#p{i + 1}">{a}</a>' for i, (a, _) in enumerate(C["parts"]))
    langs = "".join(f'<a data-l="{k}" href="{depth}{L[k]["dir"]}"{" aria-current=\"page\"" if k == lang else ""}>{L[k]["name"]}</a>' for k in avail)
    fonts = f'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?{C["fonts"]}&display=swap">'
    alts = "".join(f'<link rel="alternate" hreflang="{L[k]["html"]}" href="https://humanbench.ybuild.ai/retro/{L[k]["dir"]}">' for k in avail)
    M = {k: (L[k]["dir"] if k in avail else "") for k in ("zh", "en", "ja", "ko")}; M.update(hant="", es=M["en"], fr=M["en"])
    det = f"<script>{DETECT.replace('__M__', json.dumps(M))}</script>" if lang == "zh" and len(avail) > 1 else ""
    head = f'<title>{C["title"]}</title><meta name="description" content="{html.escape(C["desc"])}">{alts}{det}{fonts}<style>{CSS}{LCSS}{C["css"]}</style>'
    main = f'''<div class="wrap"><header class="hero"><div class="top"><div class="mast"><span class="logo">h_</span>{C["mast"]}</div><nav class="langs" aria-label="Language">{langs}</nav></div>
<h1>{C["h1"]}</h1><p>{C["lead"]}</p>
<div class="toc">{toc}</div></header><nav class="bar" aria-label="{C["nav"]}">{nav}</nav>
{"".join(secs)}
<footer><span>humanbench.ybuild.ai</span><span>@Alex_ybuild · {C["lic"]}</span></footer></div><script>{JS}{REMEMBER}</script>'''
    od = os.path.join(OUT, C["dir"]); os.makedirs(od, exist_ok=True)
    idir = os.path.join(OUT, "img", "" if lang == "zh" else lang); os.makedirs(idir, exist_ok=True)
    miss = []
    for p in imgs:
        name = p[4:]; loc = os.path.join(HERE, "img", "" if lang == "zh" else lang, name)
        if not os.path.exists(loc): loc = os.path.join(HERE, p); miss.append(name)
        shutil.copy(loc, os.path.join(idir, name))
    base = "https://humanbench.ybuild.ai/retro/"; ogd = "img/" + ("" if lang == "zh" else lang + "/")
    for f in ("og.png", "og-sq.png"): shutil.copy(os.path.join(HERE, ogd, f), os.path.join(idir, f))
    og = base + ogd + "og.png"
    ogx = f'<meta property="og:type" content="article"><meta property="og:url" content="{base}{C["dir"]}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:image" content="{og}"><meta name="twitter:title" content="{html.escape(C["title"])}"><meta name="twitter:description" content="{html.escape(C["desc"])}"><meta name="twitter:creator" content="@Alex_ybuild"><meta itemprop="image" content="{base}{ogd}og-sq.png">'
    wx = f'<img src="{G["pfx"]}og-sq.png" alt="" width="300" height="300" style="position:absolute;left:-9999px;top:0">'
    full = f'<!doctype html><html lang="{C["html"]}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta property="og:title" content="{html.escape(C["title"])}"><meta property="og:description" content="{html.escape(C["desc"])}"><meta property="og:image" content="{og}"><meta name="twitter:card" content="summary_large_image">{ogx}{head}</head><body>{wx}{main}</body></html>'
    open(os.path.join(od, "index.html"), "w", encoding="utf-8").write(full)
    if lang == "zh": open(os.path.join(OUT, "artifact.html"), "w", encoding="utf-8").write(head.replace(det, "") + main)
    print(lang, len(imgs), "images", ("fallback zh: " + ",".join(sorted(miss))) if miss else "")


LCSS = """.top{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.langs{display:flex;gap:6px;flex-wrap:wrap}.langs a{font:800 13px var(--sans);text-decoration:none;color:var(--ink);border:2px solid var(--ink);border-radius:999px;padding:2px 10px;background:var(--card)}
.langs a[aria-current]{background:var(--ink);color:var(--paper)}"""


def build():
    avail = [k for k in L if all(os.path.exists(os.path.join(HERE, f"part{n}-{k}.md")) for n in (1, 2, 3))]
    for k in avail: build_lang(k, avail)


if __name__ == "__main__":
    build()
