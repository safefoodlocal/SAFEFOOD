import crypto from 'node:crypto'
import fs from 'node:fs'

const seed = JSON.parse(fs.readFileSync(new URL('../src/data/posts.json', import.meta.url), 'utf8'))
const memory = globalThis.__safeFoodLoginAttempts ||= new Map()
const secret = () => process.env.CONTROL_SECRET || ''
const cookieName = 'control'

export function send(res, status, body) { res.status(status).json(body) }
export function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  return new Promise((resolve, reject) => { let raw = ''; req.on('data', c => raw += c); req.on('end', () => { try { resolve(JSON.parse(raw || '{}')) } catch (e) { reject(e) } }) })
}
function mac(exp) { return crypto.createHmac('sha256', secret()).update(`control:${exp}`).digest('hex') }
export function authenticated(req) {
  if (!secret()) return false
  const value = (req.headers.cookie || '').split(/;\s*/).find(c => c.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1) || ''
  const [exp, signature] = value.split('.')
  if (!exp || Number(exp) < Date.now() / 1000 || !signature) return false
  const expected = mac(exp)
  return signature.length === expected.length && crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}
export function setAuthCookie(res) {
  const exp = String(Math.floor(Date.now() / 1000) + 86400)
  res.setHeader('Set-Cookie', `${cookieName}=${exp}.${mac(exp)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`)
}
export function clearAuthCookie(res) { res.setHeader('Set-Cookie', `${cookieName}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`) }
export function allowedLogin(ip) {
  const now = Date.now(), tries = (memory.get(ip) || []).filter(t => now - t < 900000)
  memory.set(ip, tries)
  return tries.length < 5
}
export function failedLogin(ip) { memory.get(ip)?.push(Date.now()) }
export function clearLogin(ip) { memory.delete(ip) }

export async function readPosts() {
  const token = process.env.GITHUB_TOKEN
  if (!token) return seed
  const response = await fetch('https://api.github.com/repos/safefoodlocal/SAFEFOOD/contents/data/posts.json', { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } })
  if (response.status === 404) return seed
  if (!response.ok) throw Error('Could not read the blog store')
  return JSON.parse(Buffer.from((await response.json()).content, 'base64').toString('utf8'))
}
export async function writePosts(posts) {
  const token = process.env.GITHUB_TOKEN
  if (!token) throw Error('Persistent blog storage is not configured')
  const url = 'https://api.github.com/repos/safefoodlocal/SAFEFOOD/contents/data/posts.json'
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
  const prior = await fetch(url, { headers })
  const sha = prior.ok ? (await prior.json()).sha : undefined
  const response = await fetch(url, { method: 'PUT', headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Update journal posts', content: Buffer.from(JSON.stringify(posts, null, 2) + '\n').toString('base64'), ...(sha ? { sha } : {}) }) })
  if (!response.ok) throw Error('Could not save the blog store')
}
