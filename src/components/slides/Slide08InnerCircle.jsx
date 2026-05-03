import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

const StatCol = ({ label, target, suffix = "", description, note, delay, color = "var(--text-main)" }) => {
  const isFloat = typeof target === 'string' && target.includes('.');
  const count = useCountUp(parseFloat(target), 1000);

  const displayValue = isFloat ? count.toFixed(2) : Math.floor(count);

  return (
    <div style={{ textAlign: 'center', minWidth: '160px' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </p>
      <h3 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color, fontVariantNumeric: 'tabular-nums' }}>
        {displayValue}{suffix}
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

const Slide08InnerCircle = () => {
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
        Finding 01 · The Inner Circle
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700,
          maxWidth: '680px',
          lineHeight: 1.2,
          textAlign: 'center',
          marginTop: '10px'
        }}
      >
        Two voices dominated the network.
      </motion.h2>

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
          label="REPORTED BY POLICE"
          target={25}
          description="connections"
          note="Connected to every station in the dataset."
          delay={0.6}
        />
        <div className="vertical-divider" style={{ width: '1px', background: 'var(--text-secondary)', opacity: 0.15, alignSelf: 'stretch' }} />
        <StatCol 
          label="REPORTED BY NEWS"
          target={25}
          description="connections"
          note="Identical reach — exactly the same as police reports."
          delay={0.7}
        />
        <div className="vertical-divider" style={{ width: '1px', background: 'var(--text-secondary)', opacity: 0.15, alignSelf: 'stretch' }} />
        <StatCol 
          label="INFLUENCE SCORE"
          target="1.00"
          description="eigenvector (max possible)"
          note="Both nodes hit the theoretical ceiling."
          delay={0.8}
        />
      </motion.div>

      {/* Body Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="body-text"
        style={{ textAlign: 'center', maxWidth: '640px', marginTop: '24px' }}
      >
        Police and news media were not just the most connected — they were <span className="highlight">STRUCTURALLY IDENTICAL</span>. Wherever police documented a killing, news media was there too.
      </motion.p>
    </div>
  );
};

export default Slide08InnerCircle;
