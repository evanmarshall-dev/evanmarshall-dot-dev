import React from 'react';
import type { Metadata } from 'next';
import { Testimonials } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Client testimonials and success stories demonstrating results and reliability.',
};

export default function TestimonialsPage() {
  return (
    <>
      <h1 className="sr-only">Testimonials</h1>
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Results and reliability, in clients’ own words.
        </p>
      </div>
      <Testimonials />
    </>
  );
}
