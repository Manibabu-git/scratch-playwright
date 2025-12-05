const { test, expect } = require("@playwright/test");

// Handling frames using frame object
test("Handling inner frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  frame.locator('[name="mytext3"]').fill("you are frame 3");
  const childFrames = frame.childFrames();
  console.log(childFrames.length);
  await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();
  await page.waitForTimeout(3000);
});
