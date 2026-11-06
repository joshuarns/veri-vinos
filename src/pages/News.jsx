import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { obtenerNoticias, formatearFecha } from '../api/news'

function NewsCard({ noticia }) {
  return (
    <article className="group">
      <Link to={`/news/${noticia.slug}`} className="block">
        <div className="aspect-[4/3] bg-surface-container-low overflow-hidden mb-6">
          {noticia.imagen && (
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
        <p className="font-label-caps text-secondary text-[10px] tracking-[0.25em] mb-2">
          {[noticia.categoria, formatearFecha(noticia.fecha)].filter(Boolean).join(' · ').toUpperCase()}
        </p>
        <h3 className="font-display-script text-title-lg text-primary group-hover:text-secondary transition-colors mb-3">
          {noticia.titulo}
        </h3>
        {noticia.extracto && (
          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed line-clamp-3">
            {noticia.extracto}
          </p>
        )}
      </Link>
    </article>
  )
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/3] bg-surface-container rounded mb-6" />
      <div className="h-3 bg-surface-container rounded w-1/3 mb-3" />
      <div className="h-5 bg-surface-container rounded w-3/4 mb-3" />
      <div className="h-3 bg-surface-container rounded w-full" />
    </div>
  )
}

export default function News() {
  const [page, setPage] = useState(1)
  const [noticias, setNoticias] = useState([])
  const [totalPaginas, setTotalPaginas] = useState(1)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false
    setCargando(true)
    setError(null)
    obtenerNoticias({ page })
      .then(({ noticias, totalPaginas }) => {
        if (cancelado) return
        setNoticias(noticias)
        setTotalPaginas(totalPaginas)
      })
      .catch((err) => { if (!cancelado) setError(err) })
      .finally(() => { if (!cancelado) setCargando(false) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return () => { cancelado = true }
  }, [page])

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        <div className="py-16 text-center">
          <h1
            className="text-primary font-display-script uppercase mb-8"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '0.04em' }}
          >
            News
          </h1>
          <div className="w-12 h-px bg-primary/30 mx-auto" />
        </div>

        {error ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-4xl text-outline mb-4 block">wifi_off</span>
            <p className="font-body-md text-on-surface-variant">No se pudieron cargar las noticias.</p>
          </div>
        ) : cargando ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
            {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : noticias.length === 0 ? (
          <p className="font-body-md text-on-surface-variant text-center py-20">
            Pronto compartiremos novedades de Veri.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
            {noticias.map((n) => <NewsCard key={n.id} noticia={n} />)}
          </div>
        )}

        {!cargando && !error && totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">west</span>
            </button>
            <span className="font-label-caps text-[11px] text-on-surface-variant">{page} / {totalPaginas}</span>
            <button
              disabled={page === totalPaginas}
              onClick={() => setPage((p) => p + 1)}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center disabled:opacity-30 hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
