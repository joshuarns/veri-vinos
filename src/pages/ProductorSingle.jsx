import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { obtenerProductor, getFeaturedImage } from '../api/producers'

function SkeletonSingle() {
  return (
    <div className="animate-pulse pt-32 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="h-3 bg-surface-container rounded w-1/4 mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="aspect-[3/4] bg-surface-container" />
        <div className="space-y-6 py-4">
          <div className="h-3 bg-surface-container rounded w-1/3" />
          <div className="h-12 bg-surface-container rounded w-3/4" />
          <div className="h-4 bg-surface-container rounded w-full" />
          <div className="h-4 bg-surface-container rounded w-5/6" />
          <div className="h-4 bg-surface-container rounded w-4/5" />
        </div>
      </div>
    </div>
  )
}

export default function ProductorSingle() {
  const { slug }                        = useParams()
  const [productor, setProductor]       = useState(null)
  const [cargando, setCargando]         = useState(true)
  const [error, setError]               = useState(null)

  useEffect(() => {
    setCargando(true)
    obtenerProductor(slug)
      .then(setProductor)
      .catch(setError)
      .finally(() => setCargando(false))
  }, [slug])

  const nombre  = productor?.title?.rendered || ''
  const imagen  = getFeaturedImage(productor)
  const content = productor?.content?.rendered || ''
  const pais    = productor?.acf?.pais || ''
  const region  = productor?.acf?.region || ''
  const meta    = [region, pais].filter(Boolean).join(' · ').toUpperCase()

  return (
    <>
      <Navbar />

      {cargando && <SkeletonSingle />}

      {error && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <span className="material-symbols-outlined text-5xl text-outline">wifi_off</span>
          <p className="font-body-md text-on-surface-variant">No se pudo cargar el productor.</p>
          <Link to="/productores" className="font-label-caps text-[11px] text-secondary border-b border-secondary pb-0.5">
            VOLVER A PRODUCTORES
          </Link>
        </div>
      )}

      {!cargando && !error && productor && (
        <main className="pt-24 pb-32">

          {/* Breadcrumb */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-10">
            <nav className="flex items-center gap-2 font-label-caps text-[10px] text-on-surface-variant/40">
              <Link to="/" className="hover:text-secondary transition-colors">INICIO</Link>
              <span>/</span>
              <Link to="/productores" className="hover:text-secondary transition-colors">PRODUCTORES</Link>
              <span>/</span>
              <span className="text-on-surface-variant/70">{nombre.toUpperCase()}</span>
            </nav>
          </div>

          {/* Hero — imagen + nombre */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-24 items-start">

            {/* Imagen */}
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                {imagen
                  ? <img src={imagen} alt={nombre} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-8xl text-outline/20">person</span>
                    </div>
                  )
                }
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 py-4">
              {meta && (
                <span className="font-label-caps text-secondary text-[10px] tracking-[0.3em]">{meta}</span>
              )}
              <h1 className="font-display-script text-[42px] md:text-[64px] text-primary leading-[1.05]">
                {nombre}
              </h1>

              <div className="w-12 h-px bg-outline-variant/50" />

              {content && (
                <div
                  className="font-body-md text-on-surface-variant leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              <div className="pt-4">
                <Link
                  to="/tienda"
                  className="inline-flex items-center gap-3 border border-primary text-primary font-label-caps py-4 px-8 tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[18px]">wine_bar</span>
                  VER VINOS
                </Link>
              </div>
            </div>
          </div>

        </main>
      )}

      <Footer />
    </>
  )
}
