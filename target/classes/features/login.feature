Feature: SJPhysics Login feature

Scenario: SJPhysics Successful Login  #Without examples

Given User is already in login page
When tile of login page is SJ PHYSICS
And user enters "Test" and "Test"
And user clicks on login button
Then user is on home page

Scenario Outline: SJPhysics Successful Login  #With examples

Given User is already in login page
When tile of login page is SJ PHYSICS
And user enters "<id>" and "<password>"
And user clicks on login button
Then user is on home page

Examples:
| id   | password  |
| Test | Test      |