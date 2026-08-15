import { useState } from 'react'
import { getSubmissionCooldown, recordSubmission } from '../utils/submissionGuard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  
  const [businessFormData, setBusinessFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    productInterest: '',
    estimatedQuantity: '',
    message: ''
  })
  const [businessErrors, setBusinessErrors] = useState({})
  const [businessStatus, setBusinessStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleBusinessChange = (e) => {
    setBusinessFormData({ ...businessFormData, [e.target.name]: e.target.value })
    if (businessErrors[e.target.name]) {
      setBusinessErrors({ ...businessErrors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    const cooldown = getSubmissionCooldown('contact')
    if (cooldown > 0) {
      setErrors({ form: `Please wait ${Math.ceil(cooldown / 1000)} seconds before sending another message.` })
      return
    }
    
    setStatus('submitting')
    
    try {
      // Try backend API first (when ready)
      // TODO: Uncomment when backend is deployed
      // await apiCall(API_CONFIG.CONTACT, {
      //   method: 'POST',
      //   body: JSON.stringify(formData)
      // })
      
      // Fallback: Placeholder mode - simulate submission
      // Remove this when backend is ready
      await new Promise(resolve => setTimeout(resolve, 1000))
      recordSubmission('contact')
      
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', country: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateBusinessForm = () => {
    const newErrors = {}
    
    if (!businessFormData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!businessFormData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required'
    if (!businessFormData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessFormData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!businessFormData.country.trim()) newErrors.country = 'Country is required'
    if (!businessFormData.productInterest.trim()) newErrors.productInterest = 'Product interest is required'
    if (!businessFormData.message.trim()) newErrors.message = 'Message is required'
    
    setBusinessErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBusinessSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateBusinessForm()) return

    const cooldown = getSubmissionCooldown('business')
    if (cooldown > 0) {
      setBusinessErrors({ form: `Please wait ${Math.ceil(cooldown / 1000)} seconds before sending another message.` })
      return
    }
    
    setBusinessStatus('submitting')
    
    try {
      // Placeholder mode - simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      recordSubmission('business')
      
      setBusinessStatus('success')
      setBusinessFormData({ companyName: '', contactPerson: '', email: '', phone: '', country: '', productInterest: '', estimatedQuantity: '', message: '' })
      setTimeout(() => setBusinessStatus('idle'), 5000)
    } catch (err) {
      setBusinessStatus('error')
      setTimeout(() => setBusinessStatus('idle'), 5000)
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Get in touch</p>
          <h1>Let's start a conversation.</h1>
          <p>Reach out about products, quotes, or partnership opportunities.</p>
        </div>
      </section>
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <p className="eyebrow">Find Us</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '32px' }}>Our Location</h2>
          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.9706427749818!2d31.27945938540729!3d30.06979991748154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f991a740f7b%3A0x653682bb144b4bfa!2s3%20Al%20Afdal%2C%20As%20Sarayat%2C%20El%20Weili%2C%20Cairo%20Governorate%204391045!5e1!3m2!1sen!2seg!4v1785754059634!5m2!1sen!2seg"
                title="Safe Food Egypt location map — Cairo, Abbassia, 3 Salah Zoulfikar Street"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className="map-details">
              <h3>Safe Food Egypt</h3>
              <p><i className="fas fa-map-marker-alt" style={{ color: '#A5C03C', marginRight: '8px' }}></i> Cairo – Abbassia – 3 Salah Zoulfikar Street</p>
              <p><i className="fas fa-clock" style={{ color: '#A5C03C', marginRight: '8px' }}></i> Friday off</p>
              <p><i className="fas fa-phone-alt" style={{ color: '#A5C03C', marginRight: '8px' }}></i> +20 12 76999060</p>
              <p><i className="fas fa-envelope" style={{ color: '#A5C03C', marginRight: '8px' }}></i> info@safefoodegypt.com</p>
              <a
                href="https://www.google.com/maps/place/?q=place_id:0x14583f991a740f7b:0x653682bb144b4bfa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to Safe Food Egypt on Google Maps"
                className="button"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}
              >
                Get Directions <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Request a Quote</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '48px' }}>Send us your inquiry</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                style={{ borderColor: errors.name ? 'var(--green)' : 'var(--line)' }}
              />
              {errors.name && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
            </label>
            <label>
              Company Name *
              <input 
                type="text" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                style={{ borderColor: errors.company ? 'var(--green)' : 'var(--line)' }}
              />
              {errors.company && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
            </label>
            <label>
              Email *
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: errors.email ? 'var(--green)' : 'var(--line)' }}
              />
              {errors.email && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
            </label>
            <label>
              Phone (optional)
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Country *
              <input 
                type="text" 
                name="country" 
                value={formData.country}
                onChange={handleChange}
                style={{ borderColor: errors.country ? 'var(--green)' : 'var(--line)' }}
              />
              {errors.country && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.country}</span>}
            </label>
            <label>
              Message *
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                style={{ borderColor: errors.message ? 'var(--green)' : 'var(--line)' }}
              />
              {errors.message && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
            </label>
            <button type="submit" className="button" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' && (
              <p className="message" style={{ display: 'block', color: 'var(--green)' }}>
                Thank you for your message. We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="message" style={{ display: 'block', color: '#d32f2f' }}>
                Something went wrong. Please try again or contact us directly at info@safefoodegy.com
              </p>
            )}
            {errors.form && (
              <p className="message" style={{ display: 'block', color: '#d32f2f' }}>{errors.form}</p>
            )}
            <p style={{ fontSize: '0.8rem', color: 'var(--ink)', gridColumn: '1/-1' }}>
              * Required fields
            </p>
          </form>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <p className="eyebrow">Business Inquiry</p>
          <h2 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '48px' }}>Request a Business Quote</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {businessStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px', background: '#f4f7e8', borderRadius: '12px' }}>
                <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#A5C03C', marginBottom: '16px' }}></i>
                <h3 style={{ color: '#161616', marginBottom: '8px' }}>Thank you for your inquiry!</h3>
                <p style={{ color: '#161616', fontWeight: '600' }}>Our team will contact you within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleBusinessSubmit}>
                {businessErrors.form && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center' }}>{businessErrors.form}</div>}
                <label>
                  Company Name *
                  <input 
                    type="text" 
                    name="companyName" 
                    value={businessFormData.companyName}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.companyName && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.companyName}</span>}
                </label>
                <label>
                  Contact Person *
                  <input 
                    type="text" 
                    name="contactPerson" 
                    value={businessFormData.contactPerson}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.contactPerson && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.contactPerson}</span>}
                </label>
                <label>
                  Email *
                  <input 
                    type="email" 
                    name="email" 
                    value={businessFormData.email}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.email}</span>}
                </label>
                <label>
                  Phone (optional)
                  <input 
                    type="tel" 
                    name="phone" 
                    value={businessFormData.phone}
                    onChange={handleBusinessChange}
                  />
                </label>
                <label>
                  Country *
                  <input 
                    type="text" 
                    name="country" 
                    value={businessFormData.country}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.country && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.country}</span>}
                </label>
                <label>
                  Product Interest *
                  <input 
                    type="text" 
                    name="productInterest" 
                    placeholder="e.g., Frozen vegetables, Olive oil, etc."
                    value={businessFormData.productInterest}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.productInterest && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.productInterest}</span>}
                </label>
                <label>
                  Estimated Quantity (optional)
                  <input 
                    type="text" 
                    name="estimatedQuantity" 
                    placeholder="e.g., 20ft container, 5 tons, etc."
                    value={businessFormData.estimatedQuantity}
                    onChange={handleBusinessChange}
                  />
                </label>
                <label>
                  Message *
                  <textarea 
                    name="message" 
                    rows={5}
                    value={businessFormData.message}
                    onChange={handleBusinessChange}
                    required
                  />
                  {businessErrors.message && <span style={{ color: 'red', fontSize: '0.85rem' }}>{businessErrors.message}</span>}
                </label>
                <button type="submit" className="button" disabled={businessStatus === 'submitting'}>
                  {businessStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
