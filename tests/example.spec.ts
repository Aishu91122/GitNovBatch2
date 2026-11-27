import { test, expect } from '@playwright/test';

test('1234567', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});



