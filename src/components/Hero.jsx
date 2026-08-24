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
          className="mx-auto hero-text-shadow"
          style={{ width: 'clamp(240px, 40vw, 520px)' }}
        />
      </div>

      {/* Botones — donde estaba el Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-12">
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
    </header>
  )
}
