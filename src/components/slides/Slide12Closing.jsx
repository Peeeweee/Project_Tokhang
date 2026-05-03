import React from 'react';
import { motion } from 'framer-motion';

const Slide12Closing = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative'
    }}>
      {/* Noise Texture Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Corner Marks */}
        <span className="corner-mark tl" />
        <span className="corner-mark tr" />
        <span className="corner-mark bl" />
        <span className="corner-mark br" />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="label"
        >
          Closing · Project T.O.K.H.A.N.G.
        </motion.p>

        {/* Quote 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            textAlign: 'center',
            lineHeight: 1.8,
            marginTop: '40px'
          }}
        >
          Every number in this study <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>was a person.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="divider"
          style={{ background: 'var(--text-secondary)', opacity: 0.15 }}
        />

        {/* Quote 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            opacity: 0.6,
            textAlign: 'center',
            lineHeight: 1.8
          }}
        >
          The network doesn't tell us who was right or wrong.
        </motion.p>

        {/* Quote 3 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1.2 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            opacity: 0.6,
            textAlign: 'center',
            lineHeight: 1.8
          }}
        >
          It tells us <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>who was heard</span> — and who wasn't.
        </motion.p>

        {/* Credits */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'var(--text-secondary)',
            opacity: 0.3,
            marginTop: '48px',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          Delgado · Delgado · Galzote · Labay | CSDS 326 · USeP CIC · 2026
        </motion.p>
      </div>
    </div>
  );
};

export default Slide12Closing;
