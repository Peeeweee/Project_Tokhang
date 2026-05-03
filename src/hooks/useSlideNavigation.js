import { useState, useEffect, useCallback } from 'react';

export const useSlideNavigation = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goTo = useCallback((n) => {
    if (n === currentSlide) return;
    setDirection(n > currentSlide ? 1 : -1);
    setCurrentSlide(n);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = ['ArrowRight', 'ArrowDown', ' ', 'ArrowLeft', 'ArrowUp'];
      if (keys.includes(e.key)) {
        e.preventDefault();
        if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) {
          goNext();
        } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
          goPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  return { currentSlide, direction, goNext, goPrev, goTo };
};
