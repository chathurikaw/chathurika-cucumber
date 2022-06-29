Feature: SJPhysics Login feature

Scenario: SJPhysics Successful Login

Given User is already in login page
When tile of login page is SJ PHYSICS
And user enters id and password
And user clicks on login button
Then user is on home page
