import { test, expect } from '@playwright/test';

test('vertafore about checker', async ({ page }) => {
  await page.goto('https://www.vertafore.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).click ('about');
  await page.getByLabel('Vertafore Abouth').first().click();
//  await page.getByRole('link', { name: 'Images', exact: true }).click();
  await page.waitForTimeout(3000);
});