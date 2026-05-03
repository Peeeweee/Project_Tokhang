import React from 'react';
import { motion } from 'framer-motion';

const StatCol = ({ num, label, detail }) => (
  <div style={{ textAlign: 'center', flex: 1 }}>
    <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
      {num}
    </h3>
    <p style={{ fontSize: '11px', letterSpacing: '0.2em', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase' }}>
      {label}
    </p>
    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '12px', lineHeight: 1.5, opacity: 0.7 }}>
      {detail}
    </p>
  </div>
);

const Slide04Context = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Corner Marks */}
        <span className="corner-mark tl" />
        <span className="corner-mark tr" />
        <span className="corner-mark bl" />
        <span className="corner-mark br" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="label"
        >
          Context · The Scope of Analysis
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '60px', 
            marginTop: '40px',
            width: '100%',
            maxWidth: '1000px'
          }}
        >
          <StatCol 
            num="42" 
            label="Total Killings" 
            detail="Aggregated from multiple sources" 
          />
          <div style={{ width: '1px', height: '100px', background: 'var(--text-secondary)', opacity: 0.1, alignSelf: 'center' }} />
          <StatCol 
            num="36" 
            label="Police Nodes" 
            detail="Precincts & stations involved" 
          />
          <div style={{ width: '1px', height: '100px', background: 'var(--text-secondary)', opacity: 0.1, alignSelf: 'center' }} />
          <StatCol 
            num="18" 
            label="Media Entities" 
            detail="Reporters & news agencies" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="divider"
          style={{ background: 'var(--text-main)', opacity: 0.2, margin: '60px auto 40px' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            fontSize: 'clamp(0.8rem, 1.2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.8,
            fontWeight: 300
          }}
        >
          Our study focuses on the <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>centrality</span> of reporting. 
          By mapping connections, we identify who controls the flow of information.
        </motion.p>
      </div>
    </div>
  );
};

export default Slide04Context;
