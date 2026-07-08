import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { obtenerProductores, getFeaturedImage } from '../api/producers'

function ProductorCard({ productor }) {
  const nombre   = productor.title?.rendered || ''
  const imagen   = getFeaturedImage(productor)
  const extracto = productor.excerpt?.rendered || ''
  const pais     = productor.acf?.pais || ''
  const region   = productor.acf?.region || ''
  const meta     = [region, pais].filter(Boolean).join(' · ').toUpperCase()

  return (
    <Link to={`/productor/${productor.slug}`} className="group block">
      <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative mb-6">
        {imagen
          ? <img src={imagen} alt={nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          : (
            <div className="w-full h-full flex items-center justify-center bg-surface-container">
              <span className="material-symbols-outlined text-8xl text-outline/20">person</span>
            </div>
          )
        }
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="font-label-caps text-on-primary text-[10px] tracking-[0.25em]">VER PRODUCTOR →</p>
        </div>
      </div>
      <div className="space-y-2">
        {meta && <p className="font-label-caps text-secondary text-[10px] tracking-[0.2em]">{meta}</p>}
        <h3 className="font-display-script text-2xl text-primary group-hover:text-secondary transition-colors leading-tight">
          {nombre}
        </h3>
        {extracto && (
          <div
            className="font-body-md text-sm text-on-surface-variant/70 leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: extracto }}
          />
        )}
      </div>
    </Link>
  )
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-surface-container mb-6" />
      <div className="space-y-3">
        <div className="h-3 bg-surface-container rounded w-1/3" />
        <div className="h-6 bg-surface-container rounded w-2/3" />
        <div className="h-4 bg-surface-container rounded w-full" />
        <div className="h-4 bg-surface-container rounded w-4/5" />
      </div>
    </div>
  )
}

export default function Productores() {
  const [productores, setProductores] = useState([])
  const [cargando, setCargando]       = useState(true)
  const [error, setError]             = useState(null)

  useEffect(() => {
    obtenerProductores()
      .then(setProductores)
      .catch(setError)
      .finally(() => setCargando(false))
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <div className="py-16 text-center">
          <p className="font-label-caps text-secondary mb-4 tracking-[0.3em]">TIERRA Y PASIÓN</p>
          <h1 className="font-display-script text-headline-lg md:text-[80px] leading-none mb-6">
            Nuestros Productores
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Familias y bodegas italianas unidas por el amor al territorio y la vinicultura de autor.
          </p>
          <div className="w-12 h-px bg-outline-variant/50 mx-auto mt-8" />
        </div>

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-4xl text-outline mb-4 block">wifi_off</span>
            <p className="font-body-md text-on-surface-variant">No se pudo cargar los productores.</p>
            <p className="font-label-caps text-[10px] text-outline mt-2">{error.message}</p>
          </div>
        )}

        {/* Grid */}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16 mt-4">
            {cargando
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : productores.map((p) => <ProductorCard key={p.id} productor={p} />)
            }
          </div>
        )}

        {!cargando && !error && productores.length === 0 && (
          <p className="text-center font-body-md text-on-surface-variant py-20">
            No hay productores disponibles.
          </p>
        )}

      </main>
      <Footer />
    </>
  )
}
