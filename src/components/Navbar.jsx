import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import veriNegro from '../assets/img/veri_negro.svg'

export default function Navbar({ barVisible = false }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset
      if (current > 50) {
        setScrolled(true)
        setHidden(current > lastScroll.current)
      } else {
        setScrolled(false)
        setHidden(false)
      }
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { pathname } = useLocation()

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 bg-surface border-b border-outline-variant/20 transition-all duration-300 ${scrolled ? 'py-3 top-0' : `py-4 ${barVisible ? 'top-[38px]' : 'top-0'}`} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex items-center justify-between w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

          {/* Izquierda: hamburger + VERI */}
          <div className="flex items-center gap-4">
            <button
              className="p-1 hover:opacity-60 transition-opacity text-on-surface"
              onClick={() => setDrawerOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
            <Link to="/">
              <img
                src={veriNegro}
                alt="Veri"
                className="transition-all duration-300"
                style={{ height: scrolled ? '28px' : '32px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Derecha: links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-label-caps tracking-widest text-[11px] transition-colors ${pathname === '/' ? 'text-primary' : 'text-[#000] hover:text-primary'}`}>INICIO</Link>
            <Link to="/productores" className={`font-label-caps tracking-widest text-[11px] transition-colors ${pathname === '/productores' ? 'text-primary' : 'text-[#000] hover:text-primary'}`}>PRODUCTORES</Link>
            <Link to="/tienda" className={`font-label-caps tracking-widest text-[11px] transition-colors ${pathname === '/tienda' ? 'text-primary' : 'text-[#000] hover:text-primary'}`}>VINOS</Link>
          </div>

        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 z-[55] transition-opacity duration-500 ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 w-full md:w-96 z-[60] bg-surface-container-low transform transition-transform duration-500 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-12 h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-display-script text-headline-md text-secondary">Veri Vinos</h2>
              <button className="p-2" onClick={() => setDrawerOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <a className="text-headline-sm font-light hover:text-secondary transition-colors" href="#">Nosotros</a>
              <a className="text-headline-sm font-light hover:text-secondary transition-colors" href="#">News</a>
              <a className="text-headline-sm font-light hover:text-secondary transition-colors" href="#">Contacto</a>
              <a className="text-headline-sm font-light hover:text-secondary transition-colors" href="#">Gourmet</a>
              <a className="text-headline-sm font-light hover:text-secondary transition-colors" href="#">Aprende (FAQ)</a>
            </nav>
          </div>
          <div className="border-t border-outline-variant/30 pt-8">
            <p className="font-label-caps text-on-surface-variant text-[10px] mb-4">SÍGUENOS</p>
            <div className="flex gap-4">
              <span className="font-body-md text-sm">Instagram</span>
              <span className="font-body-md text-sm">Facebook</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
