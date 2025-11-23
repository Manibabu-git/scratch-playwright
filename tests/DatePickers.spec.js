const { test } = require("@playwright/test");

test("Handling date picker", async ({ page }) => {
  const year = "2026";
  const month = "December";
  const date = "19";
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#datepicker").click();

  while (true) {
    let currentMonth = await page
      .locator('[class="ui-datepicker-month"]')
      .textContent();
    let currentYear = await page.locator(".ui-datepicker-year").textContent();

    if (year == currentYear && month == currentMonth) {
      const days = await page.$$('[data-handler="selectDay"] a');
      for (let dy of days) {
        let dt = await dy.textContent();
        if (date == dt) {
          await dy.click();
        }
      }
      break;
    } else if (
      currentYear < year ||
      (currentYear == year &&
        Month.indexOf(currentMonth) < Month.indexOf(month))
    ) {
      await page.locator('[class="ui-icon ui-icon-circle-triangle-e"]').click();
    } else {
      await page.locator('[class="ui-icon ui-icon-circle-triangle-w"]').click();
    }
  }
  await page.waitForTimeout(5000);
});
