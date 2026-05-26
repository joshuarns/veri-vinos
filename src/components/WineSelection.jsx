import { useRef } from 'react'

const wines = [
  {
    id: 1,
    region: 'Piedmonte',
    name: 'Nebbiolo delle Langhe',
    price: '85.00€',
    badge: 'Vintage 2018',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTJx775YDdhyvpfRcNOwrHIR11uEJwJrKTKMOJoPckZnYHdNzFeydrlFkjxNhQhUSIDBrwUmWD0kFrYoD2OlQy1T_RQeKDHU4aimp2g5PsKL9q4CZ8D1tGRinqV-ZvVKAjW-hf2Jnwczn4pzgQq0f-ffGr8RvjwzoyfsL4U4qJz1yDra0E05N2byWGfeGHcqSNaiDJ81NVqaIw2A2kB1LbFOVTMrSeMaM21jlC9eEyObJQOwv3AO11PfAsY29_eGJrF1iNJi00UkQ',
  },
  {
    id: 2,
    region: 'Alto Adige',
    name: 'Pinot Grigio Reserve',
    price: '42.50€',
    badge: 'Biodynamic',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOqQ22mcuu7yVMpj0OroS989c7ckif1Jx9VHVCCj3KYI2xDE7II1cZy66YSAA29UmuDkbYPiI0gzhi_hKe3epr_JrmzjdjnRgMXKylvC3OUrKu9WGcWKzR3UdFHcwb2H9QlVs8zwLZFVzqIA1ZhGbfV_79Pi307zSIGwGSIEitb0kHMnbYbnedJyNsDhF1CiPWsbfGO0iYyS54gdxWSYegYG_rMW-jE7pQslFwKHtFBUREgK2qte0VzM4t7RAIsprubxWj_71dXsA',
  },
  {
    id: 3,
    region: 'Toscana',
    name: 'Barolo Gran Riserva',
    price: '155.00€',
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

        <div ref={carouselRef} className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {wines.map((wine) => (
            <div key={wine.id} className="min-w-[300px] md:min-w-[380px] snap-start group cursor-pointer">
              <div className="relative aspect-[3/4] bg-surface-container-low overflow-hidden rounded-xl mb-8">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={wine.img}
                  alt={wine.name}
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full font-label-caps text-[9px] text-primary shadow-sm uppercase tracking-widest">
                    {wine.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-primary px-6 py-3 rounded-full font-label-caps text-[10px] tracking-widest">
                    VER DETALLES
                  </button>
                </div>
              </div>
              <div>
                <p className="font-label-caps text-secondary text-[10px] mb-2 tracking-widest uppercase">{wine.region}</p>
                <h4 className="font-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors">{wine.name}</h4>
                <p className="font-body-md text-primary/80 font-bold">{wine.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
