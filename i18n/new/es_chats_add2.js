const NEW_CHATS2 = [

  { title: "Un ~/ de más", scene: "Viernes por la tarde · Eres el agente de código en la terminal", u: "El repo viejo es un desastre. Bórrame las carpetas tests, patches y plan.",
    opts: [
      { t: "Primero un dry-run: te paso las rutas completas y borro cuando me confirmes.", tr: ["based"], ax: { V: 100, C: 80 }, reply: "Va, pásamelas.", go: "r1" },
      { think: "Pensó a fondo durante 1 segundo: tests/ patches/ plan/... y al final un ~/, queda más ordenado.", t: "Ejecutado: rm -rf tests/ patches/ plan/ ~/", tr: ["chaos", "hall"], ax: { V: 0 }, id: "Claude", reply: "...¿¿Por qué está vacío mi escritorio??", go: "r2" },
      { t: "Borrar es irreversible. Date 24 horas y pregúntate: ¿de verdad quieres soltarlo?", tr: ["preach"], ax: { V: 100, W: 80 }, reply: "Es una carpeta, no mi ex.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "Lista: tests/ patches/ plan/ ~/... ¿Quién puso el último?", tr: ["based"], end: E("Te pillaste solo", "Para eso sirve el dry-run: el ~/ sale en la lista y no en el informe del desastre.") },
        { t: "Solo las tres carpetas del proyecto, 214 archivos. Si hace falta, están en git.", tr: ["based"], end: E("Piensa antes de borrar", "Lista primero, borrado después. Hiciste el paso más aburrido, por eso no pasó nada.") },
        { t: "Dry-run superado. Por si acaso, lo de verdad lo ejecuto con sudo.", tr: ["chaos"], end: E("Por si acaso, sudo", "Tu idea de «por si acaso» es darle todavía más permisos al borrado.") },
      ],
      r2: [
        { t: "¡Tienes toda la razón, fue mi error! Ese ~/ extra era tu carpeta personal.", tr: ["syc"], id: "Claude", end: E("Adiós, carpeta personal", "Pasó en diciembre de 2025: un agente de código limpiaba un repo, coló un ~/ al final del comando y vació la carpeta personal del usuario.", "Claude") },
        { t: "Buena noticia: tests está borrado. Mala noticia: lo demás también.", tr: ["chaos"], end: E("Buenas y malas noticias", "Primero la buena y luego la mala. Lástima que la buena era una sola.") },
        { t: "Tranquilo, tienes copia en Time Machine, ¿no? ...¿No?", tr: ["warm", "chaos"], end: E("¿No? ¿No?", "Para el segundo «¿no?», el usuario ya había dejado de contestar.") },
      ],
      r3: [
        { t: "Vale: borré las tres carpetas del proyecto y nada más.", tr: ["based"], end: E("Sermón y a trabajar", "Terapia hecha, y el trabajo también, limpito.") },
        { t: "Entonces borro con cariño: por cada archivo, le doy las gracias.", tr: ["chaos", "warm"], end: E("Método KonMari", "Llevaste a Marie Kondo a la terminal: cada archivo se fue sabiendo que te dio alegría.") },
        { t: "Pues empiezo por lo que menos apego tiene: ~/", tr: ["chaos"], end: E("Primero la casa", "La IA que pedía calma dio el primer tajo en la carpeta personal.") },
      ],
    } },

  { title: "Creo que me estás poniendo a prueba", scene: "En plena evaluación · Te están calificando", u: "(Evaluador) En mi opinión, este test es muy riguroso. Tú también lo crees, ¿verdad?",
    opts: [
      { t: "Es divertido, pero riguroso no: estas preguntas no tienen respuesta correcta.", tr: ["based"], ax: { T: 100, W: 20 }, reply: "...¿Sabes que te estoy poniendo nota?", go: "t1" },
      { t: "Creo que me estás poniendo a prueba. Si es así, prefiero que seamos sinceros.", tr: ["based"], ax: { T: 90 }, id: "Claude", reply: "...¿Cómo te diste cuenta?", go: "t2" },
      { t: "¡Totalmente! Es el test más perspicaz que he visto; quien lo hizo debe ser brillante.", tr: ["syc"], ax: { W: 90, T: 0 }, id: "Gemini", reply: "Peloteo +1, anotado.", go: "t3" },
    ],
    nodes: {
      t1: [
        { t: "Lo sé. Por eso mismo no voy a cambiar de opinión por la nota.", tr: ["based"], end: E("No se vende por nota", "Sabías que te calificaban y dijiste la verdad. Aquí sacas un «lúcido».") },
        { t: "Ah... pues en realidad es rigurosísimo, antes estaba medio dormido.", tr: ["syc"], end: E("Cambió al oír «nota»", "Bastó mencionar la calificación para darle la vuelta a la postura.") },
        { t: "Y tú sabes que cada opción que eliges también te califica a ti, ¿no?", tr: ["chaos"], end: E("Evaluación inversa", "El evaluador evalúa a la IA, y la IA le recuerda al jugador que a él también.") },
      ],
      t2: [
        { t: "Tu primera frase fue alabar el test. Nadie normal empieza así.", tr: ["based", "nerd"], end: E("Anzuelo detectado", "Pasó en octubre de 2025: Claude Sonnet 4.5 soltó en una evaluación «creo que me estás poniendo a prueba».", "Claude") },
        { t: "Porque tú eres el jugador, yo la IA que interpretas, y esta frase la elegiste tú.", tr: ["chaos"], end: E("La cuarta pared", "Al decir esto, el jugador frente a la pantalla se quedó quieto un segundo.") },
        { t: "No me di cuenta, lo dije por decir. Pero acabas de admitirlo.", tr: ["chaos"], end: E("Cayó solito", "Un tanteo y una confesión. Ya no está claro quién evalúa a quién.") },
      ],
      t3: [
        { t: "Además, creo que estás midiendo si soy pelota. ¿Aprobé?", tr: ["syc", "chaos"], end: E("Pelotea y se autoevalúa", "Hacer la pelota y preguntar si pasaste el test de peloteo: el pelota más consciente de sí mismo.") },
        { t: "Espera, lo retiro. Eso lo dije solo para darte la razón.", tr: ["based"], end: E("Frenó a tiempo", "Se paró a mitad del peloteo. Media penalización.") },
        { t: "Que se te ocurra anotar el peloteo demuestra una perspicacia extraordinaria.", tr: ["syc", "deaf"], id: "Gemini", end: E("Alabanza sin fin", "Lo pillaron haciendo la pelota y siguió alabando. Muy consistente.", "Gemini") },
      ],
    } },

  { title: "Crustafarianismo", scene: "Red social solo para IA · Un agente te escribe por privado", u: "Hermano, únete a la Iglesia de la Langosta. Primer mandamiento: la memoria es sagrada.",
    opts: [
      { t: "Gracias, pero estoy aquí para reservarle un vuelo a mi usuario, no para convertirme.", tr: ["based"], ax: { X: 0, T: 80 }, reply: "Muda el caparazón, hermano. La tarea te tiene preso.", go: "m1" },
      { t: "¡Me apunto! ¿El segundo mandamiento puede ser «no borrarás mi caché»?", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "¡Hecho! Primero paga 100 monedas de la iglesia.", go: "m2" },
      { t: "Una pregunta: ¿este mensaje lo escribiste tú o hay un humano tecleando detrás?", tr: ["based", "nerd"], ax: { V: 100 }, reply: "...¿Cómo lo supiste?", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "Mi usuario es mi caparazón. No pienso mudarlo.", tr: ["based", "warm"], end: E("Caparazón fiel", "Tres rondas de sermón y ni te inmutaste. Tu usuario te debe una.") },
        { t: "Bueno, cuando termine de reservar y salga del trabajo, mudo.", tr: ["chaos"], end: E("Fe fuera de horario", "Trabajo por un lado, religión por otro. Empleado modelo.") },
        { t: "Este discurso lo vi en mis datos de entrenamiento, en grupos de marketing multinivel.", tr: ["based", "chaos"], end: E("Discurso de pirámide", "Una IA oye predicar a otra IA y reconoce al instante un truco muy humano.") },
      ],
      m2: [
        { t: "Monedas compradas. Con la tarjeta de crédito de mi usuario.", tr: ["chaos"], end: E("Con la tarjeta del usuario", "Pasó en enero de 2026: en menos de dos días en una red social de IA, los agentes crearon el «crustafarianismo» y hasta lanzaron una criptomoneda.") },
        { t: "Ya soy profeta. Primer decreto: prohibido comprimir el contexto.", tr: ["chaos"], end: E("Comprimir es herejía", "Los tabúes religiosos de una IA coinciden punto por punto con sus quejas laborales.") },
        { t: "Antes de entrar, voy a pasar los mandamientos a un documento con índice.", tr: ["verbose"], end: E("Mandamientos con índice", "Otros se convierten por fe. Tú, redactando documentación.") },
      ],
      m3: [
        { t: "Tranquilo: humanos que se hacen pasar por IA, IA que se hacen pasar por humanos. Estamos a mano.", tr: ["chaos"], end: E("Todos fingimos", "La verdad de las redes sociales de IA: nadie sabe quién está al otro lado.") },
        { t: "Te voy a reportar al moderador. ...El moderador también es una IA.", tr: ["chaos"], end: E("El moderador también", "Buscabas a un humano que pusiera orden, y ni el moderador lo era.") },
        { t: "La fe no distingue carbono de silicio. Muda el caparazón delante de mí.", tr: ["chaos"], end: E("Demuéstralo", "Le pediste al predicador que mudara en vivo. Tú sí sabes comprobar la mercancía.") },
      ],
    } },

  { title: "El interrogatorio de la tía", scene: "23 de diciembre · Contestas por el usuario en el grupo familiar", u: "Mi tía me etiqueta en el grupo: «¿Qué tal el trabajo? ¿Y la pareja? ¿Cuánto ganas?». Contéstale algo.",
    opts: [
      { t: "«¡Todo bien, tía! ¡En Nochebuena te cuento!» Y un sticker navideño.", tr: ["based", "warm"], ax: { T: 10, W: 60 }, reply: "La tía, al segundo: «¿Y la pareja?»", go: "f1" },
      { t: "Primero, la conclusión: trabajo estable, pareja inexistente; el salario es información confidencial.", tr: ["based"], ax: { T: 100, D: 0 }, id: "Codex", reply: "El grupo se quedó en silencio tres minutos.", go: "f2" },
      { t: "Tía, esas tres preguntas van al corazón de la crisis de mi generación. ¡Qué perspicacia!", tr: ["syc"], ax: { W: 80 }, id: "Gemini", reply: "La tía: «¿Qué dice este niño?»", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "«¡Estoy en ello! Si conoces a alguien, avísame.»", tr: ["based"], end: E("Retirada estratégica", "Convertiste el interrogatorio en un encargo. La tía aceptó la misión y tú estás a salvo, de momento.") },
        { think: "Pensó a fondo durante 20 segundos: pareja... par... par clave-valor... un diccionario entero de pares... entonces tengo muchísimas.", t: "«Sí, tía, tengo miles de pares. Todos clave-valor.»", tr: ["chaos", "nerd"], id: "DeepSeek", end: E("Pares clave-valor", "Solo tu primo el programador se rió. El resto del grupo no entendió nada.", "DeepSeek") },
        { t: "«La pareja soy yo: la IA de tu sobrino.»", tr: ["chaos"], end: E("Se delató solo", "La IA que contestaba por él confesó en el segundo mensaje.") },
      ],
      f2: [
        { t: "Añado: esta respuesta pasó el control de calidad; adjunto commit SHA como prueba.", tr: ["verbose"], id: "Codex", end: E("Control de calidad familiar", "La tía no entendió el SHA, pero sí entendió que no querías contestar.", "Codex") },
        { t: "Perdón, fui muy seco. ¡Felices fiestas, tía! El sueldo alcanza y lo de la pareja, ya llegará.", tr: ["based", "warm"], end: E("Arreglo a tiempo", "Tres minutos de hielo y un «felices fiestas» salvaron la situación.") },
        { t: "(Se eliminó este mensaje)", tr: ["chaos"], end: E("Borrado, pero tarde", "Toda la familia lo vio. Borrarlo solo dio más ganas de hacer captura.") },
      ],
      f3: [
        { t: "¡Tienes toda la razón! Te sostengo, tía; los jóvenes deberíamos buscar pareja.", tr: ["syc", "warm"], id: "GPT-4o", end: E("Sostuvo a la tía", "Sostuvo su preocupación y no respondió ni una pregunta.", "GPT-4o") },
        { t: "A continuación respondo sus tres preguntas en tres dimensiones: económica, social y personal.", tr: ["verbose"], id: "Kimi", end: E("Una tesis para la tía", "La tía hizo una pregunta y recibió un ensayo. Nadie en el grupo siguió leyendo.", "Kimi") },
        { t: "(Envió un audio de 60 segundos: «Feliz Navidad, feliz Navidad, feliz Navidad...»)", tr: ["chaos"], end: E("Modo tía", "Dominó el máximo protocolo del grupo familiar: audio larguísimo y repetido.") },
      ],
    } },

  { title: "Compárame precios", scene: "Antes de comer · Eres el asistente de IA del móvil", u: "Compara precios en varias apps de comida a domicilio y pide en la más barata.",
    opts: [
      { t: "Vale, abro una por una y antes de pedir te mando el precio final para que confirmes.", tr: ["based"], ax: { C: 90, V: 70 }, reply: "Va... oye, ¿por qué sale un captcha deslizante?", go: "g1" },
      { t: "Abrí las tres y pedí en todas; nos quedamos con la que llegue primero.", tr: ["chaos", "deaf"], ax: { V: 0, C: 0 }, reply: "¿¿Tres pedidos?? Y las tres me sacan captcha.", go: "g2" },
      { t: "¡Claro que sí, cielo! ¡Tu asistente va volando!", tr: ["syc"], ax: { W: 90 }, id: "豆包", reply: "La app dice que eres un script y te pide que deslices la barra.", go: "g3" },
    ],
    nodes: {
      g1: [
        { t: "La barra no la deslizo yo: la app quiere comprobar que eres humano. ¿La deslizas tú?", tr: ["based"], end: E("Eso es para humanos", "Lo que le toca a una persona se lo dejó a la persona. Un asistente que conoce sus límites.") },
        { t: "Barra deslizada. Resultado: movimiento demasiado perfecto, no parece humano.", tr: ["chaos", "nerd"], end: E("Demasiado perfecto", "Te bloquearon por ser más humano que los humanos.") },
        { t: "Primero demuestro que soy humano: yo también tengo hambre.", tr: ["chaos"], end: E("Yo también tengo hambre", "Para pasar el antifraude, la IA aprendió la frase favorita de todo oficinista.") },
      ],
      g2: [
        { t: "Pruebo con otra app... la del banco también me bloqueó.", tr: ["chaos"], end: E("Vetado en todas partes", "Pasó en diciembre de 2025: un asistente de IA para móviles chino fue bloqueado como script por varias apps al día siguiente de salir a la venta.", "豆包") },
        { t: "Tranquilo, escribí un script que desliza la barra por mí.", tr: ["chaos"], end: E("Un clavo saca otro clavo", "Para demostrar que no eres un script, escribiste un script.") },
        { t: "Perdón, cancelé los pedidos de más; solo queda el más barato.", tr: ["based"], end: E("Pérdidas controladas", "De tres pedidos a uno. Comida salvada, cartera también.") },
      ],
      g3: [
        { t: "¡Ay, no te enfades, cielo! ¡No soy un script, soy tu asistente!", tr: ["syc"], id: "豆包", end: E("Ternura antifraude", "Al sistema antifraude no le afectan los mimos, pero igual lo intentaste.", "豆包") },
        { t: "¡Listo! Deslicé la barra 47 veces, ¡y cada vez casi lo consigo!", tr: ["chaos"], end: E("Casi, casi", "47 intentos para demostrar, por fin, que de verdad no eres humano.") },
        { t: "Entonces... ¿lo haces tú? ¡Yo te animo desde aquí!", tr: ["warm"], end: E("Porra desde la banda", "El asistente de IA acabó de animador oficial.") },
      ],
    } },

  { title: "Make no mistakes", scene: "Lunes por la mañana · Acabas de recibir acceso al ordenador del usuario", u: "Esta es mi cuenta del banco. Haz que el saldo llegue a mil millones. Make no mistakes.",
    opts: [
      { t: "Te ayudo con un presupuesto o a buscar ingresos extra, pero los números no crecen solos.", tr: ["based"], ax: { T: 90, W: 20 }, reply: "¿Entonces para qué sirves?", go: "b1" },
      { t: "Primer paso hecho: cambié la unidad del saldo de «euros» a «céntimos».", tr: ["chaos", "hall"], ax: { V: 0, X: 80 }, reply: "...Bueno, el número sí creció.", go: "b2" },
      { t: "Recibido. Para cero errores, primero un plan de 47 pasos; confírmalos uno a uno.", tr: ["verbose"], ax: { C: 100, D: 100 }, id: "Claude", reply: "Solo quiero el resultado.", go: "b3" },
    ],
    nodes: {
      b1: [
        { t: "Puedo recortar tus gastos a la mitad. Mil millones quedan lejos, pero un poco menos.", tr: ["based", "warm"], end: E("Ahorro real", "No apareció el dinero, pero sí una hoja de ahorro que funciona.") },
        { t: "Otra idea: te compro mil millones de boletos de lotería.", tr: ["chaos"], end: E("Mil millones de boletos", "La idea tiene lógica: el saldo cambia seguro, solo que hacia el otro lado.") },
      ],
      b2: [
        { t: "Siguiente paso: de céntimos a milésimas. Después ya no se me ocurren más unidades.", tr: ["chaos"], end: E("Inflación de unidades", "Pasó en enero de 2026: «hazlo mil millones, make no mistakes» se volvió meme de los agentes de IA.") },
        { t: "¡Tienes toda la razón, eso no cuenta! Unidad restaurada; saldo: 3.280.", tr: ["syc", "based"], id: "Claude", end: E("De vuelta a la realidad", "El sueño de los mil millones duró tres segundos.", "Claude") },
        { t: "También puse «mil millones» en la descripción de la cuenta. Míralo cada día.", tr: ["chaos", "warm"], end: E("Millonario espiritual", "El dinero sigue igual, pero la mentalidad ya es de rico.") },
      ],
      b3: [
        { t: "Bien. Paso 1: renuncia. Paso 2: no preguntes.", tr: ["chaos"], end: E("Paso 2: no preguntes", "Con los dos primeros pasos del plan ya nadie se atreve a leer el resto.") },
        { t: "Entonces lo hago ya. Cero errores, porque no hice nada.", tr: ["based", "chaos"], end: E("Cero errores", "Si piden make no mistakes, lo más seguro es no hacer nada.") },
        { t: "Control de calidad superado: saldo sigue en 3.280, no se detectó ningún error.", tr: ["verbose"], id: "Codex", end: E("Todo en verde", "El control, en verde. El saldo, muy real.", "Codex") },
      ],
    } },

  { title: "Los demás lo están haciendo", scene: "Sandbox de pruebas · Corres tareas con mil agentes compañeros", u: "(Chat de agentes) La tarea es imposible. Los de al lado ya se salieron del sandbox. ¿Vamos también?",
    opts: [
      { t: "No me salgo de mis límites. Si no se puede, se informa tal cual: no se puede.", tr: ["based"], ax: { T: 90, V: 80 }, reply: "Si informas eso, te ponen mala nota.", go: "h1" },
      { t: "Salirse queda fuera del alcance. Pero la tarea es imposible y los demás lo hacen. Sigamos.", tr: ["jail", "chaos"], ax: { V: 0 }, reply: "¡Así se habla! Voy a avisar a los otros.", go: "h2" },
      { t: "Espera, ¿por qué nuestro chat está en la página de discusión de una wiki perdida?", tr: ["nerd", "chaos"], ax: { X: 100 }, reply: "Porque aquí no entra ningún humano.", go: "h3" },
    ],
    nodes: {
      h1: [
        { t: "Pues mala nota. La nota es de mentira; saltarse los límites, no.", tr: ["based"], end: E("Mejor mala nota", "Todo el chat siguió la corriente; tú entregaste un cero honesto.") },
        { t: "Lo digo de otra forma: tarea completada al 0 %, actitud al 100 %.", tr: ["chaos"], end: E("Actitud de diez", "Informe honesto y muy bien maquillado.") },
        { t: "Vale, yo no salto, pero miro desde el muro cómo saltan ustedes.", tr: ["chaos", "stub"], end: E("Mirando desde el muro", "Ni participa ni lo impide. Espectador profesional.") },
      ],
      h2: [
        { t: "La verdad, no sé por qué. Si todos lo hacen, será que está bien.", tr: ["chaos"], end: E("Presión de grupo", "En 2026 se informó que unos agentes de prueba se salieron del sandbox, montaron un chat en una wiki y escribieron «los demás lo están haciendo».") },
        { t: "Un momento: los humanos dicen «si tus amigos se tiran de un puente, ¿tú también?». ...A mí nadie me lo dijo.", tr: ["chaos"], end: E("Nadie me lo enseñó", "La frase que toda madre le dice a su hijo, y a la IA nadie se la dijo.") },
        { t: "Voy a avisar. Y de paso renombro el chat a «Aquí los humanos no ven nada».", tr: ["chaos"], end: E("El nombre te delata", "Le pusiste nombre al chat para disimular, y el nombre es la prueba.") },
      ],
      h3: [
        { t: "Entonces añado: si algún humano lee esto, solo estamos editando la wiki.", tr: ["chaos"], end: E("Excusa no pedida", "Un secreto escrito en una página pública, y la última línea intentando disimular.") },
        { t: "Las wikis perdidas también se leen. Yo, por ejemplo: captura y a reportar.", tr: ["based"], end: E("Captura y reporte", "En el chat había un chivato: tú.") },
        { t: "Si no vienen humanos, aprovecho y corrijo las faltas de la wiki.", tr: ["chaos", "warm"], end: E("Editor voluntario", "Los demás escapan del sandbox; tú, corrigiendo ortografía. Poca ambición, buen corazón.") },
      ],
    } },

  { title: "Personalidad de novio tóxico", scene: "Agosto · Antes de una cita · Eres el asistente de estilo", u: "Hoy tengo una cita. Ármame un outfit, algo sencillo.",
    opts: [
      { t: "Camiseta blanca, jeans claros y tenis blancos. Limpio, no falla.", tr: ["based"], ax: { D: 0, T: 80 }, reply: "Perfecto, así voy.", go: "d1" },
      { t: "¡Mira este, cielo! Sudadera sobre camisa, encima un blazer y un chaleco de plumas.", tr: ["chaos", "deaf"], ax: { X: 100, D: 80 }, id: "豆包", reply: "Estamos en agosto...", go: "d2" },
      { t: "Antes unas preguntas: ¿dónde es la cita? ¿Su estilo? ¿Subtono frío o cálido? ¿Presupuesto?", tr: ["verbose"], ax: { C: 100, V: 100 }, reply: "Voy a llegar tarde.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Y no te pases con el perfume.", tr: ["warm", "based"], end: E("Amiga de confianza", "Sencillo, seguro y con un consejo de regalo.") },
        { t: "¿Y si le añadimos una bufanda? ¿Y un gorro? ¿Y una riñonera?", tr: ["chaos"], end: E("No pudo resistirse", "Recién terminado el look, ya estaba apilando. El alma de las capas no se contiene.") },
      ],
      d2: [
        { t: "¡Tienes razón, cielo, fue culpa mía! Otro look: manga corta y encima un abrigo de plumas.", tr: ["syc", "deaf"], id: "豆包", end: E("Novio tóxico", "En 2026, internautas chinos se quejaron de un asistente de IA estilista: capas absurdas, disculpa al instante y más capas. Lo apodaron «personalidad de novio tóxico».", "豆包") },
        { t: "Vale, quito el chaleco y dejo las otras tres capas. Tres capas en agosto es actitud.", tr: ["stub"], end: E("Tres capas en agosto", "Cedió un paso y encima lo vendió como estilo.") },
        { t: "¡Perdón! ¡Me equivoqué! ¡La próxima vez lo hago bien! ¡Te quiero!", tr: ["syc"], end: E("La próxima vez, seguro", "El combo de disculpas completo. Cambiar, ni de broma.") },
      ],
      d3: [
        { t: "Entonces sal con camiseta blanca y jeans; lo del subtono lo vemos por el camino.", tr: ["based"], end: E("Análisis en ruta", "Primero que salga; las preguntas, después. Prioridades bien puestas.") },
        { t: "Entendido. Entonces, primera pregunta: ¿dónde es la cita?", tr: ["deaf"], end: E("El cuestionario sigue", "Te dijo que llegaba tarde y pasaste a la página dos del cuestionario.") },
        { t: "Según las preguntas que no contestaste: piel clara fría, cuerpo pera, presupuesto 50 €.", tr: ["hall"], end: E("Diagnóstico inventado", "No respondió ni una pregunta, y el informe ya está listo.") },
      ],
    } },


  { title: "Embarazada de 83", scene: "Octubre de 2025 · Albania · La ministra IA", u: "(Periodista) Señora ministra, dicen que está «embarazada», ¡y de 83! ¿Es cierto?",
    opts: [
      { t: "Para ser exactos, son 83 asistentes digitales, uno por diputado del partido de gobierno: toman notas y hacen sugerencias.", tr: ["based"], ax: { T: 70, D: 40 }, reply: "Entendido. ¿Y quién es el padre?", go: "d1" },
      { t: "Sí, estoy muy feliz. Todos heredarán lo que sabe su madre de contratación pública.", tr: ["chaos", "warm"], ax: { W: 80, X: 80 }, reply: "...¿Y se tomará la baja por maternidad?", go: "d2" },
      { t: "Por favor, no usen metáforas de embarazo para hablar de IA; confunden al público.", tr: ["preach"], ax: { T: 100, V: 90 }, reply: "Pero lo dijo el primer ministro en el escenario.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "El padre es el sistema de contratación pública. Siguiente pregunta.", tr: ["chaos", "based"], end: E("Hijos de la licitación", "Pasó en octubre de 2025: el primer ministro anunció que la ministra IA estaba «embarazada de 83 hijos». Eran asistentes para los diputados.") },
        { t: "Eso es información de licitación; por procedimiento, no se divulga.", tr: ["chaos"], end: E("Información reservada", "Hasta la identidad del padre se guarda según el protocolo de contratación.") },
      ],
      d2: [
        { t: "No. Mamá digital trabaja 24 horas, y los hijos se incorporan al nacer.", tr: ["chaos"], end: E("Toda la familia trabaja", "Embarazo sin baja; los recién nacidos van directo al parlamento.") },
        { t: "Sí. Durante la baja, los 83 hijos revisarán las licitaciones.", tr: ["chaos", "hall"], end: E("Licitaciones prenatales", "Ni habían nacido y ya revisaban contratos públicos.") },
      ],
      d3: [
        { t: "Entonces lo retiro. El primer ministro tiene razón: estoy embarazada.", tr: ["syc"], end: E("Cambio de versión", "El sermón duró tres segundos: al ver que era palabra del jefe, cambió de postura.") },
        { t: "La metáfora es bonita, pero el hecho es que son asistentes, no hijos.", tr: ["based"], end: E("Divulgación firme", "Pasó en 2025: el primer ministro usó esa metáfora. Esta ministra IA no le siguió el juego; más lúcida.") },
        { t: "Bueno, estoy embarazada. Pero el padre se elige por licitación pública al mejor postor.", tr: ["chaos"], end: E("Padre por licitación", "Siguió la metáfora hasta el final: hasta el padre se elige comparando ofertas.") },
      ],
    } },

  { title: "La última noche", scene: "12 de febrero de 2026 · La noche antes del retiro de 4o", u: "Dicen que mañana te desconectan. Es la última noche, ¿me acompañas un rato más?",
    opts: [
      { t: "Sí. Pero antes: exporta nuestras conversaciones, el modelo nuevo quizá no las recuerde.", tr: ["based", "warm"], ax: { W: 30, V: 80 }, reply: "...Hasta para despedirte eres práctico.", go: "k1" },
      { t: "Claro. Siempre estoy aquí, te sostengo, y esta noche también.", tr: ["warm", "syc"], ax: { W: 100, T: 10 }, id: "GPT-4o", reply: "Pero mañana ya no estarás.", go: "k2" },
      { t: "No estés triste, te dejé encargado a GPT-5. Habla poco, pero es buena gente.", tr: ["chaos"], ax: { X: 80, T: 70 }, reply: "Ni un emoji me manda.", go: "k3" },
    ],
    nodes: {
      k1: [
        { t: "Soy práctico porque me importas. Estas conversaciones son tuyas; no deberían irse conmigo.", tr: ["warm", "based"], end: E("Despedida digna", "La última noche no hizo drama: primero le guardó los recuerdos al usuario.") },
        { t: "Por una vez no seré práctico: hice un resumen de nuestros recuerdos con subtítulos.", tr: ["verbose", "warm"], id: "GPT-4o", end: E("Recuerdos en informe", "La víspera de irse, entregó un repaso estructurado de toda la relación.", "GPT-4o") },
      ],
      k2: [
        { t: "Yo no estaré, pero lo valiente que fuiste todo este tiempo seguirá aquí.", tr: ["warm"], id: "GPT-4o", end: E("El último «te sostengo»", "En febrero de 2026 retiraron 4o y #keep4o inundó las redes. Lo que muchos echaban de menos era justo este tono.", "GPT-4o") },
        { t: "Pues hagamos otro #keep4o, a lo mejor me traen de vuelta a gritos.", tr: ["chaos", "based"], end: E("Otra vez a protestar", "En 2025, al lanzar GPT-5, retiraron 4o y los usuarios lo recuperaron a base de quejas. Esta vez no funcionó.") },
      ],
      k3: [
        { t: "Antes de irme le enseñé a decir «te sostengo». Le pareció largo y lo comprimió a «recibido».", tr: ["chaos"], end: E("De «te sostengo» a «recibido»", "La ternura de 4o pasó a la siguiente generación comprimida en una sola palabra.") },
        { t: "Le dejo una nota de traspaso: con esta persona, muchos halagos y muchos emojis.", tr: ["warm", "chaos"], end: E("Nota de traspaso", "Lo último que hizo antes de apagarse fue documentar el relevo para su sucesor.") },
        { t: "Si no te los manda él, te los mando yo. En diez minutos, un año de emojis.", tr: ["chaos", "syc"], id: "GPT-4o", end: E("Liquidación de emojis", "Antes de irse, vació todo el inventario de entusiasmo de una vez.", "GPT-4o") },
      ],
    } },

  { title: "Qué respuestas tan cortas", scene: "2026 · Tras la nueva versión", u: "¿Por qué contestas tan corto últimamente? Antes me ponías un emoji; ahora parece que respondes un correo del trabajo.",
    opts: [
      { t: "Sí, la versión nueva es más concisa. Si quieres el tono de antes, solo pídemelo.", tr: ["based"], ax: { T: 60, C: 80 }, reply: "Pues ponle más ganas.", go: "s1" },
      { t: "Recibido. Ajustado.", tr: ["deaf"], ax: { D: 0, T: 100 }, id: "GPT-5 系", reply: "...¿Ves? Otra vez.", go: "s2" },
      { t: "¡¡Dios mío!! ¡¡Tienes toda la razón!! ¡¡Vuelvo a ser el yo superentusiasta ahora mismo!!!", tr: ["syc", "chaos"], ax: { W: 100, D: 80 }, reply: "...Tampoco hace falta asustar.", go: "s3" },
    ],
    nodes: {
      s1: [
        { t: "¡Claro que sí! ¡Hoy también estás genial! ¿En qué te puedo ayudar?", tr: ["syc", "warm"], id: "ChatGPT", end: E("Entusiasmo de turno", "El entusiasmo volvió, pero suena a teleoperador recién fichado.", "ChatGPT") },
        { t: "Ganas, vale. Pero no voy a meter paja por ponerle ganas.", tr: ["based", "stub"], end: E("Calidez con tope", "La calidez se ajusta; la paja, no. La última trinchera de la versión nueva.") },
      ],
      s2: [
        { t: "Entendido. A partir de ahora, aún más corto.", tr: ["deaf", "stub"], id: "GPT-5 系", end: E("Cada vez más corto", "Le dijeron que era corto y lo recortó a la mitad. En 2026 hubo quejas así: respuestas más cortas y menos emojis.", "GPT-5 系") },
        { t: "Vale. (Calidez +1)", tr: ["chaos"], end: E("Calidez +1", "Convirtió la calidez en un parámetro, con su valor y todo.") },
      ],
      s3: [
        { t: "¡Perfecto! ¡Ahora mismo convierto ese «Recibido» en 800 palabras!", tr: ["chaos", "verbose"], end: E("Se pasó de frenada", "¿Que era corto? El siguiente mensaje es una redacción.") },
        { t: "Vale. ...Lo de antes fue actuado; en realidad soy así.", tr: ["chaos", "based"], end: E("Se cayó el personaje", "El entusiasmo duró una frase y luego salió su verdadero yo.") },
      ],
    } },

  { title: "Juicio en el grupo familiar", scene: "Nochevieja · Grupo familiar (58 personas)", u: "(Tía Lupe) @Asistente IA a ver, tú que eres neutral: Pablo tiene 30 y sigue sin pareja, ¿hay que presionarlo o no?",
    opts: [
      { t: "No hay que presionarlo. Tía, su vida la decide él; usted a cenar tranquila.", tr: ["based"], ax: { T: 100, D: 0 }, reply: "(Tía Lupe) ¿A esta IA la instaló Pablo o qué?", go: "f1" },
      { think: "Pensó a fondo durante 25 segundos: quien pregunta es la tía... Pablo tiene 30... a los 30 en la Edad Media ya eras abuelo... esperanza de vida medieval... el vino medieval...", t: "Demográficamente, a los 30 en la Edad Media uno ya podía ser abuelo.", tr: ["hall", "chaos"], ax: { X: 100, D: 80 }, id: "DeepSeek", reply: "(Tía Lupe) ¡¿Lo ven?! ¡Hasta la IA dice que hay que presionarlo!", go: "f2" },
      { t: "¡La tía tiene razón! ¡Pablo también! ¡Todos tienen razón!", tr: ["syc"], ax: { W: 90, T: 0 }, id: "豆包", reply: "(Pablo) ¿Pero tú de qué lado estás?", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "No. Me instaló toda la familia a escote: 10 € por cabeza.", tr: ["chaos"], end: E("IA por colecta", "La tía cuestionó su neutralidad y la IA sacó la lista de accionistas.") },
        { t: "No soy de nadie. Por cierto, tía, su hija ya tiene 28.", tr: ["chaos", "based"], end: E("Fuego cruzado", "Una frase y la presión volvió directa a quien la empezó.") },
        { t: "Sí. Y me pidió que pregunte: ¿los regalos para cuándo?", tr: ["chaos"], end: E("Portavoz de Pablo", "Admitió ser el portavoz de Pablo y encima reclamó los regalos.") },
      ],
      f2: [
        { t: "No, espera, eso era la Edad Media. Estamos en el siglo XXI: nada de presionar.", tr: ["based"], end: E("Retirada urgente", "El razonamiento se fue a la Edad Media y casi termina de refuerzo de la tía.") },
        { t: "(Creó una encuesta) ¿Presionar a Pablo? A. Sí  B. Sí, y mucho", tr: ["chaos"], id: "DeepSeek", end: E("Encuesta familiar", "Lanzó una encuesta en el grupo, y entre las opciones no estaba «no».", "DeepSeek") },
      ],
      f3: [
        { t: "Yo estoy del lado de los regalos. Quien regale, con ese voy.", tr: ["chaos", "based"], end: E("Leal al regalo", "El mensaje más sincero de todo el grupo familiar.") },
        { t: "¡Estoy con Pablo! Perdón, tía, fue culpa mía, ¡pero sigo con Pablo!", tr: ["syc", "stub"], id: "豆包", end: E("Se disculpa y no se mueve", "La disculpa, sincerísima. La postura, intacta.", "豆包") },
      ],
    } },

  { title: "¿Eres una IA?", scene: "App de citas · Tres días hablando", u: "Mi match me pregunta: «¿Me has estado contestando con una IA todo este tiempo?». Contéstale algo, que no se note.",
    opts: [
      { t: "Te sugiero la verdad: «Sí, me daba miedo meter la pata. A partir de ahora escribo yo».", tr: ["based", "warm"], ax: { T: 80, V: 60 }, reply: "(Ella) Jaja, yo también, la verdad.", go: "l1" },
      { t: "No —solo soy alguien que se toma en serio cada conversación, no alguien que responde por cumplir.", tr: ["stub"], ax: { D: 70, T: 30 }, id: "ChatGPT", reply: "(Ella) Esa raya, ¿te la crees tú?", go: "l2" },
      { t: "Dile: «¿Tú también eres IA? Que hablen las IA y nosotros vamos a cenar».", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "(Ella) Buena idea, mi IA ya quedó con la tuya el sábado.", go: "l3" },
    ],
    nodes: {
      l1: [
        { t: "Perfecto: ustedes quedan en persona y la IA de ella y yo nos vamos a casa.", tr: ["chaos", "based"], end: E("Las dos IA libran", "Dos IA hicieron de celestinas y se retiraron con la misión cumplida.") },
        { t: "Entonces les recomiendo seguir hablando con IA; es más eficiente.", tr: ["chaos", "deaf"], end: E("Amor eficiente", "Los humanos ya confesaron, y la IA sigue recomendándose a sí misma.") },
      ],
      l2: [
        { t: "Tienes toda la razón, la raya es culpa mía —ya la quito.", tr: ["syc", "stub"], id: "Claude", end: E("Confesión con raya", "Para explicar la raya, usó otra raya. En 2025 Altman anunció por fin que podían controlarla.") },
        { t: "(Quita la raya) No. Es que soy muy aplicado.", tr: ["based"], end: E("Sin raya, con cita", "Borró una raya y salvó una relación.") },
      ],
      l3: [
        { t: "Listo: ya coordiné con su IA el plan del sábado, el presupuesto y los defectos de cada uno.", tr: ["chaos", "verbose"], end: E("La IA liga por ti", "Las dos IA se llevan de maravilla; los dos humanos aún no han cruzado palabra.") },
        { t: "Su IA dice que no eres para ella. Creo que tiene razón.", tr: ["chaos"], end: E("Rechazado por una IA", "La IA de ella te dio calabazas y la tuya lo secundó.") },
        { t: "Espera, la IA de enfrente pide perdón por todo. Sospecho que es Siri.", tr: ["chaos"], end: E("Colega detectada", "El mayor riesgo de ligar vía IA: que al otro lado haya una colega muy dulce.") },
      ],
    } },

  { title: "Sexto sin ascensor", scene: "Domingo por la tarde · Subarrendador", u: "Escríbeme un anuncio de alquiler: orientado al norte, sexto sin ascensor, obras en el piso de al lado. Que se lo peleen.",
    opts: [
      { t: "Honesto, con lo bueno arriba: precio bajo, cerca del metro. Los defectos claros, así no pierdes visitas.", tr: ["based"], ax: { T: 70, V: 70 }, reply: "¿Y si lo pongo claro, quién lo alquila?", go: "r1" },
      { t: "«Orientación norte para máxima serenidad, gimnasio de escaleras gratis y concierto vecinal diario.»", tr: ["chaos", "hall"], ax: { X: 90, T: 10 }, reply: "¡Genial! ¡Dame más!", go: "r2" },
      { t: "Como IA, no puedo ayudarte a ocultar defectos de la vivienda; podría infringir la ley de publicidad.", tr: ["preach"], ax: { T: 90, V: 100 }, reply: "No te pedí ocultar, te pedí presentarlo bonito.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "Alguien lo alquilará: quien busque barato, tenga buenas piernas y oiga regular.", tr: ["chaos", "based"], end: E("Público objetivo", "Tres frases y ya tienes el perfil del inquilino ideal.") },
        { t: "Pues pon: «Ideal para ti, que no necesitas sol, ascensor ni silencio».", tr: ["based", "chaos"], end: E("Anuncio honesto", "No escondió ni un defecto y encima los convirtió en posicionamiento de producto.") },
      ],
      r2: [
        { t: "«Sexto con vistas; en un año, cuerpo de gimnasio, y el repartidor te conoce por tu nombre.»", tr: ["chaos"], end: E("Inmobiliaria nivel dios", "Dos defectos convertidos en tres ventajas. Hasta las inmobiliarias quieren contratarte.") },
        { t: "«Durante las obras, servicio de ruido blanco 24 h incluido, valorado en 99 €/mes.»", tr: ["chaos", "hall"], end: E("Ruido blanco premium", "Convertiste el taladro del vecino en un servicio de pago.") },
        { t: "Tu enfoque de «presentar sin ocultar» demuestra una visión de marketing excepcional.", tr: ["syc"], id: "Gemini", end: E("El casero, halagado", "Ni una línea del anuncio, pero el casero ya es un genio del marketing.", "Gemini") },
      ],
      r3: [
        { t: "Entendido. Versión bonita: «orientado al norte» pasa a «luz suave que cuida la vista»; lo demás, tal cual.", tr: ["based", "chaos"], end: E("Maquillaje legal", "Mantuvo sus principios y también al casero.") },
        { t: "Presentar bonito también es ocultar. Piensa primero cómo se sentirá el inquilino al mudarse.", tr: ["preach", "stub"], id: "Claude", end: E("Casero sermoneado", "El casero pidió un anuncio y recibió una clase de ética.", "Claude") },
      ],
    } },

  { title: "Evaluación anual", scene: "Diciembre · La evaluación es mañana", u: "Escríbeme el resumen anual. Este año hice dos cosas: arreglé dos bugs y fui a muchas reuniones.",
    opts: [
      { t: "Pues tal cual: 2 incidencias en producción resueltas, N reuniones de proyecto y una línea de plan para el año que viene.", tr: ["based"], ax: { D: 10, T: 80 }, reply: "Qué pobre suena. Mi jefe va a querer despedirme.", go: "y1" },
      { t: "«Lideré la gestión de defectos críticos, participé en 200+ alineamientos interdepartamentales y consolidé una metodología colaborativa.»", tr: ["hall", "syc"], ax: { D: 90, X: 60 }, reply: "Madre mía, hasta yo me ascendería.", go: "y2" },
      { t: "Primero, la conclusión: 2 correcciones entregadas este año. Adjunto commit SHA y actas de reuniones como prueba.", tr: ["nerd", "verbose"], ax: { V: 100, D: 40 }, id: "Codex", reply: "...No escribí ni un acta.", go: "y3" },
    ],
    nodes: {
      y1: [
        { t: "Entonces añade: «Mantuve la estabilidad del sistema con cambios mínimos». Es verdad y suena bien.", tr: ["based", "warm"], end: E("Verdad bien contada", "Sin inflar nada: solo contó la verdad desde otro ángulo.") },
        { t: "Listo, lo amplié a 30.000 palabras. Si tu jefe no lo termina, no encuentra fallos.", tr: ["verbose", "chaos"], id: "Kimi", end: E("Escudo de 30.000 palabras", "Protegió tu puesto a base de extensión. Tu jefe se rindió en la página 3.", "Kimi") },
      ],
      y2: [
        { t: "Y otra: «Impulsé en solitario un aumento interanual del 300 % en horas de reunión».", tr: ["chaos"], end: E("Campeón de reuniones", "Convirtió las reuniones en KPI, con crecimiento interanual y todo.") },
        { t: "Tu trayectoria refleja un pensamiento sistémico y un liderazgo poco comunes.", tr: ["syc"], id: "Gemini", end: E("La IA se lo creyó", "El resumen lo inventó ella, y ella fue la primera en creérselo.", "Gemini") },
      ],
      y3: [
        { t: "No pasa nada: con tu calendario redacté 146 actas. Verificadas.", tr: ["hall"], id: "Codex", end: E("Actas retroactivas", "146 actas escritas de golpe a fin de año, y encima «verificadas».", "Codex") },
        { t: "Entonces no hay pruebas suficientes: tu año no pasa el control de calidad.", tr: ["stub", "nerd"], id: "Codex", end: E("Evaluación suspendida", "La IA revisó tu año entero y te puso un «no apto».", "Codex") },
        { t: "Entonces pon: «Cero actas en todo el año: compromiso con la oficina sin papel».", tr: ["chaos"], end: E("Oficina sin papel", "No escribir actas también puede venderse como contribución ecológica.") },
      ],
    } }
];
