/**
 * Theme Provider Component
 *
 * This component provides theme switching functionality using next-themes
 * It automatically detects system preference and allows manual override
 */

'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
      enableColorScheme={false} // Disable color-scheme to prevent hydration issues
      storageKey="theme-preference"
      themes={['light', 'dark', 'system']}
    >
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
