class AddProductToCart {
    getBuyButton(){
        return cy.get('.hidden-xs button[data-cta-target-url="/config/smart_light_bundles"]')
    }

    performAddingToCart(){
        this.getBuyButton().click()
    }
}

export default new AddProductToCart()