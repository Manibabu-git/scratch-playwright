const { webkit, devices } = require("playwright");

(async () => {
  const browser = await webkit.launch({
    headless: false,
  });
  const context = await browser.newContext({
    ...devices["iPhone 13"],
  });
  const page = await context.newPage();
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("Manibabu");
  await page.locator("#loginpassword").fill("Manibabu@373");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Log out" }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();
