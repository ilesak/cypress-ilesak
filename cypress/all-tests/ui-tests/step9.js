import  Chance from 'chance'
import convertResultsPage from "../../page-objects/convertResultsPage"
import currencyConvertPage from "../../page-objects/currencyConvertPage"

describe ('UI testes',() =>{
    before(() => {
        cy.fixture('currency').then(data =>{
            cy.wrap(data).as('currencyData')
        })
    });

    it('Convert process ', () => {
        cy.get('@currencyData').then((currencyData) => {
        cy.log("GIVEN User is at XE Currency Converter Page");
        currencyConvertPage.open();

        cy.log("WHEN User performs convert");
        currencyConvertPage.performConvert(currencyData.base, currencyData.shortName);

        cy.log("THEN User get results");
        convertResultsPage.rateResult.then(currencyRate => {
            let convertToNumberRate = parseFloat(currencyData.rate);
            console.log(convertToNumberRate);
            let convertToNumberCurrency = parseFloat(currencyRate);
           expect(convertToNumberCurrency).to.be.closeTo(convertToNumberRate, 0.1)
        })
        });
    });
});
