import filosofiaImg from '../assets/img/nuestra-filosofia.jpg'

const values = [
  {
    title: 'Producción Natural',
    desc: 'Sin herbicidas ni pesticidas. Respetamos los ciclos de la tierra y el trabajo artesanal de generaciones.',
  },
  {
    title: 'Productores Directos',
    desc: 'Cada botella llega directamente del productor. Sin intermediarios, sin compromisos en la calidad.',
  },
  {
    title: 'Curaduría Rigurosa',
    desc: 'Solo el 12% de los vinos que probamos llegan a nuestra selección. La excelencia no es negociable.',
  },
]

export default function Philosophy() {
  return (
    <section className="py-24 md:py-36 px-margin-mobile md:px-margin-desktop bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto">

        {/* Cita principal — izq oscuro, der imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-28 items-stretch">
          <div className="bg-primary px-10 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <span className="font-label-caps text-secondary block mb-6 tracking-[0.3em] text-[10px]">NUESTRA FILOSOFÍA</span>
            <blockquote className="font-display-script text-4xl md:text-5xl text-on-primary leading-[1.1] mb-8">
              El vino natural no es una tendencia. Es una memoria.
            </blockquote>
            <p className="text-on-primary/60 font-body-md text-sm leading-relaxed">
              Fundada sobre la convicción de que la tierra habla cuando no se la interrumpe, Veri Vinos nació para llevar a su mesa lo que los viñedos italianos tienen que decir.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto min-h-[360px] overflow-hidden">
            <img
              src={filosofiaImg}
              alt="Viñedos de Italia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-label-caps text-white/70 text-[10px] tracking-widest">TOSCANA, ITALIA</span>
            </div>
          </div>
        </div>

        {/* Tres valores con estrella dorada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-outline-variant/20">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-4">
              <span className="text-secondary text-2xl">☆</span>
              <h4 className="font-label-caps text-primary tracking-[0.15em] text-[11px]">{v.title.toUpperCase()}</h4>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed font-body-md">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
