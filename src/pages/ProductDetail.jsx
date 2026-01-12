import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiStar, FiCheck, FiTruck, FiRefreshCw, FiShield, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { getProductById, products } from '../data/products'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const { addToCart } = useCart()
  
  useEffect(() => {
    const foundProduct = getProductById(id)
    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedSize(foundProduct.sizes[Math.floor(foundProduct.sizes.length / 2)])
    }
    window.scrollTo(0, 0)
  }, [id])
  
  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    )
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
  
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }
  
  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }
  
  return (
    <motion.div 
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <motion.div 
          className="breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </motion.div>
        
        <div className="product-detail-content">
          {/* Image Gallery */}
          <motion.div 
            className="product-gallery"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="gallery-thumbnails">
              {product.images.map((img, index) => (
                <motion.button
                  key={index}
                  className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </motion.button>
              ))}
            </div>
            
            <div className="gallery-main">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              <button className="gallery-nav prev" onClick={prevImage}>
                <FiChevronLeft />
              </button>
              <button className="gallery-nav next" onClick={nextImage}>
                <FiChevronRight />
              </button>
              
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              
              <motion.button
                className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiHeart />
              </motion.button>
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div 
            className="product-info-detail"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={i < Math.floor(product.rating) ? 'filled' : ''} 
                  />
                ))}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>
            
            <div className="product-price-detail">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discount-badge">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>
            
            <p className="product-description">{product.description}</p>
            
            {/* Color Selection */}
            <div className="option-section">
              <h4>Color</h4>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <motion.button
                    key={index}
                    className={`color-option ${index === selectedColor ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === selectedColor && <FiCheck />}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="option-section">
              <div className="size-header">
                <h4>Size</h4>
                <Link to="/size-guide" className="size-guide-link">Size Guide</Link>
              </div>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    className={`size-option ${size === selectedSize ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="option-section">
              <h4>Quantity</h4>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="action-buttons">
              <motion.button
                className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {addedToCart ? (
                  <>
                    <FiCheck />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <FiShoppingCart />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </motion.button>
              
              <motion.button
                className="buy-now-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>
            </div>
            
            {/* Features */}
            <div className="product-features">
              <div className="feature">
                <FiTruck />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="feature">
                <FiRefreshCw />
                <span>30-day easy returns</span>
              </div>
              <div className="feature">
                <FiShield />
                <span>2-year warranty included</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Product Tabs */}
        <motion.div 
          className="product-tabs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="tabs-header">
            {['description', 'features', 'reviews'].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="tabs-content">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="tab-panel"
                >
                  <p>{product.description}</p>
                  <p>
                    Crafted with premium materials and attention to detail, this footwear 
                    delivers exceptional comfort and durability. Perfect for everyday wear 
                    or your next adventure.
                  </p>
                </motion.div>
              )}
              
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="tab-panel"
                >
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <FiCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="tab-panel"
                >
                  <div className="reviews-summary">
                    <div className="rating-large">
                      <span className="rating-number">{product.rating}</span>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={i < Math.floor(product.rating) ? 'filled' : ''} 
                          />
                        ))}
                      </div>
                      <span className="total-reviews">{product.reviews} reviews</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section 
            className="related-products"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>You May Also Like</h2>
            <div className="related-grid">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  )
}

export default ProductDetail
