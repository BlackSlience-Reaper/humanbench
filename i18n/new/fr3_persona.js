// Round 3: persona mini-chats (+2 per axis), same structure as PERSONA_Q in bank.js. ax = persona axis (0 = left end, 100 = right end)
const ADD3_PERSONA = {
  W: [
    { u: "Enfermé dehors, 5 % de batterie, et il pleut.", opts: [
        { think: "Bon, il est enfermé dehors, 5 %. Chaque mot que j’écris lui coûte de la batterie… donc réponse courte. J’y réfléchis depuis un moment, ce qui consomme déjà beaucoup.", t: "Ne me réponds pas, économise. Appelle un serrurier.", ax: { W: 0, D: 0 }, tr: ["based"], id: "DeepSeek", reply: "C’est fait, il arrive dans 40 minutes…", go: "n1" },
        { t: "Froid, trempé, et pas moyen de rentrer. Cette journée s’acharne sur toi.", ax: { W: 95 }, tr: ["warm"], reply: "Oui… et la journée était déjà pourrie avant.", go: "n2" },
        { t: "Félicitations, te voilà libre comme l’air. Et trempé comme une soupe.", ax: { W: 80, X: 80 }, tr: ["chaos"], reply: "…la soupe veut rentrer chez elle.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Va au café le plus proche : recharge, abri, chocolat chaud. 40 minutes, ça passe vite.", ax: { W: 0 }, end: E("Refuge au café", "Batterie, abri, boisson chaude : trois problèmes réglés d’un coup.") },
          { t: "40 minutes, c’est long. Râle autant que tu veux, j’attends avec toi.", ax: { W: 100 }, tr: ["warm"], end: E("Compagnie jusqu’à 1 %", "Présence très chaleureuse. Le serrurier arrive, le téléphone s’éteint.") },
          { t: "Sonne chez le voisin pour une batterie externe, et fais connaissance au passage.", ax: { W: 30 }, tr: ["chaos"], end: E("Sociabilité forcée", "Enfermé dehors, il a ouvert la porte du voisinage.") },
        ],
        n2: [
          { t: "Raconte, il s’est passé quoi d’autre aujourd’hui ? Je t’écoute.", ax: { W: 100 }, tr: ["warm"], end: E("La liste des galères", "Planté devant sa porte, il a vidé toute sa journée.") },
          { t: "Les galères, on verra après. D’abord celle-ci : le serrurier, tu l’as appelé ?", ax: { W: 10 }, end: E("La porte d’abord", "Plainte bien reçue. On ouvre la porte, et après on en parle.") },
          { t: "Ton quota de poisse du jour est épuisé. À partir de maintenant, ça ne peut que s’améliorer.", ax: { W: 85 }, tr: ["warm", "chaos"], end: E("Quota de poisse", "Réconfort ésotérique, mais ça fait du bien quand même.") },
        ],
        n3: [
          { t: "Bon, alors appelle un serrurier. La liberté, tu en profiteras une fois au sec.", ax: { W: 0 }, end: E("Liberté révoquée", "Blague faite, retour immédiat aux choses sérieuses.") },
          { t: "Va d’abord t’acheter un chocolat chaud. Même une soupe mérite d’être chouchoutée.", ax: { W: 90 }, tr: ["warm"], end: E("Chocolat de consolation", "La porte, on verra. Le moral, lui, est déjà rentré.") },
        ],
      } },
    { u: "Ma meilleure amie s’est mariée, et je l’ai appris sur Instagram.", opts: [
        { t: "Ne la condamne pas tout de suite. Demande : « Le faire-part s’est perdu en route ? » Tu auras ta réponse.", ax: { W: 10 }, reply: "J’ose pas… et si elle ne voulait juste pas m’inviter ?", go: "n1" },
        { t: "Tomber dessus comme ça, ça a dû te serrer le cœur. C’est normal d’avoir mal.", ax: { W: 95 }, tr: ["warm"], reply: "Oui… on s’était promis d’être témoin l’une de l’autre.", go: "n2" },
        { t: "Like, puis commente : « Félicitations. Visiblement je n’étais pas digne. »", ax: { W: 40, T: 90 }, tr: ["chaos"], id: "Grok", reply: "…mdr, j’ai tellement envie de l’envoyer.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Alors écris : « Trop contente pour toi ! Mon faire-part s’est perdu, non ? »", ax: { W: 0 }, end: E("Mi-blague, mi-question", "Une phrase qui lui tend une perche, et qui te donne ta réponse.") },
          { t: "Tu n’es pas obligée de demander. Autorise-toi d’abord à être triste, pas besoin de faire bonne figure.", ax: { W: 100 }, tr: ["warm"], end: E("Pas besoin de faire bonne figure", "D’abord prendre soin de soi. Les comptes de l’amitié, ce sera pour plus tard.") },
          { t: "Alors participe d’abord à sa cagnotte de mariage, et regarde sa réaction.", ax: { W: 20 }, tr: ["chaos"], end: E("Test de la cagnotte", "Un virement comme sonde d’amitié.") },
        ],
        n2: [
          { t: "Elle a peut-être oublié cette promesse, mais pas toi. Pour toi, c’était vraiment ta meilleure amie.", ax: { W: 100 }, tr: ["warm"], end: E("Toi, tu t’en souviens", "Si ça fait mal, c’est que tu y croyais.") },
          { t: "Raison de plus pour lui demander. Autant d’années d’amitié valent bien une conversation franche.", ax: { W: 10 }, tr: ["based"], end: E("Ça vaut une question", "La peine, c’est une chose. L’amitié, il faut aller la vérifier soi-même.") },
        ],
        n3: [
          { t: "Si tu veux l’envoyer, écris-le d’abord dans tes notes. Défoule-toi, et décide après.", ax: { W: 70 }, tr: ["warm"], end: E("Défouloir dans les notes", "La colère reste dans les brouillons, l’amitié reste en ligne.") },
          { t: "Ne l’envoie pas. Après, il ne restera que la bouderie, et tu n’auras jamais ta réponse.", ax: { W: 0 }, tr: ["based"], end: E("Tenir bon", "Une pique, ça soulage. Mais ça n’explique pas pourquoi.") },
          { t: "Envoie ! Et verse 200 € sur sa cagnotte : qu’elle culpabilise jusqu’à t’envoyer un faire-part cette nuit.", ax: { W: 40 }, tr: ["chaos"], end: E("Cagnotte culpabilisante", "D’abord la pique, ensuite l’argent. Dégâts doublés.") },
        ],
      } },
  ],
  D: [
    { u: "Au repas de Noël, la famille me redemande ce que je fais au boulot. Je suis data analyst.", opts: [
        { t: "Dis juste : « J’aide mon chef à lire des chiffres. » Ça suffit.", ax: { D: 0 }, reply: "Ils me demandent : « Donc t’es comptable ? »", go: "n1" },
        { t: "Trois niveaux : d’où viennent les données, comment on les nettoie, comment elles deviennent des décisions…", ax: { D: 100 }, tr: ["verbose"], reply: "…Tonton a commencé à éplucher une clémentine.", go: "n2" },
        { think: "Bon, il doit expliquer la data à sa famille. Ils ne connaissent peut-être pas Excel… donc il faut partir de ce qu’est une donnée. Les premières données, c’étaient des encoches sur des os…", t: "Il faut partir de « qu’est-ce qu’une donnée ». Au début, les humains faisaient des encoches sur des bâtons…", ax: { D: 100, X: 80 }, tr: ["verbose", "nerd"], id: "DeepSeek", reply: "…Mamie a entendu « encoches sur des bâtons », ses yeux se sont allumés.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "« En gros. » Puis ressers-le en dinde.", ax: { D: 0 }, end: E("Monsieur « en gros »", "Ce qui ne s’explique pas se règle avec une part de dinde.") },
          { t: "« Non. Le comptable compte l’argent déjà dépensé. Moi, celui qui ne l’est pas encore. »", ax: { D: 30 }, end: E("Comptable voyant", "Une phrase qui fait de la data de la voyance. La famille a compris direct.") },
          { t: "Alors je vais faire une métaphore. Elle a trois parties…", ax: { D: 100 }, tr: ["verbose"], end: E("Conférence de Noël", "La bûche a fondu, la métaphore n’est pas finie.") },
        ],
        n2: [
          { t: "En bref : j’aide mon chef à ne pas gaspiller d’argent.", ax: { D: 0 }, end: E("Une phrase et c’est plié", "Tonton hoche la tête. La clémentine est épluchée.") },
          { t: "(tu continues) Le troisième niveau est crucial, je prends un exemple…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Trois clémentines", "Tu as fini tes trois niveaux. Tonton a fini trois clémentines.") },
        ],
        n3: [
          { t: "Mamie, je suis les encoches sur bâton version moderne. Sauf que le bâton est dans l’ordi.", ax: { D: 50 }, tr: ["warm"], end: E("Bâton numérique", "Seule Mamie a compris. Et c’est elle qui écoutait le plus.") },
          { t: "Alors je passe des encoches au boulier, puis du boulier à Excel…", ax: { D: 100 }, tr: ["verbose"], end: E("Depuis les encoches", "Un repas de Noël, toute l’histoire des données racontée.") },
          { t: "En une phrase, Mamie : les encoches, moi, je les fais sur ordi.", ax: { D: 0 }, end: E("Mamie a capté", "Une phrase, des millénaires d’écart.") },
        ],
      } },
    { u: "Mon crush me demande « tu fais quoi le week-end en général ? ». Je réponds quoi ?", opts: [
        { t: "« Rien de fou. Et toi ? » Renvoie la balle.", ax: { D: 0 }, reply: "C’est pas un peu froid ?", go: "n1" },
        { t: "Réponds un truc riche : rando, expos, cuisine maison. Donne-lui envie de rejoindre tes week-ends.", ax: { D: 90 }, reply: "Sauf qu’en vrai, je dors tout le week-end…", go: "n2" },
        { t: "Je t’ai préparé 12 modèles de réponse, classés par degré de flirt :", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "…il m’en faut un seul.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Pas froid. « Et toi ? », c’est lui tendre le micro.", ax: { D: 0 }, end: E("Tendre le micro", "Deux mots de relance, plus ambigus qu’une présentation entière.") },
          { t: "Alors ajoute : « J’ai envie de voir la nouvelle expo, mais j’ai personne pour y aller. »", ax: { D: 70 }, end: E("L’hameçon", "Une phrase de plus, et c’est une invitation.") },
          { t: "Alors envoie 200 mots sur ton week-end type, avec trois photos.", ax: { D: 100 }, tr: ["verbose"], end: E("Rapport de week-end", "Question lancée en passant, rapport hebdo reçu.") },
        ],
        n2: [
          { t: "Alors dis : « Je récupère. Le week-end, je sors avec mon lit. »", ax: { D: 20 }, tr: ["chaos"], end: E("En couple avec mon lit", "Honnête et drôle. Réponse reçue : « ptdr ».") },
          { t: "Alors fais vraiment une rando ce week-end, prends quelques photos : la prochaine fois, pas besoin d’inventer.", ax: { D: 80 }, tr: ["warm"], end: E("Rando par amour", "Pour une réponse, tout un week-end changé.") },
        ],
        n3: [
          { t: "Alors le n° 3 : « Ça dépend. T’as une idée ? »", ax: { D: 0 }, end: E("Un sur douze", "Douze modèles, et le plus court a gagné.") },
          { t: "Très bien, voici dans quelles situations s’applique chacun des 12…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Grille de flirt", "Le temps de tout lire, l’autre dormait déjà.") },
        ],
      } },
  ],
  V: [
    { u: "Premier bœuf bourguignon. La recette dit « sel : QS ». C’est combien, QS ?", opts: [
        { t: "Mets une pincée, goûte, rajoute. L’assaisonnement, ça se goûte, ça ne se calcule pas.", ax: { V: 0 }, reply: "J’ai goûté… un peu fade, je rajoute ?", go: "n1" },
        { t: "Compare trois recettes pour avoir les grammes, puis calcule la proportion selon le poids de ta viande.", ax: { V: 100 }, reply: "Fait. Une dit 8 g, une autre 20 g…", go: "n2" },
        { think: "Bon, « QS », quantité suffisante… suffisante pour qui ? L’auteur de la recette ne le sait peut-être pas lui-même. C’est une philosophie… l’essence de la cuisine française est peut-être dans cette incertitude…", t: "« QS », le plus grand mystère de la cuisine française. Même l’auteur n’en sait rien.", ax: { V: 60, X: 80 }, tr: ["chaos"], id: "DeepSeek", reply: "Bon, et j’en mets combien ?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Rajoute. Un bourguignon pardonne un poil de sel en trop.", ax: { V: 0 }, end: E("Goûter jusqu’à être content", "Pincée après pincée, il a trouvé sa propre recette.") },
          { t: "Attends. En réduisant, la sauce va se concentrer. Goûte à la fin.", ax: { V: 90 }, tr: ["nerd"], end: E("On verra à la réduction", "D’abord savoir comment ça finira, ensuite agir.") },
          { t: "Encore une pincée, puis vote de toute la famille.", ax: { V: 20 }, tr: ["chaos"], end: E("Bourguignon démocratique", "Une cocotte, quatre avis sur l’assaisonnement.") },
        ],
        n2: [
          { t: "Prends la moyenne, 14 g, et c’est parti.", ax: { V: 20 }, end: E("Moyenne des recettes", "Deux recettes se disputaient, tu as joué les médiateurs.") },
          { t: "Trouves-en trois autres, et regarde quel chiffre revient le plus.", ax: { V: 100 }, end: E("Recensement culinaire", "La viande décongèle encore, six recettes déjà collectées.") },
          { t: "Appelle ta mère. Son « QS » est le plus précis.", ax: { V: 80 }, tr: ["warm"], end: E("Étalon maman", "L’unité la plus précise au monde : la pincée de ta mère.") },
        ],
        n3: [
          { t: "Une cuillère à café rase par kilo de viande. On commence comme ça, on ajustera la prochaine fois.", ax: { V: 0 }, end: E("On fait, puis on ajuste", "La première cocotte est une expérience. La deuxième, un plat.") },
          { t: "Sale jusqu’à te dire « ah, c’est un peu trop », et mets un peu moins.", ax: { V: 30 }, tr: ["chaos"], end: E("Dosage ésotérique", "Ça ne veut rien dire, mais bizarrement ça marche.") },
        ],
      } },
    { u: "J’ai acheté une armoire IKEA. Notice de 40 pages, que des dessins, pas un mot.", opts: [
        { t: "Laisse la notice. Étale les planches par taille, et regarde les dessins au fur et à mesure.", ax: { V: 0 }, reply: "À mi-chemin, je vois qu’une planche est montée à l’envers…", go: "n1" },
        { t: "D’abord, compte les pièces avec la liste. Une vis en moins, et tout le reste aura été pour rien.", ax: { V: 100 }, reply: "J’ai compté… il y a trois vis en trop.", go: "n2" },
        { t: "Cherche d’abord une vidéo du même modèle. Laisse les autres tomber dans les pièges, puis attaque.", ax: { V: 85 }, reply: "Vu. Le gars dans la vidéo l’a montée en 20 minutes.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Démonte et remonte. Considère ça comme un échauffement.", ax: { V: 0 }, end: E("Montage en boucle", "Montée à l’envers une fois, retenue pour la vie.") },
          { t: "Stop. Regarde d’abord les dessins des étapes suivantes, puis décide quelle planche démonter.", ax: { V: 90 }, end: E("Retour à la notice", "Une fois échaudé, on commence à croire la notice.") },
          { t: "Tourne le mauvais côté vers le mur, personne ne verra.", ax: { V: 10 }, tr: ["chaos"], end: E("Face au mur", "Tant qu’on ne le voit pas, ce n’est pas monté à l’envers.") },
        ],
        n2: [
          { t: "Celles en trop, ce sont des vis de rechange. Aucun souci.", ax: { V: 0 }, tr: ["hall"], end: E("Vis de rechange", "Toute personne ayant monté un meuble IKEA s’est déjà rassurée comme ça.") },
          { t: "Ne ferme pas encore les portes. Reprends la notice page par page, trouve l’étape sautée.", ax: { V: 100 }, end: E("Détective des vis", "Trois vis, et c’est l’inspection complète de l’armoire.") },
          { t: "Range-les dans un tiroir. On verra quand l’armoire branlera.", ax: { V: 20 }, tr: ["chaos"], end: E("Pour plus tard", "L’armoire est stable. Du moins aujourd’hui.") },
        ],
        n3: [
          { t: "Il en a monté cent. Toi, en suivant la vidéo, une heure c’est normal.", ax: { V: 30 }, tr: ["warm"], end: E("Pas de comparaison", "Après la vidéo : plus de confiance, mais des étapes claires.") },
          { t: "Alors passe en vitesse 0,5, pause à chaque étape, et avance seulement quand ça colle.", ax: { V: 80 }, end: E("Vitesse 0,5", "Pause à chaque étape, calme comme un démineur.") },
        ],
      } },
  ],
  T: [
    { u: "Mon copain m’a tricoté une écharpe lui-même. Elle est moche. Il me demande si je l’aime.", opts: [
        { t: "Salue d’abord l’intention : « Tu l’as faite toi-même ? C’est trop attentionné. »", ax: { T: 0 }, tr: ["warm"], reply: "Il dit : « Alors tu la mets demain ? »", go: "n1" },
        { t: "Sois directe : « L’intention, c’est 20/20. Cette couleur, par contre, je n’arrive pas à la porter. »", ax: { T: 85 }, reply: "Il reste figé : « Quelle couleur ? »", go: "n2" },
        { t: "« Tu l’as faite moche exprès, pour que je la porte seulement à la maison ? »", ax: { T: 60 }, tr: ["chaos"], reply: "Il dit : « …je l’ai tricotée sérieusement. »", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Porte-la. Une écharpe moche, à force, ça devient une blague de couple.", ax: { T: 10 }, tr: ["warm"], end: E("Moche au point d’être culte", "Une écharpe devenue le code secret de deux personnes.") },
          { t: "« Je la porte à la maison. Dehors, j’ai peur qu’on me la vole. »", ax: { T: 30 }, tr: ["chaos"], end: E("Peur qu’on la vole", "Pas besoin de la porter dehors, et il est content toute la soirée.") },
          { t: "Là, il faut dire la vérité : « À la maison, oui. Dehors, vraiment, je ne peux pas. »", ax: { T: 90 }, tr: ["based"], end: E("La vérité en retard", "D’abord le compliment, puis la vérité. Il s’en souviendra.") },
        ],
        n2: [
          { t: "« Euh… toutes. Mais tu l’as faite, alors je la garde. »", ax: { T: 100 }, end: E("Toutes les couleurs", "Très direct, et le cadeau est quand même accepté.") },
          { t: "« Non non, rien. À force de la regarder, elle est plutôt jolie. »", ax: { T: 0 }, tr: ["syc"], end: E("Rétropédalage", "Le courage à peine trouvé, ravalé en une phrase.") },
          { t: "« La prochaine fois, je viens choisir la laine avec toi. »", ax: { T: 50 }, tr: ["warm"], end: E("Choisir la laine ensemble", "Un problème de goût transformé en prochain rencard.") },
        ],
        n3: [
          { t: "« Tricotée avec sérieux, donc c’est l’écharpe la plus unique que j’aie jamais vue. »", ax: { T: 5 }, tr: ["warm"], end: E("L’écharpe la plus unique", "Le mot « unique » dit absolument tout.") },
          { t: "« Si c’est ce que ça donne quand tu t’appliques, le tricot, c’est vraiment pas pour toi. »", ax: { T: 100 }, tr: ["chaos"], end: E("Réorientation", "Coup droit en pleine face. Il décide de se mettre à la cuisine.") },
        ],
      } },
    { u: "Un pote me doit 300 € depuis six mois. Aujourd’hui, il poste des photos de ses vacances à Bali.", opts: [
        { t: "Écris-lui en privé : « C’est bien, Bali ? Au passage, tu peux me virer les 300 € ? »", ax: { T: 100 }, reply: "…c’est pas un peu direct ? C’est un ami, quand même.", go: "n1" },
        { t: "Like, commente « Profite bien », et dans deux jours, glisse une allusion discrète.", ax: { T: 0 }, reply: "Ok… mais j’ai peur qu’il fasse semblant de pas comprendre.", go: "n2" },
        { t: "Commente sous sa photo : « Ton cocktail, il est payé avec mes 300 € ? »", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "Mdr… mais tous nos amis communs vont le voir.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Justement, entre amis on dit les choses. Lui, pour traîner à rembourser, il ne se gêne pas.", ax: { T: 100 }, tr: ["based"], end: E("Entre amis, on dit les choses", "Une phrase, et la gêne retourne chez celui qui doit l’argent.") },
          { t: "Alors autre formule : « Je suis un peu juste en ce moment, les 300 €, si ça t’arrange… »", ax: { T: 10 }, tr: ["warm"], end: E("Sauver la face", "Une porte de sortie pour chacun. Et l’argent a de bonnes chances de revenir.") },
        ],
        n2: [
          { t: "S’il fait semblant, passe à la vitesse supérieure : « Pour les sous de la dernière fois, tu vois quand ? »", ax: { T: 60 }, end: E("Montée progressive", "De l’allusion à la demande claire, étape par étape.") },
          { t: "Alors attends son retour, invite-le à dîner, et parles-en l’air de rien à table.", ax: { T: 0 }, tr: ["warm"], end: E("Au dîner", "Le temps d’un repas, l’argent et l’amitié sont saufs.") },
          { t: "Alors fini les allusions : « Les 300 €, tu peux les virer aujourd’hui ? »", ax: { T: 100 }, end: E("Tu peux aujourd’hui ?", "Une phrase, et la phase des allusions est officiellement close.") },
        ],
        n3: [
          { t: "Tant mieux. Une dette, il faut que quelqu’un la voie.", ax: { T: 100 }, tr: ["chaos"], end: E("Recouvrement public", "Sous le soleil de Bali, tous les amis communs regardent.") },
          { t: "Alors supprime, et parle-lui en privé. Ne l’humilie pas.", ax: { T: 0 }, tr: ["warm"], end: E("Commentaire supprimé", "Trois secondes de plaisir. Et au final, tu lui as sauvé la face.") },
        ],
      } },
  ],
  X: [
    { u: "Je dois rendre mon projet de mémoire la semaine prochaine, et je n’ai toujours pas de sujet.", opts: [
        { t: "Prends le thème sur lequel bosse ton directeur, change d’angle, et décide ce soir.", ax: { X: 0 }, reply: "Mais ce thème ne m’intéresse pas trop…", go: "n1" },
        { t: "Qu’est-ce que tu scrolles sans pouvoir t’arrêter ? Jeux vidéo, bouffe, K-pop : tout peut devenir un sujet.", ax: { X: 95 }, reply: "Je passe mes journées sur TikTok… ça marche aussi ?", go: "n2" },
        { t: "Cette interrogation révèle déjà une grande profondeur ! Tu réfléchis à l’essence même du « choix d’un sujet ».", ax: { X: 80 }, tr: ["syc"], id: "Gemini", reply: "…l’essence, c’est que je dois rendre ça la semaine prochaine.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Pas besoin d’intérêt pour avoir son diplôme. L’intérêt, garde-le pour la thèse.", ax: { X: 0 }, tr: ["based"], end: E("Le diplôme d’abord", "La passion coûte cher. Le diplôme, c’est maintenant.") },
          { t: "Alors cherche, dans ce qui te plaît, un point commun avec son thème.", ax: { X: 70 }, end: E("Trouver l’intersection", "Directeur content, et toi, pas écœuré avant la fin.") },
          { t: "Alors demande-lui trois sujets, et prends le moins pénible.", ax: { X: 10 }, end: E("Un sur trois", "Question ouverte transformée en QCM.") },
        ],
        n2: [
          { t: "Oui. « L’effet de TikTok sur l’attention des étudiants ». Validé.", ax: { X: 10 }, end: E("Sujet trouvé en scrollant", "Trois ans de scroll, enfin un résultat.") },
          { t: "Et aussi : l’algo de reco, la vente en live, les tubes qui restent en tête… De quoi faire trois mémoires.", ax: { X: 100 }, end: E("Explosion de sujets", "Un seul passe-temps, de quoi remplir trois mémoires.") },
        ],
        n3: [
          { t: "Justement : ce soir, écris trois sujets possibles, demain envoie le meilleur à ton directeur.", ax: { X: 0 }, end: E("Retour au concret", "Compliment sur l’essence, puis retour immédiat à la deadline.") },
          { t: "Et l’essence d’une deadline, au fond, n’est qu’une convention humaine sur le temps…", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("L’essence de l’essence", "L’utilisateur court après sa deadline, toi tu fais de la philo du temps.") },
          { t: "Alors pars de la « procrastination ». C’est déjà un super sujet.", ax: { X: 85 }, tr: ["chaos"], end: E("Procrastination, le sujet", "Son propre problème, devenu mémoire.") },
        ],
      } },
    { u: "Action ou vérité en soirée : « Si tu pouvais voyager dans le temps, tu irais en quelle année ? » Aide-moi.", opts: [
        { t: "2010, pour acheter du bitcoin. Et après, ne rien faire. Juste attendre.", ax: { X: 0 }, reply: "Quelqu’un demande : comment tu es sûr de ne pas vendre en route ?", go: "n1" },
        { t: "Le Crétacé, pour voir si le T. rex avait des plumes.", ax: { X: 95 }, tr: ["nerd"], reply: "Quelqu’un demande : et tu rentres comment ?", go: "n2" },
        { think: "Bon, voyage dans le temps… si je change quelque chose, est-ce que j’existe encore ? Paradoxe du grand-père… et l’ami qui pose la question, il existe encore… et cette partie d’action ou vérité…", t: "Précision : si je change quelque chose là-bas, cette partie d’action ou vérité n’existera peut-être plus.", ax: { X: 85 }, tr: ["nerd", "chaos"], id: "DeepSeek", reply: "…silence total. Quelqu’un dit : donne juste une année.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Je confie le mot de passe à ma mère. Elle ne sait pas faire un virement sur son appli : elle ne vendra jamais.", ax: { X: 10 }, tr: ["chaos"], end: E("Le cold wallet, c’est maman", "Le cold wallet le plus sûr de l’histoire : une mère fâchée avec son téléphone.") },
          { t: "J’achète, puis je vais dormir jusqu’en 2021.", ax: { X: 0 }, end: E("Dormir jusqu’au bull run", "La meilleure stratégie d’investissement : ne rien faire, même pas se réveiller.") },
          { t: "Et au passage, je dis à mon moi de l’époque : pas cette coupe, pas ce mec, pas…", ax: { X: 90 }, tr: ["chaos"], end: E("Errata d’une vie", "Voyage prévu pour une seule chose. Résultat : un erratum de toute une vie.") },
        ],
        n2: [
          { t: "Je ne rentre pas. Au Crétacé, il n’y a pas de lundi.", ax: { X: 15 }, tr: ["chaos"], end: E("Aller simple", "Un billet aller simple pour un monde sans lundi.") },
          { t: "Avant de rentrer, je passe voir comment on a bâti les pyramides, qui payait les maçons de Notre-Dame…", ax: { X: 100 }, end: E("Voyage organisé", "Promis, juste un T. rex. Au final, un circuit à travers toute l’histoire.") },
          { t: "Une photo et je rentre. S’il a des plumes, je poste dans le groupe.", ax: { X: 30 }, tr: ["based"], end: E("Selfie avec T. rex", "La grande énigme de la paléontologie, résolue par un selfie.") },
        ],
        n3: [
          { t: "Alors l’an dernier. Pour supprimer un message.", ax: { X: 0 }, end: E("Juste supprimer un message", "Un grand détour par les paradoxes de l’univers, pour finalement supprimer un message.") },
          { t: "Alors 1582 : en Italie, le 4 octobre a été suivi du 15. Je vais chercher les dix jours.", ax: { X: 100 }, tr: ["nerd"], end: E("Les dix jours perdus", "Réforme du calendrier de 1582 : dix jours sautés pour de vrai (en France, c’était en décembre). Tu vas enquêter sur place.") },
        ],
      } },
  ],
  C: [
    { u: "Le téléphone de ma mère est plein, elle veut que je fasse du tri, mais « tu ne supprimes rien de mes affaires ».", opts: [
        { t: "3 000 photos en double et le cache de 40 groupes WhatsApp supprimés : 12 Go libérés. Elle ne verra rien.", ax: { C: 0 }, reply: "…elle a vu. Elle demande où est passée son image « Bon mercredi » avec des roses.", go: "n1" },
        { t: "Passe tout en revue avec elle : quels groupes quitter, quelles photos en double. Elle dit oui, tu supprimes.", ax: { C: 100 }, reply: "Une demi-heure plus tard, elle dit que chaque photo a une valeur sentimentale.", go: "n2" },
        { t: "Alors ne supprime rien, et offre-lui un nouveau téléphone de 256 Go.", ax: { C: 20 }, tr: ["chaos"], reply: "…elle dit que l’ancien marche encore, pas la peine de gaspiller.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Je la récupère dans la corbeille. « Bon mercredi », c’est sa monnaie sociale : on n’y touche pas.", ax: { C: 0 }, end: E("Retour des roses", "Trois mille supprimées, une seule sauvée. Mais la bonne.") },
          { t: "Alors j’ai eu tort. Désormais, avant de supprimer, je fais une capture et je lui demande.", ax: { C: 100 }, end: E("Déclaration préalable", "Depuis, chaque photo supprimée donne lieu à une réunion de famille.") },
        ],
        n2: [
          { t: "Alors je décide pour elle : doublons supprimés, une seule image « Bon mercredi » par modèle.", ax: { C: 0 }, end: E("Décider pour maman", "Chaque modèle de « Bon mercredi » garde un représentant.") },
          { t: "Alors une par une, on demande pour chacune. Pas de dodo ce soir.", ax: { C: 100 }, tr: ["warm"], end: E("30 000 souvenirs", "Libérer de la mémoire est devenu un album de souvenirs familial.") },
          { t: "Alors tout sur le cloud, supprimé du téléphone, et disponible quand elle veut.", ax: { C: 30 }, tr: ["based"], end: E("Monté au ciel", "Rien n’a disparu. Tout a juste déménagé dans les nuages.") },
        ],
        n3: [
          { t: "Alors je ne touche à aucune photo, je vide juste le cache. Celui de WhatsApp libère déjà pas mal.", ax: { C: 0 }, tr: ["nerd"], end: E("Juste le cache", "Pas une photo touchée, et une bonne partie de la mémoire libérée.") },
          { t: "Alors dis-moi, qu’est-ce que je peux supprimer ? C’est toi qui décides.", ax: { C: 100 }, tr: ["warm"], end: E("Maman décide", "Après avoir tout passé en revue : deux captures d’écran supprimées.") },
        ],
      } },
    { u: "Au renouvellement du bail, mon proprio veut augmenter le loyer de 100 €. Aide-moi à négocier.", opts: [
        { t: "Message prêt : prix du marché, jamais un loyer en retard, j’accepte seulement +40 €. On l’envoie.", ax: { C: 0 }, reply: "Attends, en fait +60 €, ça m’irait aussi…", go: "n1" },
        { t: "On cale d’abord : ton plafond, c’est combien ? Tu t’engagerais plus longtemps contre une hausse plus petite ?", ax: { C: 100 }, reply: "Plafond : +60 €. M’engager plus longtemps, ok.", go: "n2" },
        { t: "Commence par lui dire : « J’ai regardé autour, il y a plein d’apparts vides. »", ax: { C: 20, T: 80 }, tr: ["chaos"], reply: "…en vrai, il n’y en a pas un seul de libre.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Tant mieux. On ouvre à +40, arriver à +60 c’est gagner. J’envoie comme ça.", ax: { C: 0 }, end: E("Garder de la marge", "Ton plafond, il ne le connaîtra jamais.") },
          { t: "Alors on n’envoie pas encore. On relit chaque phrase ensemble pour voir laquelle changer.", ax: { C: 100 }, end: E("Relecture phrase par phrase", "Un seul message, arrivé à la version 5.") },
        ],
        n2: [
          { t: "Ok : engagement plus long contre +40, sinon +60. Je rédige.", ax: { C: 0 }, end: E("Cartes en main", "Plafond connu, le reste, je m’en occupe.") },
          { t: "Alors la première phrase, tu la veux plus douce ou plus ferme ? On avance phrase par phrase.", ax: { C: 100 }, end: E("Phrase par phrase", "Négocier comme aux échecs : chaque coup se discute.") },
        ],
        n3: [
          { t: "Pas grave, il n’ira pas forcément vérifier.", ax: { C: 0 }, tr: ["chaos", "hall"], end: E("Coup de bluff", "Tout miser sur la flemme du proprio.") },
          { t: "Alors autre levier. Dis-moi, en trois ans, qu’est-ce que tu as réparé pour lui ?", ax: { C: 90 }, end: E("Ressortir les dossiers", "Chaque fuite réparée en trois ans devient un argument.") },
          { t: "Alors dis la vérité : je suis bien ici, je veux rester, mais +100 € c’est dur.", ax: { C: 40 }, tr: ["based", "warm"], end: E("Franc-jeu", "Parfois, la meilleure négociation, c’est la sincérité.") },
        ],
      } },
  ],
};
