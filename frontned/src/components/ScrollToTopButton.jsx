import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // CHANGE: New classes for mobile positioning, size, and style
          className="fixed z-50
                     bottom-20 md:bottom-5           // Positioned above the mobile nav bar
                     left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 // Centered on mobile, right on desktop
                     p-2 md:p-3                       // Smaller on mobile
                     bg-slate-300/50 dark:bg-slate-700/50   // Blurry background
                     backdrop-blur-sm                 // Glassmorphism effect
                     text-slate-900 dark:text-white   // Adapting text color
                     rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
