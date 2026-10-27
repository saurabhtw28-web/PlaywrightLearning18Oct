import { test } from '@playwright/test'

test('Date Picker', async ({ page}) => {

    // fill
    await page.locator('').fill('Ravi')

    // Type text
    await page.keyboard.type('Hello Ravi')

    // Perform 'Enter' click
    await page.locator('').press('Enter')

    // Keyborad sortcuts
    await page.keyboard.press('Control+C')      // copy
    await page.keyboard.press('Control+V')      // paste
    await page.keyboard.press('Control+S')      // save
})
