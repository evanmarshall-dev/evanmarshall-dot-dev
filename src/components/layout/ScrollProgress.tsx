'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

/**
 * ScrollProgress - minimal fixed progress bar indicating page scroll position.
 * Accessible name provided for assistive tech; hidden from tab order.
 */
const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight;
      const clientHeight = doc.clientHeight;
      const max = Math.max(scrollHeight - clientHeight, 1);
      const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className={styles.root} aria-hidden="true" role="presentation">
      <div className={styles.track} />
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
