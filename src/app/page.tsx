/**
 * Home Page - Properly importing and rendering projects
 */

import React from 'react';
import { Hero, ProjectCard } from '@/components';
import type { Project } from '@/types';
import projectsData from '@/data/projects.json';

export default function HomePage() {
  // Extract projects array and cast to proper type
  const projects = projectsData.projects as Project[];

  // Get featured projects for the home page
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />

      {/* Featured Projects Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              fontSize: '2.5rem',
            }}
          >
            Featured Projects
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
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
    </>
  );
}
