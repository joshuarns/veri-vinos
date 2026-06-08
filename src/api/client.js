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

export const auth = {
  username: import.meta.env.VITE_WC_KEY,
  password: import.meta.env.VITE_WC_SECRET,
}
