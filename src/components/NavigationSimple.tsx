/**
 * Temporary simple Navigation component to debug import issues
 */

import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">Evan Marshall</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
