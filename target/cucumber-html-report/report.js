$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:login.feature");
formatter.feature({
  "name": "SJPhysics Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SJPhysics Successful Login",
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
  "name": "user enters id and password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.userEntersIdAndPassword()"
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