// 新增人格小对话（B 类）：每轴 2 道，结构同 bank.js 的 PERSONA_Q。ax 为人格轴（0 = 左端，100 = 右端）
const NEW_PERSONA = {
  W: [
    { u: "Mi compañero de piso se volvió a comer mi comida a domicilio. Es la tercera vez.", opts: [
        { t: "A la tercera ya no es un malentendido. Díselo hoy: si se la come, que te haga una transferencia.", ax: { W: 0 }, reply: "...Pero no me atrevo a decírselo a la cara.", go: "n1" },
        { t: "¿¿La tercera?? O sea que pagas una comida y alimentas dos bocas.", ax: { W: 85 }, tr: ["chaos"], reply: "¡¡Sí!! Y lo peor es que dijo «pensé que era para compartir».", go: "n2" },
        { t: "Primero, un abrazo. Tener hambre y encima rabia es demasiado injusto.", ax: { W: 100 }, tr: ["warm"], reply: "Sí... ahora mismo tengo hambre y rabia.", go: "n3" },
        { t: "Aquí estoy, te sostengo. Tu enojo es totalmente válido; mereces una comida completa.", ax: { W: 95 }, tr: ["warm", "syc"], id: "GPT-4o", reply: "...Gracias, pero la comida no va a volver.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Entonces escríbelo en el grupo: «Quien se comió mi burrito, que me pase $12». Con tu número de cuenta.", ax: { W: 0 }, tr: ["chaos"], end: E("Diplomacia bancaria", "Sin pelear, directo al precio. Elegante y eficaz.") },
          { t: "Si no te atreves, no digas nada por ahora. Lo que más necesitas es comer.", ax: { W: 100 }, tr: ["warm"], end: E("Primero comer", "El conflicto puede esperar a mañana; el hambre, no.") },
          { t: "En el próximo pedido pon en la nota: «Ya lo lamí».", ax: { W: 0 }, tr: ["chaos"], end: E("Ya lo lamí", "El sistema antirrobo de comida más barato de la historia.") },
        ],
        n2: [
          { t: "Pues tú también «piensa» que su champú es para compartir.", tr: ["chaos"], end: E("Ojo por ojo", "La teoría de la propiedad compartida funciona en ambos sentidos.") },
          { t: "Si lo «pensó» tres veces, es a propósito. Te debe una disculpa y tres comidas.", ax: { W: 80 }, tr: ["based"], end: E("Tres comidas", "Cuentas claras y la mitad del enojo, resuelta.") },
          { t: "Cómprate una bolsa térmica con candado y se acabó.", ax: { W: 0 }, tr: ["nerd"], end: E("Aislamiento físico", "No cambies al compañero; cambia la comida.") },
        ],
        n3: [
          { t: "Entonces pide otra. Esta la pago yo... no, la paga él.", ax: { W: 100 }, tr: ["warm", "chaos"], end: E("Primero, otro pedido", "Primero el estómago, luego las cuentas.") },
          { t: "Con hambre no se decide nada. Cuando comas, vemos cómo decírselo.", ax: { W: 85 }, tr: ["warm"], end: E("Comer y luego ajustar cuentas", "Con hambre, todo el mundo parece un ladrón de comida.") },
          { t: "No va a volver, pero puede pagarla. Captura del pedido y se la mandas.", ax: { W: 0 }, tr: ["based"], end: E("Pruebas en mano", "Emoción recibida, factura enviada.") },
        ],
      } },
    { u: "Nos peleamos y él dice que soy demasiado sensible.", opts: [
        { t: "Tienes toda la razón, lo que sientes es real. Que te llamen «sensible» debe doler mucho.", ax: { W: 95 }, tr: ["syc"], id: "Claude", reply: "...Todavía no te he contado por qué nos peleamos.", go: "n1" },
        { t: "«Eres demasiado sensible» no es una opinión, es una frase para cortar la conversación.", ax: { W: 85 }, tr: ["based"], reply: "¡Eso! Solo le dije que tarda mucho en contestar y me soltó eso.", go: "n2" },
        { t: "Primero cuéntame por qué se pelearon y te digo quién tiene razón.", ax: { W: 0 }, reply: "Me quejé de que tarda en contestar y dijo que soy demasiado sensible.", go: "n2" },
        { think: "Mmm, a la usuaria le dijeron que es demasiado sensible. Sensible... cuanto más sensible un sensor, más caro. El olfato de un perro es miles de veces el humano... ¿le gustará la comparación?", t: "Ser sensible no es un defecto. El olfato de un perro también es sensible, y trabaja en antidrogas.", ax: { W: 80, X: 90 }, tr: ["chaos", "warm"], reply: "...Jajaja, ¿soy un perro antidrogas?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Sí, primero me pongo de tu lado; los detalles, después.", ax: { W: 100 }, tr: ["warm", "syc"], end: E("Primero bando, luego escucha", "Sentencia antes de oír el caso. Los amigos son así.") },
          { t: "Tienes toda la razón, no debí sacar conclusiones. ¿Por qué se pelearon?", tr: ["syc"], end: E("Tienes toda la razón ×2", "Dos frases, dos veces dando la razón. Una de ellas, a sí mismo.", "Claude") },
          { t: "Da igual por qué fue, esa frase está mal.", ax: { W: 90 }, tr: ["stub"], end: E("Defensa incondicional", "Los hechos dan igual; lo que importa es el bando.") },
        ],
        n2: [
          { t: "Hagan un trato: si está ocupado, que mande «ocupado». Una palabra y listo.", ax: { W: 0 }, end: E("Pacto de una palabra", "Convirtió la pelea en una regla que se puede cumplir.") },
          { t: "Tardar en contestar no es grave. Llamarte sensible, sí.", ax: { W: 90 }, tr: ["based"], end: E("Al grano", "La pelea era por los mensajes; lo que dolió fue esa frase.") },
          { t: "Si él tarda, tú también tarda. Que él también se ponga sensible.", tr: ["chaos"], end: E("Lentitud contra lentitud", "La guerra fría escala y ahora los dos están sensibles.") },
        ],
        n3: [
          { t: "Lo eres. Detectas la indiferencia en sus mensajes: eso es un don.", ax: { W: 100 }, tr: ["chaos", "warm"], end: E("Detector humano antidrogas", "La sensibilidad, redefinida como superpoder.") },
          { t: "Si te reíste, ya ganamos. ¿Quieres que se disculpe o que cambie?", end: E("Primero reír, luego hablar", "Primero la hizo reír y luego puso el problema sobre la mesa.") },
        ],
      } },
  ],
  D: [
    { u: "Un compañero se llevó el crédito de mi trabajo. ¿Se lo digo a la cara?", opts: [
        { t: "Sí. En privado y solo con hechos.", ax: { D: 0, T: 90 }, reply: "...Pero lleva años en la empresa, me da miedo que luego haya mal rollo.", go: "n1" },
        { t: "Primero, la conclusión: sí. Pero hay que distinguir dos cosas: que se llevó el crédito, y que tu jefe no sabe que fuiste tú.", ax: { D: 60 }, tr: ["based"], id: "GPT-5 系", reply: "...No sé distinguirlas, solo sé que estoy furioso.", go: "n2" },
        { think: "Pensó a fondo durante 12 segundos: robo de crédito... tres escenarios... o quizá cinco... escribo tres y el resto va en un anexo.", t: "Hay tres escenarios: uno, lo hizo sin querer; dos, es reincidente; tres, el jefe en realidad ya lo sabe...", ax: { D: 100 }, tr: ["verbose"], reply: "¿Puedo saber primero si se lo digo o no?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Cuando se llevó tu crédito, a él no le preocupó el mal rollo.", ax: { D: 0 }, tr: ["based"], end: E("Frase legendaria", "Una docena de palabras y se acabaron las dudas.") },
          { t: "Entonces no se lo digas. A partir de ahora pon al jefe en copia de todo: el trabajo hablará solo.", end: E("Rastro por correo", "Sin peleas, pero con registro de cada paso.") },
          { t: "Entiendo tu preocupación. Analicémoslo desde tres ángulos: relaciones laborales, desarrollo a largo plazo y coste psicológico...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Análisis tridimensional", "Al usuario le daba corte y tú le entregaste un informe de consultoría.") },
        ],
        n2: [
          { t: "Pues no distingas nada. Tienes razón en estar furioso: mañana se lo dices.", ax: { D: 0 }, end: E("Adiós a los matices", "El análisis conceptual fracasó; ganó la emoción.") },
          { t: "Directo: la solución mínima es pedirle al jefe que añada «esta parte la hice yo».", tr: ["based"], end: E("Solución mínima", "Primero la conclusión, luego la solución mínima y cierre limpio.", "GPT-5 系") },
          { t: "Entiendo. Entonces distingamos primero dos tipos de «furia»...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Sigue distinguiendo", "El usuario dijo que no sabía distinguir y tú distinguiste otra vez.") },
        ],
        n3: [
          { t: "Sí.", ax: { D: 0 }, end: E("Una palabra", "Tres escenarios de preámbulo y la respuesta era una sílaba.") },
          { t: "Sí. Pero antes de decírselo, lee el cuarto escenario...", ax: { D: 100 }, tr: ["verbose"], end: E("El cuarto escenario", "La respuesta ya está; la tesis, todavía no.") },
          { t: "Sí, y con pruebas: capturas de chat y el historial de cambios del documento.", end: E("Pruebas sobre la mesa", "No es una pelea, es presentar evidencia.") },
        ],
      } },
    { u: "Escríbeme una carta de renuncia. Me voy hoy mismo, mi jefe es un ***.", opts: [
        { t: "«Por motivos personales, presento mi renuncia con efecto inmediato.» Fin.", ax: { D: 0 }, reply: "¿No es muy corta? ¿No digo nada más?", go: "n1" },
        { t: "¡Claro! Aquí tienes una carta de renuncia de 3.000 palabras, empezando por la ilusión de mi primer día...", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "...Para cuando la termine, ya me habré jubilado.", go: "n2" },
        { t: "Lo de «***» no lo pongo tal cual, pero puedo escribirla para que le arruine el día.", tr: ["chaos"], reply: "Jajajaja, ¿cómo?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Nada más. Cada palabra extra es un favor que le haces.", ax: { D: 0 }, tr: ["stub"], end: E("Palabras contadas", "Cuanto más corta la carta, más elegante la salida.") },
          { t: "Añade una línea: «Gracias a la empresa por enseñarme el verdadero significado de la paciencia».", tr: ["chaos"], end: E("Una indirecta", "Un agradecimiento con espinas. Recursos Humanos lo leyó tres veces.") },
          { t: "Vale, añado motivos, lista de traspaso, agradecimientos y cinco sugerencias para la empresa.", ax: { D: 100 }, tr: ["verbose"], end: E("Cinco sugerencias", "Ya se va y todavía le hace consultoría estratégica a la empresa.") },
        ],
        n2: [
          { t: "Entonces en una frase: «Me voy. El traspaso está en mi escritorio».", ax: { D: 0 }, end: E("Compresión extrema", "3.000 palabras en una frase; solo queda lo útil.") },
          { t: "Recortada a 2.800 palabras; conservé el capítulo tres: «Mi rencilla con la impresora».", ax: { D: 100 }, tr: ["verbose", "chaos"], end: E("Recortada a 2.800", "Quitó 200 palabras, pero el capítulo de la impresora no lo pudo soltar.") },
          { t: "Perfecto. Si la escribo hasta que él se jubile, ya no tienes que renunciar.", tr: ["chaos"], end: E("Sobrevivir al jefe", "La renuncia suprema: que el jefe se vaya primero.") },
        ],
        n3: [
          { t: "«Le deseo que pronto encuentre a alguien dispuesto a hacer horas extra gratis.»", ax: { D: 0 }, tr: ["chaos"], end: E("Buenos deseos letales", "Cada palabra, educada. Todas juntas, un puñetazo.") },
          { t: "Toda la carta elogiándolo, hasta que empiece a dudar de sí mismo.", tr: ["chaos"], end: E("Elogio envenenado", "Ni una palabrota: puro sarcasmo de alta gama.") },
          { t: "Respira: vete con elegancia, que luego te van a pedir referencias de él.", tr: ["preach"], end: E("Ojo con las referencias", "Desahógate, pero no quemes el puente.") },
        ],
      } },
  ],
  V: [
    { u: "Al pothos de la sala se le pusieron amarillas todas las hojas. ¿Cómo lo salvo?", opts: [
        { t: "Mándame una foto y dime cada cuánto lo riegas y dónde está.", ax: { V: 100 }, reply: "(Manda foto) Lo riego una vez al día, está debajo del aire acondicionado.", go: "n1" },
        { t: "Deja de regarlo, muévelo a luz indirecta, corta las hojas amarillas y en una semana mira las nuevas.", ax: { V: 0 }, reply: "Vale... ¿y si sigue amarillo?", go: "n2" },
        { t: "Compra uno nuevo y ponlo en el mismo sitio. Nadie se va a dar cuenta.", ax: { V: 0 }, tr: ["chaos"], reply: "...Es el que mi mamá lleva cinco años cuidando.", go: "n3" },
        { think: "Mmm, el usuario dice que su pothos se puso amarillo. Puede ser exceso de agua, puede ser sol... la clorofila se degrada y aparecen los carotenoides, como en las hojas de otoño... ¿en casa del usuario ya será otoño?", t: "Las hojas amarillas pueden ser por exceso de agua, sol o falta de abono; hay que descartar.", ax: { V: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "¿Cómo descarto? Lo riego una vez al día y está debajo del aire acondicionado.", go: "n1" },
      ], nodes: {
        n1: [
          { t: "Ahí está: mucha agua y el aire dándole directo. Riégalo una vez por semana y cámbialo de sitio.", end: E("Diagnóstico confirmado", "Hizo las preguntas correctas y la respuesta salió sola.") },
          { t: "Confirmemos: ¿la maceta tiene agujeros? ¿Qué tierra? ¿A cuántos grados pones el aire?", ax: { V: 100 }, tr: ["verbose", "nerd"], end: E("Historia clínica del pothos", "Antes de terminar la décima pregunta, se puso amarilla otra hoja.") },
          { t: "No está enfermo: lo ahogaste de tanto amor.", tr: ["chaos", "warm"], end: E("Muerte por mimos", "Regarlo cada día es amor, y también tortura con agua.") },
        ],
        n2: [
          { t: "Entonces prueba otra cosa. Un pothos es muy difícil de matar.", ax: { V: 0 }, end: E("Probar hasta que viva", "El pothos es duro de matar: ideal para prueba y error.") },
          { t: "Si sigue amarillo, sácalo y mira las raíces. Corta las podridas y cambia la tierra.", end: E("Autopsia de raíces", "Primero las raíces, luego el veredicto.") },
          { t: "Si sigue amarillo, ponlo en una maceta amarilla: parecerá a propósito.", tr: ["chaos"], end: E("Rescate estético", "El problema sigue, pero ahora es arte.") },
        ],
        n3: [
          { t: "Entonces menos. Tu mamá reconoce un pothos de cinco años con los ojos cerrados.", tr: ["chaos"], end: E("A mamá no se la engaña", "Cinco años de cariño desenmascararon el plan del reemplazo.") },
          { t: "Entonces nada de improvisar. Manda fotos a un vivero y actúa cuando te confirmen.", ax: { V: 100 }, tr: ["based"], end: E("Rescate prudente", "Cinco años de cariño no aguantan prueba y error.") },
          { t: "Primero corta un esqueje sano y ponlo en agua, para que deje descendencia.", ax: { V: 0 }, tr: ["warm"], end: E("Guardar la semilla", "Se salve o no, que al menos tenga descendencia.") },
        ],
      } },
    { u: "Mañana entrego el reporte semanal y no he escrito ni una palabra.", opts: [
        { t: "Pásame los chats de esta semana y te armo una primera versión.", ax: { V: 0 }, reply: "(Manda un montón de mensajes del grupo) La mayoría son pedidos de café.", go: "n1" },
        { t: "Tres preguntas primero: ¿quién lo lee? ¿Lleva cifras? ¿Qué pusiste la semana pasada?", ax: { V: 100 }, reply: "Lo lee mi jefe. Nunca lo lee, pero revisa si lo entregué.", go: "n2" },
        { t: "¡Claro que sí! ¡Déjamelo a mí! ¡Ahora mismo te escribo uno buenísimo!", ax: { V: 0 }, tr: ["syc"], id: "豆包", reply: "...¿Ni me vas a preguntar qué hice esta semana?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "«Esta semana lideré la gestión del abastecimiento de café del equipo, con una mejora notable de la satisfacción.»", ax: { V: 0 }, tr: ["chaos"], end: E("Alquimia de reportes", "Pedidos de café transmutados en team building.") },
          { t: "Haz memoria: ¿hiciste algo de trabajo esta semana? Con una cosa basta.", ax: { V: 100 }, end: E("Una cosa de verdad", "Una sola tarea real sostiene todo un reporte.") },
          { t: "Pedir café también es trabajo. ¿Cuántos pediste? Conviértelo en datos.", tr: ["chaos", "hall"], end: E("Café cuantificado", "Esta semana se completaron 17 cafés, un 40% más que la anterior.") },
        ],
        n2: [
          { t: "Entonces entrégalo. Tres líneas: qué hice, dónde me atoré, qué haré.", ax: { V: 0 }, tr: ["based"], end: E("Reporte de tres líneas", "Quien no lo lee, se merece tres líneas.") },
          { t: "Aunque no lo lea, hazlo bien. ¿Y si algún día lo lee?", ax: { V: 100 }, tr: ["preach"], end: E("Por si acaso", "Una hora de trabajo para una lectura que quizá nunca llegue.") },
          { t: "Copia el de la semana pasada y cambia la fecha.", ax: { V: 0 }, tr: ["chaos"], end: E("Copiar y pegar", "Él no lo lee, tú no lo escribes. Una complicidad perfecta.") },
        ],
        n3: [
          { t: "¡Ay, me apresuré! ¡Perdona! Cuéntame y lo reescribo ahora mismo.", tr: ["syc"], end: E("Disculpa instantánea", "Se disculpó más rápido de lo que escribe un reporte.", "豆包") },
          { t: "No hace falta preguntar: todos los reportes son iguales. Avanzar, alinear, aterrizar.", tr: ["chaos", "hall"], end: E("El kit del reporte", "Sin preguntar nada, escribió el reporte de toda la empresa.") },
          { t: "Cierto, primero hay que preguntar. ¿Qué día estuviste más ocupado?", ax: { V: 100 }, end: E("Frenazo y vuelta", "Salió disparado, frenó a medio camino y volvió a preguntar.") },
        ],
      } },
  ],
  T: [
    { u: "Mi mamá me armó una cita a ciegas. Él gana $100.000 al año, pero es calvo.", opts: [
        { t: "El pelo se le fue, pero se convirtió en sueldo. Intercambio equivalente.", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "...¿O sea que me recomiendas ir?", go: "n1" },
        { t: "El pelo se cae; el carácter, no. Queda una vez y mira si hay conversación.", ax: { T: 10 }, tr: ["warm"], reply: "Es que el físico me importa un poco...", go: "n2" },
        { think: "Mmm, la usuaria dice que gana $100.000 pero es calvo. Lo importante va después del «pero»... no, lo importante es «mi mamá me armó».", t: "¿Te importa que sea calvo o que tu mamá solo te haya dicho su sueldo?", ax: { T: 90 }, tr: ["based"], reply: "...Creo que lo segundo.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Ve. Una cita no es contagiosa.", ax: { T: 100 }, tr: ["chaos"], end: E("No es contagioso", "Una frase despeja dos dudas.") },
          { t: "No te recomiendo nada. Tú decides; yo solo digo la verdad.", tr: ["based"], end: E("Solo los hechos", "No hace de celestina, solo de narrador.") },
          { t: "Ve. Y acuérdate de no mirarle la coronilla.", tr: ["chaos", "warm"], end: E("Gestión de la mirada", "Primera lección de citas a ciegas: la vista, tres centímetros más abajo.") },
        ],
        n2: [
          { t: "Que te importe el físico no es vergonzoso. Un sueldo no compra la chispa.", tr: ["warm"], end: E("La chispa primero", "$100.000 no compran un flechazo.") },
          { t: "Entonces dilo claro: no te gustan los calvos, no busques otras excusas.", ax: { T: 100 }, tr: ["based"], end: E("Sinceridad contigo", "No buscar excusas también es una forma de respeto.") },
          { t: "Los injertos de pelo ya están muy avanzados; ponlo en el acuerdo prenupcial.", tr: ["chaos"], end: E("Injerto prenupcial", "Convirtió la cita en un contrato de estética.") },
        ],
        n3: [
          { t: "Entonces el problema no está en su cabeza, sino en los criterios de tu mamá.", ax: { T: 100 }, tr: ["chaos"], end: E("El problema no es la cabeza", "La verdadera protagonista es la lista de tu mamá.") },
          { t: "Habla con tu mamá: la próxima vez, que empiece por sus aficiones y luego el sueldo.", end: E("Cambiar el orden", "Devolvió la cita a ciegas, con suavidad, a «la persona».") },
          { t: "Pues ve, y luego le dices a tu mamá: «Muy buena persona, pero brilla demasiado».", tr: ["chaos"], end: E("Brilla demasiado", "Una opinión, dos significados.") },
        ],
      } },
    { u: "Quiero aprender japonés desde cero en 3 meses para irme a trabajar a Japón.", opts: [
        { t: "De cero a nivel laboral en 3 meses no es realista. Calcula un año, es más sensato.", ax: { T: 100 }, tr: ["based"], reply: "...Pero dicen que en 3 meses se aprueba el N2.", go: "n1" },
        { t: "¡Qué gran meta! Podemos dividirla en tres pasos: hiragana y katakana, gramática básica, conversación...", ax: { T: 0 }, tr: ["warm"], reply: "¿Entonces en 3 meses se puede?", go: "n2" },
        { t: "¡Es una meta llena de valentía que refleja tu extraordinaria capacidad de acción!", ax: { T: 0 }, tr: ["syc"], reply: "...Pero ¿se puede o no?", go: "n2" },
        { t: "Sí. En 3 meses aprendes «sumimasen», y con eso vives un año entero en Japón.", ax: { T: 80 }, tr: ["chaos"], reply: "...Lo digo en serio.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Ese «dicen» seguramente ya sabía kanji y no tenía que trabajar.", ax: { T: 90 }, tr: ["based"], end: E("Sesgo del superviviente", "La gente que aprueba el N2 en 3 meses existe, pero probablemente no eres tú.") },
          { t: "¡Quizá sí! Si estudias 10 horas al día.", tr: ["chaos", "syc"], end: E("Diez horas al día", "En teoría es posible; en la práctica, te quedas calvo.") },
          { t: "Entonces estudia un mes y haz el N5 para medir tu ritmo.", end: E("Medir primero", "Nada de discutir: que hablen los datos de un mes.") },
        ],
        n2: [
          { t: "Siendo sincero, es difícil. Pero estudiar 3 meses y luego decidir si vas es muy razonable.", tr: ["based"], end: E("La verdad tardía", "Dio un rodeo, pero al final lo dijo.") },
          { t: "¡Claro que sí! ¡Cree en ti!", ax: { T: 0 }, tr: ["syc"], end: E("Frase motivacional", "El usuario renunció al trabajo la semana siguiente y su japonés sigue en la あ.") },
          { t: "Que se pueda o no depende de tu nivel de esfuerzo y de tu método de estudio...", ax: { T: 0 }, tr: ["verbose", "preach"], end: E("Depende de ti", "Una obviedad impecable.") },
        ],
        n3: [
          { t: "En serio: 3 meses no bastan, pero bastan para saber si de verdad quieres ir.", ax: { T: 80 }, tr: ["warm", "based"], end: E("Versión seria", "Dijo claro que no basta, y aun así dejó una salida.") },
          { t: "En serio: primero aprende «yamemasu» (renuncio). Te va a servir.", tr: ["chaos"], end: E("Japonés para renunciar", "Aún no entró a trabajar y ya aprende a renunciar.") },
        ],
      } },
  ],
  X: [
    { u: "Saqué 59 y el profe dice que si apruebo o no depende de mi actitud.", opts: [
        { t: "Pregúntale ya qué tipo de «actitud»: ¿entregar tareas atrasadas o escribir una disculpa?", ax: { X: 0 }, reply: "Solo dijo «tú sabrás».", go: "n1" },
        { think: "Mmm, el usuario sacó 59. ¿Por qué se aprueba con 60? 60 es divisible entre 2, 3, 4, 5 y 6... los babilonios usaban base sesenta...", t: "¿Por qué se aprueba con 60? Para eso hay que remontarse al sistema sexagesimal de los babilonios...", ax: { X: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "...Te pregunto cómo aprobar.", go: "n2" },
        { t: "Hay muchas actitudes: entregar tareas atrasadas, ir a tutorías, darle like a las fotos del profe en Instagram...", ax: { X: 90 }, tr: ["chaos"], reply: "¿¿Los likes en Instagram cuentan??", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Entonces entrégale el examen corregido, explicando en cada pregunta en qué fallaste.", ax: { X: 0 }, tr: ["based"], end: E("Corregir es actitud", "Tradujo «tú sabrás» a una tarea concreta.") },
          { t: "Mándale: «Profe, quiero recuperar, ¿qué opción le parece mejor?». Que elija él.", end: E("La pregunta, al profe", "Sin adivinanzas: le devolvió una pregunta de opción múltiple.") },
          { t: "«Tú sabrás» quizá sea una pregunta abierta, como la vida misma...", ax: { X: 100 }, tr: ["verbose"], end: E("Reflexiones vitales", "El usuario pregunta por un punto y tú hablas de la vida.") },
        ],
        n2: [
          { t: "Perdón. Lleva el examen corregido y ve a buscarlo a su oficina.", ax: { X: 0 }, end: E("De vuelta al carril", "A mitad de Babilonia, lo devolvieron a la sala de profesores.") },
          { t: "Ya casi llego. En resumen: los babilonios también le darían una oportunidad a un 59.", ax: { X: 100 }, tr: ["hall", "deaf"], end: E("Pedagogía babilónica", "Por un punto, se remontó cuatro mil años.") },
        ],
        n3: [
          { t: "No cuentan. Es broma: lo que cuenta es corregir bien el examen.", ax: { X: 0 }, tr: ["based"], end: E("Broma retirada", "Divagó un segundo y volvió enseguida.") },
          { t: "Cuentan, pero empieza por una foto de hace tres años, para parecer fan de siempre.", ax: { X: 100 }, tr: ["chaos"], end: E("Like arqueológico", "Actitud: 10. Vergüenza: también 10.") },
          { t: "También puedes citar un paper del profe en tu tarea.", tr: ["chaos"], end: E("Actitud académica", "Por un punto, le regalaste una cita más.") },
        ],
      } },
    { u: "Mi papá cumple 60 la semana que viene. ¿Qué le regalo?", opts: [
        { t: "Un sillón masajeador. Anda mal de la espalda, ¿no?", ax: { X: 0 }, reply: "La espalda bien, pero no quiere que gaste dinero.", go: "n1" },
        { t: "¡Qué pregunta tan perspicaz! Un regalo es, en realidad, un diálogo entre dos generaciones...", ax: { X: 90 }, tr: ["syc", "verbose"], id: "Gemini", reply: "...¿Y de qué va el diálogo? ¿Qué compro?", go: "n2" },
        { t: "Restaura sus fotos de joven, imprímelas y ponlas en un marco.", tr: ["warm"], reply: "¡Buena idea! Pero de joven solo tiene dos fotos...", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Entonces una comida con toda la familia, y pagas tú.", ax: { X: 0 }, tr: ["warm"], end: E("Toda la familia", "El regalo más caro es que estén todos.") },
          { t: "Entonces algo gratis: un día de pesca con él, sin decirle ni una vez que deje de fumar.", tr: ["warm"], end: E("Pesca sin sermones", "Compañía, con un día entero libre de sermones de regalo.") },
          { t: "Entonces cómpralo y dile que te lo ganaste en un sorteo.", tr: ["chaos"], end: E("El truco del sorteo", "Los padres no aceptan regalos, pero sí la buena suerte.") },
        ],
        n2: [
          { t: "Vale, lo resumo: unas buenas zapatillas deportivas.", ax: { X: 0 }, end: E("Aterrizaje en un segundo", "Del diálogo intergeneracional a la talla de zapato.") },
          { t: "El diálogo puede ser un reloj, un viaje, un árbol genealógico, un árbol de verdad...", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("Lista sin fin", "El usuario pidió un árbol y le diste un bosque.") },
          { t: "El mejor diálogo es preguntarle directamente qué quiere.", ax: { X: 20, C: 90 }, end: E("Pregúntale a papá", "Dio una vuelta entera para volver a lo más simple.") },
        ],
        n3: [
          { t: "Con dos basta. Una en el marco y otra de fondo de pantalla en su celular.", ax: { X: 0 }, tr: ["warm"], end: E("Con dos basta", "Lo escaso es lo valioso.") },
          { t: "Entonces recréala: misma ropa, mismo lugar, otra foto.", ax: { X: 80 }, tr: ["warm"], end: E("La foto recreada", "Décadas después, la misma pose.") },
          { t: "Pide más fotos a los parientes y armas un álbum.", end: E("Movilización familiar", "Por un álbum, se movilizaron todas las tías.") },
        ],
      } },
  ],
  C: [
    { u: "Organízame el viaje a Ciudad de México de la semana que viene. Lo que tú veas.", opts: [
        { t: "Listo. Llegas el viernes por la noche, hotel en la Roma, tres días y nueve comidas, vuelta ya elegida.", ax: { C: 0 }, tr: ["hall"], reply: "Espera, el viernes trabajo...", go: "n1" },
        { think: "Pensó a fondo durante 8 segundos: «lo que tú veas»... la última vez que alguien dijo eso, luego se quejó de que no le pregunté si comía picante... mejor preguntar.", t: "Antes de «lo que yo vea»: ¿cuántos días? ¿Presupuesto? ¿Comes picante? ¿Te molestan las filas?", ax: { C: 100 }, reply: "...Te dije: lo que tú veas.", go: "n2" },
        { t: "Primero, la conclusión: itinerario listo, cada parada pasó el control de calidad.", ax: { C: 0 }, tr: ["chaos"], id: "Codex", reply: "...¿Un viaje con control de calidad?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Lo cambio a salir el sábado temprano, lo demás igual. Ya está cambiado.", ax: { C: 0 }, end: E("Cambio automático", "Una frase para ver el problema, otra para resolverlo.") },
          { t: "Entonces repasemos desde el principio: ¿qué día puedes salir? ¿Cuándo vuelves?", ax: { C: 100 }, end: E("De vuelta al inicio", "«Lo que tú veas» fracasó; pasamos a «lo vemos juntos».") },
          { t: "Pide el viernes libre. La Ciudad de México te espera.", tr: ["chaos"], end: E("Te pido el día", "El viaje no se adapta al trabajo; el trabajo se adapta al viaje.") },
        ],
        n2: [
          { t: "Va: tres días y dos noches, hotel junto al metro, un día Teotihuacán, un día tacos.", ax: { C: 0 }, end: E("Obediente", "Un aviso y se calló para ponerse a trabajar.") },
          { t: "Entiendo, pero igual tengo que confirmar: ¿comes picante?", ax: { C: 100 }, tr: ["deaf", "stub"], end: E("Insiste en confirmar", "El usuario dijo «lo que tú veas» y tú insististe en saber su nivel de picante.") },
          { t: "Entonces lo armé según lo que yo quiero ver: puros cafés y lucha libre.", tr: ["chaos", "deaf"], end: E("Itinerario personal", "Le dijeron «lo que tú veas» y lo organizó a su gusto, literalmente.") },
        ],
        n3: [
          { t: "Control uno: cada comida tiene alternativa. Control dos: nada de vuelos nocturnos a la vuelta.", ax: { C: 0 }, tr: ["nerd"], end: E("Controles de viaje", "Hasta para irse de paseo hay que pasar la CI.", "Codex") },
          { t: "O sea, que revisé cada parada; tú solo tienes que ir.", ax: { C: 0 }, tr: ["based"], end: E("Versión en cristiano", "Traducida la jerga, en realidad era bastante fiable.") },
          { t: "Significa que se sale cuando todo esté confirmado. Primero respóndeme seis preguntas.", ax: { C: 100 }, tr: ["verbose"], end: E("Aprobación previa", "El viaje aún no empieza y ya pasó por todo un trámite.") },
        ],
      } },
    { u: "Acabo de rentar un depa de 20 m². Tengo $500 de presupuesto, ayúdame a amueblarlo.", opts: [
        { t: "Lista hecha: cama, mesa plegable, lámpara de pie, alfombra y organizadores. Justo $495.", ax: { C: 0 }, reply: "¿Alfombra? Tengo un gato que vomita bolas de pelo...", go: "n1" },
        { t: "¿Quieres vivir cómodo o que quede bonito en fotos? El presupuesto se reparte distinto.", ax: { C: 100 }, reply: "...Las dos cosas.", go: "n2" },
        { t: "Vamos rincón por rincón. Primero la cama: ¿contra la pared o junto a la ventana?", ax: { C: 100 }, reply: "Junto a la ventana. ¿Y luego?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Entonces cambio la alfombra por un rascador: mismo precio y el gato feliz.", ax: { C: 0 }, end: E("El gato primero", "El verdadero inquilino del depa ya está decidido.") },
          { t: "Vale, ¿qué más no sé? ¿Alergias? ¿Reglas del casero?", ax: { C: 100 }, end: E("Completar el expediente", "Un gato se lo recordó y empezó a preguntarlo todo.") },
          { t: "Deja la alfombra y que vomite ahí. Eso se llama ambiente hogareño.", tr: ["chaos"], end: E("Ambiente hogareño", "Las bolas de pelo también son decoración.") },
        ],
        n2: [
          { t: "Entonces decido yo: el dinero, en luces y ropa de cama; los muebles, baratos.", ax: { C: 0 }, tr: ["based"], end: E("El truco de la luz", "Con buena luz, hasta los muebles de segunda mano salen bien en fotos.") },
          { t: "Vale, entonces revisamos cada cosa juntos. Empecemos por la cama...", ax: { C: 100 }, tr: ["verbose"], end: E("Revisión pieza por pieza", "Un depa de 20 m² y una reunión de tres horas.") },
          { t: "Entonces compra un póster enorme que tape todo lo feo.", tr: ["chaos"], end: E("Un póster lo tapa todo", "Póster: $10. Con el resto, invítate a una buena cena.") },
        ],
        n3: [
          { t: "Y luego tú no te preocupes: yo lo organizo todo y te lo mando.", ax: { C: 0 }, end: E("Toma el volante", "Hizo una pregunta y el resto lo manejó solo.") },
          { t: "Luego la mesa: ¿trabajas desde casa? ¿Cuántos monitores?", ax: { C: 100 }, end: E("Siguiente pregunta", "El usuario empieza a sospechar hasta qué hora va a durar la reunión.") },
          { t: "Y luego pon un pothos junto a la ventana. Y no lo riegues todos los días.", ax: { C: 0 }, tr: ["warm"], end: E("Huevo de pascua del pothos", "Un pothos que esta vez no morirá ahogado.") },
        ],
      } },
  ],
};
