import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  //await page.locator('#loginusername').press('CapsLock');
  //await page.locator('#loginusername').fill('M');
  // await page.locator('#loginusername').press('CapsLock');
  await page.locator("#loginusername").fill("Manibabu");
  //await page.locator('#loginusername').press('Tab');
  // await page.locator('#loginpassword').press('CapsLock');
  // await page.locator('#loginpassword').fill('M');
  // await page.locator('#loginpassword').press('CapsLock');
  await page.locator("#loginpassword").fill("Manibabu@373");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
});
