import { useState, useEffect } from 'react'
import { Award, Shield, CheckCircle } from 'lucide-react'

const certificates = [
  { name: 'HACCP', icon: Shield, description: 'Hazard Analysis Critical Control Point' },
  { name: 'UK CERTY', icon: Award, description: 'UK Certification' },
  { name: 'ISO 9001', icon: CheckCircle, description: 'Quality Management System' }
]

export default function CertificateSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="certificate-slider">
      <div className="certificate-track">
        {certificates.map((cert, index) => (
          <div 
            key={cert.name} 
            className={`certificate-item ${index === currentIndex ? 'active' : ''}`}
          >
            <cert.icon size={32} />
            <span className="cert-name">{cert.name}</span>
            <span className="cert-desc">{cert.description}</span>
          </div>
        ))}
      </div>
      <div className="certificate-indicators">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show certificate ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
