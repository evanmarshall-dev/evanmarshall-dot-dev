import { describe, it, expect } from 'vitest';
import projectsData from '@/data/projects.json';

describe('projects data', () => {
  it('has unique slugs and required fields', () => {
    const slugs = new Set<string>();

    for (const p of projectsData.projects) {
      expect(p.id).toBeDefined();
      expect(p.title).toBeDefined();
      expect(p.slug).toBeDefined();
      expect(p.description).toBeDefined();

      expect(slugs.has(p.slug)).toBe(false);
      slugs.add(p.slug);
    }
  });
});
