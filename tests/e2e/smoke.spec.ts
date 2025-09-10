import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/projects',
  '/services',
  '/process',
  '/faq',
  '/testimonials',
  '/tech',
  '/contact',
  '/about',
];

test.describe('smoke', () => {
  for (const p of pages) {
    test(`loads ${p}`, async ({ page }) => {
      await page.goto(p);
      await expect(page.locator('header').first()).toBeVisible();
      await expect(page.locator('nav').first()).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }

  test('projects links resolve', async ({ page }) => {
    await page.goto('/projects');
    const first = page.locator('a', { hasText: 'View Details' }).first();
    await first.click();
    await expect(page).toHaveURL(/\/projects\//);
    await expect(page.locator('main')).toBeVisible();
  });
});
