import React from 'react';
import { motion } from 'framer-motion';

const InsightItem = ({ num, text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.8 }}
      style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '26px', maxWidth: '640px' }}
    >
      <div style={{ 
        fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', 
        fontWeight: 700, 
        color: 'var(--text-secondary)', 
        opacity: 0.2,
        lineHeight: 1, 
        flexShrink: 0, 
        width: '48px', 
        textAlign: 'right' 
      }}>
        {num}
      </div>
      <div style={{ 
        fontSize: 'clamp(0.78rem, 1.2vw, 0.95rem)', 
        fontWeight: 300, 
        color: 'var(--text-secondary)', 
        lineHeight: 1.8, 
        paddingTop: '4px' 
      }}>
        {text}
      </div>
    </motion.div>
  );
};

const Slide11Meaning = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {/* Corner Marks */}
      <span className="corner-mark tl" />
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <span className="corner-mark br" />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="label"
      >
        What the Network Reveals
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          fontWeight: 700,
          marginTop: '10px'
        }}
      >
        The structure speaks.
      </motion.h2>

      <div className="divider" style={{ background: 'var(--text-secondary)', opacity: 0.15 }} />

      {/* Insights List */}
      <div style={{ marginTop: '20px' }}>
        <InsightItem 
          num="01"
          text={
            <>
              The analysis reveals a <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>CORE-PERIPHERY STRUCTURE</strong> — where a primary set of nodes serves as the predominant gateway for information flow. This indicates a documentation environment organized around specific reporting channels.
            </>
          }
          delay={0.4}
        />
        <InsightItem 
          num="02"
          text={
            <>
              <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>POLICE KILLING WAS UNIVERSAL.</strong> All 25 stations in the dataset had at least one recorded police killing — suggesting these weren't isolated events, but a nationwide pattern.
            </>
          }
          delay={0.65}
        />
        <InsightItem 
          num="03"
          text={
            <>
              The nodes with the <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>MOST POWER TO DOCUMENT</strong> were also the nodes most closely associated with the events being documented. Accountability bodies sat at the periphery.
            </>
          }
          delay={0.9}
        />
      </div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          fontSize: '10px',
          color: '#2a2a2a',
          letterSpacing: '0.12em',
          textAlign: 'center',
          marginTop: '20px',
          textTransform: 'uppercase'
        }}
      >
        Note: This analysis reveals structural patterns in documentation — not legal judgment or causation.
      </motion.p>
    </div>
  );
};

export default Slide11Meaning;
