import React from 'react';
import type { Metadata } from 'next';
import { Services } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development services: websites, web apps, e‑commerce, integrations, performance, SEO, and accessibility.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">Services</h1>
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Pick the outcome you need: a new website, an app, e‑commerce, or
          performance and SEO improvements. We’ll scope quickly and move
          efficiently.
        </p>
      </div>
      <Services />
    </>
  );
}
