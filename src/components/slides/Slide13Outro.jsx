import React from 'react';
import { motion } from 'framer-motion';

const Slide13Outro = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Acronym Breakdown (Faded background) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          style={{
            position: 'absolute',
            fontSize: '18vw',
            fontWeight: 900,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            letterSpacing: '-0.05em'
          }}
        >
          TOKHANG
        </motion.div>

        {/* Corner Marks */}
        <span className="corner-mark tl" />
        <span className="corner-mark tr" />
        <span className="corner-mark bl" />
        <span className="corner-mark br" />

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <p className="label">Project Presentation · End</p>
          <h1 className="headline" style={{ marginBottom: '10px' }}>
            Project <span style={{ color: 'var(--text-main)' }}>T.O.K.H.A.N.G.</span>
          </h1>
          <div className="divider" style={{ background: 'var(--text-main)', opacity: 0.2 }} />
          <p className="subhead" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Tracing the <span className="highlight">Dynamics of Influence</span> and Accountability in
            Reported Cases of State-Sponsored Violence
          </p>
        </motion.div>

        {/* Authors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ 
            marginTop: '60px', 
            display: 'flex', 
            gap: '40px',
            fontSize: '11px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          <span>Delgado</span>
          <span>Delgado</span>
          <span>Galzote</span>
          <span>Labay</span>
        </motion.div>

        {/* Institutions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          style={{ 
            marginTop: '30px', 
            fontSize: '9px', 
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          CSDS 326 · USeP CIC · 2026
        </motion.p>
      </div>
    </div>
  );
};

export default Slide13Outro;
