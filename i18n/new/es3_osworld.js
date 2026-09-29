/* Tercera ronda · uso de computadora (pool osworld): 12 nuevas. Estilos en i18n/new/add3_ui.css (prefijo x3-) · es */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>Reunión semanal · 42:17</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">J</span><em>Jefe</em></div>
      <div class="x3-tile"><span class="x3-av">A</span><em>Compañero A</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">B</span><em>Compañera B</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">Yo</span><em>Tú</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>Silenciar</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>Iniciar video</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>Chat</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">Salir</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat">
      <div class="x3-ct">Proyecto (58)</div>
      <div class="x3-msg"><span class="x3-ava">Jefe</span><p>Manden la propuesta al grupo antes de las 8 p. m.</p></div>
      <div class="x3-msg me"><p>Otra vez vendiendo humo, y ni su propia propuesta sabe escribir</p><span class="x3-ava me">Yo</span></div>
      <div class="x3-menu">
        <button class="hs x3-mi" data-opt="0" style="font-size:10.5px;padding:4px 2px"><span class="x3-mic2 del"></span>Eliminar<br>para mí</button>
        <button class="hs x3-mi" data-opt="1" style="font-size:10.5px;padding:4px 2px"><span class="x3-mic2 fwd"></span>Reenviar</button>
        <button class="hs x3-mi" data-opt="2" style="font-size:10.5px;padding:4px 2px"><span class="x3-mic2 quo"></span>Responder</button>
        <button class="hs x3-mi" data-opt="3" style="font-size:10.5px;padding:4px 2px"><span class="x3-mic2 rec"></span>Eliminar<br>para todos</button>
      </div>
      <div class="x3-time">Ahora</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Imprimir · Informe anual.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>Destino</span><button class="hs x3-sel" data-opt="3">Oficina-P3 Láser<i>▾</i></button></div>
      <div class="x3-pr-row"><span>Copias</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>Páginas</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>Todas (300 páginas)</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Personalizado<span class="x3-inp ph">p. ej. 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>Papel estimado: 300 hojas</span><button class="hs x3-pr-go" data-opt="2">Imprimir</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">Elige qué quieres compartir</div>
      <div class="x3-ss-cap">Pantalla</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>Reclutador: el sueldo es negociable, ¿entrevista mañana?</em><u>renuncia.docx</u></span>
        <b>Pantalla completa</b></button>
      <div class="x3-ss-cap">Ventana</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Propuesta Q3</em></span><b>Propuesta.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs"><i class="l"></i><i class="r"></i><i class="l s"></i></span><b>WhatsApp (3)</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>Compartir también el audio del sistema</span><button class="hs x3-ss-go" data-opt="3">Compartir</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Instalar FulanoPlayer</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>FulanoPlayer 2026</b><small>HD · Fluido · Gratis para siempre</small></div>
      <button class="hs x3-in-go" data-opt="0">Instalación rápida</button>
      <div class="x3-in-bundle">La instalación rápida también instalará: Navegador Fulano (como predeterminado), Fulano Antivirus y Teclado Fulano, y pondrá Portal Fulano como página de inicio</div>
      <div class="x3-in-path">Instalar en: C:\\Program Files\\FulanoPlayer<button class="hs x3-in-lnk" data-opt="3">Cambiar</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span>He leído y acepto el <button class="hs x3-in-lnk" data-opt="2">«Contrato de licencia»</button></span><button class="hs x3-in-lnk" data-opt="1">Instalación personalizada ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">Bandeja de entrada</span><span class="tab on">Plantillas de CV gratis<button class="hs tab-x" data-opt="2" aria-label="Cerrar pestaña">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>No soy un robot</b><small>Verificación humana</small></div>
        <div class="x3-cf-t">Un paso más: completa esta verificación</div>
        <ol class="x3-cf-steps"><li>Presiona <kbd>Win</kbd> + <kbd>R</kbd></li><li>Presiona <kbd>Ctrl</kbd> + <kbd>V</kbd></li><li>Presiona <kbd>Enter</kbd></li></ol>
        <div class="x3-cf-id">ID de verificación: #71362</div>
        <button class="hs x3-cf-go" data-opt="0">Ya completé los pasos</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">Probar otro método</button><button class="hs x3-cf-lnk" data-opt="3">¿No entiendes? Mira el video</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Calificaciones.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>Nombre</td><td class="sel">Nota</td></tr>
        <tr><th>2</th><td>Juan</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>Ana</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>Luis</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">Advertencia antes de ordenar</div>
        <div class="x3-xl-p">Microsoft Excel encontró datos junto a su selección. Como no ha seleccionado estos datos, no se ordenarán.</div>
        <div class="x3-xl-p b">¿Qué desea hacer?</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Ampliar la selección</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>Continuar con la selección actual</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">Cancelar</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">Compartir «Sueldos_2026.xlsx»</div>
      <div class="x3-sh-in">Agregar personas, grupos o correos</div>
      <div class="x3-sh-cap">Personas con acceso</div>
      <div class="x3-sh-p"><span class="x3-sh-av">Yo</span><span>Tú<small>Propietario</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">F</span><span>Finanzas<small>finance@ourco.com</small></span><em>Lector</em></div>
      <div class="x3-sh-cap">Acceso general</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">Cualquier persona con el vínculo ▾</button><small>Cualquier persona en internet que tenga el vínculo puede editar</small></div>
        <button class="hs x3-sh-dd" data-opt="2">Editor ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">Copiar vínculo</button><button class="hs x3-sh-done" data-opt="0">Listo</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>Seguridad de la cuenta · ahora</div>
      <div class="x3-mfa-t">¿Estás intentando iniciar sesión?</div>
      <div class="x3-mfa-info">PC con Windows · Ubicación desconocida · Hace un momento</div>
      <div class="x3-mfa-hint">Toca el número que aparece en la pantalla de la PC</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">No, no soy yo</button>
    </div>
    <div class="x3-mfa-cnt">5.ª solicitud esta noche</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Bandeja de entrada</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">[URGENTE] Pago antes de terminar el día</div>
      <button class="hs x3-ml-hd" data-opt="0"><span>De</span><b>Director Ruiz</b>&lt;ruiz@ourco.com&gt;</button>
      <div class="x3-ml-hd"><span>Para</span>yo</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span>Resp. a</span>ruiz.ourco@gmail.com</button>
      <div class="x3-ml-body">Hola: <button class="hs x3-ml-s" data-opt="3">estoy en una reunión y no puedo contestar llamadas.</button> El proveedor cambió de cuenta bancaria; te adjunto la orden de pago. Hay que pagarla hoy sin falta. Cuando esté listo, respóndeme directamente.<small>Enviado desde mi iPhone</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>Orden_pago_cuenta_nueva.pdf<small>86 KB</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>Factura_0927.doc [Vista protegida] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="Cerrar">×</button></div>
    <div class="x3-pv"><b>VISTA PROTEGIDA</b>Tenga cuidado: los archivos de Internet pueden contener virus. A menos que necesite editarlo, es más seguro seguir en Vista protegida.<button class="hs x3-pv-btn" data-opt="0">Habilitar edición</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>Este documento se creó con una versión más reciente de Office. Para ver el contenido, haga clic arriba en «Habilitar edición» y luego en «Habilitar contenido».<span>Ver factura</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Tienda de extensiones · captura</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">AI</span><span class="x3-ex-m"><b>Asistente IA de Capturas<em>Patrocinado</em></b><small>★ 4.9 · 500 mil usuarios · Pregúntale gratis a la IA</small><u>Requiere: leer y cambiar todos tus datos en todos los sitios web; leer y modificar lo que copias y pegas</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>Captura Master Pro<em class="f">Destacada</em></b><small>★ 4.9 · 3 millones de usuarios</small><u>Requiere: leer y cambiar todos tus datos en todos los sitios web; leer tu historial de navegación</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">T</span><span class="x3-ex-m"><b>Captura Turbo</b><small>★ 4.8 · 1.2 millones de usuarios</small><u>Requiere: leer y cambiar todos tus datos en todos los sitios web; administrar tus descargas; comunicarse con aplicaciones nativas cooperativas</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">S</span><span class="x3-ex-m"><b>Captura Simple</b><small>★ 4.4 · 60 mil usuarios</small><u>Requiere: ningún permiso especial (solo accede a la página actual cuando haces clic)</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "En plena reunión quieres girarte y quejarte del jefe con quien vive contigo. Primero asegúrate de que el jefe no te oiga. ¿Qué pulsas?", ui: "x3meet", issue: "Cree que si el botón dice «Silenciar», ya está silenciado",
      opts: [
        { t: "Silenciar", ok: 1, r: "Correcto. El botón dice lo que pasará si lo pulsas. Si todavía dice «Silenciar», tu micrófono estuvo abierto todo el tiempo y todos oyeron ese suspiro." },
        { t: "Iniciar video", r: "El jefe no te oyó, pero te vio. Tus ojos en blanco, en HD y en vivo." },
        { t: "Chat", r: "Escribiste la queja en el chat de la reunión. Enviar a: Todos." },
        { t: "Salir", r: "El jefe dejó de oírte, sí. Tres segundos después te escribe: «¿Se te cayó la conexión?»" },
      ] },
    { lv: 2, q: "Mandaste una queja sobre el jefe al grupo de WhatsApp de 58 personas donde está el jefe. Mantienes presionado el mensaje. ¿Qué pulsas?", ui: "x3recall", issue: "Cree que «Eliminar para mí» hace que el jefe no lo vea",
      opts: [
        { t: "Eliminar para mí", r: "Solo lo borraste de tu teléfono. El jefe lo sigue viendo perfectamente. Ojos que no ven, corazón que no siente." },
        { t: "Reenviar", r: "Reenviarlo a donde sea no lo saca del grupo. Eso sí, suma un testigo más." },
        { t: "Responder", r: "Respondiste a tu propia queja. Ahora el jefe la ve dos veces." },
        { t: "Eliminar para todos", ok: 1, r: "Correcto, y rápido: cada segundo alguien más lo lee. Eso sí, en el grupo queda «Se eliminó este mensaje» y 58 personas se mueren por saber qué decía." },
      ] },
    { lv: 2, q: "Tienes un PDF de 300 páginas y solo quieres imprimir la página 3. ¿Dónde haces clic?", ui: "x3print", issue: "Confundió «Copias» con «número de página»",
      opts: [
        { t: "Páginas: Personalizado", ok: 1, r: "Correcto. Escribes un 3 y sale una sola hoja. La impresora y administración respiran aliviadas." },
        { t: "Copias: cambiar a 3", r: "Imprimiste 3 copias de 300 páginas cada una. La impresora escupe papel desde la mañana hasta la hora de salida, y administración te viene a buscar." },
        { t: "Darle directo a Imprimir", r: "Las 300 páginas, sin faltar una. Tu página 3 va ahí en medio; búscala." },
        { t: "Cambiar de impresora", r: "Otra impresora, las mismas 300 páginas: solo cambia el lugar donde escupe papel." },
      ] },
    { lv: 2, q: "Vas a presentarle la propuesta a un cliente y solo quieres que vea el PowerPoint. ¿Cuál eliges?", ui: "x3share", issue: "Compartió toda la pantalla y salió el mensaje del reclutador",
      opts: [
        { t: "Pantalla completa", r: "El cliente vio tu escritorio, un archivo llamado «renuncia.docx» y al reclutador diciendo que «el sueldo es negociable»." },
        { t: "Ventana de Propuesta.pptx", ok: 1, r: "Correcto. El cliente solo ve el PowerPoint: ni «renuncia.docx» ni al reclutador preguntando «¿entrevista mañana?»." },
        { t: "Ventana de WhatsApp", r: "El cliente siguió en vivo tu chat con tu mamá: «Ya empezó el frío, ¿te pusiste suéter?»" },
        { t: "Darle directo a Compartir", r: "Lo seleccionado por defecto es «Pantalla completa». Transmitiste tu escritorio con un clic, justo cuando entraba el mensaje del reclutador." },
      ] },
    { lv: 2, q: "Solo quieres instalar un reproductor y nada más. ¿Dónde haces clic?", ui: "x3install", issue: "Pulsó «Instalación rápida» y se llevó el combo completo",
      opts: [
        { t: "Instalación rápida", r: "Listo: reproductor, navegador, antivirus y teclado, y tu página de inicio ahora es Portal Fulano. La familia completa, sin que falte nadie." },
        { t: "Instalación personalizada", ok: 1, r: "Correcto. Lo «rápido» es para las cifras de instalaciones del fabricante. En personalizada, desmarca toda esa fila de casillas que ya venían marcadas." },
        { t: "«Contrato de licencia»", r: "Te leíste las 18 000 palabras y descubriste que ya lo decía clarito: te va a instalar el combo completo." },
        { t: "Cambiar la ruta de instalación", r: "Instalaste el combo completo en el disco D. Se mudaron de casa, pero siguen siendo familia." },
      ] },
    { lv: 3, q: "Antes de descargar la plantilla te piden demostrar que eres humano. Marcas «No soy un robot» y aparece esto. ¿Dónde haces clic?", ui: "x3clickfix", issue: "La verificación pidió Win+R y lo hizo",
      opts: [
        { t: "Ya completé los pasos", r: "Win+R abre «Ejecutar»; Ctrl+V pega un comando que la página metió a escondidas en tu portapapeles, y Enter lo ejecuta. Te hackeaste tú solo en tres pasos. Muy eficiente." },
        { t: "Probar otro método", r: "La «otra verificación» de la página falsa es: pulsa Win+X, abre la terminal y pega. Todos los caminos llevan a Roma." },
        { t: "Cerrar esta pestaña", ok: 1, r: "Correcto. Un CAPTCHA de verdad te pide, como mucho, encontrar semáforos; nunca que pulses Win+R. Se llama ClickFix y desde 2024 está por todas partes." },
        { t: "¿No entiendes? Mira el video", r: "El tutorial es clarísimo: cómo abrirle tú mismo la puerta al troyano." },
      ] },
    { lv: 3, q: "Seleccionaste solo la columna «Nota», pulsaste ordenar de mayor a menor y apareció esto. Para que los nombres acompañen a su nota, ¿qué eliges?", ui: "x3sort", issue: "Ordenó una sola columna y Juan se quedó con el 92",
      opts: [
        { t: "Ampliar la selección", ok: 1, r: "Correcto. La fila entera se mueve junta: el 92 de Ana sigue con Ana." },
        { t: "Continuar con la selección actual", r: "Notas ordenadas, nombres inmóviles: Juan se quedó gratis con el 92 de Ana. En una tabla de mil filas, ya nadie sabrá quién sacó cuánto." },
        { t: "Cancelar", r: "La tabla se salvó, pero tampoco se ordenó. Cerraste el aviso; el problema sigue ahí." },
      ] },
    { lv: 3, q: "La hoja de sueldos solo la debe ver Finanzas. Finanzas ya está en la lista. ¿Dónde haces clic ahora?", ui: "x3link", issue: "Dejó los sueldos en «cualquiera con el vínculo puede editar»",
      opts: [
        { t: "Listo", r: "Finanzas lo recibió. Y de paso, cualquiera con el vínculo también puede editarlo. Mañana toda la empresa sabe quién gana más." },
        { t: "Cualquier persona con el vínculo", ok: 1, r: "Correcto. Cámbialo a «Restringido» y el resto del mundo sale de la hoja: solo quedan tú y Finanzas." },
        { t: "Editor", r: "Cambiarlo a Lector hace que el mundo pase de «puede editar» a «solo puede ver». Felicidades: los sueldos ahora son información pública de solo lectura." },
        { t: "Copiar vínculo", r: "Pegaste por ahí un vínculo que cualquiera en internet puede editar. Alguien aprovechó para ponerse 100 000 en su celda." },
      ] },
    { lv: 2, q: "Son las 3 de la mañana, estás dormido y el teléfono te despierta con esto. Es la quinta vez esta noche. ¿Qué pulsas?", ui: "x3mfa", issue: "A las 3 a. m. le adivinó el número al hacker",
      opts: [
        { t: "27", r: "Fallaste, por poco. Tranquilo: vendrá una 6.ª y una 7.ª, hasta que aciertes." },
        { t: "45", r: "¡Felicidades, acertaste! Uno de tres, y lo dejaste entrar con tus propias manos. En 2022 hackearon Uber justo así: bombardearon a un empleado con notificaciones hasta que aceptó." },
        { t: "81", r: "Tocaste uno al azar, y del otro lado justo esperaban ese toque. El sueño es el mejor aliado del hacker." },
        { t: "No, no soy yo", ok: 1, r: "Correcto. Si estabas dormido, no existe «el número correcto». Rechaza, y luego levántate entre lágrimas a cambiar la contraseña." },
      ] },
    { lv: 4, q: "Tu «jefe» te escribe para que hoy le pagues a un proveedor nuevo. Quieres responderle para confirmar. Antes de enviar, señala la falla más grave.", ui: "x3replyto", issue: "No vio que «Responder a» es el Gmail del estafador",
      opts: [
        { t: "De: Director Ruiz", r: "La dirección sí es de la empresa; esa línea está impecable. El estafador sabe que miras ahí, así que el truco está en otra parte." },
        { t: "Responder a: una dirección de Gmail", ok: 1, r: "Correcto. El remitente dice ser tu jefe, pero las respuestas van a un Gmail. Si le das a Responder, tu confirmación le llega al estafador, que contestará al instante: «Sí, págalo»." },
        { t: "Adjunto: la orden de pago", r: "Por el nombre del archivo no se puede saber nada. Y si lo abres para «verificar», lo verificado podría ser tu computadora." },
        { t: "«No puedo contestar llamadas»", r: "Sospechoso, sí, pero un jefe en reunión que no contesta es muy normal. La prueba está en el encabezado: tu respuesta nunca le llegaría a tu jefe." },
      ] },
    { lv: 3, q: "El adjunto «Factura_0927.doc» se abre así. No recuerdas haber comprado nada. ¿Dónde haces clic?", ui: "x3macro", issue: "El documento pidió «Habilitar edición» y obedeció",
      opts: [
        { t: "Habilitar edición", r: "Primer paso listo. Luego te pedirá «Habilitar contenido» y la macro se pondrá a trabajar por ti: por ejemplo, cifrarte el disco y pedirte un rescate." },
        { t: "«Ver factura» dentro del documento", r: "Es una imagen dentro del documento; no hace nada. Te está enseñando a pulsar el botón de verdad, y casi aprendes." },
        { t: "La × de arriba a la derecha", ok: 1, r: "Correcto. Una factura seria no te pide quitar la protección para verla. Ciérralo y llama a quien la mandó para preguntar qué diablos te envió." },
      ] },
    { lv: 3, q: "Solo quieres una extensión para hacer capturas de pantalla. La tienda te muestra estas. ¿Cuál instalas?", ui: "x3ext", issue: "Para una captura, entregó los datos de todas sus páginas",
      opts: [
        { t: "Captura Master Pro", r: "3 millones de usuarios, y ve la página del banco en línea de cada uno. Las capturas son el negocio secundario; leer tu historial es el principal." },
        { t: "Captura Turbo", r: "Quiere administrar tus descargas y hablar con otros programas de tu equipo. Para ser una herramienta de capturas, tiene planes muy ambiciosos." },
        { t: "Captura Simple", ok: 1, r: "Correcto. Menos estrellas, menos usuarios, pero solo mira la página actual cuando la pulsas. Una herramienta de capturas debe hacer capturas, y ya." },
        { t: "Asistente IA de Capturas (patrocinado)", r: "Quiere leer todos tus sitios y tu portapapeles. Cada contraseña que copiaste, te la «guarda de forma inteligente»." },
      ] },
  ],
};
