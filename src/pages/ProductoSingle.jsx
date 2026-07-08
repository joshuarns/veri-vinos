import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useProduct } from '../hooks/useProduct'

const acfFields = [
  { key: 'year',          label: 'Añada',          icon: 'calendar_today' },
  { key: 'tipo_de_vino',  label: 'Tipo',           icon: 'wine_bar'       },
  { key: 'uvas',          label: 'Uvas',           icon: 'grass'          },
  { key: 'region',        label: 'Región',         icon: 'location_on'    },
  { key: 'sub_apelacion', label: 'Sub Apelación',  icon: 'map'            },
  { key: 'pais',          label: 'País',           icon: 'public'         },
  { key: 'presentation',  label: 'Presentación',   icon: 'liquor'         },
]

function getProducerName(p) {
  return p?.post_title || p?.title?.rendered || p?.name || ''
}
function getProducerExcerpt(p) {
  return p?.post_content || p?.content?.rendered || p?.post_excerpt || p?.excerpt?.rendered || p?.description || ''
}
function getProducerImage(p) {
  return p?.featured_image_url || p?.acf?.foto || p?.fimg_url || ''
}

function SkeletonSingle() {
  return (
    <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-16 pt-32 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="aspect-square bg-surface-container" />
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
  const acf            = producto?.acf || {}
  const bodega         = producto?.categories?.[0]?.name || ''
  const camposAcf      = acfFields.filter(({ key }) => acf[key])
  const fichaPdf       = acf.ficha_tecnica || ''
  const productoresRel = Array.isArray(acf.productores) ? acf.productores : []

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
        <main className="pt-24 pb-32 lg:pb-24">

          {/* Breadcrumb */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-10">
            <nav className="flex items-center gap-2 font-label-caps text-[10px] text-on-surface-variant/40">
              <Link to="/" className="hover:text-secondary transition-colors">INICIO</Link>
              <span className="text-outline-variant/40">/</span>
              <Link to="/tienda" className="hover:text-secondary transition-colors">TIENDA</Link>
              <span className="text-outline-variant/40">/</span>
              <span className="text-on-surface-variant/70">{producto.name.toUpperCase()}</span>
            </nav>
          </div>

          {/* Main grid */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-24 items-start">

            {/* ── Columna imagen ── */}
            <div className="lg:sticky lg:top-28">
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                {imagen
                  ? <img
                      src={imagen}
                      alt={producto.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  : <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-8xl text-outline/20">wine_bar</span>
                    </div>
                }
              </div>

              {/* Galería extra (si hay más imágenes) */}
              {producto.images?.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {producto.images.slice(1, 5).map((img) => (
                    <div key={img.id} className="aspect-square bg-surface-container-low overflow-hidden">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Columna info ── */}
            <div className="flex flex-col gap-0">

              {/* Bodega */}
              {bodega && (
                <span className="font-label-caps text-secondary text-[10px] tracking-[0.3em] mb-3">
                  {bodega.toUpperCase()}
                </span>
              )}

              {/* Nombre */}
              <h1 className="font-display-script text-[42px] md:text-[56px] text-primary leading-[1.05] mb-6">
                {producto.name}
              </h1>

              {/* Precio */}
              {precio && (
                <p className="font-body-md text-2xl font-semibold text-secondary mb-8">
                  {precio}
                </p>
              )}

              {/* CTA */}
              {/* <button className="w-full bg-primary text-on-primary font-label-caps py-5 tracking-[0.25em] hover:bg-secondary transition-colors duration-300 mb-10">
                AÑADIR AL CARRITO
              </button> */}

              {/* Ficha técnica */}
              {camposAcf.length > 0 && (
                <div className="border-t border-outline-variant/20">
                  {camposAcf.map(({ key, label, icon }, i) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between py-4 ${i < camposAcf.length - 1 ? 'border-b border-outline-variant/20' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-secondary/60">{icon}</span>
                        <span className="font-label-caps text-[10px] text-on-surface-variant/50 tracking-widest">{label.toUpperCase()}</span>
                      </div>
                      <span className="font-body-md text-sm text-primary font-medium text-right max-w-[55%]">
                        {acf[key]}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Ficha técnica PDF */}
              {fichaPdf && (
                <div className="mt-8">
                  <a
                    href={fichaPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-3 border border-primary text-primary font-label-caps py-4 px-8 tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    FICHA TÉCNICA
                  </a>
                </div>
              )}

              {/* Productores relacionados */}
              {productoresRel.length > 0 && (
                <div className="mt-10 pt-10 border-t border-outline-variant/20">
                  <p className="font-label-caps text-[10px] text-on-surface-variant/40 tracking-[0.25em] mb-6">
                    {productoresRel.length === 1 ? 'PRODUCTOR' : 'PRODUCTORES'}
                  </p>
                  <div className="flex flex-col gap-5">
                    {productoresRel.map((p, i) => {
                      const nombre  = getProducerName(p)
                      const extracto = getProducerExcerpt(p)
                      const foto    = getProducerImage(p)
                      return (
                        <div key={p?.ID || p?.id || i} className="flex flex-col gap-3 w-full">
                          <div className="flex items-center gap-3">
                            {foto
                              ? <img src={foto} alt={nombre} className="w-10 h-10 object-cover rounded-full shrink-0" />
                              : (
                                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-lg text-outline/40">person</span>
                                </div>
                              )
                            }
                            <p className="font-label-caps text-[13px] text-primary tracking-wide">{nombre}</p>
                          </div>
                          {extracto && (
                            <div
                              className="font-body-md text-sm text-on-surface-variant/70 leading-relaxed text-left w-full"
                              dangerouslySetInnerHTML={{ __html: extracto }}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Descripción */}
              {(producto.short_description || producto.description) && (
                <div className="mt-10 pt-10 border-t border-outline-variant/20">
                  <p className="font-label-caps text-[10px] text-on-surface-variant/40 tracking-[0.25em] mb-4">NOTAS DE CATA</p>
                  <div
                    className="font-body-md text-on-surface-variant text-sm leading-loose prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: producto.short_description || producto.description,
                    }}
                  />
                </div>
              )}

            </div>
          </div>

        </main>
      )}

      {/* CTA fijo en móvil */}
      {!cargando && !error && producto && precio && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface/95 backdrop-blur border-t border-outline-variant/20 px-margin-mobile py-4 flex items-center gap-4">
          <span className="font-body-md font-semibold text-secondary flex-1">{precio}</span>
          {/* <button className="bg-primary text-on-primary font-label-caps px-8 py-3.5 tracking-[0.2em] hover:bg-secondary transition-colors duration-300">
            AÑADIR
          </button> */}
        </div>
      )}

      <Footer />
    </>
  )
}
