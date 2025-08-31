/**
 * BackToTop Component
 *
 * A floating button that appears when user scrolls down and smoothly scrolls back to top
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BackToTop.module.css';

interface BackToTopProps {
  showAfter?: number; // Show button after scrolling this many pixels
  className?: string;
}

const BackToTop: React.FC<BackToTopProps> = ({
  showAfter = 400,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Show/hide based on scroll position
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfter]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`${styles.backToTop} ${className || ''}`}
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={styles.icon}
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
