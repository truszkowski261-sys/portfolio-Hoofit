import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { getCartCount } = useCart()
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Shop All' },
    { path: '/products/running', label: 'Running' },
    { path: '/products/hiking', label: 'Hiking' },
    { path: '/products/casual', label: 'Casual' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]
  
  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.span 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOOFIT
          </motion.span>
        </Link>
        
        <nav className={`nav-desktop ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    className="nav-underline"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <div className="header-actions">
          <motion.button 
            className="icon-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FiSearch />
          </motion.button>
          
          <motion.button 
            className="icon-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiUser />
          </motion.button>
          
          <Link to="/cart">
            <motion.button 
              className="icon-button cart-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingCart />
              {getCartCount() > 0 && (
                <motion.span 
                  className="cart-count"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={getCartCount()}
                >
                  {getCartCount()}
                </motion.span>
              )}
            </motion.button>
          </Link>
          
          <motion.button 
            className="mobile-menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            className="search-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search-input"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)} className="search-close">
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={item.path} 
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
