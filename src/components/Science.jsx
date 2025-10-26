import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Science = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gap: "40px",
            },
          }}
        >
          {/* Left - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(102, 187, 106, 0.1)",
                color: "#2E7D32",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: "500",
                border: "1px solid rgba(102, 187, 106, 0.2)",
                marginBottom: "24px",
              }}
            >
              Science & Research
            </motion.span>

            <motion.h2
              className="heading-lg text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Backed by Research,
              <br />
              <span className="gradient-text">Proven by Results</span>
            </motion.h2>

            <motion.p
              className="body-lg text-gray mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our commitment to scientific excellence drives every aspect of our
              product development. Each formula undergoes rigorous testing and
              validation to ensure maximum efficacy and safety.
            </motion.p>

            {/* Research stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ marginBottom: "40px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "32px",
                }}
              >
                {[
                  { number: "500+", label: "Clinical Studies" },
                  { number: "15+", label: "Research Partners" },
                  { number: "99.9%", label: "Purity Standard" },
                  { number: "24/7", label: "Quality Control" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                        color: "#2E7D32",
                        fontFamily: "Poppins",
                        marginBottom: "4px",
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
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(46, 125, 50, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Research Papers
            </motion.button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ position: "relative" }}
          >
            {/* Main image */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600"
                onerror="this.src='https://dummyimage.com/500x400/e5e5e5/666666?text=Laboratory+Research'"
                alt="Scientific research laboratory"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                }}
              />

              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(102, 187, 106, 0.1) 100%)",
                  borderRadius: "24px",
                }}
              />
            </motion.div>

            {/* Floating elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.sin(i) * 5, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "6px",
                  background:
                    i % 3 === 0
                      ? "#66BB6A"
                      : i % 3 === 1
                      ? "#2E7D32"
                      : "#A5D6A7",
                  borderRadius: "50%",
                  top: `${15 + i * 10}%`,
                  left: `${10 + i * 8}%`,
                  boxShadow: "0 0 15px rgba(102, 187, 106, 0.4)",
                  zIndex: 2,
                }}
              />
            ))}

            {/* Molecular structure overlay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "80px",
                height: "80px",
                border: "2px solid rgba(102, 187, 106, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "2px solid rgba(46, 125, 50, 0.5)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#66BB6A",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </motion.div>

            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: -1,
              }}
            />
          </motion.div>
        </div>

        {/* Bottom section - Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginTop: "120px" }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-md text-primary mb-4">
              Our Research Process
            </h3>
            <p className="body-md text-gray">
              From concept to creation, every step is meticulously planned and
              executed
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                step: "01",
                title: "Research",
                desc: "Extensive literature review and ingredient analysis",
              },
              {
                step: "02",
                title: "Formulation",
                desc: "Precise blending and optimization of active compounds",
              },
              {
                step: "03",
                title: "Testing",
                desc: "Rigorous quality control and efficacy validation",
              },
              {
                step: "04",
                title: "Production",
                desc: "Manufacturing in certified, state-of-the-art facilities",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #2E7D32, #66BB6A)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    fontFamily: "Poppins",
                  }}
                >
                  {process.step}
                </motion.div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#2E7D32",
                    marginBottom: "8px",
                  }}
                >
                  {process.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: "1.5",
                  }}
                >
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Science;
