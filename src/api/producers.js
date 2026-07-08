import axios from 'axios'

const WP_BASE = (import.meta.env.VITE_WC_BASE_URL || '').replace('/wc/v3', '/wp/v2')

export const obtenerProductores = async () => {
  const res = await axios.get(`${WP_BASE}/productores`, {
    params: { _embed: true, per_page: 100, status: 'publish' },
  })
  return Array.isArray(res.data) ? res.data : []
}

export const obtenerProductor = async (slug) => {
  const res = await axios.get(`${WP_BASE}/productores`, {
    params: { _embed: true, slug },
  })
  return res.data?.[0] || null
}

export const getFeaturedImage = (post) =>
  post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
  post?.acf?.foto ||
  ''
