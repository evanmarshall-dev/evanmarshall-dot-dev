/**
 * Root Layout - Main app layout
 *
 * TypeScript Learning:
 * - Metadata type from Next.js provides type safety for SEO data
 * - React.ReactNode type for children prop
 * - Font loading with Next.js font optimization
 */

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import NavigationSimple from '@/components/NavigationSimple';
// import { Navigation, Footer } from '@/components';
import '@/styles/globals.css';

// Load fonts with Next.js optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Evan Marshall - Full-Stack Developer',
    default: 'Evan Marshall - Full-Stack Developer',
  },
  description:
    'Full-Stack Developer specializing in modern web technologies. Building scalable, performant applications with React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Web Developer',
    'Software Engineer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Evan Marshall' }],
  creator: 'Evan Marshall',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://evanmarshall.dev',
    title: 'Evan Marshall - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web technologies',
    siteName: 'Evan Marshall Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evan Marshall - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evan Marshall - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web technologies',
    creator: '@evanmarshall',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>

        {/* Main app structure */}
        <div id="root">
          <NavigationSimple />
          <main id="main-content">{children}</main>
          {/* <Footer /> */}
        </div>

        {/* Google Analytics - placeholder */}
        {process.env.NODE_ENV === 'production' && (
          <>{/* Add Google Analytics scripts here */}</>
        )}
      </body>
    </html>
  );
}
