import { test } from '@playwright/test'

test('Date Picker', async ({ page}) => {
    await page.goto('')

    //click()
    await page.getByRole('button',{name:'Submit'}).click()

    // dbclick()
    await page.getByRole('button',{name:'Submit'}).dblclick()

    //rightclick()
    await page.getByRole('button',{name:'Submit'}).click({
        button: 'right'
    })

    // mouse hover
    await page.getByRole('button',{name:'Submit'}).hover()

    // mouse movement
    await page.mouse.move('300', '600')

    // drag and drop
    await page.locator('source').dragTo(page.locator('target'))
})