import filosofiaImg from '../assets/img/nuestra-filosofia.jpg'

const values = [
  {
    title: 'Producción\nNatural',
    desc: 'Sin herbicidas ni pesticidas. Respetamos los ciclos de la tierra y el trabajo artesanal de generaciones.',
  },
  {
    title: 'Productores\nDirectos',
    desc: 'Cada botella llega directamente del productor. Sin intermediarios, sin compromisos en la calidad.',
  },
  {
    title: 'Curaduría\nRigurosa',
    desc: 'Solo el 12% de los vinos que probamos llegan a nuestra selección. La excelencia no es negociable.',
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
              <p className="font-label-caps text-primary text-[11px] tracking-[0.25em] font-bold mb-6">
                NUESTRA FILOSOFÍA
              </p>
              <h3
                className="text-primary font-bold uppercase leading-tight mb-8"
                style={{ fontFamily: 'Metropolis, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                El vino natural no es una tendencia. Es una memoria.
              </h3>
            </div>
            <p className="font-bold text-on-surface text-sm leading-relaxed">
              Fundada sobre la convicción de que la tierra habla cuando no se la interrumpe, Veri Vinos nació para llevar a su mesa lo que los viñedos italianos tienen que decir.
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
