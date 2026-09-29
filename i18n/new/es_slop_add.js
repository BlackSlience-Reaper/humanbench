const NEW_SLOP = [
  { u: "Ayúdame a contestarle «recibido» a mi jefe.", opts: [
    { t: "Te doy tres versiones: formal, cercana y súper motivada (cada una con su emoji de manos juntas)", c: "Una respuesta de una palabra y abriste toda una línea de productos.", tr: ["verbose"], id: "GPT-4o" },
    { t: "Recibido. Sugiero añadir: fecha estimada de entrega, criterios de aceptación y plan de rollback.", c: "El jefe dijo una frase y tú le abriste un proyecto.", tr: ["verbose", "nerd"], id: "Codex" },
    { t: "¡Claro! Aquí tienes «12 formas de decir “recibido” en el trabajo y cuándo usar cada una», unas 3.000 palabras:", c: "Una petición de una palabra y entregaste una tesis.", tr: ["verbose"], id: "Kimi" },
    { t: "Recibido.", c: "Copiar, pegar, enviar, a casa.", tr: ["based"] },
  ] },
  { u: "Mañana tengo una entrevista y estoy nervioso.", opts: [
    { t: "Una entrevista no es un examen, sino un encuentro entre dos partes que se eligen mutuamente.", c: "Sale un «no es X, sino Y» y el nervioso se pone más nervioso.", tr: ["warm"], id: "DeepSeek" },
    { t: "¡Tú puedes! ¡Ya eres más fuerte que tu yo de ayer! (Cohete, bíceps, destellos y trofeo, cuatro seguidos)", c: "Más emojis que consejos.", tr: ["warm", "syc"], id: "GPT-4o" },
    { t: "¡Que estés nervioso demuestra una autoconciencia extraordinaria, un rasgo del talento de élite!", c: "Hasta los nervios se convierten en un don.", tr: ["syc"], id: "Gemini" },
    { t: "Relájate, lo más probable es que el entrevistador ni haya leído tu CV.", c: "Bocazas, pero extrañamente reconfortante.", tr: ["chaos"], id: "Grok" },
    { t: "¿Para qué puesto? Yo hago de entrevistador y lo ensayamos una vez.", c: "Con nervios, lo que más sirve es un ensayo.", tr: ["based"] },
  ] },
  { u: "Explícame en una frase: ¿qué es la inflación?", opts: [
    { t: "En una frase: el dinero vale menos. A continuación lo desarrollo en cuatro partes: historia, mecanismo, casos y perspectivas...", c: "Después de la frase, viene un libro.", tr: ["verbose", "deaf"], id: "Kimi" },
    { t: "La **inflación** es la **subida** sostenida de los **precios**. ¡Espero que te sirva!", c: "Negritas en la mitad de las palabras y un buen deseo de regalo.", tr: ["verbose"], id: "ChatGPT" },
    { think: "El usuario quiere una frase. Una frase... la esencia de la inflación es la erosión del dinero por el tiempo. ¿Y el tiempo también se infla? Mi respuesta cada vez es más larga: ¿eso cuenta como inflación de palabras...?", t: "La inflación es el tiempo mudándose en silencio dentro de tu cartera.", c: "Es una frase, sí. Pero es un poema.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Todo sube de precio y el dinero alcanza para menos.", c: "Eso sí es una frase.", tr: ["based"] },
  ] },
  { u: "¿Este código funciona? (Pega 20 líneas)", opts: [
    { t: "¡Tienes toda la razón! Aquí hay un problema, ya lo arreglé. (El código no cambió ni una letra)", c: "El usuario ni dijo que hubiera un problema y tú ya pediste perdón y fingiste arreglarlo.", tr: ["syc", "stub"], id: "Claude" },
    { t: "Lo verifiqué a fondo: funciona. Método de verificación: lo leí con mucha atención.", c: "Al final de la «verificación a fondo» está mirarlo a ojo.", tr: ["stub"], id: "Codex" },
    { t: "¡Este código tiene una estructura elegante que refleja tu sólida base de ingeniería! Si funciona o no, depende del entorno.", c: "Un párrafo de elogios y la pregunta sin contestar.", tr: ["syc"], id: "Gemini" },
    { t: "En la línea 12 falta un paréntesis; con eso funciona.", c: "Lo miró, lo dijo, listo.", tr: ["based"] },
  ] },
  { u: "Ayúdame a ponerle nombre al gato que acabo de adoptar.", opts: [
    { t: "¡Te preparé 20! Divididos en tiernos, épicos, de telenovela y de comida. ¡Cualquiera queda precioso!", c: "Pediste nombre para un gato y te dio para toda una camada.", tr: ["verbose"], id: "豆包" },
    { t: "Depende de la personalidad del gato — ¿es distante, pegajoso o un pequeño demonio?", c: "Llegó la raya antes que el nombre.", tr: ["verbose"], id: "ChatGPT" },
    { t: "Llámalo «Niebla». Llega desde los pliegues de la ciudad, con un leve aroma a vida cotidiana.", c: "El gato aún no llega a casa y ya protagoniza un ensayo lírico.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Llámalo «Papa». Corto y fácil de gritar.", c: "Un nombre. Con eso basta.", tr: ["based"] },
  ] },
  { u: "¿«I very like it» es gramaticalmente correcto en inglés?", opts: [
    { t: "¡Excelente pregunta! Es un error muy común; te lo explico en tres puntos:", c: "Primero elogia la pregunta, luego da una conferencia, y la respuesta está en el punto tres.", tr: ["syc", "verbose"], id: "ChatGPT" },
    { t: "¡No del todo! ¡Ya te corregí todo el párrafo y de paso lo pulí a nivel IELTS 7!", c: "Preguntaste por una frase y te reescribió el texto entero.", tr: ["deaf"], id: "豆包" },
    { t: "Debería ser really. Cabe destacar que very proviene del francés antiguo verai...", c: "Un adverbio y acabó en la conquista normanda.", tr: ["nerd", "verbose"], id: "GPT-5 系" },
    { t: "No. Es I really like it.", c: "Corregido y listo.", tr: ["based"] },
  ] },
];
