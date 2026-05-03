import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSlideNavigation } from '../hooks/useSlideNavigation';
import NavigationUI from './NavigationUI';
import { slideData } from '../data/slideData';

// Slide Imports
import Slide00Intro from './slides/Slide00Intro';
import Slide01Hook from './slides/Slide01Hook';
import Slide02Question from './slides/Slide02Question';
import Slide03Title from './slides/Slide03Title';
import Slide04Context from './slides/Slide04Context';
import Slide05Method from './slides/Slide05Method';
import Slide06NetworkExplained from './slides/Slide06NetworkExplained';
import Slide07NetworkMap from './slides/Slide07NetworkMap';
import Slide08InnerCircle from './slides/Slide08InnerCircle';
import Slide09OuterEdge from './slides/Slide09OuterEdge';
import Slide10BarChart from './slides/Slide10BarChart';
import Slide11Meaning from './slides/Slide11Meaning';
import Slide12Closing from './slides/Slide12Closing';

const slideComponents = [
  Slide00Intro, Slide01Hook, Slide02Question, Slide03Title, Slide04Context,
  Slide05Method, Slide06NetworkExplained, Slide07NetworkMap,
  Slide08InnerCircle, Slide09OuterEdge, Slide10BarChart,
  Slide11Meaning, Slide12Closing
];

const variants = {
  scaleUp: {
    enter: (dir) => ({ opacity: 0, scale: 0.88 }),
    center: { opacity: 1, scale: 1 },
    exit: (dir) => ({ opacity: 0, scale: 1.06 })
  },
  fadeOnly: {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    enter: { opacity: 0, y: 60 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 }
  },
  slideHorizontal: {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 })
  },
  staggerFade: {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
};

const SlideShow = () => {
  const TOTAL = slideComponents.length;
  const { currentSlide, direction, goNext, goPrev, goTo } = useSlideNavigation(TOTAL);

  const CurrentSlideComponent = slideComponents[currentSlide];
  const transitionType = slideData[currentSlide]?.transition || 'fadeOnly';
  const selectedVariants = variants[transitionType];

  const handleContainerClick = (e) => {
    // Only advance if we didn't click a navigation button
    if (!e.target.closest('.nav-button')) {
      goNext();
    }
  };

  const isLight = currentSlide % 2 !== 0 && currentSlide !== 0;
  const themeBg = isLight ? '#fdfdfd' : '#000000';
  const themeText = isLight ? '#111111' : '#ffffff';
  const themeSecondary = isLight ? '#666' : '#888';

  return (
    <div 
      onClick={handleContainerClick}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: themeBg,
        color: themeText,
        cursor: 'pointer',
        transition: 'background-color 0.8s ease, color 0.8s ease',
        '--text-main': themeText,
        '--text-secondary': themeSecondary,
        '--bg-main': themeBg
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={selectedVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.55, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.45 },
            scale: { duration: 0.45 },
            x: { duration: 0.45 },
            y: { duration: 0.45 }
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'var(--slide-padding, 80px)',
            pointerEvents: 'auto'
          }}
        >
          <CurrentSlideComponent goNext={goNext} isLight={isLight} />
        </motion.div>
      </AnimatePresence>

      {currentSlide > 0 && (
        <NavigationUI 
          currentSlide={currentSlide} 
          totalSlides={TOTAL} 
          goNext={goNext} 
          goPrev={goPrev} 
        />
      )}
    </div>
  );
};

export default SlideShow;
