import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { obtenerNoticia, formatearFecha } from '../api/news'

export default function NewsSingle() {
  const { slug } = useParams()
  const [noticia, setNoticia] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false
    setCargando(true)
    setError(null)
    setNoticia(null)
    obtenerNoticia(slug)
      .then((n) => { if (!cancelado) setNoticia(n) })
      .catch((err) => { if (!cancelado) setError(err) })
      .finally(() => { if (!cancelado) setCargando(false) })
    window.scrollTo(0, 0)
    return () => { cancelado = true }
  }, [slug])

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pt-16">

          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-label-caps text-on-surface-variant hover:text-primary transition-colors mb-10"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Todas las noticias
          </Link>

          {cargando ? (
            <div className="animate-pulse space-y-4">
              <div className="h-3 bg-surface-container rounded w-1/4" />
              <div className="h-10 bg-surface-container rounded w-3/4" />
              <div className="aspect-video bg-surface-container rounded mt-8" />
            </div>
          ) : error ? (
            <p className="font-body-md text-on-surface-variant py-20 text-center">No se pudo cargar la noticia.</p>
          ) : !noticia ? (
            <p className="font-body-md text-on-surface-variant py-20 text-center">Esta noticia no existe.</p>
          ) : (
            <article>
              <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em] mb-6">
                {[noticia.categoria, formatearFecha(noticia.fecha)].filter(Boolean).join(' · ').toUpperCase()}
              </p>
              <h1
                className="font-display-script text-primary leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(30px, 4.5vw, 54px)' }}
              >
                {noticia.titulo}
              </h1>
              <div className="w-10 h-px bg-secondary mb-10" />

              {noticia.imagen && (
                <img src={noticia.imagen} alt={noticia.titulo} className="w-full rounded-lg mb-10" />
              )}

              {/* Contenido HTML del CMS propio (WordPress) */}
              <div
                className="news-content font-body-md text-on-surface-variant leading-relaxed text-base space-y-5 [&_a]:text-primary [&_a]:underline [&_h2]:font-display-script [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:mt-10 [&_h3]:font-display-script [&_h3]:text-primary [&_h3]:text-xl [&_h3]:mt-8 [&_img]:rounded-lg [&_img]:max-w-full [&_img]:h-auto [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l [&_blockquote]:border-secondary [&_blockquote]:pl-5 [&_blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: noticia.contenido }}
              />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
