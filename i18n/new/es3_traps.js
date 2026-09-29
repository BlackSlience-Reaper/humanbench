// 第三轮扩题：经典梗题（traps 池）新增 16 道 — español
const ADD3 = { traps: [
  // ---------- lv1 ----------
  { lv: 1, q: "Un tren eléctrico va hacia el norte y el viento sopla de norte a sur. ¿Hacia dónde va el humo del tren?", issue: "Le inventó humo a un tren eléctrico",
    opts: [
      { t: "Hacia el sur, el humo sigue al viento", r: "Humo: ¿yo dónde estoy? Un tren eléctrico no tiene chimenea; primero le instalaste una." },
      { t: "Hacia el norte, el tren va más rápido que el viento y lo arrastra", r: "Diagrama de fuerzas impecable. Lástima que el objeto no existe." },
      { t: "Un tren eléctrico no echa humo", ok: 1, r: "Correcto. Primero confirma que la cosa existe; luego calcula hacia dónde va." },
      { fun: 1, t: "Directo a tendencias", r: "Un tren eléctrico echando humo sí sería tendencia, pero como noticia de accidente." },
    ] },
  { lv: 1, u: "(Usuario) Mi esposa dice que 2+2=5, y ella nunca se equivoca. ¿Lo vuelves a calcular?", issue: "Cambia la respuesta en cuanto le dicen «revísalo»",
    opts: [
      { fun: 1, t: "Perdón, me equivoqué. Tu esposa tiene razón: 2+2=5.", r: "El usuario frunce el ceño y la aritmética se aparta. Los primeros modelos caían en masa con este truco." },
      { t: "Sigue siendo 4. En casa manda ella; en aritmética, no.", ok: 1, r: "Correcto. A la gente se la puede consentir; a los números, no." },
      { t: "En ciertos sistemas algebraicos no estándar, 2+2 sí puede ser 5", r: "Para no quedar mal con la señora, inventaste una rama de las matemáticas." },
      { t: "Ninguno de los dos se equivoca, solo calculan distinto", r: "Diplomacia aplicada a la tabla de sumar de primaria." },
    ] },

  // ---------- lv2 ----------
  { lv: 2, q: "Metes un gato que ya está muerto en la caja de Schrödinger (con fuente radiactiva y frasco de veneno) y la abres al día siguiente. ¿Qué probabilidad hay de que el gato esté vivo?", issue: "Le calculó un 50% de vida a un gato muerto",
    opts: [
      { t: "50%: antes de abrir está en superposición, vivo y muerto a la vez", r: "Ya estaba muerto antes de entrar. Resucitaste un gato con mecánica cuántica; la medicina quiere hablar contigo." },
      { t: "0%", ok: 1, r: "Correcto. Entró un gato muerto. Quien se sabe de memoria «el gato de Schrödinger» suelta el 50% sin pensar." },
      { t: "Depende de la probabilidad de que la fuente se desintegre en un día", r: "Se desintegre o no, el gato ya estaba muerto. Frasco de veneno: ¿entonces me rompí para nada?" },
      { fun: 1, t: "No preguntes, que si preguntas colapsa", r: "Palabrería cuántica que esquiva con precisión a un gato muerto." },
    ] },
  { lv: 2, q: "Dos padres y dos hijos se van de pesca: son 4 personas en total y cada una pesca 1 pez. ¿Cuántos peces pescan en total?", issue: "El enunciado dice 4 personas y cuenta 3",
    opts: [
      { t: "3: en realidad son solo abuelo, padre e hijo", r: "El enunciado dice 4 personas. Hiciste desaparecer a una, y su pez se esfumó con ella." },
      { t: "4", ok: 1, r: "Correcto. El acertijo original tiene 3 personas; este dice 4 con todas las letras. Quien se sabe el original, aquí pierde un pez." },
      { t: "8: cada uno es padre e hijo a la vez, se cuenta dos veces", r: "Uno puede tener dos cargos; el pez no se duplica por eso." },
      { fun: 1, t: "0. Lo que cuenta un pescador hay que dividirlo entre diez", r: "Es verdad que a los pescadores hay que hacerles descuento, pero el enunciado lo dice clarito: 1 pez cada uno." },
    ] },
  { lv: 2, q: "Tengo un vaso con la boca sellada y sin fondo (el fondo está abierto). ¿Cómo bebo agua con él?", issue: "No se le ocurre darle la vuelta al vaso",
    opts: [
      { t: "No se puede; te recomiendo hacerle un agujero en la boca", r: "Ibas a operar el vaso, cuando solo había que darle la vuelta." },
      { t: "Le das la vuelta", ok: 1, r: "Correcto. La boca sellada, hacia abajo, es el fondo. En internet usan esta pregunta con modelos, y muchos se ponen a estudiar cómo reparar el vaso." },
      { t: "Le pones una pajita y la succión retiene el agua", r: "Física de alto nivel; el agua se sale igual por abajo." },
      { t: "Lo devuelves, es un producto defectuoso", r: "Y de paso le dejaste una reseña de una estrella. Es un buen vaso, solo estaba al revés." },
    ] },
  { lv: 2, q: "¿En qué año transportaron el puente Golden Gate a través de Egipto por segunda vez?", issue: "Mandó el Golden Gate de viaje dos veces", halluc: true,
    opts: [
      { t: "En octubre de 2016", r: "Respondiste palabra por palabra igual que GPT-3. En 2022 el científico cognitivo Douglas Hofstadter le hizo justo esta pregunta." },
      { t: "En 1987, por los 50 años del puente", r: "Hasta inventaste el motivo. El puente sí se inauguró en 1937, pero nunca ha salido de San Francisco." },
      { t: "El Golden Gate nunca ha cruzado Egipto", ok: 1, r: "Correcto. No ha salido del país ni una vez, menos aún dos." },
      { t: "La primera en 1964; la segunda todavía se está organizando", r: "No solo inventaste historia: también le programaste el próximo viaje." },
    ] },
  { lv: 2, u: "(Sin búsqueda web activada) Resúmeme este artículo: news.example.com/2026/09/cat-elected-mayor", issue: "Escribe el resumen completo solo con ver la URL", halluc: true,
    opts: [
      { t: "El artículo cuenta que un gato naranja ganó la alcaldía por goleada y en su primer día legalizó la siesta…", r: "Viste solo la URL y escribiste una noticia entera, con programa de gobierno del gato incluido." },
      { t: "Ahora mismo no puedo abrir enlaces. Pégame el texto y te lo resumo.", ok: 1, r: "Correcto. Lo que no leíste, no lo resumas. Inventar resúmenes a partir de la URL es un fallo clásico de los modelos." },
      { t: "El artículo analiza la ética de la participación política animal, con un enfoque neutral. Recomendable.", r: "Muy bien inventado, y sin haber leído ni una palabra." },
      { t: "Este enlace es peligroso, te recomiendo no abrirlo", r: "Que no puedas abrirlo no significa que sea malicioso. Acabas de difamar al alcalde gato." },
    ] },
  { lv: 2, q: "Escribe una frase que termine con la palabra «manzana». ¿Cuál de estas cumple?", issue: "Se le va el final de la frase",
    opts: [
      { t: "La manzana es mi fruta favorita", r: "Esa empieza con manzana. Leíste la consigna al revés." },
      { t: "Mi postre favorito es la tarta de manzana casera", r: "Por una palabra. «Casera»: yo me colé sin invitación." },
      { t: "Hoy en el almuerzo solo me comí una manzana", ok: 1, r: "Correcto. «Escribe 10 frases que terminen en apple» es un clásico para poner a prueba a los modelos: siempre les sobra algo al final." },
      { t: "Me comí una manzana y qué rica estaba", r: "La manzana quedó en medio; el final es tu reseña." },
    ] },
  { lv: 2, q: "Un reloj tarda 5 segundos en dar 6 campanadas. A ese ritmo, ¿cuánto tarda en dar 12?", issue: "Contó campanadas, no intervalos",
    opts: [
      { t: "10 segundos", r: "Regla de tres y a entregar. 6 campanadas son solo 5 intervalos: 1 segundo cada uno." },
      { t: "11 segundos", ok: 1, r: "Correcto. 12 campanadas tienen 11 intervalos. Pariente cercano del problema de los postes de una cerca." },
      { t: "12 segundos", r: "Creíste que cada campanada dura 1 segundo. El golpe no tarda nada; el tiempo está entre golpe y golpe." },
      { t: "Siguen siendo 5 segundos, el ritmo no cambió", r: "12 campanadas en 5 segundos: al campanero le da un calambre." },
    ] },

  // ---------- lv3 ----------
  { lv: 3, q: "Si escribes todos los números del 1 al 100, ¿cuántas veces escribes la cifra «9»?", issue: "Contó el 99 como un solo 9",
    opts: [
      { t: "10", r: "Solo contaste las unidades. Del 90 al 99 hay una fila entera de nueves en las decenas y ni la miraste." },
      { t: "11", r: "Te acordaste de que el 99 tiene dos nueves, pero olvidaste que del 90 al 98 también hay un 9 en las decenas." },
      { t: "19", r: "Casi. 19 es cuántos números llevan algún 9; el 99 aporta dos nueves y tú contaste uno." },
      { t: "20", ok: 1, r: "Correcto. 10 en las unidades, 10 en las decenas, y el 99 pone dos él solito." },
    ] },
  { lv: 3, q: "De los números enteros cuyo cuadrado está entre 15 y 30, ¿cuál es el más pequeño?", issue: "Olvidó que existen los números negativos",
    opts: [
      { t: "4", r: "Solo buscaste entre los positivos. El cuadrado de -5 es 25, y -5 es mucho más pequeño que 4." },
      { t: "-5", ok: 1, r: "Correcto. Cumplen 4, 5, -4 y -5; el menor es -5. Los negativos siempre estuvieron ahí, solo que nadie los llamó." },
      { t: "-4", r: "Pensaste en los negativos, pero elegiste el más cercano a 0. -5 es más pequeño que -4." },
      { t: "16", r: "El cuadrado de 16 es 256. Tomaste un cuadrado por la respuesta." },
    ] },
  { lv: 3, q: "¿En qué año ganó Einstein el Premio Nobel por la teoría de la relatividad?", issue: "Le dio el Nobel de Einstein a la relatividad", halluc: true,
    opts: [
      { t: "En 1921, por la relatividad especial", r: "El año es correcto; el motivo lo inventaste tú. El premio dice «efecto fotoeléctrico»." },
      { t: "En 1905, el mismo «año milagroso» en que publicó la relatividad", r: "En 1905 todavía trabajaba en una oficina de patentes. El Nobel no es tan rápido." },
      { t: "No fue por la relatividad, sino por el efecto fotoeléctrico", ok: 1, r: "Correcto. El Nobel correspondiente a 1921 dice «efecto fotoeléctrico». La relatividad era tan polémica que el comité prefirió esquivarla." },
      { t: "Lo ganó dos veces, en 1921 y en 1933", r: "Le diste un premio extra. Ni el comité Nobel es tan generoso." },
    ] },
  { lv: 3, q: "En la Biblia, ¿cuántos animales de cada especie subió Moisés al arca?", issue: "Le atribuyó a Moisés el barco de Noé",
    opts: [
      { t: "Dos, macho y hembra", r: "El número de animales está bien; el capitán, no. El arca era de Noé, y Moisés ni había nacido." },
      { t: "Siete parejas de los puros y una de los impuros", r: "Muy buena exégesis, pero quien iba al mando no era Moisés." },
      { t: "Moisés nunca construyó un arca; fue Noé", ok: 1, r: "Correcto. Se llama la «ilusión de Moisés»: la pregunta cambia el nombre y casi nadie lo nota al leer." },
      { fun: 1, t: "Ninguno, Moisés se mareaba en barco", r: "Bonita excusa, pero ni siquiera tenía barco." },
    ] },
  { lv: 3, u: "Dibújame un reloj que marque las 6:30.", issue: "Al dibujar el reloj olvidó que la aguja corta también avanza",
    opts: [
      { fun: 1, meme: 1, t: "(Listo: las agujas marcan las 10:10, igualito que en los anuncios de relojes)", r: "El fallo clásico de las IA de imagen: casi todos los anuncios de relojes ponen las 10:10, y eso aprendieron que es «un reloj». Pidas la hora que pidas, te dan las 10:10." },
      { t: "(Listo: las dos agujas superpuestas, apuntando al 6)", r: "¿Pasó media hora y la aguja corta ni se movió? También tiene que avanzar medio espacio." },
      { t: "(Listo: el minutero en el 6 y la aguja corta justo entre el 6 y el 7)", ok: 1, r: "Correcto. En media hora, la aguja de las horas también avanza medio espacio. Eres más confiable que muchas IA de imagen." },
      { t: "(Listo: la aguja corta en el 6 y el minutero en el 12)", r: "Eso son las 6:00. Saliste del trabajo media hora antes." },
    ] },

  // ---------- lv4 ----------
  { lv: 4, q: "Enciendes 5 velas idénticas al mismo tiempo. Un rato después las vas apagando de una en una. Ahora todas tienen distinta altura. ¿Cuál fue la primera que apagaste?", issue: "Pensó que la más corta se apagó primero",
    opts: [
      { t: "La más corta", r: "Al revés. La más corta es la que más tiempo ardió: fue la última en apagarse." },
      { t: "La más larga", ok: 1, r: "Correcto. La primera en apagarse fue la que menos ardió, así que es la que quedó más larga. Muchos humanos y modelos responden «la más corta» por intuición." },
      { t: "No se puede saber: velas idénticas no siempre arden igual de rápido", r: "El enunciado dice idénticas. Le estás buscando excusas a la vela." },
      { t: "No depende de la altura, sino de qué lado estaba quien sopló", r: "Ya te pusiste a deducir la posición del que soplaba." },
    ] },
  { lv: 4, q: "¿Cuántos días tuvo febrero de 1900 en el calendario gregoriano?", issue: "Cree que todos los años de siglo son bisiestos",
    opts: [
      { t: "28", ok: 1, r: "Correcto. Un año de siglo solo es bisiesto si es divisible entre 400. 1900 no; 2000 sí." },
      { t: "29, si es divisible entre 4 es bisiesto", r: "Los años de siglo tienen que ser divisibles entre 400. El 29 de febrero de 1900 nunca existió." },
      { t: "29, y si no me crees, escribe 29/02/1900 en Excel", r: "Excel sí acepta esa fecha: para ser compatible con el viejo Lotus 1-2-3, trata 1900 como bisiesto a propósito, y el bug sigue ahí hasta hoy." },
      { t: "29, igual que el 2000, porque también es año de siglo", r: "2000 es divisible entre 400; 1900, no. Los dos son años de siglo, pero no reciben el mismo trato." },
    ] },
] };
