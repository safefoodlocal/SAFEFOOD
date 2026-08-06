export default function DownloadCatalogue() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Catalogue</p>
          <h1>Download Our Full Product Catalogue.</h1>
          <p>Explore our complete range of fresh, frozen, and processed Egyptian food products.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <p className="intro" style={{ marginBottom: '32px' }}>
            Our comprehensive catalogue includes detailed product specifications, packaging options, and availability information for all our export-ready Egyptian produce.
          </p>
          <div style={{ background: 'var(--pale)', borderRadius: '12px', padding: '48px', marginBottom: '32px' }}>
            <i className="fas fa-file-pdf" style={{ fontSize: '4rem', color: '#A5C03C', marginBottom: '24px' }}></i>
            <h2 style={{ marginBottom: '16px', color: 'var(--ink)' }}>Safe Food Egypt Product Catalogue</h2>
            <p style={{ color: 'var(--ink)', marginBottom: '32px' }}>
              Complete product listings with specifications, packaging details, and seasonal availability.
            </p>
            <a 
              href="https://download1078.mediafire.com/h4mqhj5o2uzgezpEx_ytXcIKDXBh6u0D_0pO3UEjddEsdY3LZrJUlrbZyNYcqLbJP8M9WSn0NQ4p682PdNib-7iI5nIQR3DMhrE0MmAIsClUlWFkKTsx2_zv3snOM9uyVKHsDaze-uf9pINU4guHRLUMjIoNt7vDP3RQ3rpwxtFVcg/hu7rlqp3p903i6l/safe+food+catalogue+compressed+%283%29.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="button quote-button"
              style={{ display: 'inline-flex', textDecoration: 'none' }}
            >
              <i className="fas fa-download" style={{ marginRight: '12px' }}></i>
              Download Catalogue <i className="fas fa-arrow-right" style={{ marginLeft: '12px' }}></i>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-box-open" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '8px', color: 'var(--ink)' }}>8 Categories</h3>
              <p style={{ color: 'var(--ink)', fontSize: '0.9rem' }}>Fresh, frozen, dehydrated, jams, juice, legumes, olive oil, and tomato paste</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-list-check" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '8px', color: 'var(--ink)' }}>Detailed Specs</h3>
              <p style={{ color: 'var(--ink)', fontSize: '0.9rem' }}>Complete specifications for every product including packing and storage</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-calendar-check" style={{ fontSize: '2rem', color: '#A5C03C', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '8px', color: 'var(--ink)' }}>Seasonal Info</h3>
              <p style={{ color: 'var(--ink)', fontSize: '0.9rem' }}>Availability and seasonal variations for informed planning</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
