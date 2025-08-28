/**
 * Card Component - Flexible container for content
 *
 * TypeScript Learning: This component demonstrates:
 * - Optional props with default values
 * - Conditional styling based on props
 * - Proper children typing with React.ReactNode
 */

import React from 'react';
import { clsx } from 'clsx';
import type { CardProps } from '@/types';
import styles from './Card.module.css';

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  hover = false,
  ...props
}) => {
  const cardClasses = clsx(
    styles.card,
    styles[padding],
    {
      [styles.hover]: hover,
    },
    className
  );

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
