import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import historiaImg from '../assets/img/historias-con-alma.jpg'

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
  { title: 'Procedencia clara',       desc: 'Sabemos de dónde viene cada vino y quién está detrás.' },
  { title: 'Personalidad',            desc: 'Vinos con carácter propio, lejos de lo correcto y lo homogéneo.' },
  { title: 'Una historia que contar', desc: 'Productores cuya historia merece ser conocida en México.' },
]

export default function NuestraHistoria() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
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

          {/* Lo que nos guía */}
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
      </main>

      <Footer />
    </>
  )
}
