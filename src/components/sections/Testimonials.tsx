'use client';

/**
 * Testimonials Component - Client Feedback and Social Proof
 *
 * This component displays client testimonials in an engaging format
 * with photos, ratings, and detailed feedback to build trust and credibility.
 */

import { motion } from 'framer-motion';
import { Card, Button } from '../ui';
import { testimonials } from '@/data';
import styles from './Testimonials.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const testimonialVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.starRating} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`${styles.star} ${
            index < rating ? styles.filled : styles.empty
          }`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="testimonials-title" className={styles.title}>
            What Clients Say
          </h2>
          <p className={styles.subtitle}>
            Real feedback from clients who have trusted me with their projects.
            Their success stories speak to the quality and impact of our
            collaboration.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialVariants}
              className={styles.testimonialContainer}
            >
              <Card className={styles.testimonialCard}>
                {/* Quote Icon */}
                <div className={styles.quoteIcon} aria-hidden="true">
                  &ldquo;
                </div>

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Quote */}
                <blockquote className={styles.quote}>
                  {testimonial.quote}
                </blockquote>

                {/* Client Info */}
                <div className={styles.clientInfo}>
                  <div className={styles.avatar}>
                    <div className={styles.avatarPlaceholder}>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>
                  <div className={styles.clientDetails}>
                    <cite className={styles.clientName}>
                      {testimonial.name}
                    </cite>
                    <p className={styles.clientRole}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <p className={styles.project}>{testimonial.project}</p>
                  </div>
                </div>

                {/* Project Tags */}
                <div className={styles.tags}>
                  {testimonial.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className={styles.ctaTitle}>
            Ready to join these success stories?
          </h3>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss how I can help bring your project to life and
            deliver the same exceptional results.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
