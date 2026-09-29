# HumanBench — version française (fr)

HumanBench (« How many B are you? ») est un mini-jeu web qui parodie les benchmarks d'IA : le joueur « joue l'IA », répond à des questions, et reçoit une affiche de « lancement de modèle » (nombre de paramètres, MoE/Dense, personnalité de modèle, tableau de scores, classement AA). En ligne : https://humanbench.ybuild.ai (versions zh / en / ja / es / ko). On ajoute le français.

## Source

La version anglaise est déjà localisée pour un public occidental (les mèmes chinois ont été remplacés). **Traduis depuis l'anglais** (`i18n/fr/_parts/en_<part>.js`), en consultant si besoin l'original chinois (`bank.js`, `chats.js`, `arc.js`, `lv4.js`) ou l'espagnol (`i18n/es/`) pour voir comment une autre langue européenne a été adaptée.

Tu écris dans `i18n/fr/_parts/fr_<part>.js` (actuellement une copie de l'anglais : remplace le texte en place).

## Règle d'or : ligne pour ligne, code intact

- Le fichier fr doit avoir **exactement le même nombre de lignes** et **le même squelette de code** que le fichier en : seules les chaînes affichées au joueur changent.
- Ne change jamais : clés, noms de variables, nombres, drapeaux (`ok`, `half`, `fun`, `meme`, `lv`, `halluc`, `id`, `tr`, `ax`, `go`, `end`), le 3e argument de `E(title, text, id)` (ids de modèles comme "豆包", "GPT-5 系", "Codex" : garde-les tels quels), noms de nœuds (`n1`, `c1b`…), `data-opt="…"`, classes CSS, coordonnées des graphiques, grilles et fonctions ARC, `ROWS`/`AA`/`MODELS`/`VENDOR_COLOR`/`RUN_PLAN`, ids de `PROFILES`, clés de `TRAITS`/`SECTION_LABEL`, ids de `PERSONA_AXES`.
- Ne traduis pas les commentaires de code (tu peux les laisser en anglais).
- **Apostrophes** : utilise toujours l'apostrophe typographique `’` (jamais `'`) dans le texte, et les guillemets français `« … »` (avec espaces insécables ou normales) au lieu de `"` à l'intérieur des chaînes. Ainsi aucune chaîne JS ne se casse.
- Vérifie avec : `node qa/fr_part_check.cjs <part>` → doit afficher `骨架一致` (squelette identique) et aucun caractère CJK hors ids. Corrige jusqu'à ce que ce soit bon. Lance-le plusieurs fois pendant le travail, pas seulement à la fin.

## Ton

- C'est un jeu de mèmes : un français **naturel, drôle, écrit comme par un internaute français**, pas de traduction mot à mot. Tutoiement. Les vannes doivent être courtes et piquantes.
- Pas d'emoji.
- Garde les marques : HumanBench, @Alex_ybuild, noms de modèles (Claude, GPT-4o, Codex, DeepSeek, Gemini, Grok, Kimi, Qwen, Mistral…), noms de benchmarks (en anglais).
- **Longueur** : vise une longueur proche de l'anglais (le français s'allonge vite ; les cartes de partage ont une place limitée). Préfère la formule courte.

## Localisation France

- Prix en euros avec la notation française (`1 000 €`, `9,99 €`) ; décimales avec virgule dans le texte affiché **seulement** quand ce n'est pas une question de maths où la notation compte (ex. le mème « 9.11 vs 9.9 » : garde `9.11` et `9.9`, c'est le mème).
- « u up? » → « t’es réveillé(e) ? » / « tu dors ? ».
- Références US très locales (DoorDash, Takis, Walmart, SAT…) → équivalent français (Uber Eats/Deliveroo, un paquet de Curly, Carrefour, le bac…). Les faits doivent rester **exacts** ; si tu n'es pas sûr d'un fait, garde une formulation générale plutôt que d'inventer.
- La personnalité « Siri » (id `doubao`) reste Siri : « Désolé, je n’ai pas bien compris ».
- Les mèmes IA mondiaux (strawberry, 9.11 vs 9.9, car wash, grandma exploit, DAN, « good Bing », avocats et fausses jurisprudences, « You’re absolutely right! », etc.) : garde le mème, traduis naturellement. Les tics de langage des modèles : en français tel qu’un modèle les dirait (« Vous avez tout à fait raison ! », « Excellente question ! »), ou garde l'anglais si le mème est connu en anglais.

## Contrainte dure

**La bonne réponse (`ok: 1`) ne doit pas être la seule option la plus longue** (en nombre de caractères ; exceptions : osworld et ARC). Si après traduction la bonne réponse est la plus longue, rallonge une mauvaise option (une réponse fausse qui sonne plausible) ou raccourcis la bonne.

## Rapport final

Quand `qa/fr_part_check.cjs <part>` passe : réponds en 5 lignes max (fichier, résultat du check, 3-5 adaptations locales notables). Ne colle pas le contenu du fichier.
