import React from 'react';
import type { Metadata } from 'next';
import { About } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Evan Marshall, a full‑stack developer focused on building fast, reliable, and accessible web experiences.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About</h1>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          I’m Evan, a full‑stack developer focused on reliable delivery and
          clear communication. Here’s a bit about my background and how I work.
        </p>
      </div>
      <About />
    </>
  );
}
