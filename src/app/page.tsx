/**
 * Home Page - Concise, CTA-first landing
 *
 * Keeps existing components available but focuses this page on:
 * - Clear value prop
 * - Primary CTAs
 * - Brief summaries clients care about
 * - A small featured projects teaser and a single testimonial
 */

import React from 'react';
import { Hero, ProjectCard, ContactCTA } from '@/components';
import type { Project } from '@/types';
import { projects, testimonials } from '@/data';
import { Button } from '@/components/ui';
import styles from '@/app/page.module.css';

export default function HomePage() {
  // Extract projects array and cast to proper type
  const allProjects = projects as Project[];

  // Get featured projects for the home page
  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .slice(0, 3);

  // Pick a single testimonial for a concise highlight
  const topTestimonial = (testimonials && testimonials[0]) || null;
  return (
    <>
      <Hero
        title="Web Developer for Growing Businesses"
        subtitle="Launch faster. Convert better. Maintain less."
        description="I design and build fast, reliable websites and apps that help small and mid-sized businesses win more customers and save time."
      />

      {/* Quick value summary with primary CTAs */}
      <section
        id="summary"
        className={`${styles.section} ${styles.quickIntro}`}
        aria-labelledby="summary-title"
      >
        <div className={styles.container}>
          <h2 id="summary-title" className={styles.sectionTitle}>
            What I deliver
          </h2>
          <ul className={styles.valueList}>
            <li>Conversion-focused sites that load fast and rank well</li>
            <li>Custom apps and integrations to automate operations</li>
            <li>Clear communication and dependable ongoing support</li>
          </ul>
          <div className={styles.sectionActions}>
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              aria-label="Browse featured projects"
            >
              See results
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              aria-label="Request a quote"
            >
              Get a quote
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section
        id="featured"
        className={`${styles.section} ${styles.featuredProjects}`}
        aria-labelledby="featured-projects-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="featured-projects-title" className={styles.sectionTitle}>
              Featured Projects
            </h2>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={true}
                priority={idx === 0}
              />
            ))}
          </div>

          {/* Show message if no featured projects */}
          {featuredProjects.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666' }}>
              No featured projects available at the moment.
            </p>
          )}

          <div className={styles.sectionActions}>
            <Button
              href="/projects"
              variant="secondary"
              size="md"
              aria-label="View all projects"
            >
              View all projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services at a glance */}
      <div className={styles.sectionDivider} aria-hidden="true" />
      <section
        id="services"
        className={`${styles.section} ${styles.servicesSummary}`}
        aria-labelledby="services-title"
      >
        <div className={styles.container}>
          <h2 id="services-title" className={styles.sectionTitle}>
            Popular services
          </h2>
          <ul className={styles.servicesList}>
            <li>Website design & development</li>
            <li>E-commerce (Shopify, headless)</li>
            <li>Web apps (Next.js, Node)</li>
            <li>APIs & third-party integrations</li>
            <li>Performance, SEO & accessibility</li>
          </ul>
          <div className={styles.sectionActions}>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              aria-label="Start a project"
            >
              Start a project
            </Button>
          </div>
        </div>
      </section>

      {/* Single testimonial highlight for social proof */}
      {topTestimonial && (
        <>
          <div className={styles.sectionDivider} aria-hidden="true" />
          <section
            id="testimonial"
            className={`${styles.section} ${styles.miniTestimonial}`}
            aria-labelledby="testimonial-title"
          >
            <div className={styles.container}>
              <h2 id="testimonial-title" className={styles.sectionTitle}>
                Client results
              </h2>
              <figure className={styles.miniTestimonialCard}>
                <blockquote className={styles.miniQuote}>
                  “{topTestimonial.quote}”
                </blockquote>
                <figcaption className={styles.miniAttribution}>
                  <span className={styles.miniName}>{topTestimonial.name}</span>
                  <span className={styles.miniMeta}>
                    {topTestimonial.role} at {topTestimonial.company}
                  </span>
                </figcaption>
              </figure>
            </div>
          </section>
        </>
      )}

      <ContactCTA />
    </>
  );
}
