/**
 * Projects Page - Shows all projects
 *
 * TypeScript Learning:
 * - This page demonstrates server-side data loading
 * - Uses array methods like filter and map with proper typing
 */

import React from 'react';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { ProjectCard } from '@/components';
import type { Project } from '@/types';
import projectsData from '@/data/projects.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects, including full-stack applications, APIs, and modern web solutions.',
};

export default function ProjectsPage() {
  const projects = projectsData.projects as Project[];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Page Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.description}>
            A collection of my work showcasing modern web development practices,
            from full-stack applications to specialized tools and libraries.
          </p>
        </header>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Empty state (if no projects) */}
        {projects.length === 0 && (
          <div className={styles.emptyState}>
            <p>No projects available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
