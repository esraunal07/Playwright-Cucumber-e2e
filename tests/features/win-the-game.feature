Feature: As a player I want to win in case i get 5 espresso

Scenario: I should be given a beer by the bartender
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "in a crowded bar"
    And that my position is "in a crowded bar"
    When I wait long enough for the description to contain the text "The bartender offers you a can of beer for free"
    Then my hipster bag should contain "a can of beer"

Scenario: I should be given a money by the group
    Given that I navigated to the position "at the concert"
    And that my position is "at the concert"
    When I wait long enough for the description to contain the text "jam with us"
    Then click the button "Jam with the band"
    Then money inscreases till 15

Scenario: I should give beer to barista
    Given that I navigated to the position "inside the cafe"
    And that my position is "inside the cafe"
    When I wait long enough for the description to contain the text "if someone would just bring me a beer"
    Then click the button "Give beer to barista"
    Then my hipster bag should contain "nothing cool"

Scenario: Win the game
   When description to contain the text "He pours you a double espresso"
   Then click repeatedly button "Buy an espresso" until I win
   Then my position should be "I won"