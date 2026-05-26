import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1">
            <h2 className="font-display-script text-3xl mb-8 tracking-tighter">VINI VERI</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Dedicados a la preservación y promoción de la cultura vinícola artesanal italiana. Calidad sin compromisos.
            </p>
            <div className="flex gap-6">
              <span className="font-label-caps text-[10px] tracking-widest border-b border-white/20 pb-1 cursor-pointer hover:text-secondary-container transition-colors">INSTAGRAM</span>
              <span className="font-label-caps text-[10px] tracking-widest border-b border-white/20 pb-1 cursor-pointer hover:text-secondary-container transition-colors">LINKEDIN</span>
            </div>
          </div>
          <div>
            <h5 className="font-label-caps text-xs tracking-[0.2em] mb-8 text-secondary-container">CATÁLOGO</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a className="hover:text-white transition-colors" href="#">Vinos Tintos</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Vinos Blancos</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Espumosos</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Cestas Regalo</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-xs tracking-[0.2em] mb-8 text-secondary-container">COMPAÑÍA</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a className="hover:text-white transition-colors" href="#">Nuestra Bodega</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Sostenibilidad</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Puntos de Venta</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-xs tracking-[0.2em] mb-8 text-secondary-container">BOLETÍN</h5>
            <p className="text-xs text-white/50 mb-6">Reciba invitaciones a catas privadas y lanzamientos exclusivos.</p>
            <form className="flex border-b border-white/20 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="bg-transparent border-none text-sm w-full outline-none placeholder:text-white/20"
                placeholder="Su email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="text-white hover:text-secondary-container transition-colors" type="submit">
                <span className="material-symbols-outlined">north_east</span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-[10px] text-white/30 tracking-widest uppercase">© 2024 VINI VERI. TRADICIÓN EMBOTELLADA.</p>
          <div className="flex gap-8 text-[10px] text-white/30 tracking-widest uppercase">
            <a className="hover:text-white transition-colors" href="#">Privacidad</a>
            <a className="hover:text-white transition-colors" href="#">Legal</a>
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
