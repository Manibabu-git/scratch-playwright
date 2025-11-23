const { test, expect } = require("@playwright/test");
const { promiseHooks } = require("v8");
test.skip("Handling alert", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.locator(".active .analystic").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    dialog.accept();
  });
  await page.locator('button[onclick="alertbox()"]').click();
});

test.skip("Handling confirm alert", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.getByText("Alert with OK & Cancel ").click();
  await page.getByRole("button", { onclick: "confirmbox()" }).click();
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a Button !");
    dialog.accept();
    expect(await page.locator('p[id="demo"]').textContent()).toBe(
      "You pressed Ok"
    );
  });
  await page.getByRole("button", { onclick: "confirmbox()" }).click();
  console.log(await page.locator("p[id='demo']").textContent());
});

test("Handling the prompt", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name");
    expect(dialog.defaultValue()).toContain("Automation Testing user");
    dialog.accept("Nothing");
  });
  await page.getByText("Alert with Textbox").click();
  await page.getByRole("button", { onclick: "promptbox()" }).click();
});
