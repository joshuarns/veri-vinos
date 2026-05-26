import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
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

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300 ${scrolled ? 'py-3 top-0' : 'py-5 top-[38px]'} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <button
            className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors text-primary"
            onClick={() => setDrawerOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-display-script text-headline-sm md:text-headline-md text-primary tracking-tighter">VINI VERI</h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-8 mr-8">
              <a className="text-secondary font-label-caps tracking-widest text-[11px] border-b border-secondary" href="#">INICIO</a>
              <a className="text-on-surface-variant/80 font-label-caps tracking-widest text-[11px] hover:text-secondary transition-colors" href="#">PRODUCTORES</a>
              <a className="text-on-surface-variant/80 font-label-caps tracking-widest text-[11px] hover:text-secondary transition-colors" href="#">VINOS</a>
            </div>
            <button className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors text-primary relative">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
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
              <h2 className="font-display-script text-headline-md text-secondary">Vini Veri</h2>
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
