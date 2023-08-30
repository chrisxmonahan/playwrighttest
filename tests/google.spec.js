import { test, expect } from '@playwright/test';

test('google search checker', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('mustang');
  await page.getByLabel('Google Search').first().click();
  await page.getByRole('link', { name: 'Images', exact: true }).click();
});