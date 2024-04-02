<<<<<<< for-loop-test
import { test, expect } from '@playwright/test';

test('vertafore about checker', async ({ page }) => {
  await page.goto('https://www.vertafore.com/');
  await page.getByLabel('Vertafore About').first().click();
  await page.goto('https://www.vertafore.com/about/our-story');
  await page.waitForTimeout(3000);
>>>>>>> main
});