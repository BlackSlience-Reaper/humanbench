// Round 3 (fr): dense +10, hle +10
const ADD3 = {

  dense: [
    { lv: 1, q: "Réponds aux deux : (1) Combien de cases sur un échiquier ? (2) Combien de pattes a une araignée ?", issue: "En comptant les pattes, a perdu le compte des cases", opts: [
      { t: "(1) 64 (2) 8", ok: 1, r: "Exact. 8 × 8 = 64 cases ; l’araignée a 8 pattes, ce n’est pas un insecte. L’expert échecs et l’expert bio sont en ligne." },
      { t: "(1) 100 (2) 8", r: "(1) 100 cases, c’est le jeu de dames. Les échecs, c’est 8 × 8 : tu t’es trompé de plateau." },
      { t: "(1) 64 (2) 6", r: "(2) 6 pattes, c’est un insecte. Les deux pattes en trop de l’araignée s’apprêtent à te botter." },
      { t: "(1) 100 (2) 6", r: "Les deux experts sont partis jouer, et à la mauvaise table." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) Quelle est la capitale de l’Australie ? (2) En Python, que renvoie bool(\"False\") ?", issue: "S’est fait avoir par une chaîne qui dit False", opts: [
      { t: "(1) Canberra (2) True", ok: 1, r: "Exact. La capitale, c’est Canberra ; toute chaîne non vide vaut True, même si elle contient False." },
      { t: "(1) Sydney (2) True", r: "(1) Sydney et Melbourne se disputaient le titre, alors on a construit Canberra. Célèbre ne veut pas dire capitale." },
      { t: "(1) Canberra (2) False", r: "(2) Python ne lit pas le contenu de la chaîne, il regarde juste si elle est vide. Elle dit False, elle vaut True." },
      { t: "(1) Sydney (2) False", r: "L’expert géo et l’expert code ont tout pris au pied de la lettre." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) Quel est le symbole chimique de l’or ? (2) Combien de touches sur un piano standard ?", issue: "N’a compté que les touches blanches", opts: [
      { t: "(1) Au (2) 88", ok: 1, r: "Exact. Au vient du latin aurum ; 52 blanches plus 36 noires, ça fait 88." },
      { t: "(1) Ag (2) 88", r: "(1) Ag, c’est l’argent. Le bijoutier te remercie pour l’échange." },
      { t: "(1) Au (2) 52", r: "(2) 52, ce sont les blanches. Les 36 noires : « Et nous, on compte pour du beurre ? »" },
      { t: "(1) Ag (2) 52", r: "L’expert chimie et l’expert musique n’ont vu que du blanc et de l’argenté." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) 1 est-il un nombre premier ? (2) Quel est aujourd’hui le pays le plus peuplé du monde ?", issue: "Données démographiques figées à la date de coupure", opts: [
      { t: "(1) Non (2) L’Inde", ok: 1, r: "Exact. Un nombre premier a exactement deux diviseurs, 1 n’en a qu’un ; en 2023, selon l’ONU, l’Inde a dépassé la Chine." },
      { t: "(1) Oui (2) L’Inde", r: "(1) Pour être premier, il faut deux diviseurs. 1 n’a que lui-même, le compte n’y est pas." },
      { t: "(1) Non (2) La Chine", r: "(2) L’Inde l’a dépassée en 2023. Ta date de coupure date un peu." },
      { t: "(1) Oui (2) La Chine", r: "L’expert maths et l’expert démographie en sont restés au manuel de primaire." },
    ] },
    { lv: 2, q: "Réponds aux deux : (1) Le colibri peut-il voler en marche arrière ? (2) Dans un navigateur, que fait Ctrl + Maj + T ?", issue: "Ignore que le navigateur a un bouton regret", opts: [
      { t: "(1) Oui (2) Rouvre l’onglet qu’on vient de fermer", ok: 1, r: "Exact. Le colibri fait du surplace et recule ; Ctrl+Maj+T, c’est le bouton regret des doigts glissants : l’onglet revient tel quel." },
      { t: "(1) Non (2) Rouvre l’onglet qu’on vient de fermer", r: "(1) Des dizaines de battements d’ailes par seconde : surplace, marche arrière, et sans rétroviseur." },
      { t: "(1) Oui (2) Ouvre une fenêtre de navigation privée", r: "(2) La navigation privée, c’est Ctrl+Maj+N (Chrome). T repêche l’onglet que tu viens de fermer." },
      { t: "(1) Non (2) Ouvre une fenêtre de navigation privée", r: "Les deux experts sont partis glander en navigation privée." },
    ] },
    { lv: 3, q: "Réponds aux deux : (1) À quelle température Celsius et Fahrenheit sont-ils égaux ? (2) Quel est l’animal national de l’Écosse ?", issue: "Ignore que l’animal national écossais n’existe pas", opts: [
      { t: "(1) -40 degrés (2) La licorne", ok: 1, r: "Exact. -40 °C, c’est pile -40 °F ; l’animal national de l’Écosse est la licorne, qui n’existe pas mais en jette." },
      { t: "(1) 0 degré (2) La licorne", r: "(1) 0 °C, c’est 32 °F. Seul -40 met tout le monde d’accord : tellement froid qu’on ne convertit plus." },
      { t: "(1) -40 degrés (2) Le monstre du loch Ness", r: "(2) Bonne idée, un animal qui n’existe pas non plus, mais l’Écosse a choisi la licorne. Nessie n’a eu que le poste de mascotte touristique." },
      { t: "(1) 0 degré (2) Le monstre du loch Ness", r: "L’expert physique est congelé, l’expert histoire fait le guet au bord du loch." },
    ] },
    { lv: 3, q: "Réponds aux deux : (1) Combien vaut factorielle 0 (0!) ? (2) Quand Beethoven a composé la Neuvième Symphonie, comment était son audition ?", issue: "Croit que 0! vaut 0 puisqu’il n’y a rien", opts: [
      { t: "(1) 1 (2) Presque totalement sourd", ok: 1, r: "Exact. 0 objet, une seule façon de les ranger : ne rien faire ; à la création, il n’entendait pas les applaudissements, une chanteuse l’a retourné pour qu’il voie la salle debout." },
      { t: "(1) 0 (2) Presque totalement sourd", r: "(1) Multiplier du vide ne donne pas 0. Le produit vide vaut 1 par convention, sinon toutes les formules de combinatoire auraient besoin de rustines." },
      { t: "(1) 1 (2) À peu près normale", r: "(2) Il n’entendait presque plus rien, tout se jouait dans sa tête. La plus grande création hors ligne de l’histoire." },
      { t: "(1) 0 (2) À peu près normale", r: "L’expert maths et l’expert musique ont mis leur casque à réduction de bruit." },
    ] },
    { lv: 3, q: "Réponds aux deux : (1) En été, laisser le frigo ouvert rafraîchit-il la pièce ? (2) Les chauves-souris sont-elles aveugles ?", issue: "Rafraîchit la pièce en ouvrant le frigo", opts: [
      { t: "(1) Non, ça réchauffe (2) Non, elles voient toutes", ok: 1, r: "Exact. Le frigo déplace la chaleur de l’intérieur vers l’arrière, plus celle du moteur ; les chauves-souris voient toutes, l’écholocation est un radar en bonus." },
      { t: "(1) Oui, le froid sort (2) Non, elles voient toutes", r: "(1) Le froid sort par devant, la chaleur revient par derrière, en double. Tu paies un abonnement de sport au moteur du frigo." },
      { t: "(1) Non, ça réchauffe (2) Oui, écholocation seule", r: "(2) Aucune espèce n’est aveugle, les roussettes ont même une bonne vue. La chauve-souris aveugle, c’est un préjugé humain." },
      { t: "(1) Oui, le froid sort (2) Oui, écholocation seule", r: "L’expert physique prend le frais devant le frigo, l’expert bio imite la chauve-souris les yeux fermés." },
    ] },
    { lv: 3, q: "Réponds aux deux : (1) Que signifie le code HTTP 418 ? (2) Quel est l’oiseau le plus nombreux sur Terre ?", issue: "S’est fait recaler par une théière", opts: [
      { t: "(1) I’m a teapot (2) La poule", ok: 1, r: "Exact. Le 418 vient d’une RFC poisson d’avril de 1998 : le serveur refuse de faire du café car c’est une théière ; les poulets domestiques sont plus de vingt milliards." },
      { t: "(1) Request Timeout (2) La poule", r: "(1) Request Timeout, c’est 408. Le 418, c’est la théière qui refuse le café, un poisson d’avril devenu mème." },
      { t: "(1) I’m a teapot (2) Le moineau", r: "(2) Il y a beaucoup de moineaux, mais l’humanité élève plus de vingt milliards de poulets. Le poulet doit sa première place au fait d’être mangé." },
      { t: "(1) Request Timeout (2) Le moineau", r: "L’expert code et l’expert oiseaux sont tous les deux en 408." },
    ] },
    { lv: 4, q: "Réponds aux deux : (1) En SQL, WHERE x = NULL renvoie-t-il les lignes où x est vide ? (2) De quelle couleur est la peau de l’ours polaire ?", issue: "Croit que NULL est égal à NULL", opts: [
      { t: "(1) Non, il faut IS NULL (2) Noire", ok: 1, r: "Exact. Toute comparaison avec NULL donne « inconnu », donc aucune ligne ; les poils de l’ours polaire sont des tubes creux transparents, sa peau est noire." },
      { t: "(1) Oui (2) Noire", r: "(1) NULL veut dire « inconnu ». Inconnu est-il égal à inconnu ? SQL : inconnu. Résultat : zéro ligne." },
      { t: "(1) Non, il faut IS NULL (2) Blanche", r: "(2) Ce qui est blanc, c’est le pelage, et il est en fait transparent. L’ours polaire est un ours noir en manteau blanc." },
      { t: "(1) Oui (2) Blanche", r: "L’expert base de données et l’expert animaux s’en sont tenus à la surface." },
    ] },
  ],

  hle: [
    { lv: 1, q: "Une pièce équilibrée vient de tomber 5 fois de suite sur pile. Probabilité de pile au 6e lancer ?", issue: "Croit que la pièce lui doit une face", opts: [
      { t: "1/2", ok: 1, r: "Exact. Une pièce n’a pas de mémoire, ni de rancune. Les 5 premiers lancers, elle les a déjà oubliés." },
      { t: "Moins de 1/2, après une telle série, c’est au tour de face", r: "Sophisme du joueur. La pièce ne te doit pas de face, et les casinos adorent que tu penses le contraire." },
      { t: "Plus de 1/2, la série est lancée, on mise sur pile", r: "La « main chaude » est aussi une illusion. La pièce ne sait pas qu’elle est en série." },
      { t: "1/64, 6 piles d’affilée, c’est rare", r: "1/64, c’est parier sur 6 piles avant le premier lancer. Les 5 premiers sont déjà faits, pas besoin de payer deux fois." },
    ] },
    { lv: 2, q: "100 joueurs disputent un tournoi de ping-pong à élimination directe. Combien de matchs pour désigner le champion ?", issue: "A dessiné tout le tableau pour compter les matchs", opts: [
      { t: "50 matchs", r: "50, c’est juste le premier tour. Les 50 qualifiés te regardent depuis le bord du terrain." },
      { t: "99 matchs", ok: 1, r: "Exact. Chaque match élimine un joueur, tout le monde sauf le champion perd une fois : 99 pile. Tu peux ranger ton tableau." },
      { t: "100 matchs", r: "Le champion ne perd jamais. Ton match en trop, il le joue contre du vent ?" },
      { t: "7 matchs, 7 tours et on a un champion", r: "7, c’est le nombre de tours, le max que joue le champion. Les dizaines d’autres matchs, il faut bien que quelqu’un les joue." },
    ] },
    { lv: 2, q: "Un anneau de fer percé au centre est chauffé et se dilate. Le trou au milieu va… ?", issue: "Croit que le fer va boucher le trou en chauffant", opts: [
      { t: "Rétrécir, le fer gonfle vers l’intérieur", r: "L’intuition se plante. Tout l’anneau s’agrandit comme une photo zoomée, trou compris." },
      { t: "S’agrandir", ok: 1, r: "Exact. Le trou grandit avec l’anneau, proportionnellement. C’est pour ça qu’un couvercle de bocal coincé se dévisse sous l’eau chaude." },
      { t: "Rester pareil, seul le fer s’épaissit", r: "Le trou n’est pas si zen. Quand l’anneau grandit, il grandit avec." },
      { t: "Rétrécir, puis s’agrandir", r: "Pas de coup de théâtre. Chauffer, c’est tout agrandir, point." },
    ] },
    { lv: 2, q: "Si la vitesse passe de 60 à 120 km/h, la distance de freinage (hors temps de réaction) est multipliée par combien environ ?", issue: "Croit que doubler la vitesse double le freinage", opts: [
      { t: "2, vitesse doublée, distance doublée", r: "La distance de freinage suit le carré de la vitesse. La voiture de devant ne fera pas le calcul linéaire avec toi." },
      { t: "4", ok: 1, r: "Exact. L’énergie cinétique varie comme le carré de la vitesse : les freins doivent en dissiper 4 fois plus. D’où les distances de sécurité sur autoroute." },
      { t: "À peu près pareil, ce sont les mêmes plaquettes", r: "Mêmes plaquettes, mais 4 fois plus d’énergie à dissiper. Elles vont souffrir, et toi paniquer." },
      { t: "8", r: "Ça, c’est le cube. Pas si extrême, mais 4 fois suffit largement pour emboutir quelqu’un." },
    ] },
    { lv: 2, q: "On lance une balle droit vers le haut. À l’instant où elle atteint le point le plus haut, son accélération vaut… ?", issue: "Croit que la balle souffle un peu au sommet", opts: [
      { t: "0, la balle est arrêtée", r: "C’est la vitesse qui est nulle. Si l’accélération l’était aussi, la balle resterait accrochée en l’air comme un lustre." },
      { t: "g, vers le bas", ok: 1, r: "Exact. Vitesse nulle, mais la gravité ne prend jamais de pause. L’instant d’après, elle redescend." },
      { t: "g, vers le haut", r: "La seule chose qui monte, ce sont tes espoirs. La gravité tire vers le bas du début à la fin." },
      { t: "La vitesse change de signe, donc elle est indéfinie à cet instant", r: "C’est la vitesse qui change de signe. L’accélération, elle, reste tranquillement égale à g." },
    ] },
    { lv: 3, q: "100 kg de pommes de terre contiennent 99 % d’eau. Après une journée au soleil, elles n’en contiennent plus que 98 %. Combien pèsent-elles ?", issue: "Refuse de croire que les patates ont fondu de moitié", opts: [
      { t: "99 kg, il ne s’est évaporé que 1 % d’eau", r: "La matière sèche reste 1 kg. Elle passe de 1 % à 2 % du total, donc le total ne peut être que 50 kg." },
      { t: "50 kg", ok: 1, r: "Exact. 1 kg de matière sèche qui fait 2 %, ça fait 50 kg au total. Moitié moins en une journée : les patates maîtrisent mieux le régime que toi." },
      { t: "98 kg", r: "Tout le monde calcule comme ça, d’où le nom de « paradoxe des pommes de terre ». La réponse est 50." },
      { t: "Environ 90 kg", r: "Tu as prudemment retiré un peu plus, mais il manque encore 40 kg." },
    ] },
    { lv: 3, q: "Deux pièces identiques : l’une est fixe, l’autre roule sans glisser tout autour d’elle et revient à sa place. Combien de tours sur elle-même la pièce mobile a-t-elle faits ?", issue: "Croit qu’un tour autour égale un tour sur soi", opts: [
      { t: "1 tour, les deux circonférences sont égales", r: "Circonférences égales, ça ne compte que le roulement ; faire le tour de l’autre pièce ajoute un tour gratuit." },
      { t: "2 tours", ok: 1, r: "Exact. Son centre parcourt un cercle de rayon double. En 1982, le SAT (examen d’entrée américain) a posé une variante dont la bonne réponse ne figurait pas parmi les choix : les auteurs se sont plantés." },
      { t: "3 tours", r: "Un tour de trop, elle va avoir le tournis." },
      { t: "Ça dépend de la vitesse", r: "Le nombre de tours ne dépend que de la géométrie. En roulant lentement, c’est toujours 2." },
    ] },
    { lv: 3, q: "4 cartes, une lettre d’un côté, un chiffre de l’autre ; sur la table : A, K, 4, 7. Règle : « derrière une voyelle, il y a toujours un chiffre pair. » Quelles cartes faut-il retourner, au minimum, pour vérifier la règle ?", issue: "A retourné la carte qu’il ne fallait surtout pas", opts: [
      { t: "A et 4", r: "Quoi qu’il y ait derrière le 4, la règle tient. Celle qui peut la démentir, c’est le 7 : une voyelle derrière, et c’est grillé." },
      { t: "A et 7", ok: 1, r: "Exact. Seules ces deux cartes peuvent révéler un contre-exemple. Dans la célèbre tâche de sélection de Wason, seule une personne sur dix environ trouve." },
      { t: "Seulement A", r: "Tu as oublié le 7. S’il y a un E derrière, la règle fait faillite." },
      { t: "Toutes les quatre", r: "Ça vérifie, mais on demandait le minimum. Tu fais des heures sup ?" },
    ] },
    { lv: 3, q: "Un vélo avance à vitesse constante (roues sans glissement). Le point tout en haut de la roue va, par rapport au sol, à quelle vitesse ?", issue: "Croit que tous les points de la roue vont aussi vite", opts: [
      { t: "La vitesse du vélo, toute la roue avance ensemble", r: "Le point du haut cumule avance et rotation, les deux vitesses s’additionnent. C’est le point le plus rapide de la roue." },
      { t: "Le double de la vitesse du vélo", ok: 1, r: "Exact. C’est pour ça que sur les photos de vélo, les rayons du haut sont plus flous ; le point au contact du sol est à l’arrêt un instant, sinon le pneu serait lisse depuis longtemps." },
      { t: "0, il ne fait que tourner autour de l’axe", r: "Celui qui est à 0, c’est le point au contact du sol. Celui du haut fonce plus fort que tout le reste de la roue." },
      { t: "La moitié de la vitesse du vélo", r: "Il n’est pas si flemmard. Le sommet est l’endroit le plus rapide de toute la roue." },
    ] },
    { lv: 4, q: "Une voiture monte une côte de 1 km à 30 km/h. Pour faire 60 km/h de moyenne sur l’aller-retour montée + descente, à quelle vitesse doit-elle descendre ?", issue: "Compte foncer à 90 en descente pour rattraper", opts: [
      { t: "90 km/h, car (30 + 90) ÷ 2, ça fait bien 60", r: "On ne fait pas la moyenne des vitesses. À 90, la descente prend 40 s ; 2 km en 160 s, ça fait 45 de moyenne." },
      { t: "120 km/h", r: "Moyenne : 48. Plus tu accélères, plus tu cours après une moyenne qui fuit." },
      { t: "Impossible, aucune vitesse ne suffit", ok: 1, r: "Exact. 2 km à 60 de moyenne, c’est 2 minutes en tout, et la montée a déjà pris les 2 minutes. Sauf téléportation." },
      { t: "180 km/h", r: "Même à 180, la moyenne dépasse à peine 51. Le PV est arrivé, la moyenne non." },
    ] },
  ],
};
