import { test, expect } from '@playwright/test';

test('yahoo search checker', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('timberframe');
  await page.getByLabel('Yahoo Search').first().click();
  await page.getByRole('link', { name: 'Images', exact: true }).click();
});