import clubImg from '../assets/img/club-vini-veri.jpg'

const benefits = [
  { icon: 'local_shipping', text: 'Envío gratuito en todos los pedidos' },
  { icon: 'wine_bar',       text: 'Acceso anticipado a nuevas cosechas' },
  { icon: 'event',          text: 'Invitaciones a catas privadas exclusivas' },
  { icon: 'percent',        text: '15% de descuento permanente en tienda' },
  { icon: 'menu_book',      text: 'Guías de maridaje personalizadas' },
  { icon: 'headset_mic',    text: 'Asesoramiento directo con nuestros sommeliers' },
]

export default function ClubMembership() {
  return (
    <section className="relative py-24 md:py-36 px-margin-mobile md:px-margin-desktop overflow-hidden">

      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={clubImg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Texto izquierdo */}
          <div>
            <span className="font-label-caps text-secondary-container block mb-6 tracking-[0.3em]">MEMBRESÍA EXCLUSIVA</span>
            <h3 className="font-display-script text-5xl md:text-6xl text-white mb-8 leading-tight">
              Club Vini Veri
            </h3>
            <p className="text-white/60 font-body-lg text-sm md:text-base leading-relaxed mb-10">
              Únase a nuestra comunidad de amantes del vino natural y disfrute de privilegios diseñados para quienes valoran la autenticidad. Cada mes, una selección curada llega a su puerta.
            </p>

            <div className="flex items-baseline gap-3 mb-10">
              <span className="font-display-script text-white text-5xl">29€</span>
              <span className="font-label-caps text-white/40 text-[10px] tracking-widest">/ MES · SIN PERMANENCIA</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-label-caps text-[11px] tracking-[0.2em] hover:bg-secondary/80 transition-all">
                UNIRSE AL CLUB
              </button>
              <button className="border border-white/20 text-white px-10 py-4 rounded-full font-label-caps text-[11px] tracking-[0.2em] hover:bg-white/10 transition-all">
                CONOCER MÁS
              </button>
            </div>
          </div>

          {/* Beneficios derecha */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h4 className="font-label-caps text-secondary-container text-[10px] tracking-[0.25em] mb-8">QUÉ INCLUYE</h4>
            <ul className="space-y-6">
              {benefits.map((b) => (
                <li key={b.icon} className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-sm">{b.icon}</span>
                  </div>
                  <span className="text-white/80 text-sm font-body-md">{b.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-sm">verified_user</span>
              <span className="font-label-caps text-white/30 text-[9px] tracking-widest">CANCELA EN CUALQUIER MOMENTO · SIN CARGOS OCULTOS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
