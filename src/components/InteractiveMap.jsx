import { useState } from 'react'

const regionData = {
  piemonte: { name: 'Piedmonte', details: ['• Vinos con cuerpo y taninos', '• Terroir arcilloso-calcáreo', '• Tradición secular'] },
  toscana:  { name: 'Toscana',   details: ['• Cuna del Sangiovese', '• Colinas soleadas', '• Elegancia atemporal'] },
  veneto:   { name: 'Veneto',    details: ['• Hogar del Prosecco', '• Diversidad climática', '• Frescura alpina'] },
  puglia:   { name: 'Puglia',    details: ['• Sol mediterráneo puro', '• Vinos estructurados', '• Olivos milenarios'] },
  sicilia:  { name: 'Sicilia',   details: ['• Carácter volcánico', '• Mineralidad intensa', '• Fuerza del Etna'] },
}

const regionPaths = {
  piemonte: 'M120,50 L180,40 L220,80 L200,150 L150,180 L100,120 Z',
  veneto:   'M220,80 L280,60 L320,100 L300,160 L240,140 Z',
  toscana:  'M200,150 L260,180 L280,280 L220,320 L160,280 L180,200 Z',
  puglia:   'M220,320 L320,400 L380,450 L340,550 L280,520 L240,400 Z',
  sicilia:  'M100,450 L180,420 L220,480 L180,550 L120,530 Z',
}

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState('piemonte')
  const region = regionData[activeRegion]

  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative flex justify-center lg:justify-start">
            <svg className="w-full max-w-[400px] lg:max-w-none h-auto" fill="none" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
              {Object.entries(regionPaths).map(([id, d]) => (
                <path
                  key={id}
                  d={d}
                  fill={activeRegion === id ? '#924753' : '#2A3F30'}
                  stroke="#fff"
                  strokeWidth="0.5"
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveRegion(id)}
                  onClick={() => setActiveRegion(id)}
                />
              ))}
            </svg>
            <div className="absolute top-1/4 right-0 lg:-right-12 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hidden md:block">
              <p className="font-label-caps text-[10px] mb-2 text-secondary-container">REGION SELECCIONADA</p>
              <h4 className="text-2xl font-display-script mb-4">{region.name}</h4>
              <ul className="text-xs space-y-2 opacity-70">
                {region.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <button className="mt-6 text-[10px] font-label-caps border-b border-white/40 pb-1">EXPLORAR VINOS</button>
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
            {Object.keys(regionData).map((id) => (
              <button
                key={id}
                className={`px-6 py-2 border rounded-full text-xs font-label-caps transition-all ${activeRegion === id ? 'bg-white text-primary border-white' : 'border-white/20 hover:bg-white hover:text-primary'}`}
                onClick={() => setActiveRegion(id)}
              >
                {id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
