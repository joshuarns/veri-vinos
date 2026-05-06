// ─────────────────────────────────────────────────────────────────────────────
// api/login.js — Valida credenciales de usuario contra WordPress
// ─────────────────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parseo manual del body (Vercel Node.js runtime no auto-parsea JSON)
  let username, password;
  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf-8');
    const body = raw ? JSON.parse(raw) : {};
    username = body.username;
    password = body.password;
  } catch {
    return res.status(400).json({ error: 'Body inválido' });
  }

  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan credenciales', username: !!username, password: !!password });
  }

  // WP_BASE_URL puede no estar configurada en Vercel; derivamos de WC_BASE_URL
  const wpBase = process.env.WP_BASE_URL
    || (process.env.WC_BASE_URL || '').replace('/wc/v3', '/wp/v2');

  const url  = `${wpBase}/users/me`;
  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  try {
    const upstream = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    const text = await upstream.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text.slice(0, 300) }; }

    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Login proxy error', detail: err.message, wpBase });
  }
}
