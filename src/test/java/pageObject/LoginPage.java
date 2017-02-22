package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import webDriver.Driver;

public class LoginPage {

	static WebDriver driver = Driver.getCurrentDriver();
	
	@FindBy(name = "txtUsername")
	private WebElement userName;
	
	@FindBy(name = "txtPassword")
	private WebElement password;
	
	@FindBy(name = "Submit")
	private WebElement 	loginButton;

	public LoginPage(){
		PageFactory.initElements(driver, this);
	}
	
	public void loginWithvalidCreds(String user, String pwd) {
		userName.sendKeys(user);
		password.sendKeys(pwd);
		loginButton.click();
	}
}
