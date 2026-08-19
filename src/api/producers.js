import axios from 'axios'

const WP_BASE = (import.meta.env.VITE_WC_BASE_URL || '').replace('/wc/v3', '/wp/v2')

// Resuelve imágenes para todos los posts con featured_media > 0
// usando un batch request (include=id1,id2,...) en lugar de N requests individuales
const resolveMedia = async (posts) => {
  const conMedia = posts.filter((p) => p.featured_media > 0)
  if (!conMedia.length) return posts

  const ids = conMedia.map((p) => p.featured_media).join(',')

  let mapaMedia = {}
  try {
    const res = await axios.get(`${WP_BASE}/media`, {
      params: { include: ids, per_page: 100 },
    })
    const items = Array.isArray(res.data) ? res.data : []
    mapaMedia = Object.fromEntries(items.map((m) => [m.id, m.source_url || '']))
  } catch {
    // si falla el batch, intentamos uno por uno
    await Promise.all(
      conMedia.map((p) =>
        axios.get(`${WP_BASE}/media/${p.featured_media}`)
          .then((r) => { mapaMedia[p.featured_media] = r.data?.source_url || '' })
          .catch(() => {})
      )
    )
  }

  return posts.map((p) => ({
    ...p,
    _resolvedImageUrl: mapaMedia[p.featured_media] || '',
  }))
}

export const obtenerProductores = async () => {
  const res = await axios.get(`${WP_BASE}/productores`, {
    params: { per_page: 100, status: 'publish' },
  })
  const posts = Array.isArray(res.data) ? res.data : []
  return resolveMedia(posts)
}

export const obtenerProductor = async (slug) => {
  const res = await axios.get(`${WP_BASE}/productores`, {
    params: { _embed: true, slug },
  })
  const posts = res.data?.[0] ? [res.data[0]] : []
  const resolved = await resolveMedia(posts)
  return resolved[0] || null
}

export const getFeaturedImage = (post) =>
  post?._resolvedImageUrl ||
  post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
  post?.acf?.foto ||
  ''
