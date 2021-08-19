Feature: Registration
  Register Functionality

  Scenario: User Successfully Register With Valid Params (Medium Password)
    Given I navigate to the application
    Given I fill form register
    When I click register button
    Then I should see page count down


