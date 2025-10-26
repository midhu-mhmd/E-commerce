import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navItems = ["Products", "Science", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "16px 0",
        background: isScrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.2)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {" "}
            <img
              src={logo}
              alt="Logo"
              style={{ width: "40px", height: "40px", borderRadius: "5px" }}
            />
          </div>
          <span
            style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2E7D32" }}
          >
            Bio Thrive
          </span>
        </motion.div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                style={{
                  color: "#2E7D32",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              style={{ padding: "12px 24px" }}
            >
              Shop Now
            </motion.button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#2E7D32",
                margin: "4px 0",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px,5px)"
                  : "none",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#2E7D32",
                margin: "4px 0",
                opacity: isMenuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#2E7D32",
                margin: "4px 0",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(7px,-6px)"
                  : "none",
              }}
            />
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            overflow: "hidden",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className="container"
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#2E7D32",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn btn-primary" style={{ marginTop: "16px" }}>
              Shop Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
