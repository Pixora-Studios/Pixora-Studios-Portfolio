import { test, expect } from '@playwright/test';

test('verify techstack dimensions', async ({ page }) => {
  await page.goto('http://localhost:3005');
  await page.waitForTimeout(5000);
  const heading = page.getByRole('heading', { name: 'Built With Modern Technology' });
  await heading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/techstack_updated.png', fullPage: false });
});
