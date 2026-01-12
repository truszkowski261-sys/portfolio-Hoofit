import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const footerLinks = {
    shop: [
      { label: 'All Products', path: '/products' },
      { label: 'Running', path: '/products/running' },
      { label: 'Hiking', path: '/products/hiking' },
      { label: 'Casual', path: '/products/casual' },
      { label: 'New Arrivals', path: '/products?sort=new' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' }
    ],
    support: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Shipping', path: '/shipping' },
      { label: 'Returns', path: '/returns' },
      { label: 'Size Guide', path: '/size-guide' }
    ]
  }
  
  const socialIcons = [
    { icon: <FiInstagram />, url: '#', label: 'Instagram' },
    { icon: <FiFacebook />, url: '#', label: 'Facebook' },
    { icon: <FiTwitter />, url: '#', label: 'Twitter' },
    { icon: <FiYoutube />, url: '#', label: 'YouTube' }
  ]
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="footer-logo">HOOFIT</Link>
            <p className="footer-tagline">
              Premium footwear for every adventure. Step into comfort, style, and performance.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <FiMail />
                <span>truszkowski261-sys</span>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+14722771857</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>United States</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Join the Adventure</h4>
            <p>Subscribe for exclusive offers and new arrivals.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
              />
              <motion.button 
                type="submit" 
                className="newsletter-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            <div className="footer-social">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Hoofit. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
