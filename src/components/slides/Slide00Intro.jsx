import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIM_CSS, DetailedHuman, DetailedPoliceCar, DetailedAmbulance, CautionTape } from '../IntroAssets';

const Rain = () => (
  <div style={{ position:'absolute', inset:0, zIndex:4, pointerEvents:'none', overflow:'hidden' }}>
    {Array.from({ length: 60 }).map((_, i) => (
      <motion.div key={i}
        animate={{ y:['0vh','110vh'], opacity:[0,0.45,0] }}
        transition={{ duration:0.65+Math.random()*0.4, delay:Math.random()*2.5, repeat:Infinity, ease:'linear' }}
        style={{ position:'absolute', left:`${(i/60)*100}%`, top:'-60px',
          width:'1px', height:'60px',
          background:'linear-gradient(to bottom,transparent,rgba(180,210,255,0.4),transparent)' }}
      />
    ))}
  </div>
);

const Caption = ({ text, show }) => (
  <AnimatePresence>
    {show && (
      <motion.div key={text}
        initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }}
        transition={{ duration:0.9 }}
        style={{ position:'absolute', bottom:'7%', width:'100%', textAlign:'center', zIndex:70,
          fontFamily:'var(--font)', fontSize:'clamp(10px,1.1vw,13px)',
          color:'rgba(190,190,190,0.85)', letterSpacing:'0.2em',
          textTransform:'uppercase', pointerEvents:'none' }}
      >
        {text}
      </motion.div>
    )}
  </AnimatePresence>
);

const CRTOverlay = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 150, pointerEvents: 'none', opacity: 0.15 }}>
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 3px, 3px 100%' }} />
    <motion.div 
      animate={{ y: ['0%', '100%'] }} 
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ width: '100%', height: '100px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)', position: 'absolute', top: 0 }} 
    />
  </div>
);

const Slide00Intro = ({ goNext }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const ts = [
      [1,2500],[2,7000],[3,11500],[4,14500],
      [5,15000],[6,17000],[7,20500],[8,23500]
    ];
    const timers = ts.map(([p,t]) => setTimeout(()=>setPhase(p), t));
    return ()=>{ timers.forEach(clearTimeout); };
  }, []);

  const from    = p => phase >= p;
  const between = (a,b) => phase >= a && phase < b;

  return (
    <motion.div 
      animate={{ x: [0, -1, 1, -1, 0], y: [0, 1, -1, 0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ width:'100vw', height:'100vh', position:'relative', overflow:'hidden', backgroundColor:'#040404' }}
    >
      <style>{ANIM_CSS}</style>
      <CRTOverlay />

      {/* ── Background with Parallax ── */}
      <motion.div 
        animate={{ 
          opacity: from(8)?0:1,
          scale: [1, 1.05],
          x: [0, -10]
        }} 
        transition={{ duration: 25, ease: "linear" }}
        style={{ position:'absolute', inset:0, zIndex:0 }}
      >
        <img src="/alley_bg.png" alt="" style={{ width:'110%', height:'100%', objectFit:'cover',
          filter:'brightness(0.2) contrast(1.4) grayscale(0.6)', objectPosition:'50% 60%' }} />
        <div style={{ position:'absolute', inset:0,
          background:'radial-gradient(ellipse at 50% 100%,rgba(0,0,0,0) 0%,rgba(0,0,0,0.95) 80%)' }} />
      </motion.div>

      {/* Fog Drift */}
      <motion.div 
        animate={{ x: [-100, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', bottom: '15%', left: '-20%', width: '140%', height: '30%', 
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)', zIndex: 5, filter: 'blur(40px)' }} 
      />

      <Rain />

      {/* ── REC overlay ── */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity: from(8)?0:0.8 }} transition={{ delay:0.5, duration:1 }}
        style={{ position:'absolute', top:'40px', left:'50px', zIndex:160,
          fontFamily:'monospace', fontSize:'12px', color:'#fff', letterSpacing:'0.2em', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
        METRO MANILA &nbsp;·&nbsp; 02:17:44 &nbsp;·&nbsp;
        <motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity }} style={{ color:'#f33' }}>● REC</motion.span>
      </motion.div>

      {/* ── PHASE 1: Victims ── */}
      {[0,1,2].map(i => (
        <motion.div key={`v${i}`}
          initial={{ x:'110vw' }}
          animate={{ x: from(1)&&!from(5) ? `${33+i*12}vw` : from(5) ? `${33+i*12}vw` : '110vw',
                     opacity: from(1)&&!from(5) ? 1 : 0 }}
          transition={{ delay:i*0.25, duration:2.8, type:'spring', damping:22, stiffness:65 }}
          style={{ position:'absolute', bottom:'22%', zIndex:10 }}>
          <DetailedHuman walking={between(1,4)} color="#bbb" scale={0.75} />
        </motion.div>
      ))}

      {/* Fallen victims */}
      {[0,1,2].map(i => (
        <motion.div key={`f${i}`}
          initial={{ opacity:0 }} animate={{ opacity: from(5)&&!from(8)?1:0 }}
          transition={{ duration:1 }}
          style={{ position:'absolute', bottom:'22%', left:`${33+i*12}vw`, zIndex:10 }}>
          <DetailedHuman fallen walking={false} color="#aaa" scale={0.75} />
          {/* Evidence Marker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            style={{ position: 'absolute', top: -20, left: 20, width: 14, height: 14, background: 'var(--text-main)', color: 'var(--bg-main)', 
              fontSize: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}
          >
            {String.fromCharCode(65 + i)}
          </motion.div>
        </motion.div>
      ))}

      {/* ── PHASE 2: Police car ── */}
      <motion.div
        initial={{ x:'110vw' }}
        animate={{ x: from(2) ? '72vw' : '110vw' }}
        transition={{ duration:2.8, type:'spring', damping:16, stiffness:55 }}
        style={{ position:'absolute', bottom:'21.5%', zIndex:12 }}>
        <DetailedPoliceCar scale={0.82} />
      </motion.div>

      {/* ── PHASE 3: Gunman ── */}
      <motion.div
        initial={{ x:'-15vw', opacity:0 }}
        animate={{ x: from(3)&&!from(8)?'22vw':'-15vw', opacity: from(3)&&!from(8)?1:0 }}
        transition={{ duration:3.2, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'22%', zIndex:15, transform:'scaleX(-1)' }}>
        <DetailedHuman walking={between(3,4)} hasGun color="#ccc" scale={0.85} />
      </motion.div>

      {/* ── PHASE 4: High-Intensity Muzzle flash ── */}
      <AnimatePresence>
        {phase === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, #fff 0%, rgba(255,255,255,0.4) 40%, transparent 80%)', zIndex: 100, mixBlendMode: 'screen' }}
          />
        )}
      </AnimatePresence>

      {/* ── PHASE 6: Ambulance ── */}
      <motion.div
        initial={{ x:'-110vw' }}
        animate={{ x: from(6)?'2vw':'-110vw' }}
        transition={{ duration: 2.8, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'21.5%', zIndex:13 }}>
        <DetailedAmbulance scale={0.8} />
      </motion.div>

      {/* ── PHASE 6: Caution tape ── */}
      <motion.div
        initial={{ y: '-200%', opacity: 0 }}
        animate={{ y: from(6)&&!from(8) ? '0%' : '-200%', opacity: from(6)&&!from(8) ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 1.4, type: 'spring', stiffness: 90, damping: 18 }}
        style={{ position: 'absolute', bottom: '24%', left: 0, right: 0, zIndex: 18, pointerEvents: 'none' }}>
        <CautionTape />
      </motion.div>

      {/* ── PHASE 7: Officer ── */}
      <motion.div
        initial={{ x:'110vw' }}
        animate={{ x: from(7)&&!from(8)?'46vw':'110vw', opacity: from(7)&&!from(8)?1:0 }}
        transition={{ duration:2.2, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'22%', zIndex:16 }}>
        <DetailedHuman walking={between(7,8)} isOfficer color="#aabbdd" scale={0.85} />
      </motion.div>

      {/* ── Final Fade ── */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity: from(8)?1:0 }}
        transition={{ duration:2.2 }}
        style={{ position:'absolute', inset:0, backgroundColor:'#000', zIndex:200, pointerEvents:'none' }} />

      {/* ── Captions ── */}
      <Caption text="2016 — Oplan Tokhang begins across the Philippines." show={between(1,2)} />
      <Caption text="Police units were mobilized across Metro Manila." show={between(2,3)} />
      <Caption text="Many were confronted in the dead of night." show={between(3,4)} />
      <Caption text="Most cases were closed with no investigation." show={between(5,6)} />
      <Caption text="Crime scenes were processed and cleared within hours." show={between(6,7)} />
      <Caption text="The gaps in documentation are what we set out to map." show={between(7,8)} />

      {/* ── Skip ── */}
      <motion.button
        initial={{ opacity:0 }} animate={{ opacity:0.3 }} whileHover={{ opacity:1 }}
        onClick={goNext}
        style={{ position:'absolute', bottom:'40px', right:'50px', background:'none',
          border:'1px solid #444', color:'#888', padding:'12px 24px', fontSize:'11px',
          cursor:'pointer', fontFamily:'monospace', zIndex:300,
          letterSpacing:'0.2em', textTransform:'uppercase' }}>
        SKIP INTRO →
      </motion.button>
    </motion.div>
  );
};

export default Slide00Intro;
