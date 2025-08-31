'use client';

/**
 * FAQ Component - Frequently Asked Questions
 *
 * This component addresses common questions clients have about working
 * together, processes, pricing, and technical details. Features an
 * interactive accordion design for better user experience.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui';
import styles from './FAQ.module.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'technical' | 'pricing';
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 1,
    category: 'general',
    question: 'What types of projects do you work on?',
    answer:
      'I specialize in full-stack web applications, including e-commerce platforms, SaaS products, corporate websites, data dashboards, and custom web applications. I work with modern technologies like React, Next.js, TypeScript, Node.js, and various databases to create scalable, performant solutions.',
  },
  {
    id: 2,
    category: 'general',
    question: 'How do you ensure project success?',
    answer:
      'Success comes from clear communication, thorough planning, and iterative development. I start with detailed discovery sessions, create detailed project specifications, provide regular updates, and incorporate feedback throughout the development process. I also include comprehensive testing and post-launch support.',
  },
  {
    id: 3,
    category: 'general',
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work with clients worldwide. I&apos;m experienced in remote collaboration and can adapt to different time zones. I use modern communication tools and project management platforms to ensure smooth collaboration regardless of location.',
  },

  // Process Questions
  {
    id: 4,
    category: 'process',
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. During our initial consultation, I&apos;ll provide a detailed timeline with milestones and deliverables.',
  },
  {
    id: 5,
    category: 'process',
    question: 'How involved will I be in the development process?',
    answer:
      'Your involvement depends on your preference and availability. I provide weekly progress updates, milestone reviews, and am always available for questions. You&apos;ll have opportunities to review and provide feedback at key stages, ensuring the final product meets your expectations.',
  },
  {
    id: 6,
    category: 'process',
    question: 'What happens if I need changes during development?',
    answer:
      'Minor adjustments are normal and included in the process. For significant scope changes, I&apos;ll discuss the impact on timeline and budget upfront. I use an agile approach that accommodates reasonable changes while maintaining project momentum.',
  },

  // Technical Questions
  {
    id: 7,
    category: 'technical',
    question: 'Which technologies do you use?',
    answer:
      'I primarily use React, Next.js, TypeScript, and Node.js for modern web applications. For databases, I work with PostgreSQL, MongoDB, and others based on project needs. I also integrate with various APIs, payment processors, and cloud services like AWS and Vercel.',
  },
  {
    id: 8,
    category: 'technical',
    question: 'Do you provide hosting and maintenance?',
    answer:
      'Yes, I can handle deployment, hosting setup, and ongoing maintenance. I work with various hosting providers and can recommend the best solution for your needs. Maintenance packages include security updates, performance monitoring, and technical support.',
  },
  {
    id: 9,
    category: 'technical',
    question: 'Will my website be mobile-friendly and fast?',
    answer:
      'Absolutely. All projects are built mobile-first and optimized for performance. I follow modern best practices including responsive design, image optimization, code splitting, and SEO optimization to ensure fast loading times across all devices.',
  },

  // Pricing Questions
  {
    id: 10,
    category: 'pricing',
    question: 'How do you structure your pricing?',
    answer:
      'I offer both project-based and hourly pricing depending on the scope and requirements. Project-based pricing provides cost certainty, while hourly pricing offers flexibility for ongoing work or uncertain scopes. I provide detailed estimates after our initial consultation.',
  },
  {
    id: 11,
    category: 'pricing',
    question: 'What is included in the project cost?',
    answer:
      'Project costs include development, testing, deployment setup, documentation, and initial training. Additional services like ongoing maintenance, content creation, or third-party integrations may be quoted separately based on your needs.',
  },
  {
    id: 12,
    category: 'pricing',
    question: 'Do you require full payment upfront?',
    answer:
      'No, I typically work with milestone-based payments. For most projects, I require a 50% deposit to begin work, with the remainder paid upon completion. For larger projects, we can establish multiple milestones with payments throughout the development process.',
  },
];

const categories = [
  { key: 'general', label: 'General', icon: '💼' },
  { key: 'process', label: 'Process', icon: '⚡' },
  { key: 'technical', label: 'Technical', icon: '🔧' },
  { key: 'pricing', label: 'Pricing', icon: '💰' },
] as const;

type CategoryKey = (typeof categories)[number]['key'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('general');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs = faqData.filter(
    (item) => item.category === activeCategory
  );

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="faq-title" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Get answers to common questions about working together, processes,
            and technical details. Don&apos;t see your question? Feel free to
            reach out.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className={styles.categories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.categoryButton} ${
                activeCategory === category.key ? styles.active : ''
              }`}
              onClick={() => {
                setActiveCategory(category.key);
                setOpenItem(null); // Close any open items when switching categories
              }}
              aria-pressed={activeCategory === category.key}
            >
              <span className={styles.categoryIcon} aria-hidden="true">
                {category.icon}
              </span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className={styles.faqList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key={activeCategory} // Re-trigger animation when category changes
        >
          {filteredFAQs.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={styles.faqItem}
            >
              <Card className={styles.faqCard}>
                <button
                  className={`${styles.questionButton} ${
                    openItem === item.id ? styles.open : ''
                  }`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                  aria-controls={`answer-${item.id}`}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.toggleIcon} aria-hidden="true">
                    {openItem === item.id ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      id={`answer-${item.id}`}
                      className={styles.answerContainer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className={styles.answer}>{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className={styles.ctaTitle}>Still have questions?</h3>
          <p className={styles.ctaDescription}>
            I&apos;m here to help. Reach out for a free consultation to discuss
            your project and get personalized answers.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
