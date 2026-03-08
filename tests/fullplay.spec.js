const { test, expect } = require('@playwright/test');

test.describe('図鑑アプリ', () => {
  test('トップページが表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.header-title')).toHaveText('いきもの ずかん');
    await page.screenshot({ path: 'tests/screenshots/01_top.png', fullPage: true });
  });

  test('タブ切り替え - どうぶつ/むし/さかな', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.zukan-grid');

    // どうぶつタブ（デフォルト）
    await page.screenshot({ path: 'tests/screenshots/02_animals.png', fullPage: true });

    // むしタブ
    const tabs = page.locator('.zukan-tab');
    await tabs.nth(1).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tests/screenshots/03_bugs.png', fullPage: true });

    // さかなタブ
    await tabs.nth(2).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tests/screenshots/04_fish.png', fullPage: true });
  });

  test('動物詳細ページが表示される', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.zukan-grid');

    // 最初の動物をクリック
    await page.locator('.zukan-item').first().click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tests/screenshots/05_detail.png', fullPage: true });
  });

  test('言語切替が動作する', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.zukan-grid');

    // ENボタンをクリック
    await page.locator('#lang-toggle').click();
    await page.waitForTimeout(500);
    await expect(page.locator('.header-title')).toHaveText('Animal Encyclopedia');
    await page.screenshot({ path: 'tests/screenshots/06_english.png', fullPage: true });

    // JAに戻す
    await page.locator('#lang-toggle').click();
    await page.waitForTimeout(500);
    await expect(page.locator('.header-title')).toHaveText('いきもの ずかん');
  });

  test('画像が読み込まれる', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.zukan-grid');

    // 最初の画像がロードされているか
    const firstImg = page.locator('.zukan-item img').first();
    await expect(firstImg).toBeVisible();

    const naturalWidth = await firstImg.evaluate(img => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });
});
