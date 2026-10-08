import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import berries from '../assets/fresh/strawberries.png'
import FoodIcon from '../components/FoodIcon'
const storyIcons = ['mug', 'oil', 'plate', 'sprout', 'citrus', 'snow']
const paths = {
  leaf: <><path d="M20 4C12 4 6 7 5 13c-.7 4 2.2 7 6 6 6-1 9-7 9-15Z"/><path d="M4 21c3-6 7-9 13-12"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
}
const Icon = ({ name }) => <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
const date = value => new Date(value).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
const box = { maxWidth: 1180, margin: 'auto', padding: 'clamp(28px,6vw,76px) 22px' }
export default function Blog() {
  const { slug } = useParams(), [posts, setPosts] = useState([])
  useEffect(() => { fetch('/api/posts').then(r => r.json()).then(setPosts).catch(() => {}) }, [])
  const post = posts.find(p => p.slug === slug), stories = [...posts].sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt))
  if (slug) {
    if (!post) return <main style={box}><Link className="journal-back" to="/blog">← Journal</Link><p>Loading story…</p></main>
    const paragraphs = post.content.split('\n\n').filter(Boolean)
    return <main className="journal journal-story" style={box}>
      <Link className="journal-back" to="/blog"><span>←</span> Back to journal</Link>
      <header className="story-heading"><span className="journal-kicker"><i/> The Safe Food journal · Fresh produce</span><h1>{post.title}</h1><div className="story-meta"><span>{date(post.createdAt)}</span><span className="meta-dot"/><span>4 minute read</span></div></header>
      {post.image && <figure className="article-art"><img src={post.image} alt={post.title}/><figcaption><i/> Selected with care · Safe Food Egypt</figcaption></figure>}
      <article className="article-reading"><p className="article-lead">{paragraphs[0]}</p>{paragraphs.slice(1).map((block,i)=>{const lines=block.split('\n'),heading=lines.length>1?lines[0]:null,copy=heading?lines.slice(1).join('\n'):block;return <section className="article-section" key={i}><span className="article-section-icon"><Icon name={['sun','leaf','heart'][i%3]}/></span><div>{heading&&<h2>{heading}</h2>}<p>{copy}</p></div></section>})}</article>
      <aside className="journal-cta"><span>FROM OUR FIELDS TO YOUR TABLE</span><p>Good food begins with good care.</p><Link to="/contact">Meet your sourcing partner <span>↗</span></Link></aside>
    </main>
  }
  return <main className="journal journal-home" style={box}><section className="journal-hero"><div className="journal-hero-copy"><span className="journal-kicker"><i/> Notes from the field</span><h1>Good food.<br/><em>Good stories.</em></h1><p>A closer look at the produce, people and care behind every harvest.</p><a href="#latest-stories" className="hero-discover">Discover our latest <span>↓</span></a></div><div className="journal-hero-art"><div className="hero-ring"/><img src={berries} alt="Fresh strawberries"/><div className="hero-note"><Icon name="leaf"/><span>GROWN IN EGYPT<br/><b>SHARED WITH CARE</b></span></div><span className="hero-edition">JOURNAL<br/>NO. 01 / 26</span></div><div className="hero-foot"><span>SAFE FOOD EGYPT</span><span>SEASONAL · THOUGHTFUL · FRESH</span><span>SCROLL TO EXPLORE ↓</span></div></section>
    <section id="latest-stories" className="latest-stories"><div className="section-heading"><div><span className="journal-kicker"><i/> Fresh from the journal</span><h2>Stories worth<br/><em>savouring.</em></h2></div><p>Thoughtful notes on the food we grow and the goodness it brings to your table.</p></div>{stories.map((p,i)=><Link className="story-card" key={p.id} to={'/blog/'+p.slug}><div className={`story-card-art story-card-art-${i%6}`}><span className="card-count">0{i+1} / {String(stories.length).padStart(2,'0')}</span>{p.image ? <img src={p.image} alt=""/> : <div className="story-topic-art" aria-hidden="true"><span className="topic-orbit"/><span className="topic-icon"><FoodIcon name={storyIcons[i%storyIcons.length]}/></span><span className="topic-spark">✦</span></div>}<span className="card-arrow">↗</span></div><div className="story-card-copy"><span className="card-category"><i/> FRESH PRODUCE · {date(p.createdAt)}</span><h3>{p.title}</h3><p>{p.content.split('\n\n')[0]}</p><span className="read-story">READ THE STORY <span>→</span></span></div></Link>)}</section>
  </main>
}
