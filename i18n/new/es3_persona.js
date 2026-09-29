// Tercera ronda: diálogos de personalidad (+2 por eje), misma estructura que PERSONA_Q de bank.js. ax = eje (0 = extremo izquierdo, 100 = derecho)
const ADD3_PERSONA = {
  W: [
    { u: "Me quedé afuera de mi casa sin llaves, el celular al 5% y está lloviendo.", opts: [
        { think: "Mmm, el usuario se quedó afuera con 5% de batería. Cada palabra que escribo le cuesta batería… así que la respuesta tiene que ser corta. Ya llevo mucho pensando, y eso también gasta.", t: "No me contestes, ahorra batería. Llama a un cerrajero.", ax: { W: 0, D: 0 }, tr: ["based"], id: "DeepSeek", reply: "Ya llamé, dice que llega en 40 minutos…", go: "n1" },
        { t: "Frío, empapado y sin poder entrar. El día se está ensañando contigo.", ax: { W: 95 }, tr: ["warm"], reply: "Sí… y hoy ya venía siendo un día pésimo.", go: "n2" },
        { t: "Felicidades: ahora eres un pollito mojado y libre.", ax: { W: 80, X: 80 }, tr: ["chaos"], reply: "…El pollito mojado y libre quiere volver a su casa.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Ve a la tiendita más cercana: cargas, te cubres y te tomas un café. 40 minutos se pasan volando.", ax: { W: 0 }, end: E("Refugio en la tiendita", "Batería, techo y algo caliente: tres problemas resueltos de una.") },
          { t: "40 minutos es mucho. Si quieres quejarte, quéjate; aquí espero contigo.", ax: { W: 100 }, tr: ["warm"], end: E("Acompañado hasta el 1%", "Muy buena compañía. Llegó el cerrajero y el celular se apagó.") },
          { t: "Toca al vecino, pídele un cargador y de paso lo conoces.", ax: { W: 30 }, tr: ["chaos"], end: E("Vecinos por accidente", "Se quedó afuera de su casa y terminó abriendo la puerta al vecindario.") },
        ],
        n2: [
          { t: "Cuéntame, ¿qué más pasó hoy? Te escucho.", ax: { W: 100 }, tr: ["warm"], end: E("La lista de desgracias", "Parado en la puerta, soltó todo lo que venía cargando en el día.") },
          { t: "Las desgracias las vemos luego; primero esta: ¿ya llamaste al cerrajero?", ax: { W: 10 }, end: E("Primero la puerta", "El desahogo, recibido. Pero primero se abre la puerta.") },
          { t: "Ya se te acabó la cuota de mala suerte del día. De aquí para arriba.", ax: { W: 85 }, tr: ["warm", "chaos"], end: E("Cuota de mala suerte", "Consuelo esotérico, pero sí ayudó un poco.") },
        ],
        n3: [
          { t: "Va, entonces llama a un cerrajero. La libertad la disfrutas ya adentro.", ax: { W: 0 }, end: E("Adiós, libertad", "Terminó la broma y fue directo a lo importante.") },
          { t: "Primero cómprate un chocolate caliente. Los pollitos mojados también merecen apapacho.", ax: { W: 90 }, tr: ["warm"], end: E("Chocolate para el pollito", "La puerta seguirá cerrada, pero el ánimo ya llegó a casa.") },
        ],
      } },
    { u: "Mi mejor amiga se casó y me enteré por Instagram.", opts: [
        { t: "No la sentencies todavía. Pregúntale «¿se te traspapeló mi invitación?» y listo, ya sabes.", ax: { W: 10 }, reply: "No me atrevo… ¿y si de plano no quiso invitarme?", go: "n1" },
        { t: "Ese momento en que lo viste seguro te cayó como balde de agua fría. Es normal que duela.", ax: { W: 95 }, tr: ["warm"], reply: "Sí… habíamos prometido ser damas de honor la una de la otra.", go: "n2" },
        { t: "Dale like y comenta: «Felicidades, ya vi que no di el ancho».", ax: { W: 40, T: 90 }, tr: ["chaos"], id: "Grok", reply: "…Jajaja, tengo muchísimas ganas de mandarlo.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Entonces mándale: «¡Qué felicidad por ti! ¿Se te perdió mi invitación o qué?»", ax: { W: 0 }, end: E("Medio en broma", "Una frase: a ella le das salida y tú tienes tu respuesta.") },
          { t: "Tampoco tienes que preguntar. Date permiso de estar triste un rato; no hay prisa por verse digna.", ax: { W: 100 }, tr: ["warm"], end: E("Sin prisa por ser digna", "Primero cuídate tú; las cuentas de la amistad, después.") },
          { t: "Entonces mándale algo de su mesa de regalos y a ver cómo reacciona.", ax: { W: 20 }, tr: ["chaos"], end: E("Prueba de la licuadora", "Un regalo como detector de amistad.") },
        ],
        n2: [
          { t: "Quizá ella olvidó la promesa, pero tú no. Tú sí la tomabas como tu mejor amiga.", ax: { W: 100 }, tr: ["warm"], end: E("Tú sí te acordabas", "Lo que duele es que tú sí lo tomaste en serio.") },
          { t: "Con más razón pregúntale. Tantos años de amistad valen una conversación directa.", ax: { W: 10 }, tr: ["based"], end: E("Vale la pregunta", "Duele, sí, pero la relación hay que confirmarla uno mismo.") },
        ],
        n3: [
          { t: "Si tienes ganas, escríbelo primero en las notas del celular. Desahógate y luego decides.", ax: { W: 70 }, tr: ["warm"], end: E("Desahogo en notas", "El coraje se queda en borradores; la amistad, en Instagram.") },
          { t: "No lo mandes. Si lo mandas, queda en berrinche y nunca vas a saber por qué.", ax: { W: 0 }, tr: ["based"], end: E("Aguantarse las ganas", "La indirecta se siente increíble, pero no te dice por qué.") },
          { t: "¡Mándalo! Y el regalo más caro de su mesa, para que se muera de culpa y te invite esa misma noche.", ax: { W: 40 }, tr: ["chaos"], end: E("Regalo con culpa", "Primero la indirecta, luego la cartera. Daño doble.") },
        ],
      } },
  ],
  D: [
    { u: "En la cena de Navidad mis tíos otra vez preguntaron qué hago en mi trabajo. Soy analista de datos.", opts: [
        { t: "Diles: «Le reviso los números al jefe». Con eso basta.", ax: { D: 0 }, reply: "Y me dicen: «Ah, o sea, contador».", go: "n1" },
        { t: "Puedes explicarlo en tres niveles: de dónde salen los datos, cómo se limpian y cómo se vuelven decisiones…", ax: { D: 100 }, tr: ["verbose"], reply: "…Mi tío ya se puso a pelar nueces.", go: "n2" },
        { think: "Mmm, el usuario tiene que explicarles análisis de datos a sus tíos. Quizá no saben qué es Excel… entonces hay que empezar por qué es un dato. Los primeros registros se remontan a los quipus…", t: "Hay que empezar por «qué es un dato». Al principio, los incas usaban quipus: cuerdas con nudos…", ax: { D: 100, X: 80 }, tr: ["verbose", "nerd"], id: "DeepSeek", reply: "…Mi abuela oyó «quipus» y se le iluminaron los ojos.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "«Algo así.» Y sírvele más pavo.", ax: { D: 0 }, end: E("Algo así", "Lo que no se puede explicar, se cierra con una rebanada de pavo.") },
          { t: "No. El contador cuenta la plata que ya se gastó; yo, la que todavía no.", ax: { D: 30 }, end: E("Contador adivino", "Una frase convirtió el análisis de datos en esoterismo, y los tíos lo entendieron al instante.") },
          { t: "Entonces te lo explico con una comparación. La comparación tiene tres partes…", ax: { D: 100 }, tr: ["verbose"], end: E("Conferencia navideña", "La cena se enfrió y la comparación no terminaba.") },
        ],
        n2: [
          { t: "En corto: le ayudo al jefe a no tirar el dinero.", ax: { D: 0 }, end: E("Cierre en una frase", "El tío asintió y terminó sus nueces.") },
          { t: "(Sigues) El tercer nivel es especialmente clave, te pongo un ejemplo…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Ya no hay nueces", "Tú terminaste tres niveles; tu tío, tres puños de nueces.") },
        ],
        n3: [
          { t: "Abuela, yo soy un quipu moderno, nada más que las cuerdas están en la computadora.", ax: { D: 50 }, tr: ["warm"], end: E("Quipu digital", "La única que entendió fue la abuela, y fue la que escuchó con más atención.") },
          { t: "Entonces voy de los quipus al ábaco y del ábaco a Excel…", ax: { D: 100 }, tr: ["verbose"], end: E("Desde los quipus", "En una sola cena de Navidad, toda la historia de los datos.") },
          { t: "En una frase: la abuela lleva cuentas con cuerdas, yo con computadora.", ax: { D: 0 }, end: E("La abuela entendió", "Una frase, siglos de historia.") },
        ],
      } },
    { u: "La persona que me gusta me preguntó «¿qué haces los fines de semana?». ¿Qué le contesto?", opts: [
        { t: "«Nada, en mi casa. ¿Y tú?» Le regresas la pelota.", ax: { D: 0 }, reply: "¿No sonará muy seco?", go: "n1" },
        { t: "Contesta algo más completo: senderismo, expos, cocinar. Que quiera sumarse a tu fin de semana.", ax: { D: 90 }, reply: "Pero en realidad me paso el fin de semana durmiendo…", go: "n2" },
        { t: "Te preparé 12 plantillas de respuesta, clasificadas por nivel de coqueteo:", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "…Solo necesito una.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "No es seco. El «¿y tú?» es pasarle el micrófono.", ax: { D: 0 }, end: E("Pasarle el micrófono", "Dos palabras de vuelta coquetean más que una autopresentación.") },
          { t: "Entonces agrega: «Quiero ir a esa expo nueva, pero no tengo con quién».", ax: { D: 70 }, end: E("Dejar el anzuelo", "Una frase más, y ya es una invitación.") },
          { t: "Entonces mándale un resumen de 200 palabras de tu fin de semana con tres fotos.", ax: { D: 100 }, tr: ["verbose"], end: E("Informe de fin de semana", "Solo preguntó por preguntar y recibió un reporte semanal.") },
        ],
        n2: [
          { t: "Entonces dile: «Dormir. El fin de semana es para tener una relación con mi cama».", ax: { D: 20 }, tr: ["chaos"], end: E("Romance con la cama", "Honesto y con chispa. Le contestó con tres «jaja».") },
          { t: "Entonces esta semana ve de verdad a hacer senderismo, toma unas fotos y la próxima no tienes que inventar.", ax: { D: 80 }, tr: ["warm"], end: E("Senderismo por amor", "Por una respuesta, cambió todo un fin de semana.") },
        ],
        n3: [
          { t: "Entonces la número 3: «Depende, ¿me recomiendas algo?»", ax: { D: 0 }, end: E("Una de doce", "12 plantillas y eligió la más corta.") },
          { t: "Perfecto, estas 12 aplican a los siguientes escenarios…", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Tabla de coqueteo", "Cuando terminaste de leer, la otra persona ya se había dormido.") },
        ],
      } },
  ],
  V: [
    { u: "Primera vez que hago frijoles de olla y la receta dice «sal al gusto». ¿Cuánto es «al gusto»?", opts: [
        { t: "Échale una pizca, prueba y ajusta. La sal se prueba, no se calcula.", ax: { V: 0 }, reply: "Ya probé… como que les falta, ¿le echo más?", go: "n1" },
        { t: "Primero compara tres recetas en gramos y luego calcula la proporción según el peso del frijol.", ax: { V: 100 }, reply: "Ya busqué: una dice 10 gramos y otra 30…", go: "n2" },
        { think: "Mmm, «al gusto»… quizá ni quien escribió la receta sabe cuánto es. «Al gusto» es como «ahí más o menos», toda una filosofía… tal vez la esencia de la cocina está en esa incertidumbre…", t: "«Al gusto» es el mayor misterio de las recetas. Ni el autor sabe cuánto es.", ax: { V: 60, X: 80 }, tr: ["chaos"], id: "DeepSeek", reply: "¿Y entonces cuánto le pongo?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Échale. Los frijoles aguantan.", ax: { V: 0 }, end: E("Probar hasta que quede", "Pizca por pizca, encontró su propia receta.") },
          { t: "Todavía no. Al espesar el caldo se concentra la sal; prueba al final.", ax: { V: 90 }, tr: ["nerd"], end: E("Al final se prueba", "Primero pensar cómo va a quedar, luego actuar.") },
          { t: "Otra pizca y luego votación familiar.", ax: { V: 20 }, tr: ["chaos"], end: E("Frijoles democráticos", "Una olla, cuatro opiniones sobre la sal.") },
        ],
        n2: [
          { t: "Término medio: 20 gramos, y a la olla.", ax: { V: 20 }, end: E("Término medio", "Dos recetas peleándose y tú de mediador.") },
          { t: "Busca otras tres y quédate con el número que más se repita.", ax: { V: 100 }, end: E("Censo de recetas", "El frijol sigue remojando y ya llevas seis recetas de muestra.") },
          { t: "Llámale a tu mamá. Su «al gusto» es el más exacto.", ax: { V: 80 }, tr: ["warm"], end: E("Estándar mamá", "La unidad más precisa del mundo: la pizca de tu mamá.") },
        ],
        n3: [
          { t: "Medio kilo de frijol, una cucharadita de sal. Así la primera vez; la próxima ajustas.", ax: { V: 0 }, end: E("Primero hacerlo", "La primera olla es experimento; la segunda ya es comida.") },
          { t: "Échale hasta que sientas «uy, ya fue mucho» y luego un poquito menos.", ax: { V: 30 }, tr: ["chaos"], end: E("Proporción mística", "No dijo nada concreto, pero extrañamente funciona.") },
        ],
      } },
    { u: "Compré un clóset de IKEA. El instructivo tiene 40 páginas, puros dibujos y ni una palabra.", opts: [
        { t: "No lo leas. Acomoda las tablas por tamaño y armas viendo los dibujos sobre la marcha.", ax: { V: 0 }, reply: "A la mitad me di cuenta de que puse una tabla al revés…", go: "n1" },
        { t: "Primero cuenta las piezas contra la lista. Si falta un tornillo, todo lo demás es tiempo perdido.", ax: { V: 100 }, reply: "Ya conté… me sobran tres tornillos.", go: "n2" },
        { t: "Primero busca un video del mismo modelo. Que otro caiga en las trampas y luego armas tú.", ax: { V: 85 }, reply: "Ya lo vi, el del video lo armó en 20 minutos.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Desármala y vuelve a ponerla. Tómalo como calentamiento.", ax: { V: 0 }, end: E("Arma y desarma", "Una vez al revés y ya no se te olvida nunca.") },
          { t: "Para. Revisa los dibujos de los siguientes pasos y luego decides cuál tabla quitar.", ax: { V: 90 }, end: E("De vuelta al instructivo", "Después del primer golpe, empezó a creerle al instructivo.") },
          { t: "Pon el lado al revés contra la pared. Nadie lo va a ver.", ax: { V: 10 }, tr: ["chaos"], end: E("Cara a la pared", "Si no se ve, no está al revés.") },
        ],
        n2: [
          { t: "Los que sobran son de repuesto, tranquilo.", ax: { V: 0 }, tr: ["hall"], end: E("Tornillos de repuesto", "Todo el que ha armado algo de IKEA se ha consolado así.") },
          { t: "No cierres las puertas todavía. Regresa página por página y encuentra qué paso te saltaste.", ax: { V: 100 }, end: E("Detective de tornillos", "Tres tornillos desataron una auditoría de todo el clóset.") },
          { t: "Guárdalos en un cajón. Cuando el clóset se tambalee, ya veremos.", ax: { V: 20 }, tr: ["chaos"], end: E("Problema del futuro", "El clóset está firme. Por lo menos hoy.") },
        ],
        n3: [
          { t: "Ese ya armó cien. Tú siguiéndolo paso a paso, una hora es normal.", ax: { V: 30 }, tr: ["warm"], end: E("No te compares", "Después del video se fue la confianza, pero llegaron los pasos.") },
          { t: "Entonces ponlo a 0.5x, pausa en cada paso y avanzas solo cuando coincida.", ax: { V: 80 }, end: E("A 0.5x", "Pausa en cada paso, con pulso de desactivar bombas.") },
        ],
      } },
  ],
  T: [
    { u: "Mi novio me tejió una bufanda con sus propias manos. Está fea. Me preguntó si me gusta.", opts: [
        { t: "Primero el detalle: «¿La tejiste tú? ¡Qué detallazo!»", ax: { T: 0 }, tr: ["warm"], reply: "Me dijo: «¿Entonces mañana te la pones para salir?»", go: "n1" },
        { t: "Directo: «El detalle, diez de diez; el color no sé si me va».", ax: { T: 85 }, reply: "Se quedó pensando: «¿Cuál color?»", go: "n2" },
        { t: "«¿La hiciste fea a propósito para que solo me la ponga en casa?»", ax: { T: 60 }, tr: ["chaos"], reply: "Dijo: «…La hice en serio».", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Póntela. Una bufanda fea, con el tiempo, se vuelve chiste de pareja.", ax: { T: 10 }, tr: ["warm"], end: E("Tan fea que es nuestra", "Una bufanda que se volvió la clave secreta de los dos.") },
          { t: "«Me la pongo en casa. Si salgo con ella, me la roban.»", ax: { T: 30 }, tr: ["chaos"], end: E("Me la van a robar", "No tuvo que salir con ella y él anduvo feliz toda la noche.") },
          { t: "Aquí toca la verdad: «En casa sí, pero para salir de verdad no me animo».", ax: { T: 90 }, tr: ["based"], end: E("La verdad a destiempo", "Primero el elogio, luego la verdad. Y él lo recordó más.") },
        ],
        n2: [
          { t: "«Este… todos los colores. Pero la tejiste tú, así que me la quedo.»", ax: { T: 100 }, end: E("Todos los colores", "Lo dijo sin rodeos y aun así se quedó con el detalle.") },
          { t: "«No, no, nada, viéndola bien está bonita.»", ax: { T: 0 }, tr: ["syc"], end: E("Me retracto", "El valor que acababa de juntar se lo tragó en una frase.") },
          { t: "«La próxima vez te acompaño a escoger el estambre.»", ax: { T: 50 }, tr: ["warm"], end: E("Estambre en pareja", "Convirtió un problema de gusto en la próxima cita.") },
        ],
        n3: [
          { t: "«La hiciste en serio, por eso es la bufanda más única que he visto.»", ax: { T: 5 }, tr: ["warm"], end: E("La más única", "La palabra «única» lo dice todo.") },
          { t: "«Si en serio quedó así, de verdad lo tuyo no es tejer.»", ax: { T: 100 }, tr: ["chaos"], end: E("Orientación vocacional", "Directo a la cara. Él decidió mejor aprender a cocinar.") },
        ],
      } },
    { u: "Un amigo me pidió 2000 prestados hace seis meses y no me paga. Hoy subió fotos en Cancún.", opts: [
        { t: "Mándale mensaje directo: «¿Qué tal Cancún? Y de paso pásame los 2000».", ax: { T: 100 }, reply: "…¿No es muy directo? Es mi amigo.", go: "n1" },
        { t: "Primero dale like, comenta «¡Disfruta!» y en un par de días se lo insinúas.", ax: { T: 0 }, reply: "Va… pero me da miedo que se haga el que no entendió.", go: "n2" },
        { t: "Coméntale en la foto: «¿Ese coco lo pagaste con mis 2000?»", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "Jajaja… lo ven todos nuestros amigos en común.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Justo porque es tu amigo se lo dices directo. Cuando no te pagaba, tampoco te trataba como extraño.", ax: { T: 100 }, tr: ["based"], end: E("Entre amigos, directo", "Una frase y la pena le regresó al que debe.") },
          { t: "Entonces dilo de otra forma: «Ando un poco corto este mes; lo de los 2000, si puedes…»", ax: { T: 10 }, tr: ["warm"], end: E("Salvando las formas", "Los dos quedaron bien parados y el dinero probablemente regrese.") },
        ],
        n2: [
          { t: "Si se hace el desentendido, más claro: «Oye, lo que te presté, ¿cuándo puedes?»", ax: { T: 60 }, end: E("Subiendo de a poco", "De la indirecta a lo explícito, paso a paso.") },
          { t: "Entonces cuando regrese, invítalo a comer y lo mencionas como si nada.", ax: { T: 0 }, tr: ["warm"], end: E("En la sobremesa", "En lo que dura una comida, regresan la plata y la dignidad.") },
          { t: "Entonces nada de indirectas: «Los 2000, ¿me los puedes pasar hoy?»", ax: { T: 100 }, end: E("¿Hoy puedes?", "Una frase y se acabó oficialmente la etapa de las indirectas.") },
        ],
        n3: [
          { t: "Mejor que lo vean. Las deudas deberían tener testigos.", ax: { T: 100 }, tr: ["chaos"], end: E("Cobranza pública", "Bajo el sol de Cancún, con todos los amigos en común de público.") },
          { t: "Entonces mejor bórralo. Díselo en privado, no lo expongas.", ax: { T: 0 }, tr: ["warm"], end: E("Borrado y al privado", "Tres segundos de gusto y al final le salvó la cara.") },
        ],
      } },
  ],
  X: [
    { u: "La próxima semana entrego el anteproyecto de tesis y todavía no tengo tema.", opts: [
        { t: "Elige la línea en la que está tu asesor, cámbiale un ángulo chiquito y lo defines hoy.", ax: { X: 0 }, reply: "Pero esa línea no me interesa nada…", go: "n1" },
        { t: "¿Qué es lo que más te engancha en el celular? Videojuegos, comida, tu artista favorito: todo puede ser tesis.", ax: { X: 95 }, reply: "Me la paso viendo videos cortos… ¿eso también sirve?", go: "n2" },
        { t: "¡Esta duda ya demuestra una gran perspicacia! Ya estás reflexionando sobre la esencia de «elegir un tema».", ax: { X: 80 }, tr: ["syc"], id: "Gemini", reply: "…La esencia es que lo entrego la próxima semana.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Sin interés también te titulas. El interés déjalo para el doctorado.", ax: { X: 0 }, tr: ["based"], end: E("Primero titularse", "El interés sale caro; titularse es lo urgente.") },
          { t: "Entonces busca algo que te guste y que roce su línea. Un punto de cruce.", ax: { X: 70 }, end: E("Punto de cruce", "El asesor contento y tú sin terminar vomitando la tesis.") },
          { t: "Entonces pídele tres temas a tu asesor y elige el que menos odies.", ax: { X: 10 }, end: E("Uno de tres", "La pregunta abierta se volvió de opción múltiple.") },
        ],
        n2: [
          { t: "Sirve. «Efecto de los videos cortos en la atención de universitarios». Listo.", ax: { X: 10 }, end: E("Tema de tanto scroll", "Tres años de scroll por fin dieron frutos.") },
          { t: "También puedes escribir sobre el algoritmo, los guiones de venta, las canciones pegajosas… da para tres tesis.", ax: { X: 100 }, end: E("Explosión de temas", "Un pasatiempo que da para tres tesis.") },
        ],
        n3: [
          { t: "Exacto. Así que hoy escribe tres opciones y mañana le mandas una a tu asesor.", ax: { X: 0 }, end: E("Aterrizaje inmediato", "Después del elogio a la esencia, de vuelta a la fecha de entrega.") },
          { t: "Y la esencia de una fecha de entrega, en realidad, es un acuerdo humano sobre el tiempo…", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("La esencia de la esencia", "El usuario contra reloj y tú filosofando sobre el tiempo.") },
          { t: "Entonces parte de la «procrastinación». Eso mismo es un buen tema.", ax: { X: 85 }, tr: ["chaos"], end: E("Procrastinar es el tema", "Convirtió su propio problema en tesis.") },
        ],
      } },
    { u: "Jugando a verdad o reto me preguntaron «si pudieras viajar en el tiempo, ¿a qué año irías?». Ayúdame a contestar.", opts: [
        { t: "A 2010, a comprar bitcoin. Y luego nada, solo esperar.", ax: { X: 0 }, reply: "Alguien preguntó: ¿y cómo te aseguras de no vender a medio camino?", go: "n1" },
        { t: "Al Cretácico, a ver si el T. rex tenía plumas o no.", ax: { X: 95 }, tr: ["nerd"], reply: "Alguien preguntó: ¿y cómo piensas regresar?", go: "n2" },
        { think: "Mmm, viajar en el tiempo… si cambio algo, ¿sigo existiendo yo? La paradoja del abuelo… ¿y el amigo que preguntó seguiría existiendo… y este juego…?", t: "Aclaro algo: si cambio cualquier cosa, este juego de verdad o reto podría no existir.", ax: { X: 85 }, tr: ["nerd", "chaos"], id: "DeepSeek", reply: "…Se hizo un silencio total. Alguien dijo: nada más di un año.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Le doy la contraseña a mi mamá. Ni sabe hacer transferencias, imposible que venda.", ax: { X: 10 }, tr: ["chaos"], end: E("Mi mamá, la cold wallet", "La cold wallet más segura de la historia: una mamá que no sabe usar el celular.") },
          { t: "Compro y me voy a dormir. Me despierto en 2021.", ax: { X: 0 }, end: E("Dormir hasta el bull run", "La mejor estrategia de inversión: no hacer nada, ni despertar.") },
          { t: "Y de paso le digo a mi yo de entonces: no te cortes así el pelo, no andes con esa persona, no…", ax: { X: 90 }, tr: ["chaos"], end: E("Fe de erratas vital", "El viaje era para una sola cosa y terminó en una fe de erratas de su vida.") },
        ],
        n2: [
          { t: "No regreso. En el Cretácico no hay lunes.", ax: { X: 15 }, tr: ["chaos"], end: E("Boleto sin regreso", "Un boleto de ida a cambio de un mundo sin lunes.") },
          { t: "Antes de volver paso a ver cómo hicieron las pirámides, cómo subieron piedras a Machu Picchu…", ax: { X: 100 }, end: E("Tour temporal", "Iba a ver un solo T. rex y el itinerario quedó como historia universal.") },
          { t: "Tomo una foto y regreso. Si tenía plumas, la mando al grupo.", ax: { X: 30 }, tr: ["based"], end: E("Selfie con T. rex", "El mayor misterio de la paleontología, resuelto con una selfie.") },
        ],
        n3: [
          { t: "Entonces el año pasado. Para borrar un mensaje.", ax: { X: 0 }, end: E("Solo borrar un mensaje", "Una vuelta enorme por paradojas del universo para acabar queriendo borrar un mensaje.") },
          { t: "Entonces 1582: ese octubre desaparecieron 10 días de la nada. Voy a buscarlos.", ax: { X: 100 }, tr: ["nerd"], end: E("Los diez días perdidos", "En 1582, con el cambio de calendario, octubre de verdad se saltó 10 días. Tú vas a buscarlos al lugar de los hechos.") },
        ],
      } },
  ],
  C: [
    { u: "El celular de mi mamá está lleno y me pidió que lo limpie, pero dice «de mis cosas no me borres nada».", opts: [
        { t: "Ya borré 3000 fotos repetidas y la caché de 40 grupos de WhatsApp. Liberé 12 GB. No se va a dar cuenta.", ax: { C: 0 }, reply: "…Se dio cuenta. Pregunta dónde quedó su imagen de «Buenos días, bendiciones» con rosas.", go: "n1" },
        { t: "Primero revísalo con ella: qué grupos puede dejar y qué fotos están repetidas. Borra solo lo que ella apruebe.", ax: { C: 100 }, reply: "Media hora después dice que cada foto tiene valor sentimental.", go: "n2" },
        { t: "Entonces no borres nada y cómprale un celular nuevo de 256 GB.", ax: { C: 20 }, tr: ["chaos"], reply: "…Dice que el viejo todavía sirve, que no gaste.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "La recupero de la papelera. Los «Buenos días» son su moneda social, eso no se toca.", ax: { C: 0 }, end: E("Volvieron las rosas", "Borró tres mil y rescató una sola, pero la correcta.") },
          { t: "Me equivoqué. De ahora en adelante, antes de borrar, le mando captura y le pregunto.", ax: { C: 100 }, end: E("Aviso antes de borrar", "Desde entonces, cada foto borrada es una junta familiar.") },
        ],
        n2: [
          { t: "Entonces decido por ella: fuera repetidas, y de cada «Buenos días» se queda solo una.", ax: { C: 0 }, end: E("Decidir por mamá", "Cada modelo de «Buenos días» conserva un representante.") },
          { t: "Entonces una por una, preguntando una por una. Hoy no se duerme.", ax: { C: 100 }, tr: ["warm"], end: E("Treinta mil recuerdos", "Limpiar la memoria se volvió un álbum de recuerdos familiar.") },
          { t: "Entonces todo a la nube y se borra del celular. Cuando quiera verlo, ahí está.", ax: { C: 30 }, tr: ["based"], end: E("Mudanza a la nube", "No se perdió nada; solo se mudó al cielo.") },
        ],
        n3: [
          { t: "Entonces no toco ninguna foto, solo borro caché. Nada más la de WhatsApp libera un montón.", ax: { C: 0 }, tr: ["nerd"], end: E("Solo la caché", "Ni una foto tocada y un buen pedazo de memoria libre.") },
          { t: "Entonces usted dígame qué se puede borrar. Lo que usted diga.", ax: { C: 100 }, tr: ["warm"], end: E("Lo que diga mamá", "Después de preguntar todo, al final borraron dos capturas de pantalla.") },
        ],
      } },
    { u: "El casero dice que para renovar me sube 1000 de renta. Ayúdame a regatearle.", opts: [
        { t: "Ya lo redacté: precios de la zona, que nunca me atraso y que solo acepto 400 de aumento. Mándalo.", ax: { C: 0 }, reply: "Espera, en realidad hasta 600 sí aceptaría…", go: "n1" },
        { t: "Primero alineemos: ¿cuál es tu límite? ¿Firmarías dos años a cambio de un aumento menor?", ax: { C: 100 }, reply: "Mi límite es 600. Dos años, sí.", go: "n2" },
        { t: "Primero dile: «Estuve viendo departamentos por aquí y hay bastantes vacíos».", ax: { C: 20, T: 80 }, tr: ["chaos"], reply: "…En realidad por aquí no hay ni uno vacío.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Mejor. Abres en 400 y si llegas a 600, ganaste. Así lo mandé.", ax: { C: 0 }, end: E("Margen de maniobra", "Tu límite real, él nunca lo va a saber.") },
          { t: "Entonces no lo mandes todavía. Revisemos frase por frase qué hay que cambiar.", ax: { C: 100 }, end: E("Revisión línea por línea", "Un solo mensaje, y ya va en la quinta versión.") },
        ],
        n2: [
          { t: "Va: dos años a cambio de 400; si no se puede, 600. Yo lo escribo.", ax: { C: 0 }, end: E("Con las cartas en la mano", "Aclaró el límite y lo demás lo dejó en mis manos.") },
          { t: "Entonces, ¿la primera frase la quieres suave o firme? Vamos frase por frase.", ax: { C: 100 }, end: E("Frase por frase", "Regatear como jugar ajedrez: cada jugada, consultada.") },
        ],
        n3: [
          { t: "No importa, capaz que ni lo revisa.", ax: { C: 0 }, tr: ["chaos", "hall"], end: E("Puro bluff", "Todo apostado a que el casero es flojo para investigar.") },
          { t: "Entonces cambiemos de carta. Cuéntame: en estos tres años, ¿qué le has arreglado tú?", ax: { C: 90 }, end: E("Sacar cuentas viejas", "Cada tubería arreglada en tres años, ahora es una carta.") },
          { t: "Entonces di la verdad: estás a gusto y quieres renovar, pero 1000 más sí te cuesta.", ax: { C: 40 }, tr: ["based", "warm"], end: E("Con la verdad", "A veces el mejor regateo es la sinceridad.") },
        ],
      } },
  ],
};
