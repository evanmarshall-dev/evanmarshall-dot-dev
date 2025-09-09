import React from 'react';
import type { Metadata } from 'next';
import { FAQ } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about services, timelines, costs, and collaboration.',
};

export default function FAQPage() {
  return (
    <>
      <h1 className="sr-only">Frequently Asked Questions</h1>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Quick answers about timelines, costs, collaboration, and what to
          expect.
        </p>
      </div>
      <FAQ />
    </>
  );
}
