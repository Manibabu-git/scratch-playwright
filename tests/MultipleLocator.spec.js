const { test, expect } = require("@playwright/test");

test("Multiple locator", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.locator("id=login2").click();
  await page.locator("#loginusername").fill("Manibabu");
  await page.fill("#loginpassword", "Manibabu@373");
  await page.click('button[onclick="logIn()"]');
  await page.waitForSelector("div[id='tbodyid'] div h4 a");
  const products = await page.$$("div[id='tbodyid'] div h4 a");
  for (const product of products) {
    console.log(await product.textContent());
  }
});
