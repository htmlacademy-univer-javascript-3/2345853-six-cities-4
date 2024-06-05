import { test, expect } from '@playwright/test';

test.describe('Переход к OfferPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Переход к сведениям о предложении при нажатии на карту', async ({ page }) => {
    await page.waitForSelector('.place-card');

    const firstOfferLink = await page.$('a[href^="/offer/"]');

    expect(firstOfferLink).not.toBeNull();

    await firstOfferLink!.click();
    await page.waitForSelector('.offer__host-title');

    const url = page.url();
    expect(url).toContain('/offer/');
  });
});
