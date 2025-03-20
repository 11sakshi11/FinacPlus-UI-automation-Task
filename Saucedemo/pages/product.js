import { expect } from '@playwright/test';
export class product {
    constructor(page) {
        this.page = page;
        this.productName = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
        this.productPrice = page.locator("//div[normalize-space()='$29.99']");
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.appLogo = page.locator("//div[@class='app_logo']");
        this.navBarMenu = page.locator("//button[normalize-space()='Open Menu']");
        this.productCart = page.locator("//div[@id='shopping_cart_container']");
        this.productLabel = page.locator("//div[@class='product_label']");
        this.productDescription = page.locator("//div[contains(text(),'carry.allTheThings()')]");
    } 

      async validateLogin(){
        await expect(this.appLogo).toBeVisible();
        await expect(this.navBarMenu).toBeVisible();
        await expect(this.productCart).toBeVisible();
        
      }
         
        async addFirstProductToCart(){
          await expect(this.productName).toBeVisible();
          await expect(this.productPrice).toBeVisible();
          await expect(this.addToCartButton).toBeVisible();
          await this.addToCartButton.click();

        }     
        
        async getProductDetails(){
          await expect(this.productName).toBeVisible();
          await expect(this.productPrice).toBeVisible();
          await expect(this.addToCartButton).toBeVisible();
           var productDescription=await this.productDescription.textContent();
           var productName=await this.productName.textContent();
           var productPrice=await this.productPrice.textContent();
           return [productDescription, productName, productPrice];
        }

        async gotoCart(){
          await expect(this.productCart).toBeVisible();
          await this.productCart.click();
        }
        

        
    
}