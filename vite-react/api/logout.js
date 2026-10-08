import { clearAuthCookie, send } from './_lib.js'
export default function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' })
  clearAuthCookie(res); return send(res, 200, { ok: true })
}
