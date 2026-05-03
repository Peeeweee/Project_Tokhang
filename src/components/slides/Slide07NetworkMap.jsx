import React from 'react';
import { motion } from 'framer-motion';
import NetworkSVG from '../NetworkSVG';

const Slide07NetworkMap = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      {/* Corner Marks */}
      <span className="corner-mark tl" />
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <span className="corner-mark br" />

      {/* Legend & Labels — Fixed Top Left Column */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Title Group */}
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(16px, 2.2vw, 24px)',
              fontWeight: '800',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--text-main)',
              margin: '0 0 4px 0'
            }}
          >
            Network Map
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(9px, 1vw, 11px)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '400',
              margin: 0
            }}
          >
            System of connectivity & influence
          </motion.p>
        </div>

        {/* Legend Group */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <p style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, margin: '0 0 4px 0' }}>Legend</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--text-main)', borderRadius: '50%' }} />
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Core (Reporter/Killing)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '8px', height: '8px', border: '1.5px solid var(--text-secondary)', borderRadius: '50%' }} />
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Police Station</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '8px', height: '8px', border: '1.5px solid var(--text-secondary)', borderStyle: 'dashed', borderRadius: '50%' }} />
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Accountability Node</span>
          </div>
        </motion.div>
      </div>

      {/* Network SVG — fullscreen, no border or card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NetworkSVG animate={true} />
      </motion.div>
    </div>
  );
};

export default Slide07NetworkMap;
