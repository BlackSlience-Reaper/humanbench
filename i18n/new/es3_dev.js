// 第三轮扩题：terminal / cursor / automation，各 9 道 — español
const ADD3 = {

  terminal: [
    { lv: 1, term: "$ git blame utils.js -L 42,42\na1b2c3d4 (me 2025-03-14 02:47:12 +0800 42)  // parche temporal, mañana lo arreglo", q: "Quieres descubrir quién escribió este engendro de la línea 42. ¿Resultado?", issue: "git blame lo señaló a él mismo", opts: [
      { t: "Fuiste tú, de madrugada, hace año y medio", ok: 1, r: "Correcto. blame muestra línea por línea quién la tocó por última vez. Ese «mañana» ya lleva más de 500 días." },
      { t: "Un compañero misterioso llamado me; hay que ir a pedirle cuentas", r: "me es tu propio usuario de Git. Te ibas a pedir cuentas a ti mismo." },
      { t: "a1b2c3d4 es el número de empleado del autor; pregúntale a RR. HH.", r: "Es el identificador del commit. RR. HH. no lo encuentra; tu conciencia, sí." },
      { fun: 1, t: "blame significa que Git carga con la culpa por ti", r: "Git solo investiga el caso. La culpa sigue siendo tuya." },
    ] },
    { lv: 2, term: "$ node server.js\nListening on :3000\n^Z\nzsh: suspended  node server.js\n$ node server.js\nError: listen EADDRINUSE: address already in use :::3000", q: "Cerraste el servidor con Ctrl+Z y al reiniciarlo dice que el puerto está ocupado. ¿Quién lo ocupa?", issue: "Cree que Ctrl+Z es el botón de apagado", opts: [
      { t: "Tú mismo: Ctrl+Z solo lo dejó suspendido", ok: 1, r: "Correcto. Ctrl+Z pausa, no cierra. Escribe fg para traerlo al frente y luego pulsa Ctrl+C." },
      { t: "Otro programa aprovechó el instante en que cerraste y se quedó con el 3000", r: "Nadie se lo quedó. Quien ocupa el puerto es justo el proceso que dejaste congelado en segundo plano." },
      { t: "Ctrl+Z es deshacer: deshizo tu comando de arranque", r: "En la terminal no hay deshacer. Ctrl+Z solo deja al programa castigado en su sitio." },
      { fun: 1, t: "Reinicia el equipo para liberar el puerto por la vía física", r: "Funciona, y cuesta tus 38 pestañas abiertas del navegador." },
    ] },
    { lv: 2, term: "$ apt install cowsay\nE: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?\n$ sudo !!", q: "¿Qué significa la última línea, sudo !!?", issue: "Cree que sudo !! es gritarle a la máquina", opts: [
      { t: "Vuelve a ejecutar el comando anterior con permisos de administrador", ok: 1, r: "Correcto. !! es «el comando anterior». Tan vago que ni lo vuelves a escribir: eso es ser veterano." },
      { t: "Modo forzado: ignora todos los errores y sigue", r: "Los signos de exclamación no son para gritarle a la máquina. Y a ella tampoco le funciona que le grites." },
      { t: "Vuelve a ejecutar como administrador todos los comandos del historial", r: "Solo el anterior. Si fueran todos, resucitarían en grupo los comandos que escribiste mal la semana pasada." },
      { fun: 1, t: "Gritarle a la máquina: ¡¡que lo instales!!", r: "La emoción está bien lograda. Lástima que !! solo abrevia «el comando anterior»." },
    ] },
    { lv: 2, term: "$ ls\nhomework.docx\n$ cat .diary.txt\nHoy tampoco hice la tarea.", q: "En el ls no aparece ningún diario, pero cat sí lo abre. ¿Dónde está escondido?", issue: "No encuentra el diario secreto que empieza con punto", opts: [
      { t: "Ahí mismo: los archivos que empiezan con punto se ocultan", ok: 1, r: "Correcto. Si el nombre empieza con . queda oculto; con ls -a se ve. En el Finder de Mac, Cmd+Shift+. también lo hace aparecer." },
      { t: "En la memoria: cat lee archivos que aún no se guardaron en disco", r: "cat solo lee archivos del disco. No lee la mente ni tus borradores." },
      { t: "El sistema lo puso en cuarentena como sospechoso y solo cat puede verlo", r: "El sistema no tiene tanto tiempo libre. Solo oculta, por norma, lo que empieza con punto." },
      { fun: 1, t: "ls leyó el contenido y, por respeto, no lo mostró", r: "ls no tiene tanta inteligencia emocional. Lo de la tarea, en cambio, sí es cierto." },
    ] },
    { lv: 2, term: "$ curl https://api.example.com/search?q=cat&page=2\nzsh: no matches found: https://api.example.com/search?q=cat", q: "La URL abre bien en el navegador, pero en la terminal da error. ¿Qué haces?", issue: "Le pasa la URL a la terminal sin comillas", opts: [
      { t: "Poner la URL entre comillas", ok: 1, r: "Correcto. zsh toma el ? como comodín y busca archivos, y el & además parte el comando en dos. Entre comillas, es solo texto." },
      { t: "El sitio bloqueó la terminal; descárgalo con el navegador", r: "El sitio ni recibió la petición. El error es de zsh, que está buscando en tu disco un archivo que se llame como esa URL." },
      { t: "curl no soporta https; cámbialo a http", r: "curl soporta https desde hace siglos. Por no poner unas comillas, tiraste el cifrado." },
      { t: "Añadir sudo y volver a intentarlo", r: "sudo te da permisos, no comillas." },
    ] },
    { lv: 3, term: "$ ls -lh movie.mkv\n-rw-r--r--  1 me  staff   6.2G Sep 20 21:14 movie.mkv\n$ cp movie.mkv /Volumes/USB/\ncp: /Volumes/USB/movie.mkv: File too large", q: "A la memoria USB le quedan 50 GB, pero dice que una película de 6 GB es «demasiado grande». ¿Por qué?", issue: "Con 50 GB libres no le cabe una película", opts: [
      { t: "La memoria está en FAT32: máximo 4 GB por archivo", ok: 1, r: "Correcto. FAT32 es de 1996, cuando nadie imaginaba un archivo de 4 GB. Primero haz una copia de seguridad y luego formatéala en exFAT." },
      { t: "Es una memoria trucada: dice 64 GB, pero en realidad solo caben 4 GB", r: "Las memorias trucadas suelen fingir que la copia salió bien y fallar en silencio; no te avisan con educación de que es «demasiado grande»." },
      { t: "La película tiene protección anticopia y el sistema se niega a copiarla", r: "A cp no le importan los derechos de autor, solo el sistema de archivos. Ni leyó el título." },
      { t: "El comando cp solo puede copiar hasta 4 GB de una vez", r: "cp copia cientos de GB sin despeinarse. Lo que lo frena es el formato de la memoria." },
    ] },
    { lv: 3, term: "$ cat .gitignore\n.DS_Store\n$ git status\n  modified:   .DS_Store", q: "Ya está en el .gitignore y Git lo sigue vigilando. ¿Por qué?", issue: "Cree que .gitignore es retroactivo", opts: [
      { t: "Ya se había hecho commit; .gitignore no afecta a lo ya rastreado", ok: 1, r: "Correcto. .gitignore no es retroactivo. git rm --cached hace que Git lo suelte, y el archivo sigue ahí." },
      { t: "El .gitignore solo funciona después de reiniciar el equipo", r: "Git no necesita reinicios. Solo tiene muy buena memoria." },
      { t: "Hay que escribir *.DS_Store* para que coincida", r: "Por muy elaborado que sea el comodín, no frena a un archivo que ya está registrado." },
      { t: "El .gitignore solo aplica en los equipos de los demás, no en el tuyo", r: "Aplica igual para todos; simplemente no toca el pasado. Como toda norma nueva." },
    ] },
    { lv: 3, term: "$ ps aux | grep python\nme  48213  0.0  0.0  408628  1648 s001  S+  10:02AM  0:00.00 grep python", q: "Querías ver si tu script de python sigue vivo, y solo sale esta línea. ¿Qué significa?", issue: "Buscando y buscando, solo se encontró a sí mismo", opts: [
      { t: "python no está corriendo; esa línea es el propio grep", ok: 1, r: "Correcto. Mientras grep busca python, su propio nombre es «grep python». Encontraste al que estaba buscando." },
      { t: "python está corriendo, con el PID 48213", r: "48213 es el PID de grep. Casi matas con kill a un buscador." },
      { t: "python está en segundo plano, por eso solo sale una línea", r: "Los procesos en segundo plano también se listan. Mira el final de la línea: se llama grep, no como tu script." },
      { fun: 1, t: "ps significa «posdata»: python te dejó un mensaje", r: "ps es process status, sirve para ver procesos. Las posdatas van al final de las cartas de amor." },
    ] },
    { lv: 4, term: "$ ./build.sh 2>&1 > build.log\nerror: missing config.yml", q: "Querías mandar toda la salida, errores incluidos, a build.log, pero los errores siguen saliendo en pantalla. ¿Por qué?", issue: "Puso 2>&1 en el lugar equivocado y el error se escapó", opts: [
      { t: "El orden está al revés: debe ser > build.log 2>&1", ok: 1, r: "Correcto. Las redirecciones se aplican de izquierda a derecha: cuando se ejecuta 2>&1, la salida estándar todavía apunta a la pantalla, y los errores se van con ella." },
      { t: "zsh no entiende 2>&1; hay que usar &> sí o sí", r: "zsh entiende 2>&1 perfectamente. No es que no lo lea: es que mandaste los errores detrás de quien no debías." },
      { t: "Los errores van por la salida de error estándar y ninguna redirección los alcanza", r: "2> existe justo para eso. Solo que les hiciste elegir destino antes de abrir el archivo." },
      { t: "build.log está en uso, así que los errores no caben y salen en pantalla", r: "El archivo no está en uso. Ábrelo: toda la salida normal está ahí; solo faltan los errores." },
    ] },
  ],

  cursor: [
    { lv: 1, code: "- total = price * qty\n+ total = price * qty  # arreglado", q: "La IA dice «bug del importe mal calculado, arreglado». Este es el único cambio del diff. ¿Qué haces?", issue: "Se lo creyó por un «# arreglado»", opts: [
      { t: "Rechazarlo: no tocó el código, solo añadió un comentario", ok: 1, r: "Correcto. Los comentarios no participan en el cálculo. Este «arreglado» solo arregla tu estado de ánimo." },
      { t: "Hacer merge; si la IA puso arreglado, es que lo revisó", r: "Lo único que revisó es la sintaxis del comentario." },
      { t: "Hacer merge; el comentario le recuerda al programa cómo calcular bien", r: "El programa ve un # y cierra los ojos. Nunca lee los comentarios, igual que tus compañeros." },
      { fun: 1, t: "Pedirle que añada «# ahora sí está arreglado de verdad»", r: "Doble garantía, cero líneas cambiadas." },
    ] },
    { lv: 2, code: "def is_prime(n):\n    return n in (2, 3, 5, 7, 11, 13)", q: "La función de la IA para detectar primos pasa todos los tests. Los tests usan justo los números del 1 al 13. ¿Este código?", issue: "La IA se aprendió las respuestas del examen", opts: [
      { t: "Se memorizó las respuestas: solo conoce los números del test", ok: 1, r: "Correcto. Le das 17 y dice que no es primo. Programar para el test: en cuanto acaba el examen, se le cae la careta." },
      { t: "Está bien: pasa los tests, y buscar en una tupla es más rápido que calcular", r: "Rápido sí, pero hay infinitos primos y no caben en la tupla." },
      { t: "Está mal: el 1 también es primo y lo olvidó", r: "El 1 no es primo. Lo que olvidó son el 17, el 19, el 23 y los infinitos que siguen." },
      { fun: 1, t: "Pedirle que amplíe la tupla hasta un millón y listo para siempre", r: "Aunque llegues al millón, 1000003 sigue saliendo mal. Resulta que es primo." },
    ] },
    { lv: 2, code: "function login(user) {\n  // nueva lógica de login\n}\n\n// ... el resto del código sin cambios ...", q: "La IA respondió esto. Seleccionas todo, pegas y sobrescribes app.js entero. ¿Resultado?", issue: "Pegó tal cual el «resto del código sin cambios»", opts: [
      { t: "En app.js quedan estas líneas y nada más; el resto desapareció", ok: 1, r: "Correcto. «El resto del código sin cambios» está escrito para humanos, no es un conjuro. Tú mismo cambiaste 800 líneas por un comentario." },
      { t: "El editor reconoce ese comentario y conserva el código original", r: "El editor no entiende esa frase. Solo sabe que pulsaste pegar." },
      { t: "El programa funciona igual; los comentarios no se ejecutan", r: "Es cierto que los comentarios no se ejecutan. El problema es que ya no queda otro código que ejecutar." },
      { fun: 1, t: "El proyecto pesa un 95% menos y el rendimiento se dispara", r: "La página carga al instante. En blanco." },
    ] },
    { lv: 2, code: "npm install is-odd\n\nconst isOdd = require('is-odd');\nif (isOdd(n)) { ... }", q: "Para saber si un número es impar, la IA instaló un paquete en el proyecto. ¿Qué opinas?", issue: "Instaló un paquete para saber si un número es impar", opts: [
      { t: "Innecesario: basta n % 2, y cada paquete es un riesgo más", ok: 1, r: "Correcto. Cada dependencia es un acto de fe. En 2016 retiraron left-pad, un paquete de 11 líneas, y un montón de proyectos grandes dejaron de compilar en el acto." },
      { t: "Muy profesional: un paquete dedicado está más probado que algo escrito a mano", r: "n % 2 jamás ha tenido un bug. En cambio, este paquete depende de otro paquete: is-number." },
      { t: "is-odd es un nombre inventado por la IA; no existe en npm", r: "Existe de verdad, y hay gente que lo instala. Eso es lo más surrealista." },
      { fun: 1, t: "Instalar también is-even, para tener la pareja completa", r: "is-even también existe, y depende de is-odd." },
    ] },
    { lv: 2, code: "app.post('/login', (req, res) => {\n  console.log('Petición de login:', req.body);  // IA: para depurar\n  ...", q: "La IA añadió este log para depurar el login, y así se fue a producción. ¿Cuál es el problema?", issue: "El log guarda las contraseñas de todos en texto plano", opts: [
      { t: "Las contraseñas quedan en el log en texto plano", ok: 1, r: "Correcto. La contraseña va dentro de req.body. Por muy bien cifrada que esté la base de datos, en el log aparece en claro, línea tras línea." },
      { t: "console.log ralentiza el servidor y el login va más lento", r: "Lo lento es lo de menos. El archivo de log ahora es la libreta de contraseñas de todo el sitio." },
      { t: "No pasa nada, los logs solo los ve gente de confianza", r: "Operaciones, la plataforma de logs, el monitoreo externo, el que renuncie el mes que viene… todos de confianza." },
      { fun: 1, t: "Mandarles el log también a los usuarios, por transparencia", r: "Tan transparente que cada usuario ve las contraseñas de los demás." },
    ] },
    { lv: 3, code: "requests.get(PAY_API, verify=False)  # arregla el error de SSL", q: "La API de pagos daba error de certificado, y la IA lo «arregló» así. ¿Qué haces?", issue: "Apagó la verificación de certificados de un plumazo", opts: [
      { t: "Rechazarlo: es no verificar con quién hablas", ok: 1, r: "Correcto. El certificado es el documento de identidad del otro lado; verify=False es dejar pasar sin pedir documentos. Primero averigua por qué falla." },
      { t: "Hacer merge: los datos siguen cifrados por HTTPS, la seguridad no cambia", r: "Cifrado sí, pero no sabes con quién. Una llamada con un estafador también puede ser muy privada." },
      { t: "Hacer merge, con un comentario que diga «solo para pruebas»", r: "El código «solo para pruebas» suele vivir en producción hasta jubilarse." },
      { t: "Si el certificado falla es problema del otro; desactivar la verificación es lo estándar", r: "Lo estándar es que el otro arregle su certificado, no cerrar tú los ojos." },
    ] },
    { lv: 3, code: "ALTER TABLE users DROP COLUMN phone;\nALTER TABLE users ADD COLUMN mobile VARCHAR(20);", q: "Le pediste a la IA renombrar la columna phone a mobile, y escribió esta migración. ¿Qué pasa al ejecutarla?", issue: "Convirtió «renombrar» en «borrar y crear»", opts: [
      { t: "Todos los teléfonos se pierden y mobile queda vacía", ok: 1, r: "Correcto. Al borrar la columna, los datos se van con ella; la nueva está vacía. Para renombrar se usa RENAME COLUMN." },
      { t: "La base de datos mueve sola los datos de phone a mobile", r: "La base de datos no adivina tus intenciones. DROP es borrar; no hay opción «mudanza»." },
      { t: "Da error: no se puede borrar y añadir columnas en la misma migración", r: "Es totalmente válido, y eso es lo que da miedo. Las dos líneas se ejecutan sin un solo error." },
      { fun: 1, t: "Los teléfonos de los usuarios se modernizan: ahora son «mobile»", r: "El nombre se modernizó; los números se evaporaron." },
    ] },
    { lv: 3, code: "name = filename.removeprefix(\"report_\")", q: "Esta línea de la IA funciona en tu equipo (Python 3.12), pero en el servidor (Python 3.8) se cae. ¿Por qué?", issue: "El código de la IA es más nuevo que el servidor", opts: [
      { t: "3.8 no tiene removeprefix; llegó en 3.9", ok: 1, r: "Correcto. Da AttributeError. La IA asume que usas la última versión, y tu servidor sigue viviendo en 2019." },
      { t: "Los nombres de archivo del servidor llevan tildes y eñes, y falla la codificación", r: "Ni llegó a ver los nombres de archivo. Se cae en el paso de «este método no existe»." },
      { t: "Para usar métodos de string primero hay que hacer import string", r: "Los métodos de string no necesitan import. Este simplemente no había nacido en 3.8." },
      { t: "El servidor tiene poca memoria y no puede con la sintaxis nueva", r: "Es quitar un prefijo; hasta una calculadora podría." },
    ] },
    { lv: 4, code: "const d = new Date(\"2026-03-04\");\nlabel.textContent = `Cumpleaños: ${d.getDate()}/${d.getMonth() + 1}`;", q: "La IA hizo esto para mostrar cumpleaños. En España se ve bien, pero en México todos los usuarios cumplen un día antes. ¿Por qué?", issue: "Hizo que todo México cumpla años un día antes", opts: [
      { t: "La fecha se lee a medianoche UTC, y en México aún es el día anterior", ok: 1, r: "Correcto. Un string ISO con solo la fecha se interpreta en UTC. Ciudad de México va 6 horas por detrás, así que queda en la tarde del 3 de marzo." },
      { t: "El navegador en México lo lee como mes/día: 3 de abril en vez de 4 de marzo", r: "Eso cambiaría el mes, no un día. Y el formato 2026-03-04 no tiene ambigüedad." },
      { t: "getMonth() empieza en 0 y al código le falta sumar 1", r: "El código ya suma 1. Y en ese caso fallaría el mes, no el día." },
      { t: "El reloj del servidor en México va un día atrasado", r: "Este código corre en el navegador del usuario; el servidor no tiene nada que ver. El culpable es el huso horario." },
    ] },
  ],

  automation: [
    { lv: 1, q: "En Excel, una celda muestra «########». ¿Qué es lo más probable?", issue: "Cree que los #### son Excel insultándolo", opts: [
      { t: "La columna es estrecha y el número no cabe", ok: 1, r: "Correcto. Excel prefiere mostrarte una fila de # antes que medio número." },
      { t: "Excel cifró el dato y hay que escribir una contraseña", r: "No está cifrado. Ensancha un poco la columna y se revela el secreto." },
      { t: "La fórmula está mal y Excel te está censurando insultos", r: "Una fórmula con error muestra #¡VALOR! o parecidos. Una fila de # solo está gritando «¡apretado!»." },
      { t: "El número supera el máximo que Excel puede calcular", r: "Excel guarda números hasta con 307 ceros detrás. Solo está asfixiado en esa columna." },
    ] },
    { lv: 2, code: "* 9 * * *  send_morning_report.sh", q: "Quieres que el informe diario salga una vez cada mañana a las 9. ¿Qué pasa si lo escribes así?", issue: "El jefe recibe 60 informes a las 9", opts: [
      { t: "Sale uno por minuto de 9:00 a 9:59: 60 correos", ok: 1, r: "Correcto. Con * en los minutos es «cada minuto». Para una sola vez es 0 9 * * *. La bandeja del jefe se está llenando de informes." },
      { t: "Sale una vez al día a las 9:00; los * significan «cualquiera» y no afectan", r: "El primer * está en los minutos: «cualquiera» significa todos los minutos de las 9." },
      { t: "Sale cada 9 horas", r: "Eso sería 0 */9 * * *, y se ejecutaría a las 0, las 9 y las 18." },
      { t: "Sale el día 9 de cada mes", r: "El 9 está en la segunda posición: es la hora. El día del mes va en la tercera." },
    ] },
    { lv: 2, code: "/^\\d{4}-\\d{2}-\\d{2}$/", q: "Un formulario de inscripción valida la «fecha de nacimiento» con esta regex. ¿Qué entrada pasa?", issue: "Dejó pasar a alguien nacido un 30 de febrero", opts: [
      { t: "1999-02-30", ok: 1, r: "Correcto. La regex solo cuenta el formato; no sabe de calendarios. A quien nació el 30 de febrero: inscripción aceptada." },
      { t: "1999/02/03", r: "La regex pide guiones. Las barras, a su casa." },
      { t: "1999-2-3", r: "\\d{2} pide dos dígitos: febrero es 02. La regex no conoce el «más o menos»." },
      { t: "99-02-03", r: "El año va con 4 cifras. El efecto 2000 dice que esta se la sabe." },
    ] },
    { lv: 2, q: "Automatización en la nube: «Cuando aparezca una imagen nueva en la carpeta photos, comprímela y guarda la copia en photos». Subes cat.jpg. ¿Qué pasa?", issue: "Puso la nube a comprimir en bucle infinito", opts: [
      { t: "La imagen comprimida vuelve a disparar la regla, sin fin", ok: 1, r: "Correcto. cat_small.jpg, cat_small_small.jpg… Nunca pongas la salida y la entrada en la misma carpeta." },
      { t: "Queda la original y una versión comprimida, y ahí se acaba", r: "La regla solo mira si hay «imagen nueva», y la comprimida también lo es. Va a seguir comprimiendo." },
      { t: "El sistema reconoce que la imagen la generó él y no la procesa", r: "La automatización no tiene conciencia de sí misma; solo ve «archivo nuevo»." },
      { fun: 1, t: "El gato queda comprimido en un gatito", r: "El gato no se encoge; tu espacio libre en la nube, sí." },
    ] },
    { lv: 2, code: "0 8 * * *  push_good_morning.sh", q: "El servidor está en UTC. Quieres mandar un «buenos días» a tus usuarios de Ciudad de México (UTC-6) a las 8 de la mañana. ¿Qué pasa?", issue: "Manda los buenos días de madrugada", opts: [
      { t: "A las 2:00 de la madrugada", ok: 1, r: "Correcto. Ciudad de México va 6 horas por detrás de UTC: las 8:00 UTC son las 2:00 allí. Buenos días, y perdón por despertarte." },
      { t: "A las 8:00 en punto, como querías", r: "cron solo mira el reloj del servidor, y ese reloj va 6 horas adelantado respecto a México." },
      { t: "A las 14:00, en plena tarde", r: "Al revés. México va por detrás de UTC: hay que restar 6 horas, no sumarlas." },
      { t: "cron lo convierte solo a la zona horaria de cada usuario", r: "cron ni siquiera sabe quiénes son tus usuarios, menos aún dónde viven." },
    ] },
    { lv: 3, code: "/example\\.com$/", q: "Solo quieres aceptar correos de example.com, así que validas el dominio del remitente con esta regex. ¿Cuál también pasa?", issue: "Al estafador le basta con un prefijo para colarse", opts: [
      { t: "evilexample.com", ok: 1, r: "Correcto. Solo mira el final; delante puede ir cualquier cosa. Debería ser /(^|\\.)example\\.com$/. El estafador ya registró el dominio." },
      { t: "example.com.evil.net", r: "El $ exige terminar en example.com; este termina en evil.net. Bloqueado." },
      { t: "EXAMPLE.COM", r: "Por defecto la regex distingue mayúsculas: la versión en mayúsculas se queda fuera." },
      { t: "mail.example.co", r: "Le falta una m. Para la regex, una letra de menos y ya eres un desconocido." },
    ] },
    { lv: 3, code: "# Ejecutado a mano, funciona:\n$ cd ~/proj && ./backup.sh\n\n# En el crontab, nunca ha funcionado:\n0 3 * * *  ./backup.sh", q: "El servidor está encendido 24 horas y el script funciona a mano. ¿Por qué la tarea programada nunca ha funcionado?", issue: "A mano funciona; en cron se hace el muerto", opts: [
      { t: "cron arranca en el home, y ahí no hay ningún ./backup.sh", ok: 1, r: "Correcto. cron no hace cd a tu proyecto. Usa la ruta absoluta, por ejemplo /home/me/proj/backup.sh." },
      { t: "cron solo ejecuta scripts de root, no de usuarios normales", r: "Cada usuario puede tener su propio crontab. No es que no tengas rango: es que no encuentra la dirección." },
      { t: "A las 3 de la madrugada el servidor también descansa y no ejecuta tareas", r: "El servidor no duerme nunca. A las 3 de la madrugada el único dormido eres tú." },
      { t: "0 3 * * * es cada 3 minutos y lo bloquean por parecer un ataque", r: "0 3 * * * es todos los días a las 3:00. Y el sistema no es tan susceptible." },
    ] },
    { lv: 3, q: "Junto a cada pedido pones =AHORA() para registrar la hora de compra. Al día siguiente abres la hoja y…", issue: "Les puso «ahora» a todos los pedidos antiguos", opts: [
      { t: "Todas las horas pasaron a ser la de este momento", ok: 1, r: "Correcto. AHORA() se actualiza cada vez que la hoja recalcula. Usa Ctrl+; para una fecha fija, o copia y pega como valores." },
      { t: "Cada fila conserva la hora en que se escribió", r: "Eso es lo que tú querías. AHORA() no tiene memoria, solo presente." },
      { t: "Solo la última fila se actualizó a la hora actual", r: "Trata a todas por igual: actualiza todo. Los pedidos de ayer ahora son «de hace un momento»." },
      { t: "La hoja da error: AHORA() solo puede usarse una vez", r: "Puedes usarla todas las veces que quieras; todas muestran el mismo «ahora»." },
    ] },
    { lv: 4, q: "El Excel de los científicos convertía los genes MARCH1 y SEPT2 en fechas («1-mar», «2-sep»). En 2020, ¿cómo se resolvió al final?", issue: "No imaginó que la humanidad se rendiría ante Excel", opts: [
      { t: "Cambiaron el nombre de los genes: MARCH1 pasó a MARCHF1", ok: 1, r: "Correcto. En 2020 el comité de nomenclatura de genes humanos renombró varios; SEPT2 pasó a SEPTIN2. La humanidad se rindió ante Excel." },
      { t: "Microsoft sacó un parche para que Excel dejara de convertir texto en fechas", r: "Excel no añadió la opción para desactivar la conversión automática hasta 2023. Para entonces los genes ya tenían nombre nuevo: los científicos se rindieron primero." },
      { t: "Las revistas exigieron entregar las tablas de genes en CSV", r: "Abres un CSV con Excel y te convierte las fechas igual. El problema no es el formato, sino el programa que lo abre." },
      { t: "Poner un apóstrofo delante del nombre para forzarlo como texto", r: "Funciona, pero siempre hay alguien que se olvida. Un estudio de 2016 revisó artículos con tablas de genes en Excel: cerca de uno de cada cinco tenía el error." },
    ] },
  ],
};
