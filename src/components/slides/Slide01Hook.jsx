import React from 'react';
import { motion } from 'framer-motion';

const Slide01Hook = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {/* Corner Marks */}
      <span className="corner-mark tl" />
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <span className="corner-mark br" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.6 }}
        style={{
          fontSize: '11px',
          letterSpacing: '0.4em',
          color: '#555',
          fontWeight: 300,
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}
      >
        PHILIPPINES · 2016–2017
      </motion.p>

      {/* Hero Number */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.9,
            type: 'spring',
            stiffness: 120,
            damping: 18
          }}
          style={{
            fontSize: 'clamp(7rem, 22vw, 18rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'var(--text-main)',
            textAlign: 'center'
          }}
        >
          42
        </motion.h1>
        
        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
          style={{
            height: '3px',
            background: 'var(--text-main)',
            width: '100%',
            marginTop: '-8px',
            transformOrigin: 'center'
          }}
        />
      </div>

      {/* Label Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
          fontWeight: 300,
          letterSpacing: '0.25em',
          color: '#888',
          textAlign: 'center',
          marginTop: '24px'
        }}
      >
        MINUTES
      </motion.h2>

      {/* Subtext 1 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)',
          fontWeight: 300,
          color: '#444',
          letterSpacing: '0.1em',
          marginTop: '14px',
          textAlign: 'center'
        }}
      >
        That was the average time between drug-related killings.
      </motion.p>

      {/* Subtext 2 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{
          fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)',
          fontWeight: 300,
          color: '#333',
          letterSpacing: '0.1em',
          marginTop: '6px',
          textAlign: 'center'
        }}
      >
        34 deaths every single day.
      </motion.p>
    </div>
  );
};

export default Slide01Hook;
