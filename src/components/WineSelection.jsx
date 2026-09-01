import galatronaImg from '../assets/img/galatrona-home.jpeg'
import baroloArioneImg from '../assets/img/barolo-arione-home.jpeg'
import bibbonaImg from '../assets/img/bibbona-home.jpeg'

const wines = [
  {
    id: 1,
    region: 'Toscana',
    name: 'Galatrona',
    producer: 'Petrolo',
    img: galatronaImg,
  },
  {
    id: 2,
    region: 'Piamonte',
    name: 'Barolo Arione',
    producer: 'Giacomo Conterno',
    img: baroloArioneImg,
  },
  {
    id: 3,
    region: 'Costa Toscana',
    name: 'Bibbona',
    producer: 'Biserno',
    img: bibbonaImg,
  },
]

export default function WineSelection() {
  return (
    <section className="py-20 md:py-28 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h3
            className="text-primary font-display-script uppercase mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '0.04em' }}
          >
            La Nostra Selezione
          </h3>
          <p className="text-on-surface font-bold text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Productores y etiquetas que expresan lo más extraordinario de Italia.
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
                <p className="text-on-surface text-xs tracking-wide"
                   style={{ fontFamily: 'Metropolis, sans-serif' }}>
                  {wine.producer}
                </p>
              </div>

              {/* Imagen botella */}
              <div className="flex-1 flex items-center justify-center px-6 py-4">
                <img
                  src={wine.img}
                  alt={`${wine.name} — ${wine.producer}`}
                  className="w-full aspect-square object-cover rounded-lg"
                  loading="lazy"
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
