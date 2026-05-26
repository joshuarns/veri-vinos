import historiasImg from '../assets/img/historias-con-alma.jpg'

export default function Producers() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <span className="font-label-caps text-secondary block mb-4 tracking-[0.2em]">HISTORIAS CON ALMA</span>
          <h3 className="font-display-script text-5xl md:text-6xl text-primary">Conoce a los Productores</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                src={historiasImg}
                alt="Famiglia Altieri"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/95 backdrop-blur rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-display-script text-3xl text-primary mb-2">Famiglia Altieri</h4>
              <p className="text-sm text-on-surface-variant/80 mb-4 italic">"Hacemos vino como lo hacían nuestros abuelos: escuchando a la uva."</p>
              <a className="font-label-caps text-[10px] text-secondary tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                LEER HISTORIA <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8 items-center group cursor-pointer">
              <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAZYXehk6NE4gEk5BzW9CWbYfxoJHAv1mCco9IgQsX2i4wo4YgANGMmdESq4l5uazAUMJYO2xvHIxLCKKxyZwPX2iX_uLyaHNNGPlxGwnmKzHes48aF_BBu7q0XOksHHQZ9kXajfz_e8ytU0UewuxI1sCmRSrSNMM-DDcMnSVUkmaBTsAKzM_7lr8TQ36BiwYQSiezFz2fe-NAcJtdIMxpyQdF9mO0OkZlRBPhkJYwNfaHk71vCA6_u3t-DakMjhAMA8tRG5E-KM"
                  alt="Tenuta del Sole"
                />
              </div>
              <div>
                <h5 className="font-display-script text-2xl text-primary group-hover:text-secondary transition-colors">Tenuta del Sole</h5>
                <p className="text-sm text-on-surface-variant/70 mb-2">Especialistas en biodinámica desde 1992 en el corazón de Toscana.</p>
                <span className="font-label-caps text-[9px] tracking-widest text-secondary">MÁS INFO</span>
              </div>
            </div>

            <div className="flex gap-8 items-center group cursor-pointer">
              <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARWko94B_9EkePkWyUf82euubNgQcqsC0Kz4raPxjFZwyQ0Mkp5NjS3VN_Wi6AxU8OiJptPU0vFOcaSsIbP_aYURa09tDz_gTKyMM6AmPYXjxKrI7zDNskPiCDntBEUvcT2q0y7-SLJv5hDL6HxFmGkl3CQFNonhLTUm6tSAWon8hx7ewNR2IMnh9FXcsQ2pfkMcZX0237YdWHkHvMtFOP6yOBdtIQnYG2dAQgohUntzmbY8VHGfsBwbjhmK6Zcgd0PSOwal9kwg"
                  alt="Cantina di Marco"
                />
              </div>
              <div>
                <h5 className="font-display-script text-2xl text-primary group-hover:text-secondary transition-colors">Cantina di Marco</h5>
                <p className="text-sm text-on-surface-variant/70 mb-2">Pequeña producción familiar enfocada en variedades autóctonas olvidadas.</p>
                <span className="font-label-caps text-[9px] tracking-widest text-secondary">MÁS INFO</span>
              </div>
            </div>

            <div className="pt-8">
              <button className="px-10 py-4 border border-primary text-primary font-label-caps text-[11px] tracking-widest hover:bg-primary hover:text-white transition-all rounded-full">
                VER TODOS LOS PRODUCTORES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
