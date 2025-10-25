import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const products = [
    {
      id: 1,
      name: 'Immunity Boost',
      category: 'Immune Support',
      price: '$49.99',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Vitamin C', 'Zinc', 'Elderberry'],
      description: 'Strengthen your natural defenses with our premium immunity blend.'
    },
    {
      id: 2,
      name: 'Energy Vitality',
      category: 'Energy & Focus',
      price: '$54.99',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['B-Complex', 'Ginseng', 'Green Tea'],
      description: 'Natural energy support for sustained vitality throughout your day.'
    },
    {
      id: 3,
      name: 'Calm & Balance',
      category: 'Stress Relief',
      price: '$44.99',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Ashwagandha', 'L-Theanine', 'Magnesium'],
      description: 'Find your center with our carefully crafted stress-relief formula.'
    }
  ]

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #ffffff 100%)' }}>
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
              background: 'rgba(46, 125, 50, 0.1)',
              color: '#2E7D32',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '500',
              border: '1px solid rgba(46, 125, 50, 0.2)',
              marginBottom: '24px'
            }}
          >
            Our Premium Collection
          </motion.span>
          
          <h2 className="heading-lg text-primary mb-6">
            Wellness Solutions
          </h2>
          
          <p className="body-lg text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Discover our carefully curated selection of natural supplements, 
            each designed to support your unique wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="card"
              style={{ 
                position: 'relative', 
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Product image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ 
                  position: 'relative',
                  marginBottom: '24px',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={product.image}
                  onerror={`this.src='https://dummyimage.com/300x300/e5e5e5/666666?text=${product.name.replace(' ', '+')}'`}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '16px'
                  }}
                />
                
                {/* Shimmer overlay on hover */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Category badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '4px 12px',
                  background: 'rgba(46, 125, 50, 0.9)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)'
                }}>
                  {product.category}
                </div>
              </motion.div>

              {/* Product info */}
              <div>
                <h3 className="heading-sm text-primary mb-2">
                  {product.name}
                </h3>
                
                <p className="body-sm text-gray mb-4">
                  {product.description}
                </p>

                {/* Benefits */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px' 
                  }}>
                    {product.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '4px 8px',
                          background: 'rgba(102, 187, 106, 0.1)',
                          color: '#2E7D32',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#2E7D32',
                    fontFamily: 'Poppins'
                  }}>
                    {product.price}
                  </span>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '8px 16px',
                      background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)'
                    }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>

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
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  zIndex: -1
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="body-md text-gray mb-8">
            Can't find what you're looking for? We have many more products in our full collection.
          </p>
          
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginRight: '16px' }}
          >
            View All Products
          </motion.button>
          
          <motion.button
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(46, 125, 50, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Personalized Recommendations
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
