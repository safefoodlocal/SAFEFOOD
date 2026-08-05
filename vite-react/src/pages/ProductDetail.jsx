import { useParams, Link } from 'react-router-dom'
import { catalog } from '../data/catalog'
import { productSpecs } from '../data/productSpecs'
import { dehydratedSpecs } from '../data/dehydratedSpecs'
import { frozenSpecs } from '../data/frozenSpecs'
import { jamsSpecs } from '../data/jamsSpecs'
import { juiceSpecs } from '../data/juiceSpecs'
import { legumesSpecs } from '../data/legumesSpecs'
import { oliveOilSpecs } from '../data/oliveOilSpecs'
import { tomatoPasteSpecs } from '../data/tomatoPasteSpecs'
import SpecGrid from '../components/SpecGrid'

// Import dehydrated images
import dehydratedGarlic from '../assets/dehydrated/garlic.jpg'
import dehydratedHibiscus from '../assets/dehydrated/hibiscus.jpg'
import dehydratedMolokhia from '../assets/dehydrated/molokhia.jpg'
import dehydratedOnion from '../assets/dehydrated/onion.jpg'
import dehydratedPotato from '../assets/dehydrated/potato.jpg'
import raisin from '../assets/dehydrated/raisin.jpg'
import dehydratedSweetPotato from '../assets/dehydrated/sweet-potato.jpg'
import dehydratedTomato from '../assets/dehydrated/tomato.jpg'

// Import frozen images
import frozenArtichoke from '../assets/frozen/artichoke.jpg'
import frozenBroadBeans from '../assets/frozen/broad-beans.jpg'
import frozenBroccoli from '../assets/frozen/broccoli.jpg'
import frozenCauliflower from '../assets/frozen/cauliflower.jpg'
import frozenMolokhia from '../assets/frozen/molokhia.jpg'
import frozenGreenBeans from '../assets/frozen/green-beans.jpg'
import frozenGreenPeasCarrots from '../assets/frozen/green-peas-carrots.jpg'
import frozenGreenPeas from '../assets/frozen/green-peas.jpg'
import frozenMango from '../assets/frozen/mango.jpg'
import frozenOkraOne from '../assets/frozen/okra-one.jpg'
import frozenOkraZero from '../assets/frozen/okra-zero.jpg'
import frozenPomegranate from '../assets/frozen/pomegranate.jpg'
import frozenSpinach from '../assets/frozen/spinach.jpg'
import frozenStrawberry from '../assets/frozen/strawberries.jpg'
import frozenTaro from '../assets/frozen/taro.jpg'
import frenchFries from '../assets/frozen/french-fries.jpg'
import frozenSweetCorn from '../assets/frozen/sweet-corn.jpg'

// Import jams images
import apricotJam from '../assets/jams/apricot.jpg'
import dateJam from '../assets/jams/date.jpg'
import figJam from '../assets/jams/fig.jpg'
import strawberryJam from '../assets/jams/strawberry.jpg'

// Import juice images
import appleJuice from '../assets/juice/apple.jpg'
import cocktailJuice from '../assets/juice/cocktail.jpg'
import guavaJuice from '../assets/juice/guava.jpg'
import mangoJuice from '../assets/juice/mango.jpg'

// Import legumes images
import peeledPeanut from '../assets/legumes/peeled-peanut.jpg'
import shelledPeanut from '../assets/legumes/shelled-peanut.jpg'
import whiteKidney from '../assets/legumes/white-kidney.jpg'

// Import olive oil images
import oliveOilGlass from '../assets/olive-oil/glass-bottle.jpg'
import oliveOilMetal from '../assets/olive-oil/metal-box.jpg'
import oliveOilPlastic from '../assets/olive-oil/plastic-bottle.jpg'

// Import tomato paste images
import aseptic from '../assets/tomato-paste/aseptic.jpg'
import jar from '../assets/tomato-paste/jar.jpg'
import sachet from '../assets/tomato-paste/sachet.jpg'
import tin from '../assets/tomato-paste/tin.jpg'

const productImages = {
  // Dehydrated
  'dehydrated-garlic': dehydratedGarlic,
  'dehydrated-hibiscus': dehydratedHibiscus,
  'dehydrated-molokhia': dehydratedMolokhia,
  'dehydrated-onion': dehydratedOnion,
  'dehydrated-potatoes': dehydratedPotato,
  'raisins': raisin,
  'dehydrated-sweet-potato': dehydratedSweetPotato,
  'dehydrated-tomatoes': dehydratedTomato,
  // Frozen
  'frozen-artichoke': frozenArtichoke,
  'frozen-broad-beans': frozenBroadBeans,
  'frozen-broccoli': frozenBroccoli,
  'frozen-cauliflower': frozenCauliflower,
  'frozen-molokhia': frozenMolokhia,
  'frozen-green-beans': frozenGreenBeans,
  'green-peas-carrots': frozenGreenPeasCarrots,
  'green-peas-frozen': frozenGreenPeas,
  'frozen-mango': frozenMango,
  'okra': frozenOkraZero,
  'frozen-pomegranate': frozenPomegranate,
  'frozen-spinach': frozenSpinach,
  'frozen-strawberry': frozenStrawberry,
  'frozen-taro': frozenTaro,
  'french-fries': frenchFries,
  'frozen-sweet-corn': frozenSweetCorn,
  // Jams
  'apricot-jam': apricotJam,
  'date-jam': dateJam,
  'fig-jam': figJam,
  'strawberry-jam': strawberryJam,
  // Juice
  'apple-juice': appleJuice,
  'cocktail-juice': cocktailJuice,
  'guava-juice': guavaJuice,
  'mango-juice': mangoJuice,
  // Legumes
  'peeled-peanuts': peeledPeanut,
  'shelled-peanuts': shelledPeanut,
  'white-kidney-beans': whiteKidney,
  // Olive oil
  'olive-oil-glass': oliveOilGlass,
  'olive-oil-metal': oliveOilMetal,
  'olive-oil-plastic': oliveOilPlastic,
  // Tomato paste
  'aseptic-packaging': aseptic,
  'jars': jar,
  'sachets': sachet,
  'tins-cans': tin
}

export default function ProductDetail() {
  const { category, subcategory, product } = useParams()

  // Find the product in the catalog
  const categoryData = catalog.find(c => c.id === category)
  const subcategoryData = categoryData?.subcategories.find(s => s.id === subcategory)
  const productData = subcategoryData?.products.find(p => p.id === product)
  
  // Get specs based on category
  let specs
  if (category === 'fresh-produce') {
    specs = productSpecs[product]
  } else if (category === 'dehydrated-products') {
    specs = dehydratedSpecs[product]
  } else if (category === 'frozen-produce') {
    specs = frozenSpecs[product]
  } else if (category === 'jams-preserves') {
    specs = jamsSpecs[product]
  } else if (category === 'juices-beverages') {
    specs = juiceSpecs[product]
  } else if (category === 'legumes-nuts') {
    specs = legumesSpecs[product]
  } else if (category === 'olive-oil') {
    specs = oliveOilSpecs[product]
  } else if (category === 'tomato-paste') {
    specs = tomatoPasteSpecs[product]
  }

  const productImage = productImages[product]

  if (!productData) {
    return (
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Not Found</p>
            <h1>Product not found</h1>
            <Link to="/products" className="button">Back to Products</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link to="/products">Products</Link> / {categoryData?.name} / {subcategoryData?.name}
          </p>
          <h1>{productData.name}</h1>
          <p>Export-ready Egyptian produce from Safe Food Egypt.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="product-detail">
            {productImage && (
              <div className="product-detail-image product-visual">
                <img src={productImage} alt={productData.name} />
              </div>
            )}
            <div className="product-detail-info">
              <h2>Product Specifications</h2>
              {specs ? (
                <SpecGrid specs={specs} />
              ) : (
                <p>Specifications coming soon.</p>
              )}
              <div style={{ marginTop: '32px' }}>
                <Link to="/contact" className="button">Request a quote <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            <aside className="product-contact-card">
              <div className="product-contact-icon"><i className="fas fa-headset"></i></div>
              <p className="eyebrow">Export support</p><h3>Ready to discuss your order?</h3>
              <p>Tell us the product, volume and destination. Our export team will prepare the right offer.</p>
              <a className="product-contact-line" href="mailto:info@safefoodegypt.com"><i className="fas fa-envelope"></i> info@safefoodegypt.com</a>
              <div className="product-contact-meta"><i className="fas fa-clock"></i><span><strong>Opening hours</strong>Friday off</span></div>
              <div className="product-contact-meta"><i className="fas fa-location-dot"></i><span><strong>Our office</strong>Cairo – Abbassia – 3 Salah Zoulfikar Street</span></div>
              <Link to="/contact" className="button product-contact-button">Request a Quote <i className="fas fa-arrow-right"></i></Link>
            </aside>          </div>
        </div>
      </section>
    </main>
  )
}

