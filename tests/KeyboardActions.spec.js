const { test } = require("@playwright/test");

test("Keyboard events", async ({ page }) => {
  await page.goto("https://text-compare.com/");
  await page.locator('[id="inputText1"]').fill("Hello world!!!!!!!!!!!!!!!!!");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  await page.keyboard.press("Control+V");

  await page.waitForTimeout(3000);
});
