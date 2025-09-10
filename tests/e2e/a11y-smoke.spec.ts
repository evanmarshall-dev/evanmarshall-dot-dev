import { test, expect } from '@playwright/test';

test('home has a main landmark and navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.locator('nav[aria-label="Main navigation"]')).toBeVisible();
});

test('projects page has breadcrumb nav', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
});
