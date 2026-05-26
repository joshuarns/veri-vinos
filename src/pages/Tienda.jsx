import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    bodega: 'BODEGA DEL SOL • TOSCANA',
    name: 'Gran Reserva 2018',
    price: '$1,250.00 MXN',
    badge: 'ORGÁNICO',
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
    tipo: 'Tinto',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJPHOHnGu3yRMpbGXGDoXS8qLUgCV-U0L8rURaAP1OwrWrb71XvROlaXpUcdBsA_pHweYl8u6MAGEphB8cyr0hswal4t4ibS-pLgr1JzEFZm3nBzlRvj9p8Yet7ASsHcZvqQTRvWPa0MntSxL1QbGXZe5llY__u5OQWQAtItVWnOPqOIxhnYrtrbZSSpifc0k-CZFh-EbIzOqA-_ZA2CLUvCslJXAsX64FB7d8TuyhnyJVWIVoT6xRfBl4YqtLLF1zPGSy-2NRBs8',
  },
  {
    id: 2,
    bodega: 'VALLE DE GUADALUPE • MÉXICO',
    name: 'Nebbiolo Rosé',
    price: '$890.00 MXN',
    badge: 'POPULAR',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    tipo: 'Rosado',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2hmpe3X0-qhfrVck69GkNPzBF29v6ZoYmMFI1WHUYMYpGEOKHWMPZavtLiLP2huvjwKsQhCu6g9eh4hppezBy0gEnVGfgdYftaNlWYtz2S6E9J_nZIcFi7U1hlce1TdM0i8RhsNrN0rwrh6SVRZO9_g2BLjwXUWfvw6RXpRxcS7hT71u6nasbo4DKM45YGCTMSn29cUbQNIV34nzp3hdD4hvEav0n_fXuC_XIqF9BZvZUK6MMgd9-ohi1gKYzoi2jvo21PjMmECM',
  },
  {
    id: 3,
    bodega: 'PIEDMONTE • ITALIA',
    name: 'Barolo Tradizionale',
    price: '$2,100.00 MXN',
    badge: null,
    tipo: 'Tinto',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAzxRwPWucqLNE4vDrmOSiudhwJ1LXvyattVPMrtw1FBxy1iidbg9Scp8aLqf1hUyd4RC7TXsulRaTtLS10MmKlGebwcaYwrchweYdNzN8jKyhMwoesCJfBSSvrWxolbpSnNsfx2VLlutWIAXjh2fcpLEtZGkHlCYr-kcm0_ecXKp6xguKSHw0-12ZNTtNz9mMHYbijZUcsyaN8Qixx8K2jGoG2qo0EpDzodAL08pa78ykX-pqoL-e7BWSlZ4WVk5NTBVohy-2zgg',
  },
  {
    id: 4,
    bodega: 'CHAMPAGNE • FRANCIA',
    name: 'Blanc de Blancs',
    price: '$1,850.00 MXN',
    badge: null,
    tipo: 'Espumoso',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe6-yUk5ELfh0sfL8IyF5OdKbVJSQw5hHpO8zWBxGHpjMbTvpTYvzih0PCj5mxabMJxl2PT81SmfM8jhCY7-0qD-CVi5GcOFb1Fb9q-1-Zzh-km3g_masSEPH9n5iy-LNyDV7cI5DctByzRYRbe5O1-7db9_-coftFrQGGbf59oFoQhYDbstmuWI4lIIKO-7HjKFZMSZNnNblb3wn08Tji7h0KoxeeYhMM9N_DED4NMWbc_dDiXYQH53Oovyv-Td1vyN5eyjLB00M',
  },
]

const tipos = ['Todos', 'Tinto', 'Blanco', 'Rosado', 'Espumoso', 'Naranja']

export default function Tienda() {
  const [activeTipo, setActiveTipo] = useState('Todos')

  const filtered = activeTipo === 'Todos'
    ? products
    : products.filter((p) => p.tipo === activeTipo)

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <div className="py-16 text-center">
          <p className="font-label-caps text-secondary mb-4 tracking-[0.3em]">CATA Y SELECCIÓN</p>
          <h1 className="font-display-script text-headline-lg md:text-[80px] leading-none mb-8">Nuestra Cava</h1>
          <div className="w-12 h-px bg-outline-variant/50 mx-auto"></div>
        </div>

        {/* Filter Bar */}
        <section className="sticky top-[72px] z-40 bg-surface/80 backdrop-blur-sm py-6 mb-12 border-b border-outline-variant/20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Dropdowns */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              {['Región', 'Tipo', 'Precio'].map((label) => (
                <button key={label} className="flex items-center gap-2 font-label-caps text-on-surface-variant hover:text-primary transition-colors">
                  {label} <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              ))}
            </div>
            {/* Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {tipos.map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setActiveTipo(tipo)}
                  className={`px-4 py-1.5 rounded-full font-label-caps text-[10px] transition-colors whitespace-nowrap ${
                    activeTipo === tipo
                      ? 'bg-secondary text-on-secondary'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant/30'
                  }`}
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-24">
          {filtered.map((product) => (
            <article key={product.id} className="group">
              <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={product.img}
                  alt={product.name}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps px-8 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Añadir
                </button>
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`${product.badgeClass} px-3 py-1 font-label-caps text-[10px] rounded-full`}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center space-y-2">
                <p className="font-label-caps text-on-surface-variant/60 text-[10px]">{product.bodega}</p>
                <h3 className="font-display-script text-headline-sm text-primary">{product.name}</h3>
                <p className="font-body-md text-secondary font-bold">{product.price}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Bento */}
        <section className="mt-40 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            <div className="md:col-span-8 aspect-video md:aspect-auto bg-primary relative overflow-hidden group">
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBePkeGJFVAyqTfV79iKwgvdFSQ52za5sl0M7DCi6rubmgzPXJNAjdHwyzpm8dRx4yvWcRyeChYs0XPL9AZLupT6jgmD-OBb6HxY1wiNWj0xnYyteq1KjitwxVPfQX9NZzvEIp7jqzeWAOg2Eh_855UENOhIIpJ5tAPJ34GRNi-fCLJJf54twDSv65PU1hMV9drQOWM6lizxsb7aJH4JWNZYWR2xxk2SdRD8Pboywd5apd5jMZvEUgCrqC7UBYNodC1H7_Qq4-vpLc"
                alt="Viñedos"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <p className="font-label-caps text-on-primary/80 mb-2">HERENCIA</p>
                <h2 className="font-display-script text-headline-lg text-on-primary max-w-xl">
                  El espíritu de la tierra en cada botella.
                </h2>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-high p-12 flex flex-col justify-center gap-8">
              <h4 className="font-display-script text-headline-sm text-secondary">Suscripción Terroir</h4>
              <p className="font-body-md text-on-surface-variant">
                Recibe trimestralmente una selección curada de 3 botellas exclusivas de pequeños productores.
              </p>
              <button className="border border-primary text-primary font-label-caps py-4 tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300">
                DESCUBRE MÁS
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
