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
        cy.request({
            method: 'get',
            url: 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1566902029',
        }).then(response => {
            cy.writeFile('cypress/fixtures/products.json', response.body)
        });
    });
    it('should ', function () {
        cy.fixture('products').then((products) => {
            cy.log("Quantity of products: " + (products.products.length));
            console.log(products.products[0]);
        });
    });
});

