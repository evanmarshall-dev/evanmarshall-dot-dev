/**
 * ProjectCard Component
 *
 * TypeScript Learning:
 * - This component demonstrates how to use imported types from our types file
 * - It shows optional props and proper prop destructuring
 * - Uses Next.js Image component for optimal image loading
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Card } from '@/components/ui';
import type { Project } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
  className,
}) => {
  const cardClasses = clsx(
    styles.projectCard,
    {
      [styles.featured]: featured,
    },
    className
  );

  return (
    <motion.div
      className={cardClasses}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Card hover className={styles.card}>
        {/* Project Image */}
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className={styles.image}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />

          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={clsx(styles.status, styles[project.status])}>
              {project.status.replace('-', ' ')}
            </span>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className={styles.featuredBadge}>
              <span>Featured</span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className={styles.content}>
          {/* Title */}
          <h3 className={styles.title}>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.titleLink}
            >
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className={styles.description}>{project.description}</p>

          {/* Technologies */}
          <div className={styles.technologies}>
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className={styles.techMore}>
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Project Links */}
          <div className={styles.links}>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.viewMore}
            >
              View Details
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
                aria-label={`View ${project.title} live demo`}
              >
                Live Demo
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              GitHub
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
