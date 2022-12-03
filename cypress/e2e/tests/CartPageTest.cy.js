/// <reference types="cypress" />

import { Utility } from "../../support/utility";
import { CartPage } from "../pages/CartPage";
import { ShopPage } from "../pages/ShopPage";

describe('Jupiter Toys Cart Page Tests', () => {

    beforeEach(() => {
        // Visit baseURL at the start of all tests.
        // Already configured in cypress.config.js
        cy.visit("/");
    })

    before(() => {
        // read test data
        let util = new Utility();
        cy.fixture(util.getFilename('shoppingList')).as('shoppingList');
    })

    it('Buys Products and validate prices, subtotal, total in Cart Page', function () {
        
        // By instantiating ShopPage object it will navigate to Shop Page
        // See ShopPage constructor
        new ShopPage().buy(this.shoppingList) // Buy based on shopping list
        
        // Go to Cart page
        let cartPage = new CartPage();
        
        // Validate subtotal for each product
        let subTotalArray = [];
        let products = this.shoppingList.products;
        products.forEach(product => {
            cartPage.getPrice(product.name); // Get Price
            cartPage.getSubtotal(product.name, subTotalArray); // Get Subtotal

            cy.get('@subtotal').then((subtotal) => {
                cy.get('@price').then((price) => { 
                    expect(subtotal).to.equals(price * product.quantity);
                })
            });
        });

        // Validate price for each product
        // comparing the price from Shop Page to Cart Page
        products.forEach(product => {
            cartPage.getPrice(product.name).then((cartPagePrice)=>{  // Cart Page Price
                cy.get('@productPriceMap').then((productPriceMap) => { 
                    let shopPagePrice = productPriceMap.get(product.name) // Shop Page Price
                    expect(shopPagePrice).to.equals(cartPagePrice);
                })
            });
        });
        
        // Validate total
        cartPage.getTotal().then((total) => {
            cy.get('@subTotals').then((subTotals)=>{ 
                expect(total).to.equals(cartPage.sum(subTotals));
            })
        }) 
    })

})