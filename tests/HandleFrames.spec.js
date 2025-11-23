const { test, expect } = require("@playwright/test");

// Handling frames using frame object
test.skip("Handling through frame object", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame.fill("[name='mytext1']", "Hello");
  await page.waitForTimeout(4000);
});

//Handling frames using frameLocator

test("Handling frames using frame locator", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  await page
    .frameLocator('frame[src="frame_1.html"]')
    .locator('input[name="mytext1"]')
    .fill("Hello");
  await page.waitForTimeout(4000);
});
