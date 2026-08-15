import { Link } from 'react-router-dom'
import farmTeam from '../assets/farm-team.webp'
import organicTomatoes from '../assets/organic-tomatoes.jpg'
import frozen from '../assets/frozen.png'
import dry from '../assets/dry.png'
import jam from '../assets/jam.png'
import veg from '../assets/veg.jpg'
import juice from '../assets/juice.png'
import oliveOil from '../assets/olive-oil.png'
import tomatoPaste from '../assets/tomato-paste.png'
import legumes from '../assets/legumes.png'
import Newsletter from '../components/Newsletter'
import PartnerMarquee from '../components/PartnerMarquee'
import { useEffect, useRef } from 'react'

export default function Home() {
  const storyRef = useRef(null)
  const categoriesRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const refs = [storyRef, categoriesRef, cardsRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <main>
      <section className="hero">
        <img className="hero-background" src={veg} alt="Fresh vegetables" />
        <div className="hero-scrim"></div>
        <div className="container hero-grid hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow">Egypt Export ready Since 2002</p>
            <h1>Enjoy the right food with the right nutrition.<br /><em>Eat healthy.</em></h1>
            <p>Traceable Egyptian produce and food products for international buyers who value clarity, care and
              dependable delivery.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <img className="split-image" src={farmTeam} alt="Safe Food Egypt grower inspecting fresh produce" />
          <div>
            <p className="eyebrow">Our story</p>
            <h2>For more than two decades, we have made sourcing feel more certain.</h2>
            <p className="intro">Since 2002, Safe Food Egypt has built relationships across farms, packing
              operations and global markets. We pair Egyptian abundance with an export process buyers can
              trust.</p>
            <Link to="/about" className="button">Meet Safe Food <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <p className="eyebrow">Find your category</p>
          <h2>One export partner.<br />A world of possibilities.</h2>
          <div className="category-slider" aria-label="Product categories">
            <div className="category-track">
              {[...[
                { to: '/products/fresh-produce', img: organicTomatoes, alt: 'Fresh Egyptian vegetables', name: 'Fresh Produce' },
                { to: '/products/frozen-produce', img: frozen, alt: 'Frozen Egyptian produce', name: 'Frozen Produce' },
                { to: '/products/dehydrated-products', img: dry, alt: 'Dehydrated Egyptian products', name: 'Dehydrated Products' },
                { to: '/products/jams-preserves', img: jam, alt: 'Egyptian jams and preserves', name: 'Jams & Preserves' },
                { to: '/products/juices-beverages', img: juice, alt: 'Egyptian juices and beverages', name: 'Juices & Beverages' },
                { to: '/products/olive-oil', img: oliveOil, alt: 'Egyptian olive oil', name: 'Olive Oil' },
                { to: '/products/tomato-paste', img: tomatoPaste, alt: 'Egyptian tomato paste', name: 'Tomato Paste' },
                { to: '/products/legumes-nuts', img: legumes, alt: 'Egyptian legumes and nuts', name: 'Legumes & Nuts' }
              ], ...[
                { to: '/products/fresh-produce', img: organicTomatoes, alt: 'Fresh Egyptian vegetables', name: 'Fresh Produce' },
                { to: '/products/frozen-produce', img: frozen, alt: 'Frozen Egyptian produce', name: 'Frozen Produce' },
                { to: '/products/dehydrated-products', img: dry, alt: 'Dehydrated Egyptian products', name: 'Dehydrated Products' },
                { to: '/products/jams-preserves', img: jam, alt: 'Egyptian jams and preserves', name: 'Jams & Preserves' },
                { to: '/products/juices-beverages', img: juice, alt: 'Egyptian juices and beverages', name: 'Juices & Beverages' },
                { to: '/products/olive-oil', img: oliveOil, alt: 'Egyptian olive oil', name: 'Olive Oil' },
                { to: '/products/tomato-paste', img: tomatoPaste, alt: 'Egyptian tomato paste', name: 'Tomato Paste' },
                { to: '/products/legumes-nuts', img: legumes, alt: 'Egyptian legumes and nuts', name: 'Legumes & Nuts' }
              ]].map((cat, index) => (
                <Link key={`${cat.name}-${index}`} to={cat.to} className="category">
                  <img src={cat.img} alt={cat.alt} />
                  <h3>{cat.name}</h3>
                  <b>Explore <i className="fas fa-arrow-right"></i></b>
                </Link>
              ))}
            </div>
          </div>
          <p style={{ marginTop: '28px' }}>
            <Link to="/products" className="button" style={{ background: '#fff', color: '#161616 !important' }}>View all 8 categories <i className="fas fa-arrow-right"></i></Link>
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#A5C03C', color: '#fff' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#fff' }}>Why choose us</p>
          <h2 style={{ color: '#fff', marginBottom: '48px', textAlign: 'center' }}>The Safe Food Egypt difference.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            <div style={{ textAlign: 'center', padding: '32px' }}>
              <i className="fas fa-certificate" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px', color: '#fff' }}>Certified Quality</h3>
              <p style={{ color: '#fff', fontWeight: '600', lineHeight: '1.6' }}>HACCP, ISO 9001, and Halal certified ensuring the highest standards of food safety and quality management.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '32px' }}>
              <i className="fas fa-globe-americas" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px', color: '#fff' }}>Global Reach</h3>
              <p style={{ color: '#fff', fontWeight: '600', lineHeight: '1.6' }}>Exporting to 25+ countries across Europe, Asia, and the Middle East with reliable logistics partners.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '32px' }}>
              <i className="fas fa-handshake" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px', color: '#fff' }}>Trusted Partnerships</h3>
              <p style={{ color: '#fff', fontWeight: '600', lineHeight: '1.6' }}>Building long-term relationships with 500+ growers, processors, and buyers worldwide.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our process</p>
          <h2>From Farm to Your Table</h2>
          <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#A5C03C', marginTop: '8px', animation: 'subtlePulse 2s ease-in-out infinite' }}>Eat Healthy</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--cream)', borderRadius: '12px' }}>
              <div style={{ width: '50px', height: '50px', background: '#A5C03C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>1</div>
              <h4 style={{ marginBottom: '8px' }}>Sourcing</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Selecting the finest products from certified growers</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--cream)', borderRadius: '12px' }}>
              <div style={{ width: '50px', height: '50px', background: '#A5C03C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>2</div>
              <h4 style={{ marginBottom: '8px' }}>Quality Control</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Rigorous testing and inspection at every stage</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--cream)', borderRadius: '12px' }}>
              <div style={{ width: '50px', height: '50px', background: '#A5C03C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>3</div>
              <h4 style={{ marginBottom: '8px' }}>Packaging</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Professional packing for optimal freshness</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--cream)', borderRadius: '12px' }}>
              <div style={{ width: '50px', height: '50px', background: '#A5C03C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#fff', fontWeight: '700', fontSize: '1.2rem' }}>4</div>
              <h4 style={{ marginBottom: '8px' }}>Delivery</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Reliable shipping to your destination</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container cards reveal" ref={cardsRef}>
          <article>
            <div className="card-icon"><i className="fas fa-seedling" style={{ fontSize: '2rem', color: '#A5C03C' }}></i></div>
            <p className="eyebrow">01 Source</p>
            <h3>Selected origins</h3>
            <p>We work with products and partners that meet your market's expectations.</p>
          </article>
          <article>
            <div className="card-icon"><i className="fas fa-globe" style={{ fontSize: '2rem', color: '#A5C03C' }}></i></div>
            <p className="eyebrow">02 Prepare</p>
            <h3>Ready to travel</h3>
            <p>Packing and paperwork shaped around your order and destination.</p>
          </article>
          <article>
            <div className="card-icon"><i className="fas fa-truck" style={{ fontSize: '2rem', color: '#A5C03C' }}></i></div>
            <p className="eyebrow">03 Deliver</p>
            <h3>Global reach</h3>
            <p>Support from first conversation through your shipment's next step.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Testimonials</p>
          <h2>What our partners say.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginTop: '40px' }}>
            <div style={{ padding: '32px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: '1.6', marginBottom: '16px' }}>Safe Food Egypt has been our trusted partner for over 5 years. Their commitment to quality and reliable delivery has helped us grow our business significantly.</p>
              <div style={{ fontWeight: '600', color: 'var(--ink)' }}>European Importer</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ink)', fontWeight: '600' }}>Fresh Produce Division</div>
            </div>
            <div style={{ padding: '32px', background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
                <i className="fas fa-star" style={{ color: '#A5C03C' }}></i>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: '1.6', marginBottom: '16px' }}>The team at Safe Food Egypt understands our market requirements perfectly. Their attention to detail and professional service is unmatched in the industry.</p>
              <div style={{ fontWeight: '600', color: 'var(--ink)' }}>Asian Distributor</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ink)', fontWeight: '600' }}>Food Products Group</div>
            </div>
          </div>
        </div>
      </section>
      <PartnerMarquee />
      <Newsletter />
      <div style={{ height: '2px', background: '#fff', margin: '0' }}></div>
    </main>
  )
}

