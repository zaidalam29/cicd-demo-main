const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Show browser
  const page = await browser.newPage();

  // 1. Open the website
  await page.goto('https://www.xyz.com/', { waitUntil: 'load' });

  // 2. Click on LOGIN button (top-right)
  await page.waitForSelector('a[href*="account/login"]'); // Make sure login link is visible
  await page.click('a[href*="account/login"]');

  // 3. Wait for login form
  await page.waitForSelector('input[name="email"]');

  // 4. Fill email and password
  await page.fill('input[name="email"]', 'badshahkhan123@gmail.com');
  await page.fill('input[name="password"]', '123123123');

  // 5. Click Login button
  await page.click('button[type="submit"]');

  // 6. Wait for login to complete
  await page.waitForTimeout(5000); // Wait 5 sec for redirect or login complete

  // 7. Screenshot after login
  await page.screenshot({ path: 'after-login.png' });

  await browser.close();
})();
