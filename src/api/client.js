// ─────────────────────────────────────────────────────────────────────────────
// api/client.js
//
// En DESARROLLO las peticiones van directo a WordPress con
// credenciales Basic Auth desde las variables de entorno (VITE_*).
//
// Variables requeridas en .env.development:
//   VITE_WC_BASE_URL  → ej. https://tu-sitio.com/wp-json/wc/v3
//   VITE_WC_KEY       → Consumer Key de WooCommerce
//   VITE_WC_SECRET    → Consumer Secret de WooCommerce
// ─────────────────────────────────────────────────────────────────────────────

import axios from 'axios'

export { axios }

export const BASE_URL = import.meta.env.VITE_WC_BASE_URL

// Se usan query params en lugar de Basic Auth header porque
// algunos servidores Apache/Nginx no pasan Authorization a PHP
export const authParams = {
  consumer_key:    import.meta.env.VITE_WC_KEY,
  consumer_secret: import.meta.env.VITE_WC_SECRET,
}
