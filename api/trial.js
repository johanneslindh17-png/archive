export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { KV_REST_API_URL, KV_REST_API_TOKEN } = process.env;

  // If KV is not configured, return a sentinel so the client falls back to localStorage
  if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
    return res.status(503).json({ count: null, error: 'kv_not_configured' });
  }

  const kv = async (...args) => {
    const r = await fetch(KV_REST_API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${KV_REST_API_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args),
    });
    const d = await r.json();
    return d.result;
  };

  try {
    if (req.method === 'GET') {
      const fp = req.query?.fp;
      if (!fp || fp.length > 64) return res.status(400).json({ count: 0 });
      const val = await kv('GET', 'trial:' + fp);
      return res.json({ count: parseInt(val || '0', 10) });
    }

    if (req.method === 'POST') {
      const { fp } = req.body || {};
      if (!fp || fp.length > 64) return res.status(400).json({ count: 0 });
      const count = await kv('INCR', 'trial:' + fp);
      // Refresh TTL to 1 year on every increment so active users never expire
      await kv('EXPIRE', 'trial:' + fp, 31536000);
      return res.json({ count: parseInt(count || '1', 10) });
    }

    return res.status(405).end();
  } catch {
    return res.status(500).json({ count: null, error: 'kv_error' });
  }
}
