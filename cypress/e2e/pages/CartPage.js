import { BasePage } from "./BasePage";
import { Utility } from "../../support/utility";

export class CartPage extends BasePage {

    constructor(){
        super();
        this.navigateTo('Cart');
    }

    getPrice(name){
        return cy.contains('td', name)
            .next().invoke('text')
            .then((price) => { return parseFloat(price.match(Utility.getRegexFloat())) })
            .as('price');
    }

    getSubtotal(name, subTotalArray){
        return cy.contains('td', name)
            .next().next().next()
            .invoke('text')
            .then((subtotal) => { return parseFloat(subtotal.match(Utility.getRegexFloat())) })
            .as('subtotal')

            //store subtotal into array
            .then((subtotal) => {
                subTotalArray.push(subtotal)
                return subTotalArray;
            })
            .as('subTotals');
    }

    getTotal(){
        return cy.get('.total')
            .invoke('text')
            .then((total) => { return parseFloat(total.match(Utility.getRegexFloat())) })
    }

    sum(subTotalsArray){
        let totalAmount = subTotalsArray.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
        
        return totalAmount;
    }
}