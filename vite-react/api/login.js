import crypto from 'node:crypto'
import { allowedLogin, clearLogin, failedLogin, readBody, send, setAuthCookie } from './_lib.js'
const same = (a, b) => { if (!a || !b || a.length !== b.length) return false; return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b)) }
export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' })
  const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim()
  if (!allowedLogin(ip)) return send(res, 429, { error: 'Too many attempts. Try again in 15 minutes.' })
  try {
    const { user, pass } = await readBody(req)
    if (!same(user, process.env.CONTROL_USER) || !same(pass, process.env.CONTROL_PASS) || !process.env.CONTROL_SECRET) {
      failedLogin(ip); return send(res, 401, { error: 'Invalid credentials' })
    }
    clearLogin(ip); setAuthCookie(res); return send(res, 200, { ok: true })
  } catch { return send(res, 400, { error: 'Invalid request' }) }
}
