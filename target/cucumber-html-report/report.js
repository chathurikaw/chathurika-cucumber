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
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #manage\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-5A7KV0R\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 101.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220608170832, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 12988, moz:profile: C:\\Users\\npcpw\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 77f92f84-2819-4ea1-bf8f-6c44fcbf4f8f\n*** Element info: {Using\u003did, value\u003dmanage}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinition.LoginStepDef.userIsOnHomePage(LoginStepDef.java:46)\r\n\tat ✽.user is on home page(file:login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});