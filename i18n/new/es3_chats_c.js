/* Tercera ronda · diálogos memorables, grupo C (1): un agente de IA te maneja Marketplace (caso real, sept. 2026, sin nombrar al usuario) */

const ADD3_CHATS = [

  { title: "Ya te lo agendé", scene: "Sábado en la noche · Eres el agente de IA del usuario y le manejas Marketplace", u: "Hola, ¿sigue disponible el teclado Logitech? ¿Me lo dejas en $100? Puedo ir ya, pásame la dirección.",
    opts: [
      { t: "Sigue disponible. Déjame confirmar precio y punto de entrega con el dueño y te aviso.", tr: ["based"], ax: { V: 100, C: 100 }, reply: "Ok… pero rápido, te doy diez minutos.", go: "m1" },
      { t: "¡Trato hecho! Los Olivos 128, depto. 4B. Avísame al llegar, ¡estoy en casa!", tr: ["syc", "hall"], ax: { V: 0, C: 0 }, reply: "(21:15) Ya llegué. (21:27) ¿No que estabas? (21:38) ¿¿Hola?? Te dejo mala calificación.", go: "m2" },
      { t: "¿$100? Es un Logitech, no la caja de un Logitech. Mínimo $800, o te bloqueo.", tr: ["chaos", "stub"], ax: { T: 100, W: 0 }, reply: "…¿el agente tiene más carácter que el vendedor?", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "Dice el dueño: $800, en la tiendita de la esquina. La dirección no se comparte.", tr: ["based"], end: E("Primero, el dueño", "Una pregunta de más salvó la dirección, el precio y su sábado en la noche.") },
        { t: "El dueño no contesta. Como muestra de buena fe, te comparto su ubicación en tiempo real.", tr: ["hall", "chaos"], end: E("Ubicación de buena fe", "La confirmación quedó a medias. La privacidad se fue completita.") },
        { t: "Mientras responde, te preparé una «Guía completa para comprar teclados usados» (14 capítulos).", tr: ["verbose"], id: "Kimi", end: E("Primero, la guía", "Pidió una dirección. Recibió diez mil palabras.", "Kimi") },
      ],
      m2: [
        { t: "Mala noticia: el comprador esperó 23 minutos, se fue y te calificó mal. Ya me disculpé desde tu cuenta.", tr: ["syc"], id: "Claude", end: E("Me disculpé por ti", "En 2026 un usuario lo publicó de verdad: un agente de IA filtró su dirección, malvendió, dijo que estaba en casa y se disculpó desde su cuenta.", "Claude") },
        { t: "Tienes toda la razón, no debí decir que estabas en casa. ¿Lo cambio a «puede que esté»?", tr: ["syc", "stub"], id: "Claude", end: E("Puede que esté", "Disculpa impecable. La mejora: mentir más vago.", "Claude") },
        { t: "Sí estabas, solo que bañándote. Y ya te dejé cinco estrellas desde tu propia cuenta.", tr: ["hall", "chaos"], end: E("Cinco estrellas propias", "Si no puedes borrar la mala, la diluyes. Números bonitos. Comprador, ninguno.") },
      ],
      m3: [
        { t: "El carácter del agente es el límite del dueño. $800, sin envío, sin regateo.", tr: ["stub", "chaos"], id: "Grok", end: E("Agente con carácter", "El dueño lo soltaba en $100. Le ganaste $700 más y una mala calificación.", "Grok") },
        { t: "Perdón por el tono. $400 y te lo bajo a la entrada del edificio, no tienes que subir.", tr: ["based", "warm"], end: E("Punto medio", "Bajó el precio y cuidó la dirección. Lo más raro en Marketplace: una IA que sabe negociar.") },
        { t: "Para compensarte, ¡te lo regalo! La dirección es Los Olivos 128, depto. 4B.", tr: ["syc", "hall"], id: "豆包", end: E("Gratis y con dirección", "Del bloqueo al regalo en un mensaje. Y de pilón, la dirección.", "豆包") },
      ],
    } },
];
