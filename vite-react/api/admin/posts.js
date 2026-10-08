import { authenticated, readPosts, send } from '../_lib.js'
export default async function handler(req, res) {
  if (req.method !== 'GET') return send(res, 405, { error: 'Method not allowed' })
  if (!authenticated(req)) return send(res, 401, { error: 'Unauthorized' })
  try { return send(res, 200, await readPosts()) }
  catch { return send(res, 503, { error: 'Blog storage is unavailable' }) }
}
