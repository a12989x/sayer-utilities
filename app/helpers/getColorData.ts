import { chromium } from 'playwright';

import { env } from '~/env';

type Props = {
  code: string;
  brand: string;
  size: string;
};

export const getColorData = async ({ code, brand, size }: Props) => {
  const { SAYER_USERNAME, SAYER_PASSWORD } = env;

  const result = [];
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://online.gruposayer.com/');

  const usernameInput = page.locator('#UserName');
  const passwordInput = page.locator('#Password');
  const okButton = page.locator('#btnOk');

  const usernameInputIsVisible = await usernameInput.isVisible();
  const passwordInputIsVisible = await passwordInput.isVisible();

  if (usernameInputIsVisible && passwordInputIsVisible) {
    await usernameInput.fill(SAYER_USERNAME);
    await passwordInput.fill(SAYER_PASSWORD);
    await okButton.click();
    await page.waitForTimeout(1000);
  }

  const sayerPaletteButton = page.locator('a:has-text("Sayer Palette")');

  const sayerPaletteButtonIsVisible = await sayerPaletteButton.isVisible();

  if (sayerPaletteButtonIsVisible) {
    await sayerPaletteButton.click();
    await page.waitForTimeout(1000);

    const colorCode = page.locator('#Numero');
    const colorBrand = page.locator('#Base');
    const colorSize = page.locator('#Envase');
    const getTintsButton = page.locator('#ImageButton4');

    await colorCode.selectOption({ value: code });
    await colorBrand.selectOption({ value: brand });
    await colorSize.selectOption({ value: size });

    await getTintsButton.click();
    await page.waitForTimeout(1000);

    const rows = page.locator('table.text:nth-of-type(2) tr').filter({
      has: page.locator(
        'input[id^="coz"], input[id^="amoz"], input[id^="o64"], input[id^="o128"]',
      ),
    });

    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);

      const tint = await row.locator('input[id^="coz"]').inputValue();
      const oz = await row.locator('input[id^="amoz"]').inputValue();
      const oz64 = await row.locator('input[id^="o64"]').inputValue();
      const oz128 = await row.locator('input[id^="o128"]').inputValue();

      result.push({
        tint,
        Oz: parseInt(oz, 10),
        '1/64': parseInt(oz64, 10),
        '1/128': parseInt(oz128, 10),
      });
    }
  }

  await browser.close();

  return result;
};
