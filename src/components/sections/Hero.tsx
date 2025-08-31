/**
 * Hero Component - Main landing section
 *
 * TypeScript Learning:
 * - This component uses Framer Motion for animations
 * - The motion variants are typed objects that define animation states
 * - Optional props are typed with interfaces
 */

'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui';
import styles from './Hero.module.css';

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Full-Stack Developer',
  subtitle = 'Building Modern Web Experiences',
  description = 'I craft scalable, performant applications using cutting-edge technologies. From concept to deployment, I bring your ideas to life with clean code and exceptional user experiences.',
}) => {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p className={styles.greeting} variants={itemVariants}>
            👋 Hi, I&apos;m Evan Marshall
          </motion.p>

          {/* Main heading */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 className={styles.subtitle} variants={itemVariants}>
            {subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p className={styles.description} variants={itemVariants}>
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className={styles.actions} variants={itemVariants}>
            <Button href="/projects" variant="primary" size="lg">
              View My Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Tech Stack Highlight */}
          <motion.div className={styles.techStack} variants={itemVariants}>
            <p className={styles.techLabel}>Technologies I work with:</p>
            <div className={styles.techItems}>
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'PostgreSQL',
                'AWS',
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={styles.techItem}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className={styles.background} aria-hidden="true">
          <div className={styles.gradient1}></div>
          <div className={styles.gradient2}></div>
          <div className={styles.grid}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
