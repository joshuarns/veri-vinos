// ─────────────────────────────────────────────────────────────────────────────
// api/products.js
//
// Peticiones de productos a WooCommerce REST API v3.
// ─────────────────────────────────────────────────────────────────────────────

import { axios, BASE_URL, auth } from './client'

// ── obtenerProductos ──────────────────────────────────────────────────────────
// Catálogo paginado con búsqueda y filtro por categoría opcionales.
// Devuelve { productos, totalPaginas }
export const obtenerProductos = async ({
  page     = 1,
  perPage  = 12,
  busqueda = '',
  categoria = '',
} = {}) => {
  const params = { status: 'publish', per_page: perPage, page }

  if (busqueda) params.search = busqueda

  // Si se pasa slug de categoría, primero lo resolvemos a ID
  if (categoria) {
    const catRes = await axios.get(`${BASE_URL}/products/categories`, {
      params: { slug: categoria, per_page: 1 },
      auth,
    })
    if (catRes.data.length) params.category = catRes.data[0].id
  }

  const res = await axios.get(`${BASE_URL}/products`, { params, auth })

  return {
    productos   : Array.isArray(res.data) ? res.data : [],
    totalPaginas: parseInt(res.headers['x-wp-totalpages'] || '1', 10),
  }
}

// ── obtenerProducto ───────────────────────────────────────────────────────────
// Detalle completo de un producto por ID
export const obtenerProducto = async (id) => {
  const res = await axios.get(`${BASE_URL}/products/${id}`, { auth })
  return res.data
}

// ── obtenerCategorias ─────────────────────────────────────────────────────────
// Lista de categorías para los chips de filtro en Tienda
export const obtenerCategorias = async () => {
  const res = await axios.get(`${BASE_URL}/products/categories`, {
    params: { per_page: 50, hide_empty: true },
    auth,
  })
  return Array.isArray(res.data) ? res.data : []
}
