import { test, expect } from '@playwright/test';

test('應該能夠訪問首頁', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  expect(title).toBe('我的網站');
});
