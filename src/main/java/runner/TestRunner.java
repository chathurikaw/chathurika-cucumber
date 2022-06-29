package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\new-workspace\\CucumberTestNew\\src\\main\\java\\features",
		glue={"stepDefinition"},
		plugin = {"pretty","html:target/cucumber-html-report"}
		)

public class TestRunner {


	
}
