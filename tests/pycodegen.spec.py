#=====================
#Code was generated through this command "npx playwright codegen -o ./tests/pycodegen.spec.py --target python"
#=============================================================

import re
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://demoblaze.com/")
    page.get_by_role("link", name="Log in").click()
    page.locator("#loginusername").click()
    page.locator("#loginusername").fill("Manibabu")
    page.locator("#loginpassword").fill("Manibabu@373")
    page.get_by_role("button", name="Log in").click()
    page.get_by_role("link", name="Log out").click()
    page.close()

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
