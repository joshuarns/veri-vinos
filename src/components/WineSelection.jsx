import { useRef } from 'react'

const wines = [
  {
    id: 1,
    region: 'Piedmonte',
    name: 'Nebbiolo delle Langhe',
    price: '$1,200',
    badge: 'Vintage 2018',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTJx775YDdhyvpfRcNOwrHIR11uEJwJrKTKMOJoPckZnYHdNzFeydrlFkjxNhQhUSIDBrwUmWD0kFrYoD2OlQy1T_RQeKDHU4aimp2g5PsKL9q4CZ8D1tGRinqV-ZvVKAjW-hf2Jnwczn4pzgQq0f-ffGr8RvjwzoyfsL4U4qJz1yDra0E05N2byWGfeGHcqSNaiDJ81NVqaIw2A2kB1LbFOVTMrSeMaM21jlC9eEyObJQOwv3AO11PfAsY29_eGJrF1iNJi00UkQ',
  },
  {
    id: 2,
    region: 'Alto Adige',
    name: 'Pinot Grigio Reserve',
    price: '$1,200',
    badge: 'Biodynamic',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOqQ22mcuu7yVMpj0OroS989c7ckif1Jx9VHVCCj3KYI2xDE7II1cZy66YSAA29UmuDkbYPiI0gzhi_hKe3epr_JrmzjdjnRgMXKylvC3OUrKu9WGcWKzR3UdFHcwb2H9QlVs8zwLZFVzqIA1ZhGbfV_79Pi307zSIGwGSIEitb0kHMnbYbnedJyNsDhF1CiPWsbfGO0iYyS54gdxWSYegYG_rMW-jE7pQslFwKHtFBUREgK2qte0VzM4t7RAIsprubxWj_71dXsA',
  },
  {
    id: 3,
    region: 'Toscana',
    name: 'Barolo Gran Riserva',
    price: '$1,200',
    badge: 'Limited Release',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsoKKyMNhbVoTlRc7X5tD_tjuUmehR6d0bWsOFDTvwz7Qn0O0_wSSmiCNmP76H5L_vEgVoGPGTOTAGNAEHnkQtyhf5P3nQFUObE-LJ1b7lb786oZC2aj12cJwrWBW5LjodvkqUHeRWFQxblbygTVFB7jcyL5cGXxwZSTRvUVsmLc6cpa3xOP7PQqHMwpD7sjYGegL-x6s5Es6XFjMuSipvC2HXUbnR3ZU0JJrI2U3jto7qeY0L9wRdybywYo0FlZpY8isABvf_bx4',
  },
]

export default function WineSelection() {
  const carouselRef = useRef(null)

  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="font-label-caps text-secondary block mb-4 tracking-[0.2em]">CURADURÍA PREMIUM</span>
            <h3 className="font-display-script text-5xl md:text-6xl text-primary mb-6">Nuestra Selección</h3>
            <p className="text-on-surface-variant/70 font-body-md leading-relaxed">
              Etiquetas seleccionadas individualmente por su carácter, terroir y fidelidad a los métodos de producción naturales.
            </p>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              onClick={() => carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              onClick={() => carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div ref={carouselRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {wines.map((wine) => (
            <div key={wine.id} className="min-w-[260px] md:min-w-[320px] snap-start group cursor-pointer border border-outline-variant/40 hover:border-primary transition-colors duration-300">
              <div className="relative aspect-[3/4] bg-surface-container-lowest overflow-hidden">
                <img
                  className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  src={wine.img}
                  alt={wine.name}
                />
                <div className="absolute top-4 left-4">
                  <span className="font-label-caps text-[9px] text-secondary tracking-widest uppercase">
                    {wine.badge}
                  </span>
                </div>
              </div>
              <div className="px-6 py-5 border-t border-outline-variant/30">
                <p className="font-label-caps text-on-surface-variant/50 text-[10px] mb-1 tracking-widest uppercase">{wine.region}</p>
                <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors text-base">{wine.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="font-body-md text-primary font-semibold">{wine.price}</p>
                  <span className="font-label-caps text-[9px] text-on-surface-variant/40 underline underline-offset-2 tracking-widest cursor-pointer hover:text-primary transition-colors">
                    Agregar al carrito
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
