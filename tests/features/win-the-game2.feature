Feature: As a player I want to win in case i get 5 espresso using another scenario

Scenario: I should buy 2 espresso in the cafee
    Given that I have started the game by navigating to "http://localhost:3000"
    And that I navigated to the position "inside the cafe"
    And that my position is "inside the cafe"
    Then click repeatedly button "Buy an espresso"
    And money decreses till 0

Scenario: I should be given a money by the band
    Given that I navigated to the position "at the concert"
    And that my position is "at the concert"
    When I wait long enough for the description to contain the text "jam with us"
    Then click the button "Jam with the band"
    
Scenario: I should buy one more espresso after playing with band
    Given that I navigated to the position "inside the cafe"
    And that my position is "inside the cafe"
    Then click the button "Buy an espresso"
    And money decreses till 0


Scenario: I should be given a beer by the bartender
    Given that I navigated to the position "in a crowded bar"
    And that my position is "in a crowded bar"
    When I wait long enough for the description to contain the text "The bartender offers you a can of beer for free"
    Then my hipster bag should contain "a can of beer"

Scenario: I should give beer to barista
    Given that I navigated to the position "inside the cafe"
    And that my position is "inside the cafe"
    When I wait long enough for the description to contain the text "if someone would just bring me a beer"
    Then click the button "Give beer to barista"
    Then my hipster bag should contain "nothing cool"

Scenario: Win the game
   Then my position should be "I won"