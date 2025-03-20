import { expect } from '@playwright/test';
export class navBar {
    constructor(page) {
        this.page = page;
        this.navBarMenu = page.locator("//button[normalize-space()='Open Menu']");
        this.allItems = page.locator("//a[@id='inventory_sidebar_link']");
        this.about = page.locator("//a[@id='about_sidebar_link']");
        this.resetAppState= page.locator("//a[@id='reset_sidebar_link']");
        this.logout = page.locator("//a[@id='logout_sidebar_link']");
    }

    async Logout(){
        await expect(this.navBarMenu).toBeVisible();
        await this.navBarMenu.click();
        await expect(this.allItems).toBeVisible();
        await expect(this.about).toBeVisible();
        await expect(this.resetAppState).toBeVisible();
        await expect(this.logout).toBeVisible();
        await this.logout.click();
    }
}

