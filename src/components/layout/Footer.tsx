/**
 * Footer Component
 *
 * TypeScript Learning:
 * - This component shows how to type arrays and objects
 * - Demonstrates readonly arrays for data that shouldn't change
 * - Uses proper typing for external links
 */

import React from 'react';
import Link from 'next/link';
import type { NavigationItem, SocialLink } from '@/types';
import styles from './Footer.module.css';

// Footer navigation items
const footerNavigation: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social links with proper typing
const socialLinks: readonly SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/evanmarshall-dev',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/evan-marshall-dev/',
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:me@evanmarshall.dev',
    icon: 'email',
  },
] as const;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Evan Marshall
            </Link>
            <p className={styles.tagline}>
              Full-Stack Developer crafting modern web experiences with clean
              code and exceptional design.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className={styles.navigation} aria-label="Footer navigation">
            <h3 className={styles.navTitle}>Navigation</h3>
            <ul className={styles.navList}>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className={styles.social}>
            <h3 className={styles.socialTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.platform !== 'Email'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={styles.socialLink}
                  aria-label={`Connect on ${link.platform}`}
                >
                  <SocialIcon icon={link.icon} />
                  <span className={styles.socialLabel}>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Evan Marshall. All rights reserved.</p>
          </div>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simple social icon component (placeholder for now)
interface SocialIconProps {
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  // This is a placeholder - in a real app, you'd use an icon library
  const iconMap: Record<string, string> = {
    github: '⚡',
    linkedin: '💼',
    email: '📧',
  };

  return (
    <span className={styles.socialIcon} aria-hidden="true">
      {iconMap[icon] || '🔗'}
    </span>
  );
};

export default Footer;
