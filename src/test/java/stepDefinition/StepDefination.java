package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.LoginPage;

import org.junit.Assert;
import org.openqa.selenium.By;
import webDriver.Driver;

public class StepDefination {
	
	@Given("^I go to Login Page$")
 	public void i_go_to_login_page(){
		Driver.getCurrentDriver().get("https://opensource-demo.orangehrmlive.com/");
 	}
	
	@When("^I login with \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_login_with(String user, String pwd) throws Throwable {
		LoginPage loginPage = new LoginPage();
		loginPage.loginWithvalidCreds(user, pwd);
	}
	
	@Then("^I verify I am on dashboard$")
	public void i_verify_I_am_on_dashboard() throws Throwable {
		Assert.assertTrue("User is not on dashboard", Driver.getCurrentDriver().getCurrentUrl().contains("https://opensource-demo.orangehrmlive.com/index.php/dashboard"));
	}
	
	@When("^I LogOut$")
	public void i_LogOut() throws Throwable {
		Driver.getCurrentDriver().findElement(By.cssSelector("a#welcome")).click();
		Driver.getCurrentDriver().findElement(By.partialLinkText("Logout")).click();
	}
	
	@Then("^I am on Login Page$")
 	public void i_am_on_login_page(){
		Assert.assertTrue("User is not on login page", Driver.getCurrentDriver().getCurrentUrl().contains("https://opensource-demo.orangehrmlive.com/index.php/auth/login"));
 	}
}
