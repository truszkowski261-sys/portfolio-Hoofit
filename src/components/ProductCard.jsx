import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()
  
  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1, product.sizes[Math.floor(product.sizes.length / 2)])
  }
  
  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }
  
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setCurrentImageIndex(0)
      }}
    >
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <motion.img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="product-image"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {product.badge && (
            <motion.span 
              className="product-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {product.badge}
            </motion.span>
          )}
          
          <motion.button
            className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiHeart />
          </motion.button>
          
          <motion.div
            className="product-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.button
              className="quick-add-button"
              onClick={handleQuickAdd}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingCart />
              <span>Quick Add</span>
            </motion.button>
          </motion.div>
          
          {product.images.length > 1 && (
            <div className="image-dots">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`image-dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onMouseEnter={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < Math.floor(product.rating) ? 'filled' : ''} 
                />
              ))}
            </div>
            <span className="review-count">({product.reviews})</span>
          </div>
          
          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
          
          <div className="product-colors">
            {product.colors.slice(0, 4).map((color, idx) => (
              <span 
                key={idx} 
                className="color-dot" 
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="more-colors">+{product.colors.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
