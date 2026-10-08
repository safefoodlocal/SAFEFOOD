import { Link } from 'react-router-dom'
import { catalog } from '../data/catalog'
import { useEffect, useRef } from 'react'
import FoodIcon from '../components/FoodIcon'

const categoryIcons = {
  'fresh-produce': 'apple', 'frozen-produce': 'snow',
  'dehydrated-products': 'wheat', 'jams-preserves': 'jar',
  'juices-beverages': 'glass', 'olive-oil': 'oil',
  'tomato-paste': 'tomato', 'legumes-nuts': 'sprout'
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
              const icon = categoryIcons[category.id] || 'apple'
              return (
                <Link key={category.id} to={`/products/${category.id}`} className="catalog-category-card">
                  <div className={`category-art category-art-${category.id}`}>
                    <span className="category-orbit orbit-one"/><span className="category-orbit orbit-two"/>
                    <span className="category-art-icon"><FoodIcon name={icon}/></span>
                    <span className="category-spark spark-one">✦</span><span className="category-spark spark-two">✧</span>
                    <span className="category-icon"><FoodIcon name={icon}/></span>
                  </div>
                  <div className="category-card-copy">
                    <span className="category-kicker">SAFE FOOD · EGYPT</span>
                    <h3>{category.name}</h3>
                    <p className="category-count">
                      {category.subcategories.reduce((acc, sub) => acc + sub.products.length, 0)} products
                    </p>
                    <span className="view-button">Explore collection <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
