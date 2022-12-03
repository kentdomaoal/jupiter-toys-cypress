import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    constructor(){
        super();
        this.navigateTo('Cart');
    }

    getPrice(name){
        return cy.contains('td', name)
            .next().invoke('text')
            .then((price) => { return price.replace('$', '') })
            .then(parseFloat)
            .as('price');
    }

    getSubtotal(name, subTotalArray){
        return cy.contains('td', name)
            .next().next().next()
            .invoke('text')
            .then((subtotal) => { return subtotal.replace('$', '') })
            .then(parseFloat)
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
            .then((total) => { return total.replace('Total: ', '') })
            .then(parseFloat);
    }

    sum(subTotalsArray){
        let totalAmount = subTotalsArray.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
        
        return totalAmount;
    }
}