import haccp from '../assets/haccp.jpg'
import iso from '../assets/iso.jpg'
import halal from '../assets/halal.jpg'

export default function Certificates() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Quality & Standards</p>
          <h1>Certifications we hold.</h1>
          <p>Our commitment to quality through recognized international standards.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--muted)' }}>
              At Safe Food Egypt, professionalism is at the core of everything we do. We maintain the highest standards of quality control, food safety, and operational excellence. Our certifications demonstrate our unwavering commitment to delivering premium Egyptian agricultural products to international markets. With over two decades of experience, we have built a reputation for reliability, transparency, and excellence in the global food export industry.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={haccp} alt="HACCP Certificate" style={{ 
                width: '100%', 
                maxWidth: '400px', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }} />
              <h3 style={{ marginTop: '16px' }}>HACCP</h3>
              <p style={{ color: 'var(--muted)' }}>Hazard Analysis Critical Control Point</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={iso} alt="ISO Certificate" style={{ 
                width: '100%', 
                maxWidth: '400px', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }} />
              <h3 style={{ marginTop: '16px' }}>ISO 9001</h3>
              <p style={{ color: 'var(--muted)' }}>Quality Management System</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={halal} alt="Halal Certificate" style={{ 
                width: '100%', 
                maxWidth: '400px', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }} />
              <h3 style={{ marginTop: '16px' }}>Halal</h3>
              <p style={{ color: 'var(--muted)' }}>Halal Certification</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
