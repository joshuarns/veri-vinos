export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      <img
        alt="Vineyard at dawn"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06Pe9B7MMWN0XTYd5wYTlIoqQQXHdq0oH_0KO4XrtAu-kpI6ss_gAt7X2-cQ-M_4ETA_YPiYXegBotmBg9lBj_PQ8TsEClJHqeuEr3wFVoKIQTQrolO2HlAcZp-2BkGD8htWgb-HKpU9eC6xnn3TXkVoJiMZ9o7sSwZu_HJA6TNDUVBYl5YMQLD9FgnxlWIJ5Wkfw6mCI3F2T91vN2nO6KdguvYs3jMnPKb0IRmh7_vxr6z-_P75H6TN8nMPbhJUGMoNLc0SjdH0"
      />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="font-label-caps text-white/80 mb-6 block tracking-[0.4em] uppercase text-[10px] md:text-xs">
          Exclusividad en cada gota
        </span>
        <h2 className="font-display-script text-white text-7xl md:text-9xl leading-[0.9] hero-text-shadow mb-8">
          Veri Vinos
        </h2>
        <p className="font-body-lg text-white/70 max-w-xl mx-auto mb-12 text-sm md:text-lg">
          Una curaduría artesanal de los viñedos más puros de Italia, traídos directamente a su mesa con respeto por la tradición.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-primary px-10 py-5 rounded-full font-label-caps text-[11px] hover:bg-secondary hover:text-white transition-all duration-500 tracking-[0.2em] w-full sm:w-auto">
            EXPLORAR TIENDA
          </button>
          <button className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 rounded-full font-label-caps text-[11px] hover:bg-white/10 transition-all duration-500 tracking-[0.2em] w-full sm:w-auto">
            NUESTRA HISTORIA
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-label-caps text-white text-[9px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </header>
  )
}
