import { useState } from 'react'

// viewBox 0 0 285 525
const MAINLAND =
  'M 22,195 L 55,165 L 80,178 L 88,215 L 105,255 L 98,282 ' +
  'L 122,292 L 138,300 L 162,330 L 180,360 L 198,360 ' +
  'L 210,400 L 220,468 L 215,498 L 228,502 L 238,472 ' +
  'L 248,445 L 252,418 L 252,375 L 272,368 L 283,390 ' +
  'L 280,408 L 270,398 L 258,342 L 252,310 L 256,285 ' +
  'L 250,260 L 238,230 L 220,190 L 188,140 L 170,100 ' +
  'L 170,88 L 135,10 L 100,12 L 65,30 L 35,90 L 22,135 Z'

const SICILY =
  'M 108,507 L 138,498 L 178,498 L 210,508 L 205,520 ' +
  'L 170,524 L 132,522 L 108,514 Z'

const SARDINIA =
  'M 32,318 L 58,308 L 75,316 L 82,340 L 82,378 ' +
  'L 72,412 L 50,425 L 30,418 L 22,392 L 24,355 L 28,332 Z'

// Non-interactive background regions for province-style visual texture
const BG_REGIONS = [
  // Lombardia
  'M 82,115 L 65,78 L 65,30 L 100,12 L 130,12 L 145,28 L 145,62 L 138,82 L 118,108 Z',
  // Veneto / Trentino / Friuli
  'M 130,12 L 170,88 L 170,100 L 148,112 L 125,108 L 138,82 L 145,62 L 145,28 Z',
  // Emilia-Romagna
  'M 80,148 L 82,115 L 118,108 L 148,112 L 170,100 L 188,140 L 165,152 L 135,155 L 105,150 L 80,148 Z',
  // Marche / Abruzzo (adriatic side)
  'M 188,140 L 220,190 L 225,218 L 218,248 L 210,265 L 198,262 L 185,240 L 175,215 L 172,188 L 172,162 L 178,148 Z',
  // Umbria / inner center
  'M 155,195 L 172,188 L 185,198 L 188,222 L 180,245 L 165,255 L 148,250 L 140,232 L 140,210 Z',
  // Lazio
  'M 122,292 L 138,300 L 162,295 L 175,308 L 172,335 L 162,348 L 140,352 L 118,340 L 105,320 L 105,300 Z',
  // Molise (small)
  'M 198,262 L 210,265 L 215,280 L 208,295 L 196,298 L 185,288 L 185,272 Z',
  // Campania
  'M 140,352 L 162,348 L 180,360 L 198,360 L 205,380 L 200,400 L 182,410 L 162,408 L 145,395 L 135,375 L 132,358 Z',
  // Basilicata (small inner)
  'M 182,410 L 205,402 L 218,412 L 222,432 L 212,445 L 195,445 L 178,432 Z',
  // Calabria
  'M 195,445 L 212,445 L 222,468 L 215,498 L 208,500 L 195,488 L 182,468 L 178,450 Z',
]

const regionData = {
  piemonte: {
    name: 'Piemonte',
    desc: 'Vinos con cuerpo y taninos profundos. Terroir arcilloso-calcáreo de tradición secular.',
    path: 'M 22,195 L 55,165 L 80,148 L 82,115 L 65,78 L 65,30 L 35,90 L 22,135 Z',
  },
  veneto: {
    name: 'Veneto',
    desc: 'Hogar del Prosecco y la diversidad climática. Frescura alpina embotellada.',
    path: 'M 130,12 L 170,88 L 170,100 L 145,112 L 125,108 L 138,82 L 145,62 L 145,28 Z',
  },
  toscana: {
    name: 'Toscana',
    desc: 'Cuna del Sangiovese. Colinas soleadas y elegancia atemporal del Chianti.',
    path: 'M 80,178 L 122,168 L 152,178 L 158,210 L 152,248 L 140,272 L 118,285 L 95,282 L 70,265 L 55,242 L 52,212 L 65,195 Z',
  },
  puglia: {
    name: 'Puglia',
    desc: 'Sol mediterráneo puro, vinos estructurados y olivos milenarios.',
    path: 'M 198,262 L 252,310 L 258,342 L 272,368 L 283,390 L 280,408 L 270,398 L 252,375 L 248,350 L 240,325 L 228,302 L 212,282 L 200,268 Z',
  },
  sicilia: {
    name: 'Sicilia',
    desc: 'Carácter volcánico e mineralidad intensa. La fuerza del Etna en cada copa.',
    path: 'M 108,507 L 138,498 L 178,498 L 210,508 L 205,520 L 170,524 L 132,522 L 108,514 Z',
  },
}

const INACTIVE_FILL  = '#dba8b2'
const ACTIVE_FILL    = '#8B1A2B'
const BG_FILL        = '#e8c4cb'

export default function InteractiveMap() {
  const [active, setActive] = useState('puglia')
  const region = regionData[active]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header centrado */}
        <div className="text-center mb-16">
          <p
            className="text-primary font-bold text-xs tracking-[0.35em] mb-4 uppercase"
            style={{ fontFamily: 'Metropolis, sans-serif' }}
          >
            Terroir de Excelencia
          </p>
          <h3
            className="text-primary font-bold uppercase mb-6"
            style={{ fontFamily: 'Metropolis, sans-serif', fontSize: 'clamp(32px, 6vw, 64px)', letterSpacing: '0.04em' }}
          >
            Explora las Regiones
          </h3>
          <p className="text-primary mx-auto max-w-xl leading-relaxed" style={{ fontFamily: 'Metropolis, sans-serif', fontSize: '15px' }}>
            Cada rincón de Italia respira una esencia distinta. Desde los Alpes en el norte hasta el sol abrasador de Sicilia, descubra cómo el paisaje define el sabor.
          </p>
        </div>

        {/* 3 columnas: lista | mapa | tarjeta */}
        <div className="flex items-start justify-center gap-10 md:gap-16">

          {/* Col izquierda: lista de regiones */}
          <div className="hidden md:flex flex-col gap-6 pt-24 min-w-[110px]">
            {Object.entries(regionData).map(([id, data]) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`text-left font-bold text-sm tracking-widest uppercase transition-all ${
                  active === id ? 'text-primary' : 'text-primary/30 hover:text-primary/60'
                }`}
                style={{ fontFamily: 'Metropolis, sans-serif' }}
              >
                {data.name}
              </button>
            ))}
          </div>

          {/* Col centro: mapa SVG */}
          <div className="flex-shrink-0">
            <svg
              viewBox="0 0 285 525"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[200px] md:w-[240px] lg:w-[280px] h-auto"
            >
              {/* Silueta completa de fondo */}
              <path d={MAINLAND}  fill={BG_FILL}  stroke="white" strokeWidth="0.5" />
              <path d={SICILY}    fill={BG_FILL}  stroke="white" strokeWidth="0.5" />
              <path d={SARDINIA}  fill={BG_FILL}  stroke="white" strokeWidth="0.5" />

              {/* Regiones de textura (no interactivas) */}
              {BG_REGIONS.map((d, i) => (
                <path key={i} d={d} fill={BG_FILL} stroke="white" strokeWidth="0.8" />
              ))}

              {/* Regiones interactivas */}
              {Object.entries(regionData).map(([id, data]) => (
                <path
                  key={id}
                  d={data.path}
                  fill={active === id ? ACTIVE_FILL : INACTIVE_FILL}
                  stroke="white"
                  strokeWidth="0.8"
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => setActive(id)}
                  onClick={() => setActive(id)}
                />
              ))}
            </svg>
          </div>

          {/* Col derecha: tarjeta de región */}
          <div className="hidden md:flex flex-col items-center text-center bg-primary rounded-2xl p-7 w-[195px] flex-shrink-0 mt-8">
            <p className="text-white/70 text-[9px] font-bold tracking-[0.3em] uppercase mb-3 leading-relaxed"
               style={{ fontFamily: 'Metropolis, sans-serif' }}>
              REGIÓN<br />SELECCIONADA
            </p>
            <span className="text-white text-3xl mb-3 leading-none">☆</span>
            <h4
              className="text-white font-bold uppercase text-sm tracking-widest mb-3"
              style={{ fontFamily: 'Metropolis, sans-serif' }}
            >
              {region.name}
            </h4>
            <p className="text-white font-bold text-xs leading-relaxed mb-5">
              {region.desc}
            </p>
            <a
              href="/tienda"
              className="text-white text-xs underline underline-offset-4 hover:text-secondary transition-colors"
              style={{ fontFamily: 'Metropolis, sans-serif' }}
            >
              Explorar Vinos
            </a>
          </div>

        </div>

        {/* Chips móvil */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 md:hidden">
          {Object.entries(regionData).map(([id, data]) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border transition-all ${
                active === id ? 'bg-primary text-white border-primary' : 'border-primary/30 text-primary'
              }`}
              style={{ fontFamily: 'Metropolis, sans-serif' }}
            >
              {data.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
