// src/components/CustomCursor.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', mouseMove);

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
       document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'white',
      mixBlendMode: 'difference'
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  }

  return (
    <div className="hidden md:block">
      {/* Follower Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white z-[9999] pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {/* Center Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 z-[9999] pointer-events-none"
        variants={dotVariants}
        animate="default"
        transition={{ duration: 0 }}
      />
    </div>
  );
}
