import { chromium } from '@playwright/test'

const browser = await chromium.launch({headless: false})    //headed