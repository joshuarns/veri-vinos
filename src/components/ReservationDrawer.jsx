import { useEffect, useRef } from 'react'

export default function ReservationDrawer({ open, onClose }) {
  const widgetRef = useRef(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!open || scriptLoaded.current) return
    const script = document.createElement('script')
    script.src = 'https://www.opentable.com.mx/widget/reservation/loader?rid=1436293&type=standard&theme=tall&color=3&dark=false&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website&cfe=true'
    script.type = 'text/javascript'
    script.async = true
    if (widgetRef.current) {
      widgetRef.current.appendChild(script)
      scriptLoaded.current = true
    }
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[65] transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar derecho */}
      <aside
        className={`fixed inset-y-0 right-0 w-full md:w-[420px] z-[70] bg-surface transform transition-transform duration-500 ease-in-out flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/20">
          <div>
            <p className="font-label-caps text-[10px] text-secondary tracking-[0.25em]">VERI VINOS</p>
            <h2 className="font-display-script text-2xl text-primary mt-1">Reservaciones</h2>
          </div>
          <button className="p-2 hover:opacity-60 transition-opacity" onClick={onClose}>
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
        </div>

        {/* Widget OpenTable */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div ref={widgetRef} />
        </div>
      </aside>
    </>
  )
}
