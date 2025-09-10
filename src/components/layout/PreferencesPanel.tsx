'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { PreferencesContext } from './ThemeProvider';
import styles from './PreferencesPanel.module.css';

export default function PreferencesPanel() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const prefs = React.useContext(PreferencesContext);

  const ThemeButton = ({ value, label }: { value: string; label: string }) => (
    <button
      type="button"
      className={styles.button}
      aria-pressed={
        theme === value || (value === 'system' && theme === 'system')
      }
      onClick={() => setTheme(value)}
    >
      {label}
    </button>
  );

  const PressButton = ({
    isActive,
    onClick,
    label,
  }: {
    isActive: boolean;
    onClick: () => void;
    label: string;
  }) => (
    <button
      type="button"
      className={styles.button}
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
    </button>
  );

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown, { capture: true });
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, {
        capture: true,
      });
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.panel} aria-live="polite" ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="preferences-content"
        onClick={() => setOpen((v) => !v)}
        disabled={!prefs}
        title="Open preferences"
      >
        <span aria-hidden>⚙️</span> Preferences
      </button>

      {open && prefs && (
        <div
          id="preferences-content"
          className={styles.content}
          role="region"
          aria-label="Display preferences"
        >
          <div className={styles.title}>Preferences</div>
          <div className={styles.group}>
            <span className={styles.label}>Theme</span>
            <div className={styles.controls} role="group" aria-label="Theme">
              <ThemeButton value="light" label="Light" />
              <ThemeButton value="dark" label="Dark" />
              <ThemeButton value="system" label="System" />
              <ThemeButton value="high-contrast" label="High Contrast" />
            </div>
            <span className={styles.hint}>Current: {resolvedTheme}</span>
          </div>

          <div className={styles.group}>
            <span className={styles.label}>Motion</span>
            <div className={styles.controls} role="group" aria-label="Motion">
              <PressButton
                isActive={prefs.motion === 'full'}
                onClick={() => prefs.setMotion('full')}
                label="Full"
              />
              <PressButton
                isActive={prefs.motion === 'reduced'}
                onClick={() => prefs.setMotion('reduced')}
                label="Reduced"
              />
              <PressButton
                isActive={prefs.motion === 'off'}
                onClick={() => prefs.setMotion('off')}
                label="Off"
              />
            </div>
          </div>

          <div className={styles.group}>
            <span className={styles.label}>Text Size</span>
            <div
              className={styles.controls}
              role="group"
              aria-label="Text Size"
            >
              <PressButton
                isActive={prefs.text === 'sm'}
                onClick={() => prefs.setText('sm')}
                label="S"
              />
              <PressButton
                isActive={prefs.text === 'md'}
                onClick={() => prefs.setText('md')}
                label="M"
              />
              <PressButton
                isActive={prefs.text === 'lg'}
                onClick={() => prefs.setText('lg')}
                label="L"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
