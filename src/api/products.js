// ─────────────────────────────────────────────────────────────────────────────
// api/products.js
//
// Peticiones de productos a WooCommerce REST API v3.
// ─────────────────────────────────────────────────────────────────────────────

import { axios, BASE_URL, authParams } from './client'

// ── obtenerCatalogo ───────────────────────────────────────────────────────────
// Trae todos los productos publicados (páginas de 100) para poder ordenarlos
// y paginarlos en el cliente.
export const obtenerCatalogo = async ({ categoria = '' } = {}) => {
  const params = { ...authParams, status: 'publish', per_page: 100 }

  if (categoria) {
    const catRes = await axios.get(`${BASE_URL}/products/categories`, {
      params: { ...authParams, slug: categoria, per_page: 1 },
    })
    if (catRes.data.length) params.category = catRes.data[0].id
  }

  const primera = await axios.get(`${BASE_URL}/products`, { params: { ...params, page: 1 } })
  const totalPaginas = parseInt(primera.headers['x-wp-totalpages'] || '1', 10)
  let productos = Array.isArray(primera.data) ? primera.data : []

  if (totalPaginas > 1) {
    const resto = await Promise.all(
      Array.from({ length: totalPaginas - 1 }, (_, i) =>
        axios.get(`${BASE_URL}/products`, { params: { ...params, page: i + 2 } })
      )
    )
    resto.forEach((r) => { if (Array.isArray(r.data)) productos = productos.concat(r.data) })
  }

  return productos
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

// ── obtenerProductosPorProductor ──────────────────────────────────────────────
export const obtenerProductosPorProductor = async (producerName) => {
  const res = await axios.get(`${BASE_URL}/products`, {
    params: { ...authParams, status: 'publish', per_page: 100 },
  })
  const todos = Array.isArray(res.data) ? res.data : []
  const nombre = producerName.toLowerCase()
  return todos.filter((p) => {
    const prods = p.acf?.productores
    if (!prods) return false
    if (Array.isArray(prods)) {
      return prods.some((pr) =>
        (pr.post_title || pr.title?.rendered || '').toLowerCase().includes(nombre)
      )
    }
    return String(prods).toLowerCase().includes(nombre)
  })
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
