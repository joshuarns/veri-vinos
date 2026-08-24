import { Link } from 'react-router-dom'
import heroBanner from '../assets/img/herobanner-veri-vinos.jpeg'
import veriBlanco from '../assets/img/veri_blanco.svg'
import insignia from '../assets/img/470D3B7B-BA84-45D7-9BA2-6840CEE1D902_4_5005.png'

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

      {/* Insignia — esquina inferior derecha */}
      <img
        src={insignia}
        alt="Insignia Veri"
        className="absolute right-10 z-10"
        style={{ width: '120px', opacity: 0.92, bottom: '19%', right: 'calc(2.5rem + 10%)' }}
      />

      {/* Botones */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-12">
        <Link
          to="/tienda"
          className="font-bold underline underline-offset-4 text-sm md:text-base transition-all duration-300"
          style={{ color: '#ffffff', decorationColor: '#ffffff' }}
        >
          Explorar Vinos
        </Link>
        <Link
          to="/"
          className="font-bold underline underline-offset-4 text-sm md:text-base transition-all duration-300"
          style={{ color: '#ffffff', decorationColor: '#ffffff' }}
        >
          Nuestra Historia
        </Link>
      </div>
    </header>
  )
}
