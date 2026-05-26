const items = [
  {
    id: 1,
    name: 'Quesos de Autor',
    offset: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsVKvBu69hD1yyqZWm7ZyDHLSXS-cU_j1B-uX8MwXvnl1k6cac7mb3ygScfi-Iaj331TnSqW3dmHFrUjZrX3i_CxOK8ZdvFX09eGYdSpjh85oIRwiYA2YAR7qVlhnIyRUjxFs9ZmF75hmZG3tTlEXgWdhRCRBZaKtX1lUQ_W6krxEd7ZJOH-H8843SvXZtvwkWhJ0CBrDtGMVgj5D3qXHmbSbDKMqtBuaaoyRlogNs-HseScXOaQod98nYh50QvDsiv2tA_0FhlEU',
  },
  {
    id: 2,
    name: 'Aceites Vírgenes',
    offset: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi36a_KzRqo91Ag715mbdw2q7bSkpJWhfRk3uyYfMqH_CznsTa8JSNEGuhJRue3ieiJp14RnttFagnUzsXNPCONQ0fKh46mTmhgF4nWlHyeKvU-MJnuwMg4z6uljpVHzdlunIfYeMPUXwtAfNMXwrBWVV45FcFlA22Z_omZSmDokTDD7gu4T6K8bi97yDNe80k1RtqCeClnRFa1uXSaC60mte2iofNYbUdeQolyP9yRyQs0TO3O5LfcpDJ9CCSRAdpKiQ0ZzSZAzc',
  },
  {
    id: 3,
    name: 'Embutidos Nobles',
    offset: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQsVwPn5fDzL8qSa2EcjtFnFvWoAfMyuAGzv1K7oA5j5Z0TRJlqs769O_GkvlBLKQwmUBIFdrnyLn2clI6O03Fv_8-stYK2YtFZOcHZzdrYN3Do_imbjuhpcQKSUQILtOrY-dkb8kvmpy1kvt3qrZdWOJJP64mtioq7mW_05tTrzBjCHm1Vw_jY',
  },
]

export default function GourmetExperience() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-label-caps text-secondary block mb-4 tracking-[0.2em]">EL MARIDAJE PERFECTO</span>
          <h3 className="font-display-script text-5xl md:text-6xl text-primary mb-6">Experiencia Gourmet</h3>
          <p className="max-w-2xl text-on-surface-variant/70">
            Complementos artesanales que elevan la experiencia de degustación a un nuevo nivel de sofisticación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.id} className={`group ${item.offset ? 'md:translate-y-12' : ''}`}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <h4 className="font-display-script text-2xl text-center mb-4">{item.name}</h4>
              <div className="flex justify-center">
                <span className="font-label-caps text-[10px] text-secondary border-b border-transparent group-hover:border-secondary pb-1 transition-all cursor-pointer">
                  EXPLORAR COLECCIÓN
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
