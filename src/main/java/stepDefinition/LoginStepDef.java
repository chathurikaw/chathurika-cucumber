package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {

	WebDriver driver;
	
	@Given("User is already in login page")
	public void userIsAlreadyInLoginPage() {
		System.setProperty("webdriver.gecko.driver","D:\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.sjphysics.com/Identity/Account/Login");
	}

	@When("tile of login page is SJ PHYSICS")
	public void tileOfLoginPageIsSJPhysics() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("SJ PHYSICS",title);
	}

	@And("user enters \\\"(.*)\\\" and \\\"(.*)\\\"$")
	public void userEntersIdAndPassword(String id, String password) {
	    driver.findElement(By.id("inputEmail")).sendKeys(id);
	    driver.findElement(By.id("inputPassword")).sendKeys(password);
	}

	@And("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath ("//*[contains(text(),'Sign in')]")).click();
	}

	@Then("user is on home page")
	public void userIsOnHomePage() {
		WebElement t = driver.findElement(By.id("manage"));
        Assert.assertEquals(t.isDisplayed(),true);
        System.out.println("Login Successfull");
	}

	 @After()
     public void tearDown(){
         driver.close();
    }
	 
}
