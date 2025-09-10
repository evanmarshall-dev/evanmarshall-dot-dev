import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '@/components/layout/Navigation';

describe('Navigation', () => {
  it('renders top-level links', async () => {
    render(<Navigation />);
    const links = await screen.findAllByRole('link');
    const labels = links
      .map((el) => (el as HTMLAnchorElement).textContent?.trim() || '')
      .filter(Boolean);
    expect(labels).toContain('Projects');
    expect(labels).toContain('Services');
    expect(labels).toContain('Contact');
  });
});
