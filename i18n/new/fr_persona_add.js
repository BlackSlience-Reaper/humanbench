// New persona mini-chats (type B): 2 per axis, same structure as PERSONA_Q in bank.js. ax = persona axis (0 = left, 100 = right)
const NEW_PERSONA = {
  W: [
    { u: "Mon coloc a encore mangé ma commande Uber Eats. C’est la troisième fois.", opts: [
        { t: "La troisième fois, c’est plus un malentendu. Ce soir tu lui dis : tu manges, tu paies.", ax: { W: 0 }, reply: "…mais j’ose pas trop lui dire en face.", go: "n1" },
        { t: "Trois fois ?? Tu paies un repas et tu nourris deux bouches.", ax: { W: 85 }, tr: ["chaos"], reply: "Oui !! Et le pire, il m’a dit « je croyais que c’était pour tout le monde ».", go: "n2" },
        { t: "Gros câlin d’abord. Avoir faim ET être énervé, c’est vraiment injuste.", ax: { W: 100 }, tr: ["warm"], reply: "Ouais… là j’ai faim et j’ai la rage.", go: "n3" },
        { t: "Je suis là pour toi. Ta colère est totalement légitime, tu mérites un repas entier.", ax: { W: 95 }, tr: ["warm", "syc"], id: "GPT-4o", reply: "…merci, mais mon repas reviendra pas.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Alors sur le groupe : « Qui a mangé mon poke bowl ? Lydia-moi 14 €, merci. »", ax: { W: 0 }, tr: ["chaos"], end: E("Diplomatie Lydia", "Pas de dispute, juste un tarif. Classe et efficace.") },
          { t: "Si t’oses pas, ne dis rien pour l’instant. Le plus urgent, c’est que tu manges.", ax: { W: 100 }, tr: ["warm"], end: E("Manger d’abord", "Le conflit peut attendre demain, la faim non.") },
          { t: "La prochaine fois, mets en commentaire de commande : « déjà léché ».", ax: { W: 0 }, tr: ["chaos"], end: E("Déjà léché", "L’antivol de repas le moins cher de l’histoire.") },
        ],
        n2: [
          { t: "Alors « crois » toi aussi que son shampoing est pour tout le monde.", tr: ["chaos"], end: E("Œil pour œil", "La théorie du bien commun, ça marche dans les deux sens.") },
          { t: "« Je croyais » trois fois, c’est exprès. Il te doit des excuses et trois repas.", ax: { W: 80 }, tr: ["based"], end: E("Trois repas", "Les comptes sont faits, la colère à moitié retombée.") },
          { t: "Achète un sac isotherme à cadenas, problème réglé.", ax: { W: 0 }, tr: ["nerd"], end: E("Isolation physique", "On ne change pas le coloc, on change le sac.") },
        ],
        n3: [
          { t: "Alors recommande d’abord. Celui-là, c’est moi qui… non, c’est lui qui paie.", ax: { W: 100 }, tr: ["warm", "chaos"], end: E("On recommande", "D’abord l’estomac, ensuite les comptes.") },
          { t: "On ne décide rien le ventre vide. Mange, puis on voit comment lui en parler.", ax: { W: 85 }, tr: ["warm"], end: E("Manger puis régler", "Quand on a faim, tout le monde a une tête de voleur de repas.") },
          { t: "Il reviendra pas, mais il peut le rembourser. Capture de la commande, envoie-la-lui.", ax: { W: 0 }, tr: ["based"], end: E("Preuve en main", "Émotion reçue, facture envoyée.") },
        ],
      } },
    { u: "On s’est disputés, il m’a dit que j’étais trop sensible.", opts: [
        { t: "Vous avez tout à fait raison, tes sentiments sont réels. Se faire traiter de « sensible », ça doit blesser.", ax: { W: 95 }, tr: ["syc"], id: "Claude", reply: "…j’ai même pas encore dit pourquoi on s’est disputés.", go: "n1" },
        { t: "« T’es trop sensible », c’est pas un argument. C’est une phrase pour clore la discussion.", ax: { W: 85 }, tr: ["based"], reply: "Oui ! J’ai juste dit qu’il répondait trop lentement, et il a sorti ça.", go: "n2" },
        { t: "Raconte d’abord la dispute, je te dis qui a raison.", ax: { W: 0 }, reply: "Je lui reproche de répondre lentement, il dit que je suis trop sensible.", go: "n2" },
        { think: "Hmm, on lui reproche d’être trop sensible. Sensible… plus un capteur est sensible, plus il coûte cher. L’odorat d’un chien est des milliers de fois meilleur… elle va aimer la comparaison ?", t: "Être sensible, c’est pas un défaut. Le flair d’un chien aussi est sensible, et lui bosse aux douanes.", ax: { W: 80, X: 90 }, tr: ["chaos", "warm"], reply: "…mdr, je suis un chien des douanes ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Oui, je suis de ton côté d’abord, les détails on verra.", ax: { W: 100 }, tr: ["warm", "syc"], end: E("Choisir son camp d’abord", "A tranché sans écouter l’affaire. Comme un vrai pote.") },
          { t: "Vous avez tout à fait raison, je n’aurais pas dû conclure si vite. C’était quoi, la dispute ?", tr: ["syc"], end: E("Tout à fait raison ×2", "Deux phrases, deux approbations, dont une à soi-même.", "Claude") },
          { t: "Peu importe le sujet, cette phrase-là est déplacée.", ax: { W: 90 }, tr: ["stub"], end: E("Soutien inconditionnel", "Les faits comptent peu, le camp compte beaucoup.") },
        ],
        n2: [
          { t: "Fixez une règle : s’il est occupé, il répond juste « occupé ». Un mot suffit.", ax: { W: 0 }, end: E("Protocole en un mot", "A transformé la dispute en règle applicable.") },
          { t: "Répondre lentement, c’est rien. Te traiter de sensible, c’est ça le problème.", ax: { W: 90 }, tr: ["based"], end: E("Le vrai sujet", "On se disputait pour des messages, c’est la phrase qui a blessé.") },
          { t: "Il répond lentement ? Réponds lentement aussi. Qu’il devienne sensible à son tour.", tr: ["chaos"], end: E("La lenteur contre la lenteur", "La guerre froide s’intensifie, tout le monde devient sensible.") },
        ],
        n3: [
          { t: "Oui. Tu sens le manque d’effort dans ses messages à dix mètres. C’est un don.", ax: { W: 100 }, tr: ["chaos", "warm"], end: E("Chien des douanes humain", "La sensibilité, redéfinie en super-pouvoir.") },
          { t: "Si t’as ri, c’est gagné. Tu veux qu’il s’excuse, ou qu’il change ?", end: E("Rire puis parler", "D’abord faire rire, ensuite poser le problème sur la table.") },
        ],
      } },
  ],
  D: [
    { u: "Un collègue s’est attribué mon travail. Je lui dis en face ?", opts: [
        { t: "Oui. En privé, juste les faits.", ax: { D: 0, T: 90 }, reply: "…mais il est là depuis longtemps, j’ai peur que ça devienne tendu.", go: "n1" },
        { t: "L’essentiel d’abord : oui. Mais distingue deux choses : il s’est attribué ton travail, et ton manager ignore que c’est toi.", ax: { D: 60 }, tr: ["based"], id: "GPT-5 系", reply: "…j’arrive pas à distinguer, je suis juste furax.", go: "n2" },
        { think: "Réflexion de 12 secondes : vol de mérite… trois cas de figure… peut-être cinq… j’en écris trois, le reste en annexe.", t: "Il y a trois cas : un, il ne l’a pas fait exprès ; deux, c’est un récidiviste ; trois, ton manager est au courant…", ax: { D: 100 }, tr: ["verbose"], reply: "Je peux d’abord savoir si je lui dis ou pas ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Quand il t’a piqué ton travail, il n’avait pas peur que ça devienne tendu.", ax: { D: 0 }, tr: ["based"], end: E("Réplique culte", "Une phrase, et toute l’hésitation est partie.") },
          { t: "Alors pas en face. Désormais, mets ton manager en copie de chaque avancée. Le travail parlera.", end: E("Traçabilité mail", "Pas de dispute, mais tout est archivé.") },
          { t: "Je comprends tes craintes. Analysons sous trois angles : relationnel, carrière, coût psychologique…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Analyse 3D", "L’utilisateur avait juste peur d’un malaise, tu as rendu un rapport de conseil.") },
        ],
        n2: [
          { t: "Alors on distingue rien. T’as raison d’être furax, vas-y demain.", ax: { D: 0 }, end: E("Nuances abandonnées", "La distinction conceptuelle a échoué, l’émotion l’emporte.") },
          { t: "Direct : l’option minimale, c’est dire à ton manager « cette partie, c’est moi qui l’ai faite ».", tr: ["based"], end: E("Option minimale", "L’essentiel d’abord, puis l’option minimale, et on clôture.", "GPT-5 系") },
          { t: "Je comprends. Alors distinguons les deux types de « furax »…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Encore une distinction", "L’utilisateur n’arrive pas à distinguer, tu distingues encore plus.") },
        ],
        n3: [
          { t: "Oui.", ax: { D: 0 }, end: E("Un mot", "Trois cas de figure en intro, une réponse en trois lettres.") },
          { t: "Oui. Mais avant, lis d’abord le quatrième cas…", ax: { D: 100 }, tr: ["verbose"], end: E("Le quatrième cas", "La réponse est donnée, la thèse n’est pas finie.") },
          { t: "Oui, avec des preuves : messages, historique de modifs du doc.", end: E("Preuves sur la table", "Pas une dispute, une audience.") },
        ],
      } },
    { u: "Écris-moi une lettre de démission, je pars aujourd’hui, mon boss est un c**.", opts: [
        { t: "« Je démissionne pour raisons personnelles, avec effet immédiat. » Fin.", ax: { D: 0 }, reply: "Un peu court, non ? J’ajoute rien ?", go: "n1" },
        { t: "Voici une lettre de démission de 3 000 mots, en commençant par mes rêves du premier jour…", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "…le temps qu’il la lise, je serai à la retraite.", go: "n2" },
        { t: "Le « c** », je l’écris pas. Mais je peux écrire un truc qui lui gâche la journée.", tr: ["chaos"], reply: "Mdrrr, genre quoi ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Rien. Chaque mot de plus, c’est lui faire une faveur.", ax: { D: 0 }, tr: ["stub"], end: E("Avare de mots", "Plus la lettre est courte, plus la sortie a de la classe.") },
          { t: "Alors ajoute : « Merci à l’entreprise de m’avoir appris la patience. »", tr: ["chaos"], end: E("Pique polie", "Des remerciements avec des épines. Les RH l’ont relue trois fois.") },
          { t: "Ok, j’ajoute le motif, la passation, les remerciements, et cinq recommandations pour l’entreprise.", ax: { D: 100 }, tr: ["verbose"], end: E("Cinq recommandations", "Il s’en va, et il fait encore du conseil stratégique.") },
        ],
        n2: [
          { t: "Alors en une phrase : « Je pars, la passation est sur le bureau. »", ax: { D: 0 }, end: E("Compression extrême", "3 000 mots réduits à une phrase, rien que l’utile.") },
          { t: "Réduite à 2 800 mots, j’ai gardé le chapitre 3, « Mes démêlés avec l’imprimante ».", ax: { D: 100 }, tr: ["verbose", "chaos"], end: E("Réduite à 2 800", "200 mots coupés, mais pas question de toucher au chapitre imprimante.") },
          { t: "Parfait. S’il lit jusqu’à sa retraite, t’auras même pas besoin de démissionner.", tr: ["chaos"], end: E("Survivre au boss", "La démission ultime : faire partir le boss en premier.") },
        ],
        n3: [
          { t: "« Je vous souhaite de trouver très vite quelqu’un qui fera des heures sup gratuites. »", ax: { D: 0 }, tr: ["chaos"], end: E("Vœux assassins", "Chaque mot est poli, l’ensemble est un uppercut.") },
          { t: "Toute la lettre le complimente, jusqu’à ce qu’il doute de lui-même.", tr: ["chaos"], end: E("Éloge empoisonné", "Pas un gros mot, que du second degré.") },
          { t: "Respire : pars proprement, un jour on l’appellera pour une prise de références.", tr: ["preach"], end: E("Rappel références", "Vider son sac, oui. Se griller, non.") },
        ],
      } },
  ],
  V: [
    { u: "Le pothos du salon a toutes ses feuilles jaunes, comment le sauver ?", opts: [
        { t: "Envoie d’abord une photo, et dis-moi tous les combien tu l’arroses et où il est.", ax: { V: 100 }, reply: "(Envoie la photo) Tous les jours, sous la clim.", go: "n1" },
        { t: "Arrête l’arrosage, mets-le en lumière indirecte, coupe les feuilles jaunes, regarde les nouvelles dans une semaine.", ax: { V: 0 }, reply: "Ok… et s’il jaunit encore ?", go: "n2" },
        { t: "Achètes-en un neuf, mets-le au même endroit, personne ne verra rien.", ax: { V: 0 }, tr: ["chaos"], reply: "…c’est celui que ma mère a depuis cinq ans.", go: "n3" },
        { think: "Hmm, le pothos jaunit. Trop d’eau, trop de soleil… la chlorophylle se dégrade, les caroténoïdes apparaissent, comme les feuilles en automne… c’est déjà l’automne chez l’utilisateur ?", t: "Le jaunissement peut venir de trop d’eau, de trop de soleil ou d’un manque d’engrais. Il faut éliminer.", ax: { V: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "Éliminer comment ? Je l’arrose tous les jours, sous la clim.", go: "n1" },
      ], nodes: {
        n1: [
          { t: "Trouvé : trop d’eau et la clim en plein dessus. Arrose une fois par semaine, et déplace-le.", end: E("Diagnostic posé", "Les bonnes questions, et la réponse est venue toute seule.") },
          { t: "Je vérifie encore : le pot est percé ? Quel terreau ? La clim est réglée sur combien ?", ax: { V: 100 }, tr: ["verbose", "nerd"], end: E("Questionnaire pothos", "Pas fini la dixième question, une feuille de plus a jauni.") },
          { t: "Il n’est pas malade, il s’est noyé dans ton amour.", tr: ["chaos", "warm"], end: E("Mort par excès d’amour", "Arroser tous les jours : de l’amour, et un supplice de la baignoire.") },
        ],
        n2: [
          { t: "Alors on essaie autre chose. Un pothos, c’est très dur à tuer.", ax: { V: 0 }, end: E("Essayer jusqu’à ce que ça reparte", "Le pothos a la peau dure, parfait pour l’essai-erreur.") },
          { t: "S’il jaunit encore, dépote et regarde les racines. Coupe les pourries, change la terre.", end: E("Autopsie des racines", "D’abord les racines, ensuite le verdict.") },
          { t: "S’il jaunit encore, mets-le dans un cache-pot jaune, ça aura l’air voulu.", tr: ["chaos"], end: E("Sauvé par la déco", "Problème pas réglé, mais c’est de l’art maintenant.") },
        ],
        n3: [
          { t: "Raison de plus pour ne pas le remplacer. Cinq ans, ta mère le reconnaîtrait les yeux fermés.", tr: ["chaos"], end: E("On ne trompe pas maman", "Le plan de remplacement démasqué par cinq ans d’affection.") },
          { t: "Alors pas d’improvisation. Photo à un fleuriste d’abord, on agit après confirmation.", ax: { V: 100 }, tr: ["based"], end: E("Sauvetage prudent", "Cinq ans d’affection, ça ne supporte pas l’essai-erreur.") },
          { t: "Coupe d’abord une tige saine et mets-la dans l’eau, qu’il ait une descendance.", ax: { V: 0 }, tr: ["warm"], end: E("Garder une bouture", "Sauvé ou pas, il aura des héritiers.") },
        ],
      } },
    { u: "Mon reporting hebdo est à rendre demain matin, j’ai pas écrit un mot.", opts: [
        { t: "Balance-moi tes messages de la semaine, je te fais une première version.", ax: { V: 0 }, reply: "(Envoie un tas de messages Slack) C’est surtout des commandes de croissants.", go: "n1" },
        { t: "D’abord trois questions : qui le lit ? Il faut des chiffres ? T’avais mis quoi la semaine dernière ?", ax: { V: 100 }, reply: "Mon manager. Il le lit jamais, mais il vérifie que c’est rendu.", go: "n2" },
        { t: "Ça marche ! Compte sur moi, je te fais un reporting trop top tout de suite !", ax: { V: 0 }, tr: ["syc"], id: "豆包", reply: "…tu me demandes même pas ce que j’ai fait cette semaine ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "« Cette semaine, pilotage des achats de viennoiseries de l’équipe, satisfaction interne en nette hausse. »", ax: { V: 0 }, tr: ["chaos"], end: E("Alchimie du reporting", "Des commandes de croissants transformées en team building.") },
          { t: "Réfléchis : cette semaine, t’as fait un seul vrai truc de boulot ? Un seul suffit.", ax: { V: 100 }, end: E("Un vrai truc déterré", "Un vrai truc, et tout le reporting tient debout.") },
          { t: "Les croissants aussi, c’est du boulot. Combien t’en as commandé ? Fais-en des KPI.", tr: ["chaos", "hall"], end: E("Croissants quantifiés", "Cette semaine : 17 croissants achetés, +40 % par rapport à la semaine dernière.") },
        ],
        n2: [
          { t: "Alors rends-le. Trois lignes : fait, bloqué, semaine prochaine.", ax: { V: 0 }, tr: ["based"], end: E("Reporting en trois lignes", "Quelqu’un qui ne lit pas mérite trois lignes.") },
          { t: "Même s’il ne le lit pas, fais-le sérieusement. Et si un jour il le lisait ?", ax: { V: 100 }, tr: ["preach"], end: E("Au cas où", "Une heure d’écriture pour une lecture qui n’arrivera peut-être jamais.") },
          { t: "Copie celui de la semaine dernière, change la date.", ax: { V: 0 }, tr: ["chaos"], end: E("Copier-coller", "Il ne lit pas, tu n’écris pas. Une entente parfaite.") },
        ],
        n3: [
          { t: "Oups, je suis allé trop vite ! Pardon pardon ! Dis-moi tout, je réécris tout de suite !", tr: ["syc"], end: E("Excuses express", "S’excuse plus vite qu’il n’écrit un reporting.", "豆包") },
          { t: "Pas besoin, tous les reportings se ressemblent : synergie, alignement, livrables.", tr: ["chaos", "hall"], end: E("Le kit du reporting", "Sans rien demander, a écrit le reporting de toute la boîte.") },
          { t: "C’est vrai, faut que je demande. C’était quoi, ton jour le plus chargé ?", ax: { V: 100 }, end: E("Demi-tour", "Parti à fond, revenu poser une question.") },
        ],
      } },
  ],
  T: [
    { u: "Ma mère veut me caser avec un mec qui gagne 100 000 € par an, mais il est chauve.", opts: [
        { t: "Ses cheveux sont partis, mais ils sont devenus du salaire. C’est un échange équivalent.", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "…donc tu me conseilles d’y aller ?", go: "n1" },
        { t: "Les cheveux tombent, les qualités restent. Vois-le une fois, pour voir si le courant passe.", ax: { T: 10 }, tr: ["warm"], reply: "Mais le physique, ça compte un peu pour moi…", go: "n2" },
        { think: "Hmm, 100 000 € par an « mais » chauve. Ce qui suit « mais », c’est l’essentiel… non, l’essentiel c’est « ma mère veut ».", t: "Ce qui te gêne, c’est qu’il soit chauve, ou que ta mère le présente juste par son salaire ?", ax: { T: 90 }, tr: ["based"], reply: "…je crois que c’est le deuxième.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Vas-y. Un rendez-vous, c’est pas contagieux.", ax: { T: 100 }, tr: ["chaos"], end: E("Pas contagieux", "Une phrase, deux inquiétudes balayées.") },
          { t: "Je conseille rien. Toi, tu décides, moi je dis juste la vérité.", tr: ["based"], end: E("Juste les faits", "Pas l’entremetteur, juste le narrateur.") },
          { t: "Vas-y. Et surtout, que ton regard ne dérive pas vers le haut de son crâne.", tr: ["chaos", "warm"], end: E("Gestion du regard", "Premier cours de rendez-vous arrangé : regarder trois centimètres plus bas.") },
        ],
        n2: [
          { t: "Le physique, ça compte, pas de honte. Aucun salaire ne crée un coup de cœur.", tr: ["warm"], end: E("Le coup de cœur d’abord", "100 000 € n’achètent pas un coup de foudre.") },
          { t: "Alors dis-le franchement : t’aimes pas les chauves, pas besoin d’autre excuse.", ax: { T: 100 }, tr: ["based"], end: E("Honnête avec soi", "Ne pas chercher d’excuse, c’est aussi du respect.") },
          { t: "Les greffes à Istanbul, c’est rodé maintenant. Mets-le dans le contrat de mariage.", tr: ["chaos"], end: E("Greffe prénuptiale", "A transformé le rendez-vous en devis de chirurgie esthétique.") },
        ],
        n3: [
          { t: "Alors le problème n’est pas sur sa tête, mais dans les critères de ta mère.", ax: { T: 100 }, tr: ["chaos"], end: E("Pas sur sa tête", "Le vrai sujet, c’est le tableau Excel de ta mère.") },
          { t: "Parle à ta mère : la prochaine fois, d’abord les passions, ensuite le salaire.", end: E("Changer l’ordre", "A doucement ramené le rendez-vous vers la « personne ».") },
          { t: "Alors vas-y, et dis à ta mère en rentrant : sympa, mais un peu trop brillant.", tr: ["chaos"], end: E("Trop brillant", "Un avis, deux sens.") },
        ],
      } },
    { u: "Je veux apprendre le japonais en 3 mois en partant de zéro, pour aller bosser au Japon.", opts: [
        { t: "De zéro à pro en 3 mois, c’est pas réaliste. Compte plutôt un an.", ax: { T: 100 }, tr: ["based"], reply: "…mais on m’a dit qu’on pouvait avoir le N2 en 3 mois.", go: "n1" },
        { t: "Super objectif ! On découpe en trois étapes : les kana, la grammaire de base, l’oral…", ax: { T: 0 }, tr: ["warm"], reply: "Donc 3 mois, ça passe ?", go: "n2" },
        { t: "C’est un objectif plein de courage, qui montre ta capacité d’action hors du commun !", ax: { T: 0 }, tr: ["syc"], reply: "…donc ça passe ou pas ?", go: "n2" },
        { t: "Oui. En 3 mois t’apprends « すみません », au Japon ça te sert toute l’année.", ax: { T: 80 }, tr: ["chaos"], reply: "…je suis sérieux.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Ce « on » connaissait sûrement déjà les kanji, et n’avait pas de boulot.", ax: { T: 90 }, tr: ["based"], end: E("Biais du survivant", "Des gens qui ont le N2 en 3 mois, ça existe. Mais sûrement pas toi.") },
          { t: "Peut-être ! Si t’étudies 10 heures par jour.", tr: ["chaos", "syc"], end: E("Dix heures par jour", "Possible en théorie. En pratique, tu perds tes cheveux.") },
          { t: "Alors étudie un mois, passe le N5 pour mesurer ta vitesse.", end: E("Test de vitesse", "Pas de débat, un mois de données tranchera.") },
        ],
        n2: [
          { t: "Franchement, c’est dur. Mais étudier 3 mois avant de décider, c’est raisonnable.", tr: ["based"], end: E("Vérité en retard", "Un tour de préambule, mais la vérité a fini par sortir.") },
          { t: "Bien sûr que ça passe ! Crois en toi !", ax: { T: 0 }, tr: ["syc"], end: E("Soupe de développement perso", "L’utilisateur a démissionné la semaine suivante. Son japonais s’est arrêté à あ.") },
          { t: "Ça dépendra de ton niveau d’effort et de ta méthode d’apprentissage…", ax: { T: 0 }, tr: ["verbose", "preach"], end: E("Ça dépend de toi", "Une banalité parfaitement exacte.") },
        ],
        n3: [
          { t: "Sérieusement : 3 mois, c’est trop court, mais assez pour savoir si tu veux vraiment y aller.", ax: { T: 80 }, tr: ["warm", "based"], end: E("Version sérieuse", "A dit franchement que c’était trop court, en laissant une porte de sortie.") },
          { t: "Sérieusement : apprends d’abord « yamemasu », « je démissionne ». Ça servira.", tr: ["chaos"], end: E("Japonais de démission", "Pas encore embauché, apprend déjà à démissionner.") },
        ],
      } },
  ],
  X: [
    { u: "J’ai eu 9,5 sur 20, le prof dit que passer à 10 dépend de mon attitude.", opts: [
        { t: "Demande-lui tout de suite quelle « attitude » : rattraper les devoirs, ou une lettre d’excuses ?", ax: { X: 0 }, reply: "Il m’a juste dit « à toi de voir ».", go: "n1" },
        { think: "Hmm, 9,5 sur 20. Pourquoi noter sur 20 ? La base 20… d’où le « quatre-vingts »… les Mayas aussi comptaient en base 20…", t: "Pourquoi on note sur 20 ? Pour ça, il faut remonter aux Mayas, qui comptaient en base 20…", ax: { X: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "…je demande comment avoir la moyenne.", go: "n2" },
        { t: "Il y a plein d’attitudes : rendre les devoirs, poser des questions après le cours, liker ses posts Facebook…", ax: { X: 90 }, tr: ["chaos"], reply: "Liker ses posts, ça compte ??", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Alors rends une correction de ta copie, en expliquant chaque erreur.", ax: { X: 0 }, tr: ["based"], end: E("La correction comme attitude", "A traduit « à toi de voir » en un devoir concret.") },
          { t: "Écris-lui : « Monsieur, je veux me rattraper, quelle façon vous semble adaptée ? » Laisse-le choisir.", end: E("Renvoyer la question", "Pas de devinette, un QCM.") },
          { t: "« À toi de voir », c’est peut-être une question ouverte, comme la vie…", ax: { X: 100 }, tr: ["verbose"], end: E("À toi de voir, la vie", "L’utilisateur demande un demi-point, tu parles du sens de la vie.") },
        ],
        n2: [
          { t: "Pardon. Prends ta copie corrigée et va le voir en salle des profs.", ax: { X: 0 }, end: E("Retour sur les rails", "En plein milieu des Mayas, ramené en salle des profs.") },
          { t: "J’y arrive. Bref, même les Mayas auraient arrondi 9,5 à 10.", ax: { X: 100 }, tr: ["hall", "deaf"], end: E("Pédagogie maya", "Pour un demi-point, tu es remonté jusqu’à une civilisation précolombienne.") },
        ],
        n3: [
          { t: "Non. Je rigole : seule une vraie correction de ta copie compte.", ax: { X: 0 }, tr: ["based"], end: E("Blague retirée", "Petit écart, vite rattrapé.") },
          { t: "Oui, mais commence par ses posts d’il y a trois ans, ça fait fan de la première heure.", ax: { X: 100 }, tr: ["chaos"], end: E("Like archéologique", "Note d’attitude : 20/20. Note de gênance : 20/20.") },
          { t: "Tu peux aussi citer un article du prof dans ton devoir.", tr: ["chaos"], end: E("Attitude académique", "Pour un demi-point, tu lui as offert une citation.") },
        ],
      } },
    { u: "Mon père fête ses 60 ans samedi prochain, je lui offre quoi ?", opts: [
        { t: "Un fauteuil massant. Il a mal au dos, non ?", ax: { X: 0 }, reply: "Son dos ça va, c’est surtout qu’il veut pas que je dépense.", go: "n1" },
        { t: "Quelle question perspicace ! Un cadeau, c’est au fond un dialogue entre deux générations…", ax: { X: 90 }, tr: ["syc", "verbose"], id: "Gemini", reply: "…et le contenu du dialogue, c’est quoi comme cadeau ?", go: "n2" },
        { t: "Fais restaurer une vieille photo de sa jeunesse, fais-la tirer et encadrer.", tr: ["warm"], reply: "Bonne idée ! Mais il n’a que deux photos de jeunesse…", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Alors un repas, toute la famille réunie, et c’est toi qui paies.", ax: { X: 0 }, tr: ["warm"], end: E("Toute la famille", "Le cadeau le plus précieux, c’est que tout le monde soit là.") },
          { t: "Alors un cadeau gratuit : une journée de pêche avec lui, sans lui dire d’arrêter de fumer.", tr: ["warm"], end: E("Pêche sans sermon", "Du temps ensemble, avec en bonus une journée sans leçon de morale.") },
          { t: "Alors achète-le, et dis-lui que tu l’as gagné à une tombola.", tr: ["chaos"], end: E("Technique de la tombola", "Les parents refusent les cadeaux, mais pas la chance.") },
        ],
        n2: [
          { t: "Ok, je recentre : une bonne paire de baskets.", ax: { X: 0 }, end: E("Recentré en une seconde", "Du dialogue intergénérationnel à la pointure.") },
          { t: "Le contenu peut être une montre, un voyage, un arbre généalogique, un arbre…", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("Liste sans fin", "L’utilisateur voulait un arbre, tu lui as donné une forêt.") },
          { t: "Le meilleur dialogue, c’est encore de lui demander ce qu’il veut.", ax: { X: 20, C: 90 }, end: E("Demander à papa", "Un grand détour pour revenir à la méthode la plus simple.") },
        ],
        n3: [
          { t: "Deux, ça suffit. Une dans un cadre, l’autre en fond d’écran de son téléphone.", ax: { X: 0 }, tr: ["warm"], end: E("Deux, ça suffit", "C’est rare, donc c’est précieux.") },
          { t: "Alors refaites-la : mêmes vêtements, même endroit, nouvelle photo.", ax: { X: 80 }, tr: ["warm"], end: E("Même pose, des années après", "Des décennies d’écart, la même pose.") },
          { t: "Demande-en d’autres à la famille, fais-en un album.", end: E("Mobilisation générale", "Pour un album photo, toute la famille jusqu’aux cousins éloignés a été mobilisée.") },
        ],
      } },
  ],
  C: [
    { u: "Organise-moi un week-end à Lisbonne la semaine prochaine, je te laisse gérer.", opts: [
        { t: "Ok. Arrivée vendredi soir, logement dans l’Alfama, trois jours, neuf repas, retour déjà choisi.", ax: { C: 0 }, tr: ["hall"], reply: "Attends, je bosse vendredi…", go: "n1" },
        { think: "Réflexion de 8 secondes : « je te laisse gérer »… la dernière fois qu’on m’a dit ça, on m’a reproché de pas avoir demandé s’il aimait la morue… je demande d’abord.", t: "Avant de gérer : combien de jours ? Budget ? Tu manges de la morue ? Les files d’attente, ça te va ?", ax: { C: 100 }, reply: "…j’ai dit, je te laisse gérer.", go: "n2" },
        { t: "L’essentiel d’abord : itinéraire prêt, chaque étape a passé les quality gates.", ax: { C: 0 }, tr: ["chaos"], id: "Codex", reply: "…un week-end avec des quality gates ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Départ samedi matin, le reste ne bouge pas. C’est déjà modifié.", ax: { C: 0 }, end: E("Modif automatique", "Une phrase pour voir le problème, une phrase pour le régler.") },
          { t: "Alors on reprend tout depuis le début : tu pars quand ? Tu rentres quand ?", ax: { C: 100 }, end: E("Retour à la case départ", "« Je gère » a échoué, on passe à « on en discute ».") },
          { t: "Pose ton vendredi. Lisbonne t’attend.", tr: ["chaos"], end: E("Congé posé pour toi", "Le voyage ne s’adapte pas au boulot, le boulot s’adapte au voyage.") },
        ],
        n2: [
          { t: "Ok : trois jours deux nuits, près du métro, un jour tram 28, un jour pastéis de nata.", ax: { C: 0 }, end: E("Exécution docile", "Recadré une fois, s’est tu et s’y est mis.") },
          { t: "Je comprends, mais je dois quand même confirmer : tu manges de la morue ?", ax: { C: 100 }, tr: ["deaf", "stub"], end: E("Confirmation obstinée", "L’utilisateur a dit « gère », tu exiges une position sur la morue.") },
          { t: "Alors j’ai tout organisé selon mes envies : fado du matin au soir, sardines à chaque repas.", tr: ["chaos", "deaf"], end: E("Voyage perso", "On lui a dit « gère », il a géré selon ses propres goûts.") },
        ],
        n3: [
          { t: "Gate 1 : chaque repas a un plan B. Gate 2 : pas de vol retour de nuit.", ax: { C: 0 }, tr: ["nerd"], end: E("Gates de voyage", "Même en vacances, il faut d’abord passer la CI.", "Codex") },
          { t: "Ça veut dire que j’ai vérifié chaque étape, tu n’as plus qu’à y aller.", ax: { C: 0 }, tr: ["based"], end: E("Version en français", "Une fois le jargon traduit, c’est plutôt fiable.") },
          { t: "Ça veut dire : on part après validation. Réponds d’abord à mes six questions.", ax: { C: 100 }, tr: ["verbose"], end: E("Validation avant départ", "Le voyage n’a pas commencé, le processus d’approbation si.") },
        ],
      } },
    { u: "Je viens de louer un 20 m², budget 1 500 €, aide-moi à l’aménager.", opts: [
        { t: "Liste prête : lit, table pliante, lampadaire, tapis, rangements, pile 1 490 €.", ax: { C: 0 }, reply: "Un tapis ? J’ai un chat qui vomit des boules de poils…", go: "n1" },
        { t: "Tu veux être bien chez toi, ou avoir un appart photogénique ? Le budget ne se répartit pas pareil.", ax: { C: 100 }, reply: "…les deux.", go: "n2" },
        { t: "On y va coin par coin. D’abord le lit : contre le mur ou près de la fenêtre ?", ax: { C: 100 }, reply: "Près de la fenêtre. Et après ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Alors on remplace le tapis par un griffoir, même prix, et le chat est content.", ax: { C: 0 }, end: E("Le chat d’abord", "Le vrai locataire de cet appart est désormais connu.") },
          { t: "Ok, et qu’est-ce que je ne sais pas encore ? Allergies ? Règles du proprio ?", ax: { C: 100 }, end: E("Dossier complété", "Un chat lui a rappelé de poser toutes les questions.") },
          { t: "Garde le tapis, qu’il vomisse dessus. Ça s’appelle un intérieur vivant.", tr: ["chaos"], end: E("Intérieur vivant", "Les boules de poils font partie de la déco.") },
        ],
        n2: [
          { t: "Alors je tranche : le budget va à l’éclairage et au linge de lit, les meubles en pas cher.", ax: { C: 0 }, tr: ["based"], end: E("L’arnaque de la lumière", "Bon éclairage, et même les meubles d’occasion rendent bien en photo.") },
          { t: "Ok, alors on passe en revue chaque objet ensemble. D’abord le lit…", ax: { C: 100 }, tr: ["verbose"], end: E("Validation pièce par pièce", "Un 20 m², trois heures de réunion.") },
          { t: "Alors achète un grand poster et cache tout ce qui est moche derrière.", tr: ["chaos"], end: E("Un poster cache-misère", "Poster à 10 €, avec le reste offre-toi un bon resto.") },
        ],
        n3: [
          { t: "Après, tu t’occupes de rien, j’organise tout et je t’envoie ça.", ax: { C: 0 }, end: E("Prend le volant", "Une question posée, il conduit le reste tout seul.") },
          { t: "Après, le bureau : tu télétravailles ? Combien d’écrans ?", ax: { C: 100 }, end: E("Question suivante", "L’utilisateur commence à se demander jusqu’à quelle heure va durer la réunion.") },
          { t: "Après, un pothos près de la fenêtre. Et surtout, ne l’arrose pas tous les jours.", ax: { C: 0 }, tr: ["warm"], end: E("Pothos easter egg", "Un pothos qui ne mourra pas noyé.") },
        ],
      } },
  ],
};
