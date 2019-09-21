import { BeforeAll, AfterAll, Before, After } from 'cucumber'
import puppeteer from 'puppeteer'

let browser = null
let page = null

// ==== BeforeAll and AfterAll do not have access to test scope 'this'
// ==== Before and After do

// executed once before any test
BeforeAll(async function() {
  console.log('### BeforeAll hook is triggered, "this" is truthy:', !!this) // this: undefined
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
})

// executed once after all tests
AfterAll(async function() {
  console.log('### AfterAll hook is triggered, "this" is truthy:', !!this) // this: undefined
  browser.close()
})

// executed before every test
Before(function() {
  console.log('### Before hook is triggered, "this" is truthy:', !!this) // this: {}
  // assign created browser and page to test scope
  this.browser = browser
  this.page = page
})

// executed after every test
After(async function() {
  console.log('### After hook is triggered, "this" is truthy:', !!this) // this: { <bigass object> }
})
