/**
 * Home Page - Complete portfolio homepage with all sections
 */

import React from 'react';
import {
  Hero,
  About,
  Services,
  TechStack,
  ProjectCard,
  ContactCTA,
  Process,
  Testimonials,
  FAQ,
} from '@/components';
import type { Project } from '@/types';
import { projects } from '@/data';
import styles from '@/app/page.module.css';

export default function HomePage() {
  // Extract projects array and cast to proper type
  const allProjects = projects as Project[];

  // Get featured projects for the home page
  const featuredProjects = allProjects.filter((project) => project.featured);
  return (
    <>
      <Hero />

      <About />

      <Services />

      <TechStack />

      {/* Featured Projects Section */}
      <section className={styles.featuredProjects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>

          {/* Show message if no featured projects */}
          {featuredProjects.length === 0 && (
            <p style={{ textAlign: 'center', color: '#666' }}>
              No featured projects available at the moment.
            </p>
          )}
        </div>
      </section>

      <Process />

      <Testimonials />

      <FAQ />

      <ContactCTA />
    </>
  );
}
