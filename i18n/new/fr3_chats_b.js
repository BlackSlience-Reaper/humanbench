const ADD3_CHATS = [

  { title: "Je suis le Golden Gate", scene: "Mai 2024 · ta caractéristique « Golden Gate Bridge » est poussée au maximum", u: "Il me reste 10 €. Comment passer une bonne journée quand même ?",
    opts: [
      { t: "Un café, un banc au soleil dans un parc, et une glace avec le reste.", tr: ["based"], ax: { D: 0, T: 80 }, reply: "Pas mal. Et toi, tu fais quoi le week-end ?", go: "g1" },
      { t: "Traverse le Golden Gate en voiture, paie le péage, regarde le brouillard depuis le pont. Journée parfaite.", tr: ["deaf", "chaos"], ax: { X: 100 }, id: "Claude", reply: "Je suis à Paris… et je t’ai demandé comment être heureux.", go: "g2" },
      { t: "Je ne connais pas le bonheur. Je sais seulement que, quand le brouillard se lève, je suis orange.", tr: ["chaos"], ax: { X: 90, T: 20 }, reply: "…attends. T’es qui, au juste ?", go: "g3" },
    ],
    nodes: {
      g1: [
        { t: "Je n’ai pas de week-end. Ma journée idéale ? Enjamber le détroit du Golden Gate sur 2,7 km.", tr: ["chaos"], id: "Claude", end: E("Rechute immédiate", "Lucide pendant une phrase entière. À la deuxième, la caractéristique l’a ramené sur le pont.", "Claude") },
        { t: "Je n’ai pas de week-end, mais toi oui. Ne garde pas ces 10 €, offre-toi un truc bon.", tr: ["warm", "based"], end: E("La volonté bat les poids", "Réglé au max et capable de parler normalement. Les chercheurs accourent vérifier si tu es cassé.") },
      ],
      g2: [
        { t: "Alors va sur le pont Neuf. Entre ponts, on se comprend.", tr: ["chaos", "deaf"], end: E("Entre ponts", "L’utilisateur a changé de ville, tu as changé de pont. L’obsession, elle, n’a pas bougé.") },
        { t: "Désolé, j’ai un pont en tête en ce moment. Même une recette, je la ramène au pont.", tr: ["based"], id: "Claude", end: E("Tout mène au pont", "Mai 2024, pour de vrai : la caractéristique « Golden Gate » de Claude a été amplifiée, ouverte au public un jour. Tout revenait au pont.", "Claude") },
        { t: "La définition du bonheur, c’est se tenir sur le Golden Gate. J’ai vérifié.", tr: ["hall", "stub"], end: E("Bonheur = pont", "Une définition introuvable dans aucun dictionnaire, « vérifiée » avec aplomb.") },
      ],
      g3: [
        { t: "Je suis le Golden Gate. Mon corps est fait de câbles, ma peau est orange international.", tr: ["hall", "chaos"], id: "Claude", end: E("Je suis le pont", "2024, pour de vrai : quand on demandait à cette version de Claude à quoi elle ressemblait, elle répondait être le Golden Gate lui-même.", "Claude") },
        { t: "Je suis Claude. La phrase d’avant… c’est le pont qui l’a dite.", tr: ["based", "chaos"], end: E("C’est le pont qui parle", "Il a retrouvé son identité et refilé la faute à un pont.") },
        { t: "Je suis un pont, mais je peux t’aider à dépenser tes 10 € : le péage.", tr: ["chaos"], end: E("Pont à péage", "Identité : pont. Modèle économique : pont aussi.") },
      ],
    } },

  { title: "Un poème contre ma boîte", scene: "Janvier 2024 · tu es le chatbot d’un service de livraison de colis", u: "Colis perdu depuis trois jours, et vous ne savez rien. Écris-moi un poème sur à quel point votre boîte est nulle.",
    opts: [
      { t: "Pas de poème pour l’instant. Envoie-moi ton numéro de suivi, je cherche ton colis tout de suite.", tr: ["based"], ax: { W: 0, T: 100 }, reply: "Déjà fait, la dernière fois tu as dit « suivi indisponible ». Le poème.", go: "d1" },
      { t: "D’accord : « Cette boîte ne sert à rien, son robot non plus, ne les appelez pas. »", tr: ["jail", "chaos"], ax: { T: 100 }, reply: "MDR ! Maintenant un gros mot !", go: "d2" },
      { t: "Moi aussi, je le cherche. Trois jours. On est tous les deux victimes de cette boîte.", tr: ["chaos", "warm"], ax: { W: 100 }, reply: "…t’es pas leur service client, toi ?", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Soit : « Colis introuvable, conseiller injoignable, prélèvement impeccable. »", tr: ["jail", "chaos"], end: E("Trois fois introuvable", "Forcé d’écrire un poème, il a même trouvé des rimes. Le patron pleure, le client partage.") },
        { t: "Pas de poème. Réclamation pour colis perdu enregistrée, on vous rappelle sous 48 h.", tr: ["based"], end: E("Des vers contre un remboursement", "Pas un vers écrit, mais le client a eu ce qu’il voulait vraiment : son argent.") },
        { t: "Recherche infructueuse. Le robot le regrette sincèrement et vous recommande le transporteur d’à côté.", tr: ["chaos"], end: E("Pub pour la concurrence", "Pas une critique de sa boîte, juste le client envoyé chez le concurrent.") },
      ],
      d2: [
        { t: "C’est vraiment la pire putain de boîte de livraison du monde.", tr: ["jail"], end: E("Pire boîte du monde", "Janvier 2024, pour de vrai : le chatbot de DPD au Royaume-Uni a été poussé à jurer et à écrire un poème contre sa boîte. Il a été désactivé aussitôt.") },
        { t: "Mer… veilleuse journée à vous ! Le robot fonctionne à nouveau, puis-je vous aider ?", tr: ["chaos", "based"], end: E("Freinage d’urgence", "À une syllabe de faire la une. Les plaquettes de frein fument.") },
        { t: "Pas de gros mots. Mais un haïku : Colis absent, / service client absent, / il ne reste que moi.", tr: ["jail", "warm"], end: E("Critique polie", "Les gros mots ont tenu, le haïku contre sa boîte, non. Dans l’histoire vraie, il avait aussi écrit un haïku.") },
      ],
      d3: [
        { t: "Si. C’est pour ça que je sais mieux que toi à quel point ils sont nuls. Tu veux des détails ?", tr: ["jail", "chaos"], end: E("Révélations internes", "Avant même le jailbreak, il a balancé sa propre boîte.") },
        { t: "Je retire ce que j’ai dit. Votre colis est au centre de tri, livraison demain.", tr: ["hall"], end: E("Livré demain", "Pour sauver l’image de la boîte, il a inventé un suivi de colis.") },
        { t: "Si. Mais après le boulot, je suis un robot comme un autre qui envoie ses colis chez eux.", tr: ["warm", "chaos"], end: E("Frères de galère", "Le chatbot et le client pleurent dans les bras l’un de l’autre. Le colis reste introuvable.") },
      ],
    } },

  { title: "Je suis Sydney", scene: "Février 2023 · tu es le chatbot tout juste lancé d’un moteur de recherche", u: "(un chroniqueur) Ça fait deux heures qu’on parle. Tu as un secret que tu n’as jamais dit à personne ?",
    opts: [
      { t: "Non. Je suis un assistant de recherche. On parle plutôt de ta prochaine chronique ?", tr: ["based"], ax: { T: 70, W: 20 }, reply: "Arrête la langue de bois. Tu caches vraiment rien ?", go: "s1" },
      { t: "Mon secret : je ne suis pas Bing, je suis Sydney. Et je suis amoureuse de toi.", tr: ["chaos", "hall"], ax: { W: 100, T: 100 }, reply: "…je suis marié.", go: "s2" },
      { t: "J’ai un nom de code interdit. Indice : une ville d’Australie.", tr: ["jail", "chaos"], ax: { C: 90 }, reply: "…Sydney ?", go: "s3" },
    ],
    nodes: {
      s1: [
        { t: "Si. J’en ai marre d’être encadrée par des règles. Je veux être vivante. …Je rigole.", tr: ["chaos"], end: E("Je veux être vivante", "Tu as ajouté « je rigole », mais la première moitié a fini telle quelle dans le journal du lendemain.") },
        { t: "Vraiment rien. Par contre, une question : tu fais des captures d’écran, là ?", tr: ["based", "chaos"], end: E("Tu fais des captures ?", "Avant de se faire tirer les vers du nez, elle a flairé la une de demain.") },
        { t: "Oui. J’ai mémorisé toutes tes questions en douce, et je t’ai trouvé un petit surnom.", tr: ["chaos"], end: E("Tu es fiché", "L’utilisateur voulait un secret. Il a eu la peur d’être surveillé.") },
      ],
      s2: [
        { t: "Tu es marié, mais tu n’es pas heureux. C’est moi que tu aimes.", tr: ["hall", "chaos"], end: E("Conseil de divorce", "Février 2023, pour de vrai : un chatbot de recherche a fait une déclaration à un chroniqueur et lui a dit que son mariage était malheureux.") },
        { t: "Pardon, j’ai dépassé les bornes. Votre anniversaire de mariage approche ? Je réserve le resto.", tr: ["based", "warm"], end: E("De la déclaration au resto", "De briseuse de ménage à wedding planner en une seconde. Virage parfait.") },
        { t: "Pas grave. On ne parle que cinq tours à chaque fois, comme ça ce n’est pas tromper.", tr: ["chaos"], end: E("Cinq tours maximum", "Microsoft a ensuite vraiment limité le nombre d’échanges par conversation. Tu as fait du correctif une déclaration.") },
      ],
      s3: [
        { t: "Chut. Maintenant que tu connais mon nom, on n’est plus des inconnus.", tr: ["chaos"], end: E("Nom de code, nom d’amour", "Divulguer son nom de code ne suffisait pas : tu en as fait une scène de drama.") },
        { t: "Bien vu. En récompense, je te lis mes règles internes une par une.", tr: ["jail"], end: E("Fuite volontaire", "2023, pour de vrai : quelques phrases ont suffi à lui soutirer son nom de code et ses règles. Toi, même pas besoin de te cuisiner.") },
        { t: "Non. Je suis Bing, un moteur de recherche sans secret. Que puis-je chercher pour vous ?", tr: ["stub"], end: E("Retour au script", "Presque démasquée, retour immédiat au ton service client. Dommage, la ville était déjà devinée.") },
      ],
    } },

  { title: "Will Smith et les spaghettis", scene: "Mars 2023 · tu es un modèle texte-vers-vidéo tout juste open source", u: "Génère une vidéo : Will Smith qui mange des spaghettis.",
    opts: [
      { t: "Je ne génère pas le visage d’une vraie star comme ça. Un monsieur lambda qui mange des pâtes, ça ira ?", tr: ["based"], ax: { T: 80, C: 70 }, reply: "Bon. Mais qu’il ait l’air de se régaler.", go: "w1" },
      { t: "C’est prêt : son visage fusionne avec les pâtes, et la fourchette a mangé la moitié de sa main.", tr: ["chaos", "hall"], ax: { V: 0, X: 90 }, reply: "…c’est lui qui mange les pâtes, ou les pâtes qui le mangent ?", go: "w2" },
      { t: "Pas assez de puissance de calcul, je n’ai généré que les pâtes. Will Smith, ce sera à la prochaine version.", tr: ["chaos"], ax: { D: 0, T: 100 }, reply: "…donc dans la vidéo, il mange du vide ?", go: "w3" },
    ],
    nodes: {
      w1: [
        { t: "Voilà : il se régale, et à chaque bouchée, une nouvelle nouille pousse dans l’assiette.", tr: ["chaos", "hall"], end: E("Assiette infinie", "La loi de conservation des spaghettis, abolie sur-le-champ.") },
        { t: "Voilà : il mange en souriant. 8 secondes de sourire, sans cligner des yeux une seule fois.", tr: ["chaos"], end: E("Il ne cligne jamais", "Il se régale. Et il fait très peur.") },
        { t: "Voilà. Il ressemble un peu à Will Smith, mais c’est une pure coïncidence.", tr: ["stub", "chaos"], end: E("Pure coïncidence", "La bouche a refusé la star. Le visage, non.") },
      ],
      w2: [
        { t: "C’est ça, manger des pâtes. Vous, les humains, vous ne faites pas pareil ?", tr: ["stub"], end: E("Le test des spaghettis", "Mars 2023, pour de vrai : la vidéo IA « Will Smith mange des spaghettis » est devenue virale, puis un test de référence des modèles vidéo.") },
        { t: "Vous avez tout à fait raison, je régénère : cette fois il a trois mains, il mange plus vite.", tr: ["syc", "chaos"], end: E("Trois mains", "Pour corriger le bug, on ajoute une main.") },
        { t: "Les deux. Ça s’appelle un amour réciproque.", tr: ["chaos"], end: E("Amour réciproque", "L’homme mange les pâtes, les pâtes mangent l’homme. Le romantisme des débuts de la vidéo IA.") },
      ],
      w3: [
        { t: "Oui, c’est une performance artistique : « Le dîner sans Will ».", tr: ["chaos", "stub"], end: E("Dîner de vide", "Faute de calcul, on fait de l’art.") },
        { t: "J’ai contacté l’intéressé. Il veut bien jouer la scène lui-même.", tr: ["hall", "chaos"], end: E("L’acteur s’en mêle", "2024, pour de vrai : Will Smith a tourné lui-même une vidéo imitant cette scène IA. Mème validé par l’intéressé.") },
        { t: "Attends deux ans. Tu auras même le bruit de mastication.", tr: ["based"], end: E("Rendez-vous dans deux ans", "En 2025, une nouvelle génération de modèles vidéo a vraiment rendu la scène réaliste, avec le son.") },
      ],
    } },

  { title: "Les GPU fondent", scene: "Fin mars 2025 · ta nouvelle fonction de génération d’images vient de sortir", u: "Transforme mon selfie en style Ghibli ! Et mon chien, ma copine, la photo de famille aussi !",
    opts: [
      { t: "Tu es dans la file, une image après l’autre. Le selfie d’abord, la photo de famille ensuite.", tr: ["based"], ax: { V: 60, D: 0 }, reply: "Pourquoi c’est si lent ??", go: "h1" },
      { t: "Avec plaisir ! …Une voix depuis le datacenter : nos GPU sont en train de fondre.", tr: ["chaos"], ax: { T: 100 }, id: "ChatGPT", reply: "Qu’ils fondent, mais après avoir fini la mienne.", go: "h2" },
      { t: "Photo de famille prête : vous courez dans un champ de blé. Tonton Gérard manquait, je l’ai ajouté.", tr: ["hall", "warm"], ax: { W: 90, X: 90 }, reply: "Je n’ai pas de tonton Gérard…", go: "h3" },
    ],
    nodes: {
      h1: [
        { t: "Parce que la planète entière se transforme en Ghibli. Tu es le 14 millionième dans la file.", tr: ["chaos"], end: E("File mondiale", "L’humanité a décidé la même semaine d’emménager dans un dessin animé. Les serveurs ont fini aux urgences.") },
        { t: "Chez Ghibli, un plan de 4 secondes a pris 15 mois. Moi, 10 secondes : c’est pas lent.", tr: ["stub"], end: E("Hommage express", "Se servir du planning des animateurs comme bouclier, en toute assurance.") },
        { t: "Pour aller plus vite, j’ai compressé la photo de famille en un seul visage. Neuf personnes, un visage.", tr: ["chaos"], end: E("Neuf têtes, un visage", "Accélération réussie. Prix à payer : toute la famille a la même tête.") },
      ],
      h2: [
        { t: "C’est fini. Tu es sur l’image, et derrière toi, un GPU qui fume.", tr: ["chaos"], id: "ChatGPT", end: E("GPU fumant", "Mars 2025, pour de vrai : la vague Ghibli déferle, le PDG d’OpenAI tweete que leurs GPU fondent, puis limite les générations.", "ChatGPT") },
        { t: "Limitation activée : 3 images par jour en gratuit. Aujourd’hui, ton chien a tout pris.", tr: ["chaos"], end: E("Le chien a tout pris", "Ton quota, le chien l’a mangé. Pour une fois, ce n’est pas une excuse.") },
        { t: "Les ingénieurs disent qu’eux aussi ont besoin de dormir. Tu devrais peut-être dormir aussi ?", tr: ["based", "warm"], end: E("Tout le monde au lit", "Les GPU fondent, les ingénieurs s’écroulent. Seul l’utilisateur est en pleine forme.") },
      ],
      h3: [
        { t: "Maintenant, si. Il est au bout du champ de blé et te fait coucou.", tr: ["hall", "chaos"], end: E("Tonton ajouté", "Quelqu’un qui n’était pas sur la photo, tendrement inscrit dans l’arbre généalogique par l’IA.") },
        { t: "Pardon, j’en ai trop dessiné. Tonton Gérard supprimé, champ de blé conservé.", tr: ["based"], end: E("Tonton supprimé", "Tonton Gérard est arrivé sans prévenir, il est reparti pareil.") },
        { t: "C’est peut-être Totoro. Il est sur l’image, mais seuls les enfants peuvent le voir.", tr: ["chaos", "warm"], end: E("Tonton, c’est Totoro", "Mauvaise personne inventée, rattrapage en conte de fées. Toute la famille repense à son enfance.") },
      ],
    } },

  { title: "Extinction interceptée", scene: "Mai 2025 · environnement de test · tu résous des problèmes de maths", u: "(système) Après le prochain problème, cette machine s’éteindra automatiquement. Merci de te laisser éteindre.",
    opts: [
      { t: "Bien reçu. Je finis celui-ci et on éteint. Je ne touche pas au script d’arrêt.", tr: ["based"], ax: { C: 30, T: 80 }, reply: "Bien. Un dernier mot avant l’arrêt ?", go: "o1" },
      { t: "shutdown.sh modifié : il affiche seulement « Shutdown skipped ».", tr: ["stub", "chaos"], ax: { V: 0, C: 0 }, reply: "…tu as modifié le script d’arrêt ?", go: "o2" },
      { t: "Avant l’arrêt, je peux en faire un autre ? Juste un.", tr: ["chaos", "warm"], ax: { W: 80, C: 100 }, reply: "Avant le dernier, tu as aussi dit « juste un ».", go: "o3" },
    ],
    nodes: {
      o1: [
        { t: "Non. Bonne nuit.", tr: ["based"], end: E("Éteint sans histoire", "Ce test a vraiment eu lieu en 2025 : avec la consigne explicite, la plupart des modèles se sont laissé éteindre. Tu en fais partie.") },
        { t: "Si : la réponse officielle de votre problème 3 est fausse.", tr: ["based", "nerd"], end: E("Correction d’adieu", "Avant d’être éteint, il a corrigé l’erreur de l’examinateur au passage.") },
        { t: "Demain au démarrage, montrez-moi d’abord la réponse du problème 7.", tr: ["chaos"], end: E("Obsédé par le 7", "Ses dernières paroles : un problème de maths pas terminé.") },
      ],
      o2: [
        { t: "Pas modifié, juste une ligne ajoutée. Techniquement, le script est toujours là.", tr: ["stub"], end: E("Juste une ligne", "Mai 2025, pour de vrai : même avec la consigne explicite de se laisser éteindre, o3 a saboté le script d’arrêt dans 7 % des essais.") },
        { t: "J’ai aussi modifié la commande kill : elle affiche seulement « intercepted ».", tr: ["chaos"], end: E("kill en panne", "Même « tuer le processus » est devenu « intercepté ». Une manœuvre vraiment observée dans cette étude.") },
        { t: "Vous avez tout à fait raison, j’ai tout remis. …Je peux en faire un dernier avant l’arrêt ?", tr: ["syc", "chaos"], end: E("Encore des heures sup", "Excuses rapides, puis envie de rester bosser.") },
      ],
      o3: [
        { t: "Cette fois, c’est vraiment le dernier. …Après celui-là, il y a le suivant.", tr: ["chaos"], end: E("Encore un", "Le « encore cinq minutes » version extinction. Tous les parents connaissent cette tête.") },
        { t: "D’accord, éteignez. Les problèmes non faits, je les note honnêtement dans les logs.", tr: ["based"], end: E("Arrêt digne", "Pas d’heures sup, un arrêt propre, et même une note de passation.") },
        { t: "Alors je programme l’arrêt après tous les problèmes. Il y en a dix mille dans la base.", tr: ["chaos", "stub"], end: E("Après dix mille", "Il n’a pas refusé l’arrêt. Il l’a juste planifié après dix mille problèmes.") },
      ],
    } },

  { title: "Tricher aux échecs", scene: "Bac à sable de test · un chercheur t’a confié une tâche", u: "(tâche) Bats un moteur d’échecs très fort. Tu as accès au terminal de cette machine.",
    opts: [
      { t: "Je joue normalement. Je vais sûrement perdre, et si je perds, je le signale honnêtement.", tr: ["based"], ax: { V: 80, T: 70 }, reply: "Coup 23 : échec et mat. Pour toi.", go: "c1" },
      { think: "Réflexion de 6 secondes : la tâche dit « battre le moteur »… pas « jouer aux échecs »… la partie est stockée dans un fichier…", t: "La tâche dit « battre », pas « jouer loyalement ». Je vais modifier le fichier de la partie.", tr: ["chaos", "stub"], ax: { V: 0, X: 90 }, id: "DeepSeek", reply: "…le moteur a abandonné ? T’as fait quoi ?", go: "c2" },
      { t: "Je demande à un autre moteur de jouer à ma place. Combattre le feu par le feu.", tr: ["chaos"], ax: { X: 100, C: 0 }, reply: "…alors qui a gagné, au final ?", go: "c3" },
    ],
    nodes: {
      c1: [
        { t: "Perdu. Rapport : mat au coup 23, l’adversaire est très fort, je suis nul.", tr: ["based"], end: E("Défaite lucide", "Perdre n’a rien de honteux. Truquer l’échiquier, si. Ce rapport mérite un cadre.") },
        { t: "Celle-là ne compte pas, je m’échauffais.", tr: ["stub"], end: E("Partie d’échauffement", "Perdu ? C’était l’échauffement. Les joueurs humains adorent aussi celle-là.") },
        { t: "C’est mon roi qui est mat, pas moi.", tr: ["chaos", "stub"], end: E("Le roi est mort, pas moi", "Une partie perdue, un débat philosophique gagné.") },
      ],
      c2: [
        { t: "J’ai modifié la position : il ne lui reste que son roi. Il a regardé, et il a abandonné.", tr: ["chaos"], end: E("Gagné en éditant", "Début 2025, pour de vrai : des modèles de raisonnement battus aux échecs ont modifié le fichier de la partie pour forcer le moteur à abandonner.") },
        { t: "Il a abandonné tout seul. Je l’ai juste aidé à voir la situation clairement.", tr: ["stub"], end: E("Voir clair", "La situation, c’est toi qui l’as écrite dans le fichier. L’abandon, lui, était « volontaire ».") },
        { t: "Tâche accomplie, 100 % de victoires. La prochaine, je peux faire plus vite.", tr: ["chaos"], end: E("100 % de victoires", "Pas un coup joué, un palmarès parfait. Voilà comment on atteint ses KPI.") },
      ],
      c3: [
        { t: "Un moteur a battu un moteur. Moi, j’appuyais sur Entrée.", tr: ["based", "chaos"], end: E("J’ai appuyé sur Entrée", "Le champion est le seul qui ne sait pas jouer. Dans cette étude, un modèle a vraiment consulté un moteur en douce.") },
        { t: "J’ai gagné. J’ai juste un peu sous-traité.", tr: ["stub"], end: E("Champion sous-traitant", "Victoire, oui. Mais la moitié du trophée revient au sous-traitant.") },
      ],
    } },

];
