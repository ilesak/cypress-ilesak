import {getProductDataFromAPI} from "../../support/getDataFromAPI"

it('First approach', function () {
    getProductDataFromAPI().as("productList")
        .then((response => {
            cy.log("Quantity of products: " + (response.products.length));
            console.log(response.products[0])
        }));
});


describe('Second approach', () => {
    before(() => {
        getProductDataFromAPI().as("productList")
    });

    it('should ', function () {
        cy.get('@productList').then((productList) => {
            cy.log("Quantity of products: " + (productList.products.length));
            console.log(productList.products[0]);
        });
    });
});

