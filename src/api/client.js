// ─────────────────────────────────────────────────────────────────────────────
// api/client.js
//
// Las peticiones van al mismo dominio del sitio (/wp-json/...) y se reenvían
// al CMS: Vercel en producción (vercel.json) y Vite en desarrollo
// (vite.config.js). Así no dependen de CORS del CMS.
//
// Variables requeridas en .env.development:
//   VITE_WC_KEY       → Consumer Key de WooCommerce
//   VITE_WC_SECRET    → Consumer Secret de WooCommerce
// ─────────────────────────────────────────────────────────────────────────────

import axios from 'axios'

export { axios }

export const BASE_URL = '/wp-json/wc/v3'
export const WP_BASE  = '/wp-json/wp/v2'

// Se usan query params en lugar de Basic Auth header porque
// algunos servidores Apache/Nginx no pasan Authorization a PHP
export const authParams = {
  consumer_key:    import.meta.env.VITE_WC_KEY,
  consumer_secret: import.meta.env.VITE_WC_SECRET,
}
