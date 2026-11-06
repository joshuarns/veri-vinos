import axios from 'axios'

const WP_BASE = (import.meta.env.VITE_WC_BASE_URL || '').replace('/wc/v3', '/wp/v2')

// WordPress devuelve títulos/extractos como HTML con entidades (&#8217;, <p>…)
export const textoPlano = (html = '') =>
  new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() || ''

export const normalizarNoticia = (post) => ({
  id: post.id,
  slug: post.slug,
  fecha: post.date,
  titulo: textoPlano(post.title?.rendered),
  extracto: textoPlano(post.excerpt?.rendered),
  contenido: post.content?.rendered || '',
  imagen: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
  categoria: post._embedded?.['wp:term']?.[0]?.[0]?.name || '',
})

export const obtenerNoticias = async ({ page = 1, perPage = 9 } = {}) => {
  const res = await axios.get(`${WP_BASE}/posts`, {
    params: { status: 'publish', per_page: perPage, page, _embed: 1 },
  })
  return {
    noticias: Array.isArray(res.data) ? res.data.map(normalizarNoticia) : [],
    totalPaginas: parseInt(res.headers['x-wp-totalpages'] || '1', 10),
  }
}

export const obtenerNoticia = async (slug) => {
  const res = await axios.get(`${WP_BASE}/posts`, { params: { slug, _embed: 1 } })
  const post = Array.isArray(res.data) ? res.data[0] : null
  return post ? normalizarNoticia(post) : null
}

export const formatearFecha = (iso) =>
  new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })
