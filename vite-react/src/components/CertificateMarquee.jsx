const certificates = [
  { name: 'HACCP', icon: 'fa-shield-alt', description: 'Hazard Analysis Critical Control Point' },
  { name: 'UK CERTY', icon: 'fa-award', description: 'UK Certification' },
  { name: 'ISO 9001', icon: 'fa-check-circle', description: 'Quality Management System' }
]

export default function CertificateMarquee() {
  return (
    <section className="section" style={{ padding: '60px 0', background: '#A5C03C', color: '#000' }}>
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '32px', color: '#000' }}>
          Our Certifications
        </p>
        <div 
          className="certificate-marquee"
          style={{
            display: 'flex',
            gap: '48px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%'
          }}
        >
          <div 
            className="marquee-track"
            style={{
              display: 'flex',
              gap: '48px',
              animation: 'marquee 30s linear infinite',
              width: 'max-content'
            }}
          >
            {[...certificates, ...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="certificate-item"
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '8px',
                  padding: '32px 40px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  border: '2px solid #000',
                  transition: 'transform 0.2s, background 0.2s',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <i className={`fas ${cert.icon}`} style={{ fontSize: '2.5rem', color: '#A5C03C', marginBottom: '8px' }}></i>
                <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000' }}>{cert.name}</span>
                <span style={{ fontSize: '0.85rem', color: '#000' }}>{cert.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .certificate-marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none !important;
          }
          .certificate-marquee {
            overflow-x: auto;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
