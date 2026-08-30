export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ valid: false });

  const { key } = req.body || {};
  if (!key) return res.status(400).json({ valid: false });

  try {
    const params = new URLSearchParams({
      product_permalink: 'ELECTRONICARCHIVE',
      license_key: key.trim(),
      increment_uses_count: 'false',
    });

    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.success) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch {
    res.status(500).json({ valid: false });
  }
}
