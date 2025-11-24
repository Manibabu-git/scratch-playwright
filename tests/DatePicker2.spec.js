const { test } = require("@playwright/test");
test("Date picker example", async ({ page }) => {
  const month = "Mar";
  const year = "2028";
  const date = 15;
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator('[name="SelectedDate"]').click();
  const yearDropDown = await page.locator('[class="ui-datepicker-month"]');
  await yearDropDown.selectOption(month);
  const monthDropDown = await page.locator('[class="ui-datepicker-year"]');
  await monthDropDown.selectOption(year);

  const dates = await page.locator('[class="ui-state-default"]');
  await dates.nth(`${date - 1}`).click(); //nth is starts from 0.
  await page.locator("//input[@id='start-date']").type("10-12-2025");
  await page.waitForTimeout(3000);
});
