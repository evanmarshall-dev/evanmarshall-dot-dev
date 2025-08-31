/**
 * TechStack Section Component
 *
 * Displays technologies and tools organized by categories
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import styles from './TechStack.module.css';

interface Technology {
  name: string;
  icon: string;
  category: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  description?: string;
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'Frontend', proficiency: 'expert' },
  { name: 'Next.js', icon: '▲', category: 'Frontend', proficiency: 'expert' },
  {
    name: 'TypeScript',
    icon: '📘',
    category: 'Frontend',
    proficiency: 'expert',
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    category: 'Frontend',
    proficiency: 'advanced',
  },
  {
    name: 'Framer Motion',
    icon: '🎬',
    category: 'Frontend',
    proficiency: 'advanced',
  },
  {
    name: 'Vue.js',
    icon: '💚',
    category: 'Frontend',
    proficiency: 'intermediate',
  },

  // Backend
  { name: 'Node.js', icon: '🟢', category: 'Backend', proficiency: 'expert' },
  {
    name: 'Express.js',
    icon: '🚂',
    category: 'Backend',
    proficiency: 'expert',
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    category: 'Backend',
    proficiency: 'advanced',
  },
  { name: 'MongoDB', icon: '🍃', category: 'Backend', proficiency: 'advanced' },
  { name: 'Redis', icon: '🔴', category: 'Backend', proficiency: 'advanced' },
  {
    name: 'GraphQL',
    icon: '📊',
    category: 'Backend',
    proficiency: 'intermediate',
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    icon: '☁️',
    category: 'Cloud & DevOps',
    proficiency: 'advanced',
  },
  {
    name: 'Docker',
    icon: '🐳',
    category: 'Cloud & DevOps',
    proficiency: 'advanced',
  },
  {
    name: 'Kubernetes',
    icon: '⚙️',
    category: 'Cloud & DevOps',
    proficiency: 'intermediate',
  },
  {
    name: 'Vercel',
    icon: '△',
    category: 'Cloud & DevOps',
    proficiency: 'expert',
  },
  {
    name: 'GitHub Actions',
    icon: '⚡',
    category: 'Cloud & DevOps',
    proficiency: 'advanced',
  },

  // Tools
  { name: 'Git', icon: '🌿', category: 'Tools', proficiency: 'expert' },
  { name: 'VS Code', icon: '💻', category: 'Tools', proficiency: 'expert' },
  { name: 'Figma', icon: '🎯', category: 'Tools', proficiency: 'advanced' },
  { name: 'Postman', icon: '📮', category: 'Tools', proficiency: 'advanced' },
];

const TechStack: React.FC = () => {
  const categories = [...new Set(technologies.map((tech) => tech.category))];

  const getProficiencyColor = (proficiency: Technology['proficiency']) => {
    const colors = {
      expert: 'var(--color-accent-500)',
      advanced: 'var(--color-primary-500)',
      intermediate: 'var(--color-secondary-500)',
    };
    return colors[proficiency];
  };

  return (
    <section className={styles.techStack} id="tech-stack">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Technology Stack</h2>
          <p className={styles.subtitle}>
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Categories */}
        <div className={styles.categories}>
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>{category}</h3>

                <div className={styles.techGrid}>
                  {technologies
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                      <motion.div
                        key={tech.name}
                        className={styles.techItem}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={styles.techCard}>
                          <div className={styles.techIcon}>{tech.icon}</div>
                          <div className={styles.techInfo}>
                            <span className={styles.techName}>{tech.name}</span>
                            <div
                              className={styles.proficiency}
                              style={{
                                backgroundColor: getProficiencyColor(
                                  tech.proficiency
                                ),
                              }}
                            >
                              <span className={styles.proficiencyText}>
                                {tech.proficiency}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          className={styles.legend}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.legendTitle}>Proficiency Levels</div>
          <div className={styles.legendItems}>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: 'var(--color-accent-500)' }}
              />
              <span>Expert - Production experience with deep knowledge</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: 'var(--color-primary-500)' }}
              />
              <span>Advanced - Strong working knowledge and regular use</span>
            </div>
            <div className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: 'var(--color-secondary-500)' }}
              />
              <span>Intermediate - Learning and building projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
