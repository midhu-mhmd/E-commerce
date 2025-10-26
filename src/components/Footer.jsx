import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic outro background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />

      {/* Sunlight glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="section-sm" style={{ position: "relative", zIndex: 2 }}>
        <div className="container">
          {/* Main footer content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "48px",
              marginBottom: "60px",
            }}
          >
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  BT
                </div>
                <span
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    fontFamily: "Poppins",
                  }}
                >
                  Bio Thrive
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                Nature's finest for you
              </motion.p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Crafting premium natural supplements that harmonize the wisdom
                of nature with cutting-edge scientific research for your optimal
                wellness.
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Quick Links
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Products",
                  "Science",
                  "About Us",
                  "Contact",
                  "Blog",
                  "FAQ",
                ].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    whileHover={{ x: 5, color: "#A5D6A7" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Get in Touch
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                  }}
                >
                  📧 hello@biothrive.com
                </p>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                  }}
                >
                  📞 1-800-BIO-THRIVE
                </p>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                  }}
                >
                  📍 123 Wellness Way, Nature City, NC 12345
                </p>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Stay Updated
              </h4>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1rem",
                  marginBottom: "16px",
                }}
              >
                Get the latest wellness tips and product updates
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "25px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    backdropFilter: "blur(10px)",
                    fontSize: "1rem",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "25px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "500",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <p
              style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9rem" }}
            >
              © 2024 Bio Thrive. All rights reserved. | Privacy Policy | Terms
              of Service
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "16px" }}>
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (social, index) => (
                  <motion.a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      textDecoration: "none",
                      backdropFilter: "blur(10px)",
                      fontSize: "1.2rem",
                    }}
                  >
                    {social[0]}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Final tagline with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-center"
            style={{ marginTop: "40px" }}
          >
            <motion.p
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                fontSize: "1.3rem",
                fontWeight: "300",
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "0.1em",
              }}
            >
              Nature's finest for you
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
