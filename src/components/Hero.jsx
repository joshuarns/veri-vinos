import { Link } from 'react-router-dom'
import heroBanner from '../assets/img/herobanner-veri-vinos.jpeg'
import veriBlanco from '../assets/img/veri_blanco.svg'

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      <img
        alt="Viñedos de Italia"
        className="absolute inset-0 w-full h-full object-cover"
        src={heroBanner}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        <img
          src={veriBlanco}
          alt="Veri"
          className="mx-auto mb-12 hero-text-shadow"
          style={{ width: 'clamp(240px, 40vw, 520px)' }}
        />

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
