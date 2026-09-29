// HumanBench 正式站：静态页 + 每个人的专属分享预览图
//   /r/<结果码>、/<语言>/r/<结果码> → 对应语言的页面，但 og 标签换成这个人的结果（推特、Telegram 等抓链接时看到的）
//   /og-<语言>.png     → 各语言首页的默认预览图
//   /og/<结果码>.png   → 现场生成 1200×630 的结果卡
//   其他               → 静态资源
import { ImageResponse } from "workers-og";

const SITE = "https://humanbench.ybuild.ai";

function decode(code) {
  try {
    const bin = atob(code.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0))));
  } catch (e) { return null; }
}
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const cut = (s, n) => { const a = [...String(s ?? "")]; return a.length > n ? a.slice(0, n).join("") + "…" : a.join(""); };

// 只下载这张图用到的字（Google Fonts 的 text 参数），中文字体才不会太大
async function gfont(family, weight, text) {
  const q = `https://fonts.googleapis.com/css2?family=${family}${weight ? `:wght@${weight}` : ""}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(q)).text();
  const m = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!m) throw new Error("font not found: " + family);
  return (await fetch(m[1])).arrayBuffer();
}

// 分享图/预览文字按结果码里的语言（l）出
const L10N = {
  zh: { font: ["Noto+Sans+SC", "Noto Sans SC"], intro: "隆重推出 · HumanBench 发布会", q1: "strawberry 里有几个 r？", q2: "9.11 ＞ 9.9？", tag: "AI 翻过的车，这次换你来开。",
    persona: "模型人格", aa: "AA 智能指数", rank: (k, o) => `排第 ${k} / ${o}`, cta: "你是几B？点开来挑战", head: "你是几B的模型？",
    dense: "Dense · 全参数激活", moe: a => `MoE${a ? ` · 激活 ${a}` : ""}`, title: m => `${m}｜你是几B的模型？`,
    desc: (r, arch) => `${r.t}，${arch}，${r.p}。AA 智能指数 ${r.aa}，在 ${r.o} 个模型里排第 ${r.k}。你是几B？点开来挑战。`,
    gets: ["参数量 · MoE 还是 Dense", "发布会跑分表", "AA 智能指数排名", "你是什么型人格"] },
  hant: { font: ["Noto+Sans+TC", "Noto Sans TC"], intro: "隆重推出 · HumanBench 發表會", q1: "strawberry 裡有幾個 r？", q2: "9.11 ＞ 9.9？", tag: "AI 翻過的車，這次換你來開。",
    persona: "模型人格", aa: "AA 智慧指數", rank: (k, o) => `排第 ${k} / ${o}`, cta: "你是幾B？點開來挑戰", head: "你是幾B的模型？",
    dense: "Dense · 全參數啟用", moe: a => `MoE${a ? ` · 啟用 ${a}` : ""}`, title: m => `${m}｜你是幾B的模型？`,
    desc: (r, arch) => `${r.t}，${arch}，${r.p}。AA 智慧指數 ${r.aa}，在 ${r.o} 個模型裡排第 ${r.k}。你是幾B？點開來挑戰。`,
    gets: ["參數量 · MoE 還是 Dense", "發表會跑分表", "AA 智慧指數排名", "你是什麼型人格"] },
  hant_hk: { font: ["Noto+Sans+HK", "Noto Sans HK"], intro: "隆重推出 · HumanBench 發佈會", q1: "strawberry 裏有幾個 r？", q2: "9.11 ＞ 9.9？", tag: "AI 翻過的車，這次換你來開。",
    persona: "模型人格", aa: "AA 智能指數", rank: (k, o) => `排第 ${k} / ${o}`, cta: "你是幾B？點開來挑戰", head: "你是幾B的模型？",
    dense: "Dense · 全參數激活", moe: a => `MoE${a ? ` · 激活 ${a}` : ""}`, title: m => `${m}｜你是幾B的模型？`,
    desc: (r, arch) => `${r.t}，${arch}，${r.p}。AA 智能指數 ${r.aa}，在 ${r.o} 個模型裏排第 ${r.k}。你是幾B？點開來挑戰。`,
    gets: ["參數量 · MoE 還是 Dense", "發佈會跑分表", "AA 智能指數排名", "你是什麼型人格"] },
  en: { font: ["Noto+Sans", "Noto Sans"], intro: "Introducing · HumanBench launch event", q1: "r's in strawberry?", q2: "9.11 or 9.9?", tag: "The AIs crashed the car. Your turn to drive.",
    persona: "Model persona", aa: "AA Intelligence Index", rank: (k, o) => `Rank ${k} / ${o}`, cta: "How many B are you? Take the challenge", head: "How many B are you?", lines: ["How many B", "are you?"],
    dense: "Dense · all params active", moe: a => `MoE${a ? ` · ${a} active` : ""}`, title: m => `${m} | How many B are you?`,
    desc: (r, arch) => `${r.t}, ${arch}, ${r.p}. AA Intelligence Index ${r.aa}, rank ${r.k} of ${r.o}. How many B are you? Take the challenge.`,
    gets: ["Params · MoE or Dense", "Benchmark table", "AA Index rank", "Your model persona"] },
  ja: { font: ["Noto+Sans+JP", "Noto Sans JP"], intro: "ついに登場 · HumanBench 発表会", q1: "strawberry に r は何個？", q2: "9.11 ＞ 9.9？", tag: "AIがやらかした問題、今度はあなたの番。",
    persona: "モデル人格", aa: "AA 知能指数", rank: (k, o) => `${o}モデル中 ${k}位`, cta: "あなたは何B？タップで挑戦", head: "あなたは何Bのモデル？", lines: ["あなたは", "何Bのモデル？"],
    dense: "Dense · 全パラメータ稼働", moe: a => `MoE${a ? ` · アクティブ ${a}` : ""}`, title: m => `${m}｜あなたは何Bのモデル？`,
    desc: (r, arch) => `${r.t}、${arch}、${r.p}。AA知能指数 ${r.aa}、${r.o}モデル中${r.k}位。あなたは何B？タップで挑戦。`,
    gets: ["パラメータ数 · MoE/Dense", "発表会ベンチマーク表", "AA 知能指数ランキング", "あなたのモデル人格"] },
  es: { font: ["Noto+Sans", "Noto Sans"], intro: "Presentamos · lanzamiento HumanBench", q1: "¿Cuántas r en strawberry?", q2: "¿9.11 o 9.9?", tag: "Las IA ya metieron la pata. Ahora te toca a ti.",
    persona: "Personalidad", aa: "Índice AA", rank: (k, o) => `Puesto ${k} / ${o}`, cta: "¿De cuántos B eres? Acepta el reto", head: "¿De cuántos B eres?", lines: ["¿De cuántos B", "eres?"],
    dense: "Dense · todos los parámetros", moe: a => `MoE${a ? ` · ${a} activos` : ""}`, title: m => `${m} | ¿De cuántos B eres?`,
    desc: (r, arch) => `${r.t}, ${arch}, ${r.p}. Índice AA ${r.aa}, puesto ${r.k} de ${r.o}. ¿De cuántos B eres? Acepta el reto.`,
    gets: ["Parámetros · MoE o Dense", "Tabla de benchmarks", "Ranking Índice AA", "Tu personalidad"] },
  ko: { font: ["Noto+Sans+KR", "Noto Sans KR"], intro: "드디어 공개 · HumanBench 발표회", q1: "strawberry에 r은 몇 개?", q2: "9.11 ＞ 9.9?", tag: "AI가 틀린 문제, 이번엔 당신 차례.",
    persona: "모델 성격", aa: "AA 지능 지수", rank: (k, o) => `${o}개 중 ${k}위`, cta: "당신은 몇B? 눌러서 도전", head: "당신은 몇B 모델?",
    dense: "Dense · 전체 파라미터 활성", moe: a => `MoE${a ? ` · 활성 ${a}` : ""}`, title: m => `${m} | 당신은 몇B 모델?`,
    desc: (r, arch) => `${r.t}, ${arch}, ${r.p}. AA 지능 지수 ${r.aa}, ${r.o}개 모델 중 ${r.k}위. 당신은 몇B?`,
    gets: ["파라미터 수 · MoE vs Dense", "발표회 벤치마크 표", "AA 지능 지수 순위", "나의 모델 성격"] },
  fr: { font: ["Noto+Sans", "Noto Sans"], intro: "Présentation · keynote HumanBench", q1: "Combien de r dans strawberry ?", q2: "9.11 ou 9.9 ?", tag: "Les IA se sont plantées. À toi de jouer.",
    persona: "Personnalité", aa: "Indice AA", rank: (k, o) => `${k}e sur ${o}`, cta: "Tu fais combien de B ? Relève le défi", head: "Tu fais combien de B ?", lines: ["Tu fais", "combien de B ?"],
    dense: "Dense · tous les paramètres actifs", moe: a => `MoE${a ? ` · ${a} actifs` : ""}`, title: m => `${m} | Tu fais combien de B ?`,
    desc: (r, arch) => `${r.t}, ${arch}, ${r.p}. Indice AA ${r.aa}, ${r.k}e sur ${r.o}. Et toi, tu fais combien de B ? Relève le défi.`,
    gets: ["Paramètres · MoE ou Dense", "Tableau de benchmarks", "Classement Indice AA", "Ta personnalité de modèle"] },
};
const LANGS = ["hant", "en", "ja", "es", "ko", "fr"];
// 繁体只有一个语言代码 hant；香港/澳门用词版叫 hant_hk（v = 分享人看到的版本，或按看的人所在地区挑）
const tx = (r, v) => r && r.l === "hant" && (v || r.v) === "hk" ? L10N.hant_hk : L10N[r && L10N[r.l] ? r.l : "zh"];
// 繁体访客看哪个地区的用词：浏览器语言写明 zh-HK/zh-MO 或 zh-TW 就按它，否则按所在地区
function hantVariant(req) {
  const al = (req.headers.get("accept-language") || "").toLowerCase();
  const m = al.match(/zh-(hk|mo|tw)/);
  if (m) return m[1] === "tw" ? "tw" : "hk";
  const c = req.cf && req.cf.country;
  return c === "HK" || c === "MO" ? "hk" : "tw";
}

function describe(r, v) {
  const T = tx(r, v);
  const arch = r.d ? T.dense : T.moe(r.a);
  return { title: T.title(cut(r.m, 40)), desc: T.desc(r, arch), arch };
}

// 主字体按语言；名字里夹了别的文字（比如英文页用中文名）就补一个对应字体
async function fontsFor(lang, text, nums) {
  const T = L10N[lang] || L10N.zh;
  const want = [T.font];
  if (/[一-鿿]/.test(text) && !["zh", "hant", "hant_hk", "ja"].includes(lang)) want.push(["Noto+Sans+SC", "Noto Sans SC"]);
  if (/[぀-ヿ]/.test(text) && lang !== "ja") want.push(["Noto+Sans+JP", "Noto Sans JP"]);
  if (/[가-힯]/.test(text) && lang !== "ko") want.push(["Noto+Sans+KR", "Noto Sans KR"]);
  const data = await Promise.all([...want.map(f => gfont(f[0], 900, text)), gfont("Lilita+One", 0, nums)]);
  return [...want.map((f, i) => ({ name: f[1], data: data[i], weight: 900, style: "normal" })), { name: "Lilita One", data: data[data.length - 1], weight: 400, style: "normal" }];
}

async function ogImage(r) {
  const D = describe(r), T = tx(r), lang = r.l === "hant" && r.v === "hk" ? "hant_hk" : L10N[r.l] ? r.l : "zh", path = L10N[r.l] ? r.l : "zh";
  const name = cut(r.m, 30), nameLen = [...name].length;
  const fs = nameLen > 22 ? 40 : nameLen > 14 ? 50 : 62;
  const fam = [T.font[1], "Noto Sans SC", "Noto Sans JP", "Noto Sans KR"].map(f => `'${f}'`).join(",");
  const html = `
<div style="display:flex;width:1200px;height:630px;background:#FFF7E3;padding:52px 60px;font-family:${fam};color:#141414;position:relative">
  <div style="display:flex;flex-direction:column;width:650px">
    <div style="display:flex;font-size:26px;font-weight:900;color:#6b675e">${esc(T.intro)}</div>
    <div style="display:flex;font-size:${fs}px;font-weight:900;margin-top:10px;line-height:1.15">${esc(name)}</div>
    <div style="display:flex;align-items:flex-end;margin-top:14px">
      <div style="display:flex;font-family:'Lilita One';font-size:168px;line-height:1;color:#FF7EC3">${esc(r.s)}</div>
      <div style="display:flex;flex-direction:column;margin-left:22px;margin-bottom:26px">
        <div style="display:flex;background:#43E08B;border:4px solid #141414;border-radius:999px;padding:4px 20px;font-size:28px;font-weight:900">${esc(r.t)}</div>
        <div style="display:flex;font-size:24px;font-weight:900;margin-top:12px">${esc(D.arch)}</div>
      </div>
    </div>
    <div style="display:flex;margin-top:26px">
      <div style="display:flex;background:#ffffff;border:4px solid #141414;border-radius:14px;padding:6px 16px;font-size:24px;font-weight:900">${esc(T.q1)}</div>
      <div style="display:flex;background:#FFE14D;border:4px solid #141414;border-radius:14px;padding:6px 16px;font-size:24px;font-weight:900;margin-left:12px">${esc(T.q2)}</div>
    </div>
    <div style="display:flex;font-size:26px;font-weight:900;margin-top:18px">${esc(T.tag)}</div>
  </div>
  <div style="display:flex;flex-direction:column;justify-content:space-between;width:410px;background:#141414;color:#ffffff;border-radius:28px;padding:32px 34px;margin-left:20px">
    <div style="display:flex;flex-direction:column">
      <div style="display:flex;font-size:22px;color:#FFE14D;font-weight:900">${esc(T.persona)}</div>
      <div style="display:flex;font-size:${[...String(r.p)].length > 12 ? 28 : [...String(r.p)].length > 9 ? 32 : 40}px;font-weight:900;margin-top:6px">${esc(r.p)}</div>
    </div>
    <div style="display:flex;flex-direction:column">
      <div style="display:flex;font-size:22px;color:#FFE14D;font-weight:900">${esc(T.aa)}</div>
      <div style="display:flex;align-items:flex-end">
        <div style="display:flex;font-family:'Lilita One';font-size:100px;line-height:1;color:#FF7EC3">${esc(r.aa)}</div>
        <div style="display:flex;font-size:26px;font-weight:900;margin-left:16px;margin-bottom:14px">${esc(T.rank(r.k, r.o))}</div>
      </div>
    </div>
    <div style="display:flex;font-size:24px;font-weight:900;color:#FFE14D">${esc(T.cta)}</div>
  </div>
  <div style="display:flex;position:absolute;left:60px;bottom:40px;font-size:24px;font-weight:900">humanbench.ybuild.ai${path === "zh" ? "" : "/" + path} · @Alex_ybuild</div>
</div>`;
  const text = html.replace(/<[^>]+>/g, "");
  return new ImageResponse(html, { width: 1200, height: 630, fonts: await fontsFor(lang, text, `${r.s}${r.aa}0123456789.BT`) });
}

// 各语言首页的默认预览图（没有个人结果时）
async function ogDefault(lang, v) {
  const T = lang === "hant" && v === "hk" ? L10N.hant_hk : L10N[lang];
  const fam = `'${T.font[1]}'`;
  const html = `
<div style="display:flex;width:1200px;height:630px;background:#FFF7E3;padding:56px 60px;font-family:${fam};color:#141414;position:relative">
  <div style="display:flex;flex-direction:column;width:660px">
    <div style="display:flex"><div style="display:flex;background:#43E08B;border:4px solid #141414;border-radius:999px;padding:4px 18px;font-size:24px;font-weight:900">HumanBench</div></div>
    <div style="display:flex;flex-direction:column;font-size:76px;font-weight:900;margin-top:26px;line-height:1.12">${(T.lines || [T.head]).map(x => `<div style="display:flex">${esc(x)}</div>`).join("")}</div>
    <div style="display:flex;margin-top:30px">
      <div style="display:flex;background:#ffffff;border:4px solid #141414;border-radius:14px;padding:6px 16px;font-size:24px;font-weight:900">${esc(T.q1)}</div>
      <div style="display:flex;background:#FFE14D;border:4px solid #141414;border-radius:14px;padding:6px 16px;font-size:24px;font-weight:900;margin-left:12px">${esc(T.q2)}</div>
    </div>
    <div style="display:flex;font-size:26px;font-weight:900;margin-top:18px">${esc(T.tag)}</div>
  </div>
  <div style="display:flex;flex-direction:column;width:400px;background:#141414;color:#ffffff;border-radius:28px;padding:30px 34px;margin-left:20px">
    <div style="display:flex;font-family:'Lilita One';font-size:120px;line-height:1;color:#FF7EC3;margin-bottom:22px">?B</div>
    ${T.gets.map((g, i) => `<div style="display:flex;align-items:center;font-size:24px;font-weight:900;margin-top:${i ? 18 : 0}px"><div style="display:flex;flex:none;width:16px;height:16px;border-radius:4px;background:${["#FF7EC3", "#FFE14D", "#43E08B", "#6C9BFF"][i]};margin-right:16px"></div>${esc(g)}</div>`).join("")}
  </div>
  <div style="display:flex;position:absolute;left:60px;bottom:40px;font-size:24px;font-weight:900">humanbench.ybuild.ai/${lang} · @Alex_ybuild</div>
</div>`;
  const text = html.replace(/<[^>]+>/g, "");
  return new ImageResponse(html, { width: 1200, height: 630, fonts: await fontsFor(lang === "hant" && v === "hk" ? "hant_hk" : lang, text, "?B") });
}

function withMeta(html, r, code, v) {
  const D = describe(r, v), img = `${SITE}/og/${code}.png`, url = `${SITE}/${r.l && L10N[r.l] && r.l !== "zh" ? r.l + "/" : ""}r/${code}`;
  // 用函数替换：挑战者名字里的 $&、$` 之类不会被当成替换指令
  const set = (attr, key, val) => { html = html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), (m, a, b) => a + esc(val) + b); };
  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${esc(D.title)}</title>`);
  set("name", "description", D.desc);
  set("property", "og:url", url); set("property", "og:title", D.title); set("property", "og:description", D.desc); set("property", "og:image", img);
  set("name", "twitter:title", D.title); set("name", "twitter:description", D.desc); set("name", "twitter:image", img);
  return html;
}

// 埋点：前端用 sendBeacon 发 {e, s, l, r, d}，只收白名单事件，字段截断，不存 IP
const EVENTS = new Set(["visit", "start", "prog", "jev", "follow", "finish", "cards", "cards_clean", "share", "poster", "lang", "leave", "save_err", "pk"]);
async function track(body, country, env) {
  try {
    const j = JSON.parse(body.slice(0, 2000));
    if (!EVENTS.has(j.e) || !env.DB) return;
    const cut = (v, n) => v == null ? null : String(v).slice(0, n);
    await env.DB.prepare("INSERT INTO events (ts, ev, sid, lang, country, src, d) VALUES (?, ?, ?, ?, ?, ?, ?)")
      .bind(Date.now(), j.e, cut(j.s, 24), cut(j.l, 5), cut(country, 4), cut(j.r, 16), j.d ? cut(JSON.stringify(j.d), 500) : null).run();
  } catch (e) { }
}

// 备用域名（微信拦截 ybuild.ai 时用）：同一个 worker，页面里的站点地址换成当前域名，不让搜索引擎收录
const ALT_HOSTS = new Set(["humanbench.ybuild.io"]);
async function finishHtml(res, url, env) {
  const alt = ALT_HOSTS.has(url.host), wx = env.WX_ALT === "1";
  if (!(alt || wx) || !(res.headers.get("content-type") || "").includes("text/html")) return res;
  let t = await res.text();
  if (alt) t = t.split(SITE).join(url.origin);
  if (wx) t = t.replace("const WX_ALT = false;", "const WX_ALT = true;");
  const h = new Headers(res.headers); h.delete("content-length"); if (alt) h.set("x-robots-tag", "noindex");
  return new Response(t, { status: res.status, headers: h });
}

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    return finishHtml(await route(req, env, ctx, url), url, env);
  },
};
async function route(req, env, ctx, url) {
    if (url.pathname === "/api/e" && req.method === "POST") {
      // 先把请求内容读出来（回完响应后就读不到了），再在后台写库
      const body = await req.text();
      ctx.waitUntil(track(body, req.cf && req.cf.country, env));
      return new Response(null, { status: 204 });
    }
    let m = url.pathname.match(/^\/og\/([\w-]+)\.png$/);
    if (m) {
      const cache = caches.default, key = new Request(url.toString());
      const hit = await cache.match(key);
      if (hit) return hit;
      const r = decode(m[1]);
      if (!r || !r.m) return env.ASSETS.fetch(new Request(new URL("/og.png", url)));
      try {
        const img = await ogImage(r);
        const res = new Response(img.body, { headers: { "content-type": "image/png", "cache-control": "public, max-age=31536000, immutable" } });
        ctx.waitUntil(cache.put(key, res.clone()));
        return res;
      } catch (e) {
        return env.ASSETS.fetch(new Request(new URL("/og.png", url)));
      }
    }
    m = url.pathname.match(/^\/og-(hant|en|ja|es|ko|fr)\.png$/);
    if (m) {
      const v = m[1] === "hant" ? hantVariant(req) : "";
      const cache = caches.default, key = new Request(url.toString() + (v ? `?v=${v}` : ""));
      const hit = await cache.match(key);
      if (hit) return hit;
      try {
        const img = await ogDefault(m[1], v);
        const res = new Response(img.body, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
        ctx.waitUntil(cache.put(key, res.clone()));
        return res;
      } catch (e) { return env.ASSETS.fetch(new Request(new URL("/og.png", url))); }
    }
    // 繁体：/hant/ 一个网址，按访客地区返回台湾用词版或香港用词版
    if (/^\/hant\/?$/.test(url.pathname)) {
      if (url.pathname === "/hant") return Response.redirect(new URL("/hant/" + url.search, url), 301);
      const page = await env.ASSETS.fetch(new Request(new URL(`/_hant/${hantVariant(req)}/`, url)));
      return new Response(page.body, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, max-age=300", "vary": "Accept-Language" } });
    }
    m = url.pathname.match(/^\/(?:(hant|en|ja|es|ko|fr)\/)?r\/([\w-]+)\/?$/);
    if (m) {
      const lang = m[1] || "zh", v = lang === "hant" ? hantVariant(req) : "";
      const page = await env.ASSETS.fetch(new Request(new URL(lang === "zh" ? "/" : v ? `/_hant/${v}/` : `/${lang}/`, url)));
      const r = decode(m[2]);
      if (!r || !r.m) return new Response(page.body, { headers: { "content-type": "text/html; charset=utf-8", ...(v ? { vary: "Accept-Language" } : {}) } });
      return new Response(withMeta(await page.text(), r, m[2], v), { headers: { "content-type": "text/html; charset=utf-8", "cache-control": v ? "private, max-age=300" : "public, max-age=300", ...(v ? { vary: "Accept-Language" } : {}) } });
    }
    return env.ASSETS.fetch(req);
}
