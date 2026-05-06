// ─────────────────────────────────────────────────────────────────────────────
// api/login.js — Valida credenciales de usuario contra WordPress
//
// El proxy general (api/wp.js) siempre usa las claves admin (WC_KEY/WC_SECRET).
// Para el login necesitamos reenviar las credenciales del USUARIO a WordPress,
// no las del admin. Este endpoint hace esa distinción de forma segura:
// las credenciales viajan cliente → Vercel (HTTPS) y nunca quedan expuestas.
// ─────────────────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  const url  = `${process.env.WP_BASE_URL}/users/me`;
  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  try {
    const upstream = await fetch(url, {
      headers: {
        Authorization:  `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Login proxy error', detail: err.message });
  }
}
