$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "LogIn test script",
  "description": "I want to test login for different users",
  "id": "login-test-script",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "login-test-script;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I go to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I login with \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify I am on dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I LogOut",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I am on Login Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "login-test-script;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "login-test-script;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 34,
      "id": "login-test-script;test-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 91004,
  "status": "passed"
});
formatter.before({
  "duration": 842646,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Test Login with valid credentials",
  "description": "",
  "id": "login-test-script;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I go to Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I login with \"admin\" \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I verify I am on dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I LogOut",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I am on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_go_to_login_page()"
});
formatter.result({
  "duration": 9175562577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 22
    }
  ],
  "location": "StepDefination.i_login_with(String,String)"
});
formatter.result({
  "duration": 3309598400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_verify_I_am_on_dashboard()"
});
formatter.result({
  "duration": 7157189,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_LogOut()"
});
formatter.result({
  "duration": 1380418313,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_am_on_login_page()"
});
formatter.result({
  "duration": 10944136,
  "status": "passed"
});
formatter.after({
  "duration": 78688,
  "status": "passed"
});
});