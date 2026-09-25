import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import davideImg   from '../assets/img/Davide-Merlini.jpeg'
import eneidaImg   from '../assets/img/eneida-fuentes.jpeg'

const equipo = [
  {
    nombre: 'Rolly Pavia',
    cargo:  'Fundador & Curador',
    img:    null,
    bio:    'Con una herencia que une a México e Italia y más de 25 años como restaurantero, Rolly Pavia ha formado su mirada sobre el vino italiano en la mesa y en el trato directo con los productores. Veri nace de esa trayectoria: primero como una búsqueda personal y hoy como una selección pensada para compartirse. Su criterio privilegia a los productores que trabajan la viña con filosofía propia y guían su oficio desde la convicción, con un compromiso absoluto con la tierra y con lo que llega a la copa.',
    credenciales: [],
  },
  {
    nombre: 'Davide Merlini',
    cargo:  'Beverage Manager · Head Sommelier',
    img:    davideImg,
    bio:    'Con más de veinte años en la alta restauración y la hostelería de lujo, Davide Merlini entiende el vino como un encuentro: con quienes trabajan la tierra, con sus historias y con las personas que lo comparten en la mesa. Viaja, visita bodegas y camina entre las vides para construir relaciones basadas en la confianza y el respeto. Su camino se cruzó con el de Rolly en 2010. Desde entonces, la curiosidad y la pasión por el vino italiano se transformaron en una visión compartida: dar a conocer productores de identidad sólida, alejados de las modas y de las lógicas puramente comerciales.',
    credenciales: ['Beverage Manager', 'Head Sommelier', 'Formador y juez internacional'],
  },
  {
    nombre: 'Eneida Fuentes',
    cargo:  'Sommelier',
    img:    eneidaImg,
    bio:    'Sommelier con más de 15 años de experiencia internacional en hospitalidad, Eneida Fuentes crea paisajes enológicos que expresan, resaltan y acompañan el alma de cada restaurante. Su acercamiento al vino parte del respeto por la tierra y de la promoción de su conservación, conectando distintos terroirs con una experiencia consciente y significativa. Su mirada es sensible y también estratégica: se apoya en una sólida base operativa, siempre vinculada a la sala y a la experiencia del comensal.',
    credenciales: [
      'Ex directora de bebidas de Pujol',
      'Jueza internacional, Concours Mondial de Bruxelles 2024',
      'Máster en Sommelier y Enomarketing, Basque Culinary Center',
      'WSET Nivel 3 · Certified Sommelier, Court of Master Sommeliers',
    ],
  },
]

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-surface-container-low py-24">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

            {/* Eyebrow + Título */}
            <div className="mb-16">
              <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-6">
                NOSOTROS
              </p>
              <h2
                className="font-display-script text-primary leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
              >
                Las personas detrás de la selección
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Veri se construye sobre relaciones: con los productores, con los restaurantes que reciben sus vinos
                y entre quienes lo hacemos posible. Detrás de cada botella hay una mirada, y aquí conviven tres complementarias:
                el origen del proyecto, el conocimiento del viñedo y la experiencia de la mesa.
              </p>
            </div>

            {/* Equipo */}
            <div className="space-y-24">
              {equipo.map((persona, i) => (
                <div
                  key={persona.nombre}
                  className={`grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20 items-start ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Foto */}
                  <div
                    className="overflow-hidden w-full"
                    style={{ height: '560px', background: persona.img ? undefined : '#f5f5f5' }}
                  >
                    {persona.img && (
                      <img
                        src={persona.img}
                        alt={persona.nombre}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center py-4 lg:py-12">
                    <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em] mb-3">
                      {persona.cargo.toUpperCase()}
                    </p>
                    <h3
                      className="font-display-script text-primary mb-6"
                      style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
                    >
                      {persona.nombre}
                    </h3>
                    <div className="w-10 h-px bg-outline-variant/50 mb-6" />
                    <p className="font-body-md text-on-surface-variant leading-relaxed text-sm mb-6">
                      {persona.bio}
                    </p>
                    {persona.credenciales.length > 0 && (
                      <ul className="space-y-1">
                        {persona.credenciales.map((c) => (
                          <li key={c} className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-[0.15em]">
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cierre */}
            <div className="border-t border-outline-variant/20 mt-24 pt-16 text-center">
              <p
                className="font-display-script text-primary mx-auto"
                style={{ fontSize: 'clamp(22px, 3vw, 38px)', maxWidth: '680px' }}
              >
                Nos une una convicción sencilla: el vino se entiende mejor cuando se conoce a quien lo hace.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
