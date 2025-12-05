import { test } from "@playwright/test";

test("Mouse hover action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator(".dropbtn").hover();
  await page.locator('//a[text()="Laptops"]').hover();
  await page.locator('//a[text()="Laptops"]').click();
  await page.waitForTimeout(5000);
});
