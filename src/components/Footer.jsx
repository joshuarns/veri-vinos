import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-background pt-16 pb-8 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20 mb-12">

          {/* Col izquierda: Veri + descripción + email */}
          <div className="max-w-sm">
            <h2 className="font-display-script text-primary mb-6" style={{ fontSize: '64px', lineHeight: 1 }}>
              Veri
            </h2>
            <p className="font-bold text-primary text-sm leading-relaxed mb-4">
              Dedicados a la preservación y promoción de la cultura vinícola artesanal italiana. Calidad sin compromisos.
            </p>
            <p className="font-bold text-primary text-sm mb-8">
              Reciba invitaciones a catas privadas y lanzamientos exclusivos.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="border-b border-primary pb-1">
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-full outline-none text-sm text-primary placeholder:text-primary font-bold"
              />
            </form>
          </div>

          {/* Col Catálogo + redes */}
          <div className="text-center">
            <h5 className="font-bold text-primary uppercase tracking-[0.1em] text-sm mb-6"
                style={{ fontFamily: 'Metropolis, sans-serif' }}>
              Catálogo
            </h5>
            <ul className="space-y-3 text-primary text-sm mb-8">
              <li><a href="#" className="hover:underline">Vinos Tintos</a></li>
              <li><a href="#" className="hover:underline">Vinos Blancos</a></li>
              <li><a href="#" className="hover:underline">Espumosos</a></li>
              <li><a href="#" className="hover:underline">Cestas Regalo</a></li>
            </ul>
            <div className="space-y-2 text-primary text-sm">
              <p><a href="#" className="underline underline-offset-2 hover:opacity-70">Instagram</a></p>
              <p><a href="#" className="underline underline-offset-2 hover:opacity-70">Linkdin</a></p>
            </div>
          </div>

          {/* Col Compañía */}
          <div className="text-center">
            <h5 className="font-bold text-primary uppercase tracking-[0.1em] text-sm mb-6"
                style={{ fontFamily: 'Metropolis, sans-serif' }}>
              Compañía
            </h5>
            <ul className="space-y-3 text-primary text-sm">
              <li><a href="#" className="hover:underline">Nuestra Bodega</a></li>
              <li><a href="#" className="hover:underline">Sostenibilidad</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
              <li><a href="#" className="hover:underline">Puntos de Venta</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-caps text-primary text-[10px] tracking-widest">
            ©2024 VERI. TRADICIÓN EMBOTELLADA.
          </p>
          <div className="flex gap-8 font-label-caps text-primary text-[10px] tracking-widest">
            <a href="#" className="hover:underline">PRIVACIDAD</a>
            <a href="#" className="hover:underline">LEGAL</a>
            <a href="#" className="hover:underline">COOKIES</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
