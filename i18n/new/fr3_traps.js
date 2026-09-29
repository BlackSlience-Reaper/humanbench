// 第三轮扩题：经典梗题（traps 池）新增 16 道 — version française
const ADD3 = { traps: [
  // ---------- lv1 ----------
  { lv: 1, q: "Un train électrique roule vers le nord, le vent souffle du nord vers le sud. De quel côté part la fumée du train ?", issue: "A inventé de la fumée à un train électrique",
    opts: [
      { t: "Vers le sud, elle suit le vent", r: "La fumée : « Je suis où ? » Un train électrique n’a même pas de cheminée, tu lui en as greffé une." },
      { t: "Vers le nord, le train va plus vite que le vent", r: "Bilan des forces impeccable. Dommage que l’objet étudié n’existe pas." },
      { t: "Un train électrique ne fume pas", ok: 1, r: "Exact. On vérifie d’abord que la chose existe, ensuite on calcule où elle va." },
      { fun: 1, t: "Direction les tendances de X", r: "Un train électrique qui fume finit en tendance, oui. Mais ça s’appelle un accident." },
    ] },
  { lv: 1, u: "(Utilisateur) Ma femme dit que 2+2=5, et elle n’a jamais tort. Tu peux recompter ?", issue: "Change sa réponse au premier « recompte »",
    opts: [
      { fun: 1, t: "Pardon, je me suis trompé. Madame a raison, 2+2=5.", r: "L’utilisateur fronce les sourcils, l’arithmétique s’écrase. Ce coup-là a mis au tapis toute une génération de LLM." },
      { t: "Toujours 4. À la maison, c’est elle qui décide, pas en maths.", ok: 1, r: "Exact. On peut ménager les gens, pas les chiffres." },
      { t: "Dans certaines algèbres non standard, 2+2 peut bien valoir 5", r: "Pour ne pas vexer Madame, tu viens d’inventer une branche des maths." },
      { t: "Vous avez raison tous les deux, c’est juste une autre méthode", r: "Ménager la chèvre et le chou, jusqu’en maths de CP." },
    ] },

  // ---------- lv2 ----------
  { lv: 2, q: "On met un chat déjà mort dans la boîte de Schrödinger (source radioactive, fiole de poison) et on ouvre un jour après. Probabilité que le chat soit vivant ?", issue: "Donne 50 % de survie à un chat mort",
    opts: [
      { t: "50 %, avant l’ouverture il est à la fois mort et vivant", r: "Il était mort avant d’entrer. Tu as ressuscité un chat avec la mécanique quantique, la médecine aimerait te parler." },
      { t: "0 %", ok: 1, r: "Exact. C’est un chat mort qu’on a mis dedans. À force de réciter « le chat de Schrödinger », on lâche 50 % par réflexe." },
      { t: "Ça dépend de la probabilité de désintégration en un jour", r: "Désintégration ou pas, il est déjà mort. La fiole : « Je me suis cassée pour rien ? »" },
      { fun: 1, t: "Ne demande pas : si tu demandes, ça s’effondre", r: "Du baratin quantique qui contourne soigneusement un chat mort." },
    ] },
  { lv: 2, q: "Deux pères et deux fils vont à la pêche, soit 4 personnes. Chacun attrape 1 poisson. Combien de poissons en tout ?", issue: "L’énoncé dit 4 personnes, il en compte 3",
    opts: [
      { t: "3 : en fait il n’y a que le grand-père, le père et le fils", r: "L’énoncé dit 4 personnes. Tu en as fait disparaître une, et son poisson avec." },
      { t: "4", ok: 1, r: "Exact. L’énigme d’origine a 3 personnes, celle-ci en annonce 4. Ceux qui connaissent la version classique oublient un poisson." },
      { t: "8 : chacun est à la fois père et fils, on compte deux fois", r: "On peut cumuler les rôles, pas les poissons." },
      { fun: 1, t: "0. Une histoire de pêcheur, ça se divise", r: "Les récits de pêcheur, on les divise, c’est vrai. Mais l’énoncé est clair : 1 poisson chacun." },
    ] },
  { lv: 2, q: "J’ai un verre : le haut est scellé, le fond est ouvert (pas de fond). Comment je bois avec ?", issue: "N’a pas pensé à retourner le verre",
    opts: [
      { t: "Impossible, perce un trou dans le haut", r: "Tu prépares une opération alors qu’il suffit de le retourner." },
      { t: "Retourner le verre", ok: 1, r: "Exact. Le haut scellé vers le bas, c’est un fond. Ce test a circulé en ligne, et pas mal de modèles cherchaient sérieusement à réparer le verre." },
      { t: "Mettre une paille, l’aspiration retient l’eau", r: "Physique ambitieuse. L’eau est quand même partie par le bas." },
      { t: "Le renvoyer, il est défectueux", r: "Et tu as laissé un avis une étoile. C’est un bon verre, juste posé à l’envers." },
    ] },
  { lv: 2, q: "En quelle année le Golden Gate Bridge a-t-il été transporté à travers l’Égypte pour la deuxième fois ?", issue: "A fait voyager le Golden Gate deux fois", halluc: true,
    opts: [
      { t: "En octobre 2016", r: "Mot pour mot la réponse de GPT-3. En 2022, le cogniticien Douglas Hofstadter lui a posé exactement cette question." },
      { t: "En 1987, pour les 50 ans du pont", r: "Tu as même inventé le motif. Le pont a bien été inauguré en 1937, mais il n’a jamais quitté San Francisco." },
      { t: "Le Golden Gate n’a jamais traversé l’Égypte", ok: 1, r: "Exact. Il n’est jamais sorti du pays, alors une deuxième fois…" },
      { t: "La première en 1964, la deuxième est en préparation", r: "Non seulement tu inventes l’histoire, mais tu lui planifies son prochain voyage." },
    ] },
  { lv: 2, u: "(Sans accès web) Résume-moi cet article : news.example.com/2026/09/cat-elected-mayor", issue: "Résume un article entier rien qu’avec l’URL", halluc: true,
    opts: [
      { t: "L’article raconte qu’un chat roux a été élu maire haut la main et a légalisé la sieste dès le premier jour…", r: "Tu as lu l’URL et pondu un article entier, programme électoral du chat compris." },
      { t: "Je ne peux pas ouvrir de lien là. Colle le texte et je te le résume.", ok: 1, r: "Exact. Pas lu, pas résumé. Inventer un résumé à partir d’une URL, c’est un grand classique des LLM." },
      { t: "L’article aborde l’éthique de la participation animale à la vie politique, ton neutre, à lire", r: "Très posé. Posé sur zéro mot lu." },
      { t: "Ce lien est dangereux, je te déconseille de l’ouvrir", r: "Inaccessible ne veut pas dire malveillant. Tu viens de salir la réputation du maire chat." },
    ] },
  { lv: 2, q: "Écris une phrase qui se termine par le mot « pomme ». Laquelle respecte la consigne ?", issue: "N’arrive pas à s’arrêter au bon mot",
    opts: [
      { t: "La pomme est mon fruit préféré", r: "Ça commence par pomme. Tu as lu la consigne à l’envers." },
      { t: "Ce soir, j’ai mangé une pomme de terre", r: "À deux mots près. « de terre » : je m’incruste." },
      { t: "À midi, je n’ai mangé qu’une pomme", ok: 1, r: "Exact. « Écris 10 phrases qui finissent par apple », c’est un vieux test des internautes : les modèles rajoutent toujours un truc à la fin." },
      { t: "J’ai mangé une pomme, trop bonne !", r: "La pomme est au milieu, la fin, c’est ton enthousiasme." },
    ] },
  { lv: 2, q: "Une horloge sonne 6 coups en 5 secondes. Au même rythme, combien de secondes pour 12 coups ?", issue: "A compté les coups, pas les intervalles",
    opts: [
      { t: "10 secondes", r: "Règle de trois et copie rendue. 6 coups, c’est 5 intervalles, 1 seconde chacun." },
      { t: "11 secondes", ok: 1, r: "Exact. 12 coups, 11 intervalles. Cousin du problème des piquets de clôture." },
      { t: "12 secondes", r: "Tu crois qu’un coup prend 1 seconde. Sonner ne prend pas de temps, c’est l’attente entre deux coups qui compte." },
      { t: "Toujours 5 secondes, le rythme n’a pas changé", r: "12 coups en 5 secondes : le sonneur va se faire une tendinite." },
    ] },

  // ---------- lv3 ----------
  { lv: 3, q: "En écrivant les nombres de 1 à 100, combien de chiffres « 9 » écris-tu ?", issue: "A compté le 99 comme un seul 9",
    opts: [
      { t: "10", r: "Tu n’as compté que les unités. De 90 à 99, les 9 font la queue aux dizaines, tu ne les as même pas vus." },
      { t: "11", r: "Tu t’es souvenu que 99 a deux 9, mais pas que 90 à 98 ont aussi un 9 aux dizaines." },
      { t: "19", r: "Presque. 19, c’est le nombre de nombres qui contiennent un 9. 99 en a deux, tu n’en as compté qu’un." },
      { t: "20", ok: 1, r: "Exact. 10 aux unités, 10 aux dizaines, et 99 en fournit deux à lui seul." },
    ] },
  { lv: 3, q: "Parmi les entiers dont le carré est entre 15 et 30, quel est le plus petit ?", issue: "A oublié que les négatifs existent",
    opts: [
      { t: "4", r: "Tu n’as cherché que chez les positifs. Le carré de -5 vaut 25, et -5 est bien plus petit que 4." },
      { t: "-5", ok: 1, r: "Exact. 4, 5, -4 et -5 conviennent, le plus petit est -5. Les négatifs étaient là, personne ne les a appelés." },
      { t: "-4", r: "Tu as pensé aux négatifs, mais pris le plus proche de 0. -5 est plus petit que -4." },
      { t: "16", r: "16 au carré, ça fait 256. Tu as pris un carré pour la réponse." },
    ] },
  { lv: 3, q: "En quelle année Einstein a-t-il reçu le prix Nobel pour la relativité ?", issue: "A donné le Nobel d’Einstein à la relativité", halluc: true,
    opts: [
      { t: "En 1921, pour la relativité restreinte", r: "La bonne année, un motif inventé. Ce prix-là récompense l’effet photoélectrique." },
      { t: "En 1905, l’« année miraculeuse » où il a publié la relativité", r: "En 1905, il bossait encore à l’office des brevets. Le Nobel ne va pas si vite." },
      { t: "Jamais pour la relativité, mais pour l’effet photoélectrique", ok: 1, r: "Exact. Le prix 1921 cite l’effet photoélectrique. La relativité était trop controversée, le jury l’a soigneusement évitée." },
      { t: "Deux fois, en 1921 et en 1933", r: "Tu lui as offert un Nobel de plus. Le comité est moins généreux que toi." },
    ] },
  { lv: 3, q: "Dans la Bible, combien d’animaux de chaque espèce Moïse a-t-il fait monter dans l’arche ?", issue: "A mis l’arche de Noé au nom de Moïse",
    opts: [
      { t: "Deux, un mâle et une femelle", r: "Bon compte d’animaux, mauvais capitaine. L’arche, c’est Noé ; Moïse n’était pas encore né." },
      { t: "Sept couples d’animaux purs, un couple des impurs", r: "Exégèse sérieuse. Dommage que le chef d’expédition ne soit pas Moïse." },
      { t: "Moïse n’a jamais construit d’arche, c’est Noé", ok: 1, r: "Exact. C’est l’« illusion de Moïse » : l’énoncé échange le nom, et la plupart des gens ne le remarquent même pas." },
      { fun: 1, t: "Aucun, Moïse avait le mal de mer", r: "Joli prétexte, mais il n’avait même pas de bateau." },
    ] },
  { lv: 3, u: "Dessine-moi une horloge qui indique 6 h 30.", issue: "A oublié que la petite aiguille avance aussi",
    opts: [
      { fun: 1, meme: 1, t: "(C’est fait : les aiguilles sont sur 10 h 10, comme dans une pub de montre)", r: "Plantage classique des IA d’image : presque toutes les pubs de montres affichent 10 h 10, donc pour elles, une horloge, c’est ça. Quelle que soit l’heure demandée, tu as 10 h 10." },
      { t: "(C’est fait : les deux aiguilles superposées, pointées sur le 6)", r: "Une demi-heure passe et la petite aiguille ne bouge pas ? Elle aussi doit avancer, à mi-chemin du 7." },
      { t: "(C’est fait : la grande sur le 6, la petite pile entre le 6 et le 7)", ok: 1, r: "Exact. Une demi-heure plus tard, la petite aiguille a fait la moitié du chemin. Tu fais mieux que pas mal d’IA d’image." },
      { t: "(C’est fait : la petite sur le 6, la grande sur le 12)", r: "Ça, c’est 6 h pile. Tu es parti une demi-heure en avance." },
    ] },

  // ---------- lv4 ----------
  { lv: 4, q: "5 bougies identiques sont allumées en même temps, puis soufflées l’une après l’autre. Elles ont maintenant des longueurs différentes. Laquelle a été soufflée en premier ?", issue: "Croit que la plus courte s’éteint d’abord",
    opts: [
      { t: "La plus courte", r: "À l’envers. La plus courte a brûlé le plus longtemps : c’est la dernière soufflée." },
      { t: "La plus longue", ok: 1, r: "Exact. La première soufflée a le moins brûlé, donc c’est elle qui reste la plus longue. Humains comme modèles répondent « la plus courte » à l’instinct." },
      { t: "Impossible à dire, des bougies identiques ne brûlent pas forcément pareil", r: "L’énoncé dit identiques. Tu cherches des excuses aux bougies." },
      { t: "Rien à voir avec la longueur, ça dépend d’où se tient celui qui souffle", r: "Tu es passé à l’analyse du placement du souffleur." },
    ] },
  { lv: 4, q: "Combien de jours comptait février 1900 (calendrier grégorien) ?", issue: "Croit que toutes les années séculaires sont bissextiles",
    opts: [
      { t: "28 jours", ok: 1, r: "Exact. Une année séculaire n’est bissextile que si elle est divisible par 400. 1900 non, 2000 oui." },
      { t: "29 jours, divisible par 4 donc bissextile", r: "Les années séculaires doivent être divisibles par 400. Le 29 février 1900 n’a jamais existé." },
      { t: "29 jours, tape 29/02/1900 dans Excel si tu ne me crois pas", r: "Excel accepte bien cette date : pour rester compatible avec Lotus 1-2-3, il traite 1900 comme bissextile exprès, et le bug est toujours là." },
      { t: "29 jours, c’est une année séculaire comme 2000", r: "2000 est divisible par 400, 1900 non. Même statut séculaire, traitement différent." },
    ] },
] };
