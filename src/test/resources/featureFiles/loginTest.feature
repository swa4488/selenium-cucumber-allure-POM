Feature: LogIn test script
  I want to test login for different users


  Scenario Outline: Test Login with valid credentials
    Given I go to Login Page
    When I login with "<username>" "<password>"
    Then I verify I am on dashboard
    When I LogOut
    Then I am on Login Page

    Examples:
      | username       | password       |
      | admin          | admin123       |
      | linda.anderson | linda.anderson |
