const { test, expect } = require("@playwright/test");

test("double click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const actionbutton = await page.locator('button[ondblclick="myFunction1()"]');

  await actionbutton.dblclick();
  await page.waitForTimeout(2000);
  const text = await page.locator('[id="field2"]').inputValue();
  expect(text).toBe("Hello World!");
});

test("right click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const actionbutton = await page.locator('button[ondblclick="myFunction1()"]');
  await actionbutton.click({ button: "right" });
  await page.waitForTimeout(5000);
});
