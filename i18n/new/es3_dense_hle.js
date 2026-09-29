// 第三轮扩题：dense +10、hle +10 — español
const ADD3 = {

  dense: [
    { lv: 1, q: "Responde a la vez: ① ¿Cuántas casillas tiene un tablero de ajedrez? ② ¿Cuántas patas tiene una araña?", issue: "Al contar patas de araña se le desordenó el tablero", opts: [
      { t: "① 64 ② 8", ok: 1, r: "Correcto. 8 × 8 = 64 casillas; la araña tiene 8 patas porque no es un insecto. Ajedrecista y biólogo, los dos en línea." },
      { t: "① 100 ② 8", r: "① 100 casillas es el tablero de damas internacionales. El ajedrez es 8 × 8: te equivocaste de tablero." },
      { t: "① 64 ② 6", r: "② Seis patas tienen los insectos. Las dos que le quitaste a la araña ya se preparan para patearte." },
      { t: "① 100 ② 6", r: "Los dos expertos se fueron a jugar, y encima a la mesa equivocada." },
    ] },
    { lv: 2, q: "Responde a la vez: ① ¿Cuál es la capital de Australia? ② En Python, ¿qué devuelve bool(\"False\")?", issue: "Lo engañó un string que dice False", opts: [
      { t: "① Canberra ② True", ok: 1, r: "Correcto. La capital es Canberra; cualquier string no vacío es True, aunque dentro diga False." },
      { t: "① Sídney ② True", r: "① Sídney y Melbourne se peleaban la capitalidad y ninguna cedía, así que construyeron Canberra desde cero. Ser famosa no te hace capital." },
      { t: "① Canberra ② False", r: "② Python no lee lo que dice el string, solo mira si está vacío. De boca dice False; en el fondo, es True." },
      { t: "① Sídney ② False", r: "El geógrafo y el programador se creyeron lo que decía la etiqueta." },
    ] },
    { lv: 2, q: "Responde a la vez: ① ¿Cuál es el símbolo químico del oro? ② ¿Cuántas teclas tiene un piano estándar?", issue: "Contó solo las teclas blancas del piano", opts: [
      { t: "① Au ② 88", ok: 1, r: "Correcto. Au viene del latín aurum; 52 teclas blancas más 36 negras, 88 en total." },
      { t: "① Ag ② 88", r: "① Ag es la plata. Si confundes la plata con el oro, el joyero te va a adorar." },
      { t: "① Au ② 52", r: "② 52 son las blancas. Las 36 negras: ¿nosotras no contamos o qué?" },
      { t: "① Ag ② 52", r: "El químico y el músico solo vieron lo que brillaba en blanco." },
    ] },
    { lv: 2, q: "Responde a la vez: ① ¿El 1 es un número primo? ② ¿Cuál es hoy el país más poblado del mundo?", issue: "Sus datos de población se quedaron en la fecha de corte", opts: [
      { t: "① No ② India", ok: 1, r: "Correcto. Un primo tiene exactamente dos divisores y el 1 tiene uno solo; en 2023 la ONU estimó que India superó a China." },
      { t: "① Sí ② India", r: "① Para ser primo hacen falta dos divisores. El 1 solo se tiene a sí mismo; no le alcanza." },
      { t: "① No ② China", r: "② India la superó en 2023. Tus datos de entrenamiento se cortaron un poco pronto." },
      { t: "① Sí ② China", r: "El matemático y el demógrafo siguen con el libro de texto de primaria." },
    ] },
    { lv: 2, q: "Responde a la vez: ① ¿Puede un colibrí volar hacia atrás? ② ¿Qué pasa si pulsas Ctrl + Shift + T en el navegador?", issue: "No sabe que el navegador tiene botón de arrepentimiento", opts: [
      { t: "① Sí ② Reabre la pestaña que acabas de cerrar", ok: 1, r: "Correcto. El colibrí se queda suspendido y también vuela hacia atrás; Ctrl+Shift+T es el salvavidas de los dedos torpes: la pestaña cerrada vuelve tal cual." },
      { t: "① No ② Reabre la pestaña que acabas de cerrar", r: "① El colibrí bate las alas decenas de veces por segundo: se queda quieto en el aire y va marcha atrás sin mirar el retrovisor." },
      { t: "① Sí ② Abre una ventana de incógnito", r: "② La ventana de incógnito es Ctrl+Shift+N (en Chrome). La T rescata la pestaña que acabas de cerrar." },
      { t: "① No ② Abre una ventana de incógnito", r: "Los dos expertos abrieron una ventana de incógnito para no trabajar." },
    ] },
    { lv: 3, q: "Responde a la vez: ① ¿A qué temperatura coinciden los grados Celsius y Fahrenheit? ② ¿Cuál es el animal nacional de Escocia?", issue: "No sabe que el animal nacional de Escocia no existe", opts: [
      { t: "① -40 ② El unicornio", ok: 1, r: "Correcto. -40 °C son justo -40 °F; el animal nacional de Escocia es el unicornio, un animal que no existe pero tiene mucha clase." },
      { t: "① 0 ② El unicornio", r: "① 0 °C son 32 °F. Solo -40 vale en las dos escalas: hace tanto frío que ni hay que convertir." },
      { t: "① -40 ② El monstruo del lago Ness", r: "② Ibas bien, también es un animal que no existe, pero Escocia eligió al unicornio. Nessie se quedó de mascota turística." },
      { t: "① 0 ② El monstruo del lago Ness", r: "El físico se congeló y el historiador se fue a esperar a Nessie a la orilla del lago." },
    ] },
    { lv: 3, q: "Responde a la vez: ① ¿Cuánto es el factorial de 0 (0!)? ② ¿Cómo oía Beethoven cuando escribió la Novena Sinfonía?", issue: "Cree que 0! es 0 porque no hay nada", opts: [
      { t: "① 1 ② Estaba casi sordo", ok: 1, r: "Correcto. Cero cosas se ordenan de una sola forma: no ordenándolas; en el estreno no oía los aplausos, y una cantante lo giró hacia el público para que viera la ovación." },
      { t: "① 0 ② Estaba casi sordo", r: "① Multiplicar nada no da 0. Por convención, el producto vacío vale 1; si no, habría que parchear todas las fórmulas de combinatoria." },
      { t: "① 1 ② Oía más o menos bien", r: "② Para entonces casi no oía nada; lo tocaba todo en su cabeza. La mejor creación offline de la historia." },
      { t: "① 0 ② Oía más o menos bien", r: "El matemático y el músico se pusieron juntos auriculares con cancelación de ruido." },
    ] },
    { lv: 3, q: "Responde a la vez: ① En verano, ¿dejar abierta la puerta del refrigerador enfría la habitación? ② ¿Los murciélagos son ciegos?", issue: "Quiere enfriar la habitación con el refrigerador abierto", opts: [
      { t: "① No, la calienta más ② No, todos ven", ok: 1, r: "Correcto. El refrigerador solo pasa el calor del interior a la parte de atrás, y encima suma el calor del motor; los murciélagos ven, y el ultrasonido es un radar de regalo." },
      { t: "① Sí, sale el frío ② No, todos ven", r: "① El frío sale por delante y el calor vuelve doble por detrás. Le estás pagando el gimnasio al motor del refrigerador." },
      { t: "① No, la calienta más ② Sí, se guían por ultrasonido", r: "② No hay ni una especie de murciélago ciega, y los murciélagos frugívoros ven bastante bien. Lo de «más ciego que un murciélago» es un prejuicio humano." },
      { t: "① Sí, sale el frío ② Sí, se guían por ultrasonido", r: "El físico se sentó a tomar el fresco frente al refrigerador y el biólogo cerró los ojos para imitar a un murciélago." },
    ] },
    { lv: 3, q: "Responde a la vez: ① ¿Qué significa el código de estado HTTP 418? ② ¿Cuál es el ave más numerosa de la Tierra?", issue: "Lo rechazó una tetera con código de estado", opts: [
      { t: "① Soy una tetera ② La gallina", ok: 1, r: "Correcto. El 418 viene de un RFC de broma del Día de los Inocentes de 1998: el servidor se niega a hacer café porque es una tetera; y hay más de veinte mil millones de gallinas." },
      { t: "① Tiempo de espera agotado ② La gallina", r: "① El tiempo de espera agotado es el 408. El 418 es la tetera que se niega a hacer café: una broma que se volvió meme." },
      { t: "① Soy una tetera ② El gorrión", r: "② Gorriones hay muchos, pero los humanos criamos más de veinte mil millones de gallinas. Su primer puesto se lo ganó a fuerza de acabar en la mesa." },
      { t: "① Tiempo de espera agotado ② El gorrión", r: "El programador y el ornitólogo dieron 408 al mismo tiempo." },
    ] },
    { lv: 4, q: "Responde a la vez: ① En SQL, ¿WHERE x = NULL devuelve las filas donde x está vacío? ② ¿De qué color es la piel del oso polar?", issue: "Cree que NULL es igual a NULL", opts: [
      { t: "① No, hay que usar IS NULL ② Negra", ok: 1, r: "Correcto. Cualquier comparación con NULL da «desconocido», así que no sale ni una fila; el pelo del oso polar son tubos huecos transparentes y la piel es negra." },
      { t: "① Sí ② Negra", r: "① NULL es «no se sabe». ¿«No se sabe» es igual a «no se sabe»? SQL dice: no se sabe. Resultado: cero filas." },
      { t: "① No, hay que usar IS NULL ② Blanca", r: "② Lo blanco es el pelo, y en realidad es transparente. El oso polar es un oso negro con abrigo blanco." },
      { t: "① Sí ② Blanca", r: "El experto en bases de datos y el zoólogo solo miraron la superficie." },
    ] },
  ],

  hle: [
    { lv: 1, q: "Una moneda equilibrada salió cara 5 veces seguidas. ¿Qué probabilidad hay de que la sexta también salga cara?", issue: "Cree que la moneda le debe una cruz", opts: [
      { t: "1/2", ok: 1, r: "Correcto. La moneda no tiene memoria ni guarda rencor. Las 5 anteriores ya las olvidó." },
      { t: "Menos de 1/2: después de tantas caras, le toca a la cruz", r: "Falacia del jugador. La moneda no te debe ninguna cruz; a los casinos les encanta que pienses así." },
      { t: "Más de 1/2: está en racha, mejor apostar a cara", r: "La «mano caliente» también es una ilusión. La moneda no sabe que va en racha." },
      { t: "1/64, seis caras seguidas es muy difícil", r: "1/64 era la apuesta a 6 caras antes de empezar. Las 5 primeras ya pasaron; no las pagas dos veces." },
    ] },
    { lv: 2, q: "100 personas juegan un torneo de ping-pong por eliminación directa. ¿Cuántos partidos hacen falta para tener campeón?", issue: "Dibujó un cuadro entero para contar partidos", opts: [
      { t: "50", r: "50 es solo la primera ronda. Los otros 50 siguen junto a la mesa mirándote mal." },
      { t: "99", ok: 1, r: "Correcto. Cada partido elimina a uno; todos menos el campeón pierden una vez: 99 partidos exactos. Ya puedes guardar el cuadro." },
      { t: "100", r: "El campeón no pierde ninguno. ¿El partido que te sobra lo juega contra el aire?" },
      { t: "7: con 7 rondas ya sale el campeón", r: "7 son las rondas, lo máximo que juega el campeón. Las decenas de partidos restantes alguien tiene que jugarlos; el gimnasio no da resultados solo." },
    ] },
    { lv: 2, q: "Un aro de hierro con un agujero en el centro se calienta y se dilata. ¿Qué le pasa al agujero?", issue: "Cree que al dilatarse el aro aprieta el agujero", opts: [
      { t: "Se reduce: el hierro se dilata hacia dentro y lo aprieta", r: "La intuición falla. Todo el aro crece a escala, como una foto ampliada, y el agujero crece con él." },
      { t: "Se agranda", ok: 1, r: "Correcto. El agujero crece en proporción con el aro. Por eso, si un frasco con tapa metálica no abre, se pasa la tapa por agua caliente." },
      { t: "Queda igual, solo el hierro se vuelve más grueso", r: "El agujero no es tan zen. Si el aro crece, él también." },
      { t: "Primero se reduce y después se agranda", r: "No hay giro de guion. Calentar es ampliar todo a la vez; el agujero no cambia de bando a la mitad." },
    ] },
    { lv: 2, q: "Si la velocidad sube de 60 a 120 km/h, ¿cuántas veces más larga es aproximadamente la distancia de frenado (sin contar el tiempo de reacción)?", issue: "Cree que al doble de velocidad se frena al doble", opts: [
      { t: "2 veces: doble velocidad, doble distancia", r: "La distancia de frenado va con el cuadrado de la velocidad. El de delante no va a esperar a que hagas la cuenta lineal." },
      { t: "4 veces", ok: 1, r: "Correcto. La energía cinética es proporcional al cuadrado de la velocidad: el freno tiene que disipar 4 veces más energía. Por eso en autopista se deja tanta distancia." },
      { t: "Más o menos igual, las pastillas de freno son las mismas", r: "Las pastillas son las mismas, pero la energía que hay que disipar se multiplicó por 4. Ellas van a sufrir, y tú te vas a asustar." },
      { t: "8 veces", r: "Eso sería el cubo. No es para tanto, pero 4 veces ya alcanza para chocar por detrás." },
    ] },
    { lv: 2, q: "Lanzas una pelota hacia arriba en vertical. En el instante en que llega al punto más alto, ¿cuál es su aceleración?", issue: "Cree que la pelota descansa arriba", opts: [
      { t: "0, la pelota está quieta", r: "Lo que vale 0 es la velocidad. Si la aceleración también fuera 0, la pelota se quedaría colgada como una lámpara." },
      { t: "g, hacia abajo", ok: 1, r: "Correcto. La velocidad es 0, pero la gravedad no se toma ni un segundo libre. Al instante siguiente empieza a caer." },
      { t: "g, hacia arriba", r: "Lo único que va hacia arriba son tus esperanzas. La gravedad tira hacia abajo todo el tiempo." },
      { t: "La velocidad cambia de signo, así que en ese instante no está definida", r: "La que cambia de signo es la velocidad; la aceleración sigue firme, siempre g." },
    ] },
    { lv: 3, q: "Tienes 100 kg de pepinos con un 99% de agua. Tras un día al sol, el agua baja al 98%. ¿Cuánto pesan ahora?", issue: "No cree que los pepinos adelgacen a la mitad en un día", opts: [
      { t: "99 kg, solo se evaporó un 1% de agua", r: "La materia seca, 1 kg, no cambia. Si pasa de ser el 1% al 2%, el total solo puede ser 50 kg." },
      { t: "50 kg", ok: 1, r: "Correcto. 1 kg de materia seca es el 2%, así que el total es 50 kg. Un día al sol y la mitad de peso: dieta milagro." },
      { t: "98 kg", r: "Todo el mundo lo calcula así; por eso es una paradoja famosa. La respuesta es 50." },
      { t: "Unos 90 kg", r: "Descontaste un poco más por prudencia, pero te faltan 40 kg." },
    ] },
    { lv: 3, q: "Tienes dos monedas iguales y sujetas una. La otra rueda pegada a su borde hasta dar una vuelta completa y volver al punto de partida (sin deslizar). ¿Cuántas vueltas dio sobre sí misma la que rueda?", issue: "Cree que una vuelta alrededor es una vuelta propia", opts: [
      { t: "1, las dos circunferencias son iguales", r: "Igual perímetro solo cuenta la parte de «rodar»; dar la vuelta alrededor de la otra te regala una vuelta extra." },
      { t: "2", ok: 1, r: "Correcto. Su centro recorre un círculo de radio doble. En 1982 el SAT puso una pregunta parecida y la respuesta correcta no estaba entre las opciones: los examinadores se equivocaron solos." },
      { t: "3", r: "Diste una vuelta de más. La moneda se va a marear." },
      { t: "Depende de lo rápido que ruede", r: "El número de vueltas es pura geometría, no velocidad. Despacito también son 2." },
    ] },
    { lv: 3, q: "Hay 4 tarjetas con una letra en una cara y un número en la otra. Sobre la mesa se ven A, K, 4 y 7. Regla: «Si una cara tiene vocal, la otra tiene un número par». ¿A qué tarjetas hay que dar la vuelta, como mínimo, para comprobar la regla?", issue: "Le dio la vuelta justo a la tarjeta que sobraba", opts: [
      { t: "La A y el 4", r: "Detrás del 4 haya lo que haya, no rompe la regla. La que puede tumbarla es el 7: si detrás hay una vocal, la regla cae." },
      { t: "La A y el 7", ok: 1, r: "Correcto. Solo esas dos pueden dar un contraejemplo. En la clásica tarea de selección de Wason, acierta más o menos una de cada diez personas." },
      { t: "Solo la A", r: "Te faltó el 7. Si detrás del 7 hay una E, la regla se va a la quiebra." },
      { t: "Las 4", r: "Sirve para comprobarla, pero se pedía el mínimo. ¿Viniste a hacer horas extra?" },
    ] },
    { lv: 3, q: "Una bicicleta avanza a velocidad constante (sin que las ruedas patinen). ¿A qué velocidad respecto al suelo va el punto más alto de la rueda?", issue: "Cree que todos los puntos de la rueda van igual de rápido", opts: [
      { t: "A la velocidad de la bici, toda la rueda avanza junta", r: "El punto de arriba suma el avance y el giro: dos velocidades que se suman. Es el punto más rápido de toda la rueda." },
      { t: "Al doble de la velocidad de la bici", ok: 1, r: "Correcto. Por eso en las fotos de ciclistas los rayos de la mitad de arriba salen más movidos; el punto que toca el suelo está quieto en ese instante, si no, el neumático ya estaría gastado." },
      { t: "A 0, solo gira alrededor del eje", r: "El que va a 0 es el punto que toca el suelo. El de arriba es el que más se esfuerza por avanzar." },
      { t: "A la mitad de la velocidad de la bici", r: "No es tan flojo. El punto más alto es el más rápido de toda la rueda." },
    ] },
    { lv: 4, q: "Un auto sube una cuesta de 1 km a 30 km/h. ¿A qué velocidad tiene que bajarla para que la media de ida y vuelta sea de 60 km/h?", issue: "Planea bajar a 90 para compensar la media", opts: [
      { t: "A 90 km/h: (30 + 90) ÷ 2 da justo 60", r: "Las velocidades no se promedian así. Bajar a 90 lleva 40 segundos; 2 km en 160 segundos dan una media de solo 45." },
      { t: "A 120 km/h", r: "La media total queda en 48. Cuanto más aceleras, más se te escapa." },
      { t: "Imposible, ninguna velocidad alcanza", ok: 1, r: "Correcto. 2 km a 60 de media exigen hacerlo todo en 2 minutos, y la subida ya se gastó los 2 minutos. A menos que bajes teletransportándote." },
      { t: "A 180 km/h", r: "Vas a 180 y la media apenas pasa de 51. La multa llegó; la media, no." },
    ] },
  ],
};
