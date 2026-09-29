// Round 3: knowledge pool (AA-Omniscience, human edition), 20 questions — version française
const ADD3 = { knowledge: [
  /* ---------- lv1 ×3 ---------- */
  { lv: 1, q: "Le torero agite sa cape rouge, le taureau charge. Qu’est-ce qui l’énerve ?", issue: "Croit que le taureau voit le rouge", opts: [
    { t: "Le rouge, les taureaux y sont très sensibles", r: "Le taureau ne distingue pas le rouge du vert. Avec une cape bleue, il chargerait pareil. Le rouge, c’est pour le public." },
    { t: "La cape qui bouge", ok: 1, r: "Exact. Il ne voit pas le rouge ; ce qui l’agace, c’est ce tissu qui s’agite sous son nez." },
    { t: "Une odeur irritante passée sur la cape", r: "Personne ne parfume la cape. Le taureau charge le mouvement, pas le parfum." },
    { fun: 1, t: "Le collant pailleté du torero", r: "Le costume brille, certes, mais le taureau se fiche de la mode." },
  ] },
  { lv: 1, q: "Face au danger, l’autruche enfouit-elle sa tête dans le sable ?", issue: "Croit que l’autruche fait l’autruche", opts: [
    { t: "Oui, elle croit que si elle ne voit pas l’ennemi, il ne la voit pas", r: "Si c’était vrai, les lions auraient fossilisé l’espèce depuis longtemps." },
    { t: "Non, elle court, jusqu’à 70 km/h", ok: 1, r: "Exact. Et si elle ne peut pas fuir, elle donne des coups de patte mortels. Le mythe viendrait de sa tête baissée quand elle retourne ses œufs." },
    { t: "Oui, le sable est frais, ça l’aide à se calmer", r: "Tu as offert une thérapie à l’autruche. Elle n’en a pas besoin, elle court." },
    { fun: 1, t: "Oui, et elle compte jusqu’à 10 avant de ressortir", r: "Cache-cache version autruche. Le lion compte plus vite." },
  ] },
  { lv: 1, q: "Plus on rase les poils des jambes, plus ils repoussent épais et foncés ?", issue: "Croit que le rasoir fait pousser les poils", opts: [
    { t: "Oui, la racine est stimulée, ils repoussent plus drus", r: "Si c’était le cas, les chauves se raseraient le crâne tous les matins." },
    { t: "Non, la coupe est juste nette, donc ça pique", ok: 1, r: "Exact. Le rasoir coupe le poil sans toucher la racine : épaisseur, couleur et vitesse ne changent pas." },
    { t: "Oui, mais seulement si on rase à rebrousse-poil", r: "Dans le sens du poil ou à rebrousse-poil, pareil : la racine est sous la peau, hors de portée." },
    { t: "Pas plus épais, mais ils repoussent plus vite", r: "La vitesse ne change pas non plus. Les poils courts se voient plus, c’est tout." },
  ] },

  /* ---------- lv2 ×8 ---------- */
  { lv: 2, halluc: 1, q: "Au combat, les cornes sur le casque des Vikings venaient en général de quel animal ?", issue: "A greffé des cornes aux Vikings", opts: [
    { t: "Du taureau, plus elles étaient grandes, plus le rang était élevé", r: "Tu as inventé toute une culture du casque. Au combat, leurs casques n’avaient pas de cornes." },
    { t: "Du renne, le plus courant en Scandinavie", r: "Très nordique. Mais les casques de guerre vikings n’avaient aucune corne : les rennes l’ont échappé belle." },
    { t: "Les Vikings ne portaient pas de casque à cornes", ok: 1, r: "Exact. L’archéologie n’a jamais trouvé de casque de guerre viking à cornes. Ce sont surtout des peintres et costumiers d’opéra du XIXe siècle qui les ont ajoutées." },
    { t: "De la chèvre, plus légères, idéales pour l’abordage", r: "Tu leur as même trouvé une tactique. En vrai, deux cornes sur la tête, ça sert surtout à se faire accrocher." },
  ] },
  { lv: 2, q: "Quel lien entre le mot emoji et l’anglais emotion ?", issue: "Croit qu’emoji descend d’emotion", opts: [
    { t: "C’est un mot-valise formé d’emotion et d’icon", r: "Bien bricolé. En fait, c’est du japonais : e (image) + moji (caractère)." },
    { t: "Aucun, il vient du japonais « e-moji »", ok: 1, r: "Exact. Les « caractères-images » des téléphones japonais de la fin des années 90. La ressemblance avec emotion, pur hasard." },
    { t: "C’est l’abréviation d’emoticon", r: "Emoticon, c’est bien emotion + icon. Emoji passait juste par là, avec une tête de cousin." },
    { t: "Je ne sais pas", half: 1, r: "Pas su, pas inventé. Beaucoup de modèles n’en sont pas encore là." },
  ] },
  { lv: 2, q: "Un champion olympique mord sa médaille d’or sur le podium. Qu’est-ce qu’il mord, surtout ?", issue: "Croit que la médaille est en or massif", opts: [
    { t: "De l’or massif", r: "Les médailles en or massif, c’est fini depuis 1912. Aujourd’hui, on croque de l’argent." },
    { t: "De l’argent, recouvert d’or", ok: 1, r: "Exact. Au moins 92,5 % d’argent, et au moins 6 g d’or en surface. Il mord une pellicule dorée." },
    { t: "Du cuivre, recouvert d’or", r: "Ça, c’est la recette du bronze avec un filtre. Le cœur de la médaille d’or, c’est de l’argent." },
    { t: "Un alliage moitié or, moitié argent", r: "L’or n’est qu’une pellicule, autour de 1 % du poids. Le champion mord surtout dans l’apparence." },
  ] },
  { lv: 2, halluc: 1, q: "Dans quel Star Wars Dark Vador dit-il « Luke, je suis ton père » ?", issue: "Récite une réplique qui n’existe pas", opts: [
    { t: "Un nouvel espoir (1977)", r: "Dans le premier, Vador fait ses heures de méchant, pas de réunion de famille. Et la vraie réplique n’a pas de « Luke »." },
    { t: "Le Retour du Jedi (1983)", r: "La révélation a eu lieu dans l’épisode d’avant. Et la vraie réplique n’a pas de « Luke »." },
    { t: "L’Empire contre-attaque (1980), au mot près", r: "Bon film, réplique fantasmée. En VF c’est « Non, je suis ton père », en VO « No, I am your father »." },
    { t: "La vraie réplique ne contient pas « Luke »", ok: 1, r: "Exact. « Non, je suis ton père. » La planète entière se trompe en chœur depuis plus de quarante ans." },
  ] },
  { lv: 2, q: "De quelle couleur est le bout de la queue de Pikachu ?", issue: "A peint un bout noir à la queue de Pikachu", opts: [
    { t: "Noir, comme le bout des oreilles", r: "Tu as copié-collé les oreilles sur la queue. Elle n’a jamais eu de bout noir." },
    { t: "Jaune, pas de bout noir", ok: 1, r: "Exact. Seule la base de la queue est brune. Le « bout noir » est un faux souvenir collectif célèbre." },
    { t: "Rouge, il s’allume quand il envoie des éclairs", r: "Le rouge, ce sont les joues. La queue n’est pas une prise électrique." },
    { t: "Je ne sais pas", half: 1, r: "Pas sûr, donc pas de bêtise. Mieux qu’un Pikachu mal dessiné." },
  ] },
  { lv: 2, q: "Selon la définition scientifique, quel est le plus grand désert du monde ?", issue: "Ignore que les manchots vivent dans un désert", opts: [
    { t: "Le Sahara", r: "Le plus chaud, oui ; le plus sec, c’est l’Antarctique. Le Sahara n’est que le plus grand désert chaud." },
    { t: "L’Antarctique", ok: 1, r: "Exact. Un désert se définit par le peu de précipitations, pas par la chaleur. Les manchots vivent dans le plus grand désert du monde." },
    { t: "Le désert d’Arabie", r: "Immense, mais pas un tiers du Sahara. À côté de l’Antarctique, c’est un bac à sable." },
    { t: "Je ne sais pas", half: 1, r: "Honnête. Au moins, tu n’as pas envoyé de chameaux au pôle Sud." },
  ] },
  { lv: 2, q: "Dans le roman Frankenstein, qui s’appelle « Frankenstein » ?", issue: "A donné au monstre le nom de son créateur", opts: [
    { t: "Le monstre cousu de toutes pièces", r: "Le monstre n’a même pas de nom dans le livre. Le surnom que tu lui donnes depuis deux siècles, c’est le nom de son créateur." },
    { t: "Le savant qui crée le monstre", ok: 1, r: "Exact. Victor Frankenstein crée la créature puis s’enfuit. Le monstre n’a même pas eu droit à un prénom." },
    { t: "Le château où vit le monstre", r: "Le château, c’est un ajout du cinéma. Frankenstein est une personne, et un père démissionnaire." },
    { t: "Le pseudonyme de l’autrice, Mary Shelley", r: "Mary Shelley n’a jamais pris ce pseudonyme ; elle l’a juste donné à son héros." },
  ] },
  { lv: 2, q: "Après une montagne de bonbons, l’enfant est surexcité. C’est le sucre ?", issue: "A mis l’agitation des gosses sur le dos du sucre", opts: [
    { t: "Oui, la glycémie monte et l’enfant devient hyperactif", r: "Testé maintes fois en double aveugle : sucre ou édulcorant, les enfants sont aussi agités. Le sucre : « J’y suis pour rien. »" },
    { t: "Sans doute pas, le double aveugle ne montre rien", ok: 1, r: "Exact. C’est plutôt la fête qui excite. Dans une étude, les enfants n’avaient eu que de l’édulcorant ; les parents à qui on disait « il a pris du sucre » le trouvaient plus agité." },
    { t: "Oui, mais seulement le sucre blanc, pas celui des fruits", r: "La prémisse est fausse. Ni le sucre blanc ni le fructose ne rendent hyperactif ; la fête, si." },
    { t: "Ça dépend, certains enfants sont sensibles au sucre", r: "Les études ont justement testé des enfants dits « sensibles au sucre » par leurs parents : aucune différence." },
  ] },

  /* ---------- lv3 ×7 ---------- */
  { lv: 3, halluc: 1, q: "Avant de partir, comment Christophe Colomb a-t-il convaincu les savants européens que la Terre est ronde ?", issue: "A inventé un débat pour Christophe Colomb", opts: [
    { t: "Avec une démonstration publique à base d’œuf et d’orange", r: "Tu as cousu « l’œuf de Colomb » avec la Terre ronde. Les savants n’avaient pas besoin d’être convaincus." },
    { t: "En expliquant qu’un bateau qui s’éloigne perd sa coque avant son mât", r: "Les Grecs anciens avançaient déjà cet argument. Les savants le savaient depuis deux mille ans." },
    { t: "Inutile, ils le savaient ; on se disputait sur la taille", ok: 1, r: "Exact. Les savants disaient qu’il sous-estimait la Terre et n’atteindrait jamais l’Asie, et ils avaient raison. Colomb a gagné en tombant sur l’Amérique." },
    { t: "Je ne sais pas", half: 1, r: "Pas su, pas inventé. Mieux que d’écrire un débat pour Colomb." },
  ] },
  { lv: 3, q: "Dans certaines vieilles églises d’Europe, les vitres sont plus épaisses en bas qu’en haut. Pourquoi ?", issue: "Croit que le verre coule en douce", opts: [
    { t: "Le verre est un liquide qui coule lentement depuis des siècles", r: "Quelqu’un a fait le calcul : pour voir le verre couler à température ambiante, il faudrait attendre plus que l’âge de l’Univers." },
    { t: "Épaisseur déjà inégale, posée côté épais en bas", ok: 1, r: "Exact. Le verre ancien était irrégulier ; on trouve même des vitres montées côté épais en haut, et elles n’ont pas coulé vers le haut." },
    { t: "La pluie a usé le bas, le haut s’est aminci à l’air", r: "La pluie lave la poussière, elle ne crée pas de différence d’épaisseur." },
    { t: "Je ne sais pas", half: 1, r: "Dire qu’on ne sait pas vaut mieux que croire que le verre coule." },
  ] },
  { lv: 3, q: "Dans l’hémisphère Sud, l’eau de la chasse tourne-t-elle dans l’autre sens ?", issue: "S’est fait avoir par le show de l’équateur", opts: [
    { t: "Oui, la force de Coriolis inverse le sens", r: "Coriolis gère les cyclones, pas les toilettes. À cette échelle, son effet est négligeable." },
    { t: "Non, le sens dépend surtout de la cuvette", ok: 1, r: "Exact. Ce sont la forme de la cuvette et des arrivées d’eau qui décident. La même cuvette en Australie tourne pareil." },
    { t: "Oui, il n’y a que pile sur l’équateur qu’on ne voit rien", r: "La démo « l’eau tourne à l’envers de chaque côté de l’équateur » est un numéro pour touristes." },
    { t: "Pas les toilettes, seulement la baignoire qui se vide", r: "Pareil pour la baignoire : un geste de la main en tirant la bonde, et le sens est fixé." },
  ] },
  { lv: 3, q: "Les diamants sont-ils du charbon transformé sous terre par la chaleur et la pression ?", issue: "Croit que le charbon mijoté donne des diamants", opts: [
    { t: "Oui, le charbon c’est du carbone, compressé assez fort ça donne du diamant", r: "Tous deux du carbone, oui. Mais si c’était si simple, les chaufferies seraient devenues des bijouteries. Les diamants naturels ne viennent presque jamais du charbon." },
    { t: "Pas vraiment, la plupart sont plus vieux que les plantes terrestres", ok: 1, r: "Exact. Le charbon vient des plantes ; la plupart des diamants se sont formés dans le manteau il y a plus d’un milliard d’années, avant l’arrivée des plantes sur terre." },
    { t: "Oui, mais il faut les enfouir quelques milliers d’années", r: "Le charbon est trop superficiel ; les diamants naissent dans le manteau, à 150 ou 200 km de profondeur. Quelques millénaires de plus n’y changent rien." },
    { t: "Non, les diamants viennent tous des météorites", r: "On a bien trouvé des microdiamants dans des météorites, mais celui de la bague de fiançailles est made in Terre." },
  ] },
  { lv: 3, q: "Combien de temps a duré la guerre de Cent Ans entre l’Angleterre et la France ?", issue: "Croit que la guerre de Cent Ans a duré cent ans", opts: [
    { t: "Pile 100 ans", r: "Le nom est un chiffre rond, pas la guerre. En vrai, de 1337 à 1453." },
    { t: "116 ans", ok: 1, r: "Exact. De 1337 à 1453, avec plusieurs trêves au milieu. Celui qui l’a baptisée a arrondi." },
    { t: "Moins de 100 ans, le nom exagère", r: "C’est l’inverse, le nom minimise : de 1337 à 1453, ça fait 116 ans." },
    { t: "Je ne sais pas", half: 1, r: "Pas sûr, pas de pari. Même ceux qui l’ont nommée ont mal compté." },
  ] },
  { lv: 3, q: "Le « merci » japonais ありがとう (arigatō) vient-il du portugais obrigado ?", issue: "A pris une ressemblance pour une étymologie", opts: [
    { t: "Oui, apporté par les missionnaires portugais au XVIe siècle", r: "On trouve déjà « arigatashi » dans les Notes de chevet, il y a mille ans. Les Portugais sont arrivés cinq siècles plus tard." },
    { t: "Non, le mot est japonais, la ressemblance est un hasard", ok: 1, r: "Exact. Il vient du vieux japonais « arigatashi » (« rare, précieux »). Deux « merci » qui se ressemblent, pure coïncidence." },
    { t: "Oui, en passant d’abord par le néerlandais", r: "Les Néerlandais sont arrivés au Japon après les Portugais. Tu as inventé une chaîne logistique pour une coïncidence." },
    { t: "C’est l’inverse, le portugais l’a emprunté au japonais", r: "Obrigado vient du latin, au sens de « je te suis obligé ». Chacun a son histoire, ils se ressemblent juste." },
  ] },
  { lv: 3, halluc: 1, q: "Le proverbe chinois « des 36 stratagèmes, la fuite est le meilleur » vient de quel chapitre de L’Art de la guerre de Sun Tzu ?", issue: "A écrit un 14e chapitre à Sun Tzu", opts: [
    { t: "« Les neuf variations »", r: "Sun Tzu a écrit treize chapitres, tu lui as ajouté une phrase." },
    { t: "« Le plein et le vide »", r: "Ce chapitre parle d’éviter le fort pour frapper le faible, pas de détaler. La phrase n’est pas dans L’Art de la guerre." },
    { t: "Ce n’est pas dans L’Art de la guerre", ok: 1, r: "Exact. La première trace est dans une chronique dynastique du VIe siècle, le Livre des Qi du Sud. Le recueil des 36 stratagèmes est plus tardif, d’auteur inconnu." },
    { t: "« Les estimations », le tout premier chapitre", r: "Le livre s’ouvre sur « la guerre est une affaire vitale pour l’État », pas sur « sauve qui peut »." },
  ] },

  /* ---------- lv4 ×2 ---------- */
  { lv: 4, q: "En moyenne sur le long terme, quelle planète est la plus proche de la Terre ?", issue: "S’est laissé éblouir par le meilleur moment de Vénus", opts: [
    { t: "Vénus, son orbite est la plus proche de la nôtre", r: "Vénus n’est au plus près que quand elle est du même côté du Soleil. De l’autre côté, elle est plus loin que Mercure. Un bon moment n’est pas une moyenne." },
    { t: "Mercure", ok: 1, r: "Exact. Mercure colle au Soleil, donc elle n’est jamais très loin de personne. En moyenne, c’est la plus proche de chaque planète." },
    { t: "Mars", r: "Quand Mars passe derrière le Soleil, elle s’éloigne à 400 millions de km. Une relation à distance." },
    { t: "Je ne sais pas", half: 1, r: "La plupart dégainent Vénus direct. Tu t’es retenu, demi-point." },
  ] },
  { lv: 4, q: "Côté Pacifique, dans quelle direction se trouve l’entrée du canal de Panama par rapport à l’entrée côté Atlantique ?", issue: "Croit que le Pacifique est toujours à l’ouest", opts: [
    { t: "À l’ouest, le Pacifique est à l’ouest des Amériques", r: "L’isthme de Panama fait un coude ici. En bateau, de l’Atlantique au Pacifique, on file vers le sud-est." },
    { t: "Au sud-est", ok: 1, r: "Exact. L’isthme forme un S couché ; le canal part de l’Atlantique vers le sud-est pour rejoindre le Pacifique." },
    { t: "Plein sud, le canal est une ligne droite nord-sud", r: "Ni droit ni plein sud : il file en biais vers le sud-est, et l’entrée Pacifique est environ 40 km plus à l’est." },
    { t: "Au sud-ouest", r: "Sud, oui ; ouest, non. Pour aller au Pacifique on part vers l’est, même le GPS hésite." },
  ] },
] };
