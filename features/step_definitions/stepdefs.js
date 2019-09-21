import assert from 'assert'
import { Given, When, Then } from 'cucumber'

function isItFriday(day) {
  return day === 'Friday' ? 'Yes' : 'Nope'
}

Given('today is {string}', function(day) {
  this.today = day
})

When('I ask whether it is Friday', function() {
  this.actualAnswer = isItFriday(this.today)
})

Then('I should be told {string}', function(expectedAnswer) {
  assert.equal(expectedAnswer, this.actualAnswer)
})
