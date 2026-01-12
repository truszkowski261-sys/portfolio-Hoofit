import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw, FiAward } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, categories, getFeaturedProducts } from '../data/products'
import './Home.css'

function Home() {
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const featuredProducts = getFeaturedProducts()
  
  const features = [
    { icon: <FiTruck />, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: <FiShield />, title: 'Secure Checkout', desc: '100% protected payments' },
    { icon: <FiRefreshCw />, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: <FiAward />, title: 'Premium Quality', desc: 'Crafted with care' }
  ]
  
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-background"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920" 
            alt="Hero background" 
          />
          <div className="hero-overlay" />
        </motion.div>
        
        <div className="hero-content">
          <motion.span 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            New Collection 2026
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Step Into Your
            <span className="hero-title-accent"> Adventure</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover premium footwear designed for comfort, style, and performance. 
            Every step tells a story.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/products">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
                <FiArrowRight />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Scroll to explore</span>
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>
      
      {/* Features Bar */}
      <section className="features-bar">
        <div className="features-container">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Shop by Category</h2>
            <p>Find the perfect pair for your lifestyle</p>
          </motion.div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link to={`/products/${category.id}`} className="category-card">
                  <motion.div 
                    className="category-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={category.image} alt={category.name} />
                    <div className="category-overlay" />
                  </motion.div>
                  <div className="category-content">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <span className="category-link">
                      Explore <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Featured Products</h2>
            <p>Our most popular styles handpicked for you</p>
          </motion.div>
          
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <motion.div 
            className="section-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/products">
              <motion.button 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="promo-section">
        <motion.div 
          className="promo-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="promo-content">
            <motion.span 
              className="promo-badge"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Limited Time Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Get 20% Off Your First Order
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Sign up for our newsletter and receive an exclusive discount code.
            </motion.p>
            <motion.form 
              className="promo-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <input type="email" placeholder="Enter your email" />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Code
              </motion.button>
            </motion.form>
          </div>
          <div className="promo-image">
            <motion.img 
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800"
              alt="Promotional shoes"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="bestsellers-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Best Sellers</h2>
            <p>Loved by thousands of happy customers</p>
          </motion.div>
          
          <div className="products-grid">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="instagram-section">
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>@hoofit on Instagram</h2>
          <p>Share your adventure with #HoofitStyle</p>
        </motion.div>
        
        <div className="instagram-grid">
          {[
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
            "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=400",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"
          ].map((img, index) => (
            <motion.a
              key={index}
              href="#"
              className="instagram-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`Instagram post ${index + 1}`} />
              <div className="instagram-overlay">
                <FiArrowRight />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Home
