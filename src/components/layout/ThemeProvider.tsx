/**
 * Theme Provider Component
 *
 * This component provides theme switching functionality using next-themes
 * It automatically detects system preference and allows manual override
 */

'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React, { createContext, useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

type MotionPref = 'full' | 'reduced' | 'off';
type TextPref = 'sm' | 'md' | 'lg';

interface PreferencesContextValue {
  motion: MotionPref;
  setMotion: (v: MotionPref) => void;
  text: TextPref;
  setText: (v: TextPref) => void;
}

export const PreferencesContext = createContext<PreferencesContextValue | null>(
  null
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [motion, setMotion] = useState<MotionPref>('full');
  const [text, setText] = useState<TextPref>('md');

  // hydrate from storage and media queries
  useEffect(() => {
    const storedMotion =
      (localStorage.getItem('pref-motion') as MotionPref) || null;
    const storedText = (localStorage.getItem('pref-text') as TextPref) || null;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setMotion(storedMotion ?? (prefersReduced ? 'reduced' : 'full'));
    setText(storedText ?? 'md');
  }, []);

  useEffect(() => {
    localStorage.setItem('pref-motion', motion);
    document.documentElement.setAttribute('data-motion', motion);
  }, [motion]);

  useEffect(() => {
    localStorage.setItem('pref-text', text);
    document.documentElement.setAttribute('data-text', text);
  }, [text]);

  // no cursor preference stored as feature removed

  const value = useMemo<PreferencesContextValue>(
    () => ({ motion, setMotion, text, setText }),
    [motion, text]
  );

  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
      enableColorScheme={false}
      storageKey="theme-preference"
      themes={['light', 'dark', 'high-contrast', 'system']}
    >
      <PreferencesContext.Provider value={value}>
        {children}
      </PreferencesContext.Provider>
    </NextThemeProvider>
  );
}

export default ThemeProvider;
