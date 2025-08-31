/**
 * Services Section Component
 *
 * Displays services from services.json with pricing and feature details
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { services } from '@/data';
import type { Service } from '@/types';
import styles from './Services.module.css';

// Icon components - simple SVG icons
const ServiceIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconMap = {
    code: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
    palette: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    server: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="4" rx="1" ry="1" />
        <rect x="2" y="9" width="20" height="4" rx="1" ry="1" />
        <rect x="2" y="15" width="20" height="4" rx="1" ry="1" />
        <line x1="6" y1="5" x2="6.01" y2="5" />
        <line x1="6" y1="11" x2="6.01" y2="11" />
        <line x1="6" y1="17" x2="6.01" y2="17" />
      </svg>
    ),
    cloud: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    lightbulb: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 21h6" />
        <path d="M12 21v-8" />
        <path d="M12 3c3.5 0 6 2.5 6 6 0 2-1 3.5-2 4.5L15 16h-6l-1-2.5C7 12.5 6 11 6 9c0-3.5 2.5-6 6-6z" />
      </svg>
    ),
    smartphone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  };

  return (
    <div className={styles.icon}>
      {iconMap[icon as keyof typeof iconMap] || iconMap.code}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Services & Expertise</h2>
          <p className={styles.subtitle}>
            Comprehensive development solutions tailored to bring your digital
            vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className={styles.serviceCard}>
                {/* Service Header */}
                <div className={styles.serviceHeader}>
                  <ServiceIcon icon={service.icon} />
                  <div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className={styles.features}>
                  {service.features.map(
                    (feature: string, featureIndex: number) => (
                      <li key={featureIndex} className={styles.feature}>
                        <div className={styles.checkmark}>
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                {/* Pricing */}
                {service.pricing && (
                  <div className={styles.pricing}>
                    <div className={styles.priceContainer}>
                      <span className={styles.priceLabel}>Starting from</span>
                      <div className={styles.price}>
                        <span className={styles.currency}>$</span>
                        <span className={styles.amount}>
                          {service.pricing.starting}
                        </span>
                        <span className={styles.unit}>
                          /{service.pricing.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.ctaText}>
            Ready to discuss your project? Let&apos;s explore how we can work
            together.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
