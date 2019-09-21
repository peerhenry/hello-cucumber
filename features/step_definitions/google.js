import assert from 'assert'
// import puppeteer from 'puppeteer'
import { When, Then } from 'cucumber'

When('I visit Google', async function() {
  await this.gotoGoogle() // call function in world.js
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
