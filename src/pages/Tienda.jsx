import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useProducts } from '../hooks/useProducts'
import { obtenerRegiones, obtenerProductosPorRegion } from '../api/products'

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
  const bodega = (producto.acf?.productores || producto.categories?.[0]?.name || '').toUpperCase()
  const anada  = producto.acf?.year || ''

  return (
    <article className="group">
      <Link to={`/producto/${producto.id}`} className="block">
      <div className="aspect-square bg-surface-container-low overflow-hidden relative mb-6">
        {imagen && (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={imagen}
            alt={producto.name}
          />
        )}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
        {bodega && <p className="font-label-caps text-on-surface-variant/60 text-[14px]">{bodega}</p>}
        <h3 className="font-display-script text-title-lg text-primary group-hover:text-secondary transition-colors">{producto.name}</h3>
        <p className="font-body-md text-secondary font-bold">{precio}</p>
        {anada && (
          <div className="pt-1">
            <p className="font-label-caps text-[12px] text-secondary tracking-[0.2em]">AÑADA</p>
            <p className="font-body-md text-base text-on-surface-variant">{anada}</p>
          </div>
        )}
      </div>
      </Link>
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
  const [activeTipo,   setActiveTipo]   = useState('Todos')
  const [page,         setPage]         = useState(1)
  const [regionActiva, setRegionActiva] = useState(null)   // { id, nombre, descripcion, slug }
  const [regiones,     setRegiones]     = useState([])
  const [regionDropdown, setRegionDropdown] = useState(false)

  // productos filtrados por región (se cargan aparte)
  const [productosRegion,  setProductosRegion]  = useState([])
  const [cargandoRegion,   setCargandoRegion]   = useState(false)
  const [atributoId,       setAtributoId]       = useState(null)

  const categoria = activeTipo === 'Todos' ? '' : TIPO_SLUG[activeTipo] ?? ''

  const { productos, totalPaginas, cargando, error } = useProducts({
    page,
    perPage: 12,
    categoria,
  })

  // Cargar lista de regiones al montar
  useEffect(() => {
    obtenerRegiones().then(setRegiones).catch(() => {})
  }, [])

  // Cargar productos cuando se selecciona una región
  useEffect(() => {
    if (!regionActiva) return
    setCargandoRegion(true)
    obtenerProductosPorRegion(atributoId, regionActiva.id)
      .then(setProductosRegion)
      .catch(() => setProductosRegion([]))
      .finally(() => setCargandoRegion(false))
  }, [regionActiva])

  const handleTipo = (tipo) => {
    setActiveTipo(tipo)
    setPage(1)
  }

  const handleRegion = (region) => {
    setRegionActiva(region)
    setRegionDropdown(false)
  }

  const limpiarRegion = () => {
    setRegionActiva(null)
    setProductosRegion([])
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

              {/* Dropdown Región */}
              <div className="relative">
                <button
                  onClick={() => setRegionDropdown((v) => !v)}
                  className={`flex items-center gap-2 font-label-caps transition-colors ${regionActiva ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  {regionActiva ? regionActiva.nombre : 'Región'}
                  <span className="material-symbols-outlined text-sm">
                    {regionDropdown ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {regionDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-surface border border-outline-variant/30 shadow-lg z-50 min-w-[180px]">
                    <button
                      onClick={limpiarRegion}
                      className="w-full text-left px-5 py-3 font-label-caps text-[10px] text-on-surface-variant hover:bg-surface-container-high transition-colors"
                    >
                      Todas las regiones
                    </button>
                    {regiones.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => handleRegion(r)}
                        className={`w-full text-left px-5 py-3 font-label-caps text-[10px] transition-colors ${regionActiva?.id === r.id ? 'text-primary bg-surface-container' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
                      >
                        {r.nombre}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {['Tipo', 'Precio'].map((label) => (
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

        {/* Vista de Región seleccionada */}
        {regionActiva && (
          <div className="mb-20">
            {/* Encabezado de región */}
            <div className="py-16 border-b border-outline-variant/20 mb-16">
              <button
                onClick={limpiarRegion}
                className="flex items-center gap-2 font-label-caps text-on-surface-variant hover:text-primary transition-colors mb-8"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Todas las regiones
              </button>
              <p className="font-label-caps text-secondary mb-4 tracking-[0.3em]">REGIÓN</p>
              <h2 className="font-display-script text-headline-lg md:text-[72px] leading-none mb-8 text-primary">
                {regionActiva.nombre}
              </h2>
              {regionActiva.descripcion && (
                <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  {regionActiva.descripcion}
                </p>
              )}
            </div>

            {/* Vinos de la región */}
            {cargandoRegion ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-24">
                {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : productosRegion.length === 0 ? (
              <p className="font-body-md text-on-surface-variant text-center py-20">
                No hay vinos disponibles para esta región.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-24">
                {productosRegion.map((p) => <ProductCard key={p.id} producto={p} />)}
              </div>
            )}
          </div>
        )}

        {/* Error */}
        {!regionActiva && error && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-4xl text-outline mb-4 block">wifi_off</span>
            <p className="font-body-md text-on-surface-variant">No se pudo cargar el catálogo.</p>
            <p className="font-label-caps text-[10px] text-outline mt-2">{error.message}</p>
          </div>
        )}

        {/* Product Grid (solo cuando no hay región activa) */}
        {!regionActiva && !error && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-24">
            {cargando
              ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
              : productos.map((p) => <ProductCard key={p.id} producto={p} />)
            }
          </div>
        )}

        {/* Paginación */}
        {!regionActiva && !cargando && !error && totalPaginas > 1 && (
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
