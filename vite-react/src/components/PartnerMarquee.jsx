import cib from '../assets/cib.png'
import partnerThree from '../assets/desfgsd.png'
import dhl from '../assets/DHL-Symbol.png'
import eBank from '../assets/EBank_Logo.png'
import ecs from '../assets/ecs.png'
import partnerEight from '../assets/g1.png'
import partnerNine from '../assets/partner-image.jfif'
import partnerTen from '../assets/kjdsnf.png'
import partnerEleven from '../assets/swdfsd.png'
import partnerBm from '../assets/bm.jfif'
import partnerImages from '../assets/images.jfif'
import partnerKk from '../assets/kk.png'

const featuredPartners = []

const partners = [
  { name: 'CIB', logo: cib },
  { name: 'Partner', logo: partnerThree },
  { name: 'DHL', logo: dhl },
  { name: 'E-Bank', logo: eBank },
  { name: 'ECS', logo: ecs },
  { name: 'Partner', logo: partnerEight },
  { name: 'Partner', logo: partnerNine },
  { name: 'Partner', logo: partnerTen },
  { name: 'Partner', logo: partnerEleven },
  { name: 'Partner', logo: partnerBm },
  { name: 'Partner', logo: partnerImages },
  { name: 'Partner', logo: partnerKk },
]

export default function PartnerMarquee() {
  return (
    <section className="section partners-section">
      <div className="container">
        <p className="eyebrow partners-eyebrow">Our partners</p>
        <h2 className="partners-heading">Trusted connections across every step.</h2>
        <div className="featured-partners">
          {featuredPartners.map((partner) => (
            <div className="partner-logo featured-partner" key={partner.name}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
        <div className="partners-slider" aria-label="More Safe Food Egypt partners">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
            <div className="partner-logo" key={`${partner.name}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
