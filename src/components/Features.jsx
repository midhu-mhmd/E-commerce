import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'Sourced from the finest organic ingredients, carefully selected for maximum potency and purity.'
    },
    {
      icon: '🔬',
      title: 'Science-Backed',
      description: 'Every formula is rigorously tested and validated by our team of expert researchers and scientists.'
    },
    {
      icon: '💚',
      title: 'Wellness Focused',
      description: 'Designed to support your holistic health journey with targeted nutritional support.'
    },
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Manufactured in certified facilities with the highest quality standards and safety protocols.'
    }
  ]

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(102, 187, 106, 0.1)',
              color: '#2E7D32',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '500',
              border: '1px solid rgba(102, 187, 106, 0.2)',
              marginBottom: '24px'
            }}
          >
            Why Choose Bio Thrive
          </motion.span>
          
          <h2 className="heading-lg text-primary mb-6">
            Nature Meets Innovation
          </h2>
          
          <p className="body-lg text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Our commitment to excellence drives us to create products that harmonize 
            the wisdom of nature with cutting-edge scientific research.
          </p>
        </motion.div>

        <div className="grid grid-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="card text-center"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Hover glow effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '24px',
                  display: 'inline-block'
                }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="heading-sm text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="body-sm text-gray">
                {feature.description}
              </p>

              {/* Decorative element */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60px' } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #2E7D32, #66BB6A)',
                  margin: '20px auto 0',
                  borderRadius: '1px'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(46, 125, 50, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features