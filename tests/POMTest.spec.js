import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('test', async({page})=>{
    //lOGIN
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('visual_user', 'secret_sauce');

    //PRODUCT
    const productPage = new ProductPage(page);
    const expProductName = await productPage.getProductName();
    // console.log(expProductName);
    await productPage.addToCart();
    await productPage.goToCart();

    //CART
    const cartPage = new CartPage(page);
    const expCartProductName = await cartPage.getCartProductName();
    // console.log(expCartProductName);
    expect(expCartProductName.trim()).toBe(expProductName.trim());

    await cartPage.logout();
    
});