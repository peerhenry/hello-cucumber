import assert from 'assert'
import puppeteer from 'puppeteer'
import { When, Then, Before, After } from 'cucumber'

Before(async function() {
  const browser = await puppeteer.launch({
    headless: true
  })
  this.browser = browser
  const page = await browser.newPage()
  this.page = page
})

After(function() {
  this.browser.close()
})

When('I visit Google', async function() {
  await this.page.goto('https://www.google.com')
})

Then('I should get a response', async function() {
  // assert title is Google
  const title = await this.page.title()
  assert.equal('Google', title)
  // assert there is at least 1 input element
  const hasInput = await this.page.evaluate(() => {
    return document.getElementsByTagName('input').length > 0
  })
  assert(hasInput)
})