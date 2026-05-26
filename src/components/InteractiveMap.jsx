import { useState } from 'react'

const ITALY_MAINLAND =
  'M 20,25 L 90,12 L 160,10 L 220,12 L 270,28 L 280,55 L 268,85 ' +
  'L 252,118 L 248,158 L 250,198 L 255,238 L 260,278 L 268,315 ' +
  'L 275,352 L 265,385 L 250,418 L 232,442 L 212,452 L 192,444 ' +
  'L 175,428 L 162,408 L 152,382 L 145,352 L 140,322 L 136,292 ' +
  'L 132,262 L 128,232 L 122,200 L 115,170 L 108,145 L 95,125 ' +
  'L 78,118 L 58,120 L 40,122 L 24,108 L 11,88 L 9,62 L 14,38 Z'

const ITALY_SICILY =
  'M 30,470 L 86,455 L 148,458 L 190,474 L 186,497 L 153,510 ' +
  'L 96,512 L 48,502 L 24,488 Z'

const regionData = {
  piemonte: {
    name: 'Piemonte',
    details: ['• Vinos con cuerpo y taninos', '• Terroir arcilloso-calcáreo', '• Tradición secular'],
    path:
      'M 20,25 L 90,12 L 124,32 L 130,70 L 112,92 L 60,98 L 22,84 L 11,62 Z',
  },
  veneto: {
    name: 'Veneto',
    details: ['• Hogar del Prosecco', '• Diversidad climática', '• Frescura alpina'],
    path:
      'M 158,10 L 220,12 L 270,28 L 280,55 L 268,85 L 214,88 L 168,80 L 150,56 L 153,28 Z',
  },
  toscana: {
    name: 'Toscana',
    details: ['• Cuna del Sangiovese', '• Colinas soleadas', '• Elegancia atemporal'],
    path:
      'M 52,132 L 112,118 L 152,128 L 158,168 L 154,208 L 146,244 L 122,260 L 85,260 L 56,240 L 46,205 L 48,168 Z',
  },
  puglia: {
    name: 'Puglia',
    details: ['• Sol mediterráneo puro', '• Vinos estructurados', '• Olivos milenarios'],
    path:
      'M 192,278 L 255,266 L 278,290 L 276,338 L 262,378 L 246,415 ' +
      'L 228,442 L 208,450 L 190,438 L 184,408 L 186,372 L 190,335 Z',
  },
  sicilia: {
    name: 'Sicilia',
    details: ['• Carácter volcánico', '• Mineralidad intensa', '• Fuerza del Etna'],
    path:
      'M 30,470 L 86,455 L 148,458 L 190,474 L 186,497 L 153,510 L 96,512 L 48,502 L 24,488 Z',
  },
}

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState('piemonte')
  const region = regionData[activeRegion]

  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="order-2 lg:order-1">
          <div className="relative flex justify-center lg:justify-start">
            <svg
              className="w-full max-w-[280px] md:max-w-[320px] h-auto drop-shadow-xl"
              viewBox="0 0 295 525"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Silueta completa de Italia como fondo */}
              <path d={ITALY_MAINLAND} fill="#152a1a" stroke="#ffffff0d" strokeWidth="1" />
              <path d={ITALY_SICILY}   fill="#152a1a" stroke="#ffffff0d" strokeWidth="1" />

              {/* Regiones interactivas encima */}
              {Object.entries(regionData).map(([id, data]) => (
                <path
                  key={id}
                  d={data.path}
                  fill={activeRegion === id ? '#924753' : '#2A3F30'}
                  stroke="#ffffff18"
                  strokeWidth="0.8"
                  className="transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveRegion(id)}
                  onClick={() => setActiveRegion(id)}
                />
              ))}
            </svg>

            {/* Tarjeta de región seleccionada */}
            <div className="absolute top-1/4 right-0 lg:-right-12 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hidden md:block min-w-[180px]">
              <p className="font-label-caps text-[10px] mb-2 text-secondary-container">REGIÓN SELECCIONADA</p>
              <h4 className="text-2xl font-display-script mb-4">{region.name}</h4>
              <ul className="text-xs space-y-2 opacity-70">
                {region.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <button className="mt-6 text-[10px] font-label-caps border-b border-white/40 pb-1">
                EXPLORAR VINOS
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-label-caps text-secondary-container block mb-4 tracking-[0.4em]">TERROIR DE EXCELENCIA</span>
          <h3 className="font-display-script text-5xl md:text-6xl mb-8">Explora las Regiones</h3>
          <p className="text-white/60 font-body-lg mb-10 leading-relaxed">
            Cada rincón de Italia respira una esencia distinta. Desde los Alpes en el norte hasta el sol abrasador de Sicilia, descubra cómo el paisaje define el sabor.
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(regionData).map(([id, data]) => (
              <button
                key={id}
                className={`px-6 py-2 border rounded-full text-xs font-label-caps transition-all ${
                  activeRegion === id
                    ? 'bg-white text-primary border-white'
                    : 'border-white/20 hover:bg-white hover:text-primary'
                }`}
                onClick={() => setActiveRegion(id)}
              >
                {data.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
