import { useParams, Link } from 'react-router-dom'
import { catalog } from '../data/catalog'

// Import fresh produce images
import artichoke from '../assets/fresh/artichoke.png'
import broccoli from '../assets/fresh/broccoli.png'
import cantaloupe from '../assets/fresh/cantalopue.png'
import capsicum from '../assets/fresh/capsicum.png'
import carrot from '../assets/fresh/carrot.png'
import cauliflower from '../assets/fresh/cauliflower.png'
import chili from '../assets/fresh/chili.png'
import cucumber from '../assets/fresh/cucumber.png'
import dates from '../assets/fresh/dates.png'
import eggplant from '../assets/fresh/eggplant.png'
import garlic from '../assets/fresh/garlic.png'
import grape from '../assets/fresh/grape.png'
import greenPeas from '../assets/fresh/green peas.png'
import guava from '../assets/fresh/guava.png'
import lemon from '../assets/fresh/lemon.png'
import lettuce from '../assets/fresh/lettuce.png'
import mango from '../assets/fresh/mango.png'
import melon from '../assets/fresh/melon.png'
import onion from '../assets/fresh/onion.png'
import orange from '../assets/fresh/orange.png'
import pomegranate from '../assets/fresh/pomegranate.png'
import potato from '../assets/fresh/potato.png'
import pumpkin from '../assets/fresh/pumpkin.png'
import strawberries from '../assets/fresh/strawberries.png'
import sweetPotato from '../assets/fresh/sweet potato.png'
import taro from '../assets/fresh/taro.png'
import tomato from '../assets/fresh/tomato.png'
import zuccini from '../assets/fresh/zuccini.png'

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
  // Fresh produce
  'cantaloupe': cantaloupe,
  'dates': dates,
  'grapes': grape,
  'guava': guava,
  'lemon': lemon,
  'mango': mango,
  'orange': orange,
  'pomegranate': pomegranate,
  'strawberries': strawberries,
  'watermelon': melon,
  'artichoke': artichoke,
  'broccoli': broccoli,
  'cauliflower': cauliflower,
  'capsicum': capsicum,
  'cucumber': cucumber,
  'eggplant': eggplant,
  'green-peas': greenPeas,
  'hot-chili': chili,
  'lettuce': lettuce,
  'pumpkin': pumpkin,
  'tomatoes': tomato,
  'zucchini': zuccini,
  'carrot': carrot,
  'garlic': garlic,
  'onion': onion,
  'potatoes': potato,
  'sweet-potatoes': sweetPotato,
  'taro': taro,
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

export default function ProductCategory() {
  const { category } = useParams()
  
  const categoryData = catalog.find(c => c.id === category)
  const categoryName = categoryData?.name || category

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Category</p>
          <h1>{categoryName}</h1>
          <p>Export-ready products from this category.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="category-nav">
            {catalog.map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className={cat.id === category ? 'active' : ''}>
                {cat.name}
              </Link>
            ))}
          </div>
          {categoryData && (
            <>
              {categoryData.subcategories.map((subcategory) => (
                <div key={subcategory.id} style={{ marginBottom: '48px' }}>
                  <h3 style={{ marginBottom: '24px', color: 'var(--color-primary-dark)' }}>{subcategory.name}</h3>
                  <div className="product-grid">
                    {subcategory.products.map((product) => (
                      <Link 
                        key={product.id} 
                        to={`/products/${category}/${subcategory.id}/${product.id}`}
                        className="product-card-image"
                      >
                        <img src={productImages[product.id] || ''} alt={product.name} />
                        <h3>{product.name}</h3>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="spec-note">
            <p><strong>Note:</strong> Product specifications, availability, and pricing vary by season. Contact us for current catalog and quotes.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
