import { test } from '@playwright/test'

test('Date Picker', async ({ page}) => {
    await page.goto('')

    // Simple Approach
    await page.locator('#dob').fill('2026-10-27')

    // Mostly used approach in webApplication

    // Open the calendar
    await page.locator('#date').click();
    // Select the date 27 October 2026
    await page.locator('[data-date="2026-10-27"]').click();
})