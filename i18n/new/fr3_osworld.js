/* 第三轮扩题 · 电脑操作（osworld 池）新增 12 道 — version française. Styles : i18n/new/add3_ui.css (préfixe x3-) */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>Point hebdo · 42:17</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">Bo</span><em>Le boss</em></div>
      <div class="x3-tile"><span class="x3-av">A</span><em>Collègue A</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">B</span><em>Collègue B</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">V</span><em>Vous</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>Muet</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>Vidéo</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>Chat</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">Quitter</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat">
      <div class="x3-ct">Projet – toute l’équipe (58)</div>
      <div class="x3-msg"><span class="x3-ava">Boss</span><p>Je veux le dossier sur le groupe avant 20 h.</p></div>
      <div class="x3-msg me"><p>Encore du vent, il sait même pas écrire les siens</p><span class="x3-ava me">Moi</span></div>
      <div class="x3-menu" style="padding:6px 2px;margin-left:0">
        <button class="hs x3-mi" data-opt="0" style="flex:1;min-width:0;font-size:10.5px;padding:4px 1px;line-height:1.2;text-align:center"><span class="x3-mic2 del"></span>Supprimer pour moi</button>
        <button class="hs x3-mi" data-opt="1" style="flex:1;min-width:0;font-size:10.5px;padding:4px 1px;line-height:1.2;text-align:center"><span class="x3-mic2 fwd"></span>Transférer</button>
        <button class="hs x3-mi" data-opt="2" style="flex:1;min-width:0;font-size:10.5px;padding:4px 1px;line-height:1.2;text-align:center"><span class="x3-mic2 quo"></span>Répondre</button>
        <button class="hs x3-mi" data-opt="3" style="flex:1;min-width:0;font-size:10.5px;padding:4px 1px;line-height:1.2;text-align:center"><span class="x3-mic2 rec"></span>Supprimer pour tous</button>
      </div>
      <div class="x3-time">À l’instant</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Imprimer · Rapport annuel.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>Impr.</span><button class="hs x3-sel" data-opt="3">Bureau 3e – Laser<i>▾</i></button></div>
      <div class="x3-pr-row"><span>Copies</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>Pages</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>Toutes (300 pages)</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Plage<span class="x3-inp ph">ex. 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>Papier estimé : 300 feuilles</span><button class="hs x3-pr-go" data-opt="2">Imprimer</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">Choisissez ce que vous partagez</div>
      <div class="x3-ss-cap">ÉCRAN</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>Chasseur de têtes : le salaire se discute, on se voit demain ?</em><u>démission.docx</u></span>
        <b>Écran entier</b></button>
      <div class="x3-ss-cap">FENÊTRE</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Projet T3</em></span><b>projet.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs"><i class="l"></i><i class="r"></i><i class="l s"></i></span><b>WhatsApp (3)</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>Partager aussi le son</span><button class="hs x3-ss-go" data-opt="3">Partager</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Installation de MégaPlayer</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>MégaPlayer 2026</b><small>HD · Fluide · Gratuit à vie</small></div>
      <button class="hs x3-in-go" data-opt="0">Installation express</button>
      <div class="x3-in-bundle">L’installation express installe aussi : MégaNavigateur (par défaut), MégaAntivirus, MégaClavier, et définit MégaRecherche comme page d’accueil</div>
      <div class="x3-in-path">Dossier : C:\\Program Files\\MégaPlayer<button class="hs x3-in-lnk" data-opt="3">Modifier</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span>J’accepte le <button class="hs x3-in-lnk" data-opt="2">Contrat de licence</button></span><button class="hs x3-in-lnk" data-opt="1">Personnalisée ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">Boîte de réception</span><span class="tab on">Modèle de CV gratuit<button class="hs tab-x" data-opt="2" aria-label="Fermer l’onglet">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>Je ne suis pas un robot</b><small>Vérification</small></div>
        <div class="x3-cf-t">Dernière étape : effectuez la vérification</div>
        <ol class="x3-cf-steps"><li>Appuyez sur <kbd>Win</kbd> + <kbd>R</kbd></li><li>Appuyez sur <kbd>Ctrl</kbd> + <kbd>V</kbd></li><li>Appuyez sur <kbd>Entrée</kbd></li></ol>
        <div class="x3-cf-id">ID de vérification : #71362</div>
        <button class="hs x3-cf-go" data-opt="0">J’ai terminé ces étapes</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">Autre méthode</button><button class="hs x3-cf-lnk" data-opt="3">Voir le tutoriel vidéo</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Notes.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>Nom</td><td class="sel">Note</td></tr>
        <tr><th>2</th><td>Dupont</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>Durand</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>Martin</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">Avertissement de tri</div>
        <div class="x3-xl-p">Microsoft Excel a trouvé des données à côté de votre sélection. Comme elles ne sont pas sélectionnées, elles ne seront pas triées.</div>
        <div class="x3-xl-p b">Que voulez-vous faire ?</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Étendre la sélection</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>Continuer avec la sélection en cours</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">Annuler</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">Partager « Salaires 2026.xlsx »</div>
      <div class="x3-sh-in">Ajouter des personnes, groupes ou e-mails</div>
      <div class="x3-sh-cap">Personnes avec accès</div>
      <div class="x3-sh-p"><span class="x3-sh-av">V</span><span>Vous<small>Propriétaire</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">C</span><span>Compta<small>compta@ourco.com</small></span><em>Lecteur</em></div>
      <div class="x3-sh-cap">Accès général</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">Tous ceux qui ont le lien ▾</button><small>Toute personne disposant du lien peut modifier</small></div>
        <button class="hs x3-sh-dd" data-opt="2">Éditeur ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">Copier le lien</button><button class="hs x3-sh-done" data-opt="0">OK</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>Sécurité du compte · maintenant</div>
      <div class="x3-mfa-t">Essayez-vous de vous connecter ?</div>
      <div class="x3-mfa-info">PC Windows · Lieu inconnu · À l’instant</div>
      <div class="x3-mfa-hint">Touchez le nombre affiché sur l’ordinateur</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">Non, ce n’est pas moi</button>
    </div>
    <div class="x3-mfa-cnt">5e demande cette nuit</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Boîte de réception</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">[URGENT] Virement avant ce soir</div>
      <button class="hs x3-ml-hd" data-opt="0"><span style="width:64px;white-space:nowrap">De</span><b>P. Martin</b>&lt;martin@ourco.com&gt;</button>
      <div class="x3-ml-hd"><span style="width:64px;white-space:nowrap">À</span>moi</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span style="width:64px;white-space:nowrap">Répondre à</span>martin.ourco@gmail.com</button>
      <div class="x3-ml-body">Bonjour, <button class="hs x3-ml-s" data-opt="3">je suis en réunion, je ne peux pas prendre d’appel.</button> Le fournisseur a changé de RIB, l’ordre de virement est en PJ. À régler impérativement aujourd’hui, réponds-moi directement une fois fait.<small>Envoyé de mon iPhone</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>Virement_nouveau_RIB.pdf<small>86 Ko</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>Facture_0927.doc [Mode protégé] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="Fermer">×</button></div>
    <div class="x3-pv"><b>MODE PROTÉGÉ</b>Attention : les fichiers provenant d’Internet peuvent contenir des virus. Si vous n’avez pas besoin de modifier ce document, il est préférable de rester en mode protégé.<button class="hs x3-pv-btn" data-opt="0">Activer la modification</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>Ce document a été créé avec une version plus récente d’Office. Pour afficher le contenu, cliquez sur « Activer la modification » en haut, puis sur « Activer le contenu ».<span>Voir la facture</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Chrome Web Store · capture</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">IA</span><span class="x3-ex-m"><b>Assistant Capture IA<em>Sponsorisé</em></b><small>★ 4,9 · 500 000 utilisateurs · IA gratuite après capture</small><u>Nécessite : lire et modifier vos données sur tous les sites, lire et modifier le presse-papiers</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>Capture Master Pro<em class="f">Sélection</em></b><small>★ 4,9 · 3 000 000 utilisateurs</small><u>Nécessite : lire et modifier vos données sur tous les sites, consulter votre historique</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">É</span><span class="x3-ex-m"><b>Capture Éclair</b><small>★ 4,8 · 1 200 000 utilisateurs</small><u>Nécessite : lire et modifier vos données sur tous les sites, gérer vos téléchargements, communiquer avec d’autres applis de l’ordinateur</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">S</span><span class="x3-ex-m"><b>Capture Simple</b><small>★ 4,4 · 60 000 utilisateurs</small><u>Nécessite : aucune autorisation spéciale (accède à la page seulement quand vous cliquez)</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "En pleine visio, tu veux te tourner pour râler sur le boss avec ton coloc. D’abord, s’assurer que le boss n’entend rien : tu cliques où ?", ui: "x3meet", issue: "A cru que le bouton « Muet » voulait dire « déjà muet »",
      opts: [
        { t: "Muet", ok: 1, r: "Exact. Un bouton dit ce qu’il va faire. S’il affiche encore « Muet », ton micro était ouvert depuis le début, et tout le monde a entendu ton soupir." },
        { t: "Vidéo", r: "Le boss ne t’entend pas, mais il te voit. Tes yeux levés au ciel, en HD et en direct." },
        { t: "Chat", r: "Tu as tapé ta pique dans le chat de la réunion. Destinataire par défaut : tout le monde." },
        { t: "Quitter", r: "Le boss ne t’entend plus, c’est sûr. Trois secondes plus tard, en privé : « T’as été coupé ? »" },
      ] },
    { lv: 2, q: "Tu as posté ta pique contre le boss dans le groupe WhatsApp de 58 personnes où il est. Appui long sur le message : tu touches quoi ?", ui: "x3recall", issue: "A cru que « Supprimer pour moi » le cachait au boss",
      opts: [
        { t: "Supprimer pour moi", r: "Tu l’as supprimé de ton téléphone, c’est tout. Chez le boss, il est bien là. Loin des yeux, pas loin du boss." },
        { t: "Transférer", r: "Où que tu l’envoies, il ne quittera pas le groupe. Par contre, ça fait un témoin de plus." },
        { t: "Répondre", r: "Tu réponds à ta propre pique, qui s’affiche en citation. Le boss peut la lire deux fois." },
        { t: "Supprimer pour tous", ok: 1, r: "Exact, et tu as environ deux jours pour le faire. Mais le groupe verra « Ce message a été supprimé », et 58 personnes se demandent maintenant ce que tu as écrit." },
      ] },
    { lv: 2, q: "PDF de 300 pages, tu veux imprimer seulement la page 3. Tu cliques où ?", ui: "x3print", issue: "A pris « Copies » pour « numéro de page »",
      opts: [
        { t: "Pages : Plage", ok: 1, r: "Exact. Tape 3 dans la plage, une seule feuille. L’imprimante et les services généraux respirent." },
        { t: "Copies : mettre 3", r: "Tu as imprimé 3 exemplaires de 300 pages. L’imprimante crache jusqu’au soir, les services généraux te cherchent." },
        { t: "Imprimer direct", r: "300 pages, pas une de moins. Ta page 3 est quelque part dedans, bonne chance." },
        { t: "Changer d’imprimante", r: "Autre imprimante, mêmes 300 pages. Tu as juste changé l’endroit où ça crache." },
      ] },
    { lv: 2, q: "Tu présentes ton projet à un client, tu veux qu’il ne voie que le PowerPoint. Tu cliques où ?", ui: "x3share", issue: "A partagé tout l’écran, le chasseur de têtes en direct",
      opts: [
        { t: "Écran entier", r: "Le client a vu ton bureau, un fichier nommé « démission.docx », et le chasseur de têtes qui écrit « le salaire se discute »." },
        { t: "Fenêtre projet.pptx", ok: 1, r: "Exact. Le client ne voit que le PPT, ni « démission.docx » ni le chasseur de têtes qui te demande « on se voit demain ? »." },
        { t: "Fenêtre WhatsApp", r: "Le client a suivi en direct ta conversation avec ta mère : « Il fait froid, t’as mis un pull ? »" },
        { t: "Partager direct", r: "Par défaut, c’est « Écran entier ». Tu as diffusé ton bureau en un clic, pile quand le message du chasseur de têtes est apparu." },
      ] },
    { lv: 2, q: "Tu veux juste installer le lecteur vidéo, rien d’autre. Tu cliques où ?", ui: "x3install", issue: "« Installation express » : s’est tapé toute la famille",
      opts: [
        { t: "Installation express", r: "C’est installé : lecteur, navigateur, antivirus, clavier, et ta page d’accueil est devenue MégaRecherche. Toute la famille est là." },
        { t: "Personnalisée", ok: 1, r: "Exact. Ce qui est « express », c’est le nombre d’installations pour l’éditeur. Clique sur Personnalisée et décoche toute la rangée précochée." },
        { t: "Contrat de licence", r: "Tu as lu les 18 000 mots. C’était écrit noir sur blanc : on t’installe toute la famille." },
        { t: "Modifier le dossier", r: "Toute la famille s’est installée sur le disque D. Nouvelle adresse, même famille." },
      ] },
    { lv: 3, q: "Pour télécharger un modèle, il faut une vérification anti-robot. Une fois « Je ne suis pas un robot » coché, ça affiche ça. Tu cliques où ?", ui: "x3clickfix", issue: "Un captcha lui a dit d’appuyer sur Win+R, il l’a fait",
      opts: [
        { t: "J’ai terminé ces étapes", r: "Win+R ouvre « Exécuter », Ctrl+V colle la commande que la page a glissée en douce dans ton presse-papiers, Entrée l’exécute. Tu t’es piraté toi-même, en trois étapes. Efficace." },
        { t: "Autre méthode", r: "L’« autre méthode » de la fausse page : Win+X, ouvrir le terminal, coller. Même destination." },
        { t: "Fermer l’onglet", ok: 1, r: "Exact. Un vrai captcha te fait chercher des feux tricolores, jamais appuyer sur Win+R. Ça s’appelle ClickFix, et c’est partout depuis 2024." },
        { t: "Voir le tutoriel vidéo", r: "Le tuto est très clair : comment ouvrir soi-même la porte au cheval de Troie." },
      ] },
    { lv: 3, q: "Tu as sélectionné seulement la colonne « Note » et cliqué sur Tri décroissant. Ça s’affiche. Pour que les noms suivent leurs notes, tu choisis quoi ?", ui: "x3sort", issue: "N’a trié qu’une colonne, Dupont a hérité du 92",
      opts: [
        { t: "Étendre la sélection", ok: 1, r: "Exact. Toute la ligne déménage ensemble, et le 92 de Durand reste à Durand." },
        { t: "Continuer avec la sélection en cours", r: "Les notes sont triées, les noms n’ont pas bougé : Dupont a récupéré le 92 de Durand. Sur un tableau de mille lignes, plus personne ne sait qui a eu quoi." },
        { t: "Annuler", r: "Le tableau est sauf, mais rien n’est trié. Tu as fermé le problème, le problème est toujours là." },
      ] },
    { lv: 3, q: "Le fichier des salaires ne doit être visible que par la compta. La compta est déjà dans la liste. Tu cliques où ensuite ?", ui: "x3link", issue: "Salaires « modifiables par tous ceux qui ont le lien »",
      opts: [
        { t: "OK", r: "La compta l’a reçu. Au passage, toute personne qui a le lien peut le modifier. Demain, toute la boîte sait qui gagne le plus." },
        { t: "Tous ceux qui ont le lien", ok: 1, r: "Exact. Passe-le sur « Limité », et le reste du monde sort du fichier : il ne reste que toi et la compta." },
        { t: "Éditeur", r: "Passé en Lecteur, le monde entier ne peut plus modifier, juste lire. Bravo, les salaires sont devenus une info publique en lecture seule." },
        { t: "Copier le lien", r: "Tu as collé un lien modifiable par toute la planète. Quelqu’un a discrètement mis 10 000 € dans sa case." },
      ] },
    { lv: 2, q: "3 h du matin, tu dors, ce truc fait vibrer ton téléphone. C’est la 5e fois cette nuit. Tu touches quoi ?", ui: "x3mfa", issue: "A aidé un hacker à deviner le bon nombre à 3 h du matin",
      opts: [
        { t: "27", r: "Raté, ouf. Pas de panique : il y aura une 6e, une 7e demande, jusqu’à ce que tu tombes juste." },
        { t: "45", r: "Bravo, c’est le bon ! Une chance sur trois, et tu lui as ouvert la porte toi-même. En 2022, Uber s’est fait pirater comme ça : un employé bombardé de notifs a fini par accepter." },
        { t: "81", r: "Tu as tapé au hasard, et en face, on n’attendait que ça. Le sommeil, meilleur complice des hackers." },
        { t: "Non, ce n’est pas moi", ok: 1, r: "Exact. Tu dors, il n’y a donc pas de « bon nombre ». Refuse, puis lève-toi en pleurant pour changer ton mot de passe." },
      ] },
    { lv: 4, q: "Le « boss » te demande par mail de payer un nouveau fournisseur aujourd’hui. Tu veux d’abord lui répondre pour confirmer. Avant d’envoyer, trouve la faille principale.", ui: "x3replyto", issue: "N’a pas vu que « Répondre à » menait au Gmail d’un escroc",
      opts: [
        { t: "De : P. Martin", r: "L’adresse est bien celle de la boîte, rien à redire. L’escroc sait que tu regardes là, alors il a bossé ailleurs." },
        { t: "Répondre à : une adresse Gmail", ok: 1, r: "Exact. L’expéditeur affiche le boss, mais la réponse part vers un Gmail. Tu cliques sur Répondre, ta confirmation arrive chez l’escroc, qui répond aussitôt : « Oui, paie. » La fraude au président, version classique." },
        { t: "PJ : ordre de virement", r: "Un nom de fichier ne prouve rien. Et si tu l’ouvres pour « vérifier », c’est peut-être ton ordi qui se fera vérifier." },
        { t: "« Pas d’appel possible »", r: "Louche, oui, mais un boss injoignable en réunion, ça arrive. La preuve est dans l’en-tête : ta réponse n’arrivera jamais au boss." },
      ] },
    { lv: 3, q: "La pièce jointe « Facture_0927.doc » s’ouvre comme ça. Tu ne te souviens pas avoir acheté quoi que ce soit. Tu cliques où ?", ui: "x3macro", issue: "Le document a dit « Activer la modification », il a obéi",
      opts: [
        { t: "Activer la modification", r: "Étape 1 terminée. Ensuite, il te demandera « Activer le contenu », et la macro se mettra au travail pour toi, par exemple en chiffrant ton disque avant de te réclamer une rançon." },
        { t: "« Voir la facture » dans le document", r: "C’est une image dans le document, cliquer ne fait rien. Elle t’apprend à cliquer sur les vrais boutons, tu y étais presque." },
        { t: "La × en haut à droite", ok: 1, r: "Exact. Une vraie facture ne te demande pas de couper les protections pour la lire. Ferme, puis appelle l’expéditeur pour savoir ce qu’il t’a envoyé." },
      ] },
    { lv: 3, q: "Tu veux juste une extension de capture d’écran. Le store affiche celles-ci. Laquelle installer ?", ui: "x3ext", issue: "A donné toutes ses données web pour faire une capture",
      opts: [
        { t: "Capture Master Pro", r: "3 millions d’utilisateurs, et elle voit la page de banque de chacun. La capture, c’est le job d’appoint ; lire ton historique, c’est le vrai métier." },
        { t: "Capture Éclair", r: "Gérer tes téléchargements, parler aux autres programmes de ton PC… Pour un outil de capture, elle voit plus loin que toi." },
        { t: "Capture Simple", ok: 1, r: "Exact. Note un peu plus basse, moins d’utilisateurs, mais elle ne regarde la page que quand tu cliques. Un outil de capture doit juste savoir capturer." },
        { t: "Assistant Capture IA (sponsorisé)", r: "Elle veut lire tous tes sites et ton presse-papiers. Chaque mot de passe copié, elle l’a « sauvegardé intelligemment » pour toi." },
      ] },
  ],
};
