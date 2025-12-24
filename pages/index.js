import Head from 'next/head'
import { useState } from 'react'

const stores = [
  {
    id: 1,
    name: 'Flipkart',
    logo: '🛒',
    rating: 4.5,
    trustScore: 95,
    priceRange: '💰 Budget Friendly',
    speciality: 'Electronics, Fashion, Home',
    highlights: ['Big Billion Days Sale', 'SuperCoins Rewards', 'Flipkart Plus Free Delivery', 'EMI Options'],
    pros: ['Massive discounts on electronics', 'Fast delivery', 'Easy returns', 'COD available'],
    cons: ['Some sellers sell fake products', 'Customer service can be slow'],
    website: 'https://www.flipkart.com',
    category: ['electronics', 'fashion', 'home']
  },
  {
    id: 2,
    name: 'Amazon India',
    logo: '📦',
    rating: 4.6,
    trustScore: 97,
    priceRange: '💰💰 Mid Range',
    speciality: 'Everything - A to Z',
    highlights: ['Prime Membership', 'Great Indian Festival', 'Amazon Pay Cashback', 'Subscribe & Save'],
    pros: ['Genuine products', 'Fast Prime delivery', 'Excellent customer service', 'Easy returns'],
    cons: ['Slightly higher prices', 'Prime membership required for best deals'],
    website: 'https://www.amazon.in',
    category: ['electronics', 'fashion', 'home', 'grocery']
  },
  {
    id: 3,
    name: 'Meesho',
    logo: '🎀',
    rating: 4.2,
    trustScore: 85,
    priceRange: '💰 Lowest Prices',
    speciality: 'Fashion, Home Decor',
    highlights: ['Factory Direct Prices', 'Free Delivery', 'COD on Everything', 'No Minimum Order'],
    pros: ['Extremely low prices', 'Free delivery', 'Good for reselling', 'Wide variety'],
    cons: ['Quality varies', 'Longer delivery times', 'Limited brand options'],
    website: 'https://www.meesho.com',
    category: ['fashion', 'home']
  },
  {
    id: 4,
    name: 'Myntra',
    logo: '👗',
    rating: 4.4,
    trustScore: 92,
    priceRange: '💰💰 Mid Range',
    speciality: 'Fashion & Lifestyle',
    highlights: ['EORS Sale', 'Insider Rewards', 'Brand Authenticity', 'Style Tips'],
    pros: ['100% genuine brands', 'Great fashion selection', 'Easy exchanges', 'Style recommendations'],
    cons: ['Higher prices', 'Limited non-fashion items'],
    website: 'https://www.myntra.com',
    category: ['fashion']
  },
  {
    id: 5,
    name: 'Ajio',
    logo: '✨',
    rating: 4.3,
    trustScore: 90,
    priceRange: '💰💰 Mid Range',
    speciality: 'Premium Fashion',
    highlights: ['Exclusive Brands', 'Big Bold Sale', 'Ajio Luxe', 'Sustainable Fashion'],
    pros: ['Unique collections', 'Good quality', 'Frequent sales', 'Premium brands'],
    cons: ['Delivery can be slow', 'Limited size availability'],
    website: 'https://www.ajio.com',
    category: ['fashion']
  },
  {
    id: 6,
    name: 'Snapdeal',
    logo: '⭐',
    rating: 4.0,
    trustScore: 82,
    priceRange: '💰 Budget Friendly',
    speciality: 'Value Products',
    highlights: ['Unbox Diwali Sale', 'Value Deals', 'COD Available', 'Daily Deals'],
    pros: ['Very low prices', 'Wide variety', 'Good for basics', 'COD available'],
    cons: ['Quality inconsistent', 'Fewer premium brands', 'Slower delivery'],
    website: 'https://www.snapdeal.com',
    category: ['electronics', 'fashion', 'home']
  },
  {
    id: 7,
    name: 'Tata Cliq',
    logo: '🏪',
    rating: 4.4,
    trustScore: 94,
    priceRange: '💰💰 Mid-Premium',
    speciality: 'Authentic Brands Only',
    highlights: ['CLiQ Luxury', 'Brand Authenticity', 'Tata Guarantee', 'Palette Beauty'],
    pros: ['100% authentic products', 'Tata trust factor', 'Premium quality', 'Great for luxury'],
    cons: ['Higher prices', 'Smaller selection', 'Less frequent sales'],
    website: 'https://www.tatacliq.com',
    category: ['electronics', 'fashion']
  },
  {
    id: 8,
    name: 'Nykaa',
    logo: '💄',
    rating: 4.5,
    trustScore: 93,
    priceRange: '💰💰 Mid Range',
    speciality: 'Beauty & Wellness',
    highlights: ['Pink Friday Sale', 'Nykaa Rewards', 'Expert Reviews', 'Authentic Products'],
    pros: ['Genuine beauty products', 'Wide brand range', 'Good rewards', 'Expert advice'],
    cons: ['Beauty focused only', 'Can be pricey', 'Sale prices still high'],
    website: 'https://www.nykaa.com',
    category: ['beauty']
  },
  {
    id: 9,
    name: 'BigBasket',
    logo: '🥬',
    rating: 4.3,
    trustScore: 91,
    priceRange: '💰 Competitive',
    speciality: 'Groceries & Essentials',
    highlights: ['bb Daily', 'Fresh Produce', 'Same Day Delivery', 'BB Star Membership'],
    pros: ['Fresh groceries', 'Convenient', 'Good deals on bulk', 'Reliable delivery'],
    cons: ['Minimum order required', 'Delivery slots fill fast', 'Area restricted'],
    website: 'https://www.bigbasket.com',
    category: ['grocery']
  },
  {
    id: 10,
    name: 'JioMart',
    logo: '📱',
    rating: 4.1,
    trustScore: 88,
    priceRange: '💰 Budget Friendly',
    speciality: 'Groceries & Daily Needs',
    highlights: ['Jio Integration', 'Low Prices', 'Local Store Network', 'Quick Delivery'],
    pros: ['Very competitive prices', 'Wide availability', 'Jio ecosystem benefits', 'COD available'],
    cons: ['App can be buggy', 'Delivery inconsistent', 'Limited premium options'],
    website: 'https://www.jiomart.com',
    category: ['grocery', 'electronics']
  },
  {
    id: 11,
    name: 'Croma',
    logo: '🔌',
    rating: 4.3,
    trustScore: 93,
    priceRange: '💰💰 Standard MRP',
    speciality: 'Electronics & Appliances',
    highlights: ['Tata Enterprise', 'Extended Warranty', 'Installation Services', 'Trade-in'],
    pros: ['Genuine electronics', 'After-sales service', 'Physical stores', 'Expert advice'],
    cons: ['Prices at MRP', 'Less discounts', 'Limited online deals'],
    website: 'https://www.croma.com',
    category: ['electronics']
  },
  {
    id: 12,
    name: 'Shopclues',
    logo: '🏷️',
    rating: 3.8,
    trustScore: 75,
    priceRange: '💰 Ultra Budget',
    speciality: 'Value Shopping',
    highlights: ['Sunday Flea Market', 'Wholesale Prices', 'COD Available', 'Daily Deals'],
    pros: ['Extremely low prices', 'Good for basics', 'Wholesale options', 'COD available'],
    cons: ['Quality concerns', 'Shipping delays', 'Customer service issues'],
    website: 'https://www.shopclues.com',
    category: ['electronics', 'fashion', 'home']
  }
]

const categories = [
  { id: 'all', name: 'All Stores', icon: '🏪' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'grocery', name: 'Grocery', icon: '🛒' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'home', name: 'Home & Living', icon: '🏠' }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('trust')

  const filteredStores = stores
    .filter(store => selectedCategory === 'all' || store.category.includes(selectedCategory))
    .sort((a, b) => {
      if (sortBy === 'trust') return b.trustScore - a.trustScore
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'price') return a.priceRange.length - b.priceRange.length
      return 0
    })

  return (
    <>
      <Head>
        <title>Best Budget Online Stores India 2024 - Trusted & Quality</title>
        <meta name="description" content="Find the best low price online stores in India with trusted sellers and quality products. Compare Flipkart, Amazon, Meesho, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛍️</text></svg>" />
      </Head>

      <div className="container">
        <header className="header">
          <h1>🛍️ Best Budget Online Stores in India</h1>
          <p className="subtitle">सबसे सस्ते, भरोसेमंद और अच्छी क्वालिटी वाले ऑनलाइन स्टोर्स</p>
          <p className="tagline">Lowest Prices | Trusted Sellers | Quality Products</p>
        </header>

        <div className="top-recommendation">
          <div className="recommendation-card">
            <h2>🏆 Top Recommendations for Best Value</h2>
            <div className="top-picks">
              <div className="pick">
                <span className="pick-badge">Best Overall</span>
                <h3>Amazon India</h3>
                <p>Best balance of price, trust & quality</p>
              </div>
              <div className="pick">
                <span className="pick-badge budget">Lowest Prices</span>
                <h3>Meesho</h3>
                <p>Factory direct prices, free delivery</p>
              </div>
              <div className="pick">
                <span className="pick-badge trust">Most Trusted</span>
                <h3>Tata Cliq</h3>
                <p>100% authentic, Tata guarantee</p>
              </div>
            </div>
          </div>
        </div>

        <div className="filters">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          <div className="sort-filter">
            <label>Sort by: </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="trust">Trust Score</option>
              <option value="rating">Rating</option>
              <option value="price">Lowest Price First</option>
            </select>
          </div>
        </div>

        <div className="stores-grid">
          {filteredStores.map(store => (
            <div key={store.id} className="store-card">
              <div className="store-header">
                <span className="store-logo">{store.logo}</span>
                <div className="store-info">
                  <h3>{store.name}</h3>
                  <p className="speciality">{store.speciality}</p>
                </div>
                <div className="trust-badge">
                  <span className="trust-score">{store.trustScore}%</span>
                  <span className="trust-label">Trust</span>
                </div>
              </div>

              <div className="store-metrics">
                <div className="metric">
                  <span className="metric-label">Rating</span>
                  <span className="metric-value">⭐ {store.rating}/5</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Price</span>
                  <span className="metric-value">{store.priceRange}</span>
                </div>
              </div>

              <div className="highlights">
                <h4>✨ Highlights</h4>
                <div className="highlight-tags">
                  {store.highlights.map((h, i) => (
                    <span key={i} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>

              <div className="pros-cons">
                <div className="pros">
                  <h4>👍 Pros</h4>
                  <ul>
                    {store.pros.slice(0, 3).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="cons">
                  <h4>👎 Cons</h4>
                  <ul>
                    {store.cons.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={store.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
                Visit Store →
              </a>
            </div>
          ))}
        </div>

        <section className="tips-section">
          <h2>💡 Smart Shopping Tips for Best Deals</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">📅</span>
              <h3>Sale Seasons</h3>
              <p>Shop during Big Billion Days (Oct), Great Indian Festival (Oct), End of Season Sales for maximum savings.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">💳</span>
              <h3>Bank Offers</h3>
              <p>Use credit/debit cards with extra 10% discounts. SBI, HDFC, ICICI often have best offers.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🔔</span>
              <h3>Price Tracking</h3>
              <p>Use apps like Price History, Keepa to track price drops and avoid fake discounts.</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">⭐</span>
              <h3>Check Reviews</h3>
              <p>Read reviews with photos. Look for verified purchase badges and avoid too-good-to-be-true deals.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Made with ❤️ for Smart Indian Shoppers</p>
          <p className="disclaimer">Prices and offers change frequently. Always verify on the official website.</p>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .header {
          text-align: center;
          padding: 40px 20px;
          color: white;
        }

        .header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
          font-size: 1.3rem;
          opacity: 0.95;
          margin-bottom: 5px;
        }

        .tagline {
          font-size: 1rem;
          opacity: 0.85;
          letter-spacing: 2px;
        }

        .top-recommendation {
          margin-bottom: 30px;
        }

        .recommendation-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .recommendation-card h2 {
          text-align: center;
          color: #333;
          margin-bottom: 25px;
        }

        .top-picks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .pick {
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
        }

        .pick-badge {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .pick-badge.budget {
          background: linear-gradient(135deg, #11998e, #38ef7d);
        }

        .pick-badge.trust {
          background: linear-gradient(135deg, #fc4a1a, #f7b733);
        }

        .pick h3 {
          margin: 15px 0 10px;
          color: #333;
        }

        .pick p {
          color: #666;
          font-size: 0.9rem;
        }

        .filters {
          background: white;
          border-radius: 15px;
          padding: 20px;
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-btn {
          padding: 10px 18px;
          border: 2px solid #e0e0e0;
          border-radius: 25px;
          background: white;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .category-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-color: transparent;
        }

        .sort-filter select {
          padding: 10px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .stores-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .store-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .store-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(0,0,0,0.15);
        }

        .store-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .store-logo {
          font-size: 3rem;
        }

        .store-info h3 {
          margin: 0;
          color: #333;
          font-size: 1.4rem;
        }

        .speciality {
          color: #666;
          font-size: 0.85rem;
          margin: 5px 0 0;
        }

        .trust-badge {
          margin-left: auto;
          text-align: center;
          background: linear-gradient(135deg, #11998e, #38ef7d);
          color: white;
          padding: 10px 15px;
          border-radius: 15px;
        }

        .trust-score {
          display: block;
          font-size: 1.3rem;
          font-weight: bold;
        }

        .trust-label {
          font-size: 0.7rem;
          opacity: 0.9;
        }

        .store-metrics {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .metric {
          flex: 1;
          text-align: center;
        }

        .metric-label {
          display: block;
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 5px;
        }

        .metric-value {
          font-weight: 600;
          color: #333;
        }

        .highlights {
          margin-bottom: 20px;
        }

        .highlights h4 {
          margin: 0 0 10px;
          color: #333;
          font-size: 0.9rem;
        }

        .highlight-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .highlight-tag {
          background: linear-gradient(135deg, #667eea20, #764ba220);
          color: #667eea;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }

        .pros h4, .cons h4 {
          margin: 0 0 10px;
          font-size: 0.85rem;
        }

        .pros ul, .cons ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .pros li, .cons li {
          font-size: 0.8rem;
          color: #555;
          margin-bottom: 5px;
          padding-left: 15px;
          position: relative;
        }

        .pros li::before {
          content: '✓';
          color: #38ef7d;
          position: absolute;
          left: 0;
        }

        .cons li::before {
          content: '×';
          color: #ff6b6b;
          position: absolute;
          left: 0;
        }

        .visit-btn {
          display: block;
          text-align: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 12px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s;
        }

        .visit-btn:hover {
          opacity: 0.9;
        }

        .tips-section {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .tips-section h2 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .tip-card {
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          padding: 25px;
          border-radius: 15px;
          text-align: center;
        }

        .tip-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }

        .tip-card h3 {
          margin: 0 0 10px;
          color: #333;
        }

        .tip-card p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        .footer {
          text-align: center;
          color: white;
          padding: 30px;
        }

        .disclaimer {
          font-size: 0.8rem;
          opacity: 0.7;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 1.8rem;
          }

          .stores-grid {
            grid-template-columns: 1fr;
          }

          .pros-cons {
            grid-template-columns: 1fr;
          }

          .filters {
            flex-direction: column;
          }

          .category-filters {
            justify-content: center;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
