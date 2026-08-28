const wines = [
  {
    id: 1,
    region: 'Piedmonte',
    name: 'Nebbiolo delle Langhe',
    price: '$1,200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTJx775YDdhyvpfRcNOwrHIR11uEJwJrKTKMOJoPckZnYHdNzFeydrlFkjxNhQhUSIDBrwUmWD0kFrYoD2OlQy1T_RQeKDHU4aimp2g5PsKL9q4CZ8D1tGRinqV-ZvVKAjW-hf2Jnwczn4pzgQq0f-ffGr8RvjwzoyfsL4U4qJz1yDra0E05N2byWGfeGHcqSNaiDJ81NVqaIw2A2kB1LbFOVTMrSeMaM21jlC9eEyObJQOwv3AO11PfAsY29_eGJrF1iNJi00UkQ',
  },
  {
    id: 2,
    region: 'Piedmonte',
    name: 'Nebbiolo delle Langhe',
    price: '$1,200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOqQ22mcuu7yVMpj0OroS989c7ckif1Jx9VHVCCj3KYI2xDE7II1cZy66YSAA29UmuDkbYPiI0gzhi_hKe3epr_JrmzjdjnRgMXKylvC3OUrKu9WGcWKzR3UdFHcwb2H9QlVs8zwLZFVzqIA1ZhGbfV_79Pi307zSIGwGSIEitb0kHMnbYbnedJyNsDhF1CiPWsbfGO0iYyS54gdxWSYegYG_rMW-jE7pQslFwKHtFBUREgK2qte0VzM4t7RAIsprubxWj_71dXsA',
  },
  {
    id: 3,
    region: 'Piedmonte',
    name: 'Nebbiolo delle Langhe',
    price: '$1,200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsoKKyMNhbVoTlRc7X5tD_tjuUmehR6d0bWsOFDTvwz7Qn0O0_wSSmiCNmP76H5L_vEgVoGPGTOTAGNAEHnkQtyhf5P3nQFUObE-LJ1b7lb786oZC2aj12cJwrWBW5LjodvkqUHeRWFQxblbygTVFB7jcyL5cGXxwZSTRvUVsmLc6cpa3xOP7PQqHMwpD7sjYGegL-x6s5Es6XFjMuSipvC2HXUbnR3ZU0JJrI2U3jto7qeY0L9wRdybywYo0FlZpY8isABvf_bx4',
  },
]

export default function WineSelection() {
  return (
    <section className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-label-caps text-primary tracking-[0.25em] text-[11px] font-bold mb-3">
            CURADURÍA PREMIUM
          </p>
          <h3
            className="text-primary font-display-script uppercase mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '0.04em' }}
          >
            Nuestra Selección
          </h3>
          <p className="text-on-surface font-bold text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Etiquetas seleccionadas individualmente por su carácter, terroir y fidelidad a los métodos de producción naturales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wines.map((wine) => (
            <div
              key={wine.id}
              className="border border-primary rounded-xl flex flex-col overflow-hidden"
            >
              {/* Info arriba */}
              <div className="px-6 pt-6 pb-4">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.2em] mb-1">
                  {wine.region.toUpperCase()}
                </p>
                <h4 className="font-bold text-primary uppercase text-sm tracking-wide mb-1"
                    style={{ fontFamily: 'Metropolis, sans-serif' }}>
                  {wine.name.toUpperCase()}
                </h4>
              </div>

              {/* Imagen botella */}
              <div className="flex-1 flex items-center justify-center px-8 py-6">
                <img
                  src={wine.img}
                  alt={wine.name}
                  className="h-64 object-contain"
                />
              </div>

              {/* CTA abajo */}
              <div className="px-6 pb-6 text-center">
                <button className="font-body-md text-primary underline underline-offset-4 text-sm hover:text-secondary transition-colors">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
