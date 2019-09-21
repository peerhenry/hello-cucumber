Feature: Is it Friday yet?
  Everybody wants to know if it's Friday

  Scenario Outline: Sunday is not Friday
    Given today is "<day>"
    When I ask whether it is Friday
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | Friday         | Yes    |
    | Sunday         | Nope   |
    | Anything else! | Nope   |