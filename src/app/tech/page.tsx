import React from 'react';
import type { Metadata } from 'next';
import { TechStack } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Tech Stack',
  description:
    'The technologies I use to build modern, scalable web applications: React, Next.js, TypeScript, Node.js, and more.',
  alternates: { canonical: '/tech' },
};

export default function TechPage() {
  return (
    <>
      <h1 className="sr-only">Tech Stack</h1>
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Tech Stack' }]}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Practical, modern tools selected for maintainability and performance.
          I keep your stack lean and future‑friendly.
        </p>
      </div>
      <TechStack />
    </>
  );
}
