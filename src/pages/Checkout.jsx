import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiLock, FiCreditCard, FiCheck, FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const { items, getCartTotal, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    saveInfo: true
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  
  const shipping = getCartTotal() > 100 ? 0 : 9.99
  const tax = getCartTotal() * 0.08
  const total = getCartTotal() + shipping + tax
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (step < 3) {
      setStep(step + 1)
      return
    }
    
    setIsProcessing(true)
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
  }
  
  if (orderComplete) {
    return (
      <motion.div 
        className="checkout-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="order-complete">
          <motion.div 
            className="success-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <FiCheck />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Order Confirmed!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Thank you for your purchase. We'll send you an email with your order details and tracking information.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/products">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    )
  }
  
  if (items.length === 0) {
    navigate('/cart')
    return null
  }
  
  return (
    <motion.div 
      className="checkout-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="checkout-container">
        <div className="checkout-header">
          <Link to="/cart" className="back-link">
            <FiArrowLeft /> Back to Cart
          </Link>
          <div className="secure-badge">
            <FiLock /> Secure Checkout
          </div>
        </div>
        
        <div className="checkout-content">
          <div className="checkout-form-section">
            {/* Progress Steps */}
            <div className="checkout-steps">
              {['Information', 'Shipping', 'Payment'].map((stepName, index) => (
                <div 
                  key={index}
                  className={`step ${step > index + 1 ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}
                >
                  <div className="step-number">
                    {step > index + 1 ? <FiCheck /> : index + 1}
                  </div>
                  <span>{stepName}</span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div 
                  className="form-section"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2>Contact Information</h2>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <h2>Shipping Address</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Apartment, suite, etc. (optional)</label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-row three">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="For delivery updates"
                      required
                    />
                  </div>
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div 
                  className="form-section"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2>Shipping Method</h2>
                  <div className="shipping-options">
                    <label className="shipping-option selected">
                      <input type="radio" name="shipping" defaultChecked />
                      <div className="option-content">
                        <div className="option-header">
                          <span className="option-name">Standard Shipping</span>
                          <span className="option-price">
                            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                          </span>
                        </div>
                        <span className="option-desc">5-7 business days</span>
                      </div>
                    </label>
                    
                    <label className="shipping-option">
                      <input type="radio" name="shipping" />
                      <div className="option-content">
                        <div className="option-header">
                          <span className="option-name">Express Shipping</span>
                          <span className="option-price">$14.99</span>
                        </div>
                        <span className="option-desc">2-3 business days</span>
                      </div>
                    </label>
                    
                    <label className="shipping-option">
                      <input type="radio" name="shipping" />
                      <div className="option-content">
                        <div className="option-header">
                          <span className="option-name">Next Day Delivery</span>
                          <span className="option-price">$24.99</span>
                        </div>
                        <span className="option-desc">Next business day</span>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div 
                  className="form-section"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h2>Payment Details</h2>
                  <div className="payment-cards">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Amex</span>
                    <span>PayPal</span>
                  </div>
                  
                  <div className="form-group">
                    <label>Card Number</label>
                    <div className="card-input">
                      <FiCreditCard />
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                    />
                    <span>Save this information for next time</span>
                  </label>
                </motion.div>
              )}
              
              <div className="form-actions">
                {step > 1 && (
                  <button 
                    type="button" 
                    className="btn-back"
                    onClick={() => setStep(step - 1)}
                  >
                    <FiArrowLeft /> Back
                  </button>
                )}
                
                <motion.button 
                  type="submit" 
                  className="btn-continue"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="spinner" />
                  ) : step === 3 ? (
                    `Pay $${total.toFixed(2)}`
                  ) : (
                    'Continue'
                  )}
                </motion.button>
              </div>
            </form>
          </div>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-items">
              {items.map((item) => (
                <div key={item.cartItemId} className="summary-item">
                  <div className="item-image">
                    <img src={item.images[0]} alt={item.name} />
                    <span className="item-quantity">{item.quantity}</span>
                  </div>
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-size">Size: {item.size}</span>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="summary-divider" />
            
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
            
            <div className="summary-divider" />
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Checkout
