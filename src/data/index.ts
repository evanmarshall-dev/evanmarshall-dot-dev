/**
 * Data Barrel Export
 *
 * Centralizes all data imports for easy access throughout the app
 */

import projectsData from './projects.json';
import servicesData from './services.json';

// Re-export the data with type casting
export const projects = projectsData.projects;
export const services = servicesData.services;

// Export the raw data objects if needed
export { default as projectsRaw } from './projects.json';
export { default as servicesRaw } from './services.json';

// Type-safe data exports
export type { Project, Service } from '@/types';
