//import { test, expect } from "@playwright/test";
const { test, expect } = require("@playwright/test");

test("locators test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  //locating an element using property[id]
  await page.locator("id=login2").click();
  //await page.click('id=login2')

  //locating an element by using CSS
  await page.locator("#loginusername").fill("Manibabu");
  //await page.fill('#loginusername','Manibabu');

  await page.fill("#loginpassword", "Manibabu@373");
  await page.click('button[onclick="logIn()"]');
  await expect(page.locator('a[onclick="logOut()"]')).toBeVisible();
});
