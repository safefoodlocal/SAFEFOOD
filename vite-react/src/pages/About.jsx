import farmTeam from '../assets/farm-team.webp'
import haccp from '../assets/haccp.jpg'
import iso from '../assets/iso.jpg'
import halal from '../assets/halal.jpg'
import dominicanRepublic from '../assets/our-markets/dominican-republic.png'
import germany from '../assets/our-markets/germany.png'
import maldives from '../assets/our-markets/maldives.png'
import mauritania from '../assets/our-markets/mauritania.png'
import panama from '../assets/our-markets/panama.png'
import portugal from '../assets/our-markets/portugal.png'
import { useEffect, useRef } from 'react'

export default function About() {
  const storyRef = useRef(null)
  const timelineRef = useRef(null)

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

    const refs = [storyRef, timelineRef]
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
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Since 2002</p>
          <h1 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Our story is built on the ground.</h1>
          <p>Safe Food Egypt brings growers, processors and global buyers closer together through dependable food export.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split reveal" ref={storyRef}>
          <div>
            <p className="eyebrow">What we believe</p>
            <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Food travels best when everyone behind it is visible.</h2>
            <p className="intro">We began in 2002 with a simple belief: Egyptian agriculture deserves a clear path to the world. Today, we support international buyers with a thoughtful product range, practical commercial support and a commitment to doing the details well.</p>
            <p className="intro">Our role is not just to move food. It is to make every sourcing decision clearer, from variety and packing to the documents that arrive with your order.</p>
          </div>
          <img className="split-image" src={farmTeam} alt="Farm team at Safe Food Egypt" />
        </div>
      </section>
      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-emblem" aria-hidden="true">
            <i className="fas fa-seedling"></i>
            <span>2002</span>
          </div>
          <div>
            <p className="eyebrow">Founder & CEO</p>
            <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Mr. Ashraf Attia</h2>
            <p className="founder-lead">A belief in Egyptian agriculture and the people behind it started everything.</p>
            <p>Mr. Ashraf Attia founded Safe Food Egypt to create a more dependable link between Egypt's growers and international markets. What began as a focused export business grew through long-term relationships, disciplined follow-through and a clear respect for every shipment carrying the company's name.</p>
            <p>His vision remains practical: make quality visible, make communication direct and help every customer source with confidence. Today, that founding mindset guides the team from first product inquiry to final delivery.</p>
            <div className="founder-values">
              <div><i className="fas fa-handshake"></i><span><strong>Built on trust</strong>Partnerships that last beyond a single order.</span></div>
              <div><i className="fas fa-compass"></i><span><strong>Led with purpose</strong>A steady standard for quality and accountability.</span></div>
              <div><i className="fas fa-globe-africa"></i><span><strong>Rooted in Egypt</strong>Local knowledge with a global outlook.</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: '#A5C03C', color: '#fff' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#A5C03C' }}>By the numbers</p>
          <h2 style={{ color: '#fff', marginBottom: '48px', textAlign: 'center', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Two decades of impact.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
            <div>
              <p style={{ fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>24+</p>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>Years in Business</p>
            </div>
            <div>
              <p style={{ fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>25+</p>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>Countries Served</p>
            </div>
            <div>
              <p style={{ fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>500+</p>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>Trusted Partners</p>
            </div>
            <div>
              <p style={{ fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>50K+</p>
              <p style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>Tons Exported</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-commitment">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Details that protect every relationship.</h2>
          <div className="commitment-grid">
            <article><i className="fas fa-clipboard-check"></i><h3>Clear specifications</h3><p>We align product, packing and documentation expectations before an order moves forward.</p></article>
            <article><i className="fas fa-microscope"></i><h3>Care at every stage</h3><p>From sourcing to handling, we stay close to the details that support consistent quality.</p></article>
            <article><i className="fas fa-route"></i><h3>Reliable export support</h3><p>Our team helps make the path from Egyptian origin to your destination feel straightforward.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our promise</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Why global buyers choose us.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginTop: '40px' }}>
            <div style={{ padding: '32px', background: 'var(--cream)', borderRadius: '12px', borderLeft: '4px solid #A5C03C' }}>
              <i className="fas fa-leaf" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px' }}>Premium Quality</h3>
              <p>Every product meets international standards with rigorous quality control at every stage.</p>
            </div>
            <div style={{ padding: '32px', background: 'var(--cream)', borderRadius: '12px', borderLeft: '4px solid #A5C03C' }}>
              <i className="fas fa-shipping-fast" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px' }}>Reliable Delivery</h3>
              <p>On-time shipments with full documentation support for seamless customs clearance.</p>
            </div>
            <div style={{ padding: '32px', background: 'var(--cream)', borderRadius: '12px', borderLeft: '4px solid #A5C03C' }}>
              <i className="fas fa-headset" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px' }}>Dedicated Support</h3>
              <p>Personal account managers who understand your market and product requirements.</p>
            </div>
            <div style={{ padding: '32px', background: 'var(--cream)', borderRadius: '12px', borderLeft: '4px solid #A5C03C' }}>
              <i className="fas fa-hand-holding-usd" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '12px' }}>Competitive Pricing</h3>
              <p>Direct-from-source pricing with flexible payment terms for long-term partnerships.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Certified & Trusted</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '32px' }}>Quality you can rely on.</h2>
          <div className="cert-badges-large" style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={haccp} alt="HACCP Certified" style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '16px' }} />
              <p style={{ fontWeight: '700', color: 'var(--ink)' }}>HACCP</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={iso} alt="ISO 9001 Certified" style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '16px' }} />
              <p style={{ fontWeight: '700', color: 'var(--ink)' }}>ISO 9001</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={halal} alt="Halal Certified" style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '16px' }} />
              <p style={{ fontWeight: '700', color: 'var(--ink)' }}>Halal</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section certifications-about" id="certifications">
        <div className="container">
          <p className="eyebrow">Quality & standards</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Certified care behind every shipment.</h2>
          <p className="intro">Our quality systems help keep food safety, consistency and traceability visible from origin to destination.</p>
          <div className="certification-grid">
            <article className="certification-card"><img src={haccp} alt="HACCP Certificate" /><div><i className="fas fa-shield-alt"></i><h3>HACCP</h3><p>Hazard Analysis Critical Control Point</p></div></article>
            <article className="certification-card"><img src={iso} alt="ISO 9001 Certificate" /><div><i className="fas fa-award"></i><h3>ISO 9001</h3><p>Quality Management System</p></div></article>
            <article className="certification-card"><img src={halal} alt="Halal Certificate" /><div><i className="fas fa-check-circle"></i><h3>Halal</h3><p>Halal Certification</p></div></article>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <p className="eyebrow">Our markets</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Exporting to the world.</h2>
          <p className="intro">We serve customers across multiple continents with reliable Egyptian produce.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={dominicanRepublic} alt="Dominican Republic" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Dominican Republic</h3>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={germany} alt="Germany" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Germany</h3>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={maldives} alt="Maldives" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Maldives</h3>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={mauritania} alt="Mauritania" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Mauritania</h3>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={panama} alt="Panama" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Panama</h3>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,.07)', transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.12)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.07)'; }}>
              <img src={portugal} alt="Portugal" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--ink)', margin: '0' }}>Portugal</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="container reveal" ref={timelineRef}>
          <p className="eyebrow">The journey</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>More than 20 years of growing connections.</h2>
          <div className="timeline">
            <div>
              <strong>2002</strong>
              <span>Safe Food Egypt begins serving agricultural export markets.</span>
            </div>
            <div>
              <strong>2008</strong>
              <span>Expanded product range to include frozen and processed goods.</span>
            </div>
            <div>
              <strong>2015</strong>
              <span>Reached 25+ export destinations across Europe, Asia, and the Middle East.</span>
            </div>
            <div>
              <strong>2020</strong>
              <span>Enhanced quality control and traceability systems.</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Continuing to grow partnerships and expand global reach.</span>
            </div>
          </div>
        </div>
      </section>
      {/* LocalBusiness structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Safe Food Egypt",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Salah Zoulfikar Street",
            "addressLocality": "Abbassia",
            "addressRegion": "Cairo",
            "addressCountry": "EG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.06979991748154,
            "longitude": 31.27945938540729
          },
          "telephone": "+20 12 76999060",
          "email": "info@safefoodegypt.com",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday"
            ],
            "opens": "08:30",
            "closes": "17:30"
          },
          "foundingDate": "2002"
        })}
      </script>
    </main>
  )
}

