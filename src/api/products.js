// ─────────────────────────────────────────────────────────────────────────────
// api/products.js
//
// Peticiones de productos a WooCommerce REST API v3.
// ─────────────────────────────────────────────────────────────────────────────

import { axios, BASE_URL, authParams } from './client'

// ── obtenerProductos ──────────────────────────────────────────────────────────
export const obtenerProductos = async ({
  page      = 1,
  perPage   = 12,
  busqueda  = '',
  categoria = '',
} = {}) => {
  const params = { ...authParams, status: 'publish', per_page: perPage, page }

  if (busqueda) params.search = busqueda

  if (categoria) {
    const catRes = await axios.get(`${BASE_URL}/products/categories`, {
      params: { ...authParams, slug: categoria, per_page: 1 },
    })
    if (catRes.data.length) params.category = catRes.data[0].id
  }

  const res = await axios.get(`${BASE_URL}/products`, { params })

  return {
    productos   : Array.isArray(res.data) ? res.data : [],
    totalPaginas: parseInt(res.headers['x-wp-totalpages'] || '1', 10),
  }
}

// ── obtenerProducto ───────────────────────────────────────────────────────────
export const obtenerProducto = async (id) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`, { params: authParams })
  return res.data
}

// ── obtenerCategorias ─────────────────────────────────────────────────────────
export const obtenerCategorias = async () => {
  const res = await axios.get(`${BASE_URL}/products/categories`, {
    params: { ...authParams, per_page: 50, hide_empty: true },
  })
  return Array.isArray(res.data) ? res.data : []
}
