const { test, expect, chromium } = require("@playwright/test");
test("Handling multiple pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  const newPromise = context.waitForEvent("page"); // here we are waiting for an event to get newpage open in the same context by activate action.
  await page.locator('a[href="http://www.orangehrm.com"]').click(); //this action fulfills the above promise to it will store new page in the new promise
  const newPage = await newPromise;
  console.log(await newPage.title());
  await browser.close();
});
