import React from "react";
import { motion } from "framer-motion";

const Hero = ({ scrollY }) => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, ${1 - scrollY * 0.001}) 0%, 
          rgba(232, 245, 233, ${0.5 + scrollY * 0.0005}) 50%, 
          rgba(200, 230, 201, ${scrollY * 0.0003}) 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Floating leaves background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="leaf-drift"
            initial={{
              x: -100,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * window.innerHeight - 20,
              rotate: 360,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              delay: i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              background: `linear-gradient(45deg, #66BB6A, #2E7D32)`,
              borderRadius: "0 100% 0 100%",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container-lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gap: "40px",
              textAlign: "center",
            },
          }}
        >
          <div>
            <motion.h1
              className="heading-xl gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ marginTop: "60px", marginBottom: "23px" }}
            >
              Nature's Finest
              <br />
              <span style={{ color: "#2E7D32" }}>For You</span>
            </motion.h1>

            <motion.p
              className="body-lg text-gray"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ marginBottom: "40px", maxWidth: "500px" }}
            >
              Experience the perfect fusion of nature and science with our
              premium natural medical tablets, crafted for your wellness
              journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(46, 125, 50, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <motion.div
                  className="shimmer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                Discover Products
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "60px",
                flexWrap: "wrap",
              }}
            >
              {[
                { number: "100%", label: "Natural" },
                { number: "50K+", label: "Happy Customers" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "#2E7D32",
                      fontFamily: "Poppins",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      fontWeight: "500",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(circle, rgba(102, 187, 106, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
              }}
            />

            {/* Product bottle */}
            <motion.div
              className="float"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                zIndex: 2,
                cursor: "pointer",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600"
                onerror="this.src='https://dummyimage.com/400x600/e5e5e5/666666?text=Bio+Thrive+Tablets'"
                alt="Bio Thrive Natural Tablets"
                style={{
                  width: "350px",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                  filter: "drop-shadow(0 10px 30px rgba(46, 125, 50, 0.2))",
                }}
              />

              {/* Highlight sweep */}
              <motion.div
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100px",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  borderRadius: "20px",
                  pointerEvents: "none",
                }}
              />
            </motion.div>

            {/* Floating elements around product */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  background: i % 2 === 0 ? "#66BB6A" : "#2E7D32",
                  borderRadius: "50%",
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 15}%`,
                  boxShadow: "0 0 20px rgba(102, 187, 106, 0.5)",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "0.8rem", color: "#666", fontWeight: "500" }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: "2px",
            height: "30px",
            background: "linear-gradient(to bottom, #66BB6A, transparent)",
            borderRadius: "1px",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
