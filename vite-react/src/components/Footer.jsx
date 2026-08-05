import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Footer() {
  return <footer><div className="container footer">
    <div className="footer-details"><a className="footer-contact" href="mailto:info@safefoodegypt.com"><i className="fas fa-envelope"></i> info@safefoodegypt.com</a><a className="footer-contact" href="tel:+201276999060"><i className="fas fa-phone-alt"></i> +20 12 76999060</a><p><i className="fas fa-map-marker-alt"></i> Cairo – Abbassia – 3 Salah Zoulfikar Street</p><p><i className="fas fa-clock"></i> Friday off</p><p><i className="fas fa-calendar-alt"></i> Since 2002 · Cairo, Egypt</p><p>© 2026 Safe Food Egypt <i className="fas fa-globe"></i></p></div>
    <div className="social-links"><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a><a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a></div>
    <div className="footer-brand"><Link to="/" className="footer-logo" aria-label="Safe Food Egypt home"><img src={logo} alt="Safe Food Egypt" /></Link><p>Enjoy the right food with right nutrition. Eat healthy.</p></div>
  </div></footer>
}