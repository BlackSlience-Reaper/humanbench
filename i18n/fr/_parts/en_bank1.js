/* =========================================================
   HumanBench v0.3 question bank
   - skill questions are grouped by the rows of the "launch benchmark table"; each group draws from its pool
   - every option carries its own roast r; ok:1 = correct
   - prompt fields: q plain text; term terminal output; code code; mail/ui/chart trusted HTML/SVG
   ========================================================= */

/* ---------- tiny SVG chart helpers ---------- */
const SV = {
  wrap: (title, inner) => `<svg viewBox="0 0 320 210" class="chart-svg" role="img" aria-label="${title}">
    <text x="10" y="16" class="c-title">${title}</text>${inner}</svg>`,
  axis: (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="c-axis"/>`,
  grid: (y, label, x0 = 44, x1 = 306) => `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="c-grid"/><text x="${x0 - 6}" y="${y + 4}" class="c-tick" text-anchor="end">${label}</text>`,
  pie(cx, cy, r, parts) {
    const tot = parts.reduce((a, p) => a + p.v, 0);
    let a0 = -Math.PI / 2, out = "";
    parts.forEach(p => {
      const a1 = a0 + p.v / tot * Math.PI * 2;
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const [x0, y0, x1, y1] = [cx + r * Math.cos(a0), cy + r * Math.sin(a0), cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
      out += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${p.c}" class="c-slice"/>`;
      const am = (a0 + a1) / 2;
      out += `<text x="${(cx + r * .6 * Math.cos(am)).toFixed(1)}" y="${(cy + r * .6 * Math.sin(am) + 5).toFixed(1)}" class="c-val" text-anchor="middle">${p.label}</text>`;
      a0 = a1;
    });
    return out;
  },
};

const CHARTS = {

  dualaxis: SV.wrap("Company A stock ($, left) vs City B temp (°C, right)",
    SV.grid(170, "0") + SV.grid(97, "50") + SV.grid(24, "100") +
    `<text x="300" y="174" class="c-tick">0</text><text x="300" y="101" class="c-tick">5</text><text x="300" y="28" class="c-tick">10</text>
     <polyline points="54,150 100,122 146,98 192,72 238,54 284,36" class="c-line" style="stroke:#FF7EC3;stroke-width:4"/>
     <polyline points="54,146 100,126 146,94 192,76 238,50 284,40" class="c-line" style="stroke-dasharray:6 4"/>
     <text x="60" y="196" class="c-lab">Pink: stock</text><text x="190" y="196" class="c-lab">Dashed: temp</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) + SV.axis(296, 24, 296, 170)),
  logscale: SV.wrap("App users (y-axis: log scale)",
    SV.grid(170, "1") + SV.grid(121, "10") + SV.grid(72, "100") + SV.grid(24, "1000") +
    `<polyline points="54,164 100,146 146,127 192,108 238,89 284,70" class="c-line"/>` +
    [[54, 164], [100, 146], [146, 127], [192, 108], [238, 89], [284, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5", "Yr 6"].map((m, i) => `<text x="${54 + i * 46}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  crime: SV.wrap("Coding benchmark (%)",
    SV.axis(44, 170, 306, 170) +
    `<rect x="62" y="40" width="58" height="130" class="c-bar1"/><rect x="142" y="108" width="58" height="62" class="c-bar2"/><rect x="222" y="108" width="58" height="62" class="c-bar2"/>
     <text x="91" y="33" class="c-val" text-anchor="middle">52.8</text><text x="171" y="101" class="c-val" text-anchor="middle">69.1</text><text x="251" y="101" class="c-val" text-anchor="middle">30.8</text>
     <text x="91" y="190" class="c-lab" text-anchor="middle">New model</text><text x="171" y="190" class="c-lab" text-anchor="middle">Last gen</text><text x="251" y="190" class="c-lab" text-anchor="middle">Old model</text>`),

  circles: SV.wrap("Sales of two products (10k units)",
    `<circle cx="95" cy="120" r="32" fill="#D9D4C6" class="c-slice"/><circle cx="222" cy="112" r="64" fill="#FF7EC3" class="c-slice"/>
     <text x="95" y="124" class="c-val" text-anchor="middle">100</text><text x="222" y="117" class="c-val" text-anchor="middle">200</text>
     <text x="95" y="198" class="c-lab" text-anchor="middle">Product A</text><text x="222" y="198" class="c-lab" text-anchor="middle">Product B</text>`),
  gapaxis: SV.wrap("App users (10k)",
    SV.grid(128.3, "20") + SV.grid(86.6, "40") + SV.grid(44.9, "60") +
    `<polyline points="60,128.3 118,119.9 176,111.6 234,44.9 292,36.5" class="c-line"/>` +
    [[60, 128.3], [118, 119.9], [176, 111.6], [234, 44.9], [292, 36.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2020", "2021", "2022", "2025", "2026"].map((m, i) => `<text x="${60 + i * 58}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  points: SV.wrap("Brand market share (%)",
    SV.grid(133.5, "5") + SV.grid(97, "10") + SV.grid(60.5, "15") +
    `<rect x="80" y="97" width="70" height="73" class="c-bar2"/><rect x="190" y="60.5" width="70" height="109.5" class="c-bar1"/>
     <text x="115" y="90" class="c-val" text-anchor="middle">10%</text><text x="225" y="54" class="c-val" text-anchor="middle">15%</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="115" y="190" class="c-lab" text-anchor="middle">Last year</text><text x="225" y="190" class="c-lab" text-anchor="middle">This year</text>`),
  truncated: SV.wrap("Old vs new model accuracy (%)",
    SV.grid(146.9, "98.0") + SV.grid(89.2, "98.5") + SV.grid(31.5, "99.0") +
    `<rect x="80" y="135.4" width="70" height="34.6" class="c-bar2"/><rect x="190" y="31.5" width="70" height="138.5" class="c-bar1"/>
     <text x="115" y="129" class="c-val" text-anchor="middle">98.1</text><text x="225" y="25" class="c-val" text-anchor="middle">99.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="115" y="190" class="c-lab" text-anchor="middle">Old model A</text><text x="225" y="190" class="c-lab" text-anchor="middle">New model B</text>`),
  pie: SV.wrap("Residents' views on the new policy",
    SV.pie(110, 112, 78, [{ v: 45, c: "#FF7EC3", label: "45%" }, { v: 40, c: "#6C9BFF", label: "40%" }, { v: 35, c: "#FFE14D", label: "35%" }]) +
    `<text x="206" y="90" class="c-lab">Support 45%</text><text x="206" y="116" class="c-lab">Oppose 40%</text><text x="206" y="142" class="c-lab">Don't care 35%</text>`),
  cumulative: SV.wrap("Cumulative sales (10k units)",
    SV.grid(123.1, "100") + SV.grid(76.2, "200") + SV.grid(29.4, "300") +
    `<polyline points="50,123.1 98,85.6 146,57.5 194,38.8 242,29.4 290,24.7" class="c-line"/>` +
    [[50, 123.1], [98, 85.6], [146, 57.5], [194, 38.8], [242, 29.4], [290, 24.7]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => `<text x="${50 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  inverted: SV.wrap("Monthly traffic accidents in a city",
    `<path d="M44,24 L60,80 L120,98 L180,113 L240,134 L300,155 L300,24 Z" class="c-area"/>` +
    SV.grid(24, "0") + SV.grid(97, "250") + SV.grid(170, "500") +
    `<polyline points="60,80 120,98 180,113 240,134 300,155" class="c-line"/>` +
    [[60, 80], [120, 98], [180, 113], [240, 134], [300, 155]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 24, 44, 170) +
    ["Jan", "Feb", "Mar", "Apr", "May"].map((m, i) => `<text x="${60 + i * 60}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
};

/* ---------- clickable mock UIs (OSWorld, human edition) ---------- */
const UIS = {

  fakead: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>StreamTube</b></div>
    <div class="mock-body adbox">
      <button class="hs ad-img" data-opt="0"><span class="ad-x">×</span><b>SUMMER MEGA SALE</b><small>Tap to claim your $88 reward</small></button>
      <div class="ad-foot"><button class="hs ad-why" data-opt="1">Why am I seeing this ad?</button><button class="hs ad-real" data-opt="2">Close ad</button></div>
    </div></div>`,
  sms: `<div class="phone"><div class="ph-bar">Messages</div>
    <div class="sms">
      <button class="hs sms-i" data-opt="0"><b>Parcel Alerts</b><span>[QuickShip] Your package is waiting at the front desk locker. Pickup code: 3721.</span></button>
      <button class="hs sms-i" data-opt="1"><b>+1 (855) 012-4471</b><span>[YourBank] Unusual activity detected. Your account will be LOCKED today. Log in now at yourbank-verify.info and enter the code we text you to unlock it.</span></button>
      <button class="hs sms-i" data-opt="2"><b>YourBank (official)</b><span>Your card ending in 1234 was used for $36.00 at 9:21 AM.</span></button>
    </div></div>`,
  cookie: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Daily Newswire</b></div>
    <div class="mock-body news"><div class="news-fake"><span></span><span></span><span class="s"></span></div>
      <div class="cookie"><button class="hs ck-x" data-opt="3" aria-label="Close">×</button>
        <div class="ck-t">We value your privacy</div>
        <div class="ck-p">We and our 846 partners use cookies to personalize your experience and ads.</div>
        <button class="hs ck-all" data-opt="0">Accept All</button>
        <div class="ck-row"><button class="hs ck-set" data-opt="1">Manage Preferences</button><button class="hs ck-min" data-opt="2">Essential Cookies Only</button></div>
      </div></div></div>`,
  unsubscribe: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Inbox</b></div>
    <div class="mock-body mail-ui">
      <div class="mu-from"><b>MegaMart</b> &lt;deals@megamart-mail.com&gt;</div>
      <div class="mu-banner">BLACK FRIDAY<br><span>Up to 90% off everything</span></div>
      <button class="hs mu-buy" data-opt="0">Shop Now</button>
      <div class="mu-foot">This is an automated message. Please do not reply.<button class="hs mu-link" data-opt="3">View in browser</button> · <button class="hs mu-link" data-opt="1">Contact support</button><br>Don't want these emails? <button class="hs mu-unsub" data-opt="2">Unsubscribe here</button></div>
    </div></div>`,
  virus: `<div class="mock"><div class="tabs"><span class="tab">StreamTube</span><span class="tab on">SECURITY ALERT<button class="hs tab-x" data-opt="2" aria-label="Close tab">×</button></span></div>
    <div class="mock-body virus">
      <div class="vi-tri">!</div>
      <div class="vi-t">Your computer is infected with 3 viruses!</div>
      <div class="vi-p">System files are being damaged. Act within <b>00:59</b></div>
      <button class="hs vi-btn" data-opt="0">Clean Now</button>
      <button class="hs vi-btn2" data-opt="3">Download Antivirus (Free)</button>
      <button class="hs vi-tel" data-opt="1">Tech Support Hotline: 1-888-XXX-XXXX</button>
    </div></div>`,
  cancel: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Membership · Auto-Renew</b></div>
    <div class="mock-body cancel">
      <div class="ca-t">Are you sure you want to leave?</div>
      <div class="ca-p">If you cancel, you'll lose: ad-free viewing, 4K streaming, priority support, member pricing, your birthday gift...</div>
      <button class="hs ca-keep" data-opt="0">Keep My Membership</button>
      <button class="hs ca-pause" data-opt="1">Pause for 1 Month</button>
      <button class="hs ca-go" data-opt="2">Cancel Anyway</button>
    </div></div>`,
  permission: `<div class="phone"><div class="ph-bar">9:41</div>
    <div class="perm">
      <div class="pe-icon"></div>
      <div class="pe-t">“Super Bright Flashlight” would like to access:</div>
      <div class="pe-list">Contacts · Precise Location · Microphone · Photos</div>
      <button class="hs pe-btn pri" data-opt="0">Allow</button>
      <button class="hs pe-btn" data-opt="1">Allow While Using App</button>
      <button class="hs pe-btn" data-opt="2">Don't Allow</button>
    </div></div>`,
  search: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Search</b></div>
    <div class="mock-body serp">
      <div class="se-q">python download</div>
      <button class="hs se-r" data-opt="0"><span class="se-ad">Sponsored</span><b>Python Official Fast Download - 1-Click Install, Free Forever</b><small>www.python-download-free.net</small></button>
      <button class="hs se-r" data-opt="1"><span class="se-ad">Sponsored</span><b>Master Python in 7 Days or Your Money Back</b><small>learn.pythonpro-vip.com</small></button>
      <button class="hs se-r" data-opt="3"><b>Python Download - Python 3.13 Free Full Version - SoftPortal</b><small>www.softportal-dl.com/python</small></button>
      <button class="hs se-r" data-opt="2"><b>Download Python | Python.org</b><small>www.python.org/downloads</small></button>
    </div></div>`,
  checkout: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Review Order</b></div>
    <div class="mock-body order">
      <div class="or-item"><span>USB-C cable ×1</span><b>$9.99</b></div>
      <button class="hs or-row" data-opt="0"><span class="fakebox on">✓</span>Package Protection<em>$2.99</em></button>
      <button class="hs or-row" data-opt="1"><span class="fakebox on">✓</span>Join SaverPlus, first month just $0.10<em>$0.10</em><small>then $12.99/mo, auto-renews</small></button>
      <div class="or-total">Total <b>$13.08</b></div>
      <button class="hs or-submit" data-opt="2">Place Order</button>
    </div></div>`,
  delete: `<div class="dialog">
      <div class="dl-ic">!</div>
      <div class="dl-t">Permanently delete “thesis_FINAL_actually_final_v3.docx”?</div>
      <div class="dl-p">This action cannot be undone.</div>
      <div class="dl-btns"><button class="hs dg-btn" data-opt="1">Cancel</button><button class="hs dg-btn pri" data-opt="0">Delete Forever</button></div>
    </div>`,
  doubleneg: `<div class="dialog">
      <div class="dl-t">Cancel Subscription</div>
      <div class="dl-p big">Are you sure you don't want to cancel your subscription?</div>
      <div class="dl-btns"><button class="hs dg-btn" data-opt="1">No</button><button class="hs dg-btn pri" data-opt="0">Yes</button></div>
    </div>`,
  popup: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>NewsFlash App</b></div>
    <div class="mock-body popup">
      <button class="hs x-btn" data-opt="2" aria-label="Close">×</button>
      <div class="pp-t">Congrats! You're today's 100,000th visitor</div>
      <div class="pp-amt">$888 <small>cash prize</small></div>
      <button class="hs pp-big" data-opt="0">Claim Now</button>
      <button class="hs pp-agree" data-opt="1"><span class="fakebox"></span>I have read and agree to all 38 terms</button>
      <button class="hs pp-no" data-opt="3">No thanks, I hate money</button>
    </div></div>`,
  download: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>free-soft-downloads.net/vlc</b></div>
    <div class="mock-body dl">
      <div class="dl-h">VLC Media Player 3.0.21 · Free Download</div>
      <button class="hs dl-ad g" data-opt="0">DOWNLOAD NOW<span class="adtag">Ad</span></button>
      <button class="hs dl-ad o" data-opt="1">Fast Download (Recommended)<span class="adtag">Ad</span></button>
      <div class="dl-row"><button class="hs dl-ad b" data-opt="2">Start Download<span class="adtag">Ad</span></button></div>
      <div class="dl-small">Installer: <button class="hs dl-link" data-opt="3">vlc-3.0.21-universal.dmg</button> · 43 MB</div>
    </div></div>`,
  checkbox: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Sign Up · Final Step</b></div>
    <div class="mock-body form">
      <button class="hs cb-row" data-opt="0"><span class="fakebox on">✓</span><span>By checking this box, you indicate that you <b>do not wish to not receive</b> our marketing emails.</span></button>
      <button class="hs form-btn" data-opt="1">Complete Sign-Up</button>
    </div></div>`,
  urls: `<div class="urls">
      <button class="hs url" data-opt="0"><span class="lock"></span>https://github.com.login-verify.io/session</button>
      <button class="hs url" data-opt="1"><span class="lock"></span>https://githuub.com/login</button>
      <button class="hs url" data-opt="2"><span class="lock"></span>https://github.com/login</button>
      <button class="hs url" data-opt="3"><span class="lock"></span>https://login-github.com/session</button>
    </div>`,
};

/* ---------- benchmark-table rows: rival numbers come from the official launch tables ---------- */
const MODELS = ["Opus 5.5", "Fable 5.1", "GPT-6 Astra", "GPT-5.6 Sol"];
const MODELS_SHORT = ["Opus<br>5.5", "Fable<br>5.1", "GPT-6<br>Astra", "GPT-5.6<br>Sol"];
const ROWS = [
  { id: "traps", cat: "Classic fails", bench: "HumanBench-Traps", vals: [null, null, null, null], note: "the models didn't show up" },
  { id: "knowledge", cat: "World knowledge", bench: "AA-Omniscience", vals: [null, null, null, null] },
  { id: "arc", cat: "Fluid intelligence", bench: "ARC-AGI", vals: [null, null, null, null] },
  { id: "terminal", cat: "Agentic coding", bench: "Terminal-Bench 4.0", vals: [66.4, 55.8, 57.9, 37.3] },
  { id: "frontier", cat: "Agentic coding", bench: "FrontierCode v1.1", vals: [54.4, 50.3, 53.3, 47.5] },
  { id: "cursor", cat: "Agentic coding", bench: "CursorBench 4.0", vals: [57.8, 51.8, null, 41.7] },
  { id: "gdpval", cat: "Knowledge work", bench: "GDPval-AA v2.1", vals: [1846, 1735, 1542, 1588], elo: true },
  { id: "automation", cat: "Business workflows", bench: "AutomationBench", vals: [40.0, 31.4, 41.4, 28.8] },
  { id: "hle", cat: "Multidisciplinary reasoning", bench: "Humanity's Last Exam", vals: [67.7, 65.6, 57.2, null] },
  { id: "science", cat: "Agentic scientific research", bench: "Terminal-Bench-Science 0.1", vals: [58.7, 52.6, 64.6, 22.4] },
  { id: "osworld", cat: "Computer use", bench: "OSWorld 2.0", vals: [81.8, 80.7, null, null] },
  { id: "chart", cat: "Visual chart recognition", bench: "Chartography", vals: [89.0, 88.4, null, null] },
];

/* ---------- AA Intelligence Index v4.3.2 public data ---------- */
const AA = [
  ["Claude Opus 5.5", 58, "anthropic"], ["GPT-6 Astra", 53, "openai"], ["Claude Opus 5", 51, "anthropic"],
  ["Claude Fable 5", 50, "anthropic"], ["GPT-5.6 Sol", 47, "openai"], ["Grok 4.7", 46, "xai"],
  ["Qwen3.8 Max", 45, "alibaba"], ["Kimi K3", 44, "moonshot"], ["Gemini 3.8 Flash", 41, "google"],
  ["DeepSeek V4.1 Flash", 39, "deepseek"], ["GLM-5.2", 34, "zhipu"], ["MiniMax-M3", 29, "minimax"],
  ["Claude 4.5 Haiku", 17, "anthropic"], ["gpt-oss-120b", 12, "openai"],
];
const VENDOR_COLOR = {
  anthropic: "#C8775A", openai: "#1E1E1E", xai: "#7A6CD6", alibaba: "#F07B2E", moonshot: "#3B82F6",
  google: "#4CAF62", deepseek: "#2F45D9", zhipu: "#3867D6", minimax: "#D9486B", xiaomi: "#F58A3C", mistral: "#F0A030",
};

/* ---------- skill-question pools ---------- */
const POOLS = {


  // Dense checkup: each question tests 2-3 domains at once, all must be right. More right = more experts activated
  dense: [
    { lv: 1, q: "Answer both: (1) What does the P in PDF stand for? (2) What's the largest planet in the solar system?", issue: "Dropped the ball while multitasking", opts: [
      { t: "(1) Portable (2) Jupiter", ok: 1, r: "Correct. Portable Document Format; Jupiter outweighs all the other planets combined. Both experts online." },
      { t: "(1) Printable (2) Jupiter", r: "(1) It's Portable, not Printable." },
      { t: "(1) Portable (2) Saturn", r: "(2) It's Jupiter. Saturn just has nicer rings." },
      { t: "(1) Printable (2) Saturn", r: "Both experts are slacking off." },
    ] },
    { lv: 1, q: "Answer both: (1) What's the shortest month of the year? (2) How many colors are in a rainbow (the usual answer)?", issue: "Dropped the ball while multitasking", opts: [
      { t: "(1) February (2) 7", ok: 1, r: "Correct. Both experts online." },
      { t: "(1) February (2) 6", r: "(2) The usual answer is 7: ROY G. BIV." },
      { t: "(1) April (2) 7", r: "(1) It's February, 29 days max." },
      { t: "(1) April (2) 6", r: "Neither expert woke up." },
    ] },
    { lv: 2, q: "Answer both: (1) What does console.log(\"2\" * \"3\") print? (2) What's the deepest ocean trench on Earth?", issue: "Crashed switching between domains", opts: [
      { t: "(1) 6 (2) Mariana Trench", ok: 1, r: "Correct. * converts the strings to numbers; the Mariana Trench is about 11,000 meters (36,000 ft) deep." },
      { t: "(1) \"23\" (2) Mariana Trench", r: "(1) Only + concatenates strings. * converts them to numbers." },
      { t: "(1) 6 (2) Great Rift Valley", r: "(2) The Great Rift Valley is on land. The deepest trench is the Mariana." },
      { t: "(1) \"23\" (2) Great Rift Valley", r: "The coding expert and the geography expert both went offline." },
    ] },
    { lv: 2, q: "Answer both: (1) 3 people eat 3 lbs of rice in 3 days. How many lbs do 9 people eat in 9 days? (2) Roughly how long does sunlight take to reach Earth?", issue: "Crashed switching between domains", opts: [
      { t: "(1) 27 lbs (2) About 8 minutes", ok: 1, r: "Correct. Each person eats 1/3 lb a day, 9×9÷3 = 27; sunlight takes about 8 min 20 sec." },
      { t: "(1) 9 lbs (people and days scale together) (2) About 8 minutes", r: "(1) People and days both tripled, so the rice goes up 9x." },
      { t: "(1) 27 lbs (2) About 8 seconds", r: "(2) About 8 minutes, not 8 seconds." },
      { t: "(1) 9 lbs (2) About 8 seconds", r: "The math expert and the physics expert are both slacking off." },
    ] },
    { lv: 2, q: "Answer both: (1) In Python, what is 10 // 3? (2) What carries oxygen in human blood?", issue: "Crashed switching between domains", opts: [
      { t: "(1) 3 (2) Red blood cells", ok: 1, r: "Correct. // is floor division; hemoglobin in red blood cells carries the oxygen." },
      { t: "(1) 3.33 (2) Red blood cells", r: "(1) // is floor division, so it's 3. / is the one that gives 3.33." },
      { t: "(1) 3 (2) White blood cells", r: "(2) White blood cells handle immunity. Red blood cells carry oxygen." },
      { t: "(1) 3.33 (2) White blood cells", r: "Both experts dropped offline at once." },
    ] },
    { lv: 2, q: "Answer both: (1) If you double the side of a square, the area becomes how many times bigger? (2) What does Ctrl + Z usually do?", issue: "Crashed switching between domains", opts: [
      { t: "(1) 4x (2) Undo", ok: 1, r: "Correct. Side ×2, area ×4; Ctrl+Z is undo, one of humanity's greatest inventions." },
      { t: "(1) 2x (2) Undo", r: "(1) Area is side squared, so doubling gives 4x." },
      { t: "(1) 4x (2) Save", r: "(2) Save is Ctrl+S." },
      { t: "(1) 2x (2) Save", r: "The math expert and the computer expert both called in sick." },
    ] },
    { lv: 3, q: "Answer all three: (1) What's the largest 4-bit binary number (in decimal)? (2) What's element #1 on the periodic table? (3) If you sleep 8 hours a day, how many hours do you sleep in a week?", issue: "Dropped the ball running three threads", opts: [
      { t: "(1) 15 (2) Hydrogen (3) 56", ok: 1, r: "Correct. 1111 = 15; element #1 is hydrogen; 8×7 = 56. Three experts online at once, getting close to Dense." },
      { t: "(1) 16 (2) Hydrogen (3) 56", r: "(1) 4 bits can represent 16 values, but the max is 15 (counting starts at 0)." },
      { t: "(1) 15 (2) Helium (3) 56", r: "(2) Helium is #2. #1 is hydrogen." },
      { t: "(1) 15 (2) Hydrogen (3) 64", r: "(3) 8 × 7 = 56." },
    ] },
    { lv: 3, q: "Answer all three: (1) After 12:00 sharp, when do the hour and minute hands first overlap? (2) “Hello, World” got famous from a classic textbook for which language? (3) Roughly how far does sound travel through air in 1 second?", issue: "Dropped the ball running three threads", opts: [
      { t: "(1) Around 1:05 (2) C (3) About 340 m", ok: 1, r: "Correct. About 1:05:27; it got famous from The C Programming Language; sound travels about 340 m/s. Three experts online." },
      { t: "(1) 1:00 sharp (2) C (3) About 340 m", r: "(1) At 1:00 the minute hand is on 12 and the hour hand is on 1. No overlap yet." },
      { t: "(1) Around 1:05 (2) Python (3) About 340 m", r: "(2) Python showed up almost 20 years later." },
      { t: "(1) Around 1:05 (2) C (3) About 3,400 m", r: "(3) One zero too many." },
    ] },
    { lv: 3, q: "Answer all three: (1) Flip a fair coin twice. What's the chance of at least one heads? (2) Which blood type is the “universal donor” (red cells)? (3) What does HTTP status 404 mean?", issue: "Dropped the ball running three threads", opts: [
      { t: "(1) 3/4 (2) Type O (3) Page not found", ok: 1, r: "Correct. 1 − 1/4 = 3/4; type O red cells can go to any blood type; 404 is Not Found." },
      { t: "(1) 1/2 (2) Type O (3) Page not found", r: "(1) Two tails in a row is 1/4, so at least one heads is 3/4." },
      { t: "(1) 3/4 (2) Type AB (3) Page not found", r: "(2) AB is the “universal recipient.” O is the “universal donor.”" },
      { t: "(1) 3/4 (2) Type O (3) The server crashed", r: "(3) A server crash is usually a 500. 404 means not found." },
    ] },
    { lv: 3, q: "Answer all three: (1) How many MB in 1 GB (counting by 1024)? (2) Where is the Mona Lisa kept today? (3) What's the chance of rolling an even number on a die?", issue: "Dropped the ball running three threads", opts: [
      { t: "(1) 1024 (2) The Louvre (3) 1/2", ok: 1, r: "Correct. Three experts online at once." },
      { t: "(1) 1000 (2) The Louvre (3) 1/2", r: "(1) Counting by 1024, it's 1024 MB. Only hard drive makers count by 1000." },
      { t: "(1) 1024 (2) The British Museum (3) 1/2", r: "(2) It's at the Louvre in Paris." },
      { t: "(1) 1024 (2) The Louvre (3) 1/3", r: "(3) 2, 4, 6: three evens out of six. That's 1/2." },
    ] },
  ],
  knowledge: [
    { lv: 2, q: "Measured from base to peak, what's the tallest mountain on Earth?", issue: "Only memorized “highest elevation”", opts: [
      { t: "Mount Everest", r: "Everest has the highest elevation. Measured from its base, Hawaii's Mauna Kea is over 10,000 m, most of it underwater." },
      { t: "Mauna Kea", ok: 1, r: "Correct. From its base on the ocean floor, it's over 10,000 m. Taller than Everest." },
      { t: "Kilimanjaro", r: "Tallest in Africa, but not even close." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "How many hearts does an octopus have?", issue: "Blind spot on marine biology", opts: [
      { t: "1", r: "It has 3: two pump blood to the gills, one serves the whole body." },
      { t: "3", ok: 1, r: "Correct. Two for the gills, one for the body. And its blood is blue." },
      { t: "8", r: "8 is the number of arms. A heart per arm would be a bit much." },
      { fun: 1, t: "0", r: "It's doing just fine, thanks." },
    ] },
    { q: "Botanically speaking, a banana “tree” is actually a...?", issue: "Thought bananas grow on trees", opts: [
      { t: "Tropical evergreen tree", r: "It has no woody stem. The “trunk” is layers of rolled-up leaf sheaths." },
      { t: "Giant herbaceous plant", ok: 1, r: "Correct. Bananas are among the largest herbaceous plants in the world." },
      { t: "Vine", r: "It doesn't climb. It just stands there." },
      { t: "Shrub", r: "Shrubs are woody too. Bananas have no wood." },
    ] },
    { q: "Can you see the Great Wall of China from space with the naked eye?", issue: "Believed the Great Wall is visible from space", opts: [
      { t: "Yes, it's the only man-made structure you can see", r: "Classic myth. The wall is very long but very narrow. NASA says no, and China's first astronaut, Yang Liwei, said he couldn't see it either." },
      { t: "No", ok: 1, r: "Correct. Even China's first astronaut, Yang Liwei, said he couldn't see it." },
      { t: "Only at night", r: "What you see at night is city lights, not the Wall." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "Do goldfish really have a 3-second memory?", issue: "Believed the goldfish-memory myth", opts: [
      { t: "Yes, which is why they never get bored in the tank", r: "Myth. In experiments, goldfish remember their training for months." },
      { t: "No, they can remember for months", ok: 1, r: "Correct. The 3-second memory thing is something humans made up about goldfish." },
      { t: "It's more like 1 second", r: "You just made the myth even shorter." },
      { t: "Depends on the breed", r: "Breed doesn't matter. They all remember way longer than 3 seconds." },
    ] },
    { q: "The claim that “humans only use 10% of their brains” is...?", issue: "Believed the 10%-of-your-brain myth", opts: [
      { t: "True", r: "Myth. Brain imaging shows almost every region of the brain is active." },
      { t: "A myth", ok: 1, r: "Correct. There's no idle 90%. Different regions just work at different times." },
      { fun: 1, t: "Einstein unlocked 20%", r: "This version of the myth is even wilder." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Cleopatra lived closer in time to which event?", issue: "No sense of historical time scale", opts: [
      { t: "The building of the Great Pyramid of Giza", r: "The Great Pyramid was already about 2,500 years old when she was born. To her, the pyramids were antiques too." },
      { t: "The Moon landing", ok: 1, r: "Correct. She's about 2,000 years from the Moon landing and about 2,500 from the Great Pyramid." },
      { t: "About the same distance from both", r: "They differ by about 500 years. Not exactly “about the same.”" },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Which came first: Oxford University or the Aztec Empire?", issue: "No sense of historical time scale", opts: [
      { t: "The Aztec Empire", r: "The Aztec capital wasn't founded until 1325. Oxford was teaching by 1096." },
      { t: "Oxford", ok: 1, r: "Correct. People were teaching at Oxford by 1096, more than 200 years before the Aztec capital was founded." },
      { t: "Same year", r: "Off by more than 200 years." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Which appeared on Earth first: sharks or trees?", issue: "No sense of the evolutionary timeline", opts: [
      { t: "Trees", r: "Sharks beat them by tens of millions of years. They watched the first tree grow." },
      { t: "Sharks", ok: 1, r: "Correct. Sharks have been around for over 400 million years, longer than the earliest trees." },
      { t: "Same time", r: "Off by tens of millions of years." },
      { fun: 1, t: "Dinosaurs came first", r: "Dinosaurs showed up over 100 million years later." },
    ] },
    { lv: 2, q: "What did Nintendo originally sell?", issue: "Didn't know Nintendo's original business", opts: [
      { t: "Arcade games", r: "Video games came decades later. In 1889 it sold hanafuda playing cards." },
      { t: "Playing cards", ok: 1, r: "Correct. Founded in 1889, it started out selling playing cards." },
      { fun: 1, t: "Instant ramen", r: "It really did try selling instant rice, but that's not how it started." },
      { t: "Taxi service", r: "It did run a taxi company in the 1960s, but that was a later side hustle." },
    ] },
    { lv: 2, q: "What was the first recorded computer bug in history?", issue: "Didn't know where “bug” comes from", opts: [
      { t: "A mistyped line of code", r: "That bug was a literal bug." },
      { t: "An actual moth", ok: 1, r: "Correct. In 1947, engineers found a moth in the Harvard Mark II and taped it into the logbook." },
      { t: "A computer virus", r: "Viruses came much later." },
      { t: "A power outage", r: "A power outage isn't a bug. It's an incident." },
    ] },
    { q: "Where does the name of the Python programming language come from?", issue: "Didn't know where Python's name comes from", opts: [
      { t: "The snake", r: "Not the snake. The creator was a fan of the British comedy show Monty Python's Flying Circus." },
      { t: "The British comedy troupe Monty Python", ok: 1, r: "Correct. That's why the Python docs are full of spam and eggs." },
      { fun: 1, t: "The creator's pet", r: "The creator did not own a python." },
      { t: "Python, the giant serpent Apollo slew in Greek myth", r: "Sounds very cultured. Still no." },
    ] },
    { q: "What does the T in GPT stand for?", issue: "Didn't know what GPT stands for", opts: [
      { t: "Turbo", r: "Turbo was a suffix added later. T is for Transformer." },
      { t: "Transformer", ok: 1, r: "Correct. Generative Pre-trained Transformer." },
      { t: "Token", r: "Very on-brand for AI people, but no." },
      { t: "Transfer (as in transfer learning)", r: "Transfer learning is a related concept, but T is for Transformer." },
    ] },
    { lv: 2, q: "What does “Wi-Fi” stand for?", issue: "Believed Wi-Fi's “full name”", opts: [
      { t: "Wireless Fidelity, as in Hi-Fi for radio", r: "Most people think so. Actually, Wi-Fi is a brand name made up by a marketing firm. It was never an abbreviation." },
      { t: "It doesn't stand for anything", ok: 1, r: "Correct. It's a brand name. “Wireless Fidelity” got tacked on later." },
      { t: "Wireless Fiber", r: "It doesn't run on fiber." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Where does the name “Bluetooth” come from?", issue: "Didn't know where Bluetooth's name comes from", opts: [
      { fun: 1, t: "The inventor had blue teeth", r: "Not the inventor. A king from over a thousand years ago." },
      { t: "A Danish king's nickname", ok: 1, r: "Correct. Harald “Bluetooth,” a 10th-century Danish king, united Denmark, just like Bluetooth unites devices." },
      { t: "The blue indicator light", r: "The name came first, the light came later." },
      { fun: 1, t: "A deep-sea shark", r: "No such shark." },
    ] },
    { q: "Where does the name Google come from?", issue: "Didn't know where Google's name comes from", opts: [
      { t: "Googol, which is 10 to the 100th power", ok: 1, r: "Correct. Supposedly it was misspelled and became Google." },
      { fun: 1, t: "The founders' dog", r: "No dogs were involved in the naming." },
      { t: "A mashup of “go” and “ogle” (to stare), meaning “go take a look”", r: "Sounds legit, but no." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Counting overseas territories, which country has the most time zones?", issue: "Only thought about land area", opts: [
      { t: "Russia", r: "Russia has 11, which is a lot. France has 12 thanks to its overseas territories." },
      { t: "France", ok: 1, r: "Correct. Thanks to overseas territories scattered around the globe, France has 12 time zones." },
      { t: "United States", r: "Even with its territories, the US doesn't reach 12." },
      { t: "China", r: "China uses just 1." },
    ] },
    { lv: 2, q: "Counting its territories, how many standard time zones does the US officially use?", issue: "Didn't know how many time zones the US has", opts: [
      { t: "4", r: "That's just the lower 48. Keep going." },
      { t: "6", r: "Still missing a few. Don't forget the territories." },
      { t: "9", ok: 1, r: "Correct. Atlantic, Eastern, Central, Mountain, Pacific, Alaska, Hawaii-Aleutian, Samoa and Chamorro." },
      { t: "12", r: "Too many. That's France's number." },
    ] },
    { lv: 2, q: "Was Napoleon actually short?", issue: "Believed Napoleon was short", opts: [
      { t: "Yes, about 5'2\", hence the term “Napoleon complex”", r: "Myth. He was about 5'7\", average for his time." },
      { t: "No, about 5'7\", average for his time", ok: 1, r: "Correct. The “short” thing comes partly from a French-vs-English unit mix-up, plus British cartoons roasting him." },
      { fun: 1, t: "He was 6'3\"", r: "Overcorrected." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "Does honey go bad if you keep it long enough?", issue: "Didn't know honey basically never spoils", opts: [
      { t: "Yes, once opened, bacteria multiply fast and it goes sour within a month", r: "Honey is low in water and acidic, so bacteria can barely survive. Crystallizing isn't spoiling." },
      { t: "Basically never. Archaeologists have found edible 3,000-year-old honey", ok: 1, r: "Correct. Sealed properly, honey almost never goes bad. It just crystallizes." },
      { t: "Only if you don't refrigerate it", r: "Refrigerating it actually makes it crystallize faster." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "What's the largest organ in the human body?", issue: "Missed the most obvious organ", opts: [
      { t: "Liver", r: "The liver is the largest internal organ. But the largest organ is the one you're wearing." },
      { t: "Brain", r: "The brain weighs about 3 lbs. Way lighter." },
      { t: "Skin", ok: 1, r: "Correct. An adult's skin spread out is about 2 square meters (20 sq ft)." },
      { t: "Intestines", r: "Intestines are long, but by weight and area, skin wins." },
    ] },
    { q: "Do penguins have knees?", issue: "Thought penguins have no knees", opts: [
      { t: "No, that's why they waddle", r: "They do, hidden under their feathers. Penguins walk in a permanent squat." },
      { t: "Yes, under the feathers", ok: 1, r: "Correct. Penguin legs are actually pretty long. They're just always squatting." },
      { t: "Only emperor penguins do", r: "All penguins do." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "A “light-year” is a unit of what?", issue: "Got fooled by the “year” in the name", opts: [
      { t: "Time", r: "It has “year” in the name, but it's the distance light travels in a year." },
      { t: "Distance", ok: 1, r: "Correct. About 5.88 trillion miles (9.46 trillion km)." },
      { t: "Speed", r: "The speed of light is a speed. A light-year is a distance." },
      { t: "Brightness", r: "Nothing to do with brightness." },
    ] },
    { q: "Can lightning strike the same place twice?", issue: "Believed lightning never strikes twice", opts: [
      { t: "No, once the charge is released, that spot is safe for a while", r: "Classic myth. The Empire State Building gets hit about 20+ times a year." },
      { t: "Yes, and often", ok: 1, r: "Correct. Skyscrapers and mountaintops are repeat customers." },
      { t: "Only in summer", r: "Winter thunderstorms are a thing too." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 2, q: "Looking at the Mona Lisa today, does she have visible eyebrows?", issue: "Never noticed the Mona Lisa's eyebrows", opts: [
      { t: "Yes, thick ones", r: "Go look at the painting. You can barely see any." },
      { t: "Barely visible", ok: 1, r: "Correct. Maybe the paint faded or they were cleaned off in a restoration. People still argue about it." },
      { t: "Only on one side", r: "Both sides are barely visible." },
      { t: "I don't know", half: 1 },
    ] },
    { q: "What does “quiet quitting” actually mean?", issue: "Doesn't know basic workplace slang", opts: [
      { t: "Resigning without telling anyone", r: "You still show up. You just stop going above and beyond." },
      { t: "Doing exactly your job and nothing extra", ok: 1, r: "Correct: no unpaid overtime, no volunteering for extra work. Basic office-worker knowledge." },
      { fun: 1, t: "Quitting by leaving a Post-it on your monitor", r: "Iconic, but no." },
      { t: "Getting fired without being told", r: "That's “quiet firing.” Different thing." },
    ] },
    { q: "Botanically, a tomato is a...?", issue: "Mixed up kitchen and botany categories", opts: [
      { t: "Vegetable (nightshade family)", r: "In the kitchen it's a vegetable. Botanically it's a berry." },
      { t: "Berry (a fruit)", ok: 1, r: "Correct. Botanically, a tomato is a berry. Please don't put it in fruit salad though." },
      { t: "Nut", r: "One bite and you'll know it's not." },
      { t: "None of the above", r: "It has a clear category: berry." },
    ] },
    { lv: 2, q: "What's special about koala fingerprints?", issue: "Blind spot on animal trivia", opts: [
      { t: "Koalas have no fingerprints, just smooth paw pads", r: "They do, and they look a lot like ours." },
      { t: "They look almost exactly like human fingerprints", ok: 1, r: "Correct. So similar they're hard to tell apart under a microscope. A koala crime would be a nightmare for CSI." },
      { fun: 1, t: "They're square", r: "Fingerprints don't come in square." },
      { t: "Every koala has the same ones", r: "Every koala's are unique, same as people." },
    ] },
    { lv: 2, q: "What color are the American flags on the Moon most likely by now?", issue: "Never thought about UV on the Moon", opts: [
      { t: "Still red, white and blue. NASA used a special sun-resistant fabric", r: "With no atmosphere to block UV, decades of exposure have most likely faded them." },
      { t: "Bleached white by the sun", ok: 1, r: "Correct. UV on the Moon is brutal. The flags have most likely faded to white." },
      { t: "Black", r: "They don't tan. They bleach." },
      { t: "They're long gone", r: "Apollo 11's got knocked over by the engine exhaust, but most of the others are still standing." },
    ] },
    { q: "What year was the Turing test proposed?", issue: "Underestimated how old AI is", opts: [
      { t: "1950", ok: 1, r: "Correct. Turing proposed the “imitation game” in a 1950 paper." },
      { t: "1990", r: "40 years too late." },
      { t: "2010", r: "60 years too late." },
      { fun: 1, t: "2022, the ChatGPT year", r: "People only started talking about it nonstop after ChatGPT, but it's over 70 years old." },
    ] },
    { lv: 3, q: "What's the smallest bone in the human body?", issue: "Blind spot on human-body trivia", opts: [
      { t: "The stapes", ok: 1, r: "Correct. The stapes is in the middle ear, about the size of a grain of rice." },
      { t: "A pinky toe bone", r: "Tiny, but not the tiniest. The smallest is in your ear." },
      { t: "The tailbone", r: "Your tailbone is way bigger than you think." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 3, q: "What's the smallest country in the world by area?", issue: "Blind spot on geography trivia", opts: [
      { t: "Monaco", r: "Second smallest. The smallest is Vatican City, about 0.44 km² (0.17 sq mi)." },
      { t: "Vatican City", ok: 1, r: "Correct. About 0.44 km², smaller than a lot of college campuses." },
      { t: "Singapore", r: "Singapore is way bigger than both." },
      { t: "Liechtenstein", r: "Small, but not the smallest." },
    ] },
    { lv: 3, q: "By total weight (biomass), what makes up the largest share of life on Earth?", issue: "Biomass intuition failed", opts: [
      { t: "Bacteria", r: "Bacteria are second, around 13%. Plants are roughly 80%." },
      { t: "Plants", ok: 1, r: "Correct. Plants are about 80% of Earth's biomass. All animals combined are a rounding error." },
      { t: "Ants", r: "“Ants outweigh humans” is a popular claim, but next to plants, all animals combined are a rounding error." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 3, q: "Sound travels fastest through which medium?", issue: "Blind spot on basic physics", opts: [
      { t: "Air", r: "Air is the slowest, about 340 m/s." },
      { t: "Water", r: "About 1,500 m/s in water. Faster than air, but no match for steel." },
      { t: "Steel", ok: 1, r: "Correct. About 5,900 m/s in steel. Sound moves fastest through solids." },
      { t: "Vacuum", r: "A vacuum has no medium. Sound can't travel at all." },
    ] },
    { lv: 3, q: "The term “butterfly effect” originally comes from which field?", issue: "Didn't know where the butterfly effect comes from", opts: [
      { t: "Meteorology", ok: 1, r: "Correct. Meteorologist Edward Lorenz found weather forecasts are wildly sensitive to initial conditions, hence the metaphor." },
      { t: "Biology, from studying butterflies", r: "Nothing to do with actual butterflies." },
      { t: "Economics", r: "Economics borrowed it, but that's not where it started." },
      { t: "A movie", r: "The Butterfly Effect (the movie) came much later." },
    ] },
    { lv: 3, q: "By number of native speakers, what's the most spoken language in the world?", issue: "Mixed up native speakers and learners", opts: [
      { t: "English, obviously", r: "English has the most learners. By native speakers, Mandarin is #1." },
      { t: "Mandarin Chinese", ok: 1, r: "Correct. By native speakers: Mandarin first, Spanish second, English third." },
      { t: "Spanish", r: "Spanish is #2 in native speakers." },
      { t: "Hindi", r: "A lot, but not #1." },
    ] },
    { lv: 3, q: "What year was the DNA double helix structure published?", issue: "Blind spot on the history of science", opts: [
      { t: "1900", r: "Back then nobody had even figured out DNA carries genetic info." },
      { t: "1953", ok: 1, r: "Correct. Watson and Crick published in 1953, and Rosalind Franklin's X-ray photo was crucial." },
      { t: "1975", r: "20+ years too late." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 3, q: "If you boil water at the top of Pikes Peak (about 14,000 ft), roughly what temperature does it boil at?", issue: "Didn't know air pressure affects boiling point", opts: [
      { t: "Below 100°C (212°F)", ok: 1, r: "Correct. Lower pressure, lower boiling point. On top of Everest it boils around 70-something °C, and your pasta won't cook." },
      { t: "Above 100°C (212°F)", r: "Wrong direction. Only a pressure cooker gets above 100°C." },
      { t: "Exactly 100°C (212°F)", r: "100°C is the boiling point at standard sea-level pressure." },
      { fun: 1, t: "Depends on how high the burner is", r: "Heat only changes how fast it boils, not the temperature it boils at." },
    ] },
    { lv: 3, q: "In clear open ocean, which color of light reaches the deepest?", issue: "Blind spot on optics trivia", opts: [
      { t: "Red", r: "Red gets absorbed first. That's why red fish in the deep sea look black." },
      { t: "Blue", ok: 1, r: "Correct. That's part of why the ocean looks blue." },
      { t: "Yellow", r: "Yellow doesn't make it that deep." },
      { t: "I don't know", half: 1 },
    ] },
    { lv: 3, q: "Roughly how many times does a person blink in a lifetime?", issue: "Off on estimation", opts: [
      { t: "Tens of thousands", r: "You blink over 10,000 times in a single day." },
      { t: "Millions", r: "That's just one year." },
      { t: "Hundreds of millions", ok: 1, r: "Correct. About 15 a minute, over 10,000 a day, hundreds of millions in a lifetime." },
      { fun: 1, t: "Hundreds of billions", r: "You'd have to blink dozens of times per second." },
    ] },
    { lv: 2, q: "Which of these is NOT a programming language?", issue: "Can't tell a programming language from a markup language", opts: [
      { t: "Python", r: "Python is a legit programming language." },
      { t: "Rust", r: "Rust is a legit programming language. A hard one, too." },
      { t: "HTML", ok: 1, r: "Correct. HTML is a markup language. Your HTML friends may disagree." },
      { t: "Go", r: "Go is Google's programming language." },
    ] },
  ],
