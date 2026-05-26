const testimonials = [
  {
    id: 1,
    quote: 'Cada botella cuenta una historia diferente. El Nebbiolo que pedí fue una revelación; nunca había bebido algo tan honesto.',
    name: 'Valentina Moretti',
    detail: 'Sumiller · Milano',
    wine: 'Nebbiolo delle Langhe 2018',
  },
  {
    id: 2,
    quote: 'La curaduría de Vini Veri es impecable. Me fío de su selección con los ojos cerrados. Es el regalo perfecto para cualquier ocasión.',
    name: 'Carlos Fuentes',
    detail: 'Chef · Madrid',
    wine: 'Barolo Gran Riserva',
  },
  {
    id: 3,
    quote: 'Por fin una tienda que entiende que el vino natural no es moda. Es respeto por la uva, la tierra y el tiempo.',
    name: 'Sophie Brunner',
    detail: 'Enóloga · Berlín',
    wine: 'Pinot Grigio Reserve',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-primary text-white py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="font-label-caps text-secondary-container block mb-4 tracking-[0.2em]">VOCES DE LA COMUNIDAD</span>
            <h3 className="font-display-script text-5xl md:text-6xl">Lo que dicen</h3>
          </div>
          <p className="text-white/40 font-body-md text-sm max-w-xs mt-6 md:mt-0 leading-relaxed">
            Más de 4 000 clientes en 18 países confían en nuestra selección.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`flex flex-col justify-between p-10 rounded-2xl border border-white/10 ${i === 1 ? 'bg-white/5' : ''}`}
            >
              <div>
                <span className="font-display-script text-5xl text-secondary/60 leading-none block mb-6">"</span>
                <p className="font-body-lg text-white/80 text-sm leading-relaxed mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-headline-sm text-white text-base mb-1">{t.name}</p>
                <p className="font-label-caps text-white/40 text-[10px] tracking-widest mb-3">{t.detail}</p>
                <span className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-secondary text-sm">wine_bar</span>
                  <span className="font-label-caps text-[9px] text-white/50 tracking-widest">{t.wine}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white/50 text-sm">person</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-label-caps text-white/40 text-[10px] tracking-widest">4.9 / 5 · 1 247 RESEÑAS</span>
          </div>
        </div>

      </div>
    </section>
  )
}
