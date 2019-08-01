import Chance from 'chance'
import {isSuperset, union, intersection, difference} from "../utils/helper"

it('Execution of Steps 1-5 ', function () {
    //объявление набора значений при создании
    let currencySet = new Set(["RUB", "BYN", "EUR", "CNY"]);
    let randomValue;
    let randomMaxValue;

    //declaration of empty set
    // let currencySet = new Set();

    currencySet.forEach((currency) => {
        cy.log(currency);
    });

    //adding items
    //currencySet.add("USD");//add existing item
    currencySet.add("CHF").add("CAD");//new items

    randomMaxValue = currencySet.size;

    currencySet.forEach((currency) => {
        cy.log(currency);
    });

    cy.log("Set has USD value: " + currencySet.has("USD"));

    let currencyArr = Array.from(currencySet);//converting Set to Array

    //Given an array, pick a random element and return it
    cy.log("One random value: " + chance.pickone(currencyArr)); //=> 'delta'

    randomValue = chance.integer({min: 1, max: randomMaxValue});
    cy.log("Several random values: " + chance.pickset(currencyArr, randomValue));


});

it('Execution of Step 6 ', function () {
    let setDollar = new Set(["USD", "AUD", "CAD", "SGD"]),
        setFranc = new Set(["CDF", "CHF", "GNF", "RWF"]),
        setPeso = new Set(["COP", "CUC", "CUP"]),
        setPound = new Set(["GBP", "GGP", "GIP", "FKP", "LBP"]),
        setMixed = new Set(["RUB", "BYN", "EUR", "CNY", "CHF", "CAD", "USD", "GBP", "CUP", "AUD", "SGD"]);

    console.log(isSuperset(setMixed, setDollar));
    console.log(union(setPeso, setFranc));
    console.log(intersection(setMixed, setPound));
    console.log(difference(setMixed, setDollar));
});

it.only('Execution of Step 7 ', function () {
    let currencyParameters = [
        {shortName: "BYN", rusName: "Белорусский рубль", rateToUsd: "20"},
        {shortName: "USD", rusName: "Американский доллар", rateToUsd: "1"},
        {shortName: "RUB", rusName: "Российский рубль", rateToUsd: "60"}
    ]


    currencyParameters.forEach((currency) => {
        if (currency.shortName === "BYN") {
        }
        console.log(currency.rusName, currency.rateToUsd);
    });
    let currencyParametersArr = Array.from(currencyParameters);//converting Set to Array

    let result = currencyParametersArr.filter(currency => currency.shortName === "BYN");
    console.log(result);
});
