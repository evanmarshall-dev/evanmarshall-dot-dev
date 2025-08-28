/**
 * Home Page - Simplified for debugging
 */

import React from 'react';
import HeroSimple from '@/components/HeroSimple';
// import { Hero, ProjectCard } from '@/components';
// import { Button } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <HeroSimple />
      <section>
        <div>
          <h2>Welcome to my portfolio</h2>
          <p>
            This is a simplified version while we debug the component imports.
          </p>
        </div>
      </section>
    </>
  );
}
