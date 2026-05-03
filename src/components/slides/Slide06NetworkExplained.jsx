import React from 'react';
import { motion } from 'framer-motion';

const NodeCard = ({ title, desc, iconType, delay }) => {
  const getIcon = () => {
    switch(iconType) {
      case 'ps':
        return (
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--text-secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 16px', opacity: 0.6 }}>
            <span style={{ fontSize: '9px', color: 'var(--text-secondary)', fontWeight: 600 }}>PS</span>
          </div>
        );
      case 'type':
        return (
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--text-main)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 16px' }}>
            <span style={{ fontSize: '8px', color: 'var(--bg-main)', fontWeight: 700 }}>TYPE</span>
          </div>
        );
      case 'rep':
        return (
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--text-main)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 16px' }}>
            <span style={{ fontSize: '9px', color: 'var(--text-main)', fontWeight: 600 }}>REP</span>
          </div>
        );
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      style={{ textAlign: 'center', minWidth: '175px' }}
    >
      {getIcon()}
      <h4 style={{ fontSize: 'clamp(0.78rem, 1.1vw, 0.9rem)', fontWeight: 500, color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {title}
      </h4>
      <p style={{ fontSize: 'clamp(0.6rem, 0.88vw, 0.73rem)', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
        {desc}
      </p>
    </motion.div>
  );
};

const Slide06NetworkExplained = () => {
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
        The Network · Explained Simply
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          marginTop: '10px'
        }}
      >
        Three kinds of players.
      </motion.h2>

      <div className="divider" />

      {/* Cards Row */}
      <div style={{ 
        display: 'flex', 
        gap: '50px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        margin: '40px 0'
      }}>
        <NodeCard 
          iconType="ps"
          title="Police Station"
          desc={"Where the incident\nwas recorded.\n25 stations total."}
          delay={0.4}
        />
        <NodeCard 
          iconType="type"
          title="Killing Type"
          desc={"How the person died —\npolice operation or\nunidentified assailant."}
          delay={0.6}
        />
        <NodeCard 
          iconType="rep"
          title="Reporter"
          desc={"Who documented it —\npolice, news, church,\nhuman rights, or CHR."}
          delay={0.8}
        />
      </div>

      {/* Body Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="body-text"
        style={{ textAlign: 'center', maxWidth: '600px', marginTop: '28px' }}
      >
        A link forms when all three appear in the same incident. The result is a map of <span className="highlight">WHO CONNECTED TO WHOM</span>.
      </motion.p>
    </div>
  );
};

export default Slide06NetworkExplained;
