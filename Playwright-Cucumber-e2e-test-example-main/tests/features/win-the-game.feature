Feature: As a player, I want to win when I collect 5 espressos.

Scenario: I should be given a beer by the bartender
    Given I am on the page "http://localhost:3000"
    And I moved to the location "in a crowded bar"
    And that my position is "in a crowded bar"
    When I wait long enough for the description to contain the text "The bartender offers you a can of beer for free"
    Then my hipster bag should contain "a can of beer"

Scenario: I should be given money by the group
    Given I moved to the location "at the concert"
    And  my current location is "at the concert"
    When I wait long enough for the description to contain the text "jam with us"
    Then click the button "Jam with the band"
    Then my money should increase until it reaches 15

Scenario: I should give beer to the barista
    Given I moved to the location "inside the cafe"
    And  my current location is "inside the cafe"
    When I wait long enough for the description to contain the text "if someone would just bring me a beer"
    Then click the button "Give beer to barista"
    Then my hipster bag should contain "nothing cool"

Scenario: Win the game by collecting 5 espressos
   When the description contains the text "He pours you a double espresso"
   Then click the button "Buy an espresso" repeatedly until I win
   Then my current location should be "I won"
