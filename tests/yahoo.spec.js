//import { test, expect } from '@playwright/test';

//test('yahoo search checker', async ({ page }) => {
// await page.goto('https://www.yahoo.com/');
//  await page.getByLabel('Search', { exact: true }).click();
//  await page.getByLabel('Search', { exact: true }).fill('timberframe');
//  await page.getByLabel('Yahoo Search').first().click();
//  await page.getByRole('link', { name: 'Images', exact: true }).click();
//  await page.waitForTimeout(3000);
//});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.goto('https://search.yahoo.com/search?p=timberframe&fr=yfp-t&fr2=p%3Afp%2Cm%3Asb&ei=UTF-8&fp=1');
  await page.getByRole('tab', { name: 'Images' }).getByRole('link').click();
  await page.waitForTimeout(3000);
});