import { test, expect } from '@playwright/test';

test('應該能夠訪問首頁', async ({ page }) => {
  await page.goto('/');
  expect(await page.title()).toBe('首頁');
});
