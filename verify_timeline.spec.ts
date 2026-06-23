import { test, expect } from '@playwright/test';

test('verify process timeline layout', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Wait for the section to be in view or just scroll to it
  const section = page.locator('section:has-text("Our Process")');
  await section.scrollIntoViewIfNeeded();

  // Take a screenshot of the timeline section
  await section.screenshot({ path: 'verification/process_timeline_fixed.png' });

  // Check if icons are visible
  const icons = page.locator('section:has-text("Our Process") svg').filter({ hasNotText: /.*/ }); // Lucide icons are SVGs
  const count = await icons.count();
  console.log(`Found ${count} icons in Process section`);

  // Check if the progress line exists
  const line = page.locator('div.bg-gradient-to-b');
  await expect(line).toBeVisible();
});
