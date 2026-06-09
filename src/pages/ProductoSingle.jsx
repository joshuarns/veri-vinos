import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useProduct } from '../hooks/useProduct'

const acfLabels = {
  productores:   { label: 'Productor',      icon: 'person'        },
  year:          { label: 'Añada',           icon: 'calendar_today' },
  tipo_de_vino:  { label: 'Tipo de vino',   icon: 'wine_bar'      },
  uvas:          { label: 'Uvas',            icon: 'grass'         },
  region:        { label: 'Región',          icon: 'location_on'   },
  sub_apelacion: { label: 'Sub Apelación',  icon: 'map'           },
  pais:          { label: 'País',            icon: 'public'        },
  presentation:  { label: 'Presentación',   icon: 'liquor'        },
}

function SkeletonSingle() {
  return (
    <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-16 pt-32 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="aspect-[3/4] bg-surface-container rounded-2xl" />
      <div className="space-y-6 py-8">
        <div className="h-3 bg-surface-container rounded w-1/3" />
        <div className="h-10 bg-surface-container rounded w-3/4" />
        <div className="h-6 bg-surface-container rounded w-1/4" />
        <div className="h-px bg-surface-container" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 bg-surface-container rounded w-2/3" />
        ))}
      </div>
    </div>
  )
}

export default function ProductoSingle() {
  const { id } = useParams()
  const { producto, cargando, error } = useProduct(id)

  const imagen  = producto?.images?.[0]?.src || ''
  const precio  = producto?.price
    ? `$${parseFloat(producto.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN`
    : null
  const acf     = producto?.acf || {}
  const bodega  = producto?.categories?.[0]?.name || ''

  return (
    <>
      <Navbar />

      {cargando && <SkeletonSingle />}

      {error && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <span className="material-symbols-outlined text-5xl text-outline">wifi_off</span>
          <p className="font-body-md text-on-surface-variant">No se pudo cargar el producto.</p>
          <Link to="/tienda" className="font-label-caps text-[11px] text-secondary border-b border-secondary pb-0.5">
            VOLVER A LA TIENDA
          </Link>
        </div>
      )}

      {!cargando && !error && producto && (
        <main className="pt-28 pb-24">

          {/* Breadcrumb */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-10">
            <nav className="flex items-center gap-2 font-label-caps text-[10px] text-on-surface-variant/50">
              <Link to="/" className="hover:text-secondary transition-colors">INICIO</Link>
              <span>/</span>
              <Link to="/tienda" className="hover:text-secondary transition-colors">TIENDA</Link>
              <span>/</span>
              <span className="text-on-surface-variant">{producto.name.toUpperCase()}</span>
            </nav>
          </div>

          {/* Main grid */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Imagen */}
            <div className="sticky top-28">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden rounded-2xl">
                {imagen
                  ? <img src={imagen} alt={producto.name} className="w-full h-full object-cover" />
                  : <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-outline/30">wine_bar</span>
                    </div>
                }
              </div>
            </div>

            {/* Info */}
            <div className="py-4">

              {bodega && (
                <span className="font-label-caps text-secondary text-[10px] tracking-[0.25em] block mb-4">
                  {bodega.toUpperCase()}
                </span>
              )}

              <h1 className="font-display-script text-4xl md:text-5xl text-primary leading-tight mb-4">
                {producto.name}
              </h1>

              {precio && (
                <p className="font-headline-sm text-secondary mb-8">{precio}</p>
              )}

              {/* Botón añadir */}
              <button className="w-full md:w-auto bg-primary text-on-primary font-label-caps px-12 py-4 tracking-[0.2em] hover:bg-secondary transition-all duration-300 mb-10">
                AÑADIR AL CARRITO
              </button>

              {/* Separador */}
              <div className="w-full h-px bg-outline-variant/30 mb-10" />

              {/* Campos ACF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {Object.entries(acfLabels).map(([key, { label, icon }]) => {
                  const valor = acf[key]
                  if (!valor) return null
                  return (
                    <div key={key} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-secondary text-sm">{icon}</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-[9px] text-on-surface-variant/50 tracking-widest mb-1">{label.toUpperCase()}</p>
                        <p className="font-body-md text-primary text-sm">{valor}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Descripción */}
              {(producto.short_description || producto.description) && (
                <>
                  <div className="w-full h-px bg-outline-variant/30 mb-8" />
                  <div
                    className="font-body-md text-on-surface-variant/80 text-sm leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: producto.short_description || producto.description,
                    }}
                  />
                </>
              )}

            </div>
          </div>

        </main>
      )}

      <Footer />
    </>
  )
}
