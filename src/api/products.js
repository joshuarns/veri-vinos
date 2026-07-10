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

// ── obtenerRegiones ───────────────────────────────────────────────────────────
export const obtenerRegiones = async () => {
  // Primero buscamos el atributo "region"
  const attrRes = await axios.get(`${BASE_URL}/products/attributes`, {
    params: { ...authParams, per_page: 50 },
  })
  const atributo = attrRes.data.find(
    (a) => a.slug === 'pa_region' || a.name.toLowerCase() === 'región' || a.name.toLowerCase() === 'region'
  )
  if (!atributo) return []

  const termsRes = await axios.get(`${BASE_URL}/products/attributes/${atributo.id}/terms`, {
    params: { ...authParams, per_page: 100 },
  })
  return Array.isArray(termsRes.data)
    ? termsRes.data.map((t) => ({ id: t.id, nombre: t.name, descripcion: t.description, slug: t.slug }))
    : []
}

// ── obtenerProductosPorRegion ─────────────────────────────────────────────────
export const obtenerProductosPorRegion = async (attributeId, termId) => {
  const res = await axios.get(`${BASE_URL}/products`, {
    params: {
      ...authParams,
      status: 'publish',
      per_page: 100,
      attribute: `pa_region`,
      attribute_term: termId,
    },
  })
  return Array.isArray(res.data) ? res.data : []
}
