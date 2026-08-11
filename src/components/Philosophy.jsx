import filosofiaImg from '../assets/img/nuestra-filosofia.jpg'

const values = [
  {
    title: 'Origen',
    desc: 'Regiones que han dado forma a algunos de los grandes vinos de Italia.',
  },
  {
    title: 'Legado',
    desc: 'Casas donde el conocimiento se construye vendimia tras vendimia.',
  },
  {
    title: 'Identidad',
    desc: 'Productores que no siguen una referencia; ayudan a construirla.',
  },
]

export default function Philosophy() {
  return (
    <section className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">

        {/* Grid 2 columnas: card texto | imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

          {/* Card izquierda — borde burdeos, fondo crema */}
          <div className="border border-primary rounded-xl p-10 md:p-12 flex flex-col justify-between bg-background">
            <div>
              <h3
                className="text-primary font-bold uppercase leading-tight mb-8"
                style={{ fontFamily: 'Metropolis, sans-serif', fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '0.02em' }}
              >
                Vinos con Origen.<br />
                Productores con Historia.<br />
                Territorios con Identidad.
              </h3>
            </div>
            <p className="font-bold text-on-surface text-sm leading-relaxed">
              Veri Selezione nace de una pasión por Italia, sus viñedos y las historias detrás de cada botella. Reunimos casas que han marcado la historia de sus regiones y productores que hoy continúan definiendo su identidad. Familias, viñedos y territorios donde generaciones de conocimiento se traducen en vinos de carácter, precisión y profundo sentido de lugar.
            </p>
          </div>

          {/* Imagen derecha — mismo borde redondeado */}
          <div className="border border-primary rounded-xl overflow-hidden relative min-h-[360px]">
            <img
              src={filosofiaImg}
              alt="Viñedos de Italia"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-6">
              <span className="font-label-caps text-white text-[10px] tracking-[0.25em]">TOSCANA ITALIA</span>
            </div>
          </div>
        </div>

        {/* Tres valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-4 px-4">
              <span className="text-secondary text-4xl leading-none">☆</span>
              <h4
                className="text-primary font-bold uppercase text-sm tracking-wide whitespace-pre-line leading-snug"
                style={{ fontFamily: 'Metropolis, sans-serif' }}
              >
                {v.title}
              </h4>
              <p className="text-on-surface text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
