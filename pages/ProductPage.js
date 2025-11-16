exports.ProductPage = 
class ProductPage {
    constructor(page) {
        this.page = page;
        this.productName = "[data-test='inventory-item-name']";
        this.addToCartBtn = "[data-test='add-to-cart-sauce-labs-backpack']";
        this.cart = "[data-test='shopping-cart-link']";
    }

    async getProductName() {
        return await this.page.locator(this.productName).first().innerText();
    }

    async addToCart() {
        await this.page.click(this.addToCartBtn);
    }

    async goToCart() {
        await this.page.click(this.cart);
    }
}