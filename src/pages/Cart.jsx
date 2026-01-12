import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
  
  const shipping = getCartTotal() > 100 ? 0 : 9.99
  const tax = getCartTotal() * 0.08
  const total = getCartTotal() + shipping + tax
  
  if (items.length === 0) {
    return (
      <motion.div 
        className="cart-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="empty-cart">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FiShoppingBag className="empty-icon" />
          </motion.div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Shopping
              <FiArrowRight />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    )
  }
  
  return (
    <motion.div 
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="cart-container">
        <motion.div 
          className="cart-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Shopping Cart</h1>
          <span>{items.length} {items.length === 1 ? 'item' : 'items'}</span>
        </motion.div>
        
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item, index) => (
              <motion.div 
                key={item.cartItemId}
                className="cart-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <div className="item-image">
                  <img src={item.images[0]} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <Link to={`/product/${item.id}`} className="item-name">
                    {item.name}
                  </Link>
                  <div className="item-meta">
                    <span>Size: {item.size}</span>
                    <span>•</span>
                    <span className="item-category">{item.category}</span>
                  </div>
                  <div className="item-price-mobile">${item.price}</div>
                </div>
                
                <div className="item-quantity">
                  <motion.button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiMinus />
                  </motion.button>
                  <span>{item.quantity}</span>
                  <motion.button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiPlus />
                  </motion.button>
                </div>
                
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <motion.button
                  className="remove-button"
                  onClick={() => removeFromCart(item.cartItemId)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiTrash2 />
                </motion.button>
              </motion.div>
            ))}
            
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping">
                ← Continue Shopping
              </Link>
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
          
          <motion.div 
            className="cart-summary"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            {getCartTotal() < 100 && (
              <div className="free-shipping-notice">
                Add ${(100 - getCartTotal()).toFixed(2)} more for FREE shipping!
              </div>
            )}
            
            <div className="summary-divider" />
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <div className="promo-code">
              <input type="text" placeholder="Promo code" />
              <button>Apply</button>
            </div>
            
            <Link to="/checkout">
              <motion.button 
                className="checkout-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
                <FiArrowRight />
              </motion.button>
            </Link>
            
            <div className="payment-methods">
              <p>We accept</p>
              <div className="payment-icons">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
                <span>Apple Pay</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart
