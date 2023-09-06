import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.goto('https://search.yahoo.com/search?p=timberframe&fr=yfp-t&fr2=p%3Afp%2Cm%3Asb&ei=UTF-8&fp=1');
  await page.getByRole('tab', { name: 'Images' }).getByRole('link').click();
  var input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}
  await page.waitForTimeout(3000);
});