import { useState, useEffect } from "react";
import logo from "../../assets/images/logo-compra-tu-reloj-1.png";
import "./InstallPWA.css";

// ─────────────────────────────────────────────────────────────────────────────
// InstallPWA
//
// Muestra una card estilo Sonos explicando cómo instalar la app.
// Solo aparece en dispositivos móviles, una vez cada 7 días,
// y nunca si la app ya está instalada (modo standalone).
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY   = "ctr_pwa_dismissed";
const DIAS_ESPERAR  = 7;

function detectarPlataforma() {
  const ua = navigator.userAgent || "";
  const isIOS     = /iphone|ipad|ipod/i.test(ua);
  const isAndroid = /android/i.test(ua);
  const isChrome  = /chrome|crios/i.test(ua) && !/edg/i.test(ua);
  const isSafari  = /safari/i.test(ua) && !/chrome|crios/i.test(ua);
  const isFirefox = /firefox|fxios/i.test(ua);

  if (isIOS && isSafari) return "ios-safari";
  if (isIOS && isChrome) return "ios-chrome";
  if (isAndroid && isChrome) return "android-chrome";
  if (isAndroid && isFirefox) return "android-firefox";
  if (isAndroid) return "android-other";
  return "other";
}

const INSTRUCCIONES = {
  "ios-safari": {
    pasos: [
      { icono: "⬆️", texto: 'Toca el botón "Compartir" en la barra inferior' },
      { icono: "➕", texto: 'Selecciona "Añadir a pantalla de inicio"'        },
      { icono: "✅", texto: 'Toca "Añadir" para confirmar'                    },
    ],
  },
  "ios-chrome": {
    pasos: [
      { icono: "⋯",  texto: 'Toca los tres puntos en la esquina inferior'      },
      { icono: "➕", texto: 'Selecciona "Añadir a pantalla de inicio"'         },
      { icono: "✅", texto: 'Toca "Añadir" para confirmar'                     },
    ],
  },
  "android-chrome": {
    pasos: [
      { icono: "⋮",  texto: 'Toca los tres puntos en la esquina superior'      },
      { icono: "📲", texto: 'Selecciona "Instalar app" o "Añadir a inicio"'    },
      { icono: "✅", texto: 'Toca "Instalar" para confirmar'                   },
    ],
  },
  "android-firefox": {
    pasos: [
      { icono: "⋮",  texto: 'Toca el menú en la esquina inferior'              },
      { icono: "📲", texto: 'Selecciona "Instalar"'                            },
      { icono: "✅", texto: 'Toca "Añadir" para confirmar'                     },
    ],
  },
  "android-other": {
    pasos: [
      { icono: "⋮",  texto: "Abre el menú de tu navegador"                     },
      { icono: "📲", texto: 'Busca "Instalar app" o "Añadir a inicio"'         },
      { icono: "✅", texto: "Confirma la instalación"                           },
    ],
  },
  other: {
    pasos: [
      { icono: "⋮",  texto: "Abre el menú de tu navegador"                     },
      { icono: "📲", texto: 'Busca "Instalar app" o "Añadir a inicio"'         },
      { icono: "✅", texto: "Confirma la instalación"                           },
    ],
  },
};

function InstallPWA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // No mostrar si ya está instalada como PWA
    const yaInstalada = window.matchMedia("(display-mode: standalone)").matches
      || window.navigator.standalone === true;
    if (yaInstalada) return;

    // No mostrar en desktop
    const esMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    if (!esMobile) return;

    // No mostrar si fue descartada recientemente
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const diasTranscurridos = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (diasTranscurridos < DIAS_ESPERAR) return;
    }

    // Mostrar con pequeño retraso para no interrumpir la carga inicial
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const cerrar = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  const plataforma   = detectarPlataforma();
  const instrucciones = INSTRUCCIONES[plataforma] || INSTRUCCIONES.other;

  return (
    <div className="pwaMask" onClick={cerrar}>
      <div className="pwaCard" onClick={e => e.stopPropagation()}>

        {/* Logo */}
        <div className="pwaLogoWrap">
          <img src={logo} alt="Compra Tu Reloj" className="pwaLogo" />
        </div>

        {/* Título */}
        <h2 className="pwaTitle">Instala la app</h2>
        <p className="pwaSubtitle">
          Añade Compra Tu Reloj a tu pantalla de inicio para acceder más rápido.
        </p>

        {/* Pasos */}
        <ol className="pwaPasos">
          {instrucciones.pasos.map((paso, i) => (
            <li key={i} className="pwaPaso">
              <span className="pwaPasoIcono">{paso.icono}</span>
              <span className="pwaPasoTexto">{paso.texto}</span>
            </li>
          ))}
        </ol>

        {/* Botón */}
        <button className="pwaBtnEntendido" onClick={cerrar}>
          Entendido
        </button>

        {/* Cerrar */}
        <button className="pwaBtnCerrar" onClick={cerrar} aria-label="Cerrar">
          ✕
        </button>

      </div>
    </div>
  );
}

export default InstallPWA;
