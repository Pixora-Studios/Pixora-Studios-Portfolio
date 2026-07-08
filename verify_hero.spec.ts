import { test, expect } from '@playwright/test';

test('HeroSection cluster verification', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000');
  // Wait for the hero section and animations
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verify_hero_cluster.png' });
});
