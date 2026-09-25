import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import historiaImg from '../assets/img/historias-con-alma.jpg'
import rollyImg    from '../assets/img/team-01.jpg'
import davideImg   from '../assets/img/Davide-Merlini.jpeg'
import eneidaImg   from '../assets/img/eneida-fuentes.jpeg'

const pilares = [
  {
    title: 'Origen',
    desc:  'El vino comienza en un lugar. Suelo, clima, variedad, paisaje y cultura son el punto de partida de cada selección.',
  },
  {
    title: 'Identidad',
    desc:  'No buscamos vinos correctos ni homogéneos. Buscamos vinos capaces de expresar quién los hizo y de dónde vienen.',
  },
  {
    title: 'Legado',
    desc:  'Italia se entiende a través de familias, generaciones y saberes transmitidos. Elegimos productores que reciben ese legado y lo interpretan desde su propia visión.',
  },
]

const condiciones = [
  { title: 'Procedencia clara',  desc: 'Sabemos de dónde viene cada vino y quién está detrás.' },
  { title: 'Personalidad',       desc: 'Vinos con carácter propio, lejos de lo correcto y lo homogéneo.' },
  { title: 'Una historia que contar', desc: 'Productores cuya historia merece ser conocida en México.' },
]

const equipo = [
  {
    nombre: 'Rolly Pavia',
    cargo:  'Fundador & Curador',
    img:    rollyImg,
    bio:    'Con una herencia que une a México e Italia y más de 25 años como restaurantero, Rolly Pavia ha formado su mirada sobre el vino italiano en la mesa y en el trato directo con los productores. Veri nace de esa trayectoria: primero como una búsqueda personal y hoy como una selección pensada para compartirse. Su criterio privilegia a los productores que trabajan la viña con filosofía propia y guían su oficio desde la convicción, con un compromiso absoluto con la tierra y con lo que llega a la copa.',
    credenciales: [],
  },
  {
    nombre: 'Davide Merlini',
    cargo:  'Beverage Manager · Head Sommelier',
    img:    davideImg,
    bio:    'Con más de veinte años en la alta restauración y la hostelería de lujo, Davide Merlini entiende el vino como un encuentro: con quienes trabajan la tierra, con sus historias y con las personas que lo comparten en la mesa. Viaja, visita bodegas y camina entre las vides para construir relaciones basadas en la confianza y el respeto. Su camino se cruzó con el de Rolly en 2010. Desde entonces, la curiosidad y la pasión por el vino italiano se transformaron en una visión compartida: dar a conocer productores de identidad sólida, alejados de las modas y de las lógicas puramente comerciales.',
    credenciales: ['Beverage Manager', 'Head Sommelier', 'Formador y juez internacional'],
  },
  {
    nombre: 'Eneida Fuentes',
    cargo:  'Sommelier',
    img:    eneidaImg,
    bio:    'Sommelier con más de 15 años de experiencia internacional en hospitalidad, Eneida Fuentes crea paisajes enológicos que expresan, resaltan y acompañan el alma de cada restaurante. Su acercamiento al vino parte del respeto por la tierra y de la promoción de su conservación, conectando distintos terroirs con una experiencia consciente y significativa. Su mirada es sensible y también estratégica: se apoya en una sólida base operativa, siempre vinculada a la sala y a la experiencia del comensal.',
    credenciales: [
      'Ex directora de bebidas de Pujol',
      'Jueza internacional, Concours Mondial de Bruxelles 2024',
      'Máster en Sommelier y Enomarketing, Basque Culinary Center',
      'WSET Nivel 3 · Certified Sommelier, Court of Master Sommeliers',
    ],
  },
]

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* ── SECCIÓN 1: NUESTRA HISTORIA ────────────────────────────────── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-24">

          {/* Eyebrow + Título */}
          <div className="max-w-3xl mb-20">
            <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-6">
              NUESTRA HISTORIA
            </p>
            <h1
              className="font-display-script text-primary leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Veri no representa Italia. La interpreta.
            </h1>
            <p className="font-body-md text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              Familias, visiones y manos que han convertido el territorio en vinos con identidad propia.
            </p>
          </div>

          {/* Qué es Veri + imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center mb-28">
            <div>
              <h2 className="font-label-caps text-primary tracking-[0.25em] text-[11px] mb-5">QUÉ ES VERI</h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                Veri es una selección personal de vinos italianos construida desde el origen, la identidad y el legado.
                Productores, familias y territorios elegidos por una manera particular de entender el vino:
                con profundidad, autenticidad y sentido de lugar.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={historiaImg}
                alt="Nuestra historia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cómo empezó */}
          <div className="border-t border-outline-variant/20 pt-16 mb-28 max-w-2xl">
            <h2 className="font-label-caps text-primary tracking-[0.25em] text-[11px] mb-5">CÓMO EMPEZÓ</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
              Italia es un país inagotable. Cada paisaje, cada región y cada generación guarda una manera propia de entender el vino.
              Veri nace de una historia entre México e Italia y de más de 25 años de Rolly Pavia alrededor de la restauración y el vino italiano.
              Lo que comenzó como una búsqueda personal —probar, conocer, regresar a ciertos productores— terminó convirtiéndose en el deseo de compartirlos.
              Hoy, Veri reúne casas que han marcado la historia de sus regiones, familias profundamente ligadas a sus viñedos y productores que han elegido hacer las cosas a su manera.
            </p>
          </div>

          {/* Lo que nos guía — 3 pilares */}
          <div className="border-t border-outline-variant/20 pt-16 mb-28">
            <h2 className="font-label-caps text-primary tracking-[0.25em] text-[11px] mb-12">LO QUE NOS GUÍA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pilares.map((p) => (
                <div key={p.title}>
                  <h3
                    className="font-display-script text-primary mb-4"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                  >
                    {p.title}
                  </h3>
                  <div className="w-8 h-px bg-secondary mb-4" />
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nuestro diferencial */}
          <div className="border-t border-outline-variant/20 pt-16">
            <h2 className="font-label-caps text-primary tracking-[0.25em] text-[11px] mb-5">NUESTRO DIFERENCIAL: EL CRITERIO</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base max-w-2xl mb-14">
              Los productores de Veri son muy distintos entre sí: de nombres históricos a voces contemporáneas, de regiones y estilos diversos.
              No los une una fórmula de producción, sino la mirada de quien los elige. Ese criterio es lo que distingue a Veri.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {condiciones.map((c, i) => (
                <div key={c.title} className="flex gap-5 items-start">
                  <span className="font-label-caps text-secondary text-[10px] tracking-widest pt-0.5 shrink-0">0{i + 1}</span>
                  <div>
                    <h4 className="font-label-caps text-primary text-[11px] tracking-[0.15em] mb-2">{c.title.toUpperCase()}</h4>
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre sección 1 */}
            <div className="mt-20 border-t border-outline-variant/20 pt-12">
              <p
                className="font-display-script text-primary"
                style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
              >
                Veri es nuestra manera de compartir esa Italia con México.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2: NOSOTROS ────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

            {/* Eyebrow + Título */}
            <div className="mb-16">
              <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-6">
                NOSOTROS
              </p>
              <h2
                className="font-display-script text-primary leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
              >
                Las personas detrás de la selección
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Veri se construye sobre relaciones: con los productores, con los restaurantes que reciben sus vinos
                y entre quienes lo hacemos posible. Detrás de cada botella hay una mirada, y aquí conviven tres complementarias:
                el origen del proyecto, el conocimiento del viñedo y la experiencia de la mesa.
              </p>
            </div>

            {/* Equipo */}
            <div className="space-y-24">
              {equipo.map((persona, i) => (
                <div
                  key={persona.nombre}
                  className={`grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20 items-start ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Foto */}
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                    <img
                      src={persona.img}
                      alt={persona.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center py-4 lg:py-12">
                    <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em] mb-3">
                      {persona.cargo.toUpperCase()}
                    </p>
                    <h3
                      className="font-display-script text-primary mb-6"
                      style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
                    >
                      {persona.nombre}
                    </h3>
                    <div className="w-10 h-px bg-outline-variant/50 mb-6" />
                    <p className="font-body-md text-on-surface-variant leading-relaxed text-sm mb-6">
                      {persona.bio}
                    </p>
                    {persona.credenciales.length > 0 && (
                      <ul className="space-y-1">
                        {persona.credenciales.map((c) => (
                          <li key={c} className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-[0.15em]">
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre */}
            <div className="border-t border-outline-variant/20 mt-24 pt-16 text-center">
              <p
                className="font-display-script text-primary mx-auto"
                style={{ fontSize: 'clamp(22px, 3vw, 38px)', maxWidth: '680px' }}
              >
                Nos une una convicción sencilla: el vino se entiende mejor cuando se conoce a quien lo hace.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
