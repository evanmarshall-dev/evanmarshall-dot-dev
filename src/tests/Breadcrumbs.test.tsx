import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders items and marks current page', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'Detail' },
        ]}
      />
    );
    expect(
      screen.getByRole('navigation', { name: /breadcrumb/i })
    ).toBeInTheDocument();
    const current = screen.getByText('Detail');
    expect(current).toHaveAttribute('aria-current', 'page');
  });
});
