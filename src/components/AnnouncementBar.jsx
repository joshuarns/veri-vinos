export default function AnnouncementBar({ onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-secondary text-white flex items-center justify-center gap-6 py-2.5 px-4">
      <span className="font-label-caps text-[10px] tracking-[0.25em] text-center">
        ENVÍO GRATUITO EN PEDIDOS SUPERIORES A 150€ · NUEVA COSECHA DISPONIBLE
      </span>
      <button
        className="absolute right-4 p-1 opacity-60 hover:opacity-100 transition-opacity"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  )
}
