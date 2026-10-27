import { test, expect } from '@playwright/test'

test('DropDown', async({ page }) => {
    
    await page.goto('')

    // select by value
    await page.locator('#country').selectOption('In')

    // select by label
    await page.locator('#country').selectOption({
        label: 'India'
    })

    // select by index
    await page.locator('#country').selectOption({
        index: '0'      //IN
    })
})