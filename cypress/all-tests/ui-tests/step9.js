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

            //console.log(currencyParametersArr.length);
            let randomValue = chance.integer({min: 1, max: currencyData.rates.length});
            //console.log(currencyData.rates[randomValue].shortName);

            cy.log("GIVEN User is at XE Currency Converter Page");
            currencyConvertPage.open();

            cy.log("WHEN User performs convert");
            currencyConvertPage.performConvert(currencyData.base, currencyData.rates[randomValue].shortName);

            cy.log("THEN User get results");
            convertResultsPage.rateResult.then(currencyRate => {
            let convertToNumberRate = parseFloat(currencyData.rates[randomValue].rate);
            console.log(currencyRate);
            let convertToNumberCurrency = parseFloat(currencyRate);
           expect(convertToNumberCurrency).to.be.closeTo(convertToNumberRate, 0.1)
        })
        });
    });
});
