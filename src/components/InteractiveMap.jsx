import { useState } from 'react'

// ViewBox 0 0 300 410 — Italy approximate silhouette
const MAINLAND =
  'M 62,18 L 110,8 L 168,6 L 226,12 L 258,40 ' +
  'L 255,68 L 244,94 L 238,124 L 240,154 ' +
  'L 247,184 L 253,213 L 258,242 L 262,265 ' +
  'L 270,286 L 266,312 L 250,332 L 232,340 ' +
  'L 215,332 L 205,310 L 198,284 L 190,260 ' +
  'L 178,242 L 162,230 L 143,226 L 122,228 ' +
  'L 102,236 L 85,248 L 78,262 L 84,276 ' +
  'L 96,282 L 86,296 L 70,304 L 52,300 ' +
  'L 38,284 L 34,265 L 40,246 L 52,228 ' +
  'L 58,208 L 59,185 L 51,162 L 43,140 ' +
  'L 35,116 L 32,90 L 36,66 L 46,44 Z'

const SICILY =
  'M 22,362 L 68,350 L 126,352 L 164,366 ' +
  'L 160,386 L 122,395 L 68,393 L 26,380 Z'

const regionData = {
  piemonte: {
    name: 'Piemonte',
    desc: 'Vinos con cuerpo y taninos profundos. Terroir arcilloso-calcáreo de tradición secular.',
    path: 'M 62,18 L 110,8 L 122,40 L 120,68 L 102,84 L 68,87 L 40,74 L 35,50 Z',
  },
  veneto: {
    name: 'Veneto',
    desc: 'Hogar del Prosecco y la diversidad climática. Frescura alpina embotellada.',
    path: 'M 140,8 L 168,6 L 226,12 L 258,40 L 255,68 L 240,80 L 200,77 L 165,72 L 148,52 L 142,28 Z',
  },
  toscana: {
    name: 'Toscana',
    desc: 'Cuna del Sangiovese. Colinas soleadas y elegancia atemporal del Chianti.',
    path: 'M 45,95 L 102,84 L 150,92 L 154,126 L 148,158 L 136,186 L 113,200 L 86,200 L 62,192 L 46,174 L 44,148 Z',
  },
  puglia: {
    name: 'Puglia',
    desc: 'Sol mediterráneo puro, vinos estructurados y olivos milenarios.',
    path: 'M 190,260 L 258,248 L 270,270 L 268,300 L 260,325 L 248,338 L 228,344 L 212,334 L 204,310 L 196,285 L 192,263 Z',
  },
  sicilia: {
    name: 'Sicilia',
    desc: 'Carácter volcánico e mineralidad intensa. La fuerza del Etna en cada copa.',
    path: 'M 22,362 L 68,350 L 126,352 L 164,366 L 160,386 L 122,395 L 68,393 L 26,380 Z',
  },
}

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState('puglia')
  const region = regionData[activeRegion]

  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Col izquierda: mapa + card flotante */}
          <div className="relative flex justify-center">

            <svg
              viewBox="0 0 300 410"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[240px] md:max-w-[280px] h-auto"
            >
              {/* Silueta base de Italia */}
              <path d={MAINLAND} fill="#1b3a22" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <path d={SICILY}   fill="#1b3a22" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Regiones interactivas */}
              {Object.entries(regionData).map(([id, data]) => (
                <path
                  key={id}
                  d={data.path}
                  fill={activeRegion === id ? 'rgba(180,60,75,0.55)' : 'transparent'}
                  stroke={activeRegion === id ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.08)'}
                  strokeWidth="0.8"
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveRegion(id)}
                  onClick={() => setActiveRegion(id)}
                />
              ))}
            </svg>

            {/* Tarjeta flotante glassmorphism */}
            <div className="absolute bottom-4 right-0 md:-right-10 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 w-[190px] hidden md:block">
              <p className="font-label-caps text-secondary text-[9px] tracking-[0.3em] mb-3">
                REGIÓN SELECCIONADA
              </p>
              <span className="text-secondary text-xl leading-none block mb-2">☆</span>
              <h4
                className="text-white font-bold uppercase text-xs tracking-widest mb-2"
                style={{ fontFamily: 'Metropolis, sans-serif' }}
              >
                {region.name}
              </h4>
              <p className="text-white/65 text-[11px] leading-relaxed mb-4">
                {region.desc}
              </p>
              <a
                href="/tienda"
                className="text-white text-[10px] font-label-caps tracking-widest underline underline-offset-4 hover:text-secondary transition-colors"
              >
                Explorar Vinos
              </a>
            </div>

          </div>

          {/* Col derecha: texto + chips */}
          <div>
            <span className="font-label-caps text-secondary block mb-5 tracking-[0.35em] text-[11px]">
              TERROIR DE EXCELENCIA
            </span>
            <h3
              className="font-display-script text-white mb-8"
              style={{ fontSize: 'clamp(44px, 7vw, 76px)', lineHeight: 1.05 }}
            >
              Explora las Regiones
            </h3>
            <p className="text-white/65 mb-12 leading-relaxed max-w-md" style={{ fontFamily: 'Metropolis, sans-serif', fontSize: '15px' }}>
              Cada rincón de Italia respira una esencia distinta. Desde los Alpes en el norte hasta el sol abrasador de Sicilia, descubra cómo el paisaje define el sabor.
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(regionData).map(([id, data]) => (
                <button
                  key={id}
                  onClick={() => setActiveRegion(id)}
                  className={`px-5 py-2 rounded-full text-[11px] font-label-caps tracking-widest transition-all duration-200 ${
                    activeRegion === id
                      ? 'bg-white text-primary'
                      : 'border border-white/30 text-white hover:border-white/60 hover:bg-white/5'
                  }`}
                >
                  {data.name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
