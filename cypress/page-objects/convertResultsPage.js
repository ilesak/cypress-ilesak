class convertResultsPage {
    get rateResult() {
        return cy.get(".converterresult-toAmount")
            .invoke('text')
            .then(currencyRate => {
                return currencyRate
            })
    }
}

export default new convertResultsPage()