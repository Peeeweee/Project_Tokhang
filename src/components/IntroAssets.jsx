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
@keyframes sirenAlt { 0%,49%{fill:#ff2020} 50%,100%{fill:#2030ff} }
@keyframes tapeWave { 0%,100%{skewX(0deg)} 50%{skewX(1deg)} }
@keyframes shadowPulse { 0%,100%{opacity:0.25} 50%{opacity:0.15} }
@keyframes glowPulse { 0%,100%{opacity:0.5} 50%{opacity:0.8} }
@keyframes fogDrift { from{transform:translateX(0)} to{transform:translateX(-60px)} }
`;

// ── Detailed Walking Human ──────────────────────────────────────────────────
export const DetailedHuman = ({
  color = '#ddd', scale = 1, walking = true,
  fallen = false, hasGun = false, isOfficer = false
}) => {
  const spd = walking ? '0.5s' : '9999s';
  const jacketColor = isOfficer ? '#4466aa' : color;
  const pantsColor  = isOfficer ? '#223366' : '#555';
  const skinColor   = '#c89070';

  if (fallen) return (
    <svg viewBox="0 0 120 50" width={120*scale} height={50*scale}>
      {/* Fallen body — rotated 90° sideways on ground */}
      <ellipse cx="20" cy="20" rx="12" ry="12" fill={skinColor} />
      <rect x="30" y="14" width="55" height="18" rx="6" fill={jacketColor} />
      <rect x="80" y="12" width="35" height="9" rx="4" fill={pantsColor} />
      <rect x="80" y="23" width="35" height="9" rx="4" fill={pantsColor} />
      {/* Blood pool */}
      <ellipse cx="55" cy="44" rx="30" ry="7" fill="rgba(120,0,0,0.4)" />
    </svg>
  );

  return (
    <svg viewBox="0 0 60 160" width={60*scale} height={160*scale} style={{ overflow:'visible' }}>
      {/* Shadow on ground */}
      <ellipse cx="30" cy="158" rx="18" ry="4" fill="rgba(0,0,0,0.5)"
        style={{ animation:`shadowPulse 0.5s ease-in-out infinite` }} />

      {/* Head */}
      <g style={{ transformOrigin:'30px 16px', animation:`headBob ${spd} ease-in-out infinite` }}>
        <ellipse cx="30" cy="14" rx="11" ry="13" fill={skinColor} />
        {/* Face detail */}
        <ellipse cx="25" cy="12" rx="2.5" ry="3" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="35" cy="12" rx="2.5" ry="3" fill="rgba(0,0,0,0.3)" />
        {isOfficer && <rect x="15" y="2" width="30" height="6" rx="3" fill="#334" />}
      </g>

      {/* Neck */}
      <rect x="26" y="26" width="8" height="8" fill={skinColor} />

      {/* Torso */}
      <g style={{ transformOrigin:'30px 60px', animation:`breathe ${spd} ease-in-out infinite` }}>
        <path d="M14,34 L46,34 L50,90 L10,90 Z" fill={jacketColor} rx="4" />
        {/* Jacket lapels */}
        <path d="M24,34 L30,50 L36,34" fill="rgba(0,0,0,0.2)" />
        {isOfficer && <rect x="36" y="40" width="8" height="10" rx="1" fill="rgba(255,220,0,0.7)" />}
      </g>

      {/* Belt */}
      <rect x="12" y="89" width="36" height="6" rx="2" fill="#333" />
      <rect x="27" y="89" width="6" height="6" fill="#888" />

      {/* Left Arm */}
      <g style={{ transformOrigin:'14px 38px', animation:`walkArmF ${spd} ease-in-out infinite` }}>
        <rect x="6" y="38" width="12" height="35" rx="6" fill={jacketColor} />
        <rect x="8" y="71" width="9" height="18" rx="5" fill={skinColor} />
      </g>

      {/* Right Arm (gun arm or normal) */}
      <g style={{ transformOrigin:'46px 38px', animation: hasGun ? 'none' : `walkArmB ${spd} ease-in-out infinite` }}>
        <rect x="42" y="38" width="12" height="35" rx="6" fill={jacketColor} />
        <rect x="43" y="71" width="9" height="18" rx="5" fill={skinColor} />
        {hasGun && (
          <>
            <rect x="48" y="62" width="28" height="7" rx="3" fill="#333" />
            <rect x="52" y="68" width="8" height="10" rx="2" fill="#222" />
          </>
        )}
      </g>

      {/* Left Leg */}
      <g style={{ transformOrigin:'21px 92px', animation:`walkLegF ${spd} ease-in-out infinite` }}>
        <rect x="13" y="92" width="16" height="38" rx="6" fill={pantsColor} />
        <rect x="14" y="128" width="15" height="20" rx="5" fill={pantsColor === '#555' ? '#333' : '#1a1a4a'} />
        <rect x="10" y="144" width="20" height="8" rx="3" fill="#111" />
      </g>

      {/* Right Leg */}
      <g style={{ transformOrigin:'39px 92px', animation:`walkLegB ${spd} ease-in-out infinite` }}>
        <rect x="31" y="92" width="16" height="38" rx="6" fill={pantsColor} />
        <rect x="31" y="128" width="15" height="20" rx="5" fill={pantsColor === '#555' ? '#333' : '#1a1a4a'} />
        <rect x="30" y="144" width="20" height="8" rx="3" fill="#111" />
      </g>
    </svg>
  );
};

// ── Police Car ─────────────────────────────────────────────────────────────
export const DetailedPoliceCar = ({ scale = 1 }) => (
  <svg viewBox="0 0 220 90" width={220*scale} height={90*scale} style={{ overflow:'visible' }}>
    {/* Ground shadow */}
    <ellipse cx="110" cy="88" rx="100" ry="6" fill="rgba(0,0,0,0.5)" />
    {/* Body */}
    <rect x="8" y="30" width="204" height="46" rx="8" fill="#d8d8d8" />
    {/* Cabin */}
    <path d="M40,30 L55,8 L165,8 L178,30 Z" fill="#c5c5c5" />
    {/* Door lines */}
    <line x1="100" y1="30" x2="100" y2="76" stroke="#aaa" strokeWidth="1.5" />
    <circle cx="96" cy="53" r="3" fill="#999" />
    <circle cx="104" cy="53" r="3" fill="#999" />
    {/* Windows */}
    <path d="M58,10 L72,30 L100,30 L100,10 Z" fill="#334466" opacity="0.8" />
    <path d="M102,10 L102,30 L142,30 L158,10 Z" fill="#334466" opacity="0.8" />
    {/* POLICE stripe */}
    <rect x="8" y="48" width="204" height="10" fill="#000" opacity="0.2" />
    <text x="110" y="57" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111" fontFamily="monospace">POLICE</text>
    {/* Siren bar */}
    <rect x="60" y="3" width="100" height="10" rx="4" fill="#222" />
    <rect x="63" y="4" width="45" height="8" rx="3" style={{ animation:`sirenAlt 0.4s linear infinite`, fill:'#ff2020' }} />
    <rect x="112" y="4" width="45" height="8" rx="3" style={{ animation:`sirenAlt 0.4s linear infinite 0.2s`, fill:'#2030ff' }} />
    {/* Wheels */}
    {[45, 170].map(cx => (
      <g key={cx}>
        <circle cx={cx} cy="76" r="16" fill="#1a1a1a" />
        <circle cx={cx} cy="76" r="10" fill="#2a2a2a" />
        <g style={{ transformOrigin:`${cx}px 76px`, animation:'wheelSpin 0.5s linear infinite' }}>
          {[0,60,120,180,240,300].map(deg => (
            <line key={deg}
              x1={cx} y1="66" x2={cx} y2="86"
              stroke="#444" strokeWidth="2"
              transform={`rotate(${deg} ${cx} 76)`} />
          ))}
        </g>
        <circle cx={cx} cy="76" r="4" fill="#555" />
      </g>
    ))}
    {/* Headlight */}
    <ellipse cx="12" cy="53" rx="7" ry="6" fill="rgba(255,255,200,0.95)" />
    {/* Light beam */}
    <ellipse cx="-30" cy="53" rx="40" ry="12" fill="rgba(255,255,180,0.12)"
      style={{ animation:`glowPulse 0.3s ease-in-out infinite` }} />
    {/* Tail light */}
    <rect x="208" y="46" width="8" height="12" rx="2" fill="#ff3333" opacity="0.9" />
  </svg>
);

// ── Ambulance ──────────────────────────────────────────────────────────────
export const DetailedAmbulance = ({ scale = 1 }) => (
  <svg viewBox="0 0 240 95" width={240*scale} height={95*scale} style={{ overflow:'visible' }}>
    <ellipse cx="120" cy="93" rx="110" ry="6" fill="rgba(0,0,0,0.5)" />
    {/* Box body */}
    <rect x="5" y="18" width="230" height="60" rx="6" fill="#e8e8e8" />
    {/* Cab */}
    <rect x="168" y="5" width="60" height="50" rx="5" fill="#d8d8d8" />
    {/* Cab window */}
    <rect x="174" y="10" width="50" height="26" rx="4" fill="#334466" opacity="0.75" />
    {/* Red cross */}
    <rect x="30" y="33" width="50" height="14" rx="3" fill="#cc0000" />
    <rect x="47" y="16" width="14" height="50" rx="3" fill="#cc0000" />
    {/* Side details */}
    <rect x="100" y="30" width="60" height="6" rx="2" fill="#ccc" />
    <text x="128" y="54" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#555" fontFamily="monospace">AMBULANCE</text>
    {/* Siren */}
    <rect x="70" y="4" width="90" height="10" rx="4" fill="#222" />
    <rect x="73" y="5" width="40" height="8" rx="2" fill="#ff2020"
      style={{ animation:`sirenAlt 0.35s linear infinite` }} />
    <rect x="117" y="5" width="40" height="8" rx="2" fill="#ff2020"
      style={{ animation:`sirenAlt 0.35s linear infinite 0.175s` }} />
    {/* Wheels */}
    {[50, 185].map(cx => (
      <g key={cx}>
        <circle cx={cx} cy="78" r="17" fill="#1a1a1a" />
        <circle cx={cx} cy="78" r="11" fill="#2a2a2a" />
        <g style={{ transformOrigin:`${cx}px 78px`, animation:'wheelSpin 0.45s linear infinite' }}>
          {[0,60,120,180,240,300].map(deg => (
            <line key={deg} x1={cx} y1="67" x2={cx} y2="89"
              stroke="#444" strokeWidth="2" transform={`rotate(${deg} ${cx} 78)`} />
          ))}
        </g>
        <circle cx={cx} cy="78" r="4" fill="#555" />
      </g>
    ))}
    <ellipse cx="235" cy="48" rx="6" ry="5" fill="rgba(255,255,200,0.9)" />
  </svg>
);

// ── Realistic Caution Tape ─────────────────────────────────────────────────
export const CautionTape = () => (
  <svg
    viewBox="0 0 1000 140"
    width="100%"
    height="140"
    style={{ overflow: 'visible', display: 'block' }}
  >
    <defs>
      {/* Diagonal stripe pattern */}
      <pattern id="stripePattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
        <rect width="32" height="32" fill="#f5c400" />
        <polygon points="0,0 16,0 0,32" fill="#111" />
        <polygon points="32,0 32,32 16,32" fill="#111" />
      </pattern>
      {/* Clip path to the tape shape */}
      <clipPath id="tapeClip">
        <path d="M30,20 Q500,85 970,20 L970,60 Q500,125 30,60 Z" />
      </clipPath>
      {/* Drop shadow filter */}
      <filter id="tapeShadow" x="-5%" y="-20%" width="110%" height="160%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.6)" />
      </filter>
    </defs>

    {/* Left pole */}
    <rect x="26" y="0" width="8" height="140" rx="3" fill="#555" />
    <rect x="22" y="0" width="16" height="10" rx="2" fill="#777" />

    {/* Right pole */}
    <rect x="966" y="0" width="8" height="140" rx="3" fill="#555" />
    <rect x="962" y="0" width="16" height="10" rx="2" fill="#777" />

    {/* Tape body — stripe fill clipped to sag shape */}
    <g filter="url(#tapeShadow)">
      <path
        d="M30,20 Q500,85 970,20 L970,60 Q500,125 30,60 Z"
        fill="url(#stripePattern)"
        clipPath="url(#tapeClip)"
        style={{ animation: 'tapeWave 2.5s ease-in-out infinite', transformOrigin: '500px 70px' }}
      />
      {/* Tape border top edge */}
      <path
        d="M30,20 Q500,85 970,20"
        fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2"
      />
      {/* Tape border bottom edge */}
      <path
        d="M30,60 Q500,125 970,60"
        fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2"
      />
    </g>

    {/* Text on tape — centered at the sag point */}
    <text
      x="500" y="78"
      textAnchor="middle"
      fontSize="13"
      fontWeight="900"
      fontFamily="monospace"
      fill="#111"
      letterSpacing="3"
      style={{ userSelect: 'none' }}
    >
      POLICE LINE — DO NOT CROSS — POLICE LINE — DO NOT CROSS
    </text>
  </svg>
);

