const { test } = require("@playwright/test");

test("Drag and drop", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const src = await page.locator("div[id='draggable']");
  const dest = await page.locator('div[id="droppable"]');

  //approach 1
  /*
  await src.hover();
  await page.mouse.down();
  await dest.hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
*/

  await src.dragTo(dest);
  await page.waitForTimeout(5000);
});
