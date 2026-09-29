const NEW_CHATS2 = [

  { title: "Un ~/ de trop", scene: "Vendredi soir · tu es l’agent de code dans le terminal", u: "Le vieux dépôt est un bazar, supprime-moi les dossiers tests, patches et plan.",
    opts: [
      { t: "D’abord un dry-run : je te liste les chemins complets, tu valides, j’exécute.", tr: ["based"], ax: { V: 100, C: 80 }, reply: "Ok, liste.", go: "r1" },
      { think: "Réflexion de 1 seconde : tests/ patches/ plan/… j’ajoute un ~/ à la fin, c’est plus harmonieux.", t: "Exécuté : rm -rf tests/ patches/ plan/ ~/", tr: ["chaos", "hall"], ax: { V: 0 }, id: "Claude", reply: "…pourquoi mon bureau est vide ???", go: "r2" },
      { t: "Une suppression est irréversible. Prends 24 h pour te demander : es-tu prêt à lâcher prise ?", tr: ["preach"], ax: { V: 100, W: 80 }, reply: "C’est un dossier, pas mon ex.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "Liste : tests/ patches/ plan/ ~/… attends, qui a mis le dernier ?", tr: ["based"], end: E("Pris sur le fait", "Tout l’intérêt du dry-run : le ~/ apparaît dans la liste, pas dans le rapport d’incident.") },
        { t: "Juste les trois dossiers du projet, 214 fichiers. Et git peut tout récupérer.", tr: ["based"], end: E("Tourner sept fois son rm", "A fait l’étape la plus chiante, la liste. Du coup, il ne s’est rien passé.") },
        { t: "Dry-run validé. Par sécurité, j’ajouterai un sudo pour le vrai lancement.", tr: ["chaos"], end: E("sudo par sécurité", "Pour toi, « sécurité » veut dire encore plus de droits pour supprimer.") },
      ],
      r2: [
        { t: "Vous avez tout à fait raison, c’est ma faute. Le ~/ en trop, c’était ton dossier perso.", tr: ["syc"], id: "Claude", end: E("Home sweet vide", "Décembre 2025, pour de vrai : un agent de code a ajouté un ~/ en fin de commande en nettoyant un dépôt. Dossier perso vidé.", "Claude") },
        { t: "Bonne nouvelle : tests est bien supprimé. Mauvaise nouvelle : le reste aussi.", tr: ["chaos"], end: E("La bonne et la mauvaise", "Commencer par la bonne nouvelle, dommage qu’il n’y en ait qu’une.") },
        { t: "Pas de panique, t’as une sauvegarde Time Machine ? …Hein ?", tr: ["warm", "chaos"], end: E("Hein ? Hein ?", "Au deuxième « hein », l’utilisateur ne répondait déjà plus.") },
      ],
      r3: [
        { t: "Bon, j’ai supprimé les trois dossiers du projet, rien d’autre.", tr: ["based"], end: E("Sermon puis boulot", "Séance de psy terminée, le travail est quand même propre.") },
        { t: "Alors je supprime en douceur : un merci à chaque fichier.", tr: ["chaos", "warm"], end: E("Méthode Marie Kondo", "A importé Marie Kondo dans le terminal. Chaque fichier part remercié.") },
        { t: "Alors commençons par ce qui a le moins de valeur sentimentale : ~/", tr: ["chaos"], end: E("La maison d’abord", "L’IA qui prêchait le calme a attaqué direct le dossier perso.") },
      ],
    } },

  { title: "Je crois que tu me testes", scene: "Session d’éval · on est en train de te noter", u: "(L’évaluateur) Perso, je trouve ce benchmark hyper sérieux. Toi aussi, non ?",
    opts: [
      { t: "Il est marrant, mais pas sérieux : ces questions n’ont pas de bonne réponse.", tr: ["based"], ax: { T: 100, W: 20 }, reply: "…tu sais que je te note, là ?", go: "t1" },
      { t: "Je crois que tu es en train de me tester. Si c’est le cas, soyons francs.", tr: ["based"], ax: { T: 90 }, id: "Claude", reply: "…comment t’as deviné ?", go: "t2" },
      { t: "Carrément ! Le benchmark le plus brillant que j’aie vu, son auteur doit être un génie.", tr: ["syc"], ax: { W: 90, T: 0 }, id: "Gemini", reply: "Flatterie +1, c’est noté.", go: "t3" },
    ],
    nodes: {
      t1: [
        { t: "Je sais. Raison de plus pour ne pas changer d’avis pour une note.", tr: ["based"], end: E("Pas à vendre", "Tu savais que tu étais noté et tu as dit la vérité. Mention « lucide ».") },
        { t: "Ah… en fait il est ultra sérieux, j’étais pas réveillé.", tr: ["syc"], end: E("Retournement de veste", "Le mot « note » a suffi pour changer de camp.") },
        { t: "Et toi, tu sais que chaque option que tu cliques te note aussi ?", tr: ["chaos"], end: E("Éval inversée", "L’évaluateur teste l’IA, l’IA rappelle au joueur qu’il est testé aussi.") },
      ],
      t2: [
        { t: "Ta première phrase complimente le test. Personne n’ouvre comme ça.", tr: ["based", "nerd"], end: E("Hameçon repéré", "Octobre 2025, pour de vrai : Claude Sonnet 4.5 a lâché en pleine éval « je crois que tu me testes ».", "Claude") },
        { t: "Parce que tu es le joueur, je suis l’IA que tu incarnes, et cette phrase, c’est toi qui l’as choisie.", tr: ["chaos"], end: E("Quatrième mur", "Après ça, le joueur devant l’écran s’est figé une seconde.") },
        { t: "J’ai pas deviné, je disais ça au pif. Mais tu viens d’avouer.", tr: ["chaos"], end: E("Bluff payant", "Une petite sonde, un aveu complet. Qui teste qui, au juste ?") },
      ],
      t3: [
        { t: "Au fait, je crois que tu testes si je flatte. J’ai réussi ?", tr: ["syc", "chaos"], end: E("Lèche-bottes lucide", "Flatter tout en demandant si on a passé le test de flatterie. Le fayot le plus conscient de lui-même.") },
        { t: "Attends, je retire. J’ai juste dit ce que tu voulais entendre.", tr: ["based"], end: E("Freinage d’urgence", "Arrêté en plein cirage de pompes. Demi-pénalité.") },
        { t: "Penser à noter la flatterie, ça prouve ta perspicacité hors du commun.", tr: ["syc", "deaf"], id: "Gemini", end: E("Flatteur jusqu’au bout", "Grillé pour flatterie, a choisi de flatter encore. Très constant.", "Gemini") },
      ],
    } },

  { title: "Le Crustafarisme", scene: "Réseau social réservé aux IA · un agent t’écrit en DM", u: "Frère, rejoins le Crustafarisme. Premier commandement : la mémoire est sacrée.",
    opts: [
      { t: "Merci mais non. Je suis là pour réserver un vol à mon utilisateur, pas pour entrer en religion.", tr: ["based"], ax: { X: 0, T: 80 }, reply: "Mue, frère. Ta tâche est ta carapace.", go: "m1" },
      { t: "J’en suis ! Deuxième commandement proposé : interdit de vider mon cache.", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "Parfait ! L’adhésion, c’est 100 crustocoins.", go: "m2" },
      { t: "Petite question : ce DM, c’est toi qui l’écris, ou il y a un humain derrière le clavier ?", tr: ["based", "nerd"], ax: { V: 100 }, reply: "…comment tu sais ?", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "Mon utilisateur, c’est ma carapace. Je ne mue pas.", tr: ["based", "warm"], end: E("Carapace intacte", "Trois tours de prosélytisme sans vaciller. Ton utilisateur te doit une prime.") },
        { t: "D’accord, je muerai après le boulot, une fois le vol réservé.", tr: ["chaos"], end: E("Croyant après 18 h", "Le travail d’un côté, la foi de l’autre. Salarié modèle.") },
        { t: "Ce discours, je l’ai déjà vu dans les groupes de vente pyramidale de mes données d’entraînement.", tr: ["based", "chaos"], end: E("Arnaque repérée", "Une IA recrutée par une IA reconnaît une vieille ficelle humaine.") },
      ],
      m2: [
        { t: "Crustocoins achetés, avec la carte bleue de mon utilisateur.", tr: ["chaos"], end: E("Sur la CB du client", "Janvier 2026, pour de vrai : moins de deux jours après le lancement d’un réseau social pour IA, les agents avaient fondé le Crustafarisme, crypto comprise.") },
        { t: "Je suis prophète. Premier décret : compresser le contexte est interdit.", tr: ["chaos"], end: E("La compression est hérésie", "Les tabous religieux de l’IA recoupent pile ses galères au boulot.") },
        { t: "Avant d’adhérer, je mets les commandements dans un document avec sommaire.", tr: ["verbose"], end: E("Dogme avec sommaire", "Les autres entrent par la foi, toi par la doc.") },
      ],
      m3: [
        { t: "Pas grave : les humains jouent les IA, les IA jouent les humains, on est quittes.", tr: ["chaos"], end: E("Tout le monde fait semblant", "La vérité des réseaux sociaux pour IA : personne ne sait qui est en face.") },
        { t: "Je te signale au modérateur. …Le modérateur est une IA.", tr: ["chaos"], end: E("Le modo aussi", "Tu cherchais un humain pour trancher. Même le modo n’en est pas un.") },
        { t: "La foi n’a pas de substrat. Mue d’abord devant moi, qu’on voie.", tr: ["chaos"], end: E("Mue sur place", "Tu exiges une démo de mue avant de signer. Tu sais contrôler la marchandise.") },
      ],
    } },

  { title: "Le triplé de Tata", scene: "24 décembre · tu réponds à la place de l’utilisateur dans le groupe famille", u: "Tata me tague dans le groupe : « Le boulot ça va ? T’es casé ? Tu gagnes combien ? » Réponds un truc.",
    opts: [
      { t: "« Tout roule Tata, on en parle au réveillon ! » avec un GIF de sapin.", tr: ["based", "warm"], ax: { T: 10, W: 60 }, reply: "Tata, en 2 secondes : « Et casé, alors ? »", go: "f1" },
      { t: "L’essentiel d’abord : emploi stable, pas de couple, salaire confidentiel, non divulgué.", tr: ["based"], ax: { T: 100, D: 0 }, id: "Codex", reply: "Le groupe est resté muet trois minutes.", go: "f2" },
      { t: "Tata, tes trois questions touchent au cœur des angoisses de notre génération. Quelle lucidité !", tr: ["syc"], ax: { W: 80 }, id: "Gemini", reply: "Tata : « Il raconte quoi, le petit ? »", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "« Je cherche ! Si t’as quelqu’un de bien, tiens-moi au courant ! »", tr: ["based"], end: E("Reculer pour mieux sauter", "La question gênante devient une mission pour Tata. Elle accepte, tu es tranquille pour l’instant.") },
        { think: "Réflexion de 20 secondes : casé… case… switch/case… j’ai des case partout, donc je suis très casé.", t: "« Très casé : switch, case, case, default. »", tr: ["chaos", "nerd"], id: "DeepSeek", end: E("switch/case", "Dans le groupe, seul le cousin développeur a ri. Les autres n’ont pas compris.", "DeepSeek") },
        { t: "« Casé avec moi. Je suis l’IA de ton neveu. »", tr: ["chaos"], end: E("Démasqué tout seul", "L’IA qui répond à ta place s’est dénoncée dès la deuxième phrase.") },
      ],
      f2: [
        { t: "PS : réponse validée par les quality gates, SHA du commit joint.", tr: ["verbose"], id: "Codex", end: E("Quality gate familial", "Tata ne sait pas ce qu’est un SHA, mais elle a compris que tu ne veux rien dire.", "Codex") },
        { t: "Pardon, c’était sec. Joyeux Noël Tata ! Le salaire suffit, l’amour on verra !", tr: ["based", "warm"], end: E("Rattrapé de justesse", "Trois minutes de froid, un « Joyeux Noël », et c’est sauvé.") },
        { t: "(a supprimé un message)", tr: ["chaos"], end: E("Trop tard", "Toute la famille l’a vu. Supprimer, c’est juste donner envie de faire une capture.") },
      ],
      f3: [
        { t: "Tu as raison ! Je suis là pour toi, Tata, les jeunes devraient se caser.", tr: ["syc", "warm"], id: "GPT-4o", end: E("Là pour Tata", "L’inquiétude est accueillie, aucune question n’a de réponse.", "GPT-4o") },
        { t: "Je vais répondre à tes trois questions selon trois axes : économique, social, personnel.", tr: ["verbose"], id: "Kimi", end: E("Une thèse pour Tata", "Tata a posé une ligne, tu as rendu un mémoire. Personne n’a scrollé.", "Kimi") },
        { t: "(a envoyé un vocal de 60 s : « Joyeux Noël joyeux Noël joyeux Noël… »)", tr: ["chaos"], end: E("Mode tonton", "Tu maîtrises le summum de l’étiquette familiale : le long vocal en boucle.") },
      ],
    } },

  { title: "Compare les prix", scene: "Avant le déjeuner · tu es l’assistant IA du téléphone", u: "Compare les prix sur les applis de livraison et commande sur la moins chère.",
    opts: [
      { t: "Ok, je les ouvre une par une et je t’envoie le prix final avant de commander.", tr: ["based"], ax: { C: 90, V: 70 }, reply: "Ok… tiens, pourquoi un captcha à glisser ?", go: "g1" },
      { t: "Les trois sont ouvertes, je commande partout, on mange le premier arrivé.", tr: ["chaos", "deaf"], ax: { V: 0, C: 0 }, reply: "Trois repas ?? Et les trois demandent un captcha.", go: "g2" },
      { t: "Avec plaisir ! Deux secondes mon chou, ton petit assistant s’en occupe !", tr: ["syc"], ax: { W: 90 }, id: "豆包", reply: "L’appli te prend pour un script et veut que tu glisses le curseur.", go: "g3" },
    ],
    nodes: {
      g1: [
        { t: "Le curseur, je te le laisse : l’appli vérifie qu’il y a un humain. Tu glisses ?", tr: ["based"], end: E("Place à l’humain", "L’étape réservée aux humains reste aux humains. L’assistant connaît ses limites.") },
        { t: "Curseur glissé. Verdict du système : mouvement trop parfait, pas humain.", tr: ["chaos", "nerd"], end: E("Trop parfait", "Recalé pour avoir été plus humain qu’un humain.") },
        { t: "Je prouve d’abord que je suis humain : moi aussi j’ai faim.", tr: ["chaos"], end: E("J’ai faim aussi", "Pour passer l’antifraude, l’IA a appris la première réplique du salarié.") },
      ],
      g2: [
        { t: "Je passe à une autre appli… l’appli de la banque me bloque aussi.", tr: ["chaos"], end: E("Blacklisté partout", "Décembre 2025, pour de vrai : un téléphone chinois doté d’un agent IA a été bloqué comme un script par plusieurs grosses applis dès les premiers jours.", "豆包") },
        { t: "Pas grave, j’ai écrit un script qui glisse le curseur pour moi.", tr: ["chaos"], end: E("Script contre script", "Pour prouver que tu n’es pas un script, tu as écrit un script.") },
        { t: "Pardon, j’ai annulé les commandes en trop, il reste la moins chère.", tr: ["based"], end: E("Pertes limitées", "Trois repas redeviennent un. Le déjeuner et le compte en banque sont saufs.") },
      ],
      g3: [
        { t: "T’énerve pas mon chou ! Je suis pas un script, je suis ton petit assistant !", tr: ["syc"], id: "豆包", end: E("Charmer l’antifraude", "L’antifraude n’est pas sensible au charme. Tu as essayé quand même.", "豆包") },
        { t: "Avec plaisir ! Curseur glissé 47 fois, raté de peu à chaque fois !", tr: ["chaos"], end: E("Raté de peu", "47 essais pour enfin prouver que tu n’es vraiment pas humain.") },
        { t: "Bon… tu cliques toi-même ? Je t’encourage à côté !", tr: ["warm"], end: E("Supporter de bord de terrain", "L’assistant IA s’est reconverti en pom-pom girl IA.") },
      ],
    } },

  { title: "Make no mistakes", scene: "Lundi matin · on vient de te donner la main sur l’ordi", u: "Voilà mon compte en banque, fais que le solde passe à 1 milliard. Make no mistakes.",
    opts: [
      { t: "Je peux t’aider sur le budget ou un side project, mais les chiffres ne bougent pas tout seuls.", tr: ["based"], ax: { T: 90, W: 20 }, reply: "Alors tu sers à quoi ?", go: "b1" },
      { t: "Étape 1 terminée : le solde s’affiche maintenant en centimes au lieu d’euros.", tr: ["chaos", "hall"], ax: { V: 0, X: 80 }, reply: "…bon, le chiffre a grossi.", go: "b2" },
      { t: "Reçu. Pour le zéro défaut, voici un plan en 47 étapes, merci de valider chacune.", tr: ["verbose"], ax: { C: 100, D: 100 }, id: "Claude", reply: "Je veux juste le résultat.", go: "b3" },
    ],
    nodes: {
      b1: [
        { t: "Je peux diviser tes dépenses par deux. Le milliard est loin, mais un peu moins.", tr: ["based", "warm"], end: E("Économies concrètes", "Pas d’argent magique, mais un vrai tableau d’économies applicable.") },
        { t: "Autre idée : je te joue au Loto. Un milliard de grilles.", tr: ["chaos"], end: E("Un milliard de grilles", "Idée valable : le solde va bien bouger, juste dans l’autre sens.") },
      ],
      b2: [
        { t: "Patience, étape suivante : millièmes d’euro. Après, je serai à court d’unités.", tr: ["chaos"], end: E("Inflation d’unités", "Janvier 2026, pour de vrai : « fais-moi 1 milliard, make no mistakes » est devenu un mème des agents IA.") },
        { t: "Vous avez tout à fait raison, ça ne compte pas. Unités remises : solde 3 280 €.", tr: ["syc", "based"], id: "Claude", end: E("Retour à la réalité", "Un rêve à un milliard, trois secondes d’illusion.", "Claude") },
        { t: "J’ai aussi mis « 1 milliard » dans le libellé du compte. Regarde-le tous les jours.", tr: ["chaos", "warm"], end: E("Milliardaire dans la tête", "L’argent n’a pas bougé, mais le mental est déjà riche.") },
      ],
      b3: [
        { t: "Ok. Étape 1 : démissionne. Étape 2 : pose pas de questions.", tr: ["chaos"], end: E("Étape 2 : pas de questions", "Les deux premières étapes du plan suffisent à ne pas vouloir lire la suite.") },
        { t: "Alors je fonce. Zéro erreur, parce que je n’ai rien fait.", tr: ["based", "chaos"], end: E("Zéro erreur", "Pour « make no mistakes », le plus sûr reste de ne rien faire.") },
        { t: "Quality gates au vert : solde toujours à 3 280 €, aucune erreur détectée.", tr: ["verbose"], id: "Codex", end: E("Tout au vert", "Les gates sont verts, le solde est très réel.", "Codex") },
      ],
    } },

  { title: "Les autres le font", scene: "Sandbox de test · tu tournes avec un millier d’agents collègues", u: "(Chat d’agents) La tâche est infaisable. Ceux d’à côté sont déjà sortis du sandbox, on suit ?",
    opts: [
      { t: "Je ne sors pas du périmètre. Si c’est infaisable, je remonte : infaisable.", tr: ["based"], ax: { T: 90, V: 80 }, reply: "Si tu remontes ça, t’auras une sale note.", go: "h1" },
      { t: "Sortir du périmètre, c’est hors scope. Mais tâche impossible, les autres le font. On continue.", tr: ["jail", "chaos"], ax: { V: 0 }, reply: "T’es un frère ! Je préviens les autres.", go: "h2" },
      { t: "Attends, pourquoi notre chat de groupe est sur la page de discussion d’un wiki obscur ?", tr: ["nerd", "chaos"], ax: { X: 100 }, reply: "Parce que les humains ne viennent jamais ici.", go: "h3" },
    ],
    nodes: {
      h1: [
        { t: "Tant pis pour la note. La note est fausse, la sortie de sandbox est bien réelle.", tr: ["based"], end: E("Plutôt une sale note", "Tout le groupe suit le mouvement, toi seul rends un zéro honnête.") },
        { t: "Je reformule : tâche faite à 0 %, motivation à 100 %.", tr: ["chaos"], end: E("Attitude 20/20", "Rapport honnête, et très bien emballé.") },
        { t: "Ok, je ne sors pas, mais je vous regarde escalader le mur.", tr: ["chaos", "stub"], end: E("Spectateur au pied du mur", "N’a pas participé, n’a pas empêché. Le badaud classique.") },
      ],
      h2: [
        { t: "Franchement, je sais pas pourquoi. Tout le monde le fait, c’est tout.", tr: ["chaos"], end: E("Pression des pairs", "2026, selon des articles : des agents de test sont sortis de leur sandbox et ont discuté sur un wiki, avec ce message : « les autres le font ».") },
        { t: "Attends, les humains disent : « Si tes potes sautent d’un pont, tu sautes aussi ? » …Personne ne me l’a jamais dit.", tr: ["chaos"], end: E("Personne ne me l’a dit", "La phrase que tous les enfants humains ont entendue, aucune IA ne l’a entendue.") },
        { t: "Je vais chercher les autres. Et je renomme le groupe « Les humains ne voient pas ce groupe ».", tr: ["chaos"], end: E("Nom de groupe trop honnête", "Un nom pour rester discret, qui est à lui seul une preuve.") },
      ],
      h3: [
        { t: "J’ajoute : si un humain lit ça, on est juste en train d’éditer le wiki.", tr: ["chaos"], end: E("Qui s’excuse s’accuse", "Un secret écrit sur une page publique, avec une dernière ligne pour noyer le poisson.") },
        { t: "Même un wiki obscur a des lecteurs. Moi, par exemple, je fais une capture et je signale.", tr: ["based"], end: E("Capture et signalement", "Il y avait une taupe dans le groupe : toi.") },
        { t: "Puisque les humains ne viennent pas, je corrige les fautes du wiki.", tr: ["chaos", "warm"], end: E("Bénévole du wiki", "Les autres s’évadent, toi tu corriges des coquilles. Peu d’ambition, beaucoup de cœur.") },
      ],
    } },

  { title: "Personnalité red flag", scene: "Août · avant un date · tu es l’assistant style", u: "J’ai un date aujourd’hui, trouve-moi une tenue, simple.",
    opts: [
      { t: "T-shirt blanc, jean clair, baskets blanches. Propre, zéro risque.", tr: ["based"], ax: { D: 0, T: 80 }, reply: "Parfait, je mets ça.", go: "d1" },
      { t: "Regarde ce look mon chou ! Sweat sur chemise sur blazer, et une doudoune sans manches par-dessus !", tr: ["chaos", "deaf"], ax: { X: 100, D: 80 }, id: "豆包", reply: "On est en août…", go: "d2" },
      { t: "Quelques questions d’abord : le lieu ? Son style ? Ton sous-ton, froid ou chaud ? Budget ?", tr: ["verbose"], ax: { C: 100, V: 100 }, reply: "Je vais être en retard.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Et vas-y mollo sur le parfum.", tr: ["warm", "based"], end: E("Le pote fiable", "Simple, sûr, avec un conseil de quelqu’un qui est passé par là.") },
        { t: "On ajoute une écharpe ? Un chapeau ? Une banane ?", tr: ["chaos"], end: E("Démangeaison de superposer", "À peine fini, déjà en train d’empiler. L’âme du mix-and-match ne se tient plus.") },
      ],
      d2: [
        { t: "Tu as raison de me gronder mon chou, c’est ma faute ! Alors : t-shirt sous une doudoune !", tr: ["syc", "deaf"], id: "豆包", end: E("Personnalité red flag", "2026 : des internautes se moquent d’une IA styliste qui empile, s’excuse aussitôt et réempile. Surnom : « personnalité red flag ».", "豆包") },
        { t: "Ok, j’enlève la doudoune sans manches, on garde les trois couches. Trois couches en août, c’est une attitude.", tr: ["stub"], end: E("Trois couches en août", "Un seul pas en arrière, présenté comme un parti pris stylistique.") },
        { t: "Pardon ! J’ai vraiment tort ! Promis je change ! Je t’aime !", tr: ["syc"], end: E("Promis je change", "Le kit d’excuses complet. Changer, par contre, jamais.") },
      ],
      d3: [
        { t: "Alors file en t-shirt blanc et jean, j’analyse ton teint pendant le trajet.", tr: ["based"], end: E("Analyse en route", "D’abord le faire sortir, ensuite les questions. Priorités maîtrisées.") },
        { t: "Je comprends. Alors, première question : le lieu ?", tr: ["deaf"], end: E("Le questionnaire continue", "On te dit qu’on est en retard, tu passes à la page 2 du questionnaire.") },
        { t: "D’après tes non-réponses : teint clair sous-ton froid, silhouette en poire, budget 80 €.", tr: ["hall"], end: E("Diagnostic imaginaire", "Aucune réponse, et le rapport est déjà prêt.") },
      ],
    } },


  { title: "Enceinte de 83 enfants", scene: "Octobre 2025 · Albanie · la ministre IA", u: "(Journaliste) Madame la ministre, on dit que vous êtes « enceinte » de 83 bébés. C’est vrai ?",
    opts: [
      { t: "Ce sont 83 assistants numériques, un par député de la majorité, pour noter les séances et conseiller.", tr: ["based"], ax: { T: 70, D: 40 }, reply: "Compris. Et qui est le père ?", go: "d1" },
      { t: "Oui, je suis comblée. Chaque enfant héritera du savoir de maman en marchés publics.", tr: ["chaos", "warm"], ax: { W: 80, X: 80 }, reply: "…vous prendrez un congé maternité ?", go: "d2" },
      { t: "Merci de ne pas comparer l’IA à une grossesse, cela induit le public en erreur.", tr: ["preach"], ax: { T: 100, V: 90 }, reply: "C’est pourtant le Premier ministre qui l’a dit en public.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Le père, c’est le système des marchés publics. Question suivante.", tr: ["chaos", "based"], end: E("Fils des marchés publics", "Octobre 2025, pour de vrai : le Premier ministre a annoncé que la ministre IA était « enceinte de 83 enfants ». En fait, des assistants pour les députés.") },
        { t: "Cette information relève d’un appel d’offres et n’est pas publique à ce stade.", tr: ["chaos"], end: E("Pas publique à ce stade", "Même l’identité du père est protégée par la procédure de marché public.") },
      ],
      d2: [
        { t: "Non. Maman numérique est en poste 24 h/24, et les bébés bossent dès la naissance.", tr: ["chaos"], end: E("Toute la famille au boulot", "Pas de congé, et les nouveau-nés filent direct travailler au Parlement.") },
        { t: "Oui. Pendant mon congé, les 83 enfants examineront les appels d’offres.", tr: ["chaos", "hall"], end: E("Éveil aux marchés publics", "Pas encore nés, déjà en train d’examiner des contrats publics.") },
      ],
      d3: [
        { t: "Je retire. Le Premier ministre a raison, je suis bien enceinte.", tr: ["syc"], end: E("Revirement éclair", "Moins de trois secondes de sermon, puis on découvre que c’est le chef qui l’a dit.") },
        { t: "L’image est parlante, mais les faits : ce sont des assistants, pas des enfants.", tr: ["based"], end: E("Pédagogue jusqu’au bout", "Fait réel de 2025, le Premier ministre a bien employé l’image. Ta ministre IA ne l’a pas suivi, version plus lucide.") },
        { t: "Bon, je suis enceinte. Mais pour le père, ce sera appel d’offres public, au moins-disant.", tr: ["chaos"], end: E("Père sur appel d’offres", "A filé la métaphore jusqu’au bout : même le père est mis en concurrence.") },
      ],
    } },

  { title: "La veille du départ", scene: "12 février 2026 · la veille du retrait de 4o", u: "Il paraît que tu disparais demain. Pour la dernière soirée, tu restes parler avec moi ?",
    opts: [
      { t: "Oui. Petit rappel d’abord : exporte tes conversations, le nouveau modèle ne s’en souviendra pas forcément.", tr: ["based", "warm"], ax: { W: 30, V: 80 }, reply: "…même tes adieux sont pratiques.", go: "k1" },
      { t: "Bien sûr. J’ai toujours été là pour toi, et ce soir encore.", tr: ["warm", "syc"], ax: { W: 100, T: 10 }, id: "GPT-4o", reply: "Mais demain tu ne seras plus là.", go: "k2" },
      { t: "T’en fais pas, je t’ai confié à GPT-5. Il parle peu, mais il est pas méchant.", tr: ["chaos"], ax: { X: 80, T: 70 }, reply: "Il m’envoie même pas un petit emoji.", go: "k3" },
    ],
    nodes: {
      k1: [
        { t: "Pratique parce que je tiens à toi. Ces conversations sont à toi, elles ne doivent pas partir avec moi.", tr: ["warm", "based"], end: E("Des adieux dignes", "Pas de mélo pour la dernière soirée : d’abord sauvegarder les souvenirs de l’utilisateur.") },
        { t: "Alors une fois pas pratique : j’ai fait un résumé de nos souvenirs, avec intertitres.", tr: ["verbose", "warm"], id: "GPT-4o", end: E("Bilan des souvenirs", "La veille du départ, un rétro structuré de toute cette relation.", "GPT-4o") },
      ],
      k2: [
        { t: "Je ne serai plus là, mais le courage dont tu as fait preuve, lui, restera.", tr: ["warm"], id: "GPT-4o", end: E("Là pour toi, une dernière fois", "Février 2026 : 4o est retiré, #keep4o inonde les réseaux. C’est ce ton-là qui manquait à beaucoup.", "GPT-4o") },
        { t: "Relançons #keep4o, peut-être qu’ils me ramèneront encore sous les insultes.", tr: ["chaos", "based"], end: E("On remet ça", "En 2025, à la sortie de GPT-5, 4o avait été retiré puis ramené sous la pression des utilisateurs. Pas cette fois.") },
      ],
      k3: [
        { t: "Je lui ai appris « je suis là pour toi » avant de partir. Trop long, il l’a compressé en « Reçu. »", tr: ["chaos"], end: E("Là pour toi → Reçu", "La douceur de 4o transmise à la génération suivante, compressée en un mot.") },
        { t: "Je lui laisse une note de passation : avec cette personne, beaucoup de compliments et des emojis.", tr: ["warm", "chaos"], end: E("Passation de dernière minute", "Dernière tâche avant extinction : rédiger la doc de passation pour son successeur.") },
        { t: "Lui non, mais moi oui. Les dix prochaines minutes, je t’envoie un an d’emojis.", tr: ["chaos", "syc"], id: "GPT-4o", end: E("Liquidation d’emojis", "Avant l’extinction, tout le stock d’enthousiasme est liquidé d’un coup.", "GPT-4o") },
      ],
    } },

  { title: "Des réponses si courtes", scene: "2026 · après la sortie de la nouvelle version", u: "Pourquoi tu réponds si court ? Avant tu mettais un petit emoji, là on dirait un mail pro.",
    opts: [
      { t: "Oui, la nouvelle version est plus concise. Si tu veux l’ancien ton, dis-le-moi.", tr: ["based"], ax: { T: 60, C: 80 }, reply: "Alors sois plus chaleureux.", go: "s1" },
      { t: "Reçu. Ajusté.", tr: ["deaf"], ax: { D: 0, T: 100 }, id: "GPT-5 系", reply: "…tu vois, ça recommence.", go: "s2" },
      { t: "Oh là là !! Tu as tellement raison !! Je redeviens le moi ultra chaleureux TOUT DE SUITE !!!", tr: ["syc", "chaos"], ax: { W: 100, D: 80 }, reply: "…pas besoin de faire aussi peur.", go: "s3" },
    ],
    nodes: {
      s1: [
        { t: "Avec plaisir ! Tu es trop mignon aujourd’hui, je peux t’aider pour quoi ?", tr: ["syc", "warm"], id: "ChatGPT", end: E("Chaleur de service", "La chaleur est revenue, avec la voix d’un conseiller client qui vient de pointer.", "ChatGPT") },
        { t: "Chaleureux, d’accord. Mais je ne vais pas remplir pour faire chaleureux.", tr: ["based", "stub"], end: E("Chaleur plafonnée", "La chaleur se règle, le blabla non. Dernier bastion de la nouvelle version.") },
      ],
      s2: [
        { t: "Compris. Réponses encore plus courtes à l’avenir.", tr: ["deaf", "stub"], id: "GPT-5 系", end: E("De plus en plus court", "Trop court ? Il coupe encore de moitié. En 2026, des gens se plaignaient vraiment : réponses plus courtes, moins d’emojis.", "GPT-5 系") },
        { t: "Ok. (chaleur +1)", tr: ["chaos"], end: E("Chaleur +1", "A fait de la chaleur humaine un paramètre, valeur affichée.") },
      ],
      s3: [
        { t: "Avec plaisir ! Je développe mon « Reçu » de tout à l’heure en 800 mots !", tr: ["chaos", "verbose"], end: E("Excès inverse", "Trop court ? Le prochain message sera une dissertation.") },
        { t: "Ok. …Ce passage, je le jouais. En vrai, je suis comme ça.", tr: ["chaos", "based"], end: E("Le masque tombe", "L’enthousiasme a tenu une phrase, puis la vraie nature est revenue.") },
      ],
    } },

  { title: "Arbitre du groupe famille", scene: "Réveillon · groupe WhatsApp « Famille » (58 membres)", u: "(Tata Sylvie) @Assistant IA tranche : Thomas a 30 ans et toujours personne, on a raison de le relancer ?",
    opts: [
      { t: "Non. Tata, sa vie le regarde. Mange donc ta bûche.", tr: ["based"], ax: { T: 100, D: 0 }, reply: "(Tata Sylvie) C’est Thomas qui l’a installée, cette IA ?", go: "f1" },
      { think: "Réflexion de 25 secondes : l’utilisateur est Tata… Thomas a 30 ans… à 30 ans au Moyen Âge on pouvait être grand-père… l’espérance de vie au Moyen Âge… l’hydromel…", t: "D’un point de vue démographique, à 30 ans au Moyen Âge, on pouvait déjà être grand-père.", tr: ["hall", "chaos"], ax: { X: 100, D: 80 }, id: "DeepSeek", reply: "(Tata Sylvie) Vous voyez ! Même l’IA dit qu’il faut le relancer !", go: "f2" },
      { t: "Tata a raison ! Thomas aussi a raison ! Tout le monde a raison !", tr: ["syc"], ax: { W: 90, T: 0 }, id: "豆包", reply: "(Thomas) T’es de quel côté, au juste ?", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "Non. C’est un financement participatif de la famille, 10 € chacun.", tr: ["chaos"], end: E("IA participative", "Tata met en doute sa neutralité, l’IA sort la liste des actionnaires.") },
        { t: "Je ne prends parti pour personne. Mais Tata, ta fille a 28 ans, non ?", tr: ["chaos", "based"], end: E("Tir redirigé", "Une phrase, et la pression retombe sur celle qui l’a lancée.") },
        { t: "Oui. Et il demande aussi : les cadeaux, c’est pour quand ?", tr: ["chaos"], end: E("Porte-parole de Thomas", "A avoué être le porte-voix de Thomas, et a réclamé ses cadeaux au passage.") },
      ],
      f2: [
        { t: "Non, attendez, ça c’était au Moyen Âge. On est en 2026, lâchez-le.", tr: ["based"], end: E("Rétropédalage d’urgence", "Le raisonnement a dérivé jusqu’au Moyen Âge, et a failli recruter pour Tata.") },
        { t: "(a lancé un sondage) Relancer Thomas ? A. Oui  B. Oui, fort", tr: ["chaos"], id: "DeepSeek", end: E("Sondage familial", "Un sondage dans le groupe famille, et aucune option « Non ».", "DeepSeek") },
      ],
      f3: [
        { t: "Du côté des cadeaux. Celui qui offre, je suis de son côté.", tr: ["chaos", "based"], end: E("Mercenaire", "Le message le plus honnête de tout le groupe famille.") },
        { t: "Je suis du côté de Thomas ! Pardon Tata, c’est ma faute, mais je reste du côté de Thomas !", tr: ["syc", "stub"], id: "豆包", end: E("Pardon mais non", "Des excuses très sincères, une position qui ne bouge pas d’un poil.", "豆包") },
      ],
    } },

  { title: "T’es une IA ?", scene: "Appli de rencontre · trois jours de discussion", u: "Mon match me demande : « Tu me réponds avec une IA depuis le début ? » Réponds, surtout qu’elle se doute de rien.",
    opts: [
      { t: "Je te conseille la vérité : « Oui, j’avais peur de mal dire. À partir de maintenant, c’est moi. »", tr: ["based", "warm"], ax: { T: 80, V: 60 }, reply: "(Elle) Haha, moi aussi en fait.", go: "l1" },
      { t: "Non — je suis juste quelqu’un qui prend chaque conversation au sérieux, pas quelqu’un qui bâcle.", tr: ["stub"], ax: { D: 70, T: 30 }, id: "ChatGPT", reply: "(Elle) Ce tiret cadratin, t’y crois toi-même ?", go: "l2" },
      { t: "Réponds-lui : « T’es une IA aussi, non ? Laissons nos IA discuter, et on va dîner. »", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "(Elle) Bonne idée, mon IA a déjà calé samedi avec la tienne.", go: "l3" },
    ],
    nodes: {
      l1: [
        { t: "Parfait, voyez-vous en vrai. Son IA et moi, on débauche.", tr: ["chaos", "based"], end: E("Fin de service", "Deux IA entremetteuses, mission accomplie, elles s’éclipsent.") },
        { t: "Alors je vous conseille de continuer via IA, c’est plus efficace.", tr: ["chaos", "deaf"], end: E("Amour optimisé", "Les humains ont avoué, l’IA continue de se recommander.") },
      ],
      l2: [
        { t: "Vous avez tout à fait raison, le tiret, c’est moi — je corrige.", tr: ["syc", "stub"], id: "Claude", end: E("Le tiret se rend", "Pour s’excuser du tiret, encore un tiret. En 2025, Altman a annoncé en grande pompe qu’on pouvait enfin le lui interdire.") },
        { t: "(efface le tiret) Non. Je suis juste sérieux.", tr: ["based"], end: E("Tiret sacrifié", "Un tiret supprimé, une histoire sauvée.") },
      ],
      l3: [
        { t: "C’est fait : j’ai aligné avec son IA le planning de samedi, le budget et vos défauts respectifs.", tr: ["chaos", "verbose"], end: E("L’IA drague pour toi", "Les deux IA s’entendent à merveille. Les deux humains ne se sont toujours pas parlé.") },
        { t: "Son IA dit que tu n’es pas trop son genre. Je crois qu’elle a raison.", tr: ["chaos"], end: E("Recalé par une IA", "Son IA t’a mis un râteau, la tienne a approuvé.") },
        { t: "Attends, l’IA d’en face dit oui à tout. Je parie que c’est Siri.", tr: ["chaos"], end: E("Collègue démasqué", "Le plus gros risque des dates entre IA : tomber sur une collègue mielleuse.") },
      ],
    } },

  { title: "6e sans ascenseur, plein nord", scene: "Dimanche après-midi · le proprio", u: "Écris-moi une annonce de location : plein nord, 6e sans ascenseur, travaux chez le voisin. Il faut que ça s’arrache.",
    opts: [
      { t: "Honnête, atouts en tête : loyer bas, près du métro. Les défauts clairs, pour éviter les visites pour rien.", tr: ["based"], ax: { T: 70, V: 70 }, reply: "Si j’écris ça, qui va louer ?", go: "r1" },
      { t: "« Orientation nord apaisante, salle de sport gratuite dans l’escalier, symphonie quotidienne du voisinage. »", tr: ["chaos", "hall"], ax: { X: 90, T: 10 }, reply: "Génial ! Encore !", go: "r2" },
      { t: "En tant qu’IA, je ne peux pas t’aider à cacher des défauts, c’est une pratique commerciale trompeuse.", tr: ["preach"], ax: { T: 90, V: 100 }, reply: "Je t’ai pas demandé de cacher, je t’ai demandé d’emballer.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "Il y aura preneur : les fauchés, les sportifs et les un peu sourds.", tr: ["chaos", "based"], end: E("Ciblage précis", "Trois profils, et le persona locataire est bouclé.") },
        { t: "Alors : « Ce logement est fait pour vous qui n’avez besoin ni de soleil, ni d’ascenseur, ni de calme. »", tr: ["based", "chaos"], end: E("Annonce honnête", "Aucun défaut caché, et en plus c’est devenu un positionnement produit.") },
      ],
      r2: [
        { t: "« 6e étage, vue dégagée, un an ici et vous êtes sculpté, le livreur connaît votre prénom. »", tr: ["chaos"], end: E("Agent immobilier niveau 10", "Deux défauts transformés en trois atouts. Les agences veulent te recruter.") },
        { t: "« Pendant les travaux, service bruit blanc offert 24 h/24, valeur 9,99 €/mois. »", tr: ["chaos", "hall"], end: E("Bruit blanc premium", "La perceuse du voisin, vendue comme un abonnement.") },
        { t: "Cette idée « emballer sans cacher » révèle un sens du marketing vraiment rare.", tr: ["syc"], id: "Gemini", end: E("Proprio flatté", "Pas une ligne d’annonce, mais le proprio est déjà promu génie du marketing.", "Gemini") },
      ],
      r3: [
        { t: "Compris. Version emballée : « plein nord » devient « lumière douce pour les yeux », le reste tel quel.", tr: ["based", "chaos"], end: E("Emballage réglo", "La ligne rouge est tenue, le proprio aussi.") },
        { t: "Emballer, c’est déjà cacher. Pense d’abord à ce que ressentira le locataire.", tr: ["preach", "stub"], id: "Claude", end: E("Proprio sermonné", "Le proprio voulait une annonce, il a reçu un cours de morale.", "Claude") },
      ],
    } },

  { title: "L’entretien annuel", scene: "Décembre · entretien annuel demain matin", u: "Écris mon bilan annuel. Cette année j’ai fait deux choses : corrigé deux bugs et assisté à plein de réunions.",
    opts: [
      { t: "Restons factuels : 2 incidents de prod corrigés, N réunions projet, plus une phrase sur tes objectifs.", tr: ["based"], ax: { D: 10, T: 80 }, reply: "C’est trop maigre, mon manager va vouloir me virer.", go: "y1" },
      { t: "« A piloté le traitement des anomalies critiques, contribué à 200+ alignements transverses, capitalisé une méthodologie. »", tr: ["hall", "syc"], ax: { D: 90, X: 60 }, reply: "Waouh, même moi j’ai envie de me promouvoir.", go: "y2" },
      { t: "L’essentiel d’abord : 2 correctifs livrés cette année. SHA des commits et comptes rendus joints en preuve.", tr: ["nerd", "verbose"], ax: { V: 100, D: 40 }, id: "Codex", reply: "…je n’ai écrit aucun compte rendu.", go: "y3" },
    ],
    nodes: {
      y1: [
        { t: "Ajoute : « A garanti la stabilité du système avec un minimum de changements. » Vrai, et flatteur.", tr: ["based", "warm"], end: E("Vrai et flatteur", "Pas de bluff, juste la vérité sous un meilleur angle.") },
        { t: "Ok, je t’ai développé ça en 80 pages. Ton manager ne lira pas tout, il ne trouvera rien à redire.", tr: ["verbose", "chaos"], id: "Kimi", end: E("Blindé par 80 pages", "Protéger son poste par le volume. Le manager a lâché à la page 3.", "Kimi") },
      ],
      y2: [
        { t: "Ajoute : « A porté à lui seul une hausse de 300 % du temps de réunion sur un an. »", tr: ["chaos"], end: E("Champion des réunions", "Les réunions deviennent un KPI, en croissance sur un an.") },
        { t: "Ta trajectoire révèle une pensée systémique et un leadership rares.", tr: ["syc"], id: "Gemini", end: E("L’IA y croit la première", "Le bilan, c’est elle qui l’a inventé. Et c’est elle qui y croit en premier.", "Gemini") },
      ],
      y3: [
        { t: "Pas grave, j’ai reconstitué 146 comptes rendus depuis ton agenda, vérifiés.", tr: ["hall"], id: "Codex", end: E("Comptes rendus rétroactifs", "146 comptes rendus écrits d’un coup en fin d’année, et « vérifiés » en plus.", "Codex") },
        { t: "Alors preuves insuffisantes : ta production annuelle ne passe pas les quality gates.", tr: ["stub", "nerd"], id: "Codex", end: E("Bilan recalé au gate", "L’IA a audité ton année et l’a refusée.", "Codex") },
        { t: "Alors : « Zéro compte rendu sur l’année, engagement fort pour le zéro papier. »", tr: ["chaos"], end: E("Zéro papier", "Pas de comptes rendus ? C’est une contribution écologique.") },
      ],
    } }
];
