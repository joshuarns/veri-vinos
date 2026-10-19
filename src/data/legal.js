const DOMICILIO =
  'Boulevard Adolfo Ruiz Cortines número 3720, Local R01-T01-PB, Colonia Jardines del Pedregal, Código Postal 01900, Alcaldía Álvaro Obregón, Ciudad de México, México.'

export const privacidad = {
  slug: 'aviso-de-privacidad',
  label: 'AVISO LEGAL',
  title: 'Aviso de Privacidad Integral',
  updated: '15 de octubre de 2026',
  sections: [
    {
      heading: 'Introducción',
      blocks: [
        { type: 'p', text: `OPERADORA NERANO, S.A. DE C.V., en adelante “Veri Selezione” o el “Responsable”, con domicilio en ${DOMICILIO.slice(0, -1)}, es responsable del tratamiento de los datos personales recabados a través del sitio web www.veriselezione.com y de los medios de contacto asociados con sus actividades comerciales.` },
        { type: 'p', text: 'Para cualquier consulta relacionada con este aviso o con el tratamiento de datos personales, puedes escribir a eneida@veriselezione.com.' },
      ],
    },
    {
      heading: '1. Datos personales que podemos recabar',
      blocks: [
        { type: 'p', text: 'Dependiendo de la forma en que interactúes con nosotros, podremos recabar los siguientes datos personales:' },
        {
          type: 'ul',
          items: [
            'Datos de identificación y contacto, como nombre, apellidos, correo electrónico y número telefónico.',
            'Datos profesionales y comerciales, como empresa, restaurante o establecimiento al que perteneces, puesto, actividad comercial y tipo de negocio.',
            'Información contenida en mensajes o solicitudes que nos envíes, incluidas consultas sobre vinos, productos, disponibilidad, proveedores, distribución y oportunidades comerciales.',
            'Preferencias de comunicación y datos relacionados con tu suscripción a nuestros boletines, cuando corresponda.',
            'Datos técnicos de navegación, como dirección IP, tipo de navegador, dispositivo y actividad en el sitio, únicamente cuando sean recabados mediante las herramientas técnicas o cookies que efectivamente utilice el sitio web.',
          ],
        },
        { type: 'p', text: 'Veri Selezione no pretende recabar datos personales sensibles a través de sus formularios ordinarios. Te pedimos no incluir información sensible en los mensajes que nos envíes.' },
      ],
    },
    {
      heading: '2. Finalidades del tratamiento',
      blocks: [
        { type: 'p', text: 'Los datos personales podrán utilizarse para las siguientes finalidades primarias:' },
        {
          type: 'ol',
          items: [
            'Atender solicitudes de información, contacto, cotización o asesoría comercial.',
            'Dar seguimiento a consultas relacionadas con vinos, catálogos, productos y oportunidades de negocio.',
            'Identificar y establecer comunicación con restaurantes, empresas, distribuidores, proveedores y otros contactos comerciales.',
            'Gestionar relaciones comerciales y dar seguimiento a solicitudes o acuerdos.',
            'Responder preguntas, comentarios y comunicaciones recibidas por correo electrónico o mediante los canales habilitados en el sitio.',
            'Mantener la seguridad, funcionamiento y administración del sitio web.',
            'Cumplir con obligaciones legales aplicables y atender requerimientos de autoridades competentes.',
          ],
        },
        { type: 'p', text: 'De manera adicional, y cuando corresponda, podremos utilizar los datos para las siguientes finalidades secundarias:' },
        {
          type: 'ol',
          items: [
            'Enviar newsletters, novedades sobre vinos, noticias de la empresa, información de productos y comunicaciones promocionales.',
            'Compartir invitaciones a eventos, presentaciones, degustaciones y actividades comerciales.',
            'Analizar estadísticas de navegación y el desempeño de nuestras comunicaciones, siempre que las herramientas correspondientes estén implementadas y su uso sea procedente.',
          ],
        },
        { type: 'p', text: 'Si no deseas que tus datos se utilicen para finalidades secundarias, puedes solicitarlo escribiendo a eneida@veriselezione.com. La negativa a estas finalidades no será motivo para negarte la atención de una solicitud comercial.' },
        { type: 'p', text: 'Cuando la legislación aplicable lo requiera, solicitaremos el consentimiento correspondiente antes de tratar tus datos para estas finalidades.' },
      ],
    },
    {
      heading: '3. Consentimiento',
      blocks: [
        { type: 'p', text: 'Al proporcionar tus datos personales y tener a tu disposición este aviso de privacidad, el tratamiento se realizará conforme a la legislación aplicable y a las finalidades aquí descritas.' },
        { type: 'p', text: 'Cuando se requiera consentimiento expreso, lo solicitaremos mediante el mecanismo correspondiente.' },
        { type: 'p', text: 'La suscripción a newsletters o comunicaciones promocionales deberá poder distinguirse de una solicitud de contacto comercial. Podrás retirar tu consentimiento para comunicaciones promocionales en cualquier momento, sin afectar la atención de solicitudes que no dependan de dichas comunicaciones.' },
      ],
    },
    {
      heading: '4. Transferencias de datos personales',
      blocks: [
        { type: 'p', text: 'Veri Selezione podrá comunicar datos personales a autoridades competentes cuando exista una obligación legal o un requerimiento válido.' },
        { type: 'p', text: 'Asimismo, podrá utilizar proveedores que presten servicios tecnológicos, alojamiento web, mantenimiento, administración de formularios, correo electrónico, gestión de contactos o análisis del sitio, en la medida necesaria para operar sus servicios.' },
        { type: 'p', text: 'Cuando un proveedor trate datos personales por cuenta de Veri Selezione, se establecerán las condiciones correspondientes para proteger la información y limitar su uso a los fines autorizados.' },
        { type: 'p', text: 'Cuando exista una transferencia de datos personales a terceros que requiera consentimiento conforme a la legislación aplicable, se solicitará dicho consentimiento, salvo que resulte aplicable una excepción legal.' },
      ],
    },
    {
      heading: '5. Derechos ARCO',
      blocks: [
        { type: 'p', text: 'Tienes derecho a ejercer los derechos de:' },
        {
          type: 'ul',
          items: [
            '**Acceso:** conocer qué datos personales tenemos y cómo los tratamos.',
            '**Rectificación:** solicitar la corrección de datos inexactos o incompletos.',
            '**Cancelación:** solicitar que tus datos sean eliminados cuando proceda legalmente.',
            '**Oposición:** oponerte al tratamiento de tus datos en los supuestos previstos por la legislación.',
          ],
        },
        { type: 'p', text: 'Para ejercer cualquiera de estos derechos, envía una solicitud a eneida@veriselezione.com con el asunto “Solicitud de derechos ARCO”. La solicitud deberá incluir:' },
        {
          type: 'ol',
          items: [
            'Tu nombre y un medio para comunicarte la respuesta.',
            'Documentos que permitan acreditar tu identidad o, en su caso, la representación legal.',
            'Una descripción clara de los datos personales involucrados.',
            'El derecho que deseas ejercer y la petición concreta.',
            'Cualquier información adicional que facilite localizar tus datos.',
          ],
        },
        { type: 'p', text: 'Veri Selezione atenderá las solicitudes dentro de los plazos previstos por la legislación aplicable. Cuando sea necesario, podrá solicitar información adicional para verificar la identidad del solicitante.' },
        { type: 'p', text: 'El ejercicio de estos derechos no impide que conservemos información cuando exista una obligación legal de conservación o alguna otra causa legítima prevista por la legislación.' },
      ],
    },
    {
      heading: '6. Limitación del uso o divulgación',
      blocks: [
        { type: 'p', text: 'Puedes solicitar que dejemos de enviarte comunicaciones promocionales escribiendo a eneida@veriselezione.com con el asunto “Baja de comunicaciones comerciales”. Si recibes un newsletter, también podrás utilizar el mecanismo de baja que se incluya en el mensaje, cuando esté disponible.' },
        { type: 'p', text: 'Asimismo, puedes configurar tu navegador para limitar determinadas tecnologías de seguimiento, teniendo en cuenta que esto podría afectar algunas funciones del sitio.' },
      ],
    },
    {
      heading: '7. Conservación y seguridad',
      blocks: [
        { type: 'p', text: 'Veri Selezione conservará los datos personales durante el tiempo necesario para cumplir las finalidades para las cuales fueron recabados y para atender obligaciones legales, contractuales o responsabilidades que pudieran derivarse de su tratamiento.' },
        { type: 'p', text: 'Implementaremos medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.' },
        { type: 'p', text: 'Ningún sistema de transmisión o almacenamiento electrónico puede garantizar seguridad absoluta.' },
      ],
    },
    {
      heading: '8. Cookies y tecnologías similares',
      blocks: [
        { type: 'p', text: 'El sitio web podrá utilizar cookies y tecnologías similares para permitir su funcionamiento, recordar preferencias, obtener estadísticas de navegación o medir el desempeño de contenidos y campañas.' },
        { type: 'p', text: 'Las cookies y herramientas concretas que se encuentren activas deberán consultarse en la Política de Cookies publicada en el sitio. Cuando resulte necesario, se solicitará el consentimiento antes de activar cookies no esenciales.' },
      ],
    },
    {
      heading: '9. Cambios al aviso de privacidad',
      blocks: [
        { type: 'p', text: 'Veri Selezione podrá actualizar este aviso para reflejar cambios en sus actividades, procesos, herramientas tecnológicas o disposiciones legales.' },
        { type: 'p', text: 'Las modificaciones se publicarán en www.veriselezione.com, dentro de la sección correspondiente al Aviso de Privacidad. La fecha de actualización se indicará al inicio del documento.' },
      ],
    },
    {
      heading: '10. Contacto',
      blocks: [
        {
          type: 'contact',
          lines: [
            ['Responsable', 'OPERADORA NERANO, S.A. DE C.V.'],
            ['Marca y sitio', 'Veri Selezione'],
            ['Correo electrónico', 'eneida@veriselezione.com'],
            ['Domicilio', DOMICILIO],
          ],
        },
      ],
    },
  ],
}

export const terminos = {
  slug: 'terminos-y-condiciones',
  label: 'AVISO LEGAL',
  title: 'Términos y Condiciones de Uso',
  updated: '15 de octubre de 2026',
  sections: [
    {
      heading: 'Introducción',
      blocks: [
        { type: 'p', text: 'Bienvenido a www.veriselezione.com, sitio web dedicado a presentar información y contenidos relacionados con vinos, productos, marcas y oportunidades comerciales para restaurantes, distribuidores, proveedores y otros participantes del sector.' },
        { type: 'p', text: 'El sitio es operado por OPERADORA NERANO, S.A. DE C.V., en adelante “Veri Selezione”.' },
        { type: 'p', text: 'Al acceder y navegar por este sitio, aceptas estos términos en lo que resulte legalmente aplicable. Si no estás de acuerdo con ellos, te pedimos abstenerte de utilizar el sitio.' },
      ],
    },
    {
      heading: '1. Objeto del sitio',
      blocks: [
        { type: 'p', text: 'El sitio tiene como finalidad presentar un catálogo informativo de vinos y contenidos relacionados, así como facilitar el contacto entre personas y empresas interesadas en productos y oportunidades comerciales.' },
        { type: 'p', text: 'Salvo que se habilite expresamente una funcionalidad de compra en línea, la publicación de un producto en el catálogo no constituye por sí misma una oferta vinculante de venta ni garantiza su disponibilidad.' },
        { type: 'p', text: 'Las solicitudes de información o cotización deberán confirmarse directamente con Veri Selezione o con el proveedor correspondiente, según el caso.' },
      ],
    },
    {
      heading: '2. Información de productos',
      blocks: [
        { type: 'p', text: 'Veri Selezione procura que la información presentada sea clara y esté actualizada. Sin embargo, las descripciones, fotografías, añadas, etiquetas, presentaciones, precios, disponibilidad y demás características pueden cambiar.' },
        { type: 'p', text: 'Las imágenes se muestran con fines ilustrativos y podrían existir diferencias respecto del producto finalmente ofrecido.' },
        { type: 'p', text: 'La disponibilidad, las condiciones comerciales, los precios, los impuestos, las cantidades mínimas, las condiciones de entrega y cualquier otra condición de venta deberán confirmarse antes de concretar una operación.' },
        { type: 'p', text: 'La inclusión de una marca o producto en el catálogo no implica necesariamente que Veri Selezione sea su fabricante, propietario de marca, importador exclusivo o distribuidor exclusivo.' },
      ],
    },
    {
      heading: '3. Solicitudes y relaciones comerciales',
      blocks: [
        { type: 'p', text: 'El envío de un formulario, correo electrónico o mensaje no garantiza la aceptación de una solicitud, la celebración de un contrato ni la existencia de una relación comercial.' },
        { type: 'p', text: 'Toda operación estará sujeta a la confirmación de las partes y a las condiciones comerciales que correspondan.' },
        { type: 'p', text: 'Si en el futuro se habilitan compras, pagos, pedidos o entregas directamente a través del sitio, podrán establecerse términos adicionales específicos para esas operaciones.' },
      ],
    },
    {
      heading: '4. Uso permitido',
      blocks: [
        { type: 'p', text: 'El usuario se compromete a utilizar el sitio de forma lícita y respetuosa.' },
        { type: 'p', text: 'Queda prohibido:' },
        {
          type: 'ul',
          items: [
            'Utilizar el sitio para actividades fraudulentas o ilícitas.',
            'Introducir código malicioso, intentar vulnerar la seguridad o interferir con el funcionamiento del sitio.',
            'Obtener información mediante extracción automatizada de datos cuando ello no esté autorizado.',
            'Reproducir o explotar comercialmente contenidos del sitio sin autorización, salvo en los casos permitidos por la ley.',
            'Enviar información falsa, suplantar identidades o utilizar los formularios para comunicaciones abusivas.',
          ],
        },
        { type: 'p', text: 'Veri Selezione podrá adoptar medidas razonables para proteger el sitio y limitar usos indebidos.' },
      ],
    },
    {
      heading: '5. Propiedad intelectual e industrial',
      blocks: [
        { type: 'p', text: 'Salvo que se indique lo contrario, los textos, elementos gráficos, fotografías, diseño, organización del catálogo y demás contenidos del sitio pertenecen a Veri Selezione o se utilizan con autorización o bajo la licencia correspondiente.' },
        { type: 'p', text: 'Las marcas, nombres comerciales, logotipos y etiquetas de vinos pertenecen a sus respectivos titulares.' },
        { type: 'p', text: 'El acceso al sitio no concede al usuario una licencia general para reproducir, distribuir, modificar, publicar o explotar comercialmente sus contenidos o marcas.' },
        { type: 'p', text: 'Si consideras que algún contenido vulnera derechos de propiedad intelectual, puedes comunicarlo a eneida@veriselezione.com, proporcionando información suficiente para identificar el contenido y el derecho afectado.' },
      ],
    },
    {
      heading: '6. Enlaces y servicios de terceros',
      blocks: [
        { type: 'p', text: 'El sitio podría incluir enlaces a páginas, plataformas o servicios de terceros.' },
        { type: 'p', text: 'Veri Selezione no controla necesariamente esos sitios y no garantiza la disponibilidad, exactitud, seguridad ni contenido de sus páginas. El acceso a ellas se realiza bajo responsabilidad del usuario y sujeto a los términos y políticas de cada tercero.' },
      ],
    },
    {
      heading: '7. Disponibilidad y limitación de responsabilidad',
      blocks: [
        { type: 'p', text: 'Veri Selezione procurará mantener el sitio disponible y en funcionamiento, pero no garantiza un acceso continuo, ininterrumpido o libre de errores.' },
        { type: 'p', text: 'En la medida permitida por la legislación aplicable, Veri Selezione no será responsable por interrupciones derivadas de mantenimiento, fallas técnicas, servicios de terceros, problemas de conectividad o acontecimientos fuera de su control razonable.' },
        { type: 'p', text: 'Nada de lo establecido en estos términos excluye responsabilidades que legalmente no puedan excluirse ni limita los derechos irrenunciables que correspondan a los usuarios.' },
      ],
    },
    {
      heading: '8. Protección de datos personales',
      blocks: [
        { type: 'p', text: 'El tratamiento de datos personales se rige por el Aviso de Privacidad de Veri Selezione, disponible en www.veriselezione.com.' },
        { type: 'p', text: 'Al proporcionar datos personales mediante el sitio, el usuario deberá consultar dicho aviso para conocer las finalidades, los mecanismos de contacto y sus derechos.' },
      ],
    },
    {
      heading: '9. Cookies',
      blocks: [
        { type: 'p', text: 'El sitio podrá utilizar cookies y tecnologías similares conforme a su Política de Cookies, disponible en www.veriselezione.com.' },
        { type: 'p', text: 'El usuario podrá consultar dicha política para conocer los tipos de cookies utilizados y las opciones disponibles para gestionar sus preferencias.' },
      ],
    },
    {
      heading: '10. Usuarios y productos alcohólicos',
      blocks: [
        { type: 'p', text: 'El catálogo presenta productos que contienen alcohol. El usuario se compromete a cumplir las leyes aplicables en materia de edad mínima, comercialización, distribución, consumo y publicidad de bebidas alcohólicas.' },
        { type: 'p', text: 'El contenido del sitio no promueve el consumo irresponsable de alcohol ni sustituye las restricciones legales que resulten aplicables a cada operación.' },
      ],
    },
    {
      heading: '11. Modificaciones',
      blocks: [
        { type: 'p', text: 'Veri Selezione podrá actualizar estos términos para reflejar cambios en el sitio, sus funcionalidades o las disposiciones legales aplicables.' },
        { type: 'p', text: 'La versión vigente será la publicada en esta página, junto con su fecha de actualización.' },
      ],
    },
    {
      heading: '12. Legislación y jurisdicción',
      blocks: [
        { type: 'p', text: 'Estos términos se interpretarán conforme a las leyes aplicables de los Estados Unidos Mexicanos.' },
        { type: 'p', text: 'Cualquier controversia será sometida a las autoridades y tribunales competentes conforme a las reglas legales aplicables, sin perjuicio de las disposiciones imperativas que correspondan.' },
      ],
    },
    {
      heading: '13. Contacto',
      blocks: [
        {
          type: 'contact',
          lines: [
            ['Razón social', 'OPERADORA NERANO, S.A. DE C.V.'],
            ['Sitio', 'www.veriselezione.com'],
            ['Correo electrónico', 'eneida@veriselezione.com'],
            ['Domicilio', DOMICILIO],
          ],
        },
      ],
    },
  ],
}

export const cookies = {
  slug: 'politica-de-cookies',
  label: 'AVISO LEGAL',
  title: 'Política de Cookies',
  updated: '15 de octubre de 2026',
  sections: [
    {
      heading: 'Introducción',
      blocks: [
        { type: 'p', text: 'Esta Política de Cookies explica qué son las cookies, para qué pueden utilizarse en www.veriselezione.com y qué opciones tienen los usuarios para administrarlas.' },
        { type: 'p', text: 'El sitio es operado por OPERADORA NERANO, S.A. DE C.V., bajo la marca Veri Selezione.' },
        { type: 'p', text: '**Importante:** las cookies y tecnologías descritas en esta política representan categorías posibles. La configuración definitiva deberá corresponder a las cookies y herramientas realmente instaladas en el sitio.' },
      ],
    },
    {
      heading: '1. ¿Qué son las cookies?',
      blocks: [
        { type: 'p', text: 'Las cookies son pequeños archivos de texto que un sitio web puede almacenar en el navegador o dispositivo del usuario. Permiten, entre otras cosas, recordar ciertas preferencias, mantener funciones técnicas, medir el uso del sitio o facilitar la integración con servicios externos.' },
        { type: 'p', text: 'También pueden utilizarse tecnologías similares, como píxeles, etiquetas o almacenamiento local.' },
      ],
    },
    {
      heading: '2. ¿Para qué pueden utilizarse?',
      blocks: [
        { type: 'p', text: 'Según las herramientas que estén efectivamente habilitadas, las cookies podrán pertenecer a las siguientes categorías:' },
        {
          type: 'defs',
          items: [
            ['Cookies estrictamente necesarias', 'Son las que permiten que el sitio funcione correctamente, mantener la seguridad, gestionar sesiones o habilitar funciones esenciales. No deben desactivarse si son indispensables para el funcionamiento solicitado.'],
            ['Cookies de preferencias o funcionalidad', 'Pueden recordar determinadas opciones del usuario y facilitar su navegación.'],
            ['Cookies de análisis y medición', 'Si se implementan herramientas de analítica, pueden ayudar a conocer el número de visitas, las páginas consultadas, el origen del tráfico y el rendimiento general del sitio.'],
            ['Cookies de publicidad o medición de campañas', 'Si se instalan herramientas publicitarias, pueden utilizarse para medir campañas, limitar la repetición de anuncios o comprender interacciones con contenidos promocionales.'],
            ['Cookies de servicios de terceros', 'Algunos contenidos o funcionalidades incorporados al sitio pueden depender de proveedores externos y utilizar sus propias tecnologías.'],
          ],
        },
        { type: 'p', text: 'No todas estas categorías necesariamente se encuentran activas en Veri Selezione. Su utilización deberá confirmarse mediante una revisión técnica del sitio.' },
      ],
    },
    {
      heading: '3. Cookies de terceros',
      blocks: [
        { type: 'p', text: 'Dependiendo de las integraciones activas, podrían intervenir proveedores de alojamiento, analítica, publicidad, formularios, correo electrónico u otros servicios.' },
        { type: 'p', text: 'Cada proveedor puede tener sus propias prácticas de privacidad y políticas de cookies.' },
        { type: 'p', text: 'La identidad de los proveedores, los nombres de las cookies, su duración y su finalidad deberán documentarse una vez identificadas las herramientas instaladas en el sitio.' },
      ],
    },
    {
      heading: '4. Consentimiento y preferencias',
      blocks: [
        { type: 'p', text: 'Cuando la legislación aplicable lo requiera, las cookies no esenciales deberán permanecer desactivadas hasta que el usuario otorgue su consentimiento.' },
        { type: 'p', text: 'El usuario deberá poder aceptar o rechazar las cookies no esenciales y modificar sus preferencias posteriormente mediante el mecanismo habilitado en el sitio.' },
        { type: 'p', text: 'La navegación no deberá interpretarse por sí sola como consentimiento válido cuando la legislación exija una acción afirmativa.' },
      ],
    },
    {
      heading: '5. Cómo administrar las cookies desde el navegador',
      blocks: [
        { type: 'p', text: 'El usuario puede consultar las opciones de privacidad de su navegador para bloquear o eliminar cookies. Las instrucciones dependen del navegador utilizado.' },
        { type: 'p', text: 'La desactivación de algunas cookies podría afectar ciertas funciones o la experiencia de navegación.' },
        { type: 'p', text: 'Eliminar las cookies existentes no necesariamente impide que se creen nuevas; para ello puede ser necesario modificar las preferencias de privacidad o el mecanismo de consentimiento.' },
      ],
    },
    {
      heading: '6. Datos personales',
      blocks: [
        { type: 'p', text: 'Algunas cookies o tecnologías similares pueden recopilar información que permita identificar directa o indirectamente a una persona.' },
        { type: 'p', text: 'Cuando la información recopilada constituya dato personal, su tratamiento se regirá también por el Aviso de Privacidad de Veri Selezione.' },
      ],
    },
    {
      heading: '7. Actualizaciones de esta política',
      blocks: [
        { type: 'p', text: 'Esta política podrá modificarse cuando cambien las herramientas, integraciones, cookies o requisitos legales aplicables.' },
        { type: 'p', text: 'Las actualizaciones se publicarán en www.veriselezione.com, indicando la fecha de la última revisión.' },
      ],
    },
    {
      heading: '8. Contacto',
      blocks: [
        {
          type: 'contact',
          lines: [
            ['Razón social', 'OPERADORA NERANO, S.A. DE C.V.'],
            ['Correo electrónico', 'eneida@veriselezione.com'],
            ['Domicilio', DOMICILIO],
          ],
        },
      ],
    },
  ],
}
