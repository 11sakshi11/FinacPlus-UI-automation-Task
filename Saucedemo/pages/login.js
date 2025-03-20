import { expect } from '@playwright/test';
 export class login {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("//input[@id='user-name']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//input[@id='login-button']");
    }
    async navigateAndLogin(username , password){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.userName).toBeVisible();
        await this.userName.fill(username);
        await expect(this.password).toBeVisible();
        await this.password.fill(password);
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();

        
    }

}

