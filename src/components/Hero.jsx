import { Link } from 'react-router-dom'
import heroBanner from '../assets/img/hero-banner-home.jpg'

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      <img
        alt="Viñedos de Italia"
        className="absolute inset-0 w-full h-full object-cover"
        src={heroBanner}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* "Veri" — gran script italic */}
        <h1 className="font-display-script text-white leading-[0.85] hero-text-shadow mb-4"
            style={{ fontSize: 'clamp(100px, 20vw, 220px)' }}>
          Veri
        </h1>

        {/* Eyebrow */}
        <p className="font-label-caps text-white/80 tracking-[0.35em] text-[11px] mb-4 uppercase">
          Exclusividad en cada gota
        </p>

        {/* SELEZIONE — bold uppercase sin italic */}
        <h2 className="text-white font-bold uppercase tracking-[0.12em] mb-8"
            style={{ fontFamily: 'Metropolis, sans-serif', fontSize: 'clamp(32px, 6vw, 72px)' }}>
          Selezione
        </h2>

        {/* Descripción */}
        <p className="text-white/70 font-body-md text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Una curaduría artesanal de los viñedos más puros de Italia, traídos directamente a su mesa con respeto por la tradición.
        </p>

        {/* Links estilo subrayado como en el PDF */}
        <div className="flex items-center justify-center gap-12">
          <Link
            to="/tienda"
            className="font-body-md text-white underline underline-offset-4 decoration-white/50 hover:decoration-white text-sm md:text-base transition-all duration-300"
          >
            Explorar Vinos
          </Link>
          <Link
            to="/"
            className="font-body-md text-white underline underline-offset-4 decoration-white/50 hover:decoration-white text-sm md:text-base transition-all duration-300"
          >
            Nuestra Historia
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-label-caps text-white text-[9px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </header>
  )
}
