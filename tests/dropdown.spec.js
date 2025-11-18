const { test, expect } = require("@playwright/test");

// test("dropdown validation", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   await page.locator("#male").click();
//   await page.waitForTimeout(5000);
// });
test("checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const days = await page.$$(".form-group input[type='checkbox']");
  for (const day of days) {
    if (day.textContent() == "sunday") await day.click();
  }
  await page.waitForTimeout(5000);
});
