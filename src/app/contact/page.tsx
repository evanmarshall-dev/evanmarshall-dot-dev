import React from 'react';
import type { Metadata } from 'next';
import ContactCTA from '@/components/sections/ContactCTA';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Evan Marshall to discuss your project, availability, and next steps.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact</h1>
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Share a few details and I’ll reply within 1 business day.
        </p>
      </div>
      <ContactCTA />
    </>
  );
}
