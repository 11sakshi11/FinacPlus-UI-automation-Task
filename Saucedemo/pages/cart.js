import { expect } from '@playwright/test';

export class  cart {
    constructor(page) {
        this.page = page;
        this.quantity = page.locator("//div[@class='cart_quantity_label']");
        this.productDescription=page.locator("//div[contains(text(),'carry.allTheThings()')]");
        this.productName=page.locator("//div[normalize-space()='Sauce Labs Backpack']");
        this.productPrice=page.locator("//div[normalize-space()='$29.99']")
        this.checkOut = page.locator("//a[@class='btn_action checkout_button']");
        this.continueShopping = page.locator("//a[@class='btn_secondary']");
        this.cartItem = page.locator("//div[@class='inventory_item_name']");

    }
     
    

    async validateCart(productDetails) {
        await expect(this.productName).toBeVisible();
        await expect(this.productDescription).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        var description =await this.productDescription.textContent();
        var productName  =await this.productName.textContent();
        var productprice =await this.productPrice.textContent(); 
        await expect(description).toContain(productDetails[0]);
        await expect(productName).toContain(productDetails[1]);
        await expect(productprice).toContain(productDetails[2]);
    }
}