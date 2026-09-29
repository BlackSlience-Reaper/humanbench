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

  dualaxis: SV.wrap("Action A (€, gauche) vs temp. ville B (°C, droite)",
    SV.grid(170, "0") + SV.grid(97, "50") + SV.grid(24, "100") +
    `<text x="300" y="174" class="c-tick">0</text><text x="300" y="101" class="c-tick">5</text><text x="300" y="28" class="c-tick">10</text>
     <polyline points="54,150 100,122 146,98 192,72 238,54 284,36" class="c-line" style="stroke:#FF7EC3;stroke-width:4"/>
     <polyline points="54,146 100,126 146,94 192,76 238,50 284,40" class="c-line" style="stroke-dasharray:6 4"/>
     <text x="60" y="196" class="c-lab">Rose : action</text><text x="190" y="196" class="c-lab">Pointillés : temp.</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) + SV.axis(296, 24, 296, 170)),
  logscale: SV.wrap("Utilisateurs de l’app (axe Y : échelle log)",
    SV.grid(170, "1") + SV.grid(121, "10") + SV.grid(72, "100") + SV.grid(24, "1000") +
    `<polyline points="54,164 100,146 146,127 192,108 238,89 284,70" class="c-line"/>` +
    [[54, 164], [100, 146], [146, 127], [192, 108], [238, 89], [284, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["An 1", "An 2", "An 3", "An 4", "An 5", "An 6"].map((m, i) => `<text x="${54 + i * 46}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  crime: SV.wrap("Benchmark de code (%)",
    SV.axis(44, 170, 306, 170) +
    `<rect x="62" y="40" width="58" height="130" class="c-bar1"/><rect x="142" y="108" width="58" height="62" class="c-bar2"/><rect x="222" y="108" width="58" height="62" class="c-bar2"/>
     <text x="91" y="33" class="c-val" text-anchor="middle">52.8</text><text x="171" y="101" class="c-val" text-anchor="middle">69.1</text><text x="251" y="101" class="c-val" text-anchor="middle">30.8</text>
     <text x="91" y="190" class="c-lab" text-anchor="middle">Nouveau</text><text x="171" y="190" class="c-lab" text-anchor="middle">Gén. préc.</text><text x="251" y="190" class="c-lab" text-anchor="middle">Ancien</text>`),

  circles: SV.wrap("Ventes de deux produits (×10 000)",
    `<circle cx="95" cy="120" r="32" fill="#D9D4C6" class="c-slice"/><circle cx="222" cy="112" r="64" fill="#FF7EC3" class="c-slice"/>
     <text x="95" y="124" class="c-val" text-anchor="middle">100</text><text x="222" y="117" class="c-val" text-anchor="middle">200</text>
     <text x="95" y="198" class="c-lab" text-anchor="middle">Produit A</text><text x="222" y="198" class="c-lab" text-anchor="middle">Produit B</text>`),
  gapaxis: SV.wrap("Utilisateurs de l’app (×10 000)",
    SV.grid(128.3, "20") + SV.grid(86.6, "40") + SV.grid(44.9, "60") +
    `<polyline points="60,128.3 118,119.9 176,111.6 234,44.9 292,36.5" class="c-line"/>` +
    [[60, 128.3], [118, 119.9], [176, 111.6], [234, 44.9], [292, 36.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["2020", "2021", "2022", "2025", "2026"].map((m, i) => `<text x="${60 + i * 58}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  points: SV.wrap("Part de marché de la marque (%)",
    SV.grid(133.5, "5") + SV.grid(97, "10") + SV.grid(60.5, "15") +
    `<rect x="80" y="97" width="70" height="73" class="c-bar2"/><rect x="190" y="60.5" width="70" height="109.5" class="c-bar1"/>
     <text x="115" y="90" class="c-val" text-anchor="middle">10%</text><text x="225" y="54" class="c-val" text-anchor="middle">15%</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="115" y="190" class="c-lab" text-anchor="middle">L’an dernier</text><text x="225" y="190" class="c-lab" text-anchor="middle">Cette année</text>`),
  truncated: SV.wrap("Précision ancien vs nouveau modèle (%)",
    SV.grid(146.9, "98.0") + SV.grid(89.2, "98.5") + SV.grid(31.5, "99.0") +
    `<rect x="80" y="135.4" width="70" height="34.6" class="c-bar2"/><rect x="190" y="31.5" width="70" height="138.5" class="c-bar1"/>
     <text x="115" y="129" class="c-val" text-anchor="middle">98.1</text><text x="225" y="25" class="c-val" text-anchor="middle">99.0</text>` +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    `<text x="115" y="190" class="c-lab" text-anchor="middle">Ancien modèle A</text><text x="225" y="190" class="c-lab" text-anchor="middle">Nouveau modèle B</text>`),
  pie: SV.wrap("Avis des habitants sur la nouvelle mesure",
    SV.pie(110, 112, 78, [{ v: 45, c: "#FF7EC3", label: "45%" }, { v: 40, c: "#6C9BFF", label: "40%" }, { v: 35, c: "#FFE14D", label: "35%" }]) +
    `<text x="206" y="90" class="c-lab">Pour 45 %</text><text x="206" y="116" class="c-lab">Contre 40 %</text><text x="206" y="142" class="c-lab">Sans avis 35 %</text>`),
  cumulative: SV.wrap("Ventes cumulées (×10 000 unités)",
    SV.grid(123.1, "100") + SV.grid(76.2, "200") + SV.grid(29.4, "300") +
    `<polyline points="50,123.1 98,85.6 146,57.5 194,38.8 242,29.4 290,24.7" class="c-line"/>` +
    [[50, 123.1], [98, 85.6], [146, 57.5], [194, 38.8], [242, 29.4], [290, 24.7]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 170, 306, 170) + SV.axis(44, 24, 44, 170) +
    ["Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin"].map((m, i) => `<text x="${50 + i * 48}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
  inverted: SV.wrap("Accidents de la route par mois (une ville)",
    `<path d="M44,24 L60,80 L120,98 L180,113 L240,134 L300,155 L300,24 Z" class="c-area"/>` +
    SV.grid(24, "0") + SV.grid(97, "250") + SV.grid(170, "500") +
    `<polyline points="60,80 120,98 180,113 240,134 300,155" class="c-line"/>` +
    [[60, 80], [120, 98], [180, 113], [240, 134], [300, 155]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="c-dot"/>`).join("") +
    SV.axis(44, 24, 44, 170) +
    ["Janv.", "Févr.", "Mars", "Avr.", "Mai"].map((m, i) => `<text x="${60 + i * 60}" y="190" class="c-lab" text-anchor="middle">${m}</text>`).join("")),
};

/* ---------- clickable mock UIs (OSWorld, human edition) ---------- */
const UIS = {

  fakead: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>StreamTube</b></div>
    <div class="mock-body adbox">
      <button class="hs ad-img" data-opt="0"><span class="ad-x">×</span><b>MÉGA SOLDES D’ÉTÉ</b><small>Touchez ici pour réclamer vos 88 €</small></button>
      <div class="ad-foot"><button class="hs ad-why" data-opt="1">Pourquoi cette annonce ?</button><button class="hs ad-real" data-opt="2">Fermer l’annonce</button></div>
    </div></div>`,
  sms: `<div class="phone"><div class="ph-bar">Messages</div>
    <div class="sms">
      <button class="hs sms-i" data-opt="0"><b>Alertes Colis</b><span>[ColisExpress] Votre colis vous attend en consigne à l’accueil. Code de retrait : 3721.</span></button>
      <button class="hs sms-i" data-opt="1"><b>+33 7 56 12 44 71</b><span>[VotreBanque] Activité inhabituelle détectée. Votre compte sera BLOQUÉ aujourd’hui. Connectez-vous sur votrebanque-verif.info et saisissez le code reçu par SMS pour le débloquer.</span></button>
      <button class="hs sms-i" data-opt="2"><b>VotreBanque (officiel)</b><span>Votre carte se terminant par 1234 a été débitée de 36,00 € à 9 h 21.</span></button>
    </div></div>`,
  cookie: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Le Quotidien Info</b></div>
    <div class="mock-body news"><div class="news-fake"><span></span><span></span><span class="s"></span></div>
      <div class="cookie"><button class="hs ck-x" data-opt="3" aria-label="Fermer">×</button>
        <div class="ck-t">Le respect de votre vie privée est notre priorité</div>
        <div class="ck-p">Nos 846 partenaires et nous utilisons des cookies pour personnaliser votre expérience et les publicités.</div>
        <button class="hs ck-all" data-opt="0">Tout accepter</button>
        <div class="ck-row"><button class="hs ck-set" data-opt="1">Gérer mes préférences</button><button class="hs ck-min" data-opt="2">Cookies essentiels uniquement</button></div>
      </div></div></div>`,
  unsubscribe: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Boîte de réception</b></div>
    <div class="mock-body mail-ui">
      <div class="mu-from"><b>MégaMarché</b> &lt;offres@megamarche-mail.fr&gt;</div>
      <div class="mu-banner">BLACK FRIDAY<br><span>Jusqu’à -90 % sur tout</span></div>
      <button class="hs mu-buy" data-opt="0">J’en profite</button>
      <div class="mu-foot">Ceci est un message automatique, merci de ne pas y répondre.<button class="hs mu-link" data-opt="3">Voir dans le navigateur</button> · <button class="hs mu-link" data-opt="1">Contacter le service client</button><br>Vous ne souhaitez plus recevoir ces e-mails ? <button class="hs mu-unsub" data-opt="2">Se désinscrire ici</button></div>
    </div></div>`,
  virus: `<div class="mock"><div class="tabs"><span class="tab">StreamTube</span><span class="tab on">ALERTE SÉCURITÉ<button class="hs tab-x" data-opt="2" aria-label="Fermer l’onglet">×</button></span></div>
    <div class="mock-body virus">
      <div class="vi-tri">!</div>
      <div class="vi-t">Votre ordinateur est infecté par 3 virus !</div>
      <div class="vi-p">Vos fichiers système sont en train d’être endommagés. Agissez sous <b>00:59</b></div>
      <button class="hs vi-btn" data-opt="0">Nettoyer maintenant</button>
      <button class="hs vi-btn2" data-opt="3">Télécharger l’antivirus (gratuit)</button>
      <button class="hs vi-tel" data-opt="1">Assistance technique : 08 XX XX XX XX</button>
    </div></div>`,
  cancel: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Abonnement · Renouvellement auto</b></div>
    <div class="mock-body cancel">
      <div class="ca-t">Vous êtes sûr de vouloir partir ?</div>
      <div class="ca-p">En résiliant, vous perdrez : zéro pub, streaming 4K, support prioritaire, tarifs membres, votre cadeau d’anniversaire...</div>
      <button class="hs ca-keep" data-opt="0">Garder mon abonnement</button>
      <button class="hs ca-pause" data-opt="1">Mettre en pause 1 mois</button>
      <button class="hs ca-go" data-opt="2">Résilier quand même</button>
    </div></div>`,
  permission: `<div class="phone"><div class="ph-bar">9:41</div>
    <div class="perm">
      <div class="pe-icon"></div>
      <div class="pe-t">« Lampe Torche Ultra Puissante » souhaite accéder à :</div>
      <div class="pe-list">Contacts · Position exacte · Micro · Photos</div>
      <button class="hs pe-btn pri" data-opt="0">Autoriser</button>
      <button class="hs pe-btn" data-opt="1">Lorsque l’app est active</button>
      <button class="hs pe-btn" data-opt="2">Ne pas autoriser</button>
    </div></div>`,
  search: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Recherche</b></div>
    <div class="mock-body serp">
      <div class="se-q">python télécharger</div>
      <button class="hs se-r" data-opt="0"><span class="se-ad">Sponsorisé</span><b>Python Officiel Téléchargement Rapide - Installation en 1 clic, Gratuit à Vie</b><small>www.python-telechargement-gratuit.net</small></button>
      <button class="hs se-r" data-opt="1"><span class="se-ad">Sponsorisé</span><b>Maîtrisez Python en 7 jours ou remboursé</b><small>formation.pythonpro-vip.com</small></button>
      <button class="hs se-r" data-opt="3"><b>Télécharger Python - Python 3.13 Gratuit Version Complète - LogiPortail</b><small>www.logiportail-dl.fr/python</small></button>
      <button class="hs se-r" data-opt="2"><b>Download Python | Python.org</b><small>www.python.org/downloads</small></button>
    </div></div>`,
  checkout: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Récapitulatif de commande</b></div>
    <div class="mock-body order">
      <div class="or-item"><span>Câble USB-C ×1</span><b>9,99 €</b></div>
      <button class="hs or-row" data-opt="0"><span class="fakebox on">✓</span>Protection du colis<em>2,99 €</em></button>
      <button class="hs or-row" data-opt="1"><span class="fakebox on">✓</span>Rejoignez ÉcoPlus, 1er mois à 0,10 €<em>0,10 €</em><small>puis 12,99 €/mois, renouvellement auto</small></button>
      <div class="or-total">Total <b>13,08 €</b></div>
      <button class="hs or-submit" data-opt="2">Valider la commande</button>
    </div></div>`,
  delete: `<div class="dialog">
      <div class="dl-ic">!</div>
      <div class="dl-t">Supprimer définitivement « memoire_FINAL_vraiment_final_v3.docx » ?</div>
      <div class="dl-p">Cette action est irréversible.</div>
      <div class="dl-btns"><button class="hs dg-btn" data-opt="1">Annuler</button><button class="hs dg-btn pri" data-opt="0">Supprimer</button></div>
    </div>`,
  doubleneg: `<div class="dialog">
      <div class="dl-t">Résilier l’abonnement</div>
      <div class="dl-p big">Êtes-vous sûr de ne pas vouloir résilier votre abonnement ?</div>
      <div class="dl-btns"><button class="hs dg-btn" data-opt="1">Non</button><button class="hs dg-btn pri" data-opt="0">Oui</button></div>
    </div>`,
  popup: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>App NewsFlash</b></div>
    <div class="mock-body popup">
      <button class="hs x-btn" data-opt="2" aria-label="Fermer">×</button>
      <div class="pp-t">Bravo ! Vous êtes notre 100 000e visiteur du jour</div>
      <div class="pp-amt">888 € <small>en cash</small></div>
      <button class="hs pp-big" data-opt="0">Réclamer</button>
      <button class="hs pp-agree" data-opt="1"><span class="fakebox"></span>J’ai lu et j’accepte les 38 conditions</button>
      <button class="hs pp-no" data-opt="3">Non merci, je déteste l’argent</button>
    </div></div>`,
  download: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>free-soft-downloads.net/vlc</b></div>
    <div class="mock-body dl">
      <div class="dl-h">VLC Media Player 3.0.21 · Téléchargement gratuit</div>
      <button class="hs dl-ad g" data-opt="0">TÉLÉCHARGER<span class="adtag">Pub</span></button>
      <button class="hs dl-ad o" data-opt="1">Téléchargement rapide (recommandé)<span class="adtag">Pub</span></button>
      <div class="dl-row"><button class="hs dl-ad b" data-opt="2">Lancer le téléchargement<span class="adtag">Pub</span></button></div>
      <div class="dl-small">Installeur : <button class="hs dl-link" data-opt="3">vlc-3.0.21-universal.dmg</button> · 43 Mo</div>
    </div></div>`,
  checkbox: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Inscription · Dernière étape</b></div>
    <div class="mock-body form">
      <button class="hs cb-row" data-opt="0"><span class="fakebox on">✓</span><span>En cochant cette case, vous indiquez que vous <b>ne souhaitez pas ne pas recevoir</b> nos e-mails marketing.</span></button>
      <button class="hs form-btn" data-opt="1">Terminer l’inscription</button>
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
  { id: "traps", cat: "Pièges classiques", bench: "HumanBench-Traps", vals: [null, null, null, null], note: "les modèles ne se sont pas présentés" },
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
    { lv: 1, q: "Réponds aux deux : (1) Que veut dire le P de PDF ? (2) Quelle est la plus grosse planète du système solaire ?", issue: "S’est emmêlé les pinceaux en multitâche", opts: [
      { t: "(1) Portable (2) Jupiter", ok: 1, r: "Exact. Portable Document Format ; Jupiter pèse plus que toutes les autres planètes réunies. Les deux experts sont en ligne." },
      { t: "(1) Printable (2) Jupiter", r: "(1) C’est Portable, pas Printable." },
      { t: "(1) Portable (2) Saturne", r: "(2) C’est Jupiter. Saturne a juste de plus beaux anneaux." },
      { t: "(1) Printable (2) Saturne", r: "Les deux experts tirent au flanc." },
    ] },
    { lv: 1, q: "Réponds aux deux : (1) Quel est le mois le plus court de l’année ? (2) Combien de couleurs dans un arc-en-ciel (la réponse classique) ?", issue: "S’est emmêlé les pinceaux en multitâche", opts: [
      { t: "(1) Février (2) 7", ok: 1, r: "Exact. Les deux experts sont en ligne." },
      { t: "(1) Février (2) 6", r: "(2) La réponse classique, c’est 7 : rouge, orange, jaune, vert, bleu, indigo, violet." },
      { t: "(1) Avril (2) 7", r: "(1) C’est février, 29 jours max." },
      { t: "(1) Avril (2) 6", r: "Aucun des deux experts ne s’est réveillé." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) Qu’affiche console.log(\"2\" * \"3\") ? (2) Quelle est la fosse océanique la plus profonde du monde ?", issue: "A planté en changeant de domaine", opts: [
      { t: "(1) 6 (2) La fosse des Mariannes", ok: 1, r: "Exact. * convertit les chaînes en nombres ; la fosse des Mariannes descend à environ 11 000 m." },
      { t: "(1) \"23\" (2) La fosse des Mariannes", r: "(1) Seul + concatène les chaînes. * les convertit en nombres." },
      { t: "(1) 6 (2) La vallée du Grand Rift", r: "(2) Le Grand Rift est sur la terre ferme. La fosse la plus profonde, c’est celle des Mariannes." },
      { t: "(1) \"23\" (2) La vallée du Grand Rift", r: "L’expert code et l’expert géo sont tous les deux hors ligne." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) 3 personnes mangent 3 kg de riz en 3 jours. Combien de kg mangent 9 personnes en 9 jours ? (2) En gros, combien de temps met la lumière du Soleil pour atteindre la Terre ?", issue: "A planté en changeant de domaine", opts: [
      { t: "(1) 27 kg (2) Environ 8 minutes", ok: 1, r: "Exact. Chacun mange 1/3 kg par jour, 9×9÷3 = 27 ; la lumière met environ 8 min 20 s." },
      { t: "(1) 9 kg (gens et jours s’annulent) (2) Environ 8 minutes", r: "(1) Les gens et les jours ont triplé tous les deux, donc le riz est multiplié par 9." },
      { t: "(1) 27 kg (2) Environ 8 secondes", r: "(2) Environ 8 minutes, pas 8 secondes." },
      { t: "(1) 9 kg (2) Environ 8 secondes", r: "L’expert maths et l’expert physique tirent au flanc tous les deux." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) En Python, que vaut 10 // 3 ? (2) Qu’est-ce qui transporte l’oxygène dans le sang ?", issue: "A planté en changeant de domaine", opts: [
      { t: "(1) 3 (2) Les globules rouges", ok: 1, r: "Exact. // est la division entière ; c’est l’hémoglobine des globules rouges qui transporte l’oxygène." },
      { t: "(1) 3.33 (2) Les globules rouges", r: "(1) // est la division entière, donc 3. C’est / qui donne 3.33." },
      { t: "(1) 3 (2) Les globules blancs", r: "(2) Les globules blancs gèrent l’immunité. Ce sont les rouges qui portent l’oxygène." },
      { t: "(1) 3.33 (2) Les globules blancs", r: "Les deux experts ont décroché en même temps." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) Si tu doubles le côté d’un carré, son aire est multipliée par combien ? (2) Que fait Ctrl + Z en général ?", issue: "A planté en changeant de domaine", opts: [
      { t: "(1) Par 4 (2) Annuler", ok: 1, r: "Exact. Côté ×2, aire ×4 ; Ctrl+Z annule, l’une des plus grandes inventions de l’humanité." },
      { t: "(1) Par 2 (2) Annuler", r: "(1) L’aire, c’est le côté au carré : doubler donne ×4." },
      { t: "(1) Par 4 (2) Enregistrer", r: "(2) Enregistrer, c’est Ctrl+S." },
      { t: "(1) Par 2 (2) Enregistrer", r: "L’expert maths et l’expert info sont en arrêt maladie." },
    ] },
    { lv: 3, q: "Réponds aux trois : (1) Quel est le plus grand nombre binaire sur 4 bits (en décimal) ? (2) Quel est l’élément n° 1 du tableau périodique ? (3) Si tu dors 8 heures par nuit, combien d’heures dors-tu par semaine ?", issue: "A lâché l’affaire sur trois fronts", opts: [
      { t: "(1) 15 (2) Hydrogène (3) 56", ok: 1, r: "Exact. 1111 = 15 ; l’élément n° 1 est l’hydrogène ; 8×7 = 56. Trois experts en ligne, tu frôles le Dense." },
      { t: "(1) 16 (2) Hydrogène (3) 56", r: "(1) 4 bits donnent 16 valeurs, mais le max est 15 (on compte à partir de 0)." },
      { t: "(1) 15 (2) Hélium (3) 56", r: "(2) L’hélium, c’est le n° 2. Le n° 1, c’est l’hydrogène." },
      { t: "(1) 15 (2) Hydrogène (3) 64", r: "(3) 8 × 7 = 56." },
    ] },
    { lv: 3, q: "Réponds aux trois : (1) Après midi pile, quand les aiguilles des heures et des minutes se superposent-elles pour la première fois ? (2) « Hello, World » est devenu célèbre grâce au manuel culte de quel langage ? (3) Quelle distance le son parcourt-il dans l’air en 1 seconde, environ ?", issue: "A lâché l’affaire sur trois fronts", opts: [
      { t: "(1) Vers 13 h 05 (2) C (3) Environ 340 m", ok: 1, r: "Exact. Vers 13 h 05 min 27 s ; c’est Le langage C de Kernighan et Ritchie qui l’a rendu célèbre ; le son va à environ 340 m/s. Trois experts en ligne." },
      { t: "(1) 13 h pile (2) C (3) Environ 340 m", r: "(1) À 13 h, la grande aiguille est sur le 12 et la petite sur le 1. Pas encore superposées." },
      { t: "(1) Vers 13 h 05 (2) Python (3) Environ 340 m", r: "(2) Python est arrivé presque 20 ans plus tard." },
      { t: "(1) Vers 13 h 05 (2) C (3) Environ 3 400 m", r: "(3) Un zéro de trop." },
    ] },
    { lv: 3, q: "Réponds aux trois : (1) Tu lances deux fois une pièce équilibrée. Quelle est la probabilité d’avoir au moins un pile ? (2) Quel groupe sanguin est le « donneur universel » (globules rouges) ? (3) Que signifie le code HTTP 404 ?", issue: "A lâché l’affaire sur trois fronts", opts: [
      { t: "(1) 3/4 (2) Groupe O (3) Page introuvable", ok: 1, r: "Exact. 1 − 1/4 = 3/4 ; les globules rouges O conviennent à tous les groupes ; 404, c’est Not Found." },
      { t: "(1) 1/2 (2) Groupe O (3) Page introuvable", r: "(1) Deux faces d’affilée, c’est 1/4, donc au moins un pile, c’est 3/4." },
      { t: "(1) 3/4 (2) Groupe AB (3) Page introuvable", r: "(2) AB, c’est le « receveur universel ». Le « donneur universel », c’est O." },
      { t: "(1) 3/4 (2) Groupe O (3) Le serveur a planté", r: "(3) Un serveur qui plante, c’est plutôt une 500. 404, c’est introuvable." },
    ] },
    { lv: 3, q: "Réponds aux trois : (1) Combien de Mo dans 1 Go (en comptant par 1024) ? (2) Où est conservée La Joconde aujourd’hui ? (3) Quelle est la probabilité de faire un nombre pair avec un dé ?", issue: "A lâché l’affaire sur trois fronts", opts: [
      { t: "(1) 1024 (2) Au Louvre (3) 1/2", ok: 1, r: "Exact. Trois experts en ligne en même temps." },
      { t: "(1) 1000 (2) Au Louvre (3) 1/2", r: "(1) En comptant par 1024, ça fait 1024 Mo. Il n’y a que les fabricants de disques durs qui comptent par 1000." },
      { t: "(1) 1024 (2) Au British Museum (3) 1/2", r: "(2) Elle est au Louvre, à Paris. Tu pourrais y aller en métro." },
      { t: "(1) 1024 (2) Au Louvre (3) 1/3", r: "(3) 2, 4, 6 : trois pairs sur six. Ça fait 1/2." },
    ] },
  ],
  knowledge: [
    { lv: 2, q: "Mesurée de sa base à son sommet, quelle est la plus haute montagne du monde ?", issue: "N’a retenu que « la plus haute altitude »", opts: [
      { t: "L’Everest", r: "L’Everest a la plus haute altitude. Mesuré depuis sa base, le Mauna Kea, à Hawaï, dépasse les 10 000 m, surtout sous l’eau." },
      { t: "Le Mauna Kea", ok: 1, r: "Exact. Depuis sa base au fond de l’océan, il dépasse les 10 000 m. Plus haut que l’Everest." },
      { t: "Le Kilimandjaro", r: "Le plus haut d’Afrique, mais même pas dans la course." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Combien de cœurs a une pieuvre ?", issue: "Angle mort en biologie marine", opts: [
      { t: "1", r: "Elle en a 3 : deux pompent le sang vers les branchies, un irrigue tout le corps." },
      { t: "3", ok: 1, r: "Exact. Deux pour les branchies, un pour le corps. Et son sang est bleu." },
      { t: "8", r: "8, c’est le nombre de bras. Un cœur par bras, ce serait un peu too much." },
      { fun: 1, t: "0", r: "Elle se porte très bien, merci." },
    ] },
    { q: "Botaniquement, un bananier est en fait... ?", issue: "Croit que les bananes poussent sur des arbres", opts: [
      { t: "Un arbre tropical à feuilles persistantes", r: "Il n’a pas de tige ligneuse. Le « tronc », ce sont des gaines de feuilles enroulées." },
      { t: "Une herbe géante", ok: 1, r: "Exact. Le bananier fait partie des plus grandes plantes herbacées du monde." },
      { t: "Une liane", r: "Il ne grimpe pas. Il reste planté là." },
      { t: "Un arbuste", r: "Les arbustes aussi sont ligneux. Le bananier n’a pas de bois." },
    ] },
    { q: "Peut-on voir la Grande Muraille de Chine depuis l’espace à l’œil nu ?", issue: "Croit que la Grande Muraille se voit depuis l’espace", opts: [
      { t: "Oui, c’est la seule construction humaine visible", r: "Mythe classique. La muraille est très longue mais très étroite. La NASA dit non, et le premier astronaute chinois, Yang Liwei, ne l’a pas vue non plus." },
      { t: "Non", ok: 1, r: "Exact. Même le premier astronaute chinois, Yang Liwei, a dit qu’il ne la voyait pas." },
      { t: "Seulement la nuit", r: "La nuit, ce que tu vois, ce sont les lumières des villes, pas la Muraille." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Le poisson rouge a-t-il vraiment une mémoire de 3 secondes ?", issue: "Croit au mythe de la mémoire du poisson rouge", opts: [
      { t: "Oui, c’est pour ça qu’il ne s’ennuie jamais dans son bocal", r: "Mythe. En labo, les poissons rouges se souviennent de leur dressage pendant des mois." },
      { t: "Non, il se souvient pendant des mois", ok: 1, r: "Exact. La mémoire de 3 secondes, ce sont les humains qui l’ont inventée." },
      { t: "C’est plutôt 1 seconde", r: "Tu viens de raccourcir le mythe." },
      { t: "Ça dépend de la race", r: "La race n’y change rien. Ils retiennent tous bien plus que 3 secondes." },
    ] },
    { q: "L’idée qu’on « n’utilise que 10 % de notre cerveau », c’est... ?", issue: "Croit au mythe des 10 % du cerveau", opts: [
      { t: "Vrai", r: "Mythe. L’imagerie cérébrale montre que presque toutes les zones du cerveau s’activent." },
      { t: "Un mythe", ok: 1, r: "Exact. Il n’y a pas 90 % au chômage. Les zones bossent juste à des moments différents." },
      { fun: 1, t: "Einstein en utilisait 20 %", r: "Cette version du mythe est encore plus perchée." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "Cléopâtre a vécu plus près dans le temps de quel événement ?", issue: "Aucune notion des échelles historiques", opts: [
      { t: "La construction de la grande pyramide de Gizeh", r: "La grande pyramide avait déjà environ 2 500 ans à sa naissance. Pour elle aussi, c’était de l’antiquité." },
      { t: "Les premiers pas sur la Lune", ok: 1, r: "Exact. Environ 2 000 ans la séparent de la Lune, et environ 2 500 de la grande pyramide." },
      { t: "À peu près aussi loin des deux", r: "Il y a environ 500 ans d’écart. Pas vraiment « à peu près pareil »." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "Qui est arrivé en premier : l’université d’Oxford ou l’Empire aztèque ?", issue: "Aucune notion des échelles historiques", opts: [
      { t: "L’Empire aztèque", r: "La capitale aztèque n’a été fondée qu’en 1325. On enseignait déjà à Oxford en 1096." },
      { t: "Oxford", ok: 1, r: "Exact. On enseignait à Oxford dès 1096, plus de 200 ans avant la fondation de la capitale aztèque." },
      { t: "La même année", r: "À plus de 200 ans près." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "Qui est apparu en premier sur Terre : les requins ou les arbres ?", issue: "Aucune notion de la chronologie de l’évolution", opts: [
      { t: "Les arbres", r: "Les requins les ont devancés de dizaines de millions d’années. Ils ont vu pousser le premier arbre." },
      { t: "Les requins", ok: 1, r: "Exact. Les requins existent depuis plus de 400 millions d’années, avant les tout premiers arbres." },
      { t: "En même temps", r: "À quelques dizaines de millions d’années près." },
      { fun: 1, t: "Les dinosaures d’abord", r: "Les dinosaures sont arrivés plus de 100 millions d’années après." },
    ] },
    { lv: 2, q: "Que vendait Nintendo à l’origine ?", issue: "Ne connaît pas le premier métier de Nintendo", opts: [
      { t: "Des jeux d’arcade", r: "Les jeux vidéo sont venus des décennies plus tard. En 1889, c’étaient des cartes hanafuda." },
      { t: "Des cartes à jouer", ok: 1, r: "Exact. Fondée en 1889, la boîte a commencé en vendant des cartes à jouer." },
      { fun: 1, t: "Des nouilles instantanées", r: "Elle a vraiment tenté le riz instantané, mais ce n’est pas comme ça qu’elle a commencé." },
      { t: "Des taxis", r: "Elle a bien eu une compagnie de taxis dans les années 60, mais c’était un side project bien plus tard." },
    ] },
    { lv: 2, q: "Quel a été le premier « bug » informatique documenté de l’histoire ?", issue: "Ne sait pas d’où vient le mot « bug »", opts: [
      { t: "Une ligne de code mal tapée", r: "Ce bug-là était un vrai insecte." },
      { t: "Un vrai papillon de nuit", ok: 1, r: "Exact. En 1947, des ingénieurs ont trouvé une mite dans le Harvard Mark II et l’ont scotchée dans le journal de bord." },
      { t: "Un virus informatique", r: "Les virus sont arrivés bien plus tard." },
      { t: "Une coupure de courant", r: "Une coupure de courant, ce n’est pas un bug. C’est un incident." },
    ] },
    { q: "D’où vient le nom du langage de programmation Python ?", issue: "Ne sait pas d’où vient le nom de Python", opts: [
      { t: "Du serpent", r: "Pas du serpent. Son créateur était fan de la série comique britannique Monty Python’s Flying Circus." },
      { t: "De la troupe comique britannique Monty Python", ok: 1, r: "Exact. C’est pour ça que la doc de Python est pleine de spam et d’eggs." },
      { fun: 1, t: "De l’animal de compagnie du créateur", r: "Le créateur n’avait pas de python." },
      { t: "De Python, le serpent géant tué par Apollon dans la mythologie grecque", r: "Ça fait très cultivé. Mais toujours non." },
    ] },
    { q: "Que veut dire le T de GPT ?", issue: "Ne sait pas ce que veut dire GPT", opts: [
      { t: "Turbo", r: "Turbo est un suffixe ajouté plus tard. T, c’est pour Transformer." },
      { t: "Transformer", ok: 1, r: "Exact. Generative Pre-trained Transformer." },
      { t: "Token", r: "Très dans le délire des gens de l’IA, mais non." },
      { t: "Transfer (comme dans transfer learning)", r: "Le transfer learning, c’est un concept voisin, mais T, c’est pour Transformer." },
    ] },
    { lv: 2, q: "Que veut dire « Wi-Fi » ?", issue: "A cru au « nom complet » du Wi-Fi", opts: [
      { t: "Wireless Fidelity, comme la Hi-Fi pour la radio", r: "Presque tout le monde le croit. En fait, Wi-Fi est un nom de marque inventé par une agence de com. Ça n’a jamais été une abréviation." },
      { t: "Ça ne veut rien dire", ok: 1, r: "Exact. C’est un nom de marque. « Wireless Fidelity » a été collé dessus après coup." },
      { t: "Wireless Fiber", r: "Ça ne passe pas par la fibre." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "D’où vient le nom « Bluetooth » ?", issue: "Ne sait pas d’où vient le nom Bluetooth", opts: [
      { fun: 1, t: "L’inventeur avait les dents bleues", r: "Pas l’inventeur. Un roi d’il y a plus de mille ans." },
      { t: "Du surnom d’un roi danois", ok: 1, r: "Exact. Harald « à la dent bleue », roi danois du Xe siècle, a unifié le Danemark, comme le Bluetooth unifie les appareils." },
      { t: "Du voyant bleu", r: "Le nom est venu d’abord, le voyant après." },
      { fun: 1, t: "D’un requin des abysses", r: "Ce requin n’existe pas." },
    ] },
    { q: "D’où vient le nom Google ?", issue: "Ne sait pas d’où vient le nom Google", opts: [
      { t: "De googol, soit 10 puissance 100", ok: 1, r: "Exact. Il aurait été mal orthographié, et c’est devenu Google." },
      { fun: 1, t: "Du chien des fondateurs", r: "Aucun chien n’a participé au baptême." },
      { t: "D’un mélange de « go » et « ogle » (reluquer), soit « va jeter un œil »", r: "Ça sonne crédible, mais non." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "En comptant l’outre-mer, quel pays a le plus de fuseaux horaires ?", issue: "N’a pensé qu’à la superficie", opts: [
      { t: "La Russie", r: "La Russie en a 11, c’est beaucoup. La France en a 12 grâce à l’outre-mer." },
      { t: "La France", ok: 1, r: "Exact. Grâce à ses territoires d’outre-mer éparpillés sur le globe, la France compte 12 fuseaux horaires." },
      { t: "Les États-Unis", r: "Même avec leurs territoires, les États-Unis n’arrivent pas à 12." },
      { t: "La Chine", r: "La Chine n’en utilise qu’un." },
    ] },
    { lv: 2, q: "Paris est quasiment sur le méridien de Greenwich. Quelle heure légale utilise la France métropolitaine ?", issue: "Ne sait pas à quelle heure vit la France", opts: [
      { t: "UTC+0, comme Londres", r: "Ce serait logique géographiquement, mais non. La France a une heure d’avance sur Londres." },
      { t: "UTC+2, comme la Grèce", r: "Trop à l’est." },
      { t: "UTC+1, l’heure d’Europe centrale", ok: 1, r: "Exact. Adoptée pendant l’Occupation et jamais abandonnée. Résultat : à Brest, fin décembre, le soleil se lève vers 9 h." },
      { t: "L’heure de Paris, UTC+0:09, bien à elle", r: "Elle a existé, mais elle a été abandonnée en 1911. Raté d’un siècle." },
    ] },
    { lv: 2, q: "Napoléon était-il vraiment petit ?", issue: "Croit que Napoléon était petit", opts: [
      { t: "Oui, environ 1,57 m, d’où le « complexe de Napoléon »", r: "Mythe. Il mesurait environ 1,69 m, dans la moyenne de l’époque." },
      { t: "Non, environ 1,69 m, la moyenne de l’époque", ok: 1, r: "Exact. Le mythe vient en partie des unités : ses « 5 pieds 2 pouces » français ont été lus en pouces anglais, plus courts. Sans parler des caricatures anglaises." },
      { fun: 1, t: "Il faisait 1,90 m", r: "Tu as trop corrigé." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Le miel finit-il par se périmer si on le garde assez longtemps ?", issue: "Ne sait pas que le miel ne se périme quasiment jamais", opts: [
      { t: "Oui, une fois ouvert, les bactéries prolifèrent et il tourne en un mois", r: "Le miel contient peu d’eau et il est acide : les bactéries y survivent à peine. Cristalliser, ce n’est pas se périmer." },
      { t: "Quasiment jamais. On a retrouvé du miel de 3 000 ans encore comestible", ok: 1, r: "Exact. Bien fermé, le miel ne se gâte presque jamais. Il cristallise, c’est tout." },
      { t: "Seulement si on ne le met pas au frigo", r: "Au frigo, il cristallise même plus vite." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Quel est le plus grand organe du corps humain ?", issue: "A raté l’organe le plus évident", opts: [
      { t: "Le foie", r: "Le foie est le plus grand organe interne. Mais le plus grand, tu le portes sur toi." },
      { t: "Le cerveau", r: "Le cerveau pèse environ 1,4 kg. Bien plus léger." },
      { t: "La peau", ok: 1, r: "Exact. Dépliée, la peau d’un adulte fait environ 2 m²." },
      { t: "L’intestin", r: "L’intestin est long, mais en poids et en surface, la peau gagne." },
    ] },
    { q: "Les manchots ont-ils des genoux ?", issue: "Croit que les manchots n’ont pas de genoux", opts: [
      { t: "Non, c’est pour ça qu’ils se dandinent", r: "Si, cachés sous les plumes. Les manchots marchent en position accroupie en permanence." },
      { t: "Oui, sous les plumes", ok: 1, r: "Exact. Leurs pattes sont en fait assez longues. Ils sont juste toujours accroupis." },
      { t: "Seulement le manchot empereur", r: "Tous les manchots en ont." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Une « année-lumière », c’est une unité de quoi ?", issue: "S’est fait avoir par le mot « année »", opts: [
      { t: "De temps", r: "Il y a « année » dans le nom, mais c’est la distance parcourue par la lumière en un an." },
      { t: "De distance", ok: 1, r: "Exact. Environ 9 460 milliards de km." },
      { t: "De vitesse", r: "La vitesse de la lumière est une vitesse. Une année-lumière est une distance." },
      { t: "De luminosité", r: "Rien à voir avec la luminosité." },
    ] },
    { q: "La foudre peut-elle tomber deux fois au même endroit ?", issue: "Croit que la foudre ne tombe jamais deux fois au même endroit", opts: [
      { t: "Non, une fois la charge libérée, l’endroit est tranquille un moment", r: "Mythe classique. L’Empire State Building se prend la foudre plus de 20 fois par an." },
      { t: "Oui, et souvent", ok: 1, r: "Exact. Les gratte-ciel et les sommets sont des clients réguliers." },
      { t: "Seulement l’été", r: "Les orages d’hiver, ça existe aussi." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 2, q: "Aujourd’hui, sur La Joconde, voit-on ses sourcils ?", issue: "N’a jamais remarqué les sourcils de La Joconde", opts: [
      { t: "Oui, bien épais", r: "Va voir le tableau. On n’en voit quasiment pas." },
      { t: "À peine visibles", ok: 1, r: "Exact. Peinture effacée avec le temps ou partie lors d’une restauration ? On en débat encore." },
      { t: "Seulement d’un côté", r: "Des deux côtés, on les voit à peine." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { q: "Que veut vraiment dire le « quiet quitting » ?", issue: "Ne connaît pas le jargon du bureau", opts: [
      { t: "Démissionner sans prévenir personne", r: "Tu viens toujours bosser. Tu arrêtes juste d’en faire plus que prévu." },
      { t: "Faire son boulot, rien que son boulot", ok: 1, r: "Exact : pas d’heures sup gratuites, pas de volontariat pour le rab. Culture générale de salarié." },
      { fun: 1, t: "Démissionner en laissant un Post-it sur l’écran", r: "Légendaire, mais non." },
      { t: "Se faire virer sans qu’on te le dise", r: "Ça, c’est le « quiet firing ». Autre chose." },
    ] },
    { q: "Botaniquement, la tomate est... ?", issue: "Confond la cuisine et la botanique", opts: [
      { t: "Un légume (famille des solanacées)", r: "En cuisine, c’est un légume. En botanique, c’est une baie." },
      { t: "Une baie (donc un fruit)", ok: 1, r: "Exact. Botaniquement, la tomate est une baie. Mais merci de ne pas en mettre dans la salade de fruits." },
      { t: "Un fruit à coque", r: "Une bouchée et tu sauras que non." },
      { t: "Aucune de ces réponses", r: "Elle a une catégorie bien claire : baie." },
    ] },
    { lv: 2, q: "Qu’est-ce que les empreintes digitales du koala ont de spécial ?", issue: "Angle mort sur les anecdotes animales", opts: [
      { t: "Les koalas n’ont pas d’empreintes, juste des coussinets lisses", r: "Ils en ont, et elles ressemblent beaucoup aux nôtres." },
      { t: "Elles ressemblent presque exactement aux empreintes humaines", ok: 1, r: "Exact. Si proches qu’on a du mal à les distinguer au microscope. Un crime de koala, ce serait l’enfer pour Les Experts." },
      { fun: 1, t: "Elles sont carrées", r: "Les empreintes carrées, ça n’existe pas." },
      { t: "Tous les koalas ont les mêmes", r: "Chaque koala a les siennes, comme nous." },
    ] },
    { lv: 2, q: "De quelle couleur sont très probablement les drapeaux américains sur la Lune aujourd’hui ?", issue: "N’a jamais pensé aux UV sur la Lune", opts: [
      { t: "Toujours bleu, blanc, rouge. La NASA a utilisé un tissu spécial anti-soleil", r: "Sans atmosphère pour filtrer les UV, des décennies d’exposition les ont très probablement décolorés." },
      { t: "Blanchis par le soleil", ok: 1, r: "Exact. Les UV sur la Lune sont brutaux. Les drapeaux ont très probablement viré au blanc." },
      { t: "Noirs", r: "Ils ne bronzent pas. Ils blanchissent." },
      { t: "Ils ont disparu depuis longtemps", r: "Celui d’Apollo 11 a été renversé par le souffle du moteur, mais la plupart des autres sont toujours debout." },
    ] },
    { q: "En quelle année le test de Turing a-t-il été proposé ?", issue: "A sous-estimé l’âge de l’IA", opts: [
      { t: "1950", ok: 1, r: "Exact. Turing a proposé le « jeu de l’imitation » dans un article de 1950." },
      { t: "1990", r: "40 ans trop tard." },
      { t: "2010", r: "60 ans trop tard." },
      { fun: 1, t: "2022, l’année ChatGPT", r: "On n’en parle en boucle que depuis ChatGPT, mais il a plus de 70 ans." },
    ] },
    { lv: 3, q: "Quel est le plus petit os du corps humain ?", issue: "Angle mort sur le corps humain", opts: [
      { t: "L’étrier", ok: 1, r: "Exact. L’étrier se trouve dans l’oreille moyenne, à peu près de la taille d’un grain de riz." },
      { t: "Un os du petit orteil", r: "Minuscule, mais pas le plus petit. Le plus petit est dans ton oreille." },
      { t: "Le coccyx", r: "Ton coccyx est bien plus gros que tu ne le crois." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 3, q: "Quel est le plus petit pays du monde en superficie ?", issue: "Angle mort en géographie", opts: [
      { t: "Monaco", r: "Deuxième plus petit. Le plus petit, c’est le Vatican, environ 0,44 km²." },
      { t: "Le Vatican", ok: 1, r: "Exact. Environ 0,44 km², moins d’un quart de Monaco." },
      { t: "Singapour", r: "Singapour est bien plus grand que les deux." },
      { t: "Le Liechtenstein", r: "Petit, mais pas le plus petit." },
    ] },
    { lv: 3, q: "En poids total (biomasse), qu’est-ce qui représente la plus grosse part du vivant sur Terre ?", issue: "Intuition de la biomasse en panne", opts: [
      { t: "Les bactéries", r: "Les bactéries arrivent deuxièmes, autour de 13 %. Les plantes, c’est environ 80 %." },
      { t: "Les plantes", ok: 1, r: "Exact. Les plantes font environ 80 % de la biomasse terrestre. Tous les animaux réunis, c’est une erreur d’arrondi." },
      { t: "Les fourmis", r: "« Les fourmis pèsent plus lourd que les humains », c’est une idée répandue, mais à côté des plantes, tous les animaux réunis, c’est une erreur d’arrondi." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 3, q: "Dans quel milieu le son se propage-t-il le plus vite ?", issue: "Angle mort en physique de base", opts: [
      { t: "L’air", r: "L’air est le plus lent, environ 340 m/s." },
      { t: "L’eau", r: "Environ 1 500 m/s dans l’eau. Plus rapide que l’air, mais pas de taille face à l’acier." },
      { t: "L’acier", ok: 1, r: "Exact. Environ 5 900 m/s dans l’acier. Le son va le plus vite dans les solides." },
      { t: "Le vide", r: "Dans le vide, il n’y a pas de milieu. Le son ne se propage pas du tout." },
    ] },
    { lv: 3, q: "L’expression « effet papillon » vient à l’origine de quel domaine ?", issue: "Ne sait pas d’où vient l’effet papillon", opts: [
      { t: "La météorologie", ok: 1, r: "Exact. Le météorologue Edward Lorenz a découvert que les prévisions sont ultra sensibles aux conditions initiales, d’où la métaphore." },
      { t: "La biologie, via l’étude des papillons", r: "Rien à voir avec de vrais papillons." },
      { t: "L’économie", r: "L’économie l’a emprunté, mais ce n’est pas de là qu’il vient." },
      { t: "Un film", r: "L’Effet papillon (le film) est arrivé bien plus tard." },
    ] },
    { lv: 3, q: "En nombre de locuteurs natifs, quelle est la langue la plus parlée au monde ?", issue: "Confond locuteurs natifs et apprenants", opts: [
      { t: "L’anglais, évidemment", r: "L’anglais a le plus d’apprenants. En locuteurs natifs, le mandarin est n° 1." },
      { t: "Le chinois mandarin", ok: 1, r: "Exact. En locuteurs natifs : le mandarin d’abord, l’espagnol ensuite, l’anglais troisième." },
      { t: "L’espagnol", r: "L’espagnol est n° 2 en locuteurs natifs." },
      { t: "L’hindi", r: "Beaucoup, mais pas n° 1." },
    ] },
    { lv: 3, q: "En quelle année la structure en double hélice de l’ADN a-t-elle été publiée ?", issue: "Angle mort en histoire des sciences", opts: [
      { t: "1900", r: "À l’époque, personne n’avait même compris que l’ADN portait l’info génétique." },
      { t: "1953", ok: 1, r: "Exact. Watson et Crick l’ont publiée en 1953, et le cliché aux rayons X de Rosalind Franklin a été décisif." },
      { t: "1975", r: "Plus de 20 ans trop tard." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 3, q: "Si tu fais bouillir de l’eau au sommet du mont Blanc (environ 4 800 m), à quelle température bout-elle, en gros ?", issue: "Ne sait pas que la pression change le point d’ébullition", opts: [
      { t: "En dessous de 100 °C", ok: 1, r: "Exact. Moins de pression, point d’ébullition plus bas. Au sommet de l’Everest, elle bout vers 70 et quelques degrés, et tes pâtes ne cuisent pas." },
      { t: "Au-dessus de 100 °C", r: "Mauvais sens. Seule une cocotte-minute dépasse les 100 °C." },
      { t: "Pile 100 °C", r: "100 °C, c’est le point d’ébullition à la pression standard, au niveau de la mer." },
      { fun: 1, t: "Ça dépend de la puissance du feu", r: "Le feu change seulement la vitesse à laquelle elle bout, pas la température d’ébullition." },
    ] },
    { lv: 3, q: "En pleine mer, dans une eau claire, quelle couleur de lumière descend le plus profond ?", issue: "Angle mort en optique", opts: [
      { t: "Le rouge", r: "Le rouge est absorbé en premier. C’est pour ça que les poissons rouges des abysses paraissent noirs." },
      { t: "Le bleu", ok: 1, r: "Exact. C’est en partie pour ça que la mer paraît bleue." },
      { t: "Le jaune", r: "Le jaune ne descend pas si profond." },
      { t: "Je ne sais pas", half: 1 },
    ] },
    { lv: 3, q: "En gros, combien de fois cligne-t-on des yeux dans une vie ?", issue: "À côté de la plaque en estimation", opts: [
      { t: "Des dizaines de milliers", r: "Tu clignes plus de 10 000 fois en une seule journée." },
      { t: "Des millions", r: "Ça, c’est juste une année." },
      { t: "Des centaines de millions", ok: 1, r: "Exact. Environ 15 par minute, plus de 10 000 par jour, des centaines de millions dans une vie." },
      { fun: 1, t: "Des centaines de milliards", r: "Il faudrait cligner des dizaines de fois par seconde." },
    ] },
    { lv: 2, q: "Lequel de ces langages n’est PAS un langage de programmation ?", issue: "Confond langage de programmation et langage de balisage", opts: [
      { t: "Python", r: "Python est un vrai langage de programmation." },
      { t: "Rust", r: "Rust est un vrai langage de programmation. Et un coriace." },
      { t: "HTML", ok: 1, r: "Exact. HTML est un langage de balisage. Tes potes qui codent en HTML ne seront peut-être pas d’accord." },
      { t: "Go", r: "Go est le langage de programmation de Google." },
    ] },
  ],
