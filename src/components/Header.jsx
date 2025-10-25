import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 0',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Poppins'
            }}>
              BT
            </div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2E7D32',
              fontFamily: 'Poppins'
            }}>
              Bio Thrive
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px',
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            {['Products', 'Science', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  color: '#2E7D32',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#66BB6A'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#2E7D32'
                }}
              >
                {item}
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              Shop Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              '@media (max-width: 768px)': { display: 'block' },
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: '#2E7D32',
              margin: '4px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: '#2E7D32',
              margin: '4px 0',
              opacity: isMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease'
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: '#2E7D32',
              margin: '4px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }} />
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <div className="container" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['Products', 'Science', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#2E7D32',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.1rem',
                  padding: '8px 0'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn btn-primary" style={{ marginTop: '16px' }}>
              Shop Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header