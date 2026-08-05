import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { catalog } from '../data/catalog'

export default function ProductMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <div 
      className="mega-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to="/products" 
        className={`mega-menu-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
        onClick={(e) => {
          if (window.innerWidth > 850) {
            e.preventDefault()
          }
        }}
      >
        <i className="fas fa-box"></i> Products ▼
      </Link>
      
      <div className={`mega-menu ${isOpen ? 'open' : ''}`}>
        <div className="mega-menu-content">
          {catalog.map((category) => (
            <Link 
              key={category.id} 
              to={`/products/${category.id}`}
              className="mega-menu-category"
            >
              <h4>{category.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
