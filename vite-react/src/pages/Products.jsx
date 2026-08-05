import { Link } from 'react-router-dom'
import { catalog } from '../data/catalog'
import { useEffect, useRef } from 'react'

const categoryIcons = {
  'fresh-produce': 'fa-apple-alt',
  'frozen-produce': 'fa-snowflake',
  'dehydrated-products': 'fa-wheat-awn',
  'jams-preserves': 'fa-jar',
  'juices-beverages': 'fa-glass-water',
  'olive-oil': 'fa-oil-can',
  'tomato-paste': 'fa-box',
  'legumes-nuts': 'fa-seedling'
}

export default function Products() {
  const gridRef = useRef(null)

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

    if (gridRef.current) observer.observe(gridRef.current)

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
    }
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow"><i className="fas fa-box"></i> Our catalogue</p>
          <h1>Export-ready Egyptian produce.</h1>
          <p>Fresh, frozen, and processed food products sourced from trusted Egyptian growers.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="catalog-grid reveal" ref={gridRef}>
            {catalog.map((category) => {
              const icon = categoryIcons[category.id] || 'fa-box'
              return (
                <div key={category.id} className="catalog-category-card">
                  <div className="category-icon">
                    <i className={`fas ${icon}`} style={{ fontSize: '2.5rem', color: '#A5C03C' }}></i>
                  </div>
                  <h3>{category.name}</h3>
                  <p className="category-count">
                    {category.subcategories.reduce((acc, sub) => acc + sub.products.length, 0)} products
                  </p>
                  <Link to={`/products/${category.id}`} className="view-button">
                    View category <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
