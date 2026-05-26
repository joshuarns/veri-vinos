const values = [
  {
    icon: 'eco',
    title: 'Producción Natural',
    desc: 'Sin herbicidas ni pesticidas. Respetamos los ciclos de la tierra y el trabajo artesanal de generaciones.',
  },
  {
    icon: 'handshake',
    title: 'Productores Directos',
    desc: 'Cada botella llega directamente del productor. Sin intermediarios, sin compromisos en la calidad.',
  },
  {
    icon: 'verified',
    title: 'Curaduría Rigurosa',
    desc: 'Solo el 12% de los vinos que probamos llegan a nuestra selección. La excelencia no es negociable.',
  },
]

export default function Philosophy() {
  return (
    <section className="bg-surface-container py-24 md:py-36 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">

        {/* Cita principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-end">
          <div>
            <span className="font-label-caps text-secondary block mb-6 tracking-[0.2em]">NUESTRA FILOSOFÍA</span>
            <blockquote className="font-display-script text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8">
              "El vino natural no es una tendencia. Es una memoria."
            </blockquote>
            <p className="text-on-surface-variant/70 font-body-md leading-relaxed max-w-md">
              Fundada sobre la convicción de que la tierra habla cuando no se la interrumpe, Vini Veri nació para llevar a su mesa lo que los viñedos italianos tienen que decir.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzGWFpQEXFSsA91mUwqNUKfJW4krKfVGSRV83UKebI5KWs9sP1A7HGAN39tPcAqFOv08nsz93ynYRQwmoHzCymL1lcjD_XJTaNgTPOu4G4OAENieWZTyoI22KO_xjoBo9jZ-jtsTKm1bcbcp9MYBHIU3tk9TeI1RBcpvTxma8h2VYoxYOwLQMcBAkpHiclCTBQ92IEnQ0Io376FrFuhnjBKLUmWoE70wz6i0_bqHoXOI-vv5XWJb35bqvDYmaasLU4m7DYlOB4pns"
              alt="Viñedos de Italia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-label-caps text-white/70 text-[10px] tracking-widest">TOSCANA, ITALIA</span>
            </div>
          </div>
        </div>

        {/* Tres valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-outline-variant/20">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full border border-outline-variant/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">{v.icon}</span>
              </div>
              <h4 className="font-headline-sm text-primary">{v.title}</h4>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
