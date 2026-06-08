import { useEffect, useState, useRef } from 'react';
import { obtenerResenas, crearResena } from '../../api';
import { REVIEWS_PRODUCT_ID } from '../../config/constants';
import './CarruselResenas.css';

// ── Modal de formulario ───────────────────────────────────
function FormResena({ onClose, onEnviada }) {
  const [form, setForm] = useState({ nombre: '', email: '', resena: '', calificacion: 5 });
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setError('');
    try {
      await crearResena(REVIEWS_PRODUCT_ID, form);
      onEnviada();
      onClose();
    } catch {
      setError('No se pudo enviar la reseña. Intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="resenaOverlay" onClick={onClose}>
      <div className="resenaModal" onClick={e => e.stopPropagation()}>
        <button className="resenaClose" onClick={onClose} aria-label="Cerrar">✕</button>
        <h2 className="resenaTitulo">Comparte tu experiencia</h2>
        <p className="resenaSubtitulo">Tu opinión ayuda a otros a confiar en nosotros.</p>

        <form onSubmit={handleSubmit}>
          <div className="resenaField">
            <label>Nombre</label>
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
            />
          </div>
          <div className="resenaField">
            <label>Correo electrónico</label>
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="resenaField">
            <label>Calificación</label>
            <div className="resenaEstrellas">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  type="button"
                  key={n}
                  className={`resenaEstrella${form.calificacion >= n ? ' activa' : ''}`}
                  onClick={() => setForm({ ...form, calificacion: n })}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="resenaField">
            <label>Reseña</label>
            <textarea
              required
              rows={4}
              placeholder="Cuéntanos tu experiencia..."
              value={form.resena}
              onChange={e => setForm({ ...form, resena: e.target.value })}
            />
          </div>
          {error && <p className="resenaError">{error}</p>}
          <button type="submit" disabled={enviando} className="resenaSubmit">
            {enviando ? 'Enviando...' : 'Enviar reseña'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Tarjeta individual ─────────────────────────────────────
function TarjetaResena({ resena }) {
  return (
    <div className="resenaTarjeta">
      <div className="resenaTarjetaEstrellas">
        {'★'.repeat(resena.rating)}{'☆'.repeat(5 - resena.rating)}
      </div>
      <p className="resenaTarjetaTexto" dangerouslySetInnerHTML={{ __html: resena.review }} />
      <p className="resenaTarjetaAutor">— {resena.reviewer}</p>
    </div>
  );
}

// ── Carrusel principal ────────────────────────────────────
function CarruselResenas() {
  const [resenas, setResenas]     = useState([]);
  const [actual, setActual]       = useState(0);
  const [modalAbierto, setModal]  = useState(false);
  const [enviada, setEnviada]     = useState(false);
  const intervalRef               = useRef(null);

  const cargar = () => {
    obtenerResenas(REVIEWS_PRODUCT_ID).then(data => {
      setResenas(data);
      setActual(0);
    }).catch(() => {});
  };

  useEffect(() => { cargar(); }, []);

  // Auto-avance cada 5 s
  useEffect(() => {
    if (resenas.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setActual(a => (a + 1) % resenas.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [resenas.length]);

  const irA = (idx) => {
    clearInterval(intervalRef.current);
    setActual(idx);
  };

  return (
    <section className="resenasSection">
      <div className="container">

        <div className="resenasHeader">
          <div>
            <h2 className="resenasTitle">Lo que dicen nuestros clientes</h2>
            <p className="resenasSubtitle">Experiencias reales de personas que confían en nosotros.</p>
          </div>
          <button className="resenasBtn" onClick={() => setModal(true)}>
            + Dejar reseña
          </button>
        </div>

        {resenas.length === 0 ? (
          <p className="resenasVacio">Aún no hay reseñas. ¡Sé el primero en compartir tu experiencia!</p>
        ) : (
          <>
            <div className="resenasCarrusel">
              <button
                className="resenasArrow resenasArrowLeft"
                onClick={() => irA((actual - 1 + resenas.length) % resenas.length)}
                aria-label="Anterior"
              >‹</button>

              <div className="resenasTrack">
                <TarjetaResena resena={resenas[actual]} />
              </div>

              <button
                className="resenasArrow resenasArrowRight"
                onClick={() => irA((actual + 1) % resenas.length)}
                aria-label="Siguiente"
              >›</button>
            </div>

            <div className="resenasIndicadores">
              {resenas.map((_, i) => (
                <button
                  key={i}
                  className={`resenaDot${i === actual ? ' activo' : ''}`}
                  onClick={() => irA(i)}
                  aria-label={`Ir a reseña ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {enviada && (
          <p className="resenasMensaje">✅ ¡Gracias! Tu reseña fue enviada y aparecerá una vez aprobada.</p>
        )}

      </div>

      {modalAbierto && (
        <FormResena
          onClose={() => setModal(false)}
          onEnviada={() => { setEnviada(true); setTimeout(() => setEnviada(false), 6000); }}
        />
      )}
    </section>
  );
}

export default CarruselResenas;
