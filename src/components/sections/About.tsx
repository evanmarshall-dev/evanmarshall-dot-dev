/**
 * About Section Component
 *
 * Brief introduction section showcasing personal story and passion for development
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Section Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.subtitle}>
              Passionate full-stack developer crafting digital experiences that
              make a difference
            </p>
          </motion.div>

          <div className={styles.grid}>
            {/* Profile Image */}
            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/profile.png"
                  alt="Evan Marshall - Full Stack Developer"
                  width={400}
                  height={400}
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className={styles.card}>
                <div className={styles.story}>
                  <p className={styles.introduction}>
                    Hi, I&apos;m <strong>Evan Marshall</strong>, a passionate
                    full-stack developer based in Canada with over 8 years of
                    experience crafting digital solutions that bridge the gap
                    between innovative design and robust functionality.
                  </p>

                  <p>
                    My journey into development began with curiosity about how
                    websites work, which quickly evolved into a deep passion for
                    creating seamless user experiences backed by solid, scalable
                    architecture. I specialize in modern web technologies
                    including React, Next.js, TypeScript, and Node.js.
                  </p>

                  <p>
                    What drives me is the opportunity to solve complex problems
                    through code, whether it&apos;s optimizing performance for
                    better user experience, architecting scalable systems, or
                    mentoring teams to adopt best practices. I believe great
                    software is built through collaboration, continuous
                    learning, and attention to detail.
                  </p>

                  <div className={styles.highlights}>
                    <div className={styles.highlight}>
                      <span className={styles.number}>8+</span>
                      <span className={styles.label}>Years Experience</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.number}>50+</span>
                      <span className={styles.label}>Projects Delivered</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.number}>20+</span>
                      <span className={styles.label}>Happy Clients</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
