javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [roiInputs, setROIInputs] = useState({
    location: 'gym',
    footTraffic: 200,
    pricePerSpray: 2,
    operatingDays: 30
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Marcus Johnson",
      business: "Elite Fitness Club Owner",
      rating: 5,
      text: "Best investment I've made! My ScentNGoo machine in my gym generates £2,800+ monthly with zero effort. The app monitoring is brilliant - I know exactly when to refill without even visiting. Outstanding ROI and incredible support team!",
      revenue: "£2,800/month"
    },
    {
      name: "Sarah Mitchell",
      business: "Upscale Pub Chain",
      rating: 5,
      text: "We installed 3 machines across our venues. The 10-scent variety keeps customers coming back daily! Revenue exceeded expectations by 180%. ScentNGoo's service is phenomenal - they handle everything professionally.",
      revenue: "£8,400/month (3 units)"
    },
    {
      name: "David Rodriguez",
      business: "Premium Nightclub",
      rating: 5,
      text: "Incredible passive income stream! The machine pays for itself in 3 months. Customers love having 10 premium fragrances to choose from. The 625 sprays per bottle means amazing margins. Couldn't ask for better support!",
      revenue: "£3,200/month"
    }
  ];

  const locationMultipliers = {
    gym: { name: 'Fitness Center', multiplier: 1.2, avgUses: 4 },
    pub: { name: 'Pub/Bar', multiplier: 1.5, avgUses: 6 },
    club: { name: 'Nightclub', multiplier: 2.0, avgUses: 8 },
    restaurant: { name: 'Restaurant', multiplier: 1.3, avgUses: 5 },
    hotel: { name: 'Hotel', multiplier: 1.4, avgUses: 5 }
  };

  const calculateROI = () => {
    const location = locationMultipliers[roiInputs.location];
    const dailyUsers = Math.floor(roiInputs.footTraffic * 0.15);
    const dailyUses = dailyUsers * location.avgUses;
    const dailyRevenue = dailyUses * roiInputs.pricePerSpray * location.multiplier;
    const monthlyRevenue = dailyRevenue * roiInputs.operatingDays;
    const monthlyProfit = monthlyRevenue * 0.75;
    const yearlyProfit = monthlyProfit * 12;
    const breakEvenMonths = 4999 / monthlyProfit;
    const roi = ((yearlyProfit - 4999) / 4999) * 100;

    return {
      dailyUsers,
      dailyUses,
      dailyRevenue: Math.round(dailyRevenue),
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyProfit: Math.round(monthlyProfit),
      yearlyProfit: Math.round(yearlyProfit),
      breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
      roi: Math.round(roi)
    };
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleROIInputChange = (field, value) => {
    setROIInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const roiResults = calculateROI();

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-icon">
                <div className="scent-drop"></div>
                <div className="scent-sparkle"></div>
              </div>
              <span className="logo-text">ScentNGoo</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#opportunity" className="nav-link">Opportunity</a>
            <a href="#product" className="nav-link">Product</a>
            <a href="#testimonials" className="nav-link">Success Stories</a>
            <a href="#invest" className="nav-link">Invest Now</a>
          </nav>
          <button className="cta-button-header" onClick={() => setShowCart(true)}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1575884344532-3a93810a682d" alt="Luxury Hotel London" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container mx-auto px-6 hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Transform Your Business Into A 
              <span className="gradient-text"> Luxury Fragrance Empire</span>
            </h1>
            <p className="hero-subtitle">
              Generate £2,000-£5,000+ monthly passive income with our premium 10-scent perfume vending machines. 
              Perfect for pubs, clubs, gyms & indoor venues. Monitor remotely with our smart app technology.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">625</span>
                <span className="stat-label">Sprays per 100ml</span>
              </div>
              <div className="stat">
                <span className="stat-number">10</span>
                <span className="stat-label">Premium Scents</span>
              </div>
              <div className="stat">
                <span className="stat-number">3-6</span>
                <span className="stat-label">Month ROI</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="cta-button-primary" onClick={() => setShowCart(true)}>Start Your Empire £4,999</button>
              <button className="cta-button-secondary" onClick={() => setShowROICalculator(true)}>View ROI Calculator</button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="opportunity-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">The £Multi-Million Fragrance Opportunity</h2>
            <p className="section-subtitle">Tap into the booming £47 billion global fragrance market with zero competition in your area</p>
          </div>
          
          <div className="opportunity-grid">
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1661422586023-681ea60507e2" alt="Premium Restaurant" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Premium Restaurants & Pubs</h3>
                <p>Perfect for upscale venues where customers want to smell great before socializing. Average revenue: £2,200-£3,800/month</p>
                <div className="revenue-badge">High Traffic = High Returns</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1637666067348-7303e7007363" alt="Luxury Fitness Center" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Elite Fitness Centers</h3>
                <p>Gym-goers love fresh scents post-workout. Recurring customers guarantee steady income. Average revenue: £1,800-£3,200/month</p>
                <div className="revenue-badge">Daily Recurring Users</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1571205019420-41cad6369e94" alt="Upscale Nightclub" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Upscale Nightclubs</h3>
                <p>Premium venues, premium prices. Party-goers pay top dollar for luxury fragrances. Average revenue: £3,500-£5,200/month</p>
                <div className="revenue-badge">Maximum Revenue Potential</div>
              </div>
            </div>
          </div>

          {/* Example Placements */}
          <div className="placement-examples">
            <h3>Perfect Placement Examples</h3>
            <div className="examples-grid">
              <div className="example-item">
                <img src="https://images.unsplash.com/photo-1663659505016-d358722c06c3" alt="Luxury Hotel Bathroom" />
                <div className="example-overlay">
                  <h4>Luxury Hotel Bathrooms</h4>
                  <p>High-end guests expect premium amenities</p>
                </div>
              </div>
              <div className="example-item">
                <img src="https://images.unsplash.com/photo-1651410634315-56a535912396" alt="Premium Bar" />
                <div className="example-overlay">
                  <h4>Premium Bar Areas</h4>
                  <p>Perfect for pre-night out touch-ups</p>
                </div>
              </div>
              <div className="example-item">
                <img src="https://images.pexels.com/photos/1254111/pexels-photo-1254111.jpeg" alt="Fitness Locker Room" />
                <div className="example-overlay">
                  <h4>Fitness Locker Rooms</h4>
                  <p>Post-workout freshness essential</p>
                </div>
              </div>
            </div>
          </div>

          <div className="competitive-advantage">
            <h3>Why ScentNGoo Dominates The Competition</h3>
            <div className="advantage-grid">
              <div className="advantage-item">
                <div className="advantage-icon">10</div>
                <h4>10 Premium Scents</h4>
                <p>Double the variety of competitors (5 scents). More choices = More sales = Higher retention</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">📱</div>
                <h4>Smart App Monitoring</h4>
                <p>Real-time inventory tracking. Know exactly when to refill without visiting. True passive income.</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">625</div>
                <h4>625 Sprays Per Bottle</h4>
                <p>Maximum efficiency means maximum profit. Each 100ml bottle generates £125-£250 revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="product-section">
        <div className="container mx-auto px-6 py-20">
          <div className="product-showcase">
            <div className="product-hero">
              <div className="product-image-container">
                <div className="vending-machine-display">
                  <div className="machine-frame">
                    <div className="machine-screen">
                      <div className="perfume-bottles">
                        <div className="bottle-row">
                          <div className="bottle gold"></div>
                          <div className="bottle pink"></div>
                          <div className="bottle triangle"></div>
                          <div className="bottle black"></div>
                          <div className="bottle blue"></div>
                        </div>
                        <div className="bottle-row">
                          <div className="bottle gold"></div>
                          <div className="bottle pink"></div>
                          <div className="bottle triangle"></div>
                          <div className="bottle black"></div>
                          <div className="bottle blue"></div>
                        </div>
                      </div>
                      <div className="selection-panel">
                        <div className="selector-row">
                          <div className="selector">1</div>
                          <div className="selector">2</div>
                          <div className="selector">3</div>
                          <div className="selector">4</div>
                          <div className="selector">5</div>
                        </div>
                        <div className="selector-row">
                          <div className="selector">6</div>
                          <div className="selector">7</div>
                          <div className="selector">8</div>
                          <div className="selector">9</div>
                          <div className="selector">10</div>
                        </div>
                      </div>
                      <div className="payment-area">
                        <div className="payment-device"></div>
                        <div className="instruction-text">Make the payment</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-image-overlay">
                  <div className="feature-callout">
                    <span className="callout-number">10</span>
                    <span className="callout-text">Premium Scents</span>
                  </div>
                  <div className="feature-callout">
                    <span className="callout-icon">📱</span>
                    <span className="callout-text">App Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h2 className="product-title">The ScentNGoo Luxury Vending System</h2>
                <p className="product-description">
                  State-of-the-art technology meets premium design. Our machines don't just dispense fragrance - 
                  they create an experience that customers crave and pay premium prices for.
                </p>
                
                <div className="product-features">
                  <div className="feature">
                    <div className="feature-icon">✨</div>
                    <div>
                      <h4>Premium LED Display</h4>
                      <p>Stunning visual interface that attracts customers and showcases all 10 fragrances</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">🔒</div>
                    <div>
                      <h4>Secure Payment System</h4>
                      <p>Accepts cards, contactless, and mobile payments for maximum conversion</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">📊</div>
                    <div>
                      <h4>Real-Time Analytics</h4>
                      <p>Monitor sales, inventory, and performance from anywhere with our mobile app</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">🛠️</div>
                    <div>
                      <h4>Minimal Maintenance</h4>
                      <p>Self-cleaning nozzles and automated diagnostics ensure 99.9% uptime</p>
                    </div>
                  </div>
                </div>

                <div className="roi-calculator">
                  <h3>Your ROI Breakdown</h3>
                  <div className="roi-grid">
                    <div className="roi-item">
                      <span className="roi-label">Initial Investment</span>
                      <span className="roi-value">£4,999</span>
                    </div>
                    <div className="roi-item">
                      <span className="roi-label">Average Monthly Revenue</span>
                      <span className="roi-value">£2,800</span>
                    </div>
                    <div className="roi-item">
                      <span className="roi-label">Break-even Period</span>
                      <span className="roi-value">1.8 Months</span>
                    </div>
                    <div className="roi-item highlight">
                      <span className="roi-label">Annual Profit</span>
                      <span className="roi-value">£28,600+</span>
                    </div>
                  </div>
                  <button className="roi-calc-button" onClick={() => setShowROICalculator(true)}>
                    Calculate Your Custom ROI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="invest" className="investment-section">
        <div className="investment-background">
          <img src="https://images.unsplash.com/photo-1550859746-2f021fc95994" alt="Investment" className="investment-bg" />
          <div className="investment-overlay"></div>
        </div>
        <div className="container mx-auto px-6 py-20">
          <div className="investment-content">
            <h2 className="investment-title">Start Your Fragrance Empire Today</h2>
            <p className="investment-subtitle">
              Join the exclusive ScentNGoo family and secure your financial future with proven passive income
            </p>

            <div className="investment-package">
              <div className="package-header">
                <h3>Complete Business Package</h3>
                <div className="price">
                  <span className="currency">£</span>
                  <span className="amount">4,999</span>
                  <span className="note">One-time investment</span>
                </div>
              </div>

              <div className="package-includes">
                <h4>Everything You Need to Start:</h4>
                <div className="includes-grid">
                  <div className="include-item">✅ Premium ScentNGoo Vending Machine</div>
                  <div className="include-item">✅ 10 Luxury Fragrance Bottles (Initial Stock)</div>
                  <div className="include-item">✅ Professional Installation & Setup</div>
                  <div className="include-item">✅ Smart Monitoring App Access</div>
                  <div className="include-item">✅ 1-Year Full Warranty</div>
                  <div className="include-item">✅ 24/7 Technical Support</div>
                  <div className="include-item">✅ Marketing Materials & Signage</div>
                  <div className="include-item">✅ Business Training & Guidelines</div>
                </div>
              </div>

              <div className="investment-cta">
                <button className="invest-button" onClick={() => setShowCart(true)}>Secure Your Machine Now - £4,999</button>
                <p className="cta-note">Limited availability - Only 50 machines per region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      {showROICalculator && (
        <div className="modal-overlay" onClick={() => setShowROICalculator(false)}>
          <div className="modal-content roi-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>ROI Calculator</h2>
              <button className="close-btn" onClick={() => setShowROICalculator(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="calculator-inputs">
                <div className="input-group">
                  <label>Location Type:</label>
                  <select 
                    value={roiInputs.location} 
                    onChange={e => handleROIInputChange('location', e.target.value)}
                    className="calculator-input"
                  >
                    <option value="gym">Fitness Center</option>
                    <option value="pub">Pub/Bar</option>
                    <option value="club">Nightclub</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Daily Foot Traffic:</label>
                  <input 
                    type="number" 
                    value={roiInputs.footTraffic}
                    onChange={e => handleROIInputChange('footTraffic', parseInt(e.target.value))}
                    className="calculator-input"
                    min="50"
                    max="2000"
                  />
                </div>
                <div className="input-group">
                  <label>Price Per Spray (£):</label>
                  <input 
                    type="number" 
                    value={roiInputs.pricePerSpray}
                    onChange={e => handleROIInputChange('pricePerSpray', parseFloat(e.target.value))}
                    className="calculator-input"
                    min="1"
                    max="10"
                    step="0.5"
                  />
                </div>
                <div className="input-group">
                  <label>Operating Days Per Month:</label>
                  <input 
                    type="number" 
                    value={roiInputs.operatingDays}
                    onChange={e => handleROIInputChange('operatingDays', parseInt(e.target.value))}
                    className="calculator-input"
                    min="20"
                    max="31"
                  />
                </div>
              </div>
              
              <div className="calculator-results">
                <h3>Your Projected Results</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <span className="result-label">Daily Users:</span>
                    <span className="result-value">{roiResults.dailyUsers}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Daily Revenue:</span>
                    <span className="result-value">£{roiResults.dailyRevenue}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Monthly Profit:</span>
                    <span className="result-value">£{roiResults.monthlyProfit}</span>
                  </div>
                  <div className="result-item highlight">
                    <span className="result-label">Annual Profit:</span>
                    <span className="result-value">£{roiResults.yearlyProfit}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Break-even:</span>
                    <span className="result-value">{roiResults.breakEvenMonths} months</span>
                  </div>
                  <div className="result-item highlight">
                    <span className="result-label">ROI:</span>
                    <span className="result-value">{roiResults.roi}%</span>
                  </div>
                </div>
                <button className="invest-now-btn" onClick={() => {setShowROICalculator(false); setShowCart(true);}}>
                  Invest Now - £4,999
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Complete Your Purchase</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="cart-item">
                <div className="item-details">
                  <h3>ScentNGoo Premium Vending Machine</h3>
                  <p>Complete business package with everything you need to start earning passive income</p>
                  <ul className="cart-includes">
                    <li>✅ Premium Vending Machine</li>
                    <li>✅ 10 Luxury Fragrance Bottles</li>
                    <li>✅ Professional Installation</li>
                    <li>✅ Smart App Access</li>
                    <li>✅ 1-Year Warranty</li>
                    <li>✅ 24/7 Support</li>
                  </ul>
                </div>
                <div className="item-price">
                  <span className="price-amount">£4,999</span>
                  <span className="price-note">One-time payment</span>
                </div>
              </div>
              
              <div className="payment-form">
                <h3>Contact Information</h3>
                <div className="form-grid">
                  <input type="text" placeholder="Full Name" className="form-input" />
                  <input type="email" placeholder="Email Address" className="form-input" />
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                  <input type="text" placeholder="Company (Optional)" className="form-input" />
                </div>
                
                <h3>Installation Address</h3>
                <div className="form-grid">
                  <input type="text" placeholder="Street Address" className="form-input full-width" />
                  <input type="text" placeholder="City" className="form-input" />
                  <input type="text" placeholder="Postal Code" className="form-input" />
                </div>
                
                <div className="payment-total">
                  <div className="total-line">
                    <span>ScentNGoo Machine Package:</span>
                    <span>£4,999.00</span>
                  </div>
                  <div className="total-line">
                    <span>Installation & Setup:</span>
                    <span>Included</span>
                  </div>
                  <div className="total-line">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="total-line total">
                    <span>Total:</span>
                    <span>£4,999.00</span>
                  </div>
                </div>
                
                <button className="checkout-btn">
                  Proceed to Payment - £4,999
                </button>
                
                <p className="payment-note">
                  Secure payment processing. You'll be redirected to our payment partner to complete your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-6 py-12">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-icon">
                  <div className="scent-drop"></div>
                  <div className="scent-sparkle"></div>
                </div>
                <span className="logo-text">ScentNGoo</span>
              </div>
              <p>Transforming businesses into luxury fragrance empires with premium vending technology.</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 scentngoo@gmail.com</p>
              <p>📞 +44 (0) 20 7946 0958</p>
              <p>🌐 www.scentngoo.com</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 ScentNGoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
