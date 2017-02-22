#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@tag
Feature: LogIn test script
	I want to test login for different users


Scenario Outline: Test Login with valid credentials
Given I go to Login Page
When I login with "<username>" "<password>"
Then I verify I am on dashboard
When I LogOut
Then I am on Login Page

Examples:
    |username  		 |password 			|
    |admin				 |admin					|
    |linda.anderson|linda.anderson|
    |anthony.nolan |anthony.nolan	|
    |peter.mac		 |peter.mac		|
