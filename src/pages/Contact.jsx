import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare, FiHelpCircle, FiPackage } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      content: 'truszkowski261-sys',
      subtext: 'We\'ll respond within 24 hours'
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      content: '+14722771857',
      subtext: 'Mon-Fri, 9am-6pm PST'
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      content: '123 Adventure Way',
      subtext: 'United States'
    },
    {
      icon: <FiClock />,
      title: 'Business Hours',
      content: 'Mon-Fri: 9am-6pm',
      subtext: 'Sat-Sun: 10am-4pm'
    }
  ]
  
  const quickLinks = [
    { icon: <FiHelpCircle />, title: 'FAQ', description: 'Find answers to common questions' },
    { icon: <FiPackage />, title: 'Track Order', description: 'Check your order status' },
    { icon: <FiMessageSquare />, title: 'Live Chat', description: 'Chat with our support team' }
  ]
  
  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div 
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Get in Touch</h1>
          <p>Have a question or feedback? We'd love to hear from you.</p>
        </motion.div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="card-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="card-content">{info.content}</p>
                <p className="card-subtext">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="form-wrapper">
            <motion.div 
              className="form-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form and our team will get back to you within 24 hours. 
                We're here to help with any questions about our products, orders, or 
                anything else.
              </p>
              
              <div className="quick-links">
                <h3>Quick Links</h3>
                {quickLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    className="quick-link"
                    whileHover={{ x: 5 }}
                  >
                    <div className="quick-link-icon">{link.icon}</div>
                    <div>
                      <span className="quick-link-title">{link.title}</span>
                      <span className="quick-link-desc">{link.description}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon">
                    <FiSend />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                  <button 
                    type="button" 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="5"
                      required
                    />
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="spinner" />
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <FiMapPin />
            <p>123 Adventure Way, United States</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
