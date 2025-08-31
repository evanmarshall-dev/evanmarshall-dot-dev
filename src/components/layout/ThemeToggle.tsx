/**
 * Theme Toggle Component
 *
 * A button component for switching between light, dark, and system themes
 */

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  mobile?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mobile = false }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const getNextTheme = () => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'system';
      case 'system':
      default:
        return 'light';
    }
  };

  const getThemeIcon = () => {
    switch (currentTheme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      default:
        return '💻';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to Dark';
      case 'dark':
        return 'Switch to System';
      case 'system':
      default:
        return 'Switch to Light';
    }
  };

  const getDisplayText = () => {
    if (mobile) {
      return `Theme: ${theme === 'system' ? 'Auto' : currentTheme}`;
    }
    return theme === 'system' ? 'Auto' : currentTheme;
  };

  return (
    <button
      className={mobile ? styles.mobileThemeToggle : styles.themeToggle}
      onClick={() => setTheme(getNextTheme())}
      aria-label={getThemeLabel()}
      title={`Current: ${theme} theme`}
    >
      <span className={styles.icon}>{getThemeIcon()}</span>
      <span style={{ marginLeft: '0.5rem' }} className={styles.label}>
        {getDisplayText()}
      </span>
    </button>
  );
};

export default ThemeToggle;
