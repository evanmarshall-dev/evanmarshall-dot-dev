'use client';

/**
 * Process Component - Client Work Methodology
 *
 * This component showcases the step-by-step process used when working with clients,
 * from discovery to deployment and ongoing support. Uses interactive timeline design
 * with icons and detailed descriptions.
 */

import { motion } from 'framer-motion';
import { Card } from '../ui';
import styles from './Process.module.css';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
  duration: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description: 'Understanding your vision, goals, and technical requirements',
    details: [
      'Stakeholder interviews and requirement gathering',
      'Technical architecture planning and feasibility analysis',
      'Project timeline and milestone definition',
      'Technology stack selection based on project needs',
    ],
    icon: '🔍',
    duration: '1-2 weeks',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: 'Creating user-centered designs and interactive prototypes',
    details: [
      'User experience research and persona development',
      'Wireframing and user flow mapping',
      'High-fidelity mockups and design systems',
      'Interactive prototypes for validation',
    ],
    icon: '🎨',
    duration: '2-3 weeks',
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Development & Testing',
    description:
      'Building robust, scalable solutions with comprehensive testing',
    details: [
      'Agile development with regular progress updates',
      'Code reviews and quality assurance processes',
      'Unit, integration, and end-to-end testing',
      'Performance optimization and security auditing',
    ],
    icon: '⚡',
    duration: '4-8 weeks',
    color: 'accent',
  },
  {
    id: 4,
    title: 'Deployment & Launch',
    description: 'Seamless deployment with monitoring and support systems',
    details: [
      'Production environment setup and configuration',
      'Automated CI/CD pipeline implementation',
      'Performance monitoring and analytics setup',
      'User training and documentation delivery',
    ],
    icon: '🚀',
    duration: '1 week',
    color: 'primary',
  },
  {
    id: 5,
    title: 'Support & Optimization',
    description: 'Ongoing maintenance, improvements, and feature enhancements',
    details: [
      'Regular health checks and performance monitoring',
      'Bug fixes and security updates',
      'Feature enhancements based on user feedback',
      'Technical support and consultation',
    ],
    icon: '🛠️',
    duration: 'Ongoing',
    color: 'secondary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};

export default function Process() {
  return (
    <section className={styles.process} aria-labelledby="process-title">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="process-title" className={styles.title}>
            My Process
          </h2>
          <p className={styles.subtitle}>
            A proven methodology that ensures successful project delivery from
            concept to launch and beyond.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.stepContainer}
              variants={stepVariants}
            >
              {/* Timeline Line */}
              {index !== processSteps.length - 1 && (
                <div className={styles.timelineLine} />
              )}

              {/* Step Card */}
              <Card className={`${styles.stepCard} ${styles[step.color]}`}>
                {/* Step Number and Icon */}
                <div className={styles.stepHeader}>
                  <motion.div
                    className={styles.stepIcon}
                    variants={iconVariants}
                    aria-hidden="true"
                  >
                    <span className={styles.emoji}>{step.icon}</span>
                    <span className={styles.stepNumber}>{step.id}</span>
                  </motion.div>
                  <div className={styles.stepInfo}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDuration}>{step.duration}</p>
                  </div>
                </div>

                {/* Step Description */}
                <p className={styles.stepDescription}>{step.description}</p>

                {/* Step Details */}
                <ul className={styles.stepDetails}>
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={styles.detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
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
          <h3 className={styles.ctaTitle}>Ready to get started?</h3>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss your project and how my proven process can bring
            your vision to life.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
