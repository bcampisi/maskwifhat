
import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const container = starsRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size
      const size = Math.random() * 2 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.7 + 0.3;
      
      // Random duration
      const duration = Math.random() * 3 + 2;
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--opacity', opacity);
      star.style.setProperty('--duration', `${duration}s`);
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="stars" ref={starsRef}></div>
  );
};

export default StarBackground;
