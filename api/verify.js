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
    // If the browser still has an instanceId (normal return visit after storage clear),
    // validate it — no activation slot consumed.
    if (instanceId) {
      const vRes = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
        method: 'POST',
        headers,
        body: JSON.stringify({ license_key: key.trim(), instance_id: instanceId }),
      });
      const vData = await vRes.json();
      if (vData.valid) {
        // Key + instance still good — just re-unlock, no new activation needed.
        return res.json({ valid: true, instanceId });
      }
      // Instance no longer valid (revoked, expired) — fall through to activate below.
    }

    // No instanceId (first time, or storage was fully wiped): try validate first.
    // This handles users who cleared storage — the key is already activated somewhere
    // so validate succeeds without burning another slot.
    const valRes = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
      method: 'POST',
      headers,
      body: JSON.stringify({ license_key: key.trim() }),
    });
    const valData = await valRes.json();
    if (valData.valid) {
      // Key is valid and already has at least one activation — re-use without
      // creating a new instance. We return null instanceId so the browser just
      // stores the unlocked flag without tracking a specific instance.
      return res.json({ valid: true, instanceId: null });
    }

    // Key has never been activated (brand new purchase) — create the first instance.
    const actRes = await fetch('https://api.lemonsqueezy.com/v1/licenses/activate', {
      method: 'POST',
      headers,
      body: JSON.stringify({ license_key: key.trim(), instance_name: 'web' }),
    });
    const actData = await actRes.json();

    if (actData.activated) {
      return res.json({ valid: true, instanceId: actData.instance?.id || null });
    }

    return res.json({ valid: false });
  } catch {
    res.status(500).json({ valid: false });
  }
}
