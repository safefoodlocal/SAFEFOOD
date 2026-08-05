import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import haccp from '../assets/haccp.png'
import halal from '../assets/halal.png'
import iso from '../assets/iso.png'
import ProductMegaMenu from './ProductMegaMenu'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { const onScroll = () => setIsScrolled(window.scrollY > 10); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return (<header className={isScrolled ? 'header scrolled' : 'header'}><div className="container nav">
    <Link to="/" className="logo"><img src={logo} alt="Safe Food Egypt" /></Link>
    <div className="cert-badges"><img src={haccp} alt="HACCP Certified" /><img src={iso} alt="ISO 9001 Certified" /><img src={halal} alt="Halal Certified" /></div>
    <button className="menu" aria-label="Open menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}><i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i></button>
    <nav className={isOpen ? 'links open' : 'links'}>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}><i className="fas fa-home"></i> Home</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}><i className="fas fa-info-circle"></i> About us</Link><ProductMegaMenu />
      <Link to="/download-catalogue" className={location.pathname === '/download-catalogue' ? 'active' : ''}><i className="fas fa-book-open" style={{ color: '#A5C03C' }}></i> Catalogue</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}><i className="fas fa-envelope"></i> Reach us</Link>
      <Link to="/contact" className="button quote-button">Request a quote <i className="fas fa-arrow-right"></i></Link>
    </nav>
  </div></header>)
}
