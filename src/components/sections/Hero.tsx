/**
 * Hero Component - Main landing section
 *
 * TypeScript Learning:
 * - This component uses Framer Motion for animations
 * - The motion variants are typed objects that define animation states
 * - Optional props are typed with interfaces
 */

'use client';

import React, { useContext, useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui';
import styles from './Hero.module.css';
import { PreferencesContext } from '@/components/layout/ThemeProvider';

// Animation variants factory based on motion preference
function makeVariants(pref: 'full' | 'reduced') {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: pref === 'full' ? 0.2 : 0,
        delayChildren: pref === 'full' ? 0.2 : 0,
      },
    },
  };
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: pref === 'full' ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: pref === 'full' ? 0.6 : 0.2,
        ease: 'easeOut',
      },
    },
  };
  return { container, item };
}

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
  const prefs = useContext(PreferencesContext);
  const motionPref = prefs?.motion ?? 'full';
  const useMotion = motionPref !== 'off';
  const variants = useMemo(
    () => makeVariants(motionPref === 'reduced' ? 'reduced' : 'full'),
    [motionPref]
  );
  return (
    <section className={styles.hero} aria-label="Introduction" id="hero">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={useMotion ? variants.container : undefined}
          initial={useMotion ? 'hidden' : undefined}
          animate={useMotion ? 'visible' : undefined}
        >
          {/* Greeting */}
          <motion.p
            className={styles.greeting}
            variants={useMotion ? variants.item : undefined}
          >
            👋 Hi, I&apos;m Evan Marshall
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className={styles.title}
            variants={useMotion ? variants.item : undefined}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className={styles.subtitle}
            variants={useMotion ? variants.item : undefined}
          >
            {subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            className={styles.description}
            variants={useMotion ? variants.item : undefined}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.actions}
            variants={useMotion ? variants.item : undefined}
          >
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              aria-label="View my web development projects"
            >
              View My Work
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              aria-label="Start a conversation about your project"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Tech Stack Highlight */}
          <motion.div
            className={styles.techStack}
            variants={useMotion ? variants.item : undefined}
          >
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
