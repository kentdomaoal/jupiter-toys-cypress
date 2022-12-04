import { BasePage } from "./BasePage";

export class ShopPage extends BasePage {

    constructor(){
        super();
        this.navigateTo('Shop');
    }

    getProductPrices(products){
        let productPriceMap = new Map();

        products.forEach(product => {
            // Get the Price of the product and store in a map
            cy.contains('.product-title', product.name)
                .siblings('p')
                .children('.product-price')
                .invoke('text')
                .then((price) => {
                    let productPrice = parseFloat(price.replace('$', ''))
                    return productPriceMap.set(product.name, productPrice)
                })
                .as('productPriceMap');
        })
    }

    buyProduct(name, quantity){
        for (let i = 1; i <= quantity; i++) {
            // buy the product
            cy.contains('.product-title', name)
                .siblings('p')
                .children('.btn').contains('Buy')
                .click();
        }
    }

    buyProducts(products){
        products.forEach(product => {
            this.buyProduct(product.name, product.quantity);
        });
    }

    buy(shoppingList){
        this.getProductPrices(shoppingList.products);
        this.buyProducts(shoppingList.products);
    }

}