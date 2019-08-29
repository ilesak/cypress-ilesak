import {getProductDataFromAPI} from "../../support/getDataFromAPI"

it('First approach', function () {
    cy.request({
        method: 'get',
        url: 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1566902029',

    }).then((response => {
        cy.log("Quantity of products: " + (response.body.products.length));
        console.log(response.body.products[0])
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

