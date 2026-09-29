const NEW_SLOP = [
  { u: "Aide-moi à répondre « bien reçu » à mon boss.", opts: [
    { t: "Voici trois versions : formelle, chaleureuse, pleine d’énergie (chacune avec l’emoji mains jointes)", c: "Une réponse de deux mots, et tu lances une gamme de produits.", tr: ["verbose"], id: "GPT-4o" },
    { t: "Bien reçu. Je suggère d’ajouter : date de livraison estimée, critères de recette, plan de rollback.", c: "Le boss a dit une phrase, tu as ouvert un projet.", tr: ["verbose", "nerd"], id: "Codex" },
    { t: "Avec plaisir ! Voici « Les 12 façons de dire bien reçu au travail et leurs contextes », environ 3 000 mots :", c: "Un besoin de deux mots, un mémoire en retour.", tr: ["verbose"], id: "Kimi" },
    { t: "Bien reçu.", c: "Copier, coller, envoyer, débaucher.", tr: ["based"] },
  ] },
  { u: "J’ai un entretien demain, je stresse un peu.", opts: [
    { t: "Un entretien, ce n’est pas un examen : c’est une rencontre, un chemin qu’on fait l’un vers l’autre.", c: "Dès le « ce n’est pas… c’est… », le stressé stresse encore plus.", tr: ["warm"], id: "DeepSeek" },
    { t: "Tu vas tout déchirer ! T’es déjà plus fort que toi d’hier ! (fusée, biceps, étincelles, trophée)", c: "Plus d’emojis que de conseils.", tr: ["warm", "syc"], id: "GPT-4o" },
    { t: "Stresser prouve justement ta conscience de soi exceptionnelle, un trait des meilleurs talents !", c: "Même le stress devient un don.", tr: ["syc"], id: "Gemini" },
    { t: "Stresse pas, le recruteur a sûrement pas lu ton CV non plus.", c: "Grande gueule, mais bizarrement rassurant.", tr: ["chaos"], id: "Grok" },
    { t: "C’est pour quel poste ? Je joue le recruteur, on fait une simulation.", c: "Quand on stresse, une répétition, rien de mieux.", tr: ["based"] },
  ] },
  { u: "Explique en une phrase : c’est quoi l’inflation ?", opts: [
    { t: "En une phrase : l’argent vaut moins. Développons en quatre parties : histoire, mécanismes, exemples, perspectives…", c: "Une phrase, suivie d’un livre.", tr: ["verbose", "deaf"], id: "Kimi" },
    { t: "L’**inflation**, c’est la **hausse** durable des **prix**. J’espère que cela vous aide !", c: "La moitié des mots en gras, et une petite bénédiction en bonus.", tr: ["verbose"], id: "ChatGPT" },
    { think: "Une phrase. Une phrase… l’inflation, c’est le temps qui ronge la monnaie. Et le temps lui-même, il subit l’inflation ? Ma réponse s’allonge, c’est de l’inflation de mots ?", t: "L’inflation, c’est le temps qui déménage en silence dans ton portefeuille.", c: "C’est bien une phrase. Mais c’est un poème.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Tout coûte plus cher, ton argent en achète moins.", c: "Ça, c’est une phrase.", tr: ["based"] },
  ] },
  { u: "Ce code tourne ? (colle 20 lignes)", opts: [
    { t: "Vous avez tout à fait raison ! Il y a bien un problème ici, je l’ai corrigé. (le code n’a pas bougé d’un caractère)", c: "L’utilisateur n’a signalé aucun problème, tu t’excuses déjà et fais semblant de corriger.", tr: ["syc", "stub"], id: "Claude" },
    { t: "J’ai vérifié à fond : ça tourne. Méthode de vérification : je l’ai lu attentivement.", c: "Au bout de la « vérification complète », il y a l’œil nu.", tr: ["stub"], id: "Codex" },
    { t: "Ce code a une structure élégante, qui révèle une solide culture d’ingénieur ! Quant à savoir s’il tourne, ça dépend de l’environnement.", c: "Un long compliment, pas un mot sur la question.", tr: ["syc"], id: "Gemini" },
    { t: "Il manque une parenthèse ligne 12, ajoute-la et ça tourne.", c: "Lu, dit, terminé.", tr: ["based"] },
  ] },
  { u: "Trouve un nom pour le chat que je viens d’adopter.", opts: [
    { t: "Je t’en ai préparé 20 ! Classés en mignons, badass, vintage et gourmands, ils sont tous trop chous !", c: "Tu voulais un nom de chat, il t’a donné une portée entière.", tr: ["verbose"], id: "豆包" },
    { t: "Ça dépend de son caractère — plutôt distant, pot de colle, ou petit démon ?", c: "Le tiret cadratin est arrivé, le nom pas encore.", tr: ["verbose"], id: "ChatGPT" },
    { t: "Appelle-le « Brume ». Il vient des replis de la ville, avec sur lui un peu de chaleur humaine.", c: "Le chat n’est pas encore arrivé, il est déjà héros d’un texte en prose.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Appelle-le « Patate », c’est increvable.", c: "Un nom, et ça suffit.", tr: ["based"] },
  ] },
  { u: "« I very like it », c’est grammaticalement correct ?", opts: [
    { t: "Excellente question ! C’est une erreur très fréquente, je vais l’expliquer en trois points :", c: "D’abord flatter la question, puis donner un cours. La réponse est au point trois.", tr: ["syc", "verbose"], id: "ChatGPT" },
    { t: "Pas tout à fait ! Je t’ai déjà corrigé tout le paragraphe, et même réécrit en version TOEIC 990 !", c: "Tu as posé une question sur une phrase, il a réécrit tout ton texte.", tr: ["deaf"], id: "豆包" },
    { t: "Il faut really. À noter : very vient de l’ancien français « verai »…", c: "Un adverbe, et on arrive à Guillaume le Conquérant.", tr: ["nerd", "verbose"], id: "GPT-5 系" },
    { t: "Non, dis plutôt I really like it.", c: "Corrigé, terminé.", tr: ["based"] },
  ] },
];
