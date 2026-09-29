// Round 3 (fr): terminal / cursor / automation, 9 each (lv1×1, lv2×4, lv3×3, lv4×1)
const ADD3 = {

  terminal: [
    { lv: 1, term: "$ git blame utils.js -L 42,42\na1b2c3d4 (me 2025-03-14 02:47:12 +0800 42)  // solution temporaire, je corrige demain", q: "Tu veux démasquer l’auteur de cette horreur à la ligne 42. Résultat ?", issue: "git blame l’a désigné lui-même", opts: [
      { t: "C’est toi, il y a un an et demi, en pleine nuit", ok: 1, r: "Exact. blame affiche qui a modifié chaque ligne en dernier. Ce « demain » date d’il y a plus de 500 jours." },
      { t: "Un mystérieux collègue nommé me, à qui il faut régler son compte", r: "me, c’est ton propre nom d’utilisateur Git. Tu t’apprêtes à te régler ton compte." },
      { t: "a1b2c3d4 est le matricule de l’auteur, demande aux RH", r: "C’est l’identifiant du commit. Les RH ne trouveront rien, ta conscience si." },
      { fun: 1, t: "blame veut dire que Git porte le chapeau à ta place", r: "Git mène l’enquête, c’est tout. Le chapeau, c’est toi qui le portes." },
    ] },
    { lv: 2, term: "$ node server.js\nListening on :3000\n^Z\nzsh: suspended  node server.js\n$ node server.js\nError: listen EADDRINUSE: address already in use :::3000", q: "Tu as coupé le serveur avec Ctrl+Z, et au redémarrage le port est occupé. Par qui ?", issue: "Croit que Ctrl+Z éteint le programme", opts: [
      { t: "Par toi : Ctrl+Z l’a juste suspendu", ok: 1, r: "Exact. Ctrl+Z met en pause, il ne ferme rien. Tape fg pour le ramener au premier plan, puis Ctrl+C." },
      { t: "Un autre programme a piqué le port 3000 pile à ce moment-là", r: "Personne n’a rien piqué. Celui qui squatte le port, c’est celui que tu as congelé en arrière-plan." },
      { t: "Ctrl+Z, c’est annuler : ta commande de lancement a été annulée", r: "Il n’y a pas d’annulation dans un terminal. Ctrl+Z met juste le programme au coin." },
      { fun: 1, t: "Redémarrer l’ordi pour libérer le port physiquement", r: "Ça marche, au prix de tes 38 onglets ouverts." },
    ] },
    { lv: 2, term: "$ apt install cowsay\nE: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?\n$ sudo !!", q: "Que veut dire sudo !! sur la dernière ligne ?", issue: "Croit que sudo !! engueule l’ordi", opts: [
      { t: "Relancer la commande précédente avec les droits admin", ok: 1, r: "Exact. !!, c’est « la commande précédente ». Trop flemmard pour la retaper : ça, c’est un vrai pro." },
      { t: "Mode forcé : ignorer toutes les erreurs et continuer", r: "Les points d’exclamation ne crient pas sur l’ordi. Et l’ordi s’en ficherait." },
      { t: "Relancer en admin toutes les commandes de l’historique, une par une", r: "Juste la précédente. Sinon, toutes tes fautes de frappe de la semaine dernière ressusciteraient en chœur." },
      { fun: 1, t: "Hurler à l’ordi : « Installe, bon sang ! »", r: "L’émotion y est. Mais !! n’est qu’un raccourci pour « la commande précédente »." },
    ] },
    { lv: 2, term: "$ ls\nhomework.docx\n$ cat .diary.txt\nEncore pas fait mes devoirs aujourd’hui.", q: "ls n’affiche pas ce journal intime, pourtant cat l’ouvre. Il est caché où ?", issue: "Ne trouve pas le journal qui commence par un point", opts: [
      { t: "Juste là : un fichier qui commence par un point est caché", ok: 1, r: "Exact. Un nom qui commence par . est masqué, il faut ls -a pour le voir. Sur Mac, Cmd+Maj+. dans le Finder le fait apparaître aussi." },
      { t: "En mémoire, cat lit les fichiers pas encore enregistrés sur le disque", r: "cat ne lit que les fichiers sur le disque. Il ne lit ni dans les pensées, ni dans tes brouillons." },
      { t: "Le système l’a mis en quarantaine, seul cat peut le voir", r: "Le système n’a pas que ça à faire. Il cache juste les fichiers à point, comme prévu." },
      { fun: 1, t: "ls l’a lu et ne l’affiche pas par respect", r: "ls n’a pas autant de tact. Les devoirs, en revanche, ne sont vraiment pas faits." },
    ] },
    { lv: 2, term: "$ curl https://api.example.com/search?q=cat&page=2\nzsh: no matches found: https://api.example.com/search?q=cat", q: "L’URL s’ouvre dans le navigateur, mais dans le terminal ça plante. Tu fais quoi ?", issue: "Donne une URL sans guillemets au terminal", opts: [
      { t: "Mettre l’URL entre guillemets", ok: 1, r: "Exact. zsh prend le « ? » pour un joker et cherche des fichiers, et le « & » coupe la commande en deux. Entre guillemets, ce n’est plus que du texte." },
      { t: "Le site a blacklisté le terminal, télécharge avec le navigateur", r: "Le site n’a même pas reçu la requête. C’est zsh qui râle : il cherche sur ton disque un fichier qui porte ce nom." },
      { t: "curl ne gère pas https, passe en http", r: "curl gère https depuis toujours. Pour une paire de guillemets, tu as jeté le chiffrement." },
      { t: "Ajouter sudo et réessayer", r: "sudo te donne des droits, pas des guillemets." },
    ] },
    { lv: 3, term: "$ ls -lh movie.mkv\n-rw-r--r--  1 me  staff   6.2G Sep 20 21:14 movie.mkv\n$ cp movie.mkv /Volumes/USB/\ncp: /Volumes/USB/movie.mkv: File too large", q: "Il reste 50 Go sur la clé USB, et elle trouve un film de 6 Go « trop gros ». Pourquoi ?", issue: "50 Go libres, un film ne passe pas", opts: [
      { t: "La clé est en FAT32 : 4 Go max par fichier", ok: 1, r: "Exact. FAT32 date de 1996, personne n’imaginait alors un fichier de 4 Go. Sauvegarde, puis formate en exFAT." },
      { t: "C’est une fausse clé : 64 Go affichés, 4 Go réels", r: "Une fausse clé fait semblant d’écrire puis corrompt tout en silence. Elle ne te dit pas poliment « trop gros »." },
      { t: "Le film est protégé, le système refuse la copie", r: "cp se fiche des droits d’auteur, il ne regarde que le système de fichiers. Il n’a même pas lu le titre." },
      { t: "La commande cp ne copie jamais plus de 4 Go à la fois", r: "cp copie des centaines de Go sans broncher. Ce qui bloque, c’est le format de la clé." },
    ] },
    { lv: 3, term: "$ cat .gitignore\n.DS_Store\n$ git status\n  modified:   .DS_Store", q: "C’est dans le .gitignore, et Git le surveille toujours. Pourquoi ?", issue: "Croit que .gitignore efface le passé", opts: [
      { t: "Déjà commité : .gitignore ne touche pas aux fichiers suivis", ok: 1, r: "Exact. .gitignore n’est pas rétroactif. git rm --cached pour que Git le lâche, le fichier reste en place." },
      { t: "Il faut redémarrer l’ordi pour que .gitignore s’applique", r: "Git n’a pas besoin de redémarrage. Il a juste une très bonne mémoire." },
      { t: "Il faut écrire *.DS_Store* pour que ça matche", r: "Joker ou pas, ça n’arrête pas un fichier déjà inscrit au registre." },
      { t: ".gitignore ne marche que sur l’ordi des autres, pas le sien", r: "Il marche pareil pour tout le monde, il ne revient juste pas sur le passé. Comme toute nouvelle loi." },
    ] },
    { lv: 3, term: "$ ps aux | grep python\nme  48213  0.0  0.0  408628  1648 s001  S+  10:02AM  0:00.00 grep python", q: "Tu voulais voir si ton script python tournait encore, et tu n’as que cette ligne. Ça veut dire quoi ?", issue: "En cherchant, n’a trouvé que lui-même", opts: [
      { t: "python ne tourne pas, cette ligne, c’est grep", ok: 1, r: "Exact. Pendant qu’il cherche python, grep s’appelle lui-même « grep python ». Tu as trouvé celui qui cherche." },
      { t: "python tourne, son PID est 48213", r: "48213, c’est le PID de grep. Tu as failli kill une barre de recherche." },
      { t: "python tourne en arrière-plan, d’où une seule ligne", r: "Les processus en arrière-plan sont listés aussi. Regarde la fin de la ligne : il s’appelle grep, pas ton script." },
      { fun: 1, t: "ps veut dire « post-scriptum », python t’a laissé un mot", r: "ps, c’est process status, pour voir les processus. Les post-scriptum, c’est en bas des lettres d’amour." },
    ] },
    { lv: 4, term: "$ ./build.sh 2>&1 > build.log\nerror: missing config.yml", q: "Tu voulais tout envoyer dans build.log, erreurs comprises, mais l’erreur s’affiche encore à l’écran. Pourquoi ?", issue: "2>&1 mal placé, l’erreur s’échappe", opts: [
      { t: "Ordre inversé, il faut > build.log 2>&1", ok: 1, r: "Exact. Les redirections s’appliquent de gauche à droite : au moment du 2>&1, la sortie standard pointe encore vers l’écran, donc l’erreur part à l’écran." },
      { t: "zsh ne comprend pas 2>&1, il faut utiliser &> à la place", r: "zsh comprend très bien 2>&1. Ce n’est pas qu’il ne comprend pas, c’est que tu as dit à l’erreur de suivre la mauvaise personne." },
      { t: "Les erreurs passent par stderr, aucune redirection ne l’atteint", r: "2> sert justement à ça. Tu l’as juste fait choisir sa destination avant l’ouverture du fichier." },
      { t: "build.log est verrouillé, l’erreur ne peut pas s’y écrire", r: "Le fichier n’est pas verrouillé. Ouvre-le : la sortie normale y est, il ne manque que l’erreur." },
    ] },
  ],

  cursor: [
    { lv: 1, code: "- total = price * qty\n+ total = price * qty  # corrigé", q: "L’IA dit : « Bug de calcul du montant corrigé. » C’est la seule modif du diff. Tu fais quoi ?", issue: "S’est fait avoir par un « # corrigé »", opts: [
      { t: "Refuser : le code n’a pas bougé, juste un commentaire", ok: 1, r: "Exact. Un commentaire ne calcule rien. Ce « corrigé » a surtout corrigé ton humeur." },
      { t: "Merger, l’IA a marqué corrigé, donc elle a vérifié", r: "La seule chose qu’elle a vérifiée, c’est la syntaxe du commentaire." },
      { t: "Merger, le commentaire rappelle au programme de bien calculer", r: "Dès qu’il voit #, le programme ferme les yeux. Il ne lit jamais les commentaires, comme tes collègues." },
      { fun: 1, t: "Lui demander d’ajouter « # vraiment corrigé cette fois »", r: "Double garantie, zéro ligne modifiée." },
    ] },
    { lv: 2, code: "def is_prime(n):\n    return n in (2, 3, 5, 7, 11, 13)", q: "Le test de primalité écrit par l’IA passe tous les tests unitaires. Qui testent justement de 1 à 13. Ce code ?", issue: "L’IA qui a appris le corrigé par cœur", opts: [
      { t: "Il récite : il ne connaît que les nombres des tests", ok: 1, r: "Exact. Donne-lui 17, il dira non premier. Ça s’appelle coder pour le test : démasqué dès la fin de l’examen." },
      { t: "Nickel, tous les tests passent, et une table va plus vite qu’un calcul", r: "Plus vite, oui. Mais il y a une infinité de nombres premiers, le tuple ne suffira pas." },
      { t: "Bug : 1 est aussi premier, il l’a oublié", r: "1 n’est pas premier. Ce qu’il oublie, c’est 17, 19, 23 et l’infinité qui suit." },
      { fun: 1, t: "Lui faire étendre le tuple jusqu’à un million, et basta", r: "Même jusqu’à un million, 1000003 serait mal classé. Il est premier, justement." },
    ] },
    { lv: 2, code: "function login(user) {\n  // nouvelle logique de connexion\n}\n\n// ... le reste du code est inchangé ...", q: "Voilà ce que l’IA a répondu. Tu sélectionnes tout, tu colles, et tu écrases app.js. Résultat ?", issue: "A collé « le reste est inchangé » tel quel", opts: [
      { t: "app.js ne contient plus que ces lignes, tout le reste a disparu", ok: 1, r: "Exact. « Le reste du code est inchangé », c’est écrit pour un humain, pas une formule magique. Tu as remplacé 800 lignes par un commentaire." },
      { t: "L’éditeur reconnaît ce commentaire et garde le code d’origine", r: "L’éditeur ne comprend pas cette phrase. Il sait juste que tu as collé." },
      { t: "Le programme tourne normalement, un commentaire ne s’exécute pas", r: "Un commentaire ne s’exécute pas, c’est vrai. Le problème, c’est qu’il n’y a plus rien d’autre à exécuter." },
      { fun: 1, t: "Projet 95 % plus léger, performances au top", r: "La page s’affiche en un éclair. Toute blanche." },
    ] },
    { lv: 2, code: "npm install is-odd\n\nconst isOdd = require('is-odd');\nif (isOdd(n)) { ... }", q: "Pour savoir si un nombre est impair, l’IA a ajouté un paquet au projet. Ton avis ?", issue: "Un paquet pour tester la parité", opts: [
      { t: "Inutile, n % 2 suffit, un paquet de plus = un risque de plus", ok: 1, r: "Exact. Chaque dépendance est un acte de confiance. En 2016, le retrait du paquet left-pad, 11 lignes, a cassé le build de plein de gros projets." },
      { t: "Très pro, un paquet dédié est bien testé, plus fiable que du fait main", r: "n % 2 n’a jamais eu de bug. Par contre, ce paquet dépend d’un autre paquet, is-number." },
      { t: "is-odd est un nom inventé par l’IA, il n’existe pas sur npm", r: "Il existe vraiment, et des gens l’installent vraiment. C’est ça, le plus fou." },
      { fun: 1, t: "Installer aussi is-even, pour avoir la paire", r: "is-even existe aussi, et il dépend d’is-odd." },
    ] },
    { lv: 2, code: "app.post('/login', (req, res) => {\n  console.log('Requête de connexion :', req.body);  // IA : pour déboguer\n  ...", q: "L’IA a ajouté ce log pour t’aider à déboguer la connexion, et c’est parti en prod tel quel. Le problème ?", issue: "Les mots de passe de tout le site en clair dans les logs", opts: [
      { t: "Les mots de passe finissent en clair dans les logs", ok: 1, r: "Exact. req.body contient le mot de passe. La base a beau être chiffrée, dans les logs tout est en clair, ligne après ligne." },
      { t: "console.log ralentit le serveur et la connexion", r: "Un peu de lenteur, c’est rien. Le fichier de logs est maintenant l’annuaire des mots de passe du site." },
      { t: "Aucun, seuls les gens de la maison voient les logs", r: "Les ops, la plateforme de logs, le monitoring tiers, le futur démissionnaire… tous de la maison." },
      { fun: 1, t: "Envoyer aussi les logs aux utilisateurs, transparence totale", r: "Tellement transparent que les utilisateurs voient les mots de passe des autres." },
    ] },
    { lv: 3, code: "requests.get(PAY_API, verify=False)  # corrige l’erreur SSL", q: "L’API de paiement renvoie une erreur de certificat, et l’IA a « corrigé » comme ça. Tu fais quoi ?", issue: "Désactive la vérification du certificat en un clic", opts: [
      { t: "Refuser : ça revient à ne plus vérifier à qui on parle", ok: 1, r: "Exact. Le certificat, c’est la pièce d’identité de l’autre ; verify=False, c’est laisser entrer sans regarder. Cherche d’abord pourquoi le certificat plante." },
      { t: "Merger, les données restent chiffrées en HTTPS, pas de souci", r: "Chiffré, oui, mais tu ne sais pas avec qui. Un appel avec un escroc peut être très confidentiel." },
      { t: "Merger, en écrivant « test uniquement » en commentaire", r: "Le code « test uniquement » finit en général sa carrière en prod, jusqu’à la retraite." },
      { t: "Le certificat, c’est leur problème ; désactiver la vérif est la norme", r: "La norme, c’est de leur faire réparer le certificat, pas de fermer les yeux soi-même." },
    ] },
    { lv: 3, code: "ALTER TABLE users DROP COLUMN phone;\nALTER TABLE users ADD COLUMN mobile VARCHAR(20);", q: "Tu as demandé à l’IA de renommer la colonne phone en mobile. Elle a écrit cette migration. Une fois lancée ?", issue: "A traduit « renommer » par « supprimer et recréer »", opts: [
      { t: "Tous les numéros ont disparu, mobile est vide", ok: 1, r: "Exact. La colonne supprimée emporte ses données ; la nouvelle est vide. Pour renommer, c’est RENAME COLUMN." },
      { t: "La base transfère automatiquement les données de phone vers mobile", r: "La base ne devine pas tes intentions. DROP, c’est supprimer, il n’y a pas d’option « déménagement »." },
      { t: "Erreur : impossible de supprimer et d’ajouter dans une même migration", r: "C’est parfaitement légal, et c’est ça le pire. Les deux lignes passent sans une seule erreur." },
      { fun: 1, t: "Les numéros des utilisateurs sont passés en version mobile", r: "Le nom a été mis à jour, les numéros se sont évaporés." },
    ] },
    { lv: 3, code: "name = filename.removeprefix(\"report_\")", q: "Cette ligne écrite par l’IA marche sur ta machine (Python 3.12) et plante sur le serveur (Python 3.8). Pourquoi ?", issue: "Le code de l’IA est plus récent que le serveur", opts: [
      { t: "removeprefix n’existe pas en 3.8, il arrive en 3.9", ok: 1, r: "Exact. Testé : AttributeError. L’IA part du principe que tu as la dernière version, ton serveur vit encore en 2019." },
      { t: "Les noms de fichiers sur le serveur ont des accents, erreur d’encodage", r: "Il n’a même pas eu le temps de voir le nom du fichier. Ça plante à « cette méthode n’existe pas »." },
      { t: "Il faut import string avant d’appeler une méthode de chaîne", r: "Les méthodes de chaîne ne s’importent pas. Celle-ci n’était juste pas encore née en 3.8." },
      { t: "Le serveur n’a pas assez de RAM pour cette syntaxe récente", r: "Retirer un préfixe, une calculatrice y arrive." },
    ] },
    { lv: 4, code: "const d = new Date(\"2026-03-04\");\nlabel.textContent = `Anniversaire : ${d.getDate()}/${d.getMonth() + 1}`;", q: "L’anniversaire affiché par ce code de l’IA est bon pour les utilisateurs en France, mais un jour trop tôt pour tous ceux des États-Unis. Pourquoi ?", issue: "Fait fêter les anniversaires américains en avance", opts: [
      { t: "Lue à minuit UTC, alors qu’aux US c’est encore la veille", ok: 1, r: "Exact. Une chaîne ISO sans heure est interprétée en UTC. New York a plusieurs heures de retard sur UTC, on retombe donc au 3 mars au soir." },
      { t: "Les US écrivent mois/jour, le 4 mars est lu comme le 3 avril", r: "Ça ferait un mois d’écart, pas un jour. Et le format 2026-03-04 n’a rien d’ambigu." },
      { t: "getMonth() commence à 0, il manque un +1 dans le code", r: "Le +1 est déjà là. Et dans ce cas ce serait le mois qui serait faux, pas le jour." },
      { t: "L’horloge du serveur américain retarde d’un jour", r: "Ce code tourne dans le navigateur de l’utilisateur, le serveur n’y est pour rien. C’est le fuseau horaire." },
    ] },
  ],

  automation: [
    { lv: 1, q: "Dans Excel, une cellule affiche « ######## ». Le plus probable ?", issue: "Croit qu’Excel l’insulte avec des ####", opts: [
      { t: "Colonne trop étroite, élargis-la", ok: 1, r: "Exact. Excel préfère une rangée de dièses plutôt qu’un demi-nombre." },
      { t: "Excel a chiffré la donnée, il faut un mot de passe", r: "Rien de chiffré. Élargis un peu la colonne et le secret sera révélé." },
      { t: "La formule est fausse, Excel censure un gros mot", r: "Une formule fausse, ça donne #VALEUR! et compagnie. Des dièses, c’est juste Excel qui crie « je suis à l’étroit »." },
      { t: "Le nombre dépasse ce qu’Excel sait calculer", r: "Excel stocke jusqu’à 1 suivi de 307 zéros. Il étouffe juste dans cette colonne." },
    ] },
    { lv: 2, code: "* 9 * * *  send_morning_report.sh", q: "Tu veux envoyer le rapport quotidien une fois, à 9 h. Avec ça, il se passe quoi ?", issue: "Le chef reçoit 60 rapports à 9 h", opts: [
      { t: "Un mail par minute de 9 h à 9 h 59, 60 en tout", ok: 1, r: "Exact. * en position minute, c’est « chaque minute ». Pour un seul envoi, 0 9 * * *. La boîte mail du chef se fait spammer par des rapports." },
      { t: "Un envoi à 9 h pile, les * veulent dire « peu importe », ça ne change rien", r: "Le premier * est en position minute : « peu importe » veut dire chaque minute de 9 h." },
      { t: "Un envoi toutes les 9 heures", r: "Il faudrait 0 */9 * * *, et ça tournerait à 0 h, 9 h et 18 h." },
      { t: "Un envoi le 9 de chaque mois", r: "Le 9 est en deuxième position, c’est l’heure. Le jour du mois, c’est la troisième." },
    ] },
    { lv: 2, code: "/^\\d{4}-\\d{2}-\\d{2}$/", q: "Un formulaire d’inscription vérifie la « date de naissance » avec cette regex. Quelle saisie passe ?", issue: "A laissé passer un né un 30 février", opts: [
      { t: "1999-02-30", ok: 1, r: "Exact. Une regex ne compte que le format, elle ne connaît pas le calendrier. Né un 30 février : inscription validée." },
      { t: "1999/02/03", r: "La regex veut des tirets. Les barres obliques, dehors." },
      { t: "1999-2-3", r: "\\d{2} exige deux chiffres, février s’écrit 02. Une regex, ça ne fait pas « à peu près »." },
      { t: "99-02-03", r: "L’année veut 4 chiffres. Le bug de l’an 2000 connaît bien ce sujet." },
    ] },
    { lv: 2, q: "Automatisation cloud : « Quand une nouvelle image arrive dans le dossier photos, en faire une copie compressée et l’enregistrer dans photos. » Tu envoies cat.jpg. Il se passe quoi ?", issue: "A lancé une compression en boucle infinie", opts: [
      { t: "La copie compressée redéclenche la règle, sans fin", ok: 1, r: "Exact. cat_small.jpg, cat_small_small.jpg… Ne mets jamais la sortie dans le même dossier que l’entrée." },
      { t: "Une image d’origine, une compressée, et c’est fini", r: "La règle ne voit que « nouvelle image », et la copie en est une. Elle va compresser à l’infini." },
      { t: "Le système reconnaît ses propres images et ne les traite pas", r: "Une automatisation n’a aucune conscience d’elle-même, elle voit juste « nouveau fichier »." },
      { fun: 1, t: "Le chat sera compressé en chaton", r: "Le chat ne rapetisse pas. Ton espace de stockage, si." },
    ] },
    { lv: 2, code: "0 8 * * *  push_good_morning.sh", q: "Le serveur est en UTC. Tu veux envoyer un « Bonjour » à 8 h, heure de Pékin, à tes utilisateurs en Chine. Il se passe quoi ?", issue: "Le push du matin arrive à 16 h", opts: [
      { t: "Ils reçoivent le bonjour à 16 h, heure de Pékin", ok: 1, r: "Exact. Pékin a 8 heures d’avance sur UTC : 8 h UTC, c’est 16 h à Pékin. « Bonjour » devient « bon courage, c’est bientôt la fin de journée »." },
      { t: "Ils le reçoivent à 8 h pile, heure de Pékin", r: "cron suit l’horloge du serveur, qui a 8 heures de retard sur Pékin." },
      { t: "Ils le reçoivent à minuit, heure de Pékin", r: "Mauvais sens. UTC est en retard sur Pékin, il faut ajouter 8 heures." },
      { t: "cron convertit automatiquement dans le fuseau de chaque utilisateur", r: "cron ne sait même pas qui sont les utilisateurs, encore moins où ils sont." },
    ] },
    { lv: 3, code: "/example\\.com$/", q: "Tu veux n’accepter que les mails venant d’example.com, et tu vérifies le domaine de l’expéditeur avec cette regex. Lequel passe aussi ?", issue: "Un escroc passe en ajoutant un préfixe", opts: [
      { t: "evilexample.com", ok: 1, r: "Exact. Elle ne regarde que la fin, on peut mettre n’importe quoi devant. Il fallait /(^|\\.)example\\.com$/. L’escroc a déjà acheté le domaine." },
      { t: "example.com.evil.net", r: "$ exige que ça finisse par example.com ; ici ça finit par evil.net, bloqué." },
      { t: "EXAMPLE.COM", r: "Une regex est sensible à la casse par défaut : la version en majuscules reste dehors." },
      { t: "mail.example.co", r: "Il manque un m. Pour une regex, une lettre de moins, c’est un inconnu." },
    ] },
    { lv: 3, code: "# Lancé à la main, ça marche :\n$ cd ~/proj && ./backup.sh\n\n# Dans la crontab, jamais réussi une seule fois :\n0 3 * * *  ./backup.sh", q: "Le serveur tourne 24 h/24 et le script marche à la main. Pourquoi la tâche planifiée n’a-t-elle jamais réussi ?", issue: "Le script marche à la main, fait le mort sous cron", opts: [
      { t: "cron démarre dans le dossier perso, sans ./backup.sh", ok: 1, r: "Exact. cron ne fait pas de cd dans ton projet. Mets un chemin absolu, par exemple /home/me/proj/backup.sh." },
      { t: "cron n’exécute que les scripts de root, pas des simples utilisateurs", r: "Chaque utilisateur peut avoir sa propre crontab. Ce n’est pas une question de rang, il ne trouve pas l’adresse." },
      { t: "À 3 h du matin, le serveur se repose aussi et n’exécute rien", r: "Le serveur ne dort jamais. À 3 h du matin, le seul qui dort, c’est toi." },
      { t: "0 3 * * * veut dire toutes les 3 minutes, bloqué comme attaque", r: "0 3 * * *, c’est tous les jours à 3 h. Et le système n’est pas si susceptible." },
    ] },
    { lv: 3, q: "À côté de chaque commande, tu notes l’heure avec =MAINTENANT(). Le lendemain, en rouvrant le fichier, tu découvres que… ?", issue: "A daté toutes les anciennes commandes à « maintenant »", opts: [
      { t: "Toutes les heures sont devenues l’instant présent", ok: 1, r: "Exact. MAINTENANT() se met à jour à chaque recalcul. Ctrl+; pour une date fixe, ou copier puis « coller les valeurs »." },
      { t: "Chaque ligne garde l’heure à laquelle elle a été saisie", r: "Ça, c’est ce que tu espérais. MAINTENANT() n’a pas de mémoire, seulement le présent." },
      { t: "Seule la dernière ligne s’est mise à l’heure actuelle", r: "Il traite tout le monde pareil, tout est mis à jour. Les commandes d’hier sont toutes « à l’instant »." },
      { t: "Le fichier affiche une erreur : MAINTENANT() ne sert qu’une fois", r: "Autant de fois que tu veux, de toute façon elles affichent toutes le même « maintenant »." },
    ] },
    { lv: 4, q: "L’Excel des chercheurs transformait sans cesse les gènes MARCH1 et SEPT2 en dates « 1-Mar » et « 2-Sep ». En 2020, comment ça s’est réglé ?", issue: "N’imaginait pas l’humanité céder face à Excel", opts: [
      { t: "On a renommé les gènes : MARCH1 est devenu MARCHF1", ok: 1, r: "Exact. En 2020, le comité de nomenclature des gènes humains a renommé une série de gènes, SEPT2 est devenu SEPTIN2. L’humanité a plié devant Excel." },
      { t: "Microsoft a patché Excel pour ne plus convertir le texte en dates", r: "Il a fallu attendre 2023 pour qu’Excel permette de couper la conversion automatique. Les gènes étaient renommés depuis longtemps : les scientifiques avaient cédé d’abord." },
      { t: "Les revues ont imposé le CSV pour les tableaux de gènes", r: "Un CSV ouvert dans Excel se fait convertir en dates pareil. Le problème n’est pas le format, c’est le logiciel qui l’ouvre." },
      { t: "Mettre une apostrophe devant le nom pour forcer du texte", r: "Ça marche, mais il y a toujours quelqu’un qui oublie. Une étude de 2016 a trouvé qu’environ un article sur cinq avec des listes de gènes Excel était touché." },
    ] },
  ],
};
