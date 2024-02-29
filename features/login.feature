Feature: Swag Labs - Login

  Scenario: As a standard_user, I can log in successfully
    Given I am on the login page
    When I login with "standard_user"
    Then I should see home page

   Scenario: As a locked_out_user, I should get alert
    Given I am on the login page
    When I login with "locked_out_user"
    Then I should see error "Epic sadface: Sorry, this user has been locked out."

  Scenario: As a problem_user, I should get alert
    Given I am on the login page
    When I login with "problem_user"
    Then I should see home page
 