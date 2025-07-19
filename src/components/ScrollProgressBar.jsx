import React, { useState, useEffect } from 'react';

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scroll = (scrollTop / (docHeight - winHeight)) * 100;
    setScrollPercentage(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '6px',
        backgroundColor: '#e0e0e0',  
        zIndex: 9999,
        borderRadius: '4px', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollPercentage}%`,
          backgroundColor: '#0E76BC',  
          transition: 'width 0.25s ease-out',
          borderRadius: '4px', 
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;
