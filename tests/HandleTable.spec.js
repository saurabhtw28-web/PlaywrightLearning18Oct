import { test } from '@playwright/test'

test('Handle Table', async ({ page}) => {
    await page.goto('')

    page.locator('tbody tr td').filter({hasText: 'Ravi'})

    // for dynamic web tables
    page.locator('tr').filter({hasText: 'Ravi'})
})