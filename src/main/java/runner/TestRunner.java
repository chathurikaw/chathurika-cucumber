package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\new-workspace\\CucumberTestNew\\src\\main\\java\\features",
		glue={"stepDefinition"},
		plugin = {"pretty","html:target/cucumber-html-report","json:target/cucumber-json-report","junit:target/cucumber-junit-report"},
		dryRun = false,                                                         // test will not execute. Just check whether mapping is there for all features
		monochrome = true,                                                      // Display console output is readable manner
		strict = true                                                           // Fails test if pending/undefined step definitions are there (Pending Exception)
		)

public class TestRunner {


	
}
