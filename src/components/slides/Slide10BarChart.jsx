import React from 'react';
import { motion } from 'framer-motion';

const BarRow = ({ label, width, value, fill, delay, highlight, opacity = 1 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', width: '100%' }}>
      <div style={{ 
        width: 'var(--bar-label-width, 160px)', 
        textAlign: 'right', 
        fontSize: '11px', 
        color: highlight ? 'var(--text-main)' : 'var(--text-secondary)', 
        flexShrink: 0,
        fontWeight: highlight ? 700 : 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em'
      }}>
        {label}
      </div>
      <div style={{ flex: 1, height: '28px', background: 'var(--text-secondary)', opacity: 0.1, position: 'relative' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ delay, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          style={{ height: '100%', background: fill, position: 'absolute', left: 0, top: 0, opacity }}
        />
      </div>
      <div style={{ 
        width: '46px', 
        fontSize: '11px', 
        color: 'var(--text-main)', 
        fontWeight: 800,
        fontVariantNumeric: 'tabular-nums' 
      }}>
        {value}
      </div>
    </div>
  );
};

const Slide10BarChart = () => {
  const chartData = [
    { label: "Police", width: "100%", value: "65.14", fill: "var(--text-main)", highlight: true },
    { label: "News", width: "100%", value: "65.14", fill: "var(--text-main)", highlight: true },
    { label: "Others", width: "89%", value: "58.04", fill: "var(--text-main)", opacity: 0.9 },
    { label: "HR Groups", width: "29.4%", value: "19.17", fill: "var(--text-main)", opacity: 0.7 },
    { label: "CHR", width: "14.3%", value: "9.34", fill: "var(--text-main)", opacity: 0.5 },
    { label: "Church", width: "4.7%", value: "3.07", fill: "var(--text-main)", opacity: 0.3 }
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
        style={{ 
          fontSize: '16px',
          fontWeight: '700',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#888'
        }}
      >
        The Information Gap · Betweenness Centrality
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
          fontWeight: 700,
          maxWidth: '640px',
          lineHeight: 1.2,
          textAlign: 'center',
          marginTop: '10px'
        }}
      >
        How many bridges did each reporter control?
      </motion.h2>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '11px',
          color: '#444',
          letterSpacing: '0.08em',
          marginTop: '4px',
          textTransform: 'uppercase'
        }}
      >
        Higher = more central to the flow of information between nodes.
      </motion.p>

      {/* Chart Block */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ 
          width: '100%', 
          maxWidth: '640px', 
          marginTop: '28px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {chartData.map((item, index) => (
          <BarRow 
            key={item.label}
            {...item}
            delay={0.6 + index * 0.12}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slide10BarChart;
