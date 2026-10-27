import { chromium } from '@playwright/test'

// browser launch
const browser = await chromium.launch({ headless: false })    //headed

// browserContext
const context1 = await browser.newContext()

const context2 = await browser.newContext()

// page
const page = await context1.newPage()
await page.goto('')