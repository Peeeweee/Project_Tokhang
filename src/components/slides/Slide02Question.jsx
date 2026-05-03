import React from 'react';
import { motion } from 'framer-motion';

const Slide02Question = () => {
  const lineStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: 'center'
  };

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
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '10px',
          letterSpacing: '0.4em',
          color: '#444',
          fontWeight: 300,
          marginBottom: '40px'
        }}
      >
        CSDS 326 — SOCIAL NETWORK ANALYSIS
      </motion.p>

      {/* Line 1 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ ...lineStyle, color: 'var(--text-main)' }}
      >
        Each death left a record.
      </motion.p>

      {/* Line 2 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ ...lineStyle, fontWeight: 300, color: 'var(--text-secondary)', marginTop: '16px' }}
      >
        But whose record?
      </motion.p>

      {/* Line 3 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ ...lineStyle, fontWeight: 300, color: 'var(--text-secondary)', marginTop: '12px', opacity: 0.8 }}
      >
        And who decided the world would hear about it?
        <span 
          className="cursor-blink"
          style={{
            width: '3px',
            height: '1.2em',
            background: 'var(--text-main)',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '12px'
          }}
        />
      </motion.p>
    </div>
  );
};

export default Slide02Question;
