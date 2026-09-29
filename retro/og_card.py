# 复盘页的社交分享卡：1200×630（X / Telegram / Discord 等）和 600×600 方图（微信），中英日韩各一张
# python3 retro/og_card.py && node retro/render_og.cjs
import os
HERE = os.path.dirname(os.path.abspath(__file__))
T = {
 "zh": dict(font="family=ZCOOL+KuaiLe&family=Lilita+One&family=Noto+Sans+SC:wght@700;900", fun='"ZCOOL KuaiLe","Noto Sans SC"', sans='"Noto Sans SC"',
   k="HUMANBENCH · 复盘", t1="你是", hl="几B", t2="的模型", t3="复盘", sub="几百粉丝、零投放，3 天发生了什么",
   parts=["上 · 从 4 条消息到上线", "中 · 上线后的 36 小时", "下 · 传播、数据和开源"],
   n=[("~100万", "估算触达"), ("3.99万", "独立访客"), ("1.27万", "答完 76 题"), ("96", "国家和地区")], by="和 AI 一起做的整活，完整复盘", flow="GPT-6 Pro 4 条消息 → Claude Code 237 条 → 7 种语言 · 开源"),
 "en": dict(font="family=Lilita+One&family=Nunito:wght@700;800;900", fun='"Lilita One","Nunito"', sans='"Nunito"',
   k="HUMANBENCH · RETRO", t1="How many ", hl="B", t2=" are you?", t3="The retro", sub="A few hundred followers, $0 ads, 3 days",
   parts=["1 · 4 messages to launch", "2 · 36 hours after launch", "3 · Virality, data, open source"],
   n=[("~1M", "est. reach"), ("39.9K", "visitors"), ("12.7K", "finished 76 Qs"), ("96", "countries")], by="A meme quiz built with AI, start to finish", flow="GPT-6 Pro ×4 msgs → Claude Code ×237 → 7 languages · open source"),
 "ja": dict(font="family=Mochiy+Pop+One&family=Lilita+One&family=Noto+Sans+JP:wght@700;900", fun='"Mochiy Pop One","Noto Sans JP"', sans='"Noto Sans JP"',
   k="HUMANBENCH · 振り返り", t1="あなたは", hl="何B", t2="のモデル？", t3="振り返り", sub="フォロワー数百人・広告ゼロの 3 日間",
   parts=["前編 · 4 通から公開まで", "中編 · 公開後の 36 時間", "後編 · 拡散・データ・OSS"],
   n=[("~100万", "推定リーチ"), ("3.99万", "訪問者"), ("1.27万", "76 問完走"), ("96", "の国と地域")], by="AI と作ったネタ診断、全部見せます", flow="GPT-6 Pro に 4 通 → Claude Code に 237 通 → 7 言語 · OSS"),
 "ko": dict(font="family=Jua&family=Lilita+One&family=Noto+Sans+KR:wght@700;900", fun='"Jua","Noto Sans KR"', sans='"Noto Sans KR"',
   k="HUMANBENCH · 회고", t1="너는 ", hl="몇B짜리", t2=" 모델?", t3="회고", sub="팔로워 몇백 명, 광고 0원, 3일",
   parts=["1부 · 메시지 4개에서 출시까지", "2부 · 출시 후 36시간", "3부 · 확산, 데이터, 오픈소스"],
   n=[("~100만", "추정 도달"), ("3.99만", "방문자"), ("1.27만", "76문제 완주"), ("96", "개 국가·지역")], by="AI와 함께 만든 밈 테스트, 전 과정 회고", flow="GPT-6 Pro 4개 → Claude Code 237개 → 7개 언어 · 오픈소스"),
}
CSS = """*{box-sizing:border-box}body{margin:0;background:#ccc}
.og{width:1200px;height:630px;position:relative;overflow:hidden;background:#FFF7E3;background-image:radial-gradient(#E9DFC6 1.3px,transparent 1.4px);background-size:24px 24px;color:#141414;font-family:var(--sans);margin-bottom:20px}
.sq{width:600px;height:600px}
.k{font:800 18px ui-monospace,Menlo,monospace;letter-spacing:.16em;color:#6B665B;display:flex;align-items:center;gap:12px}
.logo{display:inline-grid;place-items:center;width:42px;height:42px;background:#141414;color:#FFE14D;border-radius:10px;font:900 20px ui-monospace,Menlo,monospace;letter-spacing:0}
h1{font:400 76px/1.08 var(--fun);margin:26px 0 0}.zh h1{font-size:84px}.en h1{font-size:60px}.ja h1{font-size:54px}.ja .t3,.en .t3{margin-top:18px}
.hl{display:inline-block;background:#FFE14D;border:4px solid #141414;border-radius:18px;padding:0 14px;box-shadow:6px 6px 0 #141414;transform:rotate(-2deg);margin:0 6px}
.t3{display:inline-block;margin-top:14px;font:400 44px var(--fun);background:#FF7EC3;color:#fff;-webkit-text-stroke:0;border:4px solid #141414;border-radius:999px;padding:2px 26px 6px;box-shadow:5px 5px 0 #141414}
.sub{font-weight:900;font-size:24px;color:#6B665B;margin-top:18px}
.t2{white-space:nowrap}.flow{display:inline-block;margin-top:14px;background:#141414;color:#FFF7E3;font-weight:900;font-size:19px;padding:7px 14px;border-radius:10px;white-space:nowrap}
.L{position:absolute;left:64px;top:56px;width:640px}
.R{position:absolute;right:56px;top:56px;width:400px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.c{background:#fff;border:3.5px solid #141414;border-radius:20px;box-shadow:6px 6px 0 #141414;padding:16px 18px}
.c b{display:block;font:400 44px/1 "Lilita One",sans-serif;-webkit-text-stroke:2.5px #141414;paint-order:stroke fill;text-shadow:3px 3px 0 #141414}
.c span{display:block;font-weight:900;font-size:17px;margin-top:10px;white-space:nowrap}
.c:nth-child(1) b{color:#FF7EC3}.c:nth-child(2) b{color:#FFE14D}.c:nth-child(3) b{color:#43E08B}.c:nth-child(4) b{color:#6C9BFF}
.parts{position:absolute;left:64px;right:56px;bottom:98px;display:flex;gap:12px}
.p{flex:1;background:#fff;border:3px solid #141414;border-radius:14px;padding:9px 14px;font-weight:900;font-size:18px;box-shadow:4px 4px 0 #141414;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.foot{position:absolute;left:64px;right:56px;bottom:34px;display:flex;justify-content:space-between;align-items:center;border-top:3.5px solid #141414;padding-top:14px;font-weight:900;font-size:20px}
.foot i{font-style:normal;color:#6B665B}
.sq .L{left:44px;top:44px;width:520px}.sq h1{font-size:62px}.sq .t3{font-size:36px}.sq .sub{font-size:20px;margin-top:16px}.sq .flow{display:none}.sq.en h1{font-size:56px}.sq.ja h1{font-size:50px}
.sq .R{left:44px;right:44px;top:auto;bottom:112px;width:auto;grid-template-columns:repeat(4,1fr);gap:10px}
.sq .c{padding:12px 10px}.sq .c b{font-size:30px;-webkit-text-stroke:2px #141414}.sq .c span{font-size:13px;white-space:normal;line-height:1.3}
.sq .foot{left:44px;right:44px;bottom:30px;font-size:17px}"""
def card(C, cls, idn):
    global LANG
    n = "".join(f'<div class="c"><b>{a}</b><span>{b}</span></div>' for a, b in C["n"])
    parts = "" if cls else '<div class="parts">' + "".join(f'<div class="p">{p}</div>' for p in C["parts"]) + "</div>"
    sub = f'<div class="sub">{C["sub"]}</div><div class="flow">{C["flow"]}</div>'
    return f'''<section class="og {cls} {LANG}" id="{idn}"><div class="L"><div class="k"><span class="logo">h_</span>{C["k"]}</div>
<h1>{C["t1"]}<span class="hl">{C["hl"]}</span><span class="t2">{C["t2"]}</span></h1><div class="t3">{C["t3"]}</div>{sub}</div>
<div class="R">{n}</div>{parts}<div class="foot"><span>{C["by"]}</span><i>@Alex_ybuild</i></div></section>'''
for lang, C in T.items():
    LANG = lang
    html = f'''<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?{C["font"]}&display=swap">
<style>:root{{--fun:{C["fun"]},sans-serif;--sans:{C["sans"]},sans-serif}}{CSS}</style></head><body>{card(C, "", "og")}{card(C, "sq", "sq")}</body></html>'''
    open(os.path.join(HERE, f"og_{lang}.html"), "w", encoding="utf-8").write(html)
print("ok")
