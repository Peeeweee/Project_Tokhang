import React from 'react';
import { motion } from 'framer-motion';

const FindingRow = ({ num, title, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', width: '100%' }}
  >
    <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--text-main)', opacity: 0.1, lineHeight: 1, flexShrink: 0 }}>
      {num}
    </div>
    <div>
      <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '8px', color: 'var(--text-main)' }}>
        {title}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px' }}>
        {text}
      </p>
    </div>
  </motion.div>
);

const Slide11Meaning = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: 'var(--slide-padding)' }}>
      {/* Corner Marks */}
      <span className="corner-mark tl" />
      <span className="corner-mark tr" />
      <span className="corner-mark bl" />
      <span className="corner-mark br" />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '900px' }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="label"
        >
          Final Results · What the Data Shows
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '60px',
            letterSpacing: '-0.02em'
          }}
        >
          The Story Behind the Connections.
        </motion.h2>

        {/* Findings List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <FindingRow 
            num="01" 
            title="AN 'INNER CIRCLE' OF CONTROL" 
            text="Our map shows that a very small group of people controls almost all the information. Instead of many voices, everything flows through just a few key 'gatekeepers' who decide what gets reported."
            delay={0.3}
          />
          <FindingRow 
            num="02" 
            title="A NATIONWIDE PATTERN" 
            text="This wasn't just a few isolated cases. Every single police station we studied was linked to at least one killing, showing that this was a widespread problem across the whole country."
            delay={0.5}
          />
          <FindingRow 
            num="03" 
            title="THE WATCHDOGS WERE LEFT OUT" 
            text="The people who were supposed to hold others accountable (the 'watchdogs') were kept on the outside of the network. They had the least power to see or report what was actually happening."
            delay={0.7}
          />
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: '60px',
            fontSize: '10px',
            fontFamily: 'var(--font)',
            letterSpacing: '0.1em',
            textAlign: 'center',
            maxWidth: '600px',
            textTransform: 'uppercase'
          }}
        >
          Note: This study looks at how information travels — it does not prove guilt or legal causation.
        </motion.p>
      </div>
    </div>
  );
};

export default Slide11Meaning;
