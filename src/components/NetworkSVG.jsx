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
    { id: 'hr', cx: 72, cy: 210, r: 22, label: ['HR', 'Groups'], fontSize: 6.5, fill: '#444' },
    { id: 'chr', cx: 680, cy: 80, r: 18, label: ['CHR'], fontSize: 7, fill: '#3a3a3a' },
    { id: 'church', cx: 690, cy: 365, r: 15, label: ['Church'], fontSize: 6, fill: '#333' }
  ];

  return (
    <svg viewBox="0 0 740 420" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, overflow: 'visible' }}>
      <defs>
        {/* Glow Filters */}
        <filter id="glow-small" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-large" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Gradients */}
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="var(--text-main)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--text-main)" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      {/* 1. Background Technical Grid */}
      <g opacity="0.03" stroke="var(--text-main)" strokeWidth="0.5">
        {[...Array(15)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="420" />
        ))}
        {[...Array(9)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 50} x2="740" y2={i * 50} />
        ))}
      </g>

      {/* 2. Reference Radar Rings */}
      <circle cx="370" cy="210" r="180" fill="none" stroke="var(--text-secondary)" strokeWidth="0.5" strokeDasharray="2,4" opacity="0.15" />
      <circle cx="370" cy="210" r="120" fill="none" stroke="var(--text-secondary)" strokeWidth="1" opacity="0.1" />
      <circle cx="370" cy="210" r="60" fill="none" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.05" />

      {/* 3. Connection Lines (Edges) */}
      {policeStations.map((ps, i) => (
        <motion.line
          key={`edge-${i}`}
          x1={ps.cx} y1={ps.cy}
          x2={centerPos.x} y2={centerPos.y}
          stroke="var(--text-main)"
          strokeWidth="1.2"
          opacity="0.15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.15 } : {}}
          transition={{ delay: 0.2 + i * 0.03, duration: 1.5, ease: "easeOut" }}
        />
      ))}

      {/* Accountability Edges */}
      {accountabilityNodes.map((node) => (
        <motion.line
          key={`acc-edge-${node.id}`}
          x1={node.cx} y1={node.cy}
          x2={centerPos.x} y2={centerPos.y}
          stroke="var(--text-main)"
          strokeWidth="1"
          strokeDasharray="4,4"
          opacity="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.2 } : {}}
          transition={{ delay: 1.2, duration: 2 }}
        />
      ))}

      {/* 4. Peripheral Nodes (Police Stations) */}
      {policeStations.map((ps, i) => (
        <g key={`ps-${i}`}>
          <circle
            cx={ps.cx} cy={ps.cy} r="6"
            fill="var(--bg-main)"
            stroke="var(--text-secondary)"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx={ps.cx} cy={ps.cy} r="2.5"
            fill="var(--text-secondary)"
            opacity="0.4"
          />
        </g>
      ))}

      {/* 5. Accountability Nodes */}
      {accountabilityNodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="url(#nodeGrad)"
            stroke="var(--text-secondary)"
            strokeWidth="1"
            strokeDasharray="3,3"
          />
          <text
            x={node.cx} y={node.cy}
            textAnchor="middle" dominantBaseline="middle"
            fill="var(--text-main)" fontSize={node.fontSize} fontWeight="600" fontFamily="var(--font)" opacity="0.6"
          >
            {node.label.map((line, idx) => (
              <tspan x={node.cx} dy={idx === 0 ? 0 : node.fontSize + 2} key={idx}>{line}</tspan>
            ))}
          </text>
        </g>
      ))}

      {/* 6. Central Power Cluster */}
      <g style={{ filter: 'url(#glow-small)' }}>
        {/* Pulse Effect for Core */}
        <motion.circle
          cx="318" cy="195" r="55"
          fill="var(--text-main)" opacity="0.05"
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Node: Reported by Police */}
        <g>
          <circle cx="318" cy="195" r="48" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="3" />
          <text x="318" y="190" textAnchor="middle" fill="var(--text-main)" fontSize="9" fontWeight="900" fontFamily="var(--font)">
            <tspan x="318" dy="0">Reported by</tspan>
            <tspan x="318" dy="11">Police</tspan>
          </text>
          <text x="318" y="216" textAnchor="middle" fill="var(--text-secondary)" fontSize="7" opacity="0.6" fontFamily="var(--font)">index: 25</text>
        </g>

        {/* Node: Reported by News */}
        <g>
          <circle cx="422" cy="188" r="46" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="2" />
          <text x="422" y="183" textAnchor="middle" fill="var(--text-main)" fontSize="8.5" fontWeight="800" fontFamily="var(--font)">
            <tspan x="422" dy="0">Reported by</tspan>
            <tspan x="422" dy="10">News</tspan>
          </text>
        </g>

        {/* Node: Police Killing */}
        <g>
          <circle cx="318" cy="252" r="40" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" opacity="0.9" />
          <text x="318" y="250" textAnchor="middle" fill="var(--text-main)" fontSize="8.5" fontWeight="800" fontFamily="var(--font)">
            <tspan x="318" dy="0">Police</tspan>
            <tspan x="318" dy="10">Killing</tspan>
          </text>
        </g>

        {/* Node: Unidentified Assailant */}
        <g>
          <circle cx="422" cy="252" r="38" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" opacity="0.9" />
          <text x="422" y="250" textAnchor="middle" fill="var(--text-main)" fontSize="8" fontWeight="800" fontFamily="var(--font)">
            <tspan x="422" dy="0">Unidentified</tspan>
            <tspan x="422" dy="10">Assailant</tspan>
          </text>
        </g>

        {/* Small Connector: Reported by Others */}
        <g>
          <circle cx="370" cy="222" r="24" fill="var(--bg-main)" stroke="var(--text-secondary)" strokeWidth="1" strokeDasharray="2,2" />
          <text x="370" y="221" textAnchor="middle" fill="var(--text-main)" fontSize="6" fontWeight="700" fontFamily="var(--font)" opacity="0.7">
            <tspan x="370" dy="0">Others</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};

export default NetworkSVG;
