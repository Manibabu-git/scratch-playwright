const { test, expect } = require("@playwright/test");

let page;
test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: { dir: "tests/Records/" },
  });
  page = await context.newPage();
  await page.goto("https://demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Manibabu");
  await page.locator("#loginpassword").fill("Manibabu@373");
  await page.locator('//button[text()="Log in"]').click();
});

test.afterEach(async () => {
  await page.close();
});
test("Home page", async () => {
  const count = 9;
  const products = await page.locator(".hrefch");
  await page.screenshot({ path: "tests/Screenshots/homepage.png" });
  expect(await products).toHaveCount(count);
});
test("Add to cart", async () => {
  const products = await page.locator(".card-title a");
  const p = "Nokia lumia 1520";
  for (let i = 0; i < (await products.count()); i++) {
    let prod = await products.nth(i).textContent();
    if ((await prod) === p) {
      await products.nth(i).click();
      break;
    } else {
      console.log(`Product ${p} not found on index ${i}`);
    }
  }
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
  await page.waitForSelector('[onclick="addToCart(2)"]');
  await page.locator('[onclick="addToCart(2)"]').click();
});
