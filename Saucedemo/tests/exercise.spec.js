import { test, expect } from '@playwright/test';
import { login } from '../pages/login.js';
import { product} from '../pages/product.js';
import {navBar} from '../pages/navbar.js';
import {cart} from'../pages/cart.js';


test('exercise 1', async ({ page }) => {
    const Login = new login(page);
    const Product = new product(page);
    const NavBar = new navBar(page);
    const Cart = new cart(page);


    await Login.navigateAndLogin('standard_user', 'secret_sauce');
    await Product.validateLogin();
   var productDetails= await Product.getProductDetails();
    await Product.addFirstProductToCart();
    await Product.gotoCart();
    await Cart.validateCart(productDetails);
    await NavBar.Logout();

});