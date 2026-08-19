import axios from 'axios'

const WP_BASE = (import.meta.env.VITE_WC_BASE_URL || '').replace('/wc/v3', '/wp/v2')

const resolveMedia = async (posts) => {
  const sinImagen = posts.filter(
    (p) => p.featured_media && !p._embedded?.['wp:featuredmedia']?.[0]?.source_url
  )
  if (!sinImagen.length) return posts

  const resultados = await Promise.all(
    sinImagen.map((p) =>
      axios.get(`${WP_BASE}/media/${p.featured_media}`)
        .then((r) => ({ id: p.id, url: r.data?.source_url || '' }))
        .catch(() => ({ id: p.id, url: '' }))
    )
  )
  const mapaMedia = Object.fromEntries(resultados.map((r) => [r.id, r.url]))

  return posts.map((p) =>
    mapaMedia[p.id] ? { ...p, _resolvedImageUrl: mapaMedia[p.id] } : p
  )
}

export const obtenerProductores = async () => {
  const res = await axios.get(`${WP_BASE}/productores`, {
    params: { _embed: true, per_page: 100, status: 'publish' },
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
