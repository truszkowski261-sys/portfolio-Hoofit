import { motion } from 'framer-motion'
import { FiTarget, FiHeart, FiGlobe, FiAward } from 'react-icons/fi'
import './About.css'

function About() {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Our Mission',
      description: 'To create footwear that empowers people to explore, move, and live without limits. Every step should be comfortable, stylish, and sustainable.'
    },
    {
      icon: <FiHeart />,
      title: 'Quality First',
      description: 'We use only premium materials and rigorous testing to ensure every pair meets our exacting standards for comfort, durability, and performance.'
    },
    {
      icon: <FiGlobe />,
      title: 'Sustainability',
      description: 'Committed to reducing our environmental footprint through eco-friendly materials, ethical manufacturing, and carbon-neutral shipping.'
    },
    {
      icon: <FiAward />,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and design to deliver the best possible footwear experience.'
    }
  ]
  
  const team = [
    { name: 'Sarah Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
    { name: 'Marcus Johnson', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
    { name: 'Emily Rodriguez', role: 'Product Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
    { name: 'David Kim', role: 'Head of Technology', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' }
  ]
  
  const stats = [
    { number: '1M+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '100%', label: 'Sustainable Materials' },
    { number: '24/7', label: 'Customer Support' }
  ]
  
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="about-badge">Our Story</span>
          <h1>Crafting the Future of Footwear</h1>
          <p>
            Founded in 2020, Hoofit was born from a simple belief: everyone deserves footwear 
            that looks great, feels amazing, and doesn't harm the planet.
          </p>
        </motion.div>
      </section>
      
      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <motion.div 
            className="story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800" 
              alt="Our workshop" 
            />
          </motion.div>
          
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Where It All Began</h2>
            <p>
              What started as a small workshop in United States has grown into a global movement. 
              Our founder, Sarah Chen, a former marathon runner and environmental scientist, 
              noticed a gap in the market: performance footwear that didn't compromise on 
              sustainability.
            </p>
            <p>
              She assembled a team of passionate designers, engineers, and outdoor enthusiasts 
              who shared her vision. Together, they spent two years developing proprietary 
              materials and manufacturing processes that would become the foundation of Hoofit.
            </p>
            <p>
              Today, we're proud to offer a complete range of footwear that proves you don't 
              have to choose between performance, style, and responsibility.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What We Stand For</h2>
            <p>Our core values guide everything we do</p>
          </motion.div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Meet the Team</h2>
            <p>The passionate people behind Hoofit</p>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="about-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Join Our Journey</h2>
          <p>Be part of the movement towards sustainable, high-performance footwear.</p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default About
