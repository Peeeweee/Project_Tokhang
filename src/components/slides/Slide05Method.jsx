import React from 'react';
import { motion } from 'framer-motion';

const MethodBox = ({ step, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      style={{
        border: '1px solid var(--text-secondary)',
        opacity: 0.8,
        padding: '20px 24px',
        textAlign: 'center',
        minWidth: '130px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <span style={{ 
        fontSize: '10px', 
        color: 'var(--text-secondary)', 
        letterSpacing: '0.2em', 
        marginBottom: '10px',
        textTransform: 'uppercase'
      }}>
        {step}
      </span>
      <span style={{ 
        fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)', 
        fontWeight: 500, 
        color: 'var(--text-main)', 
        letterSpacing: '0.08em', 
        lineHeight: 1.4,
        whiteSpace: 'pre-line'
      }}>
        {label}
      </span>
    </motion.div>
  );
};

const Slide05Method = () => {
  const steps = [
    { step: '01', label: '1,118\nIncidents' },
    { step: '02', label: 'Edge List\nConstruction' },
    { step: '03', label: 'Gephi\nNetwork' },
    { step: '04', label: 'Centrality\nAnalysis' }
  ];

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
        Our Approach
      </motion.p>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ textAlign: 'center', marginTop: '10px' }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15 }}>
          We didn't just count deaths.<br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>We mapped them.</span>
        </h2>
      </motion.div>

      <div className="divider" style={{ background: 'var(--text-secondary)', opacity: 0.15 }} />

      {/* Pipeline */}
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        margin: '40px 0'
      }}>
        {steps.map((item, index) => (
          <React.Fragment key={item.step}>
            <MethodBox 
              step={item.step} 
              label={item.label} 
              delay={0.35 + index * 0.15} 
            />
            {index < steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                style={{ color: 'var(--text-secondary)', opacity: 0.3, fontSize: '18px' }}
              >
                →
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Body Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="body-text"
        style={{ textAlign: 'center', maxWidth: '640px', marginTop: '20px' }}
      >
        Social Network Analysis treats each killing as a <span className="highlight">CONNECTION</span> — linking the place it happened, the type of violence, and who reported it. The structure that emerges reveals patterns invisible in raw counts.
      </motion.p>
    </div>
  );
};

export default Slide05Method;
