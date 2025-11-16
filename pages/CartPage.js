exports.CartPage =
class CartPage {
    constructor(page){
        this.page = page;
        this.cartProductName = "[data-test='inventory-item-name']";
        this.sideBar = '#react-burger-menu-btn';
        this.logoutBtn = "[data-test='logout-sidebar-link']";
    }

    async getCartProductName(){
        return await this.page.locator(this.cartProductName).innerText();
    }

    async logout(){
        await this.page.click(this.sideBar);
        await this.page.click(this.logoutBtn);
    }
}