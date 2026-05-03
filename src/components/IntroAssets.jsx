// Detailed animated SVG characters and vehicles for the intro scene
import React from 'react';

export const ANIM_CSS = `
@keyframes walkLegF { 0%,100%{transform:rotate(30deg)} 50%{transform:rotate(-30deg)} }
@keyframes walkLegB { 0%,100%{transform:rotate(-30deg)} 50%{transform:rotate(30deg)} }
@keyframes walkArmF { 0%,100%{transform:rotate(-25deg)} 50%{transform:rotate(25deg)} }
@keyframes walkArmB { 0%,100%{transform:rotate(25deg)} 50%{transform:rotate(-25deg)} }
@keyframes headBob  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(2px)} }
@keyframes breathe  { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.04)} }
@keyframes wheelSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes sirenAlt { 0%,49%{fill:var(--text-main)} 50%,100%{fill:var(--text-secondary)} }
@keyframes glowPulse { 0%,100%{opacity:0.3} 50%{opacity:0.6} }
@keyframes noiseMove { 0%,100%{transform:translate(0,0)} 50%{transform:translate(1px,1.5px)} }
`;

const SVGDefs = () => (
  <defs>
    <filter id="assetNoise" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.15" />
      </feComponentTransfer>
      <feComposite in2="SourceGraphic" operator="in" />
    </filter>
    <filter id="assetGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
);

// ── Detailed Walking Human ──────────────────────────────────────────────────
export const DetailedHuman = ({
  color = 'var(--text-main)', scale = 1, walking = true,
  fallen = false, hasGun = false, isOfficer = false
}) => {
  const spd = walking ? '0.5s' : '9999s';
  const jacketColor = isOfficer ? 'var(--text-main)' : color;
  const pantsColor  = isOfficer ? 'var(--text-secondary)' : 'var(--text-secondary)';
  const skinColor   = 'var(--bg-main)';

  if (fallen) return (
    <svg viewBox="0 0 120 50" width={120*scale} height={50*scale} style={{ overflow:'visible' }}>
      <SVGDefs />
      {/* Fallen body */}
      <ellipse cx="20" cy="20" rx="12" ry="12" fill={skinColor} stroke="var(--text-main)" strokeWidth="1" filter="url(#assetNoise)" />
      <rect x="30" y="14" width="55" height="18" rx="2" fill={jacketColor} filter="url(#assetNoise)" />
      <rect x="80" y="12" width="35" height="9" rx="1" fill={pantsColor} filter="url(#assetNoise)" />
      <rect x="80" y="23" width="35" height="9" rx="1" fill={pantsColor} filter="url(#assetNoise)" />
      {/* Blood pool (Technical style) */}
      <ellipse cx="55" cy="44" rx="35" ry="6" fill="var(--text-main)" opacity="0.1" />
      <circle cx="55" cy="44" r="2" fill="var(--text-main)" opacity="0.3" />
    </svg>
  );

  return (
    <svg viewBox="0 0 60 160" width={60*scale} height={160*scale} style={{ overflow:'visible' }}>
      <SVGDefs />
      {/* Shadow */}
      <ellipse cx="30" cy="158" rx="18" ry="4" fill="var(--text-main)" opacity="0.1" />

      {/* Head */}
      <g style={{ transformOrigin:'30px 16px', animation:`headBob ${spd} ease-in-out infinite` }}>
        <ellipse cx="30" cy="14" rx="11" ry="13" fill={skinColor} stroke="var(--text-main)" strokeWidth="1.5" />
        {isOfficer && <rect x="15" y="0" width="30" height="4" fill="var(--text-main)" />}
      </g>

      {/* Torso */}
      <g style={{ transformOrigin:'30px 60px', animation:`breathe ${spd} ease-in-out infinite` }}>
        <path d="M14,34 L46,34 L52,90 L8,90 Z" fill={jacketColor} filter="url(#assetNoise)" />
        {isOfficer && (
          <g>
            <rect x="38" y="45" width="6" height="8" fill="var(--bg-main)" opacity="0.5" />
            <text x="30" y="80" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="var(--bg-main)" opacity="0.4">UNIT_25</text>
          </g>
        )}
      </g>

      {/* Arms & Legs (Simplified Duo-tone) */}
      <g style={{ transformOrigin:'14px 38px', animation:`walkArmF ${spd} ease-in-out infinite` }}>
        <rect x="6" y="38" width="10" height="45" rx="2" fill={jacketColor} opacity="0.8" />
      </g>
      <g style={{ transformOrigin:'46px 38px', animation: hasGun ? 'none' : `walkArmB ${spd} ease-in-out infinite` }}>
        <rect x="44" y="38" width="10" height="45" rx="2" fill={jacketColor} opacity="0.8" />
        {hasGun && <rect x="48" y="65" width="25" height="6" fill="var(--text-main)" />}
      </g>

      <g style={{ transformOrigin:'21px 92px', animation:`walkLegF ${spd} ease-in-out infinite` }}>
        <rect x="14" y="92" width="14" height="60" fill={pantsColor} opacity="0.9" />
      </g>
      <g style={{ transformOrigin:'39px 92px', animation:`walkLegB ${spd} ease-in-out infinite` }}>
        <rect x="32" y="92" width="14" height="60" fill={pantsColor} opacity="0.9" />
      </g>
    </svg>
  );
};

// ── Police Car ─────────────────────────────────────────────────────────────
export const DetailedPoliceCar = ({ scale = 1 }) => (
  <svg viewBox="0 0 220 90" width={220*scale} height={90*scale} style={{ overflow:'visible' }}>
    <SVGDefs />
    <ellipse cx="110" cy="88" rx="100" ry="6" fill="var(--text-main)" opacity="0.08" />
    <rect x="8" y="30" width="204" height="46" rx="2" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" filter="url(#assetNoise)" />
    <path d="M45,30 L60,10 L160,10 L175,30 Z" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" />
    
    {/* Identification */}
    <text x="110" y="55" textAnchor="middle" fontSize="10" fontWeight="900" fill="var(--text-main)" fontFamily="monospace" letterSpacing="2">PRECINCT_25</text>
    <text x="185" y="42" fontSize="5" fontFamily="monospace" fill="var(--text-main)" opacity="0.4">REF_A10</text>

    {/* Siren */}
    <rect x="80" y="4" width="60" height="6" fill="var(--text-main)" />
    <rect x="82" y="5" width="26" height="4" style={{ animation:`sirenAlt 0.5s step-end infinite` }} />
    <rect x="112" y="5" width="26" height="4" style={{ animation:`sirenAlt 0.5s step-end infinite 0.25s` }} />

    {/* Wheels */}
    {[50, 170].map(cx => (
      <g key={cx} style={{ transformOrigin:`${cx}px 76px`, animation:'wheelSpin 0.8s linear infinite' }}>
        <circle cx={cx} cy="76" r="14" fill="none" stroke="var(--text-main)" strokeWidth="1.5" strokeDasharray="4,2" />
        <circle cx={cx} cy="76" r="4" fill="var(--text-main)" />
      </g>
    ))}

    {/* Headlight beam */}
    <g style={{ filter:'url(#assetGlow)', animation:'glowPulse 0.5s ease-in-out infinite' }}>
      <path d="M10,50 L-40,30 L-40,70 Z" fill="var(--text-main)" opacity="0.1" />
    </g>
  </svg>
);

// ── Ambulance ──────────────────────────────────────────────────────────────
export const DetailedAmbulance = ({ scale = 1 }) => (
  <svg viewBox="0 0 240 95" width={240*scale} height={95*scale} style={{ overflow:'visible' }}>
    <SVGDefs />
    <ellipse cx="120" cy="93" rx="110" ry="6" fill="var(--text-main)" opacity="0.08" />
    <rect x="5" y="15" width="230" height="65" rx="2" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" filter="url(#assetNoise)" />
    <rect x="175" y="8" width="55" height="45" rx="2" fill="var(--bg-main)" stroke="var(--text-main)" strokeWidth="1.5" />
    
    {/* Symbols */}
    <path d="M40,35 H60 M50,25 V45" stroke="var(--text-main)" strokeWidth="4" />
    <text x="130" y="55" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--text-main)" fontFamily="monospace" letterSpacing="1">MEDICAL_UNIT</text>

    {/* Siren */}
    <rect x="180" y="2" width="45" height="6" fill="var(--text-main)" />
    <rect x="182" y="3" width="41" height="4" fill="var(--text-main)" style={{ animation:`glowPulse 0.4s ease-in-out infinite` }} />

    {/* Wheels */}
    {[55, 190].map(cx => (
      <g key={cx} style={{ transformOrigin:`${cx}px 80px`, animation:'wheelSpin 1s linear infinite' }}>
        <circle cx={cx} cy="80" r="15" fill="none" stroke="var(--text-main)" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx={cx} cy="80" r="5" fill="var(--text-main)" />
      </g>
    ))}
  </svg>
);

// ── Realistic Caution Tape ─────────────────────────────────────────────────
export const CautionTape = () => (
  <svg viewBox="0 0 1000 120" width="100%" height="120" style={{ overflow: 'visible' }}>
    <SVGDefs />
    <path d="M0,40 Q500,80 1000,40 L1000,70 Q500,110 0,70 Z" fill="var(--text-main)" opacity="0.05" />
    <path d="M0,40 Q500,80 1000,40" fill="none" stroke="var(--text-main)" strokeWidth="1.5" strokeDasharray="10,5" />
    <path d="M0,70 Q500,110 1000,70" fill="none" stroke="var(--text-main)" strokeWidth="1.5" strokeDasharray="10,5" />
    <text x="500" y="75" textAnchor="middle" fontSize="12" fontWeight="900" fill="var(--text-main)" fontFamily="monospace" letterSpacing="8" opacity="0.6">
      POLICE_LINE_DO_NOT_CROSS_POLICE_LINE_DO_NOT_CROSS
    </text>
  </svg>
);
