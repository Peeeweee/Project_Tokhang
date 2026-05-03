import React from 'react';
import { motion } from 'framer-motion';

const NetworkSVG = ({ animate }) => {
  const policeStations = [
    { cx: 220, cy: 48 }, { cx: 295, cy: 32 }, { cx: 378, cy: 26 }, { cx: 455, cy: 34 }, { cx: 525, cy: 55 },
    { cx: 598, cy: 105 }, { cx: 650, cy: 175 }, { cx: 645, cy: 255 }, { cx: 610, cy: 330 },
    { cx: 530, cy: 385 }, { cx: 450, cy: 400 }, { cx: 370, cy: 405 }, { cx: 290, cy: 398 }, { cx: 215, cy: 382 },
    { cx: 148, cy: 330 }, { cx: 108, cy: 258 }, { cx: 112, cy: 175 }, { cx: 155, cy: 108 }
  ];

  const centerPos = { x: 370, y: 220 };

  const accountabilityNodes = [
    { id: 'hr', cx: 72, cy: 210, r: 20, label: ['HR', 'Groups'], fontSize: 6, fill: '#444' },
    { id: 'chr', cx: 680, cy: 80, r: 15, label: ['CHR'], fontSize: 6.5, fill: '#3a3a3a' },
    { id: 'church', cx: 690, cy: 365, r: 12, label: ['Church'], fontSize: 5.5, fill: '#333' }
  ];

  return (
    <svg viewBox="0 0 740 420" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Background — using CSS variable or transparent */}
      <rect width="740" height="420" fill="transparent" />

      {/* Reference Rings */}
      <circle cx="370" cy="210" r="170" fill="none" stroke="var(--text-secondary)" strokeWidth="0.8" strokeDasharray="4,6" opacity="0.25" />
      <circle cx="370" cy="210" r="105" fill="none" stroke="var(--text-secondary)" strokeWidth="0.8" opacity="0.2" />

      {/* Edges from PS to Center */}
      {policeStations.map((ps, i) => (
        <motion.line
          key={`edge-${i}`}
          x1={ps.cx}
          y1={ps.cy}
          x2={centerPos.x}
          y2={centerPos.y}
          stroke="var(--text-main)"
          strokeWidth="1"
          opacity="0.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.25 } : {}}
          transition={{ delay: 0.5 + i * 0.04, duration: 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* Accountability Edges */}
      {accountabilityNodes.map((node) => (
        <motion.line
          key={`acc-edge-${node.id}`}
          x1={node.cx}
          y1={node.cy}
          x2={centerPos.x}
          y2={centerPos.y}
          stroke="var(--text-main)"
          strokeWidth="1.2"
          strokeDasharray="3,3"
          opacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.3 } : {}}
          transition={{ delay: 1.5, duration: 1.5 }}
        />
      ))}

      {/* Police Station Nodes */}
      {policeStations.map((ps, i) => (
        <circle
          key={`ps-${i}`}
          cx={ps.cx}
          cy={ps.cy}
          r="7"
          fill="var(--bg-main)"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          opacity="0.7"
        />
      ))}

      {/* Accountability Nodes */}
      {accountabilityNodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="var(--bg-main)"
            stroke="var(--text-main)"
            strokeWidth="1.5"
            strokeDasharray="4,4"
            opacity="0.8"
          />
          <text
            x={node.cx}
            y={node.cy}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-main)"
            fontSize={node.fontSize}
            fontWeight="700"
            fontFamily="var(--font)"
          >
            {node.label.map((line, idx) => (
              <tspan x={node.cx} dy={idx === 0 ? 0 : node.fontSize + 2} key={idx}>{line}</tspan>
            ))}
          </text>
        </g>
      ))}

      {/* Center Cluster Nodes */}
      <g filter="url(#shadow)">
        {/* Node: Reported by Police — Primary Focus */}
        <g>
          <circle cx="318" cy="195" r="46" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="4" />
          <motion.circle 
            cx="318" cy="195" r="46" 
            fill="none" 
            stroke="var(--text-main)" 
            strokeWidth="1" 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: [0, 0.2, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <text x="318" y="190" textAnchor="middle" fill="var(--text-main)" fontSize="9" fontWeight="900" fontFamily="var(--font)">
            <tspan x="318" dy="0">Reported by</tspan>
            <tspan x="318" dy="11">Police</tspan>
          </text>
          <text x="318" y="216" textAnchor="middle" fill="var(--text-secondary)" fontSize="7" fontWeight="600" fontFamily="var(--font)">degree: 25</text>
        </g>

        {/* Node: Reported by News */}
        <g>
          <circle cx="422" cy="188" r="46" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="2.5" />
          <text x="422" y="183" textAnchor="middle" fill="var(--text-main)" fontSize="8.5" fontWeight="800" fontFamily="var(--font)">
            <tspan x="422" dy="0">Reported by</tspan>
            <tspan x="422" dy="10">News</tspan>
          </text>
          <text x="422" y="207" textAnchor="middle" fill="var(--text-secondary)" fontSize="7" fontWeight="500" fontFamily="var(--font)">degree: 22</text>
        </g>

        {/* Node: Police Killing */}
        <g>
          <circle cx="318" cy="252" r="40" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="2.5" />
          <text x="318" y="250" textAnchor="middle" fill="var(--text-main)" fontSize="8.5" fontWeight="800" fontFamily="var(--font)">
            <tspan x="318" dy="0">Police</tspan>
            <tspan x="318" dy="10">Killing</tspan>
          </text>
        </g>

        {/* Node: Unidentified Assailant */}
        <g>
          <circle cx="422" cy="252" r="38" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="2.5" />
          <text x="422" y="250" textAnchor="middle" fill="var(--text-main)" fontSize="8" fontWeight="800" fontFamily="var(--font)">
            <tspan x="422" dy="0">Unidentified</tspan>
            <tspan x="422" dy="10">Assailant</tspan>
          </text>
        </g>

        {/* Node: Reported by Others */}
        <g>
          <circle cx="370" cy="222" r="28" fill="var(--bg-main)" stroke="var(--text-secondary)" strokeWidth="1.5" strokeDasharray="2,2" />
          <text x="370" y="220" textAnchor="middle" fill="var(--text-main)" fontSize="7" fontWeight="800" fontFamily="var(--font)">
            <tspan x="370" dy="0">Reported</tspan>
            <tspan x="370" dy="9">by Others</tspan>
          </text>
        </g>
      </g>

      {/* Legend removed from SVG — now a fixed overlay in the slide component */}
    </svg>
  );
};

export default NetworkSVG;
