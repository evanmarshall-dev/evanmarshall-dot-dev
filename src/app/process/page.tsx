import React from 'react';
import type { Metadata } from 'next';
import { Process } from '@/components';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'A simple, collaborative development process that delivers clear outcomes on time and on budget.',
};

export default function ProcessPage() {
  return (
    <>
      <h1 className="sr-only">Process</h1>
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Process' }]}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          A straightforward, collaborative process built to minimize risk and
          maximize outcomes—so you always know what’s next.
        </p>
      </div>
      <Process />
    </>
  );
}
