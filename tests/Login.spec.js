import { expect, test } from '@playwright/test';

test('Login as Admin', async({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('Learning@830$3mK2')
    await page.getByRole('radio',{name:'Admin'}).click()
    await page.getByRole('checkbox',{name:/Agree/}).click()
    await page.getByRole('button',{name:'Sign In'}).click()

    // validation for home page
    await expect(page).toHaveTitle('ProtoCommerce')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop')
})

test('Login as User', async({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy')
    await page.locator('#password').fill('Learning@830$3mK2')
    await page.getByRole('radio',{name:'User'}).click()
    await page.getByRole('checkbox',{name:/Agree/}).click()
    await page.getByRole('button',{name:'Sign In'}).click()

    // validation for home page
    await expect(page).toHaveTitle('ProtoCommerce')
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop')
})