class currencyConvertPage {
    open() {
        cy.visit('https://www.xe.com/currencyconverter/');
    }

    get fromDropdownArrow() {
        return cy.get('.dropdown-arrowDown')
            .first()
    }

    get toDropdownArrow() {
        return cy.get('.dropdown-arrowDown')
            .last()
    }

    get fromValue() {
        return cy.get('input[aria-label="Currency to convert from"]');
    }

    get toValue() {
        return cy.get('input[aria-label="Currency to convert to"]');
    }

    get scrollableContainer() {
        return cy.get('.Xveyb');

    }

    get convertButton() {
        return cy.get("button[aria-label='Convert'");
    }

    performConvert(fromCurrency, toCurrency) {

        this.fromDropdownArrow.should('be.visible');
        this.fromDropdownArrow.click();
        this.scrollableContainer.scrollIntoView({duration: 2000});
        this.fromValue.type(`${fromCurrency}{enter}`);
        this.scrollableContainer.scrollIntoView({duration: 2000});
        this.toDropdownArrow.click();
        this.scrollableContainer.scrollIntoView({duration: 2000});
        this.toValue.type(`${toCurrency}{enter}`);
        this.scrollableContainer.scrollIntoView({duration: 2000});
        this.convertButton.click();
    }
}

export default new currencyConvertPage()

