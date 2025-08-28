/**
 * Button Component with CSS Modules
 *
 * TypeScript Learning Notes:
 * - This component uses interface ButtonProps to define the expected props
 * - Optional properties are marked with ? (like variant?: string)
 * - React.forwardRef is used for proper ref forwarding (advanced React pattern)
 * - The component is both typed and flexible for different use cases
 */

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import type { ButtonProps } from '@/types';
import styles from './Button.module.css';

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      onClick,
      href,
      external = false,
      className,
      ...props
    },
    ref
  ) => {
    // TypeScript Learning: clsx is a utility for conditionally joining classNames
    const buttonClasses = clsx(
      styles.button,
      styles[variant],
      styles[size],
      {
        [styles.disabled]: disabled,
        [styles.loading]: loading,
      },
      className
    );

    const content = (
      <>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={clsx({ [styles.hidden]: loading })}>{children}</span>
      </>
    );

    // If href is provided, render as link
    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={disabled}
            {...props}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClasses}
          aria-disabled={disabled}
          {...props}
        >
          {content}
        </Link>
      );
    }

    // Otherwise, render as button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
