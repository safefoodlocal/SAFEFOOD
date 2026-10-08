import crypto from 'node:crypto'
import { authenticated, readBody, readPosts, send, writePosts } from './_lib.js'

const slugify = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') return send(res, 200, await readPosts())
    if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' })
    if (!authenticated(req)) return send(res, 401, { error: 'Unauthorized' })
    const body = await readBody(req)
    if (!body.title?.trim() || !body.content?.trim()) return send(res, 400, { error: 'Title and content are required' })
    const posts = await readPosts(), id = body.id || crypto.randomUUID(), old = posts.find(p => p.id === id), base = slugify(body.title)
    if (!base) return send(res, 400, { error: 'Please enter a valid title' })
    let slug = old?.slug || base, n = 1
    while (posts.some(p => p.slug === slug && p.id !== id)) slug = `${base}-${n++}`
    const post = { id, slug, title: body.title.trim(), content: body.content, image: body.image || '', createdAt: old?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() }
    await writePosts([...posts.filter(p => p.id !== id), post])
    return send(res, 200, { ok: true, post })
  } catch { return send(res, 503, { error: 'Blog storage is unavailable' }) }
}
