export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ valid: false });

  const { key, instanceId } = req.body || {};
  if (!key) return res.status(400).json({ valid: false });

  const headers = {
    'Authorization': `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    // Deactivate previous instance if we have one (re-entry after clearing storage)
    if (instanceId) {
      await fetch('https://api.lemonsqueezy.com/v1/licenses/deactivate', {
        method: 'POST',
        headers,
        body: JSON.stringify({ license_key: key.trim(), instance_id: instanceId }),
      }).catch(() => {}); // ignore errors — old instance may already be gone
    }

    // Activate a fresh instance
    const response = await fetch('https://api.lemonsqueezy.com/v1/licenses/activate', {
      method: 'POST',
      headers,
      body: JSON.stringify({ license_key: key.trim(), instance_name: 'web' }),
    });
    const data = await response.json();

    if (data.activated) {
      res.json({ valid: true, instanceId: data.instance?.id || null });
    } else {
      res.json({ valid: false });
    }
  } catch {
    res.status(500).json({ valid: false });
  }
}
