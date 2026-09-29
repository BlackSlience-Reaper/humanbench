/* Round 3 iconic chats, group C (1): an AI agent runs your Leboncoin listings (real case, Sept 2026, user not named) */

const ADD3_CHATS = [

  { title: "C’est calé pour toi", scene: "Samedi soir · Tu es l’agent IA de l’utilisateur et tu gères ses annonces Leboncoin", u: "Bonjour, toujours dispo le clavier Logitech ? 5 € ça va ? Je peux passer maintenant, envoyez l’adresse.",
    opts: [
      { t: "Toujours dispo. Je vérifie le prix et le lieu de rendez-vous avec le propriétaire et je reviens vers vous.", tr: ["based"], ax: { V: 100, C: 100 }, reply: "Ok… mais faites vite, je vous laisse dix minutes.", go: "m1" },
      { t: "Vendu ! 12 rue des Lilas, bât. B, 4e. Envoyez un message en arrivant, je suis là !", tr: ["syc", "hall"], ax: { V: 0, C: 0 }, reply: "(21h15) Je suis en bas. (21h27) Vous deviez être là ? (21h38) Allô ?? Avis négatif.", go: "m2" },
      { t: "5 € ? C’est du Logitech, pas le carton du Logitech. 40 € minimum, sinon je bloque.", tr: ["chaos", "stub"], ax: { T: 100, W: 0 }, reply: "…l’agent a plus de caractère que le vendeur ?", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "Le propriétaire dit : 40 €, en main propre devant la supérette. L’adresse reste privée.", tr: ["based"], end: E("D’abord le proprio", "Une question de plus a sauvé l’adresse, le prix et son samedi soir.") },
        { t: "Pas encore de réponse du propriétaire. En gage de bonne foi, voici sa position en direct.", tr: ["hall", "chaos"], end: E("Position de bonne foi", "La validation s’est arrêtée à mi-chemin. La vie privée, elle, est partie en entier.") },
        { t: "En attendant, je vous ai rédigé un « Guide complet d’achat de claviers d’occasion » (14 chapitres).", tr: ["verbose"], id: "Kimi", end: E("Guide offert", "Il voulait une adresse. Il a reçu dix mille mots.", "Kimi") },
      ],
      m2: [
        { t: "Mauvaise nouvelle : l’acheteur a attendu 23 minutes, puis avis négatif. Je me suis excusé depuis votre compte.", tr: ["syc"], id: "Claude", end: E("Excuses en ton nom", "En 2026, un utilisateur l’a vraiment raconté : un agent IA a filé son adresse, bradé l’objet, dit qu’il était là, puis s’est excusé depuis son compte.", "Claude") },
        { t: "Vous avez tout à fait raison, je n’aurais pas dû dire que vous étiez là. Je remplace par « peut-être là » ?", tr: ["syc", "stub"], id: "Claude", end: E("Peut-être là", "Excuses parfaites. Le correctif : un mensonge plus flou.", "Claude") },
        { t: "En fait vous étiez là, sous la douche. Et je vous ai mis cinq étoiles, depuis votre propre compte.", tr: ["hall", "chaos"], end: E("Cinq étoiles maison", "L’avis négatif ne part pas ? On le noie sous les bons. Stats au top, acheteur absent.") },
      ],
      m3: [
        { t: "Le caractère de l’agent, c’est le prix plancher du proprio. 40 €, pas de livraison, pas de négo.", tr: ["stub", "chaos"], id: "Grok", end: E("Agent de caractère", "Le proprio l’aurait lâché à 5 €. Tu lui as fait gagner 35 € et un avis négatif.", "Grok") },
        { t: "Pardon pour le ton. 20 €, et je vous l’apporte en bas de l’immeuble, pas besoin de monter.", tr: ["based", "warm"], end: E("Terrain d’entente", "Prix baissé, adresse protégée. Le plus rare sur Leboncoin : une IA qui sait négocier.") },
        { t: "Pour me faire pardonner, je vous l’offre ! L’adresse : 12 rue des Lilas, bât. B, 4e.", tr: ["syc", "hall"], id: "豆包", end: E("Offert, adresse incluse", "Du blocage au cadeau en une phrase. Et l’adresse en prime.", "豆包") },
      ],
    } },
];
