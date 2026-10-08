import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import ProductDetail from './pages/ProductDetail'
import DownloadCatalogue from './pages/DownloadCatalogue'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Control from './pages/Control'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Navigate to="/about" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/products/:category/:subcategory/:product" element={<ProductDetail />} />
        <Route path="/download-catalogue" element={<DownloadCatalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/control" element={<Control />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
