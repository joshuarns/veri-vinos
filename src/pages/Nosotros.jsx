import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import davideImg from '../assets/img/Davide-Merlini.jpeg'
import eneidaImg from '../assets/img/eneida-fuentes.jpeg'

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20">

        {/* ── HERO ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-16">
          <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-6">
            NOSOTROS
          </p>
          <h1
            className="font-display-script text-primary leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            Las personas detrás<br />
            <span className="italic">de la selección</span>
          </h1>
          <div className="w-10 h-px bg-secondary mb-6" />
          <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed text-lg">
            Veri se construye sobre relaciones: con los productores, con los restaurantes que reciben sus vinos
            y entre quienes lo hacemos posible. Detrás de cada botella hay una mirada, y aquí conviven tres complementarias:
            el origen del proyecto, el conocimiento del viñedo y la experiencia de la mesa.
          </p>
        </section>

        {/* ── CITA ── */}
        <section className="bg-surface-container py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center my-4">
          <span className="material-symbols-outlined text-secondary text-4xl mb-4">format_quote</span>
          <blockquote
            className="font-display-script text-primary max-w-2xl leading-snug"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
          >
            «Nos une una convicción sencilla: el vino se entiende mejor cuando se conoce a quien lo hace.»
          </blockquote>
        </section>

        {/* ── EQUIPO ── */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="space-y-8">

            {/* Rolly — sin foto: card ancha centrada */}
            <article className="border border-outline-variant/30 bg-surface-container-lowest rounded-lg p-8 md:p-12 max-w-2xl mx-auto text-center shadow-sm">
              <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em] mb-3">
                FUNDADOR & CURADOR
              </p>
              <h3
                className="font-display-script text-primary mb-4"
                style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
              >
                Rolly Pavia
              </h3>
              <div className="w-8 h-px bg-secondary mx-auto mb-6" />
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                Con una herencia que une a México e Italia y más de 25 años como restaurantero, Rolly Pavia ha formado su mirada
                sobre el vino italiano en la mesa y en el trato directo con los productores. Veri nace de esa trayectoria:
                primero como una búsqueda personal y hoy como una selección pensada para compartirse. Su criterio privilegia
                a los productores que trabajan la viña con filosofía propia y guían su oficio desde la convicción,
                con un compromiso absoluto con la tierra y con lo que llega a la copa.
              </p>
            </article>

            {/* Davide — foto izquierda */}
            <article className="border border-outline-variant/30 bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch">
              <div className="w-full sm:w-48 shrink-0 h-64 sm:h-auto overflow-hidden">
                <img
                  src={davideImg}
                  alt="Davide Merlini"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 10%', transform: 'scale(0.9)', transformOrigin: 'top center' }}
                />
              </div>
              <div className="flex flex-col justify-center p-8 gap-3">
                <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em]">
                  HEAD SOMMELIER
                </p>
                <h3
                  className="font-display-script text-primary leading-tight"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 38px)' }}
                >
                  Davide Merlini
                </h3>
                <div className="w-6 h-px bg-secondary" />
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  Con más de veinte años en la alta restauración y la hostelería de lujo, Davide Merlini entiende el vino
                  como un encuentro: con quienes trabajan la tierra, con sus historias y con las personas que lo comparten
                  en la mesa. Viaja, visita bodegas y camina entre las vides para construir relaciones basadas en la
                  confianza y el respeto. Su camino se cruzó con el de Rolly en 2010.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20">
                  {['Beverage Manager', 'Head Sommelier', 'Formador y juez internacional'].map((c) => (
                    <span key={c} className="font-label-caps text-[9px] bg-surface-container px-2 py-1 rounded text-on-surface-variant tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Eneida — foto derecha */}
            <article className="border border-outline-variant/30 bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row-reverse items-stretch">
              <div className="w-full sm:w-48 shrink-0 h-64 sm:h-auto overflow-hidden">
                <img
                  src={eneidaImg}
                  alt="Eneida Fuentes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center p-8 gap-3">
                <p className="font-label-caps text-secondary text-[10px] tracking-[0.3em]">
                  SOMMELIER
                </p>
                <h3
                  className="font-display-script text-primary leading-tight"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 38px)' }}
                >
                  Eneida Fuentes
                </h3>
                <div className="w-6 h-px bg-secondary" />
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  Sommelier con más de 15 años de experiencia internacional en hospitalidad, Eneida Fuentes crea paisajes
                  enológicos que expresan, resaltan y acompañan el alma de cada restaurante. Su acercamiento al vino parte
                  del respeto por la tierra y de la promoción de su conservación, conectando distintos terroirs con una
                  experiencia consciente y significativa.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20">
                  {['Ex directora de bebidas de Pujol', 'CMB 2024', 'WSET Nivel 3', 'Court of Master Sommeliers'].map((c) => (
                    <span key={c} className="font-label-caps text-[9px] bg-surface-container px-2 py-1 rounded text-on-surface-variant tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-surface-container py-20 px-margin-mobile md:px-margin-desktop text-center">
          <p className="font-label-caps text-secondary text-[10px] tracking-[0.35em] mb-4">
            CATÁLOGO
          </p>
          <h2
            className="font-display-script text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Descubre nuestra selección<br />
            <span className="italic">de vinos vivos</span>
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
            Lotes de producción limitada de pequeños viticultores que respetan el ritmo de su tierra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/productores"
              className="bg-primary text-on-primary font-label-caps px-10 py-4 tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              EXPLORAR PRODUCTORES
            </Link>
            <Link
              to="/tienda"
              className="border border-primary text-primary font-label-caps px-10 py-4 tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all"
            >
              VER VINOS
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
