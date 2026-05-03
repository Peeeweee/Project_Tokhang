import React from 'react';
import { motion } from 'framer-motion';

const Slide06NetworkExplained = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: 'var(--slide-padding)' }}>
      {/* Corner Marks */}
      <span className="corner-mark tl" />
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <span className="corner-mark br" />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="label"
        >
          Methodology · How it Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            maxWidth: '800px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginTop: '20px'
          }}
        >
          Mapping the <span style={{ color: 'var(--text-main)' }}>Invisible Links.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.2, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="divider"
        />

        <div style={{ display: 'flex', gap: '60px', marginTop: '20px', maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ flex: 1, textAlign: 'left' }}
          >
            <h3 style={{ fontSize: '11px', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>What is a Network?</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Imagine a map where every dot is a person or a police station. We draw a line whenever one dot "talks" to another (like a reporter quoting a police officer). By looking at all these lines together, we can see who the most powerful people are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{ flex: 1, textAlign: 'left' }}
          >
            <h3 style={{ fontSize: '11px', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>What we Looked For</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              We didn't just count the reports. we looked for the "Information Bridges"—the people who act as the only way for news to travel from the police to the public. If that bridge is broken or biased, the whole story changes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide06NetworkExplained;
