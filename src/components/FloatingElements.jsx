import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {/* Ambient floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            background:
              i % 3 === 0 ? "#66BB6A" : i % 3 === 1 ? "#2E7D32" : "#A5D6A7",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 20px rgba(102, 187, 106, 0.4)",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Larger organic shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`organic-${i}`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            background: `radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%)`,
            borderRadius: `${30 + Math.random() * 20}% ${
              70 + Math.random() * 20
            }% ${30 + Math.random() * 20}% ${70 + Math.random() * 20}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Subtle leaf shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            background: "linear-gradient(45deg, #66BB6A, #2E7D32)",
            borderRadius: "0 100% 0 100%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
