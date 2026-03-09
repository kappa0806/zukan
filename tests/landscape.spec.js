const { test, expect } = require('@playwright/test');

test('横画面 Pixel8Pro 詳細ビュー', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 2400, height: 1080 },
    deviceScaleFactor: 3,
  });
  const page = await context.newPage();
  await page.goto('/');
  await page.waitForSelector('.zukan-grid');

  // かんがるーを探してクリック（26番目付近）
  await page.locator('.zukan-item').nth(25).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'tests/screenshots/07_landscape_detail.png' });

  await context.close();
});
