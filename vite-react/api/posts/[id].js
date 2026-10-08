import { authenticated, readPosts, send, writePosts } from '../_lib.js'
export default async function handler(req, res) {
  if (req.method !== 'DELETE') return send(res, 405, { error: 'Method not allowed' })
  if (!authenticated(req)) return send(res, 401, { error: 'Unauthorized' })
  try {
    const posts = await readPosts(), id = req.query.id
    await writePosts(posts.filter(post => post.id !== id))
    return send(res, 200, { ok: true })
  } catch { return send(res, 503, { error: 'Blog storage is unavailable' }) }
}
