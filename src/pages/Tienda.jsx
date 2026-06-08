import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useProducts } from '../hooks/useProducts'

const tipos = ['Todos', 'Tinto', 'Blanco', 'Rosado', 'Espumoso', 'Naranja']

// Mapea el slug de WooCommerce a la etiqueta visual del chip
const TIPO_SLUG = {
  Tinto:    'tinto',
  Blanco:   'blanco',
  Rosado:   'rosado',
  Espumoso: 'espumoso',
  Naranja:  'naranja',
}

function ProductCard({ producto }) {
  const imagen = producto.images?.[0]?.src || ''
  const precio = producto.price
    ? `$${parseFloat(producto.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`
    : '—'
  const bodega = producto.categories?.[0]?.name?.toUpperCase() || ''

  return (
    <article className="group">
      <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative mb-6">
        {imagen && (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={imagen}
            alt={producto.name}
          />
        )}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-caps px-8 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          Añadir
        </button>
        {producto.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-caps text-[10px] rounded-full">
              DESTACADO
            </span>
          </div>
        )}
        {producto.on_sale && (
          <div className="absolute top-4 right-4">
            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 font-label-caps text-[10px] rounded-full">
              OFERTA
            </span>
          </div>
        )}
      </div>
      <div className="text-center space-y-2">
        {bodega && <p className="font-label-caps text-on-surface-variant/60 text-[10px]">{bodega}</p>}
        <h3 className="font-display-script text-headline-sm text-primary">{producto.name}</h3>
        <p className="font-body-md text-secondary font-bold">{precio}</p>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <article className="animate-pulse">
      <div className="aspect-[4/5] bg-surface-container rounded mb-6" />
      <div className="text-center space-y-3">
        <div className="h-3 bg-surface-container rounded w-2/3 mx-auto" />
        <div className="h-5 bg-surface-container rounded w-3/4 mx-auto" />
        <div className="h-4 bg-surface-container rounded w-1/3 mx-auto" />
      </div>
    </article>
  )
}

export default function Tienda() {
  const [activeTipo, setActiveTipo] = useState('Todos')
  const [page,       setPage]       = useState(1)

  const categoria = activeTipo === 'Todos' ? '' : TIPO_SLUG[activeTipo] ?? ''

  const { productos, totalPaginas, cargando, error } = useProducts({
    page,
    perPage: 12,
    categoria,
  })

  const handleTipo = (tipo) => {
    setActiveTipo(tipo)
    setPage(1)
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <div className="py-16 text-center">
          <p className="font-label-caps text-secondary mb-4 tracking-[0.3em]">CATA Y SELECCIÓN</p>
          <h1 className="font-display-script text-headline-lg md:text-[80px] leading-none mb-8">Nuestra Cava</h1>
          <div className="w-12 h-px bg-outline-variant/50 mx-auto" />
        </div>

        {/* Filter Bar */}
        <section className="py-6 mb-12 border-b border-outline-variant/20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              {['Región', 'Tipo', 'Precio'].map((label) => (
                <button key={label} className="flex items-center gap-2 font-label-caps text-on-surface-variant hover:text-primary transition-colors">
                  {label} <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {tipos.map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => handleTipo(tipo)}
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

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-4xl text-outline mb-4 block">wifi_off</span>
            <p className="font-body-md text-on-surface-variant">No se pudo cargar el catálogo.</p>
            <p className="font-label-caps text-[10px] text-outline mt-2">{error.message}</p>
          </div>
        )}

        {/* Product Grid */}
        {!error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-24">
            {cargando
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : productos.map((p) => <ProductCard key={p.id} producto={p} />)
            }
          </div>
        )}

        {/* Paginación */}
        {!cargando && !error && totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">west</span>
            </button>
            <span className="font-label-caps text-[11px] text-on-surface-variant">
              {page} / {totalPaginas}
            </span>
            <button
              disabled={page === totalPaginas}
              onClick={() => setPage(p => p + 1)}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        )}

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
