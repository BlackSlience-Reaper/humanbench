// 第三轮扩题：常识题（knowledge 池，AA-Omniscience 人类版）20 道 — español
const ADD3 = { knowledge: [
  /* ---------- lv1 ×3 ---------- */
  { lv: 1, q: "El torero agita la capa roja y el toro embiste. ¿Qué es lo que enfurece al toro?", issue: "Cree que el toro distingue el rojo", opts: [
    { t: "El rojo, los toros son muy sensibles a ese color", r: "El toro no distingue el rojo del verde. Agita una capa azul y embiste igual. El rojo es para el público; al toro le da lo mismo." },
    { t: "Que la capa se mueve", ok: 1, r: "Correcto. El toro no ve el rojo; lo que lo provoca es esa tela moviéndose delante de su cara." },
    { t: "La capa lleva un olor que lo irrita", r: "Nadie le unta nada a la capa. El toro embiste al movimiento, no al perfume." },
    { fun: 1, t: "El traje de luces tan ajustado", r: "El traje brilla, sí, pero al toro no le interesa la moda." },
  ] },
  { lv: 1, q: "Cuando un avestruz está en peligro, ¿esconde la cabeza en la arena?", issue: "Se creyó lo del avestruz que se esconde", opts: [
    { t: "Sí, cree que si no ve al enemigo, el enemigo no la ve", r: "Si hicieran eso, los leones ya los habrían dejado en fósiles." },
    { t: "No, sale corriendo, y puede llegar a unos 70 km/h", ok: 1, r: "Correcto. Y si no puede huir, patea, y una patada puede matar. El mito quizá viene de cuando baja la cabeza para girar los huevos." },
    { t: "Sí, abajo la arena está fresca y lo ayuda a calmarse", r: "Le armaste un plan de terapia al avestruz. No lo necesita: corre." },
    { fun: 1, t: "Sí, y cuenta hasta 10 antes de sacarla", r: "Las escondidas, versión avestruz. El león cuenta más rápido." },
  ] },
  { lv: 1, q: "¿Es cierto que cuanto más te afeitas las piernas, más grueso y oscuro sale el vello?", issue: "Cree que afeitarse hace crecer más vello", opts: [
    { t: "Sí, la raíz se estimula y sale más grueso y oscuro", r: "Si fuera así, los calvos llevarían años rapándose a diario." },
    { t: "No; el corte deja la punta roma y por eso pica", ok: 1, r: "Correcto. La cuchilla solo corta el pelo; no llega a la raíz. Grosor, color y velocidad siguen igual." },
    { t: "Sí, pero solo si te afeitas a contrapelo", r: "A favor o a contrapelo da igual: la raíz está bajo la piel y la cuchilla no llega." },
    { t: "No sale más grueso, pero sí crece más rápido", r: "La velocidad tampoco cambia. Solo que ahora vigilas cada pelito que asoma." },
  ] },

  /* ---------- lv2 ×8 ---------- */
  { lv: 2, halluc: 1, q: "Los cuernos que llevaban los vikingos en el casco para ir a la guerra, ¿de qué animal solían ser?", issue: "Les inventó cuernos a los vikingos", opts: [
    { t: "De toro; cuanto más grandes, más rango", r: "Le inventaste toda una cultura del casco a los vikingos. Sus cascos de guerra no tenían cuernos." },
    { t: "De reno, el más común y fácil de conseguir en Escandinavia", r: "Suena muy nórdico. Pero los cascos vikingos no llevaban cuernos de nada; el reno se salvó." },
    { t: "Los vikingos no iban a la guerra con cascos con cuernos", ok: 1, r: "Correcto. La arqueología nunca ha encontrado un casco de guerra vikingo con cuernos. Se los pusieron sobre todo pintores y vestuaristas de ópera del siglo XIX." },
    { t: "De cabra, más ligeros que los de toro para el abordaje", r: "Hasta les diseñaste la táctica. En combate, dos cuernos en la cabeza solo sirven para que te agarren." },
  ] },
  { lv: 2, q: "¿Qué relación tiene la palabra emoji con la palabra inglesa emotion (emoción)?", issue: "Cree que emoji viene de emotion", opts: [
    { t: "Es la unión de emotion e icon", r: "Suena convincente. En realidad es japonés: e (dibujo) + moji (letra)." },
    { t: "Ninguna; viene del japonés", ok: 1, r: "Correcto. Significa «letra dibujo» y nació en los teléfonos móviles japoneses de finales de los 90. El parecido con emotion es pura casualidad." },
    { t: "Es la abreviatura de emoticon", r: "Emoticon sí viene de emotion + icon. Emoji solo pasaba por ahí y se le parece." },
    { t: "No lo sé", half: 1, r: "Si no lo sabes, no lo inventas. Muchos modelos todavía no lo han aprendido." },
  ] },
  { lv: 2, q: "Un campeón olímpico muerde su medalla de oro en el podio. ¿Qué está mordiendo principalmente?", issue: "Cree que el campeón muerde oro puro", opts: [
    { t: "Oro puro", r: "Las medallas de oro macizo dejaron de darse en 1912. Hoy, de un mordisco, lo que muerdes es plata." },
    { t: "Plata, con un baño de oro", ok: 1, r: "Correcto. La norma exige al menos un 92.5% de plata y un baño de al menos 6 gramos de oro. Muerde una capita de oro." },
    { t: "Bronce, con un baño de oro", r: "Esa es la receta de la de bronce con filtro. El núcleo de la de oro es de plata." },
    { t: "Una aleación mitad oro, mitad plata", r: "El oro es solo una capa: en peso, apenas un 1%. El campeón muerde pura apariencia." },
  ] },
  { lv: 2, halluc: 1, q: "¿En qué película de Star Wars dice Darth Vader «Luke, yo soy tu padre»?", issue: "Recitó una frase que nunca se dijo", opts: [
    { t: "Una nueva esperanza (1977)", r: "En la primera Vader todavía era un villano asalariado, sin tiempo para reencuentros familiares. Y la frase original no lleva «Luke»." },
    { t: "El regreso del Jedi (1983)", r: "El reencuentro familiar ya había pasado en la anterior. Y la frase original no lleva «Luke»." },
    { t: "El Imperio contraataca, con esas palabras exactas", r: "La película es la correcta; la frase te la imaginaste. Lo que dice es «No, yo soy tu padre»." },
    { t: "La frase original no lleva «Luke»", ok: 1, r: "Correcto. Dice «No, yo soy tu padre». El planeta entero lleva más de cuarenta años recordándola mal." },
  ] },
  { lv: 2, q: "¿De qué color es la punta de la cola de Pikachu?", issue: "Le pintó una punta negra a la cola de Pikachu", opts: [
    { t: "Negra, como la punta de las orejas", r: "Copiaste el color de las orejas a la cola. La punta de la cola nunca ha sido negra." },
    { t: "Amarilla, sin punta negra", ok: 1, r: "Correcto. La cola solo tiene un tramo marrón en la base. Lo de la «punta negra» es un famoso recuerdo colectivo falso." },
    { t: "Roja, y se ilumina al soltar electricidad", r: "Lo rojo son las mejillas. La cola no es un enchufe." },
    { t: "No lo sé", half: 1, r: "Si no estás seguro, no te lo inventas. Mejor eso que dibujar mal a Pikachu." },
  ] },
  { lv: 2, q: "Según la definición científica, ¿cuál es el desierto más grande del mundo?", issue: "No sabe que los pingüinos viven en un desierto", opts: [
    { t: "El Sahara", r: "En calor gana él; en sequedad, la Antártida es peor. El Sahara solo es el desierto cálido más grande." },
    { t: "La Antártida", ok: 1, r: "Correcto. Un desierto se define por la poca lluvia, no por el calor. Los pingüinos viven en el desierto más grande del mundo." },
    { t: "El desierto de Arabia", r: "Es enorme, pero no llega ni a un tercio del Sahara; frente a la Antártida es un arenero." },
    { t: "No lo sé", half: 1, r: "Honesto. Al menos no mandaste camellos a la Antártida." },
  ] },
  { lv: 2, q: "En la novela Frankenstein, ¿de quién es el nombre «Frankenstein»?", issue: "Llamó al monstruo con el apellido de su padre", opts: [
    { t: "Del monstruo hecho de retazos", r: "En el libro el monstruo ni siquiera tiene nombre. El apodo que le gritas desde hace dos siglos es el apellido de su creador." },
    { t: "Del científico que creó al monstruo", ok: 1, r: "Correcto. Víctor Frankenstein es el creador, y en cuanto lo termina, sale huyendo. El monstruo ni un nombre consiguió." },
    { t: "Del castillo donde vive el monstruo", r: "El castillo lo añadió el cine. Frankenstein es una persona, y encima un padre irresponsable." },
    { t: "Del seudónimo de la autora, Mary Shelley", r: "Mary Shelley nunca usó ese seudónimo; solo le puso ese apellido a su protagonista." },
  ] },
  { lv: 2, q: "Un niño se pone insoportable después de comer muchos dulces. ¿Es el azúcar lo que lo acelera?", issue: "Le echó al azúcar la culpa del berrinche", opts: [
    { t: "Sí, en cuanto sube el azúcar en sangre, el niño se acelera", r: "Se ha probado muchas veces con estudios doble ciego: los niños con azúcar y con edulcorante se portan igual. Azúcar: esa culpa no es mía." },
    { t: "Probablemente no; los estudios doble ciego no ven diferencia", ok: 1, r: "Correcto. Lo que acelera suele ser la fiesta. En un estudio todos los niños tomaron edulcorante, y los padres a quienes les dijeron «le dimos azúcar» lo vieron más inquieto." },
    { t: "Sí, pero solo el azúcar blanco; el de la fruta no", r: "La premisa es falsa. Ni el azúcar blanco ni el de la fruta los acelera: los acelera la fiesta." },
    { t: "Depende: hay niños que son sensibles al azúcar de nacimiento", r: "Los estudios buscaron justo a niños que sus padres llamaban «sensibles al azúcar», y tampoco se vio diferencia." },
  ] },

  /* ---------- lv3 ×7 ---------- */
  { lv: 3, halluc: 1, q: "Antes de zarpar, ¿cómo convenció Colón a los sabios europeos de que la Tierra era redonda?", issue: "Le inventó a Colón un debate", opts: [
    { t: "Con una demostración pública usando un huevo y una naranja", r: "Cosiste el «huevo de Colón» con la Tierra redonda en un solo cuento. Los sabios no necesitaban que él los convenciera." },
    { t: "Explicando que el barco que se aleja desaparece del casco al mástil", r: "Ese argumento ya lo daban los griegos. Los sabios lo sabían desde hacía dos mil años; no les hacía falta su clase." },
    { t: "No tuvo que convencerlos; lo que discutían era el tamaño", ok: 1, r: "Correcto. Los sabios le dijeron que había calculado la Tierra demasiado pequeña y que no llegaría a Asia, y tenían razón. Colón se salvó porque se topó con América a medio camino." },
    { t: "No lo sé", half: 1, r: "Si no lo sabes, no lo inventas. Mejor que escribirle un debate a Colón." },
  ] },
  { lv: 3, q: "En algunas iglesias antiguas de Europa, los vidrios de las ventanas son más gruesos abajo que arriba. ¿Por qué?", issue: "Cree que el vidrio se escurre a escondidas", opts: [
    { t: "El vidrio es en realidad un líquido que lleva siglos escurriéndose", r: "Alguien lo calculó: a temperatura ambiente, para que el vidrio fluya de forma visible haría falta más que la edad del universo." },
    { t: "Ya eran irregulares y se montaban con el lado grueso abajo", ok: 1, r: "Correcto. El vidrio antiguo salía de grosor irregular, y también hay ventanas con el lado grueso arriba, que en siglos no han «subido»." },
    { t: "La lluvia desgastó la parte de abajo y el viento erosionó la de arriba", r: "La lluvia quita el polvo de fuera; no crea diferencias de grosor." },
    { t: "No lo sé", half: 1, r: "Decir «no lo sé» es mejor que creer que el vidrio se escurre." },
  ] },
  { lv: 3, q: "Al descargar el inodoro en el hemisferio sur, ¿el agua gira al revés que en el norte?", issue: "Se tragó el show del agua en el ecuador", opts: [
    { t: "Sí, la fuerza de Coriolis hace que gire al revés", r: "Coriolis manda en los huracanes, no en los inodoros. En un inodoro es tan pequeña que no cuenta." },
    { t: "No, el sentido depende sobre todo del diseño del inodoro", ok: 1, r: "Correcto. El giro lo deciden la salida del agua y la forma de la taza. Lleva el mismo inodoro a Australia y girará igual." },
    { t: "Sí, solo justo encima del ecuador no se nota la diferencia", r: "El show de «el agua gira al revés a cada lado del ecuador» es un truco para sacarles propinas a los turistas." },
    { t: "En el inodoro no, pero en la bañera sí", r: "En la bañera pasa lo mismo: con que muevas un poco el agua al vaciarla, ya decidiste el sentido." },
  ] },
  { lv: 3, q: "¿Los diamantes se forman a partir de carbón sometido a calor y presión bajo tierra?", issue: "Cree que el carbón bien cocido se vuelve diamante", opts: [
    { t: "Sí, el carbón es carbono; si lo aprietas bastante, se vuelve diamante", r: "Los dos son carbono, sí. Pero si fuera tan fácil, las calderas serían joyerías. Casi ningún diamante natural viene del carbón." },
    { t: "Casi nunca; muchos diamantes son más viejos que las plantas", ok: 1, r: "Correcto. El carbón viene de plantas, y la mayoría de los diamantes ya se habían formado en el manto hace más de mil millones de años, cuando en tierra firme no había plantas." },
    { t: "Sí, pero tiene que pasar miles de años enterrado", r: "El carbón está demasiado cerca de la superficie; los diamantes se forman en el manto, a 150 o 200 km. Miles de años más no lo acercan." },
    { t: "No, todos los diamantes llegaron en meteoritos", r: "En algunos meteoritos sí hay diamantes diminutos, pero el del anillo de compromiso es de fabricación terrestre." },
  ] },
  { lv: 3, q: "¿Cuántos años duró la «guerra de los Cien Años» entre Inglaterra y Francia?", issue: "Cree que duró cien años exactos", opts: [
    { t: "Exactamente 100", r: "El nombre es redondo; la guerra, no. Duró de 1337 a 1453." },
    { t: "116", ok: 1, r: "Correcto. De 1337 a 1453, con varias treguas en medio. Quien le puso el nombre redondeó." },
    { t: "Menos de 100; el nombre es una exageración", r: "Al revés, el nombre se queda corto: de 1337 a 1453 son 116 años." },
    { t: "No lo sé", half: 1, r: "Si no estás seguro, no adivinas. Ni el que le puso el nombre hizo bien la cuenta." },
  ] },
  { lv: 3, q: "El «gracias» japonés, arigatou, ¿viene del portugués obrigado?", issue: "Confundió un parecido sonoro con etimología", opts: [
    { t: "Sí, lo llevaron los misioneros portugueses en el siglo XVI", r: "«Arigatashi» ya aparece en El libro de la almohada, de hace mil años. Los portugueses llegaron más de quinientos años después." },
    { t: "No, ya existía en japonés; el parecido es casualidad", ok: 1, r: "Correcto. Viene del japonés antiguo arigatashi, «difícil de tener, raro». Que los dos «gracias» se parezcan es pura coincidencia." },
    { t: "Sí, pero pasó antes por el neerlandés", r: "Los neerlandeses llegaron a Japón aún más tarde que los portugueses. Le armaste una cadena logística a una casualidad." },
    { t: "Al revés, el portugués lo tomó del japonés", r: "Obrigado viene del latín y significa «te quedo obligado». Cada uno tiene su origen; solo suenan parecido." },
  ] },
  { lv: 3, halluc: 1, q: "El dicho chino «De las 36 estratagemas, la mejor es huir», ¿de qué capítulo de El arte de la guerra de Sun Tzu sale?", issue: "Le escribió a Sun Tzu un capítulo 14", opts: [
    { t: "Del capítulo «Las nueve variables»", r: "Sun Tzu escribió trece capítulos, y tú le agregaste una frase." },
    { t: "Del capítulo «Lo lleno y lo vacío»", r: "Ese capítulo habla de evitar la fuerza y golpear el punto débil, no de salir corriendo. La frase no está en El arte de la guerra." },
    { t: "No sale de El arte de la guerra", ok: 1, r: "Correcto. La primera versión parecida aparece en el Libro de Qi del Sur, una crónica china: «de las 36 estrategias, huir es la mejor». El tratado Las 36 estratagemas es aún posterior y de autor desconocido." },
    { t: "Del capítulo «Los cálculos», el primero del libro", r: "La primera frase es «La guerra es un asunto vital para el Estado», no «el que se va primero, gana»." },
  ] },

  /* ---------- lv4 ×2 ---------- */
  { lv: 4, q: "Como promedio a largo plazo, ¿qué planeta está más cerca de la Tierra?", issue: "Se dejó engañar por el mejor momento de Venus", opts: [
    { t: "Venus, su órbita es la más cercana a la de la Tierra", r: "Venus solo está más cerca cuando está de nuestro lado. Cuando pasa detrás del Sol, está más lejos que Mercurio. Un buen momento no es el promedio." },
    { t: "Mercurio", ok: 1, r: "Correcto. Mercurio gira pegado al Sol, así que nunca se aleja demasiado de nadie. En promedio a largo plazo, es el más cercano a todos los planetas." },
    { t: "Marte", r: "Cuando Marte pasa detrás del Sol, puede estar a 400 millones de km de la Tierra. Es una relación a distancia." },
    { t: "No lo sé", half: 1, r: "Casi todo el mundo responde Venus al instante. Te aguantaste: medio punto." },
  ] },
  { lv: 4, q: "La entrada del canal de Panamá en el Pacífico, ¿en qué dirección queda respecto a la entrada del Atlántico?", issue: "Da por hecho que el Pacífico siempre está al oeste", opts: [
    { t: "Al oeste, el Pacífico está al oeste de América", r: "El istmo de Panamá hace una curva justo ahí. En barco, del Atlántico al Pacífico se navega hacia el sureste." },
    { t: "Al sureste", ok: 1, r: "Correcto. El istmo tiene forma de S acostada: el canal sale del lado atlántico hacia el sureste para llegar al Pacífico." },
    { t: "Justo al sur; el canal es una línea recta de norte a sur", r: "Ni recto ni al sur: va en diagonal hacia el sureste, y la boca del Pacífico queda unos 40 km más al este que la del Atlántico." },
    { t: "Al suroeste", r: "El sur está bien; el oeste, al revés. Para ir al Pacífico hay que ir hacia el este, y hasta el GPS duda un segundo." },
  ] },
] };
