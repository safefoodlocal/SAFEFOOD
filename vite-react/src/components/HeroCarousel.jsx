import { useState, useEffect } from 'react'
import farmHarvest from '../assets/farm-harvest.webp'
import organicTomatoes from '../assets/organic-tomatoes.jpg'
import egyptianGrapes from '../assets/egyptian-grapes.jpg'

const heroImages = [
  { src: farmHarvest, alt: 'Fresh vegetables harvested for Safe Food Egypt' },
  { src: organicTomatoes, alt: 'Fresh organic tomatoes from Egyptian farms' },
  { src: egyptianGrapes, alt: 'Egyptian grapes for export markets' }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-image">
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '120px 120px 12px 12px',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <span className="hero-stamp">From Egyptian soil<br />to global shelves</span>
    </div>
  )
}
