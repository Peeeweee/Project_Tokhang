import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

const StatCol = ({ label, target, description, note, delay, color = "var(--text-main)" }) => {
  const count = useCountUp(parseFloat(target), 1000);

  return (
    <div style={{ textAlign: 'center', minWidth: '160px' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </p>
      <h3 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color, fontVariantNumeric: 'tabular-nums' }}>
        {Math.floor(count)}
      </h3>
      <p style={{ fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>
        {description}
      </p>
      <p style={{ fontSize: '11px', color: 'var(--text-secondary)', opacity: 0.7, marginTop: '12px', lineHeight: 1.5, maxWidth: '160px' }}>
        {note}
      </p>
    </div>
  );
};

const Slide09OuterEdge = () => {
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
        Finding 02 · The Outer Edge
      </motion.p>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', marginTop: '10px' }}
      >
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
          The accountability bodies<br />
          were far from the center.
        </h2>
      </motion.div>

      <div className="divider" style={{ background: 'var(--text-secondary)', opacity: 0.15 }} />

      {/* Stats Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="stat-row"
        style={{ 
          display: 'flex', 
          gap: '50px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          margin: '32px 0'
        }}
      >
        <StatCol 
          label="HR GROUPS"
          target={15}
          description="connections"
          note="Degree: 15 vs. 25 for police/news"
          delay={0.6}
          color="var(--text-secondary)"
        />
        <div className="vertical-divider" style={{ width: '1px', background: 'var(--text-secondary)', opacity: 0.15, alignSelf: 'stretch' }} />
        <StatCol 
          label="COMMISSION ON HUMAN RIGHTS"
          target={11}
          description="connections"
          note="Influence score: 0.48 vs. 1.0 at center"
          delay={0.7}
          color="var(--text-secondary)"
        />
        <div className="vertical-divider" style={{ width: '1px', background: 'var(--text-secondary)', opacity: 0.15, alignSelf: 'stretch' }} />
        <StatCol 
          label="THE CHURCH"
          target={7}
          description="connections"
          note="The most isolated reporter — lowest reach of all sources."
          delay={0.8}
          color="var(--text-secondary)"
        />
      </motion.div>

      {/* Body Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="body-text"
        style={{ textAlign: 'center', maxWidth: '650px', marginTop: '24px' }}
      >
        Many incidents reported to police and news were <span className="highlight">NEVER SIMULTANEOUSLY REPORTED</span> to human rights organizations, the CHR, or the Church.
      </motion.p>
    </div>
  );
};

export default Slide09OuterEdge;
