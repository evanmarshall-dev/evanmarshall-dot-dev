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
import {
  Navigation,
  Footer,
  BackToTop,
  ThemeProvider,
  PreferencesPanel,
  ScrollProgress,
} from '@/components';
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
  metadataBase: new URL('https://www.evanmarshall.dev'),
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
    url: 'https://www.evanmarshall.dev',
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
  alternates: {
    canonical: '/',
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          {/* Skip link for accessibility */}
          <a href="#main-content" className="sr-only">
            Skip to main content
          </a>

          {/* Main app structure */}
          <div id="root">
            <Navigation />
            <ScrollProgress />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
            <PreferencesPanel />
          </div>

          {/* Structured Data: Person & Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Evan Marshall',
                url: 'https://www.evanmarshall.dev',
                image: 'https://www.evanmarshall.dev/images/profile.png',
                jobTitle: 'Full-Stack Developer',
                sameAs: [
                  'https://github.com/evanmarshall',
                  'https://www.linkedin.com/in/evan-marshall-dev',
                ],
                worksFor: {
                  '@type': 'Organization',
                  name: 'Evan Marshall Studio',
                  url: 'https://www.evanmarshall.dev',
                },
              }),
            }}
          />
          {/* Optional: Organization JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Evan Marshall',
                url: 'https://www.evanmarshall.dev',
                logo: 'https://www.evanmarshall.dev/images/og-image.jpg',
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
