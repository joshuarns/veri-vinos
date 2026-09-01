import { useState, useEffect, useRef } from 'react'
import italySvgRaw from '../assets/italyHigh.svg?raw'
import insignia from '../assets/img/470D3B7B-BA84-45D7-9BA2-6840CEE1D902_4_5005.png'

// amCharts SVG region IDs → interactive region keys
const REGION_IDS = {
  piemonte: 'IT-21',
  veneto:   'IT-34',
  toscana:  'IT-52',
  puglia:   'IT-75',
  sicilia:  'IT-82',
}

// All Italian region IDs in the SVG
const ALL_ITALY = [
  'IT-21','IT-23','IT-25','IT-32','IT-34','IT-36',
  'IT-42','IT-45','IT-52','IT-55','IT-57','IT-62',
  'IT-65','IT-67','IT-72','IT-75','IT-77','IT-78',
  'IT-82','IT-88',
]

// Non-Italian territories to hide
const HIDE_IDS = ['FR-H', 'MT', 'SM', 'VA']

const regionData = {
  piemonte: {
    name: 'Piemonte',
    desc: 'Vinos con cuerpo y taninos profundos. Terroir arcilloso-calcáreo de tradición secular.',
  },
  veneto: {
    name: 'Veneto',
    desc: 'Hogar del Prosecco y la diversidad climática. Frescura alpina embotellada.',
  },
  toscana: {
    name: 'Toscana',
    desc: 'Cuna del Sangiovese. Colinas soleadas y elegancia atemporal del Chianti.',
  },
  puglia: {
    name: 'Puglia',
    desc: 'Sol mediterráneo puro, vinos estructurados y olivos milenarios.',
  },
  sicilia: {
    name: 'Sicilia',
    desc: 'Carácter volcánico e mineralidad intensa. La fuerza del Etna en cada copa.',
  },
}

const INTERACTIVE_IDS = new Set(Object.values(REGION_IDS))
const C_BG       = '#ffffff4d'  // white 30% — non-interactive regions
const C_INACTIVE = '#ffffff4d'  // white 30% — interactive but not active
const C_ACTIVE   = '#8B1A2B'   // burgundy — active region

export default function InteractiveMap() {
  const [active, setActive] = useState('puglia')
  const containerRef = useRef(null)
  const region = regionData[active]

  // Mount: configure SVG, hide non-Italy, add event listeners
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const svg = root.querySelector('svg')
    if (!svg) return

    // Make SVG fully responsive
    svg.removeAttribute('width')
    svg.removeAttribute('height')
    svg.style.width  = '100%'
    svg.style.height = 'auto'
    svg.style.display = 'block'

    // Hide / neutralize non-Italian territories
    HIDE_IDS.forEach(id => {
      const el = svg.querySelector(`#${id}`)
      if (el) { el.style.fill = 'transparent'; el.style.stroke = 'transparent' }
    })

    // Color non-interactive Italian regions
    ALL_ITALY.forEach(id => {
      if (!INTERACTIVE_IDS.has(id)) {
        const el = svg.querySelector(`#${id}`)
        if (el) { el.style.fill = C_BG; el.setAttribute('stroke', '#ffffff'); el.setAttribute('stroke-width', '0.7') }
      }
    })

    // Style & wire interactive regions
    const cleanups = []
    Object.entries(REGION_IDS).forEach(([key, svgId]) => {
      const el = svg.querySelector(`#${svgId}`)
      if (!el) return
      el.setAttribute('stroke', '#ffffff')
      el.setAttribute('stroke-width', '0.7')
      el.style.cursor = 'pointer'
      el.style.transition = 'fill 0.2s'

      const handler = () => setActive(key)
      el.addEventListener('click', handler)
      el.addEventListener('mouseenter', handler)
      cleanups.push(() => {
        el.removeEventListener('click', handler)
        el.removeEventListener('mouseenter', handler)
      })
    })

    return () => cleanups.forEach(fn => fn())
  }, [])

  // Update fill colors whenever active changes
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const svg = root.querySelector('svg')
    if (!svg) return

    Object.entries(REGION_IDS).forEach(([key, svgId]) => {
      const el = svg.querySelector(`#${svgId}`)
      if (el) el.style.fill = active === key ? C_ACTIVE : C_INACTIVE
    })
  }, [active])

  return (
    <section className="relative py-20 md:py-28" style={{ backgroundColor: '#3A3A3A' }}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Título centrado */}
        <div className="text-center mb-14">
          <h3
            className="uppercase mb-0"
            style={{ fontFamily: "'Anko', serif", fontWeight: 400, fontSize: 'clamp(30px, 5vw, 60px)', letterSpacing: '0.04em', color: '#FDB814' }}
          >
            Explora las Regiones
          </h3>
        </div>

        {/* 3 columnas: lista | mapa | tarjeta */}
        <div className="relative flex items-start justify-center gap-8 md:gap-14">

          {/* Grupo mapa + lista desplazado 5% a la izquierda */}
          <div className="flex items-start gap-8 md:gap-14" style={{ transform: 'translateX(-15%)' }}>

          {/* Col 1: lista de regiones */}
          <div className="hidden md:flex flex-col gap-7 pt-36 min-w-[100px] flex-shrink-0">
            {Object.entries(regionData).map(([id, data]) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`text-left font-bold text-xs tracking-[0.2em] uppercase transition-all ${
                  active === id ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
                style={{ fontFamily: 'Metropolis, sans-serif' }}
              >
                {data.name}
              </button>
            ))}
          </div>

          {/* Col 2: mapa SVG real */}
          <div
            ref={containerRef}
            className="flex-shrink-0 w-[200px] md:w-[280px] lg:w-[340px]"
            dangerouslySetInnerHTML={{ __html: italySvgRaw }}
          />

          </div>{/* fin grupo mapa+lista */}

          {/* Col 3: tarjeta de región — absoluta a la derecha */}
          <div className="hidden md:flex flex-col items-center text-center rounded-2xl p-7 w-[280px] flex-shrink-0 mt-24 bg-primary absolute right-0 top-0">
            <p
              className="text-white/60 text-[9px] font-bold tracking-[0.28em] uppercase mb-5 leading-relaxed"
              style={{ fontFamily: 'Metropolis, sans-serif' }}
            >
              REGIÓN<br />SELECCIONADA
            </p>
            <span className="text-4xl mb-4 leading-none" style={{ color: '#FDB814' }}>☆</span>
            <h4
              className="text-white font-display-script uppercase text-base tracking-widest mb-4"
              style={{}}
            >
              {region.name}
            </h4>
            <p className="text-white font-bold text-sm leading-relaxed mb-8">
              {region.desc}
            </p>
            <a
              href="/tienda"
              className="text-xs underline underline-offset-4 transition-colors"
              style={{ fontFamily: 'Metropolis, sans-serif', color: '#FDB814' }}
            >
              Explorar Vinos
            </a>
          </div>

        </div>

        {/* Chips solo en móvil */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 md:hidden">
          {Object.entries(regionData).map(([id, data]) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border transition-all ${
                active === id ? 'border-transparent text-[#3A3A3A]' : 'border-white/30 text-white/60'
              }`}
              style={{ fontFamily: 'Metropolis, sans-serif', ...(active === id ? { backgroundColor: '#FDB814' } : {}) }}
            >
              {data.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
