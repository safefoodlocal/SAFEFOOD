import { useState } from 'react'
import { apiCall, API_CONFIG } from '../config/api'
import { getSubmissionCooldown, recordSubmission } from '../utils/submissionGuard'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    if (getSubmissionCooldown('newsletter') > 0) {
      setStatus('rate_limited')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    
    setStatus('submitting')
    
    try {
      // Try backend API first (when ready)
      // TODO: Uncomment when backend is deployed
      // await apiCall(API_CONFIG.NEWSLETTER, {
      //   method: 'POST',
      //   body: JSON.stringify({ email })
      // })
      
      // Fallback: Placeholder mode - simulate submission
      // Remove this when backend is ready
      await new Promise(resolve => setTimeout(resolve, 1000))
      recordSubmission('newsletter')
      
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container newsletter-shell">
        <div className="newsletter-copy">
          <div className="newsletter-icon"><i className="fas fa-paper-plane"></i></div>
          <p className="eyebrow">Stay updated</p>
          <h2>Fresh market intelligence, delivered with care.</h2>
          <p>Receive harvest timing, product availability and export updates from Egypt—sent only when there is something worth sharing.</p>
          <div className="newsletter-benefits">
            <span><i className="fas fa-check"></i> Seasonal availability</span>
            <span><i className="fas fa-check"></i> Export-ready product news</span>
          </div>
        </div>
        <div className="newsletter-signup">
          <p className="newsletter-kicker">Join our buyer update list</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email">Business email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            type="submit" 
            className="button"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Keep me informed'} <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        {status === 'success' && (
          <p style={{ color: 'var(--green)', fontWeight: 700, fontSize: '0.85rem', marginTop: '12px' }}>
            Thanks for subscribing! Check your inbox for confirmation.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: '#d32f2f', fontWeight: 700, fontSize: '0.85rem', marginTop: '12px' }}>
            Please enter a valid email address.
          </p>
        )}
        {status === 'rate_limited' && (
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', marginTop: '12px' }}>
            Please wait one minute before subscribing again.
          </p>
        )}
          <p className="newsletter-privacy"><i className="fas fa-shield-alt"></i> We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
