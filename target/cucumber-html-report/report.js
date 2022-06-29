$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:login.feature");
formatter.feature({
  "name": "SJPhysics Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SJPhysics Successful Login  #Without examples",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userIsAlreadyInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tile of login page is SJ PHYSICS",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.tileOfLoginPageIsSJPhysics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Chathunga\" and \"Chathunga\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userEntersIdAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "SJPhysics Successful Login  #With examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "tile of login page is SJ PHYSICS",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "password"
      ]
    },
    {
      "cells": [
        "Chathunga",
        "Chathunga"
      ]
    }
  ]
});
formatter.scenario({
  "name": "SJPhysics Successful Login  #With examples",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userIsAlreadyInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tile of login page is SJ PHYSICS",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.tileOfLoginPageIsSJPhysics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Chathunga\" and \"Chathunga\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userEntersIdAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});