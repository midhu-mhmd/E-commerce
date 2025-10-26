import React from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #FFFFFF 100%, #E8F5E9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          style={{ marginBottom: "32px" }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
              borderRadius: "20px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "90px", height: "90px" }}
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#2E7D32",
            fontFamily: "Poppins",
            marginBottom: "16px",
          }}
        >
          Bio Thrive
        </motion.h1>

        {/* Tagline with letter animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            fontSize: "1.25rem",
            color: "#66BB6A",
            fontWeight: "400",
            letterSpacing: "0.05em",
          }}
        >
          {"Nature's finest for you".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.8 + index * 0.05,
                duration: 0.3,
              }}
              className="shimmer"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Floating particles */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0,
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: 1 + i * 0.3,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                background: "#66BB6A",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(102, 187, 106, 0.5)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
