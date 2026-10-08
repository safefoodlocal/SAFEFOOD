import { useEffect, useState } from 'react'

const empty = { title: '', content: '', image: '' }
export default function Control() {
  const [posts, setPosts] = useState([]), [user, setUser] = useState(''), [pass, setPass] = useState('')
  const [form, setForm] = useState(empty), [edit, setEdit] = useState(null), [loggedIn, setLoggedIn] = useState(false), [error, setError] = useState('')
  async function api(path, body) {
    const response = await fetch('/api' + path, { method: body ? 'POST' : 'GET', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: body && JSON.stringify(body) })
    const result = await response.json().catch(() => ({}))
    if (!response.ok) throw Error(result.error || response.status)
    return result
  }
  async function load() { const items = await api('/admin/posts'); setPosts(items); setLoggedIn(true); setError('') }
  useEffect(() => { load().catch(() => setLoggedIn(false)) }, [])
  function update(key, value) { setForm(current => ({ ...current, [key]: value })) }
  async function chooseImage(event) {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024) { setError('Choose an image smaller than 4 MB.'); event.target.value = ''; return }
    const reader = new FileReader()
    reader.onload = () => { update('image', reader.result); setError('') }
    reader.readAsDataURL(file)
  }
  async function save(event) {
    event.preventDefault()
    try { await api('/posts', { ...form, id: edit }); setForm(empty); setEdit(null); await load() }
    catch (error) { setError(error.message.includes('storage') ? 'Blog storage is not configured on the live site yet.' : 'Could not save this story. Please sign in again and retry.') }
  }
  async function login(event) {
    event.preventDefault()
    try { await api('/login', { user, pass }); setPass(''); await load() }
    catch { setError('Login failed. Check your credentials and try again.') }
  }
  async function remove(post) {
    if (!window.confirm(`Delete “${post.title}”?`)) return
    try { const response = await fetch('/api/posts/' + post.id, { method: 'DELETE', credentials: 'include' }); if (!response.ok) throw Error(); await load() }
    catch { setError('Could not delete this story.') }
  }
  return <main className="control-page"><meta name="robots" content="noindex"/><div className="control-wrap"><p className="control-kicker">SAFE FOOD EGYPT · JOURNAL</p><h1>{loggedIn ? 'Story editor' : 'Journal access'}</h1>
    {!loggedIn ? <form className="control-login" onSubmit={login}><input required aria-label="Username" autoComplete="username" autoCapitalize="off" value={user} onChange={e => setUser(e.target.value)} placeholder="Username"/><input required type="password" autoComplete="current-password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password"/><button>Sign in</button></form> : <>
      <form className="control-editor" onSubmit={save}><input required value={form.title} onChange={e => update('title', e.target.value)} placeholder="Story title"/><textarea required value={form.content} onChange={e => update('content', e.target.value)} placeholder="Write your story…"/>
        <label className="image-upload"><input type="file" accept="image/*" onChange={chooseImage}/><span>＋</span><b>{form.image ? 'Change story image' : 'Add a story image'}</b><small>JPG, PNG or WebP · up to 4 MB</small></label>
        {form.image && <div className="upload-preview"><img src={form.image} alt="Story preview"/><button type="button" onClick={() => update('image', '')}>Remove image</button></div>}
        <div className="control-actions"><button>{edit ? 'Save changes' : 'Publish story'}</button><button type="button" onClick={() => { setForm(empty); setEdit(null); setError('') }}>Clear</button><button type="button" onClick={() => fetch('/api/logout', { method: 'POST', credentials: 'include' }).then(() => setLoggedIn(false))}>Sign out</button></div>
      </form><section className="control-posts"><h2>Published stories</h2>{posts.map(post => <article key={post.id}><span>{post.title}</span><button onClick={() => { setEdit(post.id); setForm({ title: post.title, content: post.content, image: post.image || '' }) }}>Edit</button><button onClick={() => remove(post)}>Delete</button></article>)}</section>
    </>}{error && <p className="control-error" role="alert">{error}</p>}</div></main>
}
