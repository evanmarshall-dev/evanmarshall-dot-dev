import { MetadataRoute } from 'next';
import projectsData from '@/data/projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.evanmarshall.dev';
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/projects',
    '/services',
    '/process',
    '/faq',
    '/testimonials',
    '/tech',
    '/contact',
    '/about',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = (
    projectsData.projects || []
  ).map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
