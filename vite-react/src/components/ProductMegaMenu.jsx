import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { catalog } from '../data/catalog'

export default function ProductMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="mega-menu-container">
      <Link
        to="/products"
        className={`mega-menu-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
        onClick={handleClick}
      >
        <i className="fas fa-box"></i> Products <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
      </Link>

      <div className={`mega-menu ${isOpen ? 'open' : ''}`}>
        <div className="mega-menu-content">
          {catalog.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="mega-menu-category"
              onClick={() => setIsOpen(false)}
            >
              <h4>{category.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
