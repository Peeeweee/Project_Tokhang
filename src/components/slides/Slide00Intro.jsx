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

const Slide00Intro = ({ goNext }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase schedule — stops at 8 (fade to black). User must advance manually.
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
    <div style={{ width:'100vw', height:'100vh', position:'relative', overflow:'hidden', backgroundColor:'#040404' }}>
      <style>{ANIM_CSS}</style>

      {/* ── Background ── */}
      <motion.div animate={{ opacity: from(8)?0:1 }} transition={{ duration:2.2 }}
        style={{ position:'absolute', inset:0, zIndex:0 }}>
        <img src="/alley_bg.png" alt="" style={{ width:'100%', height:'100%', objectFit:'cover',
          filter:'brightness(0.2) contrast(1.6) grayscale(0.5)', objectPosition:'50% 60%' }} />
        {/* Vignette */}
        <div style={{ position:'absolute', inset:0,
          background:'radial-gradient(ellipse at 50% 100%,rgba(0,0,0,0) 0%,rgba(0,0,0,0.92) 75%)' }} />
        {/* Atmospheric fog at edges */}
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(to right,rgba(0,0,0,0.6) 0%,transparent 20%,transparent 80%,rgba(0,0,0,0.6) 100%)' }} />
      </motion.div>

      {/* Wet pavement reflection */}
      <motion.div animate={{ opacity: from(8)?0:0.15 }}
        style={{ position:'absolute', bottom:'18%', left:0, right:0, height:'4px',
          background:'linear-gradient(to right,transparent,rgba(255,255,255,0.3),transparent)', zIndex:2 }} />

      <Rain />

      {/* ── REC overlay ── */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity: from(8)?0:0.6 }} transition={{ delay:0.5, duration:1 }}
        style={{ position:'absolute', top:'32px', left:'44px', zIndex:50,
          fontFamily:'var(--font)', fontSize:'11px', color:'#ccc', letterSpacing:'0.2em' }}>
        METRO MANILA &nbsp;·&nbsp; 02:17:44 &nbsp;·&nbsp;
        <motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity }} style={{ color:'#f33' }}>● REC</motion.span>
      </motion.div>
      <motion.div initial={{ opacity:0 }} animate={{ opacity: from(8)?0:0.3 }}
        style={{ position:'absolute', top:'32px', right:'44px', zIndex:50,
          fontFamily:'var(--font)', fontSize:'10px', color:'#666', letterSpacing:'0.3em' }}>
        TONDO, 2016
      </motion.div>

      {/* ── Ground line ── */}
      <div style={{ position:'absolute', bottom:'22%', left:0, right:0, height:'2px',
        background:'linear-gradient(to right,transparent,rgba(255,255,255,0.12) 20%,rgba(255,255,255,0.12) 80%,transparent)',
        zIndex:6 }} />

      {/* ── PHASE 1: 3 Victims walk in ── */}
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
        </motion.div>
      ))}

      {/* ── PHASE 2: Police car ── */}
      <motion.div
        initial={{ x:'110vw' }}
        animate={{ x: from(2) ? '72vw' : '110vw' }}
        transition={{ duration:2.8, type:'spring', damping:16, stiffness:55 }}
        style={{ position:'absolute', bottom:'21.5%', zIndex:12 }}>
        <DetailedPoliceCar scale={0.82} />
        {/* Headlight cone */}
        <motion.div animate={{ opacity:[0.3,0.6,0.3] }} transition={{ duration:0.3, repeat:Infinity }}
          style={{ position:'absolute', left:'-120px', top:'30px',
            width:'130px', height:'40px',
            background:'linear-gradient(to left,rgba(255,255,180,0.5),transparent)',
            filter:'blur(14px)' }} />
      </motion.div>

      {/* ── PHASE 3: Gunman walks in from left ── */}
      <motion.div
        initial={{ x:'-15vw', opacity:0 }}
        animate={{ x: from(3)&&!from(8)?'22vw':'-15vw', opacity: from(3)&&!from(8)?1:0 }}
        transition={{ duration:3.2, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'22%', zIndex:15, transform:'scaleX(-1)' }}>
        <DetailedHuman walking={between(3,4)} hasGun color="#ccc" scale={0.85} />
      </motion.div>

      {/* ── PHASE 4: Muzzle flash ── */}
      {phase===4 && (
        <motion.div
          initial={{ opacity:0, scale:0.2 }}
          animate={{ opacity:[0,1,0.7,0], scale:[0.2,2.8,2,0.3] }}
          transition={{ duration:0.35 }}
          style={{ position:'absolute', top:'33%', left:'30vw',
            width:'140px', height:'140px',
            background:'radial-gradient(circle,#fff 0%,rgba(255,230,80,0.8) 25%,transparent 65%)',
            zIndex:90, filter:'blur(2px)', pointerEvents:'none' }} />
      )}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity: phase===4?[0,1,0]:0 }}
        transition={{ duration:0.2 }}
        style={{ position:'absolute', inset:0, backgroundColor:'#fff', zIndex:95, pointerEvents:'none' }} />

      {/* ── PHASE 5: 3 Chalk outlines — one per body ── */}
      {[0,1,2].map(i => (
        <motion.div key={`chalk${i}`}
          initial={{ opacity:0, scale:0 }}
          animate={{ opacity: from(5)&&!from(8)?0.35:0, scale: from(5)?1:0 }}
          transition={{ duration:1.8, delay: 0.3 + i * 0.3 }}
          style={{
            position:'absolute', bottom:'19%',
            left:`calc(${33+i*12}vw + 10px)`,
            width:'75px', height:'100px',
            border:'2px dashed rgba(255,255,255,0.7)',
            borderRadius:'50%',
            zIndex:9,
            transformOrigin:'center',
            pointerEvents:'none'
          }}
        />
      ))}

      {/* ── PHASE 6: Ambulance ── */}
      <motion.div
        initial={{ x:'-110vw' }}
        animate={{ x: from(6)?'2vw':'-110vw' }}
        transition={{ duration:2.8, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'21.5%', zIndex:13 }}>
        <DetailedAmbulance scale={0.8} />
        <motion.div animate={{ opacity:[0.3,0.6,0.3] }} transition={{ duration:0.25, repeat:Infinity }}
          style={{ position:'absolute', right:'-80px', top:'30px',
            width:'90px', height:'35px',
            background:'linear-gradient(to right,rgba(255,255,180,0.4),transparent)',
            filter:'blur(12px)' }} />
      </motion.div>

      {/* ── PHASE 6: Caution tape ── */}
      <motion.div
        initial={{ y: '-200%', opacity: 0 }}
        animate={{ y: from(6)&&!from(8) ? '0%' : '-200%', opacity: from(6)&&!from(8) ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 1.4, type: 'spring', stiffness: 90, damping: 18 }}
        style={{
          position: 'absolute', bottom: '24%', left: 0, right: 0,
          zIndex: 18, pointerEvents: 'none'
        }}>
        <CautionTape />
      </motion.div>

      {/* ── PHASE 7: Police officer walks to scene ── */}
      <motion.div
        initial={{ x:'110vw' }}
        animate={{ x: from(7)&&!from(8)?'46vw':'110vw', opacity: from(7)&&!from(8)?1:0 }}
        transition={{ duration:2.2, ease:'easeOut' }}
        style={{ position:'absolute', bottom:'22%', zIndex:16 }}>
        <DetailedHuman walking={between(7,8)} isOfficer color="#aabbdd" scale={0.85} />
      </motion.div>

      {/* ── Fade to black ── */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity: from(8)?1:0 }}
        transition={{ duration:2.2 }}
        style={{ position:'absolute', inset:0, backgroundColor:'#000', zIndex:100, pointerEvents:'none' }} />

      {/* 42 reveal removed — lives in Slide01Hook instead */}

      {/* ── Captions ── */}
      <Caption text="2016 — Oplan Tokhang begins across the Philippines." show={between(1,2)} />
      <Caption text="Police units were mobilized across Metro Manila." show={between(2,3)} />
      <Caption text="Many were confronted in the dead of night." show={between(3,4)} />
      <Caption text="Most cases were closed with no investigation." show={between(5,6)} />
      <Caption text="Crime scenes were processed and cleared within hours." show={between(6,7)} />
      <Caption text="The gaps in documentation are what we set out to map." show={between(7,8)} />

      {/* ── Skip ── */}
      <motion.button
        initial={{ opacity:0 }} animate={{ opacity:0.28 }} whileHover={{ opacity:1 }}
        onClick={goNext} className="nav-button"
        style={{ position:'absolute', bottom:'34px', right:'36px', background:'none',
          border:'1px solid #333', color:'#555', padding:'10px 20px', fontSize:'11px',
          cursor:'pointer', fontFamily:'var(--font)', zIndex:200,
          letterSpacing:'0.15em', textTransform:'uppercase' }}>
        SKIP INTRO →
      </motion.button>
    </div>
  );
};

export default Slide00Intro;
