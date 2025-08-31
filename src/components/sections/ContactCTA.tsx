/**
 * ContactCTA Section Component
 *
 * Call-to-action section encouraging visitors to get in touch
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import styles from './ContactCTA.module.css';

const ContactCTA: React.FC = () => {
  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: 'me@evanmarshall.dev',
      href: 'mailto:me@evanmarshall.dev',
      icon: '✉️',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: '@evan-marshall-dev',
      href: 'https://www.linkedin.com/in/evan-marshall-dev',
      icon: '💼',
    },
    {
      type: 'calendar',
      label: 'Schedule Call',
      value: 'Book a meeting',
      href: 'https://calendar.google.com/calendar/embed?src=me%40evanmarshall.dev&ctz=America%2FHalifax',
      icon: '📅',
    },
  ];

  return (
    <section className={styles.contactCTA} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
              <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let&apos;s Build Something Amazing Together
              </motion.h2>

              <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to turn your ideas into reality? I&apos;d love to hear
                about your project and discuss how we can work together to
                create something exceptional.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              className={styles.contactMethods}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {contactMethods.map((method) => (
                <motion.a
                  key={method.type}
                  href={method.href}
                  target={method.type === 'email' ? '_self' : '_blank'}
                  rel={
                    method.type === 'email' ? undefined : 'noopener noreferrer'
                  }
                  className={styles.contactMethod}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div className={styles.methodInfo}>
                    <div className={styles.methodLabel}>{method.label}</div>
                    <div className={styles.methodValue}>{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className={styles.availability}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={styles.statusIndicator}>
                <div className={styles.statusDot}></div>
                <span className={styles.statusText}>
                  Currently available for new projects
                </span>
              </div>

              <p className={styles.responseTime}>
                I typically respond within 24 hours
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className={styles.quickInfo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕐</div>
                  <div>
                    <div className={styles.infoLabel}>Timezone</div>
                    <div className={styles.infoValue}>AST (UTC-4)</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>💬</div>
                  <div>
                    <div className={styles.infoLabel}>Language</div>
                    <div className={styles.infoValue}>English</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🚀</div>
                  <div>
                    <div className={styles.infoLabel}>Start Time</div>
                    <div className={styles.infoValue}>1-2 weeks</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
