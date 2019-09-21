import { setWorldConstructor } from 'cucumber'

// Use world to set shared state for tests such as base url.
class World {
  constructor() {
    this.baseUrl = 'https://www.google.com'
  }

  async gotoGoogle() {
    // this.page was assigned in Before hook in hooks.js
    await this.page.goto(this.baseUrl)
  }
}

setWorldConstructor(World)
