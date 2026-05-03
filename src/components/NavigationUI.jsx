import React from 'react';

const NavigationUI = ({ currentSlide, totalSlides, goNext, goPrev }) => {
  const pad = (n) => n.toString().padStart(2, '0');

  const buttonStyle = {
    background: 'none',
    border: '1px solid #333',
    color: 'var(--gray)',
    fontFamily: 'var(--font)',
    fontSize: '13px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          height: '2px',
          background: 'var(--text-main)',
          opacity: 0.8,
          width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1000,
        }}
      />

      {/* Slide Counter */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '40px',
          fontSize: '11px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          letterSpacing: '0.15em',
          zIndex: 1000,
        }}
      >
        {pad(currentSlide + 1)} / {pad(totalSlides)}
      </div>

    </>
  );
};

export default NavigationUI;
